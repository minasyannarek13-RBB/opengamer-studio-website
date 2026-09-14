import type { Locale } from "@/lib/i18n";

export type RouteItem = {
  path: string;
  nav: boolean;
  label: Record<Locale, string>;
};

export const routes: RouteItem[] = [
  { path: "/", nav: true, label: { en: "Home", ru: "Главная", hy: "Գլխավոր", es: "Inicio", pt: "Inicio" } },
  { path: "/games", nav: true, label: { en: "Games", ru: "Игры", hy: "Խաղեր", es: "Juegos", pt: "Jogos" } },
  { path: "/services", nav: true, label: { en: "Services", ru: "Услуги", hy: "Ծառայություններ", es: "Servicios", pt: "Serviços" } },
  { path: "/portfolio", nav: true, label: { en: "Portfolio", ru: "Портфолио", hy: "Պորտֆոլիո", es: "Portafolio", pt: "Portfólio" } },
  { path: "/technology", nav: true, label: { en: "Technology", ru: "Технологии", hy: "Տեխնոլոգիա", es: "Tecnología", pt: "Tecnologia" } },
  { path: "/about", nav: true, label: { en: "Company", ru: "Компания", hy: "Ընկերություն", es: "Empresa", pt: "Empresa" } },
  { path: "/contact", nav: true, label: { en: "Contact", ru: "Контакты", hy: "Կապ", es: "Contacto", pt: "Contato" } }
];

export const navRoutes = routes.filter((route) => route.nav);

/**
 * Localized route files currently exist as compatibility redirects to the
 * canonical English launch pages, including locale-prefixed home routes.
 * Navigation should therefore link directly to canonical destinations instead
 * of manufacturing a needless /:locale redirect hop.
 */
export function getLocalizedHomePath(_locale: Locale, path: string): string {
  return path;
}

export function stripLocaleFromPath(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (!parts.length) {
    return "/";
  }

  const [first, ...rest] = parts;
  if (["ru", "hy", "es", "pt"].includes(first)) {
    return rest.length ? `/${rest.join("/")}` : "/";
  }

  return pathname;
}
