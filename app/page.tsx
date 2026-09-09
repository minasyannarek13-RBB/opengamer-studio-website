import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { ManualHero } from "@/components/home/ManualHero";
import { GameProofRail } from "@/components/home/GameProofRail";
import { ManualHomepageBody } from "@/components/home/ManualHomepageBody";
import { homepageCopy } from "@/content/studioHomepage";

const copy = homepageCopy.en;
const socialPreview = {
  url: "/assets/brand/opengamer-og.png",
  width: 1200,
  height: 630,
  alt: "OpenGamer Studio"
};

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: copy.meta.ogTitle,
    description: copy.meta.ogDescription,
    url: "/",
    siteName: "OpenGamer Studio",
    type: "website",
    locale: "en",
    images: [socialPreview]
  },
  twitter: {
    card: "summary_large_image",
    title: copy.meta.ogTitle,
    description: copy.meta.ogDescription,
    images: [socialPreview.url]
  }
};

export default function HomePage() {
  return (
    <SiteShell locale="en">
      <ManualHero />
      <GameProofRail />
      <ManualHomepageBody />
    </SiteShell>
  );
}
