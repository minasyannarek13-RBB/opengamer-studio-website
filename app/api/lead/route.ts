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
  jobTitle: 160,
  companyType: 120,
  serviceInterest: 160,
  projectDescription: 5_000,
  website: 500,
  preferredContactMethod: 40,
  phone: 40,
  projectStage: 120,
  expectedLaunch: 120,
  numberOfGames: 120,
  existingPlatform: 240,
  targetMarkets: 240,
  requiredIntegration: 500,
  budgetRange: 120,
  sourcePage: 500,
  contextParameter: 500,
  referrer: 500,
  utmSource: 200,
  utmMedium: 200,
  utmCampaign: 200,
  utmContent: 200,
  utmTerm: 200
};

const rateWindowMs = 60_000;
const rateLimit = 5;
const maxRateBuckets = 1_000;
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: Request) {
  let payload: Record<string, string>;

  try {
    payload = (await request.json()) as Record<string, string>;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  if (payload.website_url) {
    return NextResponse.json({ message: "Request received." });
  }

  if (isRateLimited(request)) {
    return NextResponse.json({ message: "Too many requests. Please wait and try again." }, { status: 429 });
  }

  payload = Object.fromEntries(Object.entries(payload).map(([key, value]) => [key, typeof value === "string" ? value.trim() : value]));

  const missing = requiredFields.filter((field) => !payload[field]);
  if (missing.length) {
    return NextResponse.json(
      {
        message: "Please complete all required fields.",
        errors: Object.fromEntries(missing.map((field) => [field, "Required"]))
      },
      { status: 400 }
    );
  }

  const tooLong = Object.entries(fieldLimits)
    .filter(([field, limit]) => (payload[field] || "").length > limit)
    .map(([field]) => field);

  if (tooLong.length) {
    return NextResponse.json(
      {
        message: "Please shorten the highlighted fields and try again.",
        errors: Object.fromEntries(tooLong.map((field) => [field, "This field is too long."]))
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
      { message: delivery.message || "Lead delivery is not configured yet." },
      { status: 503 }
    );
  }

  return NextResponse.json({
    message: "Your enquiry has been submitted. The OpenGamer commercial or product team will review the information and contact you regarding the next practical step."
  });
}

function isRateLimited(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwardedFor || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();

  if (rateBuckets.size >= maxRateBuckets) {
    for (const [key, value] of rateBuckets) {
      if (value.resetAt <= now) {
        rateBuckets.delete(key);
      }
    }

    if (rateBuckets.size >= maxRateBuckets) {
      const oldestKey = rateBuckets.keys().next().value as string | undefined;
      if (oldestKey) {
        rateBuckets.delete(oldestKey);
      }
    }
  }

  const bucket = rateBuckets.get(ip);
  if (!bucket || bucket.resetAt <= now) {
    rateBuckets.set(ip, { count: 1, resetAt: now + rateWindowMs });
    return false;
  }

  bucket.count += 1;
  return bucket.count > rateLimit;
}
