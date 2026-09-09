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

const proofItems = ["Game production", "Dedicated development", "Technology & integration"];

export function CTASection({
  title,
  description,
  body,
  ctaLabel = "Discuss a Project",
  ctaHref = "/contact#project-enquiry",
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: CTASectionProps) {
  const resolvedDescription = description ?? body;
  const resolvedPrimaryLabel = primaryLabel ?? ctaLabel;
  const resolvedPrimaryHref = primaryHref ?? ctaHref;

  return (
    <Section className="pb-20 sm:pb-24">
      <div className="premium-card surface-hairline overflow-hidden rounded-[var(--radius-feature)] border border-emerald/25 bg-[linear-gradient(135deg,rgba(46,230,166,0.13),rgba(255,255,255,0.045)_42%,rgba(5,16,11,0.64))] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">Start a project</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-[1.08] text-white sm:text-4xl">{title}</h2>
            {resolvedDescription ? (
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{resolvedDescription}</p>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-500" aria-label="OpenGamer delivery scope">
              {proofItems.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-emerald/80" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap lg:justify-end">
            <Button href={resolvedPrimaryHref} className="w-full justify-center sm:w-auto">
              {resolvedPrimaryLabel}
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button href={secondaryHref} variant="secondary" className="w-full justify-center sm:w-auto">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </Section>
  );
}
