import type { MetadataRoute } from "next";
import { isIndexableProduction, siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexableProduction) {
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
