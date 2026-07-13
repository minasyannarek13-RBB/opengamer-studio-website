import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { GameCard } from "@/components/sections/GameCard";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { games } from "@/content/games";
import { portfolioProjects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | OpenGamer Studio",
  description: "Games, live casino formats and product concepts from OpenGamer Studio.",
  alternates: { canonical: "/portfolio" }
};

export default function PortfolioPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(35,196,131,0.12),transparent_25rem)]" />
        <Container>
          <SectionHeader
            eyebrow="Portfolio"
            title="Games, Live Casino Formats and Product Concepts"
            description="From live slot titles to original live casino formats and product concepts — this is what OpenGamer builds and is building."
            headingLevel="h1"
          />
        </Container>
      </section>
      <Section>
        <SectionHeader eyebrow="Casino Games" title="Slot Game Portfolio" description="Confirmed slot titles built by OpenGamer." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {games.slice(0, 3).map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
        <Button href="/games" variant="secondary" className="mt-8">
          Explore Games
        </Button>
      </Section>
      <Section id="elementals" className="bg-black/20">
        <SectionHeader eyebrow="Live Casino & Show Games" title="Original Live Casino Concepts" description="Original live casino and show-game concepts, starting with ELEMENTALS." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ProjectCard {...portfolioProjects[0]} />
        </div>
      </Section>
      <Section id="lc-app">
        <SectionHeader eyebrow="Platforms & Applications" title="Live Casino Product Concepts" description="Product concepts extending Live Casino into new engagement models." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ProjectCard {...portfolioProjects[1]} />
        </div>
      </Section>
      <CTASection title="Discuss a Project" description="Share the project type, business model and target market. OpenGamer will propose the right engagement model." />
    </SiteShell>
  );
}
