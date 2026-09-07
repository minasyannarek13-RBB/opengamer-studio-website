import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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

const portfolioHeroItems = [
  {
    title: "ELEMENTALS",
    label: "Live Casino concept",
    image: "/assets/projects/elementals/expositions/nexus-stage.webp",
    href: "/portfolio/elementals",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    title: "LC App",
    label: "B2B product concept",
    image: "/assets/projects/lc-app/optimized/lc-app-mobile-community.webp",
    href: "/portfolio/lc-app",
    className: ""
  },
  {
    title: "Forest Fortune",
    label: "Slot portfolio",
    image: "/assets/games/forest-fortune/artwork.webp",
    href: "/games/forest-fortune",
    className: ""
  }
];

export default function PortfolioPage() {
  return (
    <SiteShell atmosphere="company">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_14%,rgba(35,196,131,0.14),transparent_28rem)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="OpenGamer Portfolio"
              title="Games, Concepts and Product Work You Can Explore"
              description="A selected view of OpenGamer work across casino games, Live Casino concepts and B2B product design."
              headingLevel="h1"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/games">Explore Games</Button>
              <Button href="/contact?interest=portfolio" variant="secondary">
                Discuss Portfolio & Partnerships
              </Button>
            </div>
            <StudioGameSignature context="portfolio" variant="inline" className="mt-8 max-w-2xl" />
          </div>

          <div className="grid min-h-[26rem] grid-cols-2 gap-3 md:grid-cols-3 md:grid-rows-2" aria-label="Selected OpenGamer portfolio work">
            {portfolioHeroItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group relative min-h-44 overflow-hidden rounded-[var(--radius-feature)] border border-white/10 bg-black/45 shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/35 ${item.className}`}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 48vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.025]"
                  priority={item.title === "ELEMENTALS"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-emerald">{item.label}</span>
                  <strong className="mt-1 block text-lg font-semibold text-white sm:text-xl">{item.title}</strong>
                </div>
              </Link>
            ))}
          </div>
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
