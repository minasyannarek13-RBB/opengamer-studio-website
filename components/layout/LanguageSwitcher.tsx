"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/types";
import { getLocalizedPath } from "@/lib/routes";

const labels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  es: "ES"
};

function stripLocale(pathname: string): string {
  if (pathname === "/ru" || pathname === "/es") {
    return "/";
  }
  if (pathname.startsWith("/ru/") || pathname.startsWith("/es/")) {
    return pathname.slice(3) || "/";
  }
  return pathname || "/";
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const routePath = stripLocale(pathname);
  const locales: Locale[] = ["en", "ru", "es"];

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1">
      {locales.map((item) => (
        <Link
          key={item}
          href={getLocalizedPath(item, routePath)}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
            item === locale ? "bg-white text-ink" : "text-slate-400 hover:text-white"
          }`}
        >
          {labels[item]}
        </Link>
      ))}
    </div>
  );
}
