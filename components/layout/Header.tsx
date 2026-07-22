"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { logoAsset } from "@/content/company";
import { mainNavigation } from "@/content/navigation";
import { getLocalizedPath } from "@/lib/routes";

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const isActiveRoute = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname?.startsWith(`${href}/`));

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
          {mainNavigation.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              aria-current={isActiveRoute(route.href) ? "page" : undefined}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition duration-200 hover:bg-white/[0.055] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 aria-[current=page]:bg-emerald/10 aria-[current=page]:text-emerald"
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href={getLocalizedPath(locale, "/contact")} className="hidden sm:inline-flex">
            Discuss a Project
          </Button>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.055] text-white transition duration-200 hover:border-emerald/50 hover:bg-white/[0.09] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="grid gap-1.5">
              <span className="h-px w-5 bg-current" />
              <span className="h-px w-5 bg-current" />
              <span className="h-px w-5 bg-current" />
            </span>
          </button>
        </div>
      </Container>
      {isOpen ? (
        <nav
          ref={mobileNavRef}
          className="border-t border-white/10 bg-ink/96 shadow-[0_22px_60px_rgba(0,0,0,0.36)] lg:hidden"
          aria-label="Mobile navigation"
        >
          <Container className="grid gap-2 py-4">
            {mainNavigation.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                aria-current={isActiveRoute(route.href) ? "page" : undefined}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 aria-[current=page]:bg-emerald/10 aria-[current=page]:text-emerald"
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <Button href={getLocalizedPath(locale, "/contact")} className="mt-2 w-full" onClick={() => setIsOpen(false)}>
              Discuss a Project
            </Button>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
