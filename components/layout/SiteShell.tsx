import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Locale } from "@/lib/i18n";

const skipLabel: Record<Locale, string> = {
  en: "Skip to content",
  ru: "Перейти к содержимому",
  hy: "Անցնել բովանդակությանը",
  es: "Saltar al contenido",
  pt: "Ir para o conteúdo"
};

export function SiteShell({ children, locale = "en" }: { children: ReactNode; locale?: Locale }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-50 rounded-full bg-emerald px-4 py-2 text-sm font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {skipLabel[locale]}
      </a>
      <Header locale={locale} />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
