import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | OpenGamer Studio",
  description: "How OpenGamer handles website enquiry data and basic contact information.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        ["Purpose", "This page explains how OpenGamer handles business enquiry information submitted through this website."],
        ["Information Collected", "The contact form may collect name, company, business email, job title, company type, service interest and project details."],
        ["Use of Information", "Information is used to review and respond to business enquiries."],
        ["Retention", "Business enquiry information is retained only as long as needed to review the request, follow up and maintain relevant business records."],
        ["Data Rights", "People who submit an enquiry may contact OpenGamer to request access, correction or deletion of their submitted information where applicable."],
        ["Legal Details", "Legal entity details, data controller details and processor list are pending legal review."],
        ["Contact", "For privacy-related questions, contact mn@open-gamer.com."]
      ]}
    />
  );
}
