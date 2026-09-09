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

const proofItems = ["Game production", "Dedicated development", "Technology & integration", "Portfolio & original IP"];

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
    <Section className="pb-20 sm:pb-24 lg:pb-28">
      <div className="relative isolate overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#06090b] px-6 py-8 shadow-[0_34px_110px_rgba(0,0,0,0.32)] sm:px-8 sm:py-10 lg:px-11 lg:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(46,230,166,0.11),transparent_24rem),radial-gradient(circle_at_94%_82%,rgba(93,156,255,0.055),transparent_22rem)]" />
        <div aria-hidden="true" className="absolute right-[-8rem] top-[-9rem] h-[24rem] w-[24rem] rounded-full border border-emerald/[0.08]" />
        <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald/35 to-transparent" />

        <div className="relative grid gap-9 lg:grid-cols-[minmax(0,1fr)_0.36fr] lg:items-end lg:gap-14 xl:gap-20">
          <div className="min-w-0">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-emerald">Start a project</p>
            <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold leading-[1.04] tracking-[-0.025em] text-white sm:text-4xl lg:text-[2.8rem]">{title}</h2>
            {resolvedDescription ? <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400">{resolvedDescription}</p> : null}

            <div className="mt-7 grid gap-2.5 border-t border-white/10 pt-6 sm:grid-cols-2" aria-label="OpenGamer delivery scope">
              {proofItems.map((item, index) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="text-[0.58rem] font-semibold tracking-[0.14em] text-emerald/80">0{index + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 lg:justify-self-end">
            <Button href={resolvedPrimaryHref} className="w-full justify-center">
              {resolvedPrimaryLabel}
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button href={secondaryHref} variant="secondary" className="w-full justify-center">
                {secondaryLabel}
              </Button>
            ) : null}
            <p className="mt-1 text-xs leading-5 text-slate-500">Start from the gap that matters. Define the rest only when it affects scope.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
