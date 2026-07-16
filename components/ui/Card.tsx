import type { CSSProperties, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "strong";
  style?: CSSProperties;
};

export function Card({ children, className = "", tone = "default", style }: CardProps) {
  const toneClass =
    tone === "strong"
      ? "border-white/15 bg-white/[0.065] surface-hairline"
      : "border-line bg-white/[0.04] shadow-[0_18px_60px_rgba(0,0,0,0.2)]";

  return (
    <div style={style} className={`premium-card rounded-lg border ${toneClass} p-5 backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/25 hover:bg-white/[0.058] ${className}`}>
      {children}
    </div>
  );
}
