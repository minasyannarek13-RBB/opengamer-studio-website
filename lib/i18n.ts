export type Locale = "en" | "ru" | "es";

export const locales: Locale[] = ["en", "ru", "es"];
export const localizedLocales: Locale[] = ["ru", "es"];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isLocalizedLocale(value: string): value is Locale {
  return localizedLocales.includes(value as Locale);
}
