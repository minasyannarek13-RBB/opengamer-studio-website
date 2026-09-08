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

const heroActions: Record<Locale, { primary: string; secondary: string; note: string }> = {
  en: { primary: "Discuss a Project", secondary: "Explore Games", note: "Games · Live Casino concepts · Product engineering" },
  ru: { primary: "Обсудить проект", secondary: "Посмотреть игры", note: "Игры · Live Casino концепты · Продуктовая разработка" },
  hy: { primary: "Քննարկել նախագիծը", secondary: "Դիտել խաղերը", note: "Խաղեր · Live Casino կոնցեպտներ · Product engineering" },
  es: { primary: "Hablar de un proyecto", secondary: "Explorar juegos", note: "Juegos · Conceptos Live Casino · Ingeniería de producto" },
  pt: { primary: "Discutir um projeto", secondary: "Explorar jogos", note: "Jogos · Conceitos Live Casino · Engenharia de produto" }
};

const gamesActions: Record<Locale, { all: string; portfolio: string; custom: string }> = {
  en: { all: "View All Games", portfolio: "Request Game Portfolio", custom: "Discuss Custom Game Production" },
  ru: { all: "Все игры", portfolio: "Запросить портфолио", custom: "Обсудить разработку игры" },
  hy: { all: "Բոլոր խաղերը", portfolio: "Ստանալ խաղերի պորտֆոլիոն", custom: "Քննարկել խաղի մշակումը" },
  es: { all: "Ver todos los juegos", portfolio: "Solicitar portafolio", custom: "Hablar de producción a medida" },
  pt: { all: "Ver todos os jogos", portfolio: "Solicitar portfólio", custom: "Discutir produção sob medida" }
};

const proofCopy: Record<Locale, {
  eyebrow: string;
  title: string;
  description: string;
  items: { title: string; description: string }[];
}> = {
  en: {
    eyebrow: "Studio proof",
    title: "See the Work Before the Call",
    description: "Review playable games, visible product concepts and the studio capabilities behind them.",
    items: [
      { title: "Playable games", description: "Selected OpenGamer titles include public demos where available." },
      { title: "Complete game production", description: "Concept, mathematics, frontend, backend, art and QA can be coordinated in one scope." },
      { title: "Integration support", description: "Operator, aggregator and platform integration can be included when required." },
      { title: "Beyond slots", description: "The portfolio also includes ELEMENTALS and LC App concept work." },
      { title: "Flexible engagement", description: "Use selected disciplines, a complete build or dedicated development support." }
    ]
  },
  ru: {
    eyebrow: "Работы студии",
    title: "Сначала посмотрите работу",
    description: "Игры, продуктовые концепты и возможности студии можно оценить до первого разговора.",
    items: [
      { title: "Игры с демо", description: "Для выбранных игр OpenGamer доступны публичные демо." },
      { title: "Полный цикл", description: "Концепт, математика, frontend, backend, арт и QA могут идти одним проектом." },
      { title: "Интеграции", description: "При необходимости в scope входит интеграция с оператором, агрегатором или платформой." },
      { title: "Не только слоты", description: "В портфолио также представлены ELEMENTALS и концепт LC App." },
      { title: "Гибкий формат", description: "Можно подключить отдельные дисциплины, полный цикл или выделенную команду." }
    ]
  },
  hy: {
    eyebrow: "Ստուդիայի աշխատանքներ",
    title: "Սկզբում տեսեք աշխատանքը",
    description: "Խաղերը, product concept-ները և ստուդիայի հնարավորությունները կարելի է գնահատել մինչև առաջին զրույցը։",
    items: [
      { title: "Խաղեր demo-ով", description: "Ընտրված OpenGamer խաղերի համար հասանելի են public demo-ներ։" },
      { title: "Ամբողջական production", description: "Concept, mathematics, frontend, backend, art և QA կարող են լինել մեկ scope-ում։" },
      { title: "Ինտեգրացիաներ", description: "Անհրաժեշտության դեպքում scope-ը կարող է ներառել operator, aggregator կամ platform integration։" },
      { title: "Slots-ից ավելի", description: "Portfolio-ն ներառում է նաև ELEMENTALS և LC App concept work։" },
      { title: "Ճկուն ձևաչափ", description: "Հնարավոր է ընտրել առանձին disciplines, ամբողջական build կամ dedicated development support։" }
    ]
  },
  es: {
    eyebrow: "Trabajo del estudio",
    title: "Vea el trabajo antes de la llamada",
    description: "Revise juegos, conceptos de producto y las capacidades del estudio antes de hablar de alcance.",
    items: [
      { title: "Juegos con demo", description: "Algunos títulos de OpenGamer incluyen demos públicas cuando están disponibles." },
      { title: "Producción completa", description: "Concepto, matemática, frontend, backend, arte y QA pueden coordinarse en un solo alcance." },
      { title: "Integraciones", description: "La integración con operador, agregador o plataforma puede incluirse cuando sea necesaria." },
      { title: "Más que slots", description: "El portafolio también incluye ELEMENTALS y el concepto LC App." },
      { title: "Colaboración flexible", description: "Contrate disciplinas concretas, un build completo o soporte de desarrollo dedicado." }
    ]
  },
  pt: {
    eyebrow: "Trabalho do estúdio",
    title: "Veja o trabalho antes da conversa",
    description: "Avalie jogos, conceitos de produto e as capacidades do estúdio antes de discutir o escopo.",
    items: [
      { title: "Jogos com demo", description: "Títulos selecionados da OpenGamer incluem demos públicas quando disponíveis." },
      { title: "Produção completa", description: "Conceito, matemática, frontend, backend, arte e QA podem ser coordenados em um único escopo." },
      { title: "Integrações", description: "Integrações com operador, agregador ou plataforma podem ser incluídas quando necessário." },
      { title: "Além dos slots", description: "O portfólio também inclui ELEMENTALS e o conceito LC App." },
      { title: "Modelo flexível", description: "Contrate disciplinas específicas, um build completo ou suporte de desenvolvimento dedicado." }
    ]
  }
};

