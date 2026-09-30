import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type LegalPageProps = {
  title: string;
  sections: [string, string][];
};

export function LegalPage({ title, sections }: LegalPageProps) {
  return (
    <SiteShell>
      <section className="border-b border-white/10 bg-black/15 py-12 sm:py-16 lg:py-20">
        <Container className="min-w-0">
          <p className="break-words text-xs font-semibold uppercase tracking-[0.18em] text-emerald">Legal</p>
          <h1 className="mt-4 max-w-[18ch] break-words text-balance text-[clamp(2.4rem,7vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.015em] text-white">{title}</h1>
          <p className="mt-4 max-w-2xl break-words text-sm leading-6 text-slate-400">Website terms and information for OpenGamer visitors and business enquiries.</p>
          <p className="mt-5 break-words text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Last updated: July 12, 2026</p>
        </Container>
      </section>
      <Section>
        <div className="grid min-w-0 max-w-5xl gap-4 sm:gap-6">
          {sections.map(([heading, body]) => (
            <section key={heading} className="min-w-0 rounded-[var(--radius-card)] border border-line bg-white/[0.04] p-5 sm:p-6">
              <h2 className="break-words text-xl font-semibold text-white">{heading}</h2>
              <p className="mt-3 break-words text-sm leading-7 text-slate-300">{body}</p>
            </section>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
