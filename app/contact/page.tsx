import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Contact | OpenGamer Studio",
  description: "Contact OpenGamer to discuss custom slot game development, RGS technology, casino game integration or a dedicated iGaming development team.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Contact"
            title="Tell Us What You Want to Build"
            description="Use the form for project, integration, portfolio, dedicated team or technology partnership requests."
            headingLevel="h1"
          />
        </Container>
      </section>
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.38fr_1fr]">
          <aside className="rounded-lg border border-line bg-white/[0.04] p-6 shadow-glow">
            <h2 className="text-xl font-semibold text-white">Business Contact</h2>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
              <a href={`tel:${company.phone.replaceAll(" ", "")}`} className="hover:text-white">
                {company.phone}
              </a>
              <p>{company.address}</p>
            </div>
          </aside>
          <LeadForm />
        </div>
      </Section>
    </SiteShell>
  );
}
