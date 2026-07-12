import type { PageContent } from "@/content/types";
import { Button } from "@/components/ui/Button";

export function Hero({
  content,
  primaryHref,
  secondaryHref
}: {
  content: PageContent;
  primaryHref: string;
  secondaryHref: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="subtle-grid absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-16 h-56 w-56 -translate-x-1/2 rounded-full bg-cobalt/20 blur-3xl" />
      <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-center px-5 py-20 sm:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">{content.eyebrow}</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] text-white sm:text-7xl">
            {content.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{content.intro}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref}>{content.primaryCta}</Button>
            <Button href={secondaryHref} variant="secondary">
              {content.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
