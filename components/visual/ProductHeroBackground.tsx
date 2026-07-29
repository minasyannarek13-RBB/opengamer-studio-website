import type { CSSProperties } from "react";

export function ProductHeroBackground({
  image,
  focalPoint = "72% 18%",
  accentPrimary,
  accentSecondary = "#2ee6a6",
  overlayStrength = 0.76,
  pattern = "grid"
}: {
  image?: string;
  focalPoint?: string;
  accentPrimary: string;
  accentSecondary?: string;
  overlayStrength?: number;
  pattern?: "grid" | "particles" | "mist" | "rays" | "none";
}) {
  return (
    <div
      className={`product-hero-bg product-hero-bg--${pattern}`}
      style={
        {
          "--product-hero-image": image ? `url(${image})` : "none",
          "--product-hero-position": focalPoint,
          "--product-hero-primary": accentPrimary,
          "--product-hero-secondary": accentSecondary,
          "--product-hero-overlay": overlayStrength
        } as CSSProperties
      }
      aria-hidden="true"
    />
  );
}
