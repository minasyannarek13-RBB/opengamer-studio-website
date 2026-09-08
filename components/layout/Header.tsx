"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { logoAsset } from "@/content/company";
import { solutionsMegaMenu, solutionsNavigation } from "@/content/navigation";
import { getLocalizedHomePath, getLocalizedPath, navRoutes, stripLocaleFromPath } from "@/lib/routes";

const ctaLabel: Record<Locale, string> = {
  en: "Discuss a Project",
  ru: "Обсудить проект",
  hy: "Քննարկել նախագիծը",
  es: "Hablar de un proyecto",
  pt: "Discutir um projeto"
};

const exploreGamesLabel: Record<Locale, string> = {
  en: "Explore Games",
  ru: "Посмотреть игры",
  hy: "Դիտել խաղերը",
  es: "Explorar juegos",
  pt: "Explorar jogos"
};

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(true);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);
  const solutionsMenuRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const activePath = stripLocaleFromPath(pathname || "/");
  const isActiveRoute = (href: string) => (href === "/" ? activePath === "/" : activePath === href || activePath.startsWith(`${href}/`));
  const isSolutionsActive = activePath === "/services" || activePath.startsWith("/services/");
  const resolvedCtaLabel = activePath === "/contact" ? exploreGamesLabel[locale] : ctaLabel[locale];
  const resolvedCtaHref = activePath === "/contact" ? "/games" : "/contact";

  useEffect(() => {
    setIsOpen(false);
    setIsSolutionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = mobileNavRef.current;
    const firstInteractive = panel?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
    firstInteractive?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isSolutionsOpen) return;

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (solutionsMenuRef.current?.contains(target) || solutionsButtonRef.current?.contains(target)) return;
      setIsSolutionsOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
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
      <Container className="flex min-h-20 min-w-0 items-center justify-between gap-3 sm:gap-4">
        <Link href={getLocalizedPath(locale, "/")} aria-label="OpenGamer home" className="min-w-0 shrink rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
          <Image src={logoAsset.src} alt={logoAsset.alt} width={logoAsset.width} height={logoAsset.height} priority className="h-8 max-w-[9rem] w-auto sm:h-9 sm:max-w-none" sizes="142px" />
        </Link>

        <nav className="hidden min-w-0 items-center gap-1 xl:flex xl:gap-2" aria-label="Primary navigation">
          {navRoutes.map((route) =>
            route.path === "/services" ? (
              <div key={route.path} className="relative min-w-0">
                <button
                  ref={solutionsButtonRef}
                  type="button"
                  aria-expanded={isSolutionsOpen}
                  aria-controls="solutions-navigation"
                  aria-current={isSolutionsActive ? "page" : undefined}
                  className="inline-flex min-h-11 max-w-full items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition duration-200 hover:bg-white/[0.055] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 aria-[current=page]:bg-emerald/10 aria-[current=page]:text-emerald"
                  onClick={() => setIsSolutionsOpen((value) => !value)}
                >
                  <span className="break-words text-center leading-5">{route.label[locale]}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className={`shrink-0 ${isSolutionsOpen ? "rotate-180 transition" : "transition"}`}>
                    <path d="m3.5 5.25 3.5 3.5 3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {isSolutionsOpen ? (
                  <div id="solutions-navigation" ref={solutionsMenuRef} className="solutions-dropdown absolute left-1/2 top-full z-[100] mt-0 w-[min(68rem,calc(100vw-3rem))] -translate-x-1/2 rounded-[var(--radius-feature)] p-4">
                    <div className="solutions-dropdown__bridge" aria-hidden="true" />
                    <div className="grid min-w-0 gap-4 xl:grid-cols-[repeat(3,minmax(0,1fr))_minmax(13rem,0.8fr)]">
                      {solutionsMegaMenu.map((group) => (
                        <div key={group.title} className="solutions-dropdown__group min-w-0">
                          <p className="solutions-dropdown__heading break-words">{group.title}</p>
                          <div className="mt-3 grid min-w-0 gap-1.5">
                            {group.items.map((item) => (
                              <Link key={item.label} href={getLocalizedHomePath(locale, item.href)} className="solutions-dropdown__link min-w-0">
                                <span className="break-words">{item.label}</span>
                                <small className="break-words">{item.description}</small>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                      <Link href={getLocalizedHomePath(locale, "/portfolio/elementals")} className="solutions-dropdown__feature min-w-0">
                        <Image src="/assets/projects/elementals/expositions/nexus-stage.webp" alt="" width={600} height={420} sizes="220px" className="solutions-dropdown__feature-image" />
                        <span className="break-words">Featured work</span>
                        <strong className="break-words">ELEMENTALS</strong>
                        <small className="break-words">Explore the Live Casino concept</small>
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={route.path}
                href={getLocalizedHomePath(locale, route.path)}
                aria-current={isActiveRoute(route.path) ? "page" : undefined}
                className="inline-flex min-h-11 max-w-full items-center rounded-full px-3 py-2 text-center text-sm font-medium leading-5 text-slate-300 transition duration-200 hover:bg-white/[0.055] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 aria-[current=page]:bg-emerald/10 aria-[current=page]:text-emerald"
              >
                {route.label[locale]}
              </Link>
            )
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button href={getLocalizedPath(locale, resolvedCtaHref)} className="hidden max-w-[13rem] md:inline-flex xl:max-w-none">
            {resolvedCtaLabel}
          </Button>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.055] text-white transition duration-200 hover:border-emerald/50 hover:bg-white/[0.09] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 active:scale-[0.99] xl:hidden"
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

      {isOpen ? (
        <nav id="mobile-navigation" ref={mobileNavRef} className="mobile-nav-panel border-t border-white/10 bg-ink/96 shadow-[0_22px_60px_rgba(0,0,0,0.36)] xl:hidden" data-state="open" aria-label="Mobile navigation">
          <Container className="grid max-h-[calc(100dvh-5rem)] min-w-0 gap-2 overflow-y-auto overscroll-contain py-4">
            {navRoutes.map((route) =>
              route.path === "/services" ? (
                <div key={route.path} className="min-w-0 rounded-[var(--radius-card)] border border-white/10 bg-white/[0.035] p-2">
                  <button
                    type="button"
                    className="flex min-h-11 w-full min-w-0 items-center justify-between gap-3 rounded-lg px-3 text-sm font-medium text-slate-100 transition hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
                    aria-expanded={isMobileSolutionsOpen}
                    aria-controls="mobile-solutions-navigation"
                    onClick={() => setIsMobileSolutionsOpen((value) => !value)}
                  >
                    <span className="min-w-0 break-words text-left leading-5">{route.label[locale]}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className={`shrink-0 ${isMobileSolutionsOpen ? "rotate-180 transition" : "transition"}`}>
                      <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {isMobileSolutionsOpen ? (
                    <div id="mobile-solutions-navigation" className="mt-2 grid min-w-0 gap-1">
                      {solutionsNavigation.map((item) => (
                        <Link key={item.label} href={getLocalizedHomePath(locale, item.href)} className="min-w-0 break-words rounded-lg px-3 py-2.5 text-sm leading-5 text-slate-300 transition hover:bg-white/[0.06] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70" onClick={() => setIsOpen(false)}>
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
                  className="min-w-0 break-words rounded-lg px-3 py-3 text-sm font-medium leading-5 text-slate-200 transition hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 aria-[current=page]:bg-emerald/10 aria-[current=page]:text-emerald"
                  onClick={() => setIsOpen(false)}
                >
                  {route.label[locale]}
                </Link>
              )
            )}
            <Button href={getLocalizedPath(locale, resolvedCtaHref)} className="mt-2 w-full" onClick={() => setIsOpen(false)}>
              {resolvedCtaLabel}
            </Button>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
