"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { HomeSlide } from "@/content/studioHomepage";
import { getLocalizedHomePath } from "@/lib/routes";

type SliderLabels = {
  playLabel: string;
  pauseLabel: string;
  previousLabel: string;
  nextLabel: string;
  slideLabel: string;
  tabsLabel: string;
};

export function ProjectShowcaseSlider({ slides, locale, labels }: { slides: HomeSlide[]; locale: Locale; labels: SliderLabels }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const activeSlide = slides[active];
  const progress = useMemo(() => `${((active + 1) / slides.length) * 100}%`, [active, slides.length]);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [isPaused, slides.length]);

  function navigate(direction: 1 | -1) {
    setIsPaused(true);
    setActive((index) => (index + direction + slides.length) % slides.length);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      navigate(1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      navigate(-1);
    }
  }

  function onTouchEnd(event: React.TouchEvent<HTMLElement>) {
    if (touchStartX.current === null) {
      return;
    }

    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(delta) < 42) {
      return;
    }

    navigate(delta < 0 ? 1 : -1);
  }

  return (
    <section
      className={`studio-showcase studio-showcase--${activeSlide.theme}`}
      aria-roledescription="carousel"
      aria-label={labels.slideLabel}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={onTouchEnd}
    >
      <div className="studio-showcase__ambient" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:py-14">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="premium-status rounded-full px-3 py-1 text-xs">{activeSlide.category}</span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[0.96] tracking-normal text-white sm:text-6xl lg:text-7xl">
            {activeSlide.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{activeSlide.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={getLocalizedHomePath(locale, activeSlide.primaryHref)}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-emerald px-5 text-sm font-semibold text-ink shadow-[0_14px_34px_rgba(46,230,166,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-emerald/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {activeSlide.primary}
            </Link>
            {activeSlide.secondary && activeSlide.secondaryHref ? (
              <Link
                href={getLocalizedHomePath(locale, activeSlide.secondaryHref)}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-5 text-sm font-semibold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-emerald/50 hover:bg-white/[0.1] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                {activeSlide.secondary}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="studio-showcase__visual-wrap">
          {slides.map((slide, index) => (
            <div key={slide.id} className="studio-showcase__visual" data-active={index === active} aria-hidden={index !== active}>
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                width={slide.imageWidth}
                height={slide.imageHeight}
                priority={index === 0}
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
          <div className="studio-showcase__chips" aria-hidden="true">
            <span>Game design</span>
            <span>Frontend</span>
            <span>Backend</span>
            <span>RGS</span>
            <span>API</span>
          </div>
        </div>

        <div className="studio-showcase__nav lg:col-span-2">
          <div className="h-1 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <div className="h-full rounded-full bg-emerald transition-[width] duration-500" style={{ width: progress }} />
          </div>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="grid gap-2 sm:grid-cols-3 lg:flex lg:flex-wrap" aria-label={labels.tabsLabel}>
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-current={index === active ? "true" : undefined}
                  className="min-h-11 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-left text-xs font-semibold text-slate-300 transition hover:border-emerald/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 aria-[current=true]:border-emerald/45 aria-[current=true]:bg-emerald/10 aria-[current=true]:text-emerald"
                  onClick={() => {
                    setIsPaused(true);
                    setActive(index);
                  }}
                >
                  {slide.category}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" className="studio-showcase__control" aria-label={labels.previousLabel} onClick={() => navigate(-1)}>
                Prev
              </button>
              <button type="button" className="studio-showcase__control min-w-28" onClick={() => setIsPaused((value) => !value)}>
                {isPaused ? labels.playLabel : labels.pauseLabel}
              </button>
              <button type="button" className="studio-showcase__control" aria-label={labels.nextLabel} onClick={() => navigate(1)}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <span className="sr-only" aria-live="polite">
        {activeSlide.category}: {activeSlide.title}
      </span>
    </section>
  );
}
