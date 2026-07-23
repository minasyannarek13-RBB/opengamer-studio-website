export const SUPPORTED_LOCALES = ["en", "ru", "hy", "es", "pt"] as const;
export const PUBLIC_LOCALES = ["en"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];
export type PublicLocale = (typeof PUBLIC_LOCALES)[number];

export const locales: Locale[] = [...SUPPORTED_LOCALES];
export const publicLocales: PublicLocale[] = [...PUBLIC_LOCALES];
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
