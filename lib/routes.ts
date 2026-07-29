import type { Locale } from "@/lib/i18n";

export type RouteItem = {
  path: string;
  nav: boolean;
  label: Record<Locale, string>;
};

export const routes: RouteItem[] = [
  { path: "/", nav: true, label: { en: "Home", ru: "Главная", hy: "Գլխավոր", es: "Inicio", pt: "Inicio" } },
  { path: "/games", nav: true, label: { en: "Games", ru: "Игры", hy: "Խաղեր", es: "Juegos", pt: "Jogos" } },
  { path: "/services", nav: true, label: { en: "Solutions", ru: "Решения", hy: "Լուծումներ", es: "Soluciones", pt: "Soluções" } },
  { path: "/portfolio", nav: true, label: { en: "Projects", ru: "Проекты", hy: "Նախագծեր", es: "Proyectos", pt: "Projetos" } },
  { path: "/technology", nav: true, label: { en: "Technology", ru: "Технологии", hy: "Տեխնոլոգիա", es: "Tecnología", pt: "Tecnologia" } },
  { path: "/about", nav: true, label: { en: "Company", ru: "Компания", hy: "Ընկերություն", es: "Empresa", pt: "Empresa" } },
  { path: "/contact", nav: true, label: { en: "Contact", ru: "Контакты", hy: "Կապ", es: "Contacto", pt: "Contato" } }
];

export const navRoutes = routes.filter((route) => route.nav);

export function getLocalizedPath(locale: Locale, path: string): string {
  if (locale === "en") {
    return path;
  }
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function getLocalizedHomePath(locale: Locale, path: string): string {
  if (path === "/") {
    return getLocalizedPath(locale, path);
  }

  const localeReadyPaths = ["/about", "/portfolio", "/technology", "/contact"];
  if (localeReadyPaths.includes(path)) {
    return getLocalizedPath(locale, path);
  }

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
