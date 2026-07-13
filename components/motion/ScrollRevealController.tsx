"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-scroll-reveal], [data-reveal-group]";

export function ScrollRevealController() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer: IntersectionObserver | undefined;
    let fallbackId: number | undefined;

    const revealElement = (element: Element) => {
      element.classList.add("is-visible");
      if (element instanceof HTMLElement && element.hasAttribute("data-scroll-reveal")) {
        element.querySelectorAll("[data-reveal-group]").forEach((group) => group.classList.add("is-visible"));
      }
    };

    const initId = window.setTimeout(() => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

      if (reducedMotion || !("IntersectionObserver" in window)) {
        elements.forEach(revealElement);
        return;
      }

      document.body.setAttribute("data-scroll-reveal-ready", "true");

      fallbackId = window.setTimeout(() => {
        elements.forEach(revealElement);
      }, 2200);

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            revealElement(entry.target);
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
      );

      elements.forEach((element) => observer?.observe(element));
    }, 50);

    return () => {
      window.clearTimeout(initId);
      if (fallbackId) window.clearTimeout(fallbackId);
      observer?.disconnect();
      document.body.removeAttribute("data-scroll-reveal-ready");
    };
  }, []);

  return null;
}
