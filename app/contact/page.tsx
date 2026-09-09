import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProductSignature } from "@/components/visual/ProductSignature";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "Contact | OpenGamer Studio",
  description: "Contact OpenGamer to discuss casino game development, branded games, dedicated development capacity, RGS-related engineering or integrations.",
  alternates: { canonical: "/contact" }
};

const enquiryRoutes = [
  {
    index: "01",
    label: "Game production",
    title: "Build a Game",
    description: "Original, custom or branded slot production, from selected stages to full-cycle delivery.",
    href: "/contact?interest=game#project-enquiry"
  },
  {
    index: "02",
    label: "Dedicated capacity",
    title: "Extend Your Team",
    description: "Add focused iGaming capacity across frontend, backend, mathematics, art, QA or connected production scopes.",
    href: "/contact?interest=technology#project-enquiry"
  },
  {
    index: "03",
    label: "Technology & integration",
    title: "Build or Integrate Technology",
    description: "Frontend, backend, APIs and integration-oriented delivery for existing iGaming products.",
    href: "/contact?interest=technology#project-enquiry"
  },
  {
    index: "04",
    label: "Portfolio & partnerships",
    title: "Discuss Existing Work",
    description: "Portfolio access, licensing discussions and strategic product or distribution conversations.",
    href: "/contact?interest=portfolio#project-enquiry"
  }
];

const enquiryGuidance = [
  "What you want to build, extend or integrate",
  "Current product or platform context",
  "Required scope and internal ownership",
  "Target timing or launch dependencies"
];

export default function ContactPage() {
  return (
    <SiteShell atmosphere="contact">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-14 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_0%,rgba(46,230,166,0.08),transparent_26rem)]" />
        <Container className="relative grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
          <SectionHeader
            eyebrow="Start a commercial conversation"
            title="Tell Us What You Need Built"
            description="Choose the closest starting point or send the essentials directly. OpenGamer will review the relevant production, engineering or commercial scope and route the conversation accordingly."
            headingLevel="h1"
          />
          <div className="grid gap-3 border-l-0 border-white/10 text-sm text-slate-400 lg:border-l lg:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">Good first message</p>
            <p>Project type · current stage · required scope · target timing</p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4" aria-label="Commercial enquiry routes">
          {enquiryRoutes.map((route) => (
            <Link
              key={route.title}
              href={route.href}
              className="group relative overflow-hidden rounded-[var(--radius-feature)] border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-emerald/30 hover:bg-white/[0.055] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 sm:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-emerald">{route.label}</span>
                <span className="text-xs text-slate-600">{route.index}</span>
              </div>
              <h2 className="mt-5 text-xl font-semibold text-white sm:text-2xl">{route.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{route.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald transition group-hover:text-white">
                Start this conversation <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-black/20">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_1fr] lg:gap-14">
          <aside className="grid content-start gap-7 lg:sticky lg:top-28 lg:self-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">Before you submit</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">A short brief is enough.</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">You do not need a finished specification. Start with what is already known and add detail only where it helps define the engagement.</p>
            </div>

            <ul className="grid gap-3 text-sm text-slate-300">
              {enquiryGuidance.map((item) => (
                <li key={item} className="flex gap-3 border-t border-white/10 pt-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-5 text-sm text-slate-400">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Business contact</p>
              <div className="mt-3 grid gap-2">
                {company.email ? (
                  <a href={`mailto:${company.email}`} className="w-fit text-slate-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                    {company.email}
                  </a>
                ) : (
                  <p>Use the project enquiry form for commercial requests.</p>
                )}
                {company.social.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="w-fit text-slate-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <ProductSignature
              eyebrow="Playable reference"
              title="Forest Fortune"
              description="A real OpenGamer title available as a reference point for game-production discussions."
              image="/assets/games/forest-fortune/artwork.webp"
              href="/games/forest-fortune"
              actionLabel="View Game"
              compact
            />
          </aside>

          <div id="project-enquiry" className="scroll-mt-28">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">Project enquiry</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Start with the essentials</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-500">Required fields cover only the information needed to understand and route the request.</p>
            </div>
            <LeadForm />
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
