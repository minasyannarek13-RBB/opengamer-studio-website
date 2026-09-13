const configuredPublicEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "";
const configuredLinkedInUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || "https://www.linkedin.com/company/opengamer";

function isValidPublicEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidLinkedInUrl(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" && parsed.hostname.replace(/^www\./, "") === "linkedin.com";
  } catch {
    return false;
  }
}

const publicEmail = isValidPublicEmail(configuredPublicEmail) ? configuredPublicEmail : "";

export const company = {
  name: "OpenGamer Studio",
  shortName: "OpenGamer",
  website: "https://open-gamer.com",
  email: publicEmail,
  description:
    "OpenGamer is an iGaming game and product development studio creating original casino games, custom content, Live Casino product concepts and integration-oriented engineering for B2B gaming teams.",
  social: isValidLinkedInUrl(configuredLinkedInUrl) ? [{ label: "LinkedIn", href: configuredLinkedInUrl }] : [],
  leadership: [
    { name: "Hayk", role: "CEO" },
    { name: "Narek", role: "Business Development & Strategy" },
    { name: "Tigran", role: "CTO" },
    { name: "Ara", role: "Head of Front-End" }
  ]
};

export const companyFacts = {
  foundedYear: null,
  headquarters: null,
  legalName: null,
  registrationNumber: null,
  verifiedPartners: [],
  certifications: [],
  approvedPublicEmail: Boolean(publicEmail),
  contentStatus: "business-review-required"
} as const;

export const logoAsset = {
  src: "/assets/brand/opengamer-logo.webp",
  alt: "OpenGamer logo",
  width: 1280,
  height: 306
};
