import enAbout from "@/content/en/about";
import enCapabilities from "@/content/en/capabilities";
import enContact from "@/content/en/contact";
import enEngineering from "@/content/en/engineering";
import enHome from "@/content/en/home";
import enLiveCasinoStudio from "@/content/en/liveCasinoStudio";
import enPortfolio from "@/content/en/portfolio";
import enSlotStudio from "@/content/en/slotStudio";
import enStudios from "@/content/en/studios";
import enTechnology from "@/content/en/technology";
import esAbout from "@/content/es/about";
import esCapabilities from "@/content/es/capabilities";
import esContact from "@/content/es/contact";
import esEngineering from "@/content/es/engineering";
import esHome from "@/content/es/home";
import esLiveCasinoStudio from "@/content/es/liveCasinoStudio";
import esPortfolio from "@/content/es/portfolio";
import esSlotStudio from "@/content/es/slotStudio";
import esStudios from "@/content/es/studios";
import esTechnology from "@/content/es/technology";
import ruAbout from "@/content/ru/about";
import ruCapabilities from "@/content/ru/capabilities";
import ruContact from "@/content/ru/contact";
import ruEngineering from "@/content/ru/engineering";
import ruHome from "@/content/ru/home";
import ruLiveCasinoStudio from "@/content/ru/liveCasinoStudio";
import ruPortfolio from "@/content/ru/portfolio";
import ruSlotStudio from "@/content/ru/slotStudio";
import ruStudios from "@/content/ru/studios";
import ruTechnology from "@/content/ru/technology";
import type { Locale, PageContent, PageKey } from "@/content/types";

export const locales: Locale[] = ["en", "ru", "es"];
export const localizedLocales: Locale[] = ["ru", "es"];
export const defaultLocale: Locale = "en";

const dictionary: Record<Locale, Record<PageKey, PageContent>> = {
  en: {
    home: enHome,
    studios: enStudios,
    slotStudio: enSlotStudio,
    liveCasinoStudio: enLiveCasinoStudio,
    engineering: enEngineering,
    capabilities: enCapabilities,
    portfolio: enPortfolio,
    technology: enTechnology,
    about: enAbout,
    contact: enContact
  },
  ru: {
    home: ruHome,
    studios: ruStudios,
    slotStudio: ruSlotStudio,
    liveCasinoStudio: ruLiveCasinoStudio,
    engineering: ruEngineering,
    capabilities: ruCapabilities,
    portfolio: ruPortfolio,
    technology: ruTechnology,
    about: ruAbout,
    contact: ruContact
  },
  es: {
    home: esHome,
    studios: esStudios,
    slotStudio: esSlotStudio,
    liveCasinoStudio: esLiveCasinoStudio,
    engineering: esEngineering,
    capabilities: esCapabilities,
    portfolio: esPortfolio,
    technology: esTechnology,
    about: esAbout,
    contact: esContact
  }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isLocalizedLocale(value: string): value is Locale {
  return localizedLocales.includes(value as Locale);
}

export function getPageContent(locale: Locale, key: PageKey): PageContent {
  return dictionary[locale][key];
}
