import Image from "next/image";
import Link from "next/link";
import { GameCard } from "@/components/sections/GameCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ProjectShowcaseSlider } from "@/components/home/ProjectShowcaseSlider";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { StudioGameSignature } from "@/components/games/StudioGameSignature";
import { games, type Game } from "@/content/games";
import { homepageCopy, homepageFeaturedGameSlugs } from "@/content/studioHomepage";
import type { Locale } from "@/lib/i18n";
import { getLocalizedHomePath } from "@/lib/routes";

export function StudioHomepage({ locale = "en" }: { locale?: Locale }) {
  const copy = homepageCopy[locale] || homepageCopy.en;
  const homepageGames = homepageFeaturedGameSlugs
    .map((slug) => games.find((game) => game.slug === slug))
    .filter((game): game is Game => Boolean(game))
    .slice(0, 4);

  return (
    <>
      <ProjectShowcaseSlider slides={copy.slides} locale={locale} labels={copy.hero} />

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
        <div className="mt-8">
          <StudioGameSignature context="home" variant="inline" />
        </div>
      </Section>

      <Section className="bg-black/20">
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
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader {...copy.sections.technology} />
          <div className="studio-tech-map studio-tech-map--home" data-reveal-group="cards">
            <div className="studio-tech-map__core" aria-hidden="true">OpenGamer Delivery</div>
            {copy.technology.map((item) => (
              <Card key={item.title} className="studio-tech-map__node">
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader {...copy.sections.engagement} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4" data-reveal-group="cards">
          {copy.engagement.map((item) => (
            <Card key={item.title} className="h-full">
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader {...copy.sections.why} />
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4" data-reveal-group="cards">
          {copy.why.map((item) => (
            <div key={item} className="premium-card rounded-lg border border-line bg-white/[0.045] p-4 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-emerald/25">
              {item}
            </div>
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
