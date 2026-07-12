import type { Locale } from "@/lib/i18n";

export type RouteItem = {
  path: string;
  nav: boolean;
  label: Record<Locale, string>;
};

export const routes: RouteItem[] = [
  { path: "/", nav: true, label: { en: "Home", ru: "Главная", es: "Inicio" } },
  { path: "/services", nav: true, label: { en: "Services", ru: "Услуги", es: "Servicios" } },
  { path: "/games", nav: true, label: { en: "Games", ru: "Игры", es: "Juegos" } },
  { path: "/technology", nav: true, label: { en: "Technology", ru: "Технологии", es: "Tecnologia" } },
  { path: "/about", nav: true, label: { en: "About", ru: "О компании", es: "Empresa" } },
  { path: "/contact", nav: true, label: { en: "Contact", ru: "Контакты", es: "Contacto" } }
];

export const navRoutes = routes.filter((route) => route.nav);

export function getLocalizedPath(locale: Locale, path: string): string {
  if (locale === "en") {
    return path;
  }
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
