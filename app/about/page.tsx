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
  description: "OpenGamer is an iGaming development studio creating casino games, product concepts and technology support for B2B partners.",
  alternates: { canonical: "/about" }
};

const aboutSections = [
  {
    title: "Built for B2B delivery",
    description:
      "OpenGamer brings game design, mathematics, visual production, frontend and backend engineering, integration and post-launch product support into one delivery structure."
  },
  {
    title: "Flexible by scope",
    description:
      "Partners can engage the studio for a single title, selected production stages, dedicated capacity, co-development or a broader technology relationship."
  },
  {
    title: "Product and engineering together",
    description:
      "Game-facing creative work stays connected to the engineering, integration and operating requirements needed to move a product toward delivery."
  },
  {
    title: "Focused on iGaming",
    description:
      "The studio works across slot production, live casino concepts and gaming product technology rather than treating casino products as generic software projects."
  }
];

const workingPrinciples = [
  { title: "Product before output", description: "Start with the commercial and player-facing objective before defining production scope." },
  { title: "Defined responsibility", description: "Make ownership, deliverables and handoffs explicit from the beginning." },
  { title: "Modular delivery", description: "Use the full studio or only the production layers the project actually needs." },
  { title: "Technical transparency", description: "Keep product, engineering and integration constraints visible throughout delivery." },
  { title: "Industry-specific execution", description: "Design around real iGaming workflows, content requirements and partner environments." },
  { title: "Maintainable outcomes", description: "Build for the next integration, release and operating phase rather than a one-off presentation." }
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
              One studio across game production, product and engineering.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              OpenGamer develops casino games, original gaming concepts and integration-oriented software for operators, aggregators, platforms and game providers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/services">Explore Capabilities</Button>
              <Button href="/contact#project-enquiry" variant="secondary">Discuss a Project</Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3" aria-label="Selected OpenGamer work">
            {studioProof.map((item) => (
              <Link key={item.title} href={item.href} className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] transition hover:-translate-y-0.5 hover:border-emerald/30 hover:bg-white/[0.06]">
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
          title="A development partner that can scale with the project."
          description="OpenGamer can own a complete production scope or plug into the specific layers where a partner needs additional capability."
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
        <SectionHeader eyebrow="How we work" title="Clear scope. Connected disciplines. Fewer handoffs." description="The studio is structured to keep product, creative and engineering decisions connected from definition through delivery." />
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
        <SectionHeader eyebrow="Studio output" title="Games, original concepts and product technology." description="Selected work shows how OpenGamer combines content production, live casino concepts and technology delivery without presenting unfinished concepts as live products." />
        <div className="mt-10">
          <RelatedProductStrip
            items={[
              { eyebrow: "Games", title: "Slot Portfolio", description: "Selected playable and review-ready OpenGamer game content.", image: "/assets/games/sweet-wins/artwork.webp", href: "/games", actionLabel: "Explore Games" },
              { eyebrow: "Live Casino", title: "ELEMENTALS", description: "Original show-game concept currently in development.", image: "/assets/projects/elementals/expositions/nexus-stage.webp", href: "/portfolio/elementals", actionLabel: "View Concept", accent: "#dca45f" },
              { eyebrow: "Technology", title: "Product Engineering", description: "Frontend, backend and integration-oriented delivery capability.", image: "/assets/projects/lc-app/optimized/lc-app-desktop-experience.webp", href: "/technology", actionLabel: "View Technology", accent: "#6ccfde" }
            ]}
          />
        </div>
      </Section>

      <CTASection
        title="Bring us the product, the gap or the delivery problem."
        description="Share the project type, current stage and the capability you need. OpenGamer will map the right engagement scope."
        ctaLabel="Discuss a Project"
        ctaHref="/contact#project-enquiry"
      />
    </SiteShell>
  );
}
