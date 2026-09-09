import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { ManualHero } from "@/components/home/ManualHero";
import { ManualHomepageBody } from "@/components/home/ManualHomepageBody";

const meta = {
  title: "OpenGamer Studio | iGaming Development Studio",
  description: "OpenGamer creates games, gaming products, technology and complete iGaming experiences for operators, aggregators, brands and providers.",
  ogTitle: "OpenGamer Studio | Games, Products and iGaming Technology",
  ogDescription: "A multi-product iGaming development studio for games, technology, integrations and original product concepts."
};

const socialPreview = {
  url: "/assets/brand/opengamer-og.png",
  width: 1200,
  height: 630,
  alt: "OpenGamer Studio"
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: meta.ogTitle,
    description: meta.ogDescription,
    url: "/",
    siteName: "OpenGamer Studio",
    type: "website",
    locale: "en",
    images: [socialPreview]
  },
  twitter: {
    card: "summary_large_image",
    title: meta.ogTitle,
    description: meta.ogDescription,
    images: [socialPreview.url]
  }
};

export default function HomePage() {
  return (
    <SiteShell locale="en">
      <ManualHero />
      <ManualHomepageBody />
    </SiteShell>
  );
}
