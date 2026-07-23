import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { StudioHomepage } from "@/components/home/StudioHomepage";
import { homepageCopy } from "@/content/studioHomepage";
import { locales } from "@/lib/i18n";
import { getLocalizedPath } from "@/lib/routes";

const copy = homepageCopy.en;

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: {
    canonical: "/",
    languages: Object.fromEntries(locales.map((locale) => [locale, getLocalizedPath(locale, "/")]))
  },
  openGraph: {
    title: copy.meta.ogTitle,
    description: copy.meta.ogDescription,
    url: "/",
    siteName: "OpenGamer Studio",
    type: "website",
    locale: "en"
  },
  twitter: {
    card: "summary_large_image",
    title: copy.meta.ogTitle,
    description: copy.meta.ogDescription
  }
};

export default function HomePage() {
  return (
    <SiteShell locale="en">
      <StudioHomepage locale="en" />
    </SiteShell>
  );
}
