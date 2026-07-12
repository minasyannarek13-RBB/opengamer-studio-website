export type Locale = "en" | "ru" | "es";

export type PageKey =
  | "home"
  | "studios"
  | "slotStudio"
  | "liveCasinoStudio"
  | "engineering"
  | "capabilities"
  | "portfolio"
  | "technology"
  | "about"
  | "contact";

export type SeoFields = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
};

export type PageContent = {
  key: PageKey;
  eyebrow: string;
  h1: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  highlights: string[];
  cards: string[];
  seo: SeoFields;
};
