import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy | OpenGamer Studio",
  description: "OpenGamer cookie policy page pending legal review.",
  alternates: { canonical: "/cookie-policy" }
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      sections={[
        ["Current Cookie Use", "This launch version does not add third-party tracking scripts in the Next.js project."],
        ["Functional Cookies", "Future functional cookies may be used for consent, preferences or form protection if implemented."],
        ["Analytics", "Analytics tooling is pending owner and legal approval."],
        ["Review Required", "Final cookie categories, retention periods and provider details are pending legal review."]
      ]}
    />
  );
}

