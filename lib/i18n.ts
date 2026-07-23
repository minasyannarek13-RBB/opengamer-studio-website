export type Locale = "en" | "ru" | "hy" | "es" | "pt";

export const locales: Locale[] = ["en", "ru", "hy", "es", "pt"];
export const localizedLocales: Locale[] = ["ru", "hy", "es", "pt"];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  hy: "HY",
  es: "ES",
  pt: "PT"
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isLocalizedLocale(value: string): value is Locale {
  return localizedLocales.includes(value as Locale);
}