export function StudioHomepage({ locale = "en" }: { locale?: Locale }) {
  const copy = homepageCopy[locale] || homepageCopy.en;
  const proof = proofCopy[locale] || proofCopy.en;
  const actions = heroActions[locale] || heroActions.en;
  const gameActions = gamesActions[locale] || gamesActions.en;
  const isEnglish = locale === "en";
  const homepageGames = homepageFeaturedGameSlugs
    .map((slug) => games.find((game) => game.slug === slug))
    .filter((game): game is Game => Boolean(game))
    .slice(0, 4);

  const hero = isEnglish
    ? {
        kicker: "iGaming game & product studio",
        heading: "Casino Games. Product Ideas. Technology That Ships.",
        intro: "OpenGamer builds casino games and supporting technology for operators, aggregators, platforms and game providers."
      }
    : copy.hero;

  const capabilitiesSection = isEnglish
    ? {
        eyebrow: "Studio capabilities",
        title: "One Studio, Flexible Scope",
        description: "Use OpenGamer for a complete build or only the disciplines your roadmap needs."
      }
    : copy.sections.capabilities;

  const gamesSection = isEnglish
    ? {
        eyebrow: "Games portfolio",
        title: "Start with the Games",
        description: "Explore selected OpenGamer titles and public demos where available."
      }
    : copy.sections.games;

  const projectsSection = isEnglish
    ? {
        eyebrow: "Beyond slots",
        title: "Original Product Concepts",
        description: "ELEMENTALS and LC App show how OpenGamer approaches Live Casino and B2B product design beyond slot production."
      }
    : copy.sections.projects;

  const ctaSection = isEnglish
    ? {
        eyebrow: "Start a conversation",
        title: "Have Something to Build?",
        description: "Send the brief, current stage and the part you need help with. We will keep the first conversation focused.",
        primary: "Discuss a Project"
      }
    : copy.sections.cta;

  return (
    <>
      <section className="studio-static-hero">
        <div className="studio-static-hero__ambient" aria-hidden="true" />
        <Container className="grid gap-10 py-12 sm:py-16 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:py-20">
          <div className="min-w-0 max-w-2xl">
            <p className="premium-kicker max-w-full break-words text-xs font-semibold uppercase">{hero.kicker}</p>
            <h1 className="mt-5 max-w-[12ch] break-words text-balance text-[clamp(2.8rem,10.5vw,4.15rem)] font-semibold leading-[0.98] tracking-[-0.025em] text-white lg:text-[4.5rem]">
              {hero.heading}
            </h1>
            <p className="mt-5 max-w-xl break-words text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">{hero.intro}</p>
            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
              <Button href={getLocalizedHomePath(locale, "/contact#project-enquiry")} className="w-full min-[420px]:w-auto">
                {actions.primary}
              </Button>
              <Button href={getLocalizedHomePath(locale, "/games")} variant="secondary" className="w-full min-[420px]:w-auto">
                {actions.secondary}
              </Button>
            </div>
            <p className="mt-6 max-w-xl break-words text-sm leading-6 text-slate-500">{actions.note}</p>
          </div>
          <div className="studio-static-hero__visual" aria-label="OpenGamer selected games and product concepts">
            {homepageProofItems.map((item, index) => (
              <Link
                key={item.title}
                href={getLocalizedHomePath(locale, item.href)}
                className={`studio-static-hero__tile studio-static-hero__tile--${index + 1} focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70`}
              >
                <Image src={item.image} alt="" width={600} height={420} sizes="(min-width: 1024px) 19vw, 44vw" className="h-full w-full object-cover" priority={index < 2} />
                <span>{item.type}</span>
                <strong>{item.title}</strong>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Section className="studio-section-top">
        <SectionHeader {...capabilitiesSection} />
        <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3 lg:gap-5" data-reveal-group="cards">
          {copy.capabilities.map((group) => (
            <Card key={group.title} tone="strong" className="capability-area h-full min-w-0">
              <h2 className="break-words text-xl font-semibold text-white">{group.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <div key={item} className="max-w-full break-words rounded-full border border-white/10 bg-black/18 px-3 py-2 text-sm leading-5 text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader {...gamesSection} />
          <Button href={getLocalizedHomePath(locale, "/games")} variant="secondary" className="w-full shrink-0 sm:w-auto">
            {gameActions.all}
          </Button>
        </div>
        <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 xl:grid-cols-4" data-reveal-group="cards">
          {homepageGames.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
        <div className="mt-7 flex flex-col gap-3 min-[520px]:flex-row min-[520px]:flex-wrap sm:mt-8">
          <Button href={getLocalizedHomePath(locale, "/contact?interest=portfolio#project-enquiry")} variant="secondary" className="w-full min-[520px]:w-auto">
            {gameActions.portfolio}
          </Button>
          <Button href={getLocalizedHomePath(locale, "/contact?interest=game#project-enquiry")} variant="secondary" className="w-full min-[520px]:w-auto">
            {gameActions.custom}
          </Button>
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader {...projectsSection} />
        <div className="homepage-projects mt-8 sm:mt-10" data-reveal-group="cards">
          {copy.projects.map((project, index) => (
            <article key={project.title} className="premium-card group flex h-full min-w-0 flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white/[0.045] transition duration-300 hover:-translate-y-0.5 hover:border-emerald/30 hover:bg-white/[0.06]">
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
              <div className="flex min-w-0 flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-2">
                  <span className="premium-status max-w-full break-words rounded-full px-3 py-1 text-xs">{project.category}</span>
                  <span className="max-w-full break-words rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">{project.status}</span>
                </div>
                <h2 className="mt-5 break-words text-2xl font-semibold text-white">{project.title}</h2>
                <p className="mt-3 break-words text-sm leading-6 text-slate-400">{project.description}</p>
                <Link
                  href={getLocalizedHomePath(locale, project.href)}
                  className="mt-auto inline-flex max-w-full break-words pt-5 text-sm font-semibold leading-5 text-emerald transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald/70"
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
        <div className="studio-process mt-8 sm:mt-10" data-reveal-group="cards">
          {copy.process.map((step, index) => (
            <Card key={step.title} className="studio-process__card min-w-0">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-4 break-words text-lg font-semibold text-white">{step.title}</h2>
              <p className="mt-3 break-words text-sm leading-6 text-slate-400">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={proof.eyebrow} title={proof.title} description={proof.description} />
        <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-5" data-reveal-group="cards">
          {proof.items.map((item) => (
            <Card key={item.title} tone="strong" className="h-full min-w-0">
              <h2 className="break-words text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-3 break-words text-sm leading-6 text-slate-400">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-black/24">
        <div className="premium-card surface-hairline grid min-w-0 gap-6 rounded-[var(--radius-feature)] border border-emerald/20 bg-emerald/[0.045] p-5 sm:gap-8 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="min-w-0">
            <p className="premium-kicker mb-4 break-words text-xs font-semibold uppercase">{ctaSection.eyebrow}</p>
            <h2 className="max-w-3xl break-words text-balance text-[clamp(2rem,6vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-white">{ctaSection.title}</h2>
            <p className="mt-4 max-w-2xl break-words text-base leading-7 text-slate-300">{ctaSection.description}</p>
          </div>
          <Button href={getLocalizedHomePath(locale, "/contact#project-enquiry")} className="w-full lg:w-auto">
            {ctaSection.primary}
          </Button>
        </div>
      </Section>
    </>
  );
}
