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

  return NextResponse.json({ message: "Request received. OpenGamer will review the project details." });
}
