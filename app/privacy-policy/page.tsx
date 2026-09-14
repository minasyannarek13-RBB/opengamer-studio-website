import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/LegalPage";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Privacy Policy | OpenGamer Studio",
  description: "How OpenGamer handles website enquiry data and basic contact information.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  const contactText = company.email
    ? `For privacy-related questions, contact ${company.email}.`
    : "For privacy-related questions, use the website contact form.";

  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        ["Purpose", "This page explains how OpenGamer handles business enquiry information submitted through this website."],
        ["Information Collected", "The contact form may collect name, company, business email, job title, phone number, company type, service interest, project stage, expected launch, number of games, budget status, target markets, existing platform, required integration, reference link, preferred contact method and project details. The website may also record the enquiry source page, referrer and campaign parameters included in the submitted URL."],
        ["Use of Information", "Information is used to review and respond to business enquiries and may be delivered through an email service provider."],
        ["Retention", "Business enquiry information is retained only as long as needed to review the request, follow up and maintain relevant business records."],
        ["Data Rights", "People who submit an enquiry may contact OpenGamer to request access, correction or deletion of their submitted information where applicable."],
        ["Legal Details", "Legal entity details, data controller details and processor list are pending legal review."],
        ["Contact", contactText]
      ]}
    />
  );
}
