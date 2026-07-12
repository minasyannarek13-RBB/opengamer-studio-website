import type { Locale, PageKey } from "@/content/types";

export type RouteItem = {
  key: PageKey;
  path: string;
  nav: boolean;
  label: Record<Locale, string>;
};

export const routes: RouteItem[] = [
  { key: "home", path: "/", nav: true, label: { en: "Home", ru: "Главная", es: "Inicio" } },
  { key: "studios", path: "/studios", nav: true, label: { en: "Studios", ru: "Студии", es: "Estudios" } },
  { key: "slotStudio", path: "/studios/slot-studio", nav: false, label: { en: "Slot Studio", ru: "Slot Studio", es: "Slot Studio" } },
  { key: "liveCasinoStudio", path: "/studios/live-casino-studio", nav: false, label: { en: "Live Casino Studio", ru: "Live Casino Studio", es: "Live Casino Studio" } },
  { key: "engineering", path: "/studios/engineering", nav: false, label: { en: "Engineering", ru: "Инжиниринг", es: "Ingenieria" } },
  { key: "capabilities", path: "/capabilities", nav: true, label: { en: "Capabilities", ru: "Возможности", es: "Capacidades" } },
  { key: "portfolio", path: "/portfolio", nav: true, label: { en: "Portfolio", ru: "Портфолио", es: "Portfolio" } },
  { key: "technology", path: "/technology", nav: true, label: { en: "Technology", ru: "Технологии", es: "Tecnologia" } },
  { key: "about", path: "/about", nav: true, label: { en: "About", ru: "О компании", es: "Empresa" } },
  { key: "contact", path: "/contact", nav: true, label: { en: "Contact", ru: "Контакты", es: "Contacto" } }
];

export const navRoutes = routes.filter((route) => route.nav);

export function getRoute(key: PageKey): RouteItem {
  const route = routes.find((item) => item.key === key);
  if (!route) {
    throw new Error(`Unknown route: ${key}`);
  }
  return route;
}

export function getLocalizedPath(locale: Locale, path: string): string {
  if (locale === "en") {
    return path;
  }
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
