import type { Metadata } from "next";
import Link from "next/link";
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
  description: "Contact OpenGamer to discuss casino game development, RGS-related engineering, integrations or a dedicated iGaming development team.",
  alternates: { canonical: "/contact" }
};

const enquiryRoutes = [
  {
    title: "Game production",
    description: "Original, custom or branded slot production, from selected stages to full-cycle delivery.",
    href: "/contact?interest=game#project-enquiry"
  },
  {
    title: "Engineering & integration",
    description: "Frontend, backend, APIs and integration-oriented delivery for existing iGaming products.",
    href: "/contact?interest=technology#project-enquiry"
  },
  {
    title: "Portfolio & partnerships",
    description: "Portfolio access, licensing discussions and strategic product or distribution conversations.",
    href: "/contact?interest=portfolio#project-enquiry"
  }
];

const enquiryGuidance = [
  "Project type and commercial goal",
  "Target platform, aggregator or operator context",
  "Required game, RGS-related or integration scope",
  "Current stage and key launch dependencies"
];

export default function ContactPage() {
  return (
    <SiteShell atmosphere="contact">
      <section className="border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Start a conversation"
            title="Tell Us What You Want to Build"
            description="Choose the closest starting point or send the essentials directly. OpenGamer will use the context you provide to review the right production, engineering or commercial path."
            headingLevel="h1"
          />
        </Container>
      </section>
      <Section>
        <div className="mb-10 grid gap-4 md:grid-cols-3" data-reveal-group="cards">
          {enquiryRoutes.map((route) => (
            <Link
              key={route.title}
              href={route.href}
              className="premium-card group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-emerald/30 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald">Choose a path</p>
              <h2 className="mt-3 text-xl font-semibold text-white">{route.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{route.description}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-emerald transition group-hover:text-white">Start here →</span>
            </Link>
          ))}
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.42fr_1fr]">
          <aside className="grid gap-5" data-reveal-group="cards">
            <Card tone="strong">
              <h2 className="text-xl font-semibold text-white">Business Contact</h2>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                {company.email ? (
                  <a href={`mailto:${company.email}`} className="hover:text-white">
                    {company.email}
                  </a>
                ) : (
                  <p>Use the form to send project, technology and portfolio enquiries.</p>
                )}
                {company.social.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
            </Card>
            <Card>
              <h2 className="text-lg font-semibold text-white">Useful Details</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">Start with what you already know. Additional project details are optional in the form.</p>
              <ul className="mt-4 grid gap-3 text-sm text-slate-300">
                {enquiryGuidance.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <ProductSignature
              eyebrow="Portfolio reference"
              title="Forest Fortune"
              description="Use the form to discuss game distribution, custom production or portfolio access."
              image="/assets/games/forest-fortune/artwork.webp"
              href="/games/forest-fortune"
              actionLabel="View Game"
              compact
            />
          </aside>
          <div id="project-enquiry" className="scroll-mt-28">
            <LeadForm />
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
