import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

type CTASectionProps = {
  title: string;
  description?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title,
  description,
  body,
  ctaLabel = "Discuss a Project",
  ctaHref = "/contact",
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: CTASectionProps) {
  const resolvedDescription = description ?? body;
  const resolvedPrimaryLabel = primaryLabel ?? ctaLabel;
  const resolvedPrimaryHref = primaryHref ?? ctaHref;

  return (
    <Section className="pb-20">
      <div className="premium-card surface-hairline relative overflow-hidden rounded-2xl border border-emerald/20 bg-[linear-gradient(135deg,rgba(46,230,166,0.12),rgba(255,255,255,0.035)_45%,rgba(5,16,11,0.70))] p-7 shadow-[0_26px_90px_rgba(0,0,0,0.24)] sm:p-10 lg:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald/10 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="premium-kicker text-xs font-semibold uppercase">Start a conversation</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.06] text-white sm:text-4xl lg:text-5xl">{title}</h2>
            {resolvedDescription ? <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">{resolvedDescription}</p> : null}
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button href={resolvedPrimaryHref}>{resolvedPrimaryLabel}</Button>
            {secondaryLabel && secondaryHref ? <Button href={secondaryHref} variant="secondary">{secondaryLabel}</Button> : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
