import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const isPreviewEnvironment =
    process.env.VERCEL_ENV === "preview" ||
    (Boolean(process.env.VERCEL_URL) && process.env.VERCEL_ENV !== "production") ||
    (Boolean(process.env.NEXT_PUBLIC_SITE_URL) && process.env.NEXT_PUBLIC_SITE_URL !== "https://open-gamer.com");

  if (isPreviewEnvironment) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/"
      },
      sitemap: `${siteUrl}/sitemap.xml`
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
