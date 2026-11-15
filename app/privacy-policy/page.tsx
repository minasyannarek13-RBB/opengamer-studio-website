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
        ["Information Collected", "Business enquiry and agent application forms may collect name, company, business email, job title, company type, country, Telegram or LinkedIn details, market focus, operator-network size and business experience. Please do not submit player data."],
        ["Use of Information", "Information is used to review and respond to business enquiries or partnership applications, and to assess potential B2B cooperation."],
        ["Legal Details", "Legal entity details, data controller details and processor list are pending legal review."],
        ["Contact", "For privacy-related questions, contact mn@open-gamer.com."]
      ]}
    />
  );
}

