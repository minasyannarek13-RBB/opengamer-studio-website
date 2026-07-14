import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "strong";
};

export function Card({ children, className = "", tone = "default" }: CardProps) {
  const toneClass =
    tone === "strong"
      ? "border-white/15 bg-white/[0.07] surface-hairline"
      : "border-line bg-white/[0.045] shadow-[0_18px_60px_rgba(0,0,0,0.2)]";

  return (
    <div className={`premium-card rounded-lg border ${toneClass} p-5 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] ${className}`}>
      {children}
    </div>
  );
}
