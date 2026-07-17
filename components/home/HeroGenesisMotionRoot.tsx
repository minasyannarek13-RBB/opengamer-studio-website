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
    let isComplete = false;
    let listenersActive = false;

    const markSeen = () => {
      try {
        window.sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // Storage can be unavailable in private or restricted contexts.
      }
    };

    const removeRuntimeListeners = () => {
      if (!listenersActive) return;
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pagehide", markComplete);
      window.removeEventListener("pageshow", handlePageShow);
      listenersActive = false;
    };

    const markComplete = () => {
      if (isComplete) return;
      isComplete = true;

      if (timers.frameId) {
        window.cancelAnimationFrame(timers.frameId);
      }
      if (timers.timeoutId) {
        window.clearTimeout(timers.timeoutId);
      }

      markSeen();
      setMotionState("complete");
      removeRuntimeListeners();
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
    const duration = isReturningMode ? 560 : 2520;

    timers.frameId = window.requestAnimationFrame(() => {
      setMotionState(isReturningMode ? "returning" : "playing");
    });

    timers.timeoutId = window.setTimeout(markComplete, duration);

    const handleScroll = () => {
      if (isComplete) return;
      if (window.scrollY > window.innerHeight * 0.3) {
        markComplete();
      }
    };

    const handlePageShow = () => {
      try {
        if (window.sessionStorage.getItem(SESSION_KEY) === "1") {
          setMotionState("complete");
        }
      } catch {
        setMotionState("complete");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pagehide", markComplete);
    window.addEventListener("pageshow", handlePageShow);
    listenersActive = true;

    return () => {
      markSeen();
      if (timers.frameId) {
        window.cancelAnimationFrame(timers.frameId);
      }
      if (timers.timeoutId) {
        window.clearTimeout(timers.timeoutId);
      }
      removeRuntimeListeners();
    };
  }, [motionMode]);

  return (
    <section className={className} data-genesis-root="" data-motion-mode={motionMode} data-motion-state={motionState}>
      {children}
    </section>
  );
}
