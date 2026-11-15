import { NextResponse } from "next/server";
import { validateAgentApplication } from "@/lib/agentApplication";
import { deliverAgentApplication } from "@/lib/agentApplicationDelivery";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ message: "Expected JSON." }, { status: 415 });
  }

  let input: unknown;
  try {
    const body = await request.text();
    if (body.length > 12000) {
      return NextResponse.json({ message: "Application is too large." }, { status: 413 });
    }
    input = JSON.parse(body);
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return NextResponse.json({ message: "Invalid application." }, { status: 400 });
  }

  // Honeypot field is hidden from humans; silently discard bot submissions.
  const fields = input as Record<string, unknown>;
  if (fields.website_url) {
    return NextResponse.json({ message: "Application received." }, { status: 200 });
  }

  const { data, errors } = validateAgentApplication(input);
  if (!data) {
    return NextResponse.json(
      { message: "Please review the highlighted fields.", errors },
      { status: 400 }
    );
  }

  const delivery = await deliverAgentApplication(data);
  if (!delivery.ok) {
    return NextResponse.json({ message: delivery.message }, { status: 503 });
  }

  return NextResponse.json({
    message: "Application delivered. Our partnerships team will review your details."
  });
}
