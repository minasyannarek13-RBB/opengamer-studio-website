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
      <section className="border-b border-white/10 bg-black/15 py-16 sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">{title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
            Public website terms for business enquiries and informational use. Final legal review is required before production launch.
          </p>
        </Container>
      </section>
      <Section>
        <div className="grid gap-6">
          {sections.map(([heading, body]) => (
            <section key={heading} className="rounded-lg border border-line bg-white/[0.04] p-6">
              <h2 className="text-xl font-semibold text-white">{heading}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{body}</p>
            </section>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
