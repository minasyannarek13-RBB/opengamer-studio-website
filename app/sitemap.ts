import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const routes = ["/", "/services", "/games", "/technology", "/about", "/contact", "/privacy-policy", "/terms-of-use", "/cookie-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8
  }));
}
