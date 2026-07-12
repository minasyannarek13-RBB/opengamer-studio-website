import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | OpenGamer Studio",
  description: "OpenGamer privacy policy page pending legal review.",
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
        ["Legal Details", "Legal entity details, data controller details and processor list are pending legal review."],
        ["Contact", "For privacy-related questions, contact mn@open-gamer.com."]
      ]}
    />
  );
}

