import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { GameCard } from "@/components/sections/GameCard";
import { StudioGameSignature } from "@/components/games/StudioGameSignature";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { featuredGames } from "@/content/games";
import { portfolioProjects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | OpenGamer Studio",
  description: "OpenGamer portfolio of selected casino games and product concepts for iGaming.",
  alternates: { canonical: "/portfolio" }
};

export default function PortfolioPage() {
  return (
    <SiteShell atmosphere="company">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(35,196,131,0.12),transparent_25rem)]" />
        <Container>
          <SectionHeader
            eyebrow="OpenGamer Portfolio"
            title="Games and Product Concepts Built for iGaming"
            description="Selected casino games and original product concepts from the OpenGamer studio ecosystem."
            headingLevel="h1"
          />
          <StudioGameSignature context="portfolio" variant="inline" className="mt-8 max-w-2xl" />
        </Container>
      </section>
      <Section>
        <SectionHeader eyebrow="Featured Projects" title="Original Product Concepts" description="Original live casino and product concepts currently presented for discussion and development." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2" data-reveal-group="cards">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>
      <Section className="bg-black/20">
        <SectionHeader eyebrow="Casino Games" title="Selected Slot Games" description="A curated view of selected OpenGamer slot titles. The full catalogue is available on the Games page." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3" data-reveal-group="cards">
          {featuredGames.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
        <Button href="/games" variant="secondary" className="mt-8">
          View All Games
        </Button>
      </Section>
      <CTASection title="Discuss a Project" description="Share the project type, business model and target market. OpenGamer will propose the right engagement model." />
    </SiteShell>
  );
}
