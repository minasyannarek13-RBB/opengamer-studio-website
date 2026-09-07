import type { CSSProperties, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "strong";
  style?: CSSProperties;
};

export function Card({ children, className = "", tone = "default", style }: CardProps) {
  const toneClass = tone === "strong"
    ? "border-white/15 bg-white/[0.06] surface-hairline shadow-[0_20px_70px_rgba(0,0,0,0.20)]"
    : "border-white/10 bg-white/[0.04] shadow-[0_18px_60px_rgba(0,0,0,0.18)]";

  return (
    <div style={style} className={`premium-card rounded-2xl border ${toneClass} p-5 backdrop-blur-[2px] ${className}`}>
      {children}
    </div>
  );
}
