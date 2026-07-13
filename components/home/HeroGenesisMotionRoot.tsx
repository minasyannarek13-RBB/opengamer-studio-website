"use client";

import { useEffect, useState, type ReactNode } from "react";

type HeroGenesisMotionRootProps = {
  children: ReactNode;
  className?: string;
  motionMode?: "firstVisit" | "returning";
};

type MotionState = "ready" | "playing" | "returning" | "complete";

const SESSION_KEY = "opengamer:genesis-motion-seen";

export function HeroGenesisMotionRoot({ children, className, motionMode = "firstVisit" }: HeroGenesisMotionRootProps) {
  const [motionState, setMotionState] = useState<MotionState>("ready");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: { frameId?: number; timeoutId?: number } = {};

    const markComplete = () => {
      if (timers.timeoutId) {
        window.clearTimeout(timers.timeoutId);
      }

      try {
        window.sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // Storage can be unavailable in private or restricted contexts.
      }

      setMotionState("complete");
    };

    if (prefersReducedMotion) {
      markComplete();
      return undefined;
    }

    let hasSeenHero = false;
    try {
      hasSeenHero = window.sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      hasSeenHero = true;
    }

    const isReturningMode = motionMode === "returning" || hasSeenHero;
    const duration = isReturningMode ? 520 : 2200;

    timers.frameId = window.requestAnimationFrame(() => {
      setMotionState(isReturningMode ? "returning" : "playing");
    });

    timers.timeoutId = window.setTimeout(markComplete, duration);

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        markComplete();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (timers.frameId) {
        window.cancelAnimationFrame(timers.frameId);
      }
      if (timers.timeoutId) {
        window.clearTimeout(timers.timeoutId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [motionMode]);

  return (
    <section className={className} data-genesis-root="" data-motion-mode={motionMode} data-motion-state={motionState}>
      {children}
    </section>
  );
}
