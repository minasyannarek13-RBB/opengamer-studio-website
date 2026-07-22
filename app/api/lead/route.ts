import { NextResponse } from "next/server";
import { deliverLead, type LeadPayload } from "@/lib/leadDelivery";

const requiredFields = [
  "fullName",
  "company",
  "email",
  "jobTitle",
  "companyType",
  "serviceInterest",
  "projectDescription",
  "consent"
];

const rateWindowMs = 60_000;
const rateLimit = 5;
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

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return NextResponse.json(
      { message: "Please enter a valid business email.", errors: { email: "Enter a valid business email." } },
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
    message: "OpenGamer will review the project information and follow up using the email address provided."
  });
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
