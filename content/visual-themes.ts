export type PageAtmosphereVariant =
  | "studio"
  | "games"
  | "solutions"
  | "technology"
  | "company"
  | "contact"
  | "elementals"
  | "lc-app";

export const pageAtmospheres: Record<PageAtmosphereVariant, { image?: string; accentPrimary: string; accentSecondary?: string; pattern: "grid" | "mist" | "particles" | "rays" }> = {
  studio: { accentPrimary: "#2ee6a6", accentSecondary: "#7567f8", pattern: "grid" },
  games: { image: "/assets/games/deep-dive/artwork.webp", accentPrimary: "#5d9cff", accentSecondary: "#dca45f", pattern: "particles" },
  solutions: { image: "/assets/games/forest-fortune/artwork.webp", accentPrimary: "#2ee6a6", accentSecondary: "#7567f8", pattern: "grid" },
  technology: { image: "/assets/projects/lc-app/optimized/lc-app-desktop-experience.webp", accentPrimary: "#6ccfde", accentSecondary: "#2ee6a6", pattern: "grid" },
  company: { image: "/assets/projects/elementals/expositions/nexus-stage.webp", accentPrimary: "#2ee6a6", accentSecondary: "#5d9cff", pattern: "rays" },
  contact: { accentPrimary: "#2ee6a6", accentSecondary: "#5d9cff", pattern: "grid" },
  elementals: { image: "/assets/projects/elementals/elementals-page-background.webp", accentPrimary: "#dca45f", accentSecondary: "#6ccfde", pattern: "mist" },
  "lc-app": { image: "/assets/projects/lc-app/optimized/lc-app-mobile-community.webp", accentPrimary: "#6ccfde", accentSecondary: "#2ee6a6", pattern: "particles" }
};

