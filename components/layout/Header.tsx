"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { localeLabels, locales, type Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { logoAsset } from "@/content/company";
import { getLocalizedHomePath, getLocalizedPath, navRoutes, stripLocaleFromPath } from "@/lib/routes";

const ctaLabel: Record<Locale, string> = {
  en: "Discuss a Project",
  ru: "Обсудить проект",
  hy: "Քննարկել նախագիծը",
  es: "Hablar de un proyecto",
  pt: "Discutir um projeto"
};

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const activePath = stripLocaleFromPath(pathname || "/");
  const isActiveRoute = (href: string) => (href === "/" ? activePath === "/" : activePath === href || activePath.startsWith(`${href}/`));

  useEffect(() => {
    if (isOpen) {
      setIsMenuMounted(true);
      return;
    }

    const timeout = window.setTimeout(() => setIsMenuMounted(false), 260);
    return () => window.clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstInteractive = mobileNavRef.current?.querySelector<HTMLElement>("a, button");
    firstInteractive?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      setIsOpen(false);
      menuButtonRef.current?.focus();
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/86 shadow-[0_14px_48px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <Link href={getLocalizedPath(locale, "/")} className="flex items-center gap-3 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
          <Image
            src={logoAsset.src}
            alt={logoAsset.alt}
            width={logoAsset.width}
            height={logoAsset.height}
            priority
            className="h-9 w-auto"
            sizes="142px"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navRoutes.map((route) => (
            <Link
              key={route.path}
              href={getLocalizedHomePath(locale, route.path)}
              aria-current={isActiveRoute(route.path) ? "page" : undefined}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition duration-200 hover:bg-white/[0.055] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 aria-[current=page]:bg-emerald/10 aria-[current=page]:text-emerald"
            >
              {route.label[locale]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.045] p-1 lg:flex" aria-label="Language selector">
            {locales.map((item) => (
              <Link
                key={item}
              href={getLocalizedHomePath(item, activePath)}
                aria-current={item === locale ? "true" : undefined}
                className="min-h-9 rounded-full px-3 py-2 text-xs font-semibold text-slate-400 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 aria-[current=true]:bg-emerald/12 aria-[current=true]:text-emerald"
                hrefLang={item}
              >
                {localeLabels[item]}
              </Link>
            ))}
          </div>
          <Button href={getLocalizedPath(locale, "/contact")} className="hidden sm:inline-flex">
            {ctaLabel[locale]}
          </Button>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.055] text-white transition duration-200 hover:border-emerald/50 hover:bg-white/[0.09] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 active:scale-[0.99] lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            <svg className="menu-signal" data-open={isOpen} viewBox="0 0 20 20" aria-hidden="true">
              <line className="menu-signal__bar menu-signal__bar--left" x1="4" y1="5" x2="4" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line className="menu-signal__bar menu-signal__bar--center" x1="10" y1="3" x2="10" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line className="menu-signal__bar menu-signal__bar--right" x1="16" y1="5" x2="16" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </Container>
      {isMenuMounted ? (
        <nav
          id="mobile-navigation"
          ref={mobileNavRef}
          className="mobile-nav-panel border-t border-white/10 bg-ink/96 shadow-[0_22px_60px_rgba(0,0,0,0.36)] lg:hidden"
          data-state={isOpen ? "open" : "closed"}
          aria-label="Mobile navigation"
          aria-hidden={!isOpen}
        >
          <Container className="grid gap-2 py-4">
            {navRoutes.map((route) => (
              <Link
                key={route.path}
                href={getLocalizedHomePath(locale, route.path)}
                aria-current={isActiveRoute(route.path) ? "page" : undefined}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 aria-[current=page]:bg-emerald/10 aria-[current=page]:text-emerald"
                onClick={() => setIsOpen(false)}
              >
                {route.label[locale]}
              </Link>
            ))}
            <div className="mt-2 flex flex-wrap gap-2 rounded-lg border border-white/10 bg-white/[0.035] p-2" aria-label="Language selector">
              {locales.map((item) => (
                <Link
                  key={item}
                  href={getLocalizedHomePath(item, activePath)}
                  aria-current={item === locale ? "true" : undefined}
                  className="min-h-11 flex-1 rounded-full px-3 py-3 text-center text-xs font-semibold text-slate-300 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 aria-[current=true]:bg-emerald/12 aria-[current=true]:text-emerald"
                  hrefLang={item}
                  onClick={() => setIsOpen(false)}
                >
                  {localeLabels[item]}
                </Link>
              ))}
            </div>
            <Button href={getLocalizedPath(locale, "/contact")} className="mt-2 w-full" onClick={() => setIsOpen(false)}>
              {ctaLabel[locale]}
            </Button>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
