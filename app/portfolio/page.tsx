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
  description: "Explore selected OpenGamer casino games, original concepts and product work across slots, Live Casino and B2B gaming technology.",
  alternates: { canonical: "/portfolio" }
};

const portfolioHeroItems = [
  {
    title: "ELEMENTALS",
    label: "Original Live Casino IP",
    status: "In development",
    image: "/assets/projects/elementals/expositions/nexus-stage.webp",
    href: "/portfolio/elementals",
    className: "md:col-span-2 md:row-span-2",
    contain: false
  },
  {
    title: "LC App",
    label: "B2B product concept",
    status: "In development",
    image: "/assets/projects/lc-app/optimized/lc-app-device-ecosystem.webp",
    href: "/portfolio/lc-app",
    className: "",
    contain: true
  },
  {
    title: "Forest Fortune",
    label: "Playable slot",
    status: "Portfolio title",
    image: "/assets/games/forest-fortune/artwork.webp",
    href: "/games/forest-fortune",
    className: "",
    contain: false
  }
];

const proofModes = [
  ["Playable games", "Public game pages and demos where available."],
  ["Original IP", "Distinct product concepts with status kept explicit."],
  ["Product work", "Interfaces and product directions beyond traditional slot production."],
  ["Commercial scope", "References that connect directly to custom production, licensing and development discussions."]
];

export default function PortfolioPage() {
  return (
    <SiteShell atmosphere="company">
      <section className="relative overflow-hidden border-b border-white/10 bg-black/15 py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_14%,rgba(35,196,131,0.14),transparent_28rem)]" />
        <Container className="relative grid min-w-0 gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:gap-10">
          <div className="min-w-0">
            <SectionHeader
              eyebrow="OpenGamer portfolio"
              title="Work You Can Inspect, Not Just Read About"
              description="Selected playable games, original Live Casino IP and B2B product work, presented with project status kept deliberately clear."
              headingLevel="h1"
            />
            <div className="mt-7 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap sm:mt-8">
              <Button href="/games" className="w-full min-[480px]:w-auto">
                Explore Games
              </Button>
              <Button href="/contact?interest=portfolio#project-enquiry" variant="secondary" className="w-full min-[480px]:w-auto">
                Discuss Portfolio & Partnerships
              </Button>
            </div>
            <StudioGameSignature context="portfolio" variant="inline" className="mt-7 max-w-2xl sm:mt-8" />
          </div>

          <div className="grid min-h-[22rem] grid-cols-2 gap-3 sm:min-h-[24rem] md:grid-cols-3 md:grid-rows-2 lg:min-h-[26rem]" aria-label="Selected OpenGamer portfolio work">
            {portfolioHeroItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group relative min-h-36 min-w-0 overflow-hidden rounded-[var(--radius-feature)] border border-white/10 bg-[#050609] shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/35 sm:min-h-44 ${item.className}`}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 48vw, 50vw"
                  className={`${item.contain ? "object-contain p-2 sm:p-3" : "object-cover"} transition duration-500 group-hover:scale-[1.025]`}
                  priority={item.title === "ELEMENTALS"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 min-w-0 p-3 sm:p-5">
                  <span className="block break-words text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-emerald sm:text-[0.68rem] sm:tracking-[0.16em]">{item.label}</span>
                  <strong className="mt-1 block break-words text-base font-semibold text-white sm:text-xl">{item.title}</strong>
                  <span className="mt-2 inline-flex rounded-full border border-white/15 bg-black/25 px-2.5 py-1 text-[0.62rem] font-medium text-slate-300">{item.status}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="What this portfolio proves"
              title="Different Kinds of Product Work, One Delivery Mindset"
              description="The portfolio is intentionally broader than a grid of slot thumbnails. It shows game production, original IP and product-interface thinking in one place."
            />
          </div>
          <div className="border-y border-white/10">
            {proofModes.map(([title, description], index) => (
              <div key={title} className="grid gap-3 border-b border-white/10 py-6 last:border-b-0 sm:grid-cols-[4.5rem_0.75fr_1.25fr] sm:items-start">
                <span className="text-xs font-semibold tracking-[0.18em] text-emerald">0{index + 1}</span>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm leading-6 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader eyebrow="Original concepts" title="Original IP and Product Directions" description="Selected concepts that show OpenGamer product thinking beyond conventional slot production." />
        <div className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-2 lg:gap-6" data-reveal-group="cards">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Casino games" title="Selected Playable Titles" description="A curated sample of the OpenGamer slot portfolio, with public demos where available." />
          <Link href="/games" className="text-sm font-semibold text-emerald transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70">View full game catalogue →</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 xl:grid-cols-3" data-reveal-group="cards">
          {featuredGames.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Use the Portfolio as a Starting Point"
        description="Discuss a title, original concept, custom production brief or broader licensing and development opportunity with OpenGamer."
        ctaLabel="Discuss a Project"
        ctaHref="/contact?interest=portfolio#project-enquiry"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </SiteShell>
  );
}
