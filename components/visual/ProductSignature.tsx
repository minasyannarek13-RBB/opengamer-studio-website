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
    <aside className={`product-signature ${compact ? "product-signature--compact" : ""}`} style={{ "--product-accent": accent } as CSSProperties}>
      <div className="product-signature__image">
        <Image src={image} alt={`${title} visual reference`} width={220} height={154} sizes={compact ? "88px" : "120px"} className="h-full w-full object-cover" />
      </div>
      <div className="min-w-0">
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        {description ? <span>{description}</span> : null}
        <Link href={href} className="rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
          {actionLabel}
        </Link>
      </div>
    </aside>
  );
}

export function RelatedProductStrip({ items }: { items: ProductSignatureProps[] }) {
  return (
    <div className="related-product-strip" data-reveal-group="cards">
      {items.slice(0, 3).map((item) => (
        <ProductSignature key={item.title} {...item} compact />
      ))}
    </div>
  );
}
