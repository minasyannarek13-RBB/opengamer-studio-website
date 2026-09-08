import { NextResponse } from "next/server";
import { deliverLead, type LeadPayload } from "@/lib/leadDelivery";

const requiredFields = [
  "fullName",
  "company",
  "email",
  "serviceInterest",
  "projectDescription",
  "consent"
];

const fieldLimits: Record<string, number> = {
  fullName: 120,
  company: 160,
  email: 254,
  jobTitle: 120,
  companyType: 120,
  serviceInterest: 120,
  projectDescription: 5000,
  consent: 16,
  website: 2048,
  preferredContactMethod: 40,
  phone: 40,
  projectStage: 120,
  expectedLaunch: 120,
  numberOfGames: 80,
  existingPlatform: 200,
  targetMarkets: 400,
  requiredIntegration: 500,
  budgetRange: 120,
  sourcePage: 500,
  contextParameter: 2048,
  referrer: 2048,
  utmSource: 200,
  utmMedium: 200,
  utmCampaign: 300,
  utmContent: 300,
  utmTerm: 300,
  website_url: 2048
};

const maxBodyBytes = 64 * 1024;
const rateWindowMs = 60_000;
const rateLimit = 5;
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || "0");
  if (Number.isFinite(contentLength) && contentLength > maxBodyBytes) {
    return NextResponse.json({ message: "The enquiry is too large to submit." }, { status: 413 });
  }

  let rawPayload: unknown;

  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > maxBodyBytes) {
      return NextResponse.json({ message: "The enquiry is too large to submit." }, { status: 413 });
    }
    rawPayload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  if (!rawPayload || typeof rawPayload !== "object" || Array.isArray(rawPayload)) {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const payload = normalizePayload(rawPayload as Record<string, unknown>);

  if (payload.website_url) {
    return NextResponse.json({ message: "Request received." });
  }

  if (isRateLimited(request)) {
    return NextResponse.json({ message: "Too many requests. Please wait and try again." }, { status: 429 });
  }

  const missing = requiredFields.filter((field) => !payload[field]);
  if (missing.length) {
    return NextResponse.json(
      {
        message: "Please complete the required fields.",
        errors: Object.fromEntries(missing.map((field) => [field, "Required"]))
      },
      { status: 400 }
    );
  }

  const oversized = Object.entries(fieldLimits)
    .filter(([field, limit]) => (payload[field]?.length || 0) > limit)
    .map(([field]) => field);
  if (oversized.length) {
    return NextResponse.json(
      {
        message: "Please shorten the highlighted fields.",
        errors: Object.fromEntries(oversized.map((field) => [field, "Too long"]))
      },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return NextResponse.json(
      { message: "Please enter a valid business email.", errors: { email: "Enter a valid business email." } },
      { status: 400 }
    );
  }

  if (payload.preferredContactMethod === "Phone" && !/^\+?[0-9][0-9\s().-]{6,24}$/.test(payload.phone || "")) {
    return NextResponse.json(
      { message: "Please enter a valid phone number.", errors: { phone: "Enter a valid international phone number." } },
      { status: 400 }
    );
  }

  const delivery = await deliverLead(payload as LeadPayload);
  if (!delivery.ok) {
    return NextResponse.json(
      { message: "We couldn't send your enquiry. Please try again shortly." },
      { status: 503 }
    );
  }

  return NextResponse.json({
    message: "Thanks. We received your enquiry and will review the brief."
  });
}

function normalizePayload(payload: Record<string, unknown>) {
  return Object.fromEntries(
    Object.keys(fieldLimits).map((field) => [field, typeof payload[field] === "string" ? payload[field].trim() : ""])
  ) as Record<string, string>;
}

function isRateLimited(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwardedFor || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  const bucket = rateBuckets.get(ip);

  if (!bucket || bucket.resetAt <= now) {
    rateBuckets.set(ip, { count: 1, resetAt: now + rateWindowMs });
    return false;
  }

  bucket.count += 1;
  return bucket.count > rateLimit;
}
