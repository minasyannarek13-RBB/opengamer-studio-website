import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | OpenGamer Studio",
  description: "Terms for using the OpenGamer website, portfolio pages and demo links.",
  alternates: { canonical: "/terms-of-use" }
};

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      sections={[
        ["Website Use", "This website provides business information about OpenGamer services, portfolio and technology capabilities."],
        ["Content", "Website content is provided for B2B informational purposes and should be reviewed before use in legal or commercial agreements."],
        ["External Links", "Demo and social links may point to external OpenGamer-managed channels or official public assets."],
        ["Website and Demos", "The website does not provide real-money gambling. Public demo links are for product review and do not represent a regulated gambling service offered through this website."],
        ["No Unconfirmed Claims", "Game metadata, certification details, partner names and commercial terms are shown only when confirmed."],
        ["Legal Details", "Full legal terms and company entity details are pending legal review."]
      ]}
    />
  );
}
