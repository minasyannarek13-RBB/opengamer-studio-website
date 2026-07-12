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
      <div className="rounded-lg border border-emerald/25 bg-emerald/[0.08] p-8 sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
            {resolvedDescription ? (
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{resolvedDescription}</p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={resolvedPrimaryHref}>{resolvedPrimaryLabel}</Button>
            {secondaryLabel && secondaryHref ? (
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
