import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProductSignature } from "@/components/visual/ProductSignature";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Contact | OpenGamer Studio",
  description: "Discuss casino game production, product engineering, integrations, portfolio opportunities or dedicated iGaming development support with OpenGamer.",
  alternates: { canonical: "/contact" }
};

const enquiryRoutes = [
  {
    title: "Game production",
    description: "Original, custom or branded slot production, from one stage to a complete game build.",
    href: "/contact?interest=game#project-enquiry"
  },
  {
    title: "Engineering & integration",
    description: "Frontend, backend, APIs and integration work for games and existing iGaming products.",
    href: "/contact?interest=technology#project-enquiry"
  },
  {
    title: "Portfolio & partnerships",
    description: "Portfolio access, licensing, distribution and strategic product discussions.",
    href: "/contact?interest=portfolio#project-enquiry"
  }
];

const enquiryGuidance = [
  "What you want to build or improve",
  "Target platform, operator or aggregator context",
  "The production or engineering scope you need",
  "Current stage and timing"
];

export default function ContactPage() {
  return (
    <SiteShell atmosphere="contact">
      <section className="border-b border-white/10 bg-black/15 py-12 sm:py-16 lg:py-20">
        <Container>
          <SectionHeader
            eyebrow="Start a conversation"
            title="Tell Us What You Want to Build"
            description="A concise brief is enough. Choose the closest path below or go straight to the enquiry form."
            headingLevel="h1"
          />
        </Container>
      </section>
      <Section>
        <div className="mb-8 grid gap-4 sm:mb-10 md:grid-cols-3" data-reveal-group="cards">
          {enquiryRoutes.map((route) => (
            <a
              key={route.title}
              href={route.href}
              className="premium-card group min-w-0 rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-emerald/30 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
            >
              <p className="break-words text-xs font-semibold uppercase tracking-[0.14em] text-emerald">Choose a path</p>
              <h2 className="mt-3 break-words text-xl font-semibold text-white">{route.title}</h2>
              <p className="mt-3 break-words text-sm leading-6 text-slate-400">{route.description}</p>
              <span className="mt-5 inline-flex max-w-full break-words text-sm font-semibold text-emerald transition group-hover:text-white">Start enquiry →</span>
            </a>
          ))}
        </div>
        <div id="project-enquiry" className="scroll-mt-28 grid min-w-0 gap-8 lg:grid-cols-[0.42fr_minmax(0,1fr)]">
          <aside className="grid min-w-0 gap-5" data-reveal-group="cards">
            <Card tone="strong" className="min-w-0">
              <h2 className="break-words text-xl font-semibold text-white">Business Contact</h2>
              <div className="mt-5 grid gap-3 break-words text-sm text-slate-300">
                {company.email ? (
                  <a href={`mailto:${company.email}`} className="break-all hover:text-white">
                    {company.email}
                  </a>
                ) : (
                  <p>Use the form for project, technology and portfolio enquiries.</p>
                )}
                {company.social.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
            </Card>
            <Card className="min-w-0">
              <h2 className="break-words text-lg font-semibold text-white">What Helps Us Understand the Brief</h2>
              <p className="mt-2 break-words text-sm leading-6 text-slate-400">Share only what is already clear. The rest can come later.</p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-300">
                {enquiryGuidance.map((item) => (
                  <li key={item} className="flex min-w-0 gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" aria-hidden="true" />
                    <span className="min-w-0 break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <ProductSignature
              eyebrow="Portfolio reference"
              title="Forest Fortune"
              description="A reference for custom game production, portfolio access or distribution discussions."
              image="/assets/games/forest-fortune/artwork.webp"
              href="/games/forest-fortune"
              actionLabel="View Game"
              compact
            />
          </aside>
          <LeadForm />
        </div>
      </Section>
    </SiteShell>
  );
}
