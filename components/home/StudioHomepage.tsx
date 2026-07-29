import Image from "next/image";
import Link from "next/link";
import { GameCard } from "@/components/sections/GameCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { games, type Game } from "@/content/games";
import { homepageCopy, homepageFeaturedGameSlugs } from "@/content/studioHomepage";
import type { Locale } from "@/lib/i18n";
import { getLocalizedHomePath } from "@/lib/routes";

const homepageProofItems = [
  {
    title: "Forest Fortune",
    type: "Slot portfolio",
    image: "/assets/games/forest-fortune/artwork.webp",
    href: "/games/forest-fortune"
  },
  {
    title: "Deep Dive",
    type: "Slot portfolio",
    image: "/assets/games/deep-dive/artwork.webp",
    href: "/games/deep-dive"
  },
  {
    title: "ELEMENTALS",
    type: "Live Casino concept",
    image: "/assets/projects/elementals/expositions/nexus-stage.webp",
    href: "/portfolio/elementals"
  },
  {
    title: "LC App",
    type: "Product concept",
    image: "/assets/projects/lc-app/optimized/lc-app-mobile-community.webp",
    href: "/portfolio/lc-app"
  }
];

export function StudioHomepage({ locale = "en" }: { locale?: Locale }) {
  const copy = homepageCopy[locale] || homepageCopy.en;
  const homepageGames = homepageFeaturedGameSlugs
    .map((slug) => games.find((game) => game.slug === slug))
    .filter((game): game is Game => Boolean(game))
    .slice(0, 4);

  return (
    <>
      <section className="studio-static-hero">
        <div className="studio-static-hero__ambient" aria-hidden="true" />
        <Container className="grid min-h-[calc(100svh-5rem)] gap-10 py-16 sm:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="premium-kicker text-xs font-semibold uppercase">{copy.hero.kicker}</p>
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
              {copy.hero.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{copy.hero.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={getLocalizedHomePath(locale, "/contact")}>Discuss a Project</Button>
              <Button href={getLocalizedHomePath(locale, "/games")} variant="secondary">
                Explore Games
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Original game production", "Custom and branded games", "Frontend and backend engineering", "Integration support"].map((item) => (
                <div key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="studio-static-hero__visual" aria-label="OpenGamer selected games and product concepts">
            {homepageProofItems.map((item, index) => (
              <Link key={item.title} href={getLocalizedHomePath(locale, item.href)} className={`studio-static-hero__tile studio-static-hero__tile--${index + 1}`}>
                <Image src={item.image} alt="" width={600} height={420} sizes="(min-width: 1024px) 19vw, 44vw" className="h-full w-full object-cover" priority={index < 2} />
                <span>{item.type}</span>
                <strong>{item.title}</strong>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Section className="studio-section-top">
        <SectionHeader {...copy.sections.capabilities} />
        <div className="mt-10 grid gap-5 lg:grid-cols-3" data-reveal-group="cards">
          {copy.capabilities.map((group) => (
            <Card key={group.title} tone="strong" className="capability-area h-full">
              <h2 className="text-xl font-semibold text-white">{group.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <div key={item} className="rounded-full border border-white/10 bg-black/18 px-3 py-2 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader {...copy.sections.games} />
          <Button href={getLocalizedHomePath(locale, "/games")} variant="secondary">
            {copy.slides[1].primary}
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4" data-reveal-group="cards">
          {homepageGames.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={getLocalizedHomePath(locale, "/contact?interest=portfolio")} variant="secondary">
            Request Full Game Portfolio
          </Button>
          <Button href={getLocalizedHomePath(locale, "/contact?interest=game")} variant="secondary">
            Discuss Game Distribution
          </Button>
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader {...copy.sections.projects} />
        <div className="homepage-projects mt-10" data-reveal-group="cards">
          {copy.projects.map((project, index) => (
            <article key={project.title} className="premium-card group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white/[0.045] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/30 hover:bg-white/[0.06]">
              <div className="image-frame relative aspect-[16/10] overflow-hidden bg-black/45">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1200}
                  height={676}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className={`h-full w-full transition duration-500 group-hover:scale-[1.025] ${index === 1 ? "object-contain p-4" : "object-cover"}`}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-2">
                  <span className="premium-status rounded-full px-3 py-1 text-xs">{project.category}</span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">{project.status}</span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-white">{project.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
                <Link
                  href={getLocalizedHomePath(locale, project.href)}
                  className="mt-auto inline-flex pt-5 text-sm font-semibold text-emerald transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
                >
                  {project.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader {...copy.sections.process} />
        <div className="studio-process mt-10" data-reveal-group="cards">
          {copy.process.map((step, index) => (
            <Card key={step.title} className="studio-process__card">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-4 text-lg font-semibold text-white">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Trust and credibility" title="Credibility Without Unsupported Claims" description="OpenGamer presents verified public proof points and keeps unconfirmed commercial data out of the public interface." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5" data-reveal-group="cards">
          {copy.trust
            .filter((item) => item.isVerified)
            .map((item) => (
              <Card key={item.title} className="h-full">
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
              </Card>
            ))}
        </div>
      </Section>

      <Section className="bg-black/24">
        <div className="premium-card surface-hairline grid gap-8 rounded-lg border border-emerald/20 bg-emerald/[0.045] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="premium-kicker mb-4 text-xs font-semibold uppercase">{copy.sections.cta.eyebrow}</p>
            <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">{copy.sections.cta.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">{copy.sections.cta.description}</p>
          </div>
          <Button href={getLocalizedHomePath(locale, "/contact")} className="w-full sm:w-auto">
            {copy.sections.cta.primary}
          </Button>
        </div>
      </Section>
    </>
  );
}
