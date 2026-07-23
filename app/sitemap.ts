import type { MetadataRoute } from "next";
import { games } from "@/content/games";
import { localizedLocales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

const routes = [
  "/",
  "/services",
  "/services/live-casino-development",
  "/games",
  "/portfolio",
  "/portfolio/elementals",
  "/portfolio/lc-app",
  "/technology",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-of-use",
  "/cookie-policy"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const gameRoutes = games.map((game) => `/games/${game.slug}`);
  const localizedHomeRoutes = localizedLocales.map((locale) => `/${locale}`);

  return [...routes, ...localizedHomeRoutes, ...gameRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/games/") ? 0.7 : 0.8
  }));
}
