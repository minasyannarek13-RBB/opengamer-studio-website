import { pageAtmospheres, type PageAtmosphereVariant } from "@/content/visual-themes";
import type { CSSProperties } from "react";

export function PageAtmosphere({ variant }: { variant: PageAtmosphereVariant }) {
  const theme = pageAtmospheres[variant];

  return (
    <div
      className={`page-atmosphere page-atmosphere--${variant} page-atmosphere--${theme.pattern}`}
      style={
        {
          "--atmosphere-image": theme.image ? `url(${theme.image})` : "none",
          "--atmosphere-primary": theme.accentPrimary,
          "--atmosphere-secondary": theme.accentSecondary || theme.accentPrimary
        } as CSSProperties
      }
      aria-hidden="true"
    >
      <div className="page-atmosphere__image" />
      <div className="page-atmosphere__colour" />
      <div className="page-atmosphere__grid" />
      <div className="page-atmosphere__vignette" />
    </div>
  );
}
