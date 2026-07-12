import type { Metadata } from "next";
import type { Locale, PageContent } from "@/content/types";
import { locales } from "@/lib/i18n";
import { getLocalizedPath, getRoute } from "@/lib/routes";
import { siteUrl } from "@/lib/site";

export function buildMetadata(content: PageContent, locale: Locale): Metadata {
  const route = getRoute(content.key);
  const path = getLocalizedPath(locale, route.path);
  const canonical = `${siteUrl}${path}`;
  const languages = Object.fromEntries(
    locales.map((item) => [item, `${siteUrl}${getLocalizedPath(item, route.path)}`])
  );

  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: content.seo.ogTitle,
      description: content.seo.ogDescription,
      url: canonical,
      siteName: "OpenGamer Studio",
      type: "website",
      locale
    }
  };
}
