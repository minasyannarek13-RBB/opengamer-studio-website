import type { PageContent, PageKey } from "./types";

type Input = Omit<PageContent, "seo" | "primaryCta" | "secondaryCta"> & {
  seoTitle?: string;
  seoDescription?: string;
  primaryCta?: string;
  secondaryCta?: string;
};

export function createContentPage(input: Input): PageContent {
  const description = input.seoDescription ?? input.intro;

  return {
    ...input,
    primaryCta: input.primaryCta ?? "View Portfolio",
    secondaryCta: input.secondaryCta ?? "Contact Us",
    seo: {
      title: input.seoTitle ?? `${input.h1} | OpenGamer Studio`,
      description,
      ogTitle: input.seoTitle ?? `${input.h1} | OpenGamer Studio`,
      ogDescription: description
    }
  };
}

export const pageKeys: PageKey[] = [
  "home",
  "studios",
  "slotStudio",
  "liveCasinoStudio",
  "engineering",
  "capabilities",
  "portfolio",
  "technology",
  "about",
  "contact"
];
