import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { RelatedProductStrip } from "@/components/visual/ProductSignature";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About | OpenGamer Studio",
  description: "OpenGamer is an iGaming development studio combining casino game production, product thinking and engineering for B2B partners.",
  alternates: { canonical: "/about" }
};

const aboutSections = [
  {
    title: "Built around iGaming products",
    description:
      "OpenGamer works across game design, mathematics, visual production, frontend, backend and integration without treating each discipline as a separate project."
  },
  {
    title: "Flexible by scope",
    description:
      "A partner can engage the studio for one title, selected disciplines, dedicated capacity, co-development or a broader product and technology scope."
  },
  {
    title: "Product and engineering stay connected",
    description:
      "Creative decisions are made with game logic, integration requirements, device behaviour and delivery constraints in view."
  },
  {
    title: "Focused on the gaming industry",
    description:
      "The work spans slot production, Live Casino concepts and gaming product technology, with the domain context built into the delivery approach."
  }
];

const workingPrinciples = [
  { title: "Start with the product", description: "Define the commercial and player-facing objective before expanding the production scope." },
  { title: "Make ownership clear", description: "Keep responsibility, deliverables and handoffs explicit from the beginning." },
  { title: "Use only the scope you need", description: "Engage the complete studio or the specific disciplines that strengthen your roadmap." },
  { title: "Keep constraints visible", description: "Product, engineering and integration requirements stay part of the same conversation." },
  { title: "Design for iGaming reality", description: "Account for game flows, content requirements, partner environments and operational context." },
  { title: "Build beyond the presentation", description: "Plan for the next integration, release and iteration rather than a one-off showcase." }
];

const studioProof = [
  {
    eyebrow: "Slot production",
    title: "Forest Fortune",
    image: "/assets/games/forest-fortune/artwork.webp",
    href: "/games/forest-fortune"
  },
  {
    eyebrow: "Live Casino concept",
    title: "ELEMENTALS",
    image: "/assets/projects/elementals/expositions/nexus-stage.webp",
    href: "/portfolio/elementals"
  },
  {
    eyebrow: "Product concept",
    title: "LC App",
    image: "/assets/projects/lc-app/optimized/lc-app-mobile-community.webp",
    href: "/portfolio/lc-app"
  }
];

export default function AboutPage() {
  return (
    <SiteShell atmosphere="company">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(46,230,166,0.10),transparent_24rem),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_58%)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="premium-kicker text-xs font-semibold uppercase">About OpenGamer</p>
            <h1 className="mt-5 max-w-3xl text-balance text-5xl font-semibold leading-[0.98] text-white sm:text-6xl">
              A Game Studio Built Around Product and Engineering.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              OpenGamer develops casino games, original product concepts and supporting technology for operators, aggregators, platforms and game providers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/services">Explore Capabilities</Button>
              <Button href="/contact#project-enquiry" variant="secondary">Discuss a Project</Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3" aria-label="Selected OpenGamer work">
            {studioProof.map((item) => (
              <Link key={item.title} href={item.href} className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] transition hover:-translate-y-0.5 hover:border-emerald/30 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">
                <div className="relative aspect-[4/5] overflow-hidden bg-black/35">
                  <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 18vw, 30vw" className="object-cover transition duration-500 group-hover:scale-[1.025]" />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald">{item.eyebrow}</p>
                  <h2 className="mt-2 text-lg font-semibold text-white">{item.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeader
          eyebrow="Studio model"
          title="One Team When the Work Crosses Disciplines"
          description="OpenGamer can own a complete production scope or join the specific part of a roadmap where extra game, product or engineering capability is needed."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2" data-reveal-group="cards">
          {aboutSections.map((section) => (
            <Card key={section.title} className="h-full">
              <h2 className="text-balance text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{section.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader eyebrow="How we work" title="Clear Scope. Connected Decisions. Fewer Handoffs." description="Product, creative and engineering choices stay connected from definition through delivery." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-reveal-group="cards">
          {workingPrinciples.map((principle) => (
            <Card key={principle.title} className="h-full">
              <h2 className="text-xl font-semibold text-white">{principle.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{principle.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Selected work" title="Games, Original Concepts and Product Technology" description="Explore work across slot production, Live Casino concepts and product engineering, with development status kept explicit where a concept is not yet a live product." />
        <div className="mt-10">
          <RelatedProductStrip
            items={[
              { eyebrow: "Games", title: "Slot Portfolio", description: "Selected OpenGamer titles with public demos where available.", image: "/assets/games/sweet-wins/artwork.webp", href: "/games", actionLabel: "Explore Games" },
              { eyebrow: "Live Casino", title: "ELEMENTALS", description: "Original show-game concept currently in development.", image: "/assets/projects/elementals/expositions/nexus-stage.webp", href: "/portfolio/elementals", actionLabel: "View Concept", accent: "#dca45f" },
              { eyebrow: "Technology", title: "Product Engineering", description: "Frontend, backend and integration-focused development capability.", image: "/assets/projects/lc-app/optimized/lc-app-desktop-experience.webp", href: "/technology", actionLabel: "View Technology", accent: "#6ccfde" }
            ]}
          />
        </div>
      </Section>

      <CTASection
        title="Bring Us the Product, the Gap or the Delivery Problem"
        description="Share the current stage and what your team needs. We will keep the first conversation focused on the relevant scope."
        ctaLabel="Discuss a Project"
        ctaHref="/contact#project-enquiry"
      />
    </SiteShell>
  );
}
