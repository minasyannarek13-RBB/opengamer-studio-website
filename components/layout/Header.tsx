"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { logoAsset } from "@/content/company";
import { solutionsNavigation } from "@/content/navigation";
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
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(true);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);
  const solutionsMenuRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const activePath = stripLocaleFromPath(pathname || "/");
  const isActiveRoute = (href: string) => (href === "/" ? activePath === "/" : activePath === href || activePath.startsWith(`${href}/`));
  const isSolutionsActive = activePath === "/services" || activePath.startsWith("/services/");

  useEffect(() => {
    setIsOpen(false);
    setIsSolutionsOpen(false);
  }, [pathname]);

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

  useEffect(() => {
    if (!isSolutionsOpen) {
      return;
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (solutionsMenuRef.current?.contains(target) || solutionsButtonRef.current?.contains(target)) {
        return;
      }
      setIsSolutionsOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }
      setIsSolutionsOpen(false);
      solutionsButtonRef.current?.focus();
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isSolutionsOpen]);

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

        <nav className="hidden items-center gap-2 lg:flex">
          {navRoutes.map((route) => (
            route.path === "/services" ? (
              <div key={route.path} className="relative">
                <button
                  ref={solutionsButtonRef}
                  type="button"
                  aria-expanded={isSolutionsOpen}
                  aria-controls="solutions-navigation"
                  aria-current={isSolutionsActive ? "page" : undefined}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition duration-200 hover:bg-white/[0.055] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 aria-[current=page]:bg-emerald/10 aria-[current=page]:text-emerald"
                  onClick={() => setIsSolutionsOpen((value) => !value)}
                >
                  {route.label[locale]}
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className={isSolutionsOpen ? "rotate-180 transition" : "transition"}>
                    <path d="m3.5 5.25 3.5 3.5 3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {isSolutionsOpen ? (
                  <div
                    id="solutions-navigation"
                    ref={solutionsMenuRef}
                    className="absolute left-1/2 top-full mt-3 w-[28rem] -translate-x-1/2 rounded-2xl border border-white/12 bg-ink/96 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.46)] backdrop-blur-xl"
                  >
                    <div className="grid gap-1">
                      {solutionsNavigation.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.065] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={route.path}
                href={getLocalizedHomePath(locale, route.path)}
                aria-current={isActiveRoute(route.path) ? "page" : undefined}
                className="inline-flex min-h-11 items-center rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition duration-200 hover:bg-white/[0.055] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 aria-[current=page]:bg-emerald/10 aria-[current=page]:text-emerald"
              >
                {route.label[locale]}
              </Link>
            )
          ))}
        </nav>

        <div className="flex items-center gap-3">
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
            {navRoutes.map((route) =>
              route.path === "/services" ? (
                <div key={route.path} className="rounded-xl border border-white/10 bg-white/[0.035] p-2">
                  <button
                    type="button"
                    className="flex min-h-11 w-full items-center justify-between rounded-lg px-3 text-sm font-medium text-slate-100 transition hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
                    aria-expanded={isMobileSolutionsOpen}
                    aria-controls="mobile-solutions-navigation"
                    onClick={() => setIsMobileSolutionsOpen((value) => !value)}
                  >
                    {route.label[locale]}
                    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className={isMobileSolutionsOpen ? "rotate-180 transition" : "transition"}>
                      <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {isMobileSolutionsOpen ? (
                    <div id="mobile-solutions-navigation" className="mt-2 grid gap-1">
                      {solutionsNavigation.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={route.path}
                  href={getLocalizedHomePath(locale, route.path)}
                  aria-current={isActiveRoute(route.path) ? "page" : undefined}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 aria-[current=page]:bg-emerald/10 aria-[current=page]:text-emerald"
                  onClick={() => setIsOpen(false)}
                >
                  {route.label[locale]}
                </Link>
              )
            )}
            <Button href={getLocalizedPath(locale, "/contact")} className="mt-2 w-full" onClick={() => setIsOpen(false)}>
              {ctaLabel[locale]}
            </Button>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
