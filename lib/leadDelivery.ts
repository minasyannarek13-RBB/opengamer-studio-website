export type LeadPayload = {
  fullName: string;
  company: string;
  email: string;
  jobTitle: string;
  companyType: string;
  serviceInterest: string;
  projectDescription: string;
  consent: string;
  website?: string;
  preferredContactMethod?: string;
  phone?: string;
  projectStage?: string;
  expectedLaunch?: string;
  numberOfGames?: string;
  existingPlatform?: string;
  targetMarkets?: string;
  requiredIntegration?: string;
  budgetRange?: string;
  sourcePage?: string;
  contextParameter?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
};

type DeliveryResult = {
  ok: boolean;
  message?: string;
};

type ContactDeliveryConfig = {
  apiKey?: string;
  recipientEmail?: string;
  fromEmail?: string;
  replyToDomain?: string;
};

export async function deliverLead(payload: LeadPayload): Promise<DeliveryResult> {
  return deliverToResend(payload, getContactDeliveryConfig());
}

export function getContactDeliveryConfig(): ContactDeliveryConfig {
  return {
    apiKey: process.env.RESEND_API_KEY?.trim(),
    recipientEmail: process.env.CONTACT_RECIPIENT_EMAIL?.trim(),
    fromEmail: process.env.CONTACT_FROM_EMAIL?.trim(),
    replyToDomain: process.env.CONTACT_REPLY_TO_DOMAIN?.trim().toLowerCase()
  };
}

export async function deliverToResend(
  payload: LeadPayload,
  config: ContactDeliveryConfig = getContactDeliveryConfig()
): Promise<DeliveryResult> {
  if (!config.apiKey || !config.recipientEmail || !config.fromEmail) {
    return {
      ok: false,
      message: "Contact delivery is not configured yet."
    };
  }

  const email = buildResendEmail(payload, config);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(email)
  });

  if (!response.ok) {
    return {
      ok: false,
      message: "Lead delivery provider rejected the request."
    };
  }

  return { ok: true };
}

export function buildResendEmail(payload: LeadPayload, config: ContactDeliveryConfig = getContactDeliveryConfig()) {
  return {
    from: config.fromEmail,
    to: config.recipientEmail,
    reply_to: getReplyTo(payload.email, config.replyToDomain),
    subject: `OpenGamer Enquiry — ${payload.serviceInterest} — ${payload.company || payload.fullName}`,
    text: formatLead(payload, new Date().toISOString())
  };
}

function getReplyTo(email: string, allowedDomain?: string) {
  if (!allowedDomain) {
    return email;
  }

  const domain = email.split("@")[1]?.toLowerCase();
  return domain === allowedDomain ? email : undefined;
}

function formatLead(payload: LeadPayload, timestamp: string) {
  return [
    `Full Name: ${payload.fullName}`,
    `Work Email: ${payload.email}`,
    `Company: ${payload.company}`,
    `Primary Area: ${payload.serviceInterest}`,
    `Project Stage: ${payload.projectStage || "Not provided"}`,
    `Reference Link: ${payload.website || "Not provided"}`,
    `Source Page: ${payload.sourcePage || "Not provided"}`,
    `Context Parameter: ${payload.contextParameter || "Not provided"}`,
    `Referrer: ${payload.referrer || "Not provided"}`,
    `UTM Source: ${payload.utmSource || "Not provided"}`,
    `UTM Medium: ${payload.utmMedium || "Not provided"}`,
    `UTM Campaign: ${payload.utmCampaign || "Not provided"}`,
    `UTM Content: ${payload.utmContent || "Not provided"}`,
    `UTM Term: ${payload.utmTerm || "Not provided"}`,
    `Timestamp: ${timestamp}`,
    "",
    `Job Title: ${payload.jobTitle}`,
    `Company Type: ${payload.companyType}`,
    `Preferred Contact Method: ${payload.preferredContactMethod || "Not provided"}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Expected Launch: ${payload.expectedLaunch || "Not provided"}`,
    `Number of Games: ${payload.numberOfGames || "Not provided"}`,
    `Existing Platform: ${payload.existingPlatform || "Not provided"}`,
    `Target Markets: ${payload.targetMarkets || "Not provided"}`,
    `Required Integration: ${payload.requiredIntegration || "Not provided"}`,
    `Budget Range: ${payload.budgetRange || "Not provided"}`,
    "",
    "Project Context:",
    payload.projectDescription
  ].join("\n");
}
