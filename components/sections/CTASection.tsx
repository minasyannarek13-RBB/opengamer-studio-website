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
    <Section className="pb-16 sm:pb-20">
      <div className="premium-card surface-hairline relative min-w-0 overflow-hidden rounded-[var(--radius-feature)] border border-emerald/20 bg-[linear-gradient(135deg,rgba(46,230,166,0.12),rgba(255,255,255,0.035)_45%,rgba(5,16,11,0.70))] p-5 shadow-[0_26px_90px_rgba(0,0,0,0.24)] sm:p-8 lg:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald/10 blur-3xl" />
        <div className="relative grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
          <div className="min-w-0 max-w-3xl">
            <p className="premium-kicker break-words text-xs font-semibold uppercase">Start a conversation</p>
            <h2 className="mt-4 max-w-[18ch] break-words text-balance text-[clamp(2rem,6vw,3rem)] font-semibold leading-[1.06] tracking-[-0.015em] text-white">{title}</h2>
            {resolvedDescription ? <p className="mt-4 max-w-2xl break-words text-base leading-7 text-slate-300 sm:mt-5">{resolvedDescription}</p> : null}
          </div>
          <div className="flex min-w-0 flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap lg:justify-end">
            <Button href={resolvedPrimaryHref} className="w-full min-[480px]:w-auto">{resolvedPrimaryLabel}</Button>
            {secondaryLabel && secondaryHref ? <Button href={secondaryHref} variant="secondary" className="w-full min-[480px]:w-auto">{secondaryLabel}</Button> : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
