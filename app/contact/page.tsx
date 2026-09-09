import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
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
    description: "Original, custom or branded slot production, from selected stages to full delivery scope.",
    scope: "Game design · Art · Math · Frontend · Backend coordination · QA",
    href: "/contact?interest=game#project-enquiry"
  },
  {
    index: "02",
    label: "Dedicated capacity",
    title: "Extend Your Team",
    description: "Add focused iGaming capacity around an existing roadmap without rebuilding every discipline internally.",
    scope: "Frontend · Backend · Game art · QA · Product · Technical support",
    href: "/contact?interest=technology#project-enquiry"
  },
  {
    index: "03",
    label: "Technology & integration",
    title: "Build or Integrate Technology",
    description: "Frontend, backend, RGS-related engineering and integration-oriented delivery for existing iGaming products.",
    scope: "APIs · Wallet flows · Partner connectivity · Release support",
    href: "/contact?interest=technology#project-enquiry"
  },
  {
    index: "04",
    label: "Portfolio & partnerships",
    title: "Discuss Existing Work",
    description: "Portfolio, licensing, branded work and strategic product or distribution conversations.",
    scope: "Portfolio · Licensing · Branded work · Product partnership",
    href: "/contact?interest=portfolio#project-enquiry"
  }
];

const enquiryGuidance = [
  "What you want to build, extend or integrate",
  "Current product or platform context",
  "Required scope and internal ownership",
  "Target timing or known dependencies"
];

export default function ContactPage() {
  return (
    <SiteShell atmosphere="contact">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05070a] py-14 sm:py-20 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_0%,rgba(46,230,166,0.085),transparent_26rem),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_58%)]" />
        <Container className="relative grid gap-8 lg:grid-cols-[0.74fr_0.26fr] lg:items-end lg:gap-14">
          <SectionHeader
            eyebrow="Start a commercial conversation"
            title="Start With the Gap. Define the Scope From There."
            description="Share what needs to be built, extended or integrated, what already exists and where ownership is missing. A finished specification is not required."
            headingLevel="h1"
          />
          <div className="border-t border-white/10 pt-5 text-sm text-slate-400 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-emerald">Enough for a first message</p>
            <p className="mt-3 leading-6">Project type · current stage · missing scope · known dependencies</p>
          </div>
        </Container>
      </section>

      <Section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_90%_12%,rgba(46,230,166,0.04),transparent_22rem)]" />
        <div className="relative grid gap-10 lg:grid-cols-[0.48fr_1.52fr] lg:gap-14 xl:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader eyebrow="Choose a starting point" title="Route the Conversation by Outcome" description="Pick the closest path. The detailed production or engineering scope can be defined after the actual context is clear." />
            <p className="mt-6 max-w-md text-sm leading-6 text-slate-500">Selecting a route only pre-fills the enquiry context. It does not lock the project into a fixed service package.</p>
          </div>
          <div className="border-y border-white/10" aria-label="Commercial enquiry routes">
            {enquiryRoutes.map((route) => (
              <Link
                key={route.title}
                href={route.href}
                className="group grid gap-4 border-b border-white/10 py-6 transition duration-300 last:border-b-0 hover:border-emerald/30 sm:grid-cols-[3rem_0.72fr_1.28fr_auto] sm:items-start sm:gap-6 sm:py-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070a] motion-reduce:transition-none"
              >
                <span className="text-[0.62rem] font-semibold tracking-[0.18em] text-emerald/90">{route.index}</span>
                <div>
                  <span className="text-[0.56rem] font-semibold uppercase tracking-[0.15em] text-slate-500">{route.label}</span>
                  <h2 className="mt-2 text-xl font-semibold text-white transition group-hover:text-emerald motion-reduce:transition-none sm:text-2xl">{route.title}</h2>
                </div>
                <div>
                  <p className="text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">{route.description}</p>
                  <p className="mt-3 text-xs leading-5 text-slate-500">{route.scope}</p>
                </div>
                <span aria-hidden="true" className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-500 transition group-hover:translate-x-1 group-hover:border-emerald/30 group-hover:text-emerald motion-reduce:transform-none motion-reduce:transition-none sm:flex">→</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-black/20">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(46,230,166,0.035),transparent_25rem)]" />
        <div className="relative grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:gap-12 xl:gap-16">
          <aside className="grid content-start gap-7 lg:sticky lg:top-28 lg:self-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">Short brief, useful context</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Start with what is already known.</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">Unknowns can stay unknown until they matter to scope, architecture or commercial structure.</p>
            </div>

            <ul className="grid gap-3 text-sm text-slate-300">
              {enquiryGuidance.map((item) => (
                <li key={item} className="flex gap-3 border-t border-white/10 pt-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">After submission</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">The request is reviewed against the relevant game, product or technical scope. Missing dependencies are clarified before a larger commercial proposal is shaped.</p>
            </div>

            <div className="border-t border-white/10 pt-5 text-sm text-slate-400">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Business contact</p>
              <div className="mt-3 grid gap-2">
                {company.email ? (
                  <a href={`mailto:${company.email}`} className="w-fit text-slate-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">{company.email}</a>
                ) : (
                  <p>Use the project enquiry form for commercial requests.</p>
                )}
                {company.social.map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="w-fit text-slate-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">{item.label}</a>
                ))}
              </div>
            </div>
          </aside>

          <div id="project-enquiry" className="scroll-mt-28">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">Project enquiry</p>
                <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Start with the essentials</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-500">Required fields only capture the information needed to understand and route the request.</p>
            </div>
            <LeadForm />
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
