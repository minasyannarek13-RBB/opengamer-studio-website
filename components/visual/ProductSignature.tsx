import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

export type ProductSignatureProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  href: string;
  actionLabel: string;
  accent?: string;
  compact?: boolean;
};

export function ProductSignature({ eyebrow, title, description, image, href, actionLabel, accent = "#2ee6a6", compact = false }: ProductSignatureProps) {
  return (
    <aside
      className={`group relative isolate overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#06090b] transition duration-300 hover:-translate-y-0.5 hover:border-white/20 ${compact ? "p-3" : "p-4 sm:p-5"}`}
      style={{ "--product-accent": accent } as CSSProperties}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,color-mix(in_srgb,var(--product-accent)_12%,transparent),transparent_15rem)] opacity-80" />
      <div className={`relative grid items-center ${compact ? "grid-cols-[5.2rem_1fr] gap-3.5" : "grid-cols-[6.5rem_1fr] gap-4 sm:grid-cols-[7.4rem_1fr] sm:gap-5"}`}>
        <div className={`relative overflow-hidden rounded-xl border border-white/[0.08] bg-black/40 ${compact ? "aspect-[10/8]" : "aspect-[10/8]"}`}>
          <Image src={image} alt={`${title} visual reference`} fill sizes={compact ? "84px" : "120px"} className="object-cover transition duration-500 group-hover:scale-[1.025]" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        </div>

        <div className="min-w-0">
          <p className="text-[0.5rem] font-semibold uppercase tracking-[0.14em] text-[var(--product-accent)]">{eyebrow}</p>
          <h2 className={`mt-1.5 font-semibold leading-tight tracking-[-0.015em] text-white ${compact ? "text-base" : "text-lg sm:text-xl"}`}>{title}</h2>
          {description ? <p className={`mt-2 leading-5 text-slate-500 ${compact ? "line-clamp-2 text-xs" : "text-sm sm:leading-6"}`}>{description}</p> : null}
          <Link
            href={href}
            className="mt-3 inline-flex items-center gap-1.5 rounded-sm text-xs font-semibold text-white/80 transition hover:text-[var(--product-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
          >
            {actionLabel} <span aria-hidden="true" className="transition group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}

export function RelatedProductStrip({ items }: { items: ProductSignatureProps[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-3" data-reveal-group="cards">
      {items.slice(0, 3).map((item) => (
        <ProductSignature key={item.title} {...item} compact />
      ))}
    </div>
  );
}
