import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { StudioHomepage } from "@/components/home/StudioHomepage";
import { homepageCopy } from "@/content/studioHomepage";
import { isLocalizedLocale, locales, type Locale } from "@/lib/i18n";
import { getLocalizedPath } from "@/lib/routes";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocalizedLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const copy = homepageCopy[locale];
  const path = getLocalizedPath(locale, "/");

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: {
      canonical: path,
      languages: Object.fromEntries(locales.map((item) => [item, getLocalizedPath(item, "/")]))
    },
    openGraph: {
      title: copy.meta.ogTitle,
      description: copy.meta.ogDescription,
      url: path,
      siteName: "OpenGamer Studio",
      type: "website",
      locale
    },
    twitter: {
      card: "summary_large_image",
      title: copy.meta.ogTitle,
      description: copy.meta.ogDescription
    }
  };
}

export default async function LocalizedHomePage({ params }: LocalePageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocalizedLocale(rawLocale)) {
    notFound();
  }

  return (
    <SiteShell locale={rawLocale}>
      <StudioHomepage locale={rawLocale} />
    </SiteShell>
  );
}
