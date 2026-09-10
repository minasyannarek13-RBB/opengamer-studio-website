import type { MetadataRoute } from "next";
import { catalogueGames } from "@/content/games";
import { siteUrl } from "@/lib/site";

const routes = [
  "/",
  "/services",
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
  const gameRoutes = catalogueGames
    .filter((game) => !game.isVariant)
    .map((game) => `/games/${game.slug}`);

  return [...routes, ...gameRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/games/") ? 0.7 : 0.8
  }));
}
