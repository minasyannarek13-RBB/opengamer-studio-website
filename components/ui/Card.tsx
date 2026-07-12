import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "strong";
};

export function Card({ children, className = "", tone = "default" }: CardProps) {
  const toneClass =
    tone === "strong"
      ? "border-white/14 bg-white/[0.065] shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
      : "border-line bg-white/[0.04] shadow-glow";

  return (
    <div className={`rounded-lg border ${toneClass} p-5 backdrop-blur ${className}`}>
      {children}
    </div>
  );
}
