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

const proofCopy: Record<Locale, {
  eyebrow: string;
  title: string;
  description: string;
  items: { title: string; description: string }[];
}> = {
  en: {
    eyebrow: "Studio proof",
    title: "Work You Can Review Before We Talk",
    description: "OpenGamer puts real games, visible concepts and clearly defined capabilities in front of partners before the first commercial conversation.",
    items: [
      { title: "Playable slot portfolio", description: "Selected OpenGamer titles include public demos where available." },
      { title: "Complete game production", description: "Concept, mathematics, frontend, backend, art and QA can be coordinated as one scope." },
      { title: "Integration support", description: "Operator, aggregator and platform integration work can be included where the project requires it." },
      { title: "Slots and Live Casino product work", description: "The public portfolio includes slot titles, ELEMENTALS and LC App concept work." },
      { title: "Flexible engagement", description: "Engage OpenGamer for selected disciplines, a complete build or dedicated development support." }
    ]
  },
  ru: {
    eyebrow: "Работы студии",
    title: "Реальные проекты, которые можно оценить до первого звонка.",
    description: "Игровые демо, продуктовые концепты и full-cycle возможности дают партнёрам конкретные материалы OpenGamer для оценки до обсуждения scope.",
    items: [
      { title: "Портфолио слот-игр", description: "Выбранные тайтлы OpenGamer можно открыть в публичном demo там, где оно доступно." },
      { title: "Полный цикл game production", description: "Концепт, математика, frontend, backend, арт и QA могут поставляться как единый scope." },
      { title: "Интеграционная разработка", description: "Работа с operator, aggregator и platform integrations может входить в delivery scope." },
      { title: "Слоты и Live Casino продукты", description: "Публичное портфолио включает слот-игры, ELEMENTALS и концепт LC App." },
      { title: "Гибкий формат работы", description: "Можно подключить отдельные дисциплины, полный production cycle или dedicated development support." }
    ]
  },
  hy: {
    eyebrow: "Ստուդիայի աշխատանքներ",
    title: "Իրական նախագծեր, որոնք կարելի է գնահատել մինչև առաջին զանգը։",
    description: "Խաղային demo-ները, product concept-ները և full-cycle հնարավորությունները գործընկերներին տալիս են OpenGamer-ի կոնկրետ աշխատանքներ՝ scope-ը քննարկելուց առաջ։",
    items: [
      { title: "Խաղարկվող slot portfolio", description: "Ընտրված OpenGamer խաղերը հնարավոր է դիտել public demo-ներով, որտեղ դրանք հասանելի են։" },
      { title: "Full-cycle game production", description: "Concept, mathematics, frontend, backend, art և QA կարող են մատուցվել մեկ համակցված scope-ով։" },
      { title: "Integration-oriented delivery", description: "Operator, aggregator և platform integration աշխատանքը կարող է ներառվել delivery scope-ում։" },
      { title: "Slots և Live Casino product work", description: "Public portfolio-ն ներառում է slot titles, ELEMENTALS և LC App concept work։" },
      { title: "Ճկուն համագործակցություն", description: "Հնարավոր է ընտրել առանձին disciplines, ամբողջական production կամ dedicated development support։" }
    ]
  },
  es: {
    eyebrow: "Trabajo del estudio",
    title: "Trabajo real que los socios pueden evaluar antes de la primera llamada.",
    description: "Juegos jugables, conceptos de producto visibles y capacidades full-cycle ofrecen trabajo concreto de OpenGamer para revisar antes de definir el alcance.",
    items: [
      { title: "Portafolio de slots jugables", description: "Los títulos seleccionados de OpenGamer pueden revisarse mediante demos públicas cuando están disponibles." },
      { title: "Producción full-cycle", description: "Concepto, matemática, frontend, backend, arte y QA pueden entregarse como un alcance coordinado." },
      { title: "Entrega orientada a integraciones", description: "El trabajo con integraciones de operadores, agregadores y plataformas puede formar parte del alcance." },
      { title: "Slots y productos Live Casino", description: "El portafolio público incluye slots, ELEMENTALS y el trabajo conceptual de LC App." },
      { title: "Colaboración flexible", description: "Los socios pueden contratar disciplinas concretas, producción completa o soporte de desarrollo dedicado." }
    ]
  },
  pt: {
    eyebrow: "Trabalho do estúdio",
    title: "Trabalho real que os parceiros podem avaliar antes da primeira conversa.",
    description: "Jogos jogáveis, conceitos de produto visíveis e capacidades full-cycle dão aos parceiros trabalho concreto da OpenGamer para avaliar antes de definir o escopo.",
    items: [
      { title: "Portfólio de slots jogáveis", description: "Títulos selecionados da OpenGamer podem ser avaliados por demos públicas quando disponíveis." },
      { title: "Produção full-cycle", description: "Conceito, matemática, frontend, backend, arte e QA podem ser entregues como um escopo coordenado." },
      { title: "Entrega orientada a integrações", description: "Integrações com operadores, agregadores e plataformas podem fazer parte do escopo de entrega." },
      { title: "Slots e produtos Live Casino", description: "O portfólio público inclui slots, ELEMENTALS e o trabalho conceitual do LC App." },
      { title: "Modelo de colaboração flexível", description: "Parceiros podem contratar disciplinas específicas, produção completa ou suporte de desenvolvimento dedicado." }
    ]
  }
};

export function StudioHomepage({ locale = "en" }: { locale?: Locale }) {
  const copy = homepageCopy[locale] || homepageCopy.en;
  const proof = proofCopy[locale] || proofCopy.en;
  const isEnglish = locale === "en";
  const homepageGames = homepageFeaturedGameSlugs
    .map((slug) => games.find((game) => game.slug === slug))
    .filter((game): game is Game => Boolean(game))
    .slice(0, 4);

  const hero = isEnglish
    ? {
        kicker: "iGaming game & product studio",
        heading: "We Build Casino Games and the Technology Behind Them.",
        intro: "OpenGamer combines game production, product thinking and engineering for operators, aggregators, platforms and game providers."
      }
    : copy.hero;

  const capabilitiesSection = isEnglish
    ? {
        eyebrow: "What OpenGamer can own",
        title: "Use the Whole Studio or Only the Part You Need",
        description: "From game concept and mathematics to frontend, backend, art, QA and integration support, the scope can expand or stay focused around your roadmap."
      }
    : copy.sections.capabilities;

  const gamesSection = isEnglish
    ? {
        eyebrow: "Games portfolio",
        title: "Start with the Games",
        description: "Explore selected OpenGamer titles and open public demos where available."
      }
    : copy.sections.games;

  const projectsSection = isEnglish
    ? {
        eyebrow: "Beyond the slot portfolio",
        title: "Original Concepts and Product Work",
        description: "ELEMENTALS and LC App show how OpenGamer approaches Live Casino concepts and B2B product design beyond traditional slot production."
      }
    : copy.sections.projects;

  const ctaSection = isEnglish
    ? {
        eyebrow: "Start a conversation",
        title: "Have a Game, Product or Technical Gap to Solve?",
        description: "Send the brief, current stage and what your team needs. We will keep the first conversation focused on the relevant scope.",
        primary: "Discuss a Project"
      }
    : copy.sections.cta;

  return (
    <>
      <section className="studio-static-hero">
        <div className="studio-static-hero__ambient" aria-hidden="true" />
        <Container className="grid min-h-[calc(100svh-5rem)] gap-10 py-16 sm:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="premium-kicker text-xs font-semibold uppercase">{hero.kicker}</p>
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
              {hero.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">{hero.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={getLocalizedHomePath(locale, "/contact#project-enquiry")}>Discuss a Project</Button>
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
          <SectionHeader {...gamesSection} />
          <Button href={getLocalizedHomePath(locale, "/games")} variant="secondary">
            {isEnglish ? "View All Games" : copy.slides[1].primary}
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4" data-reveal-group="cards">
          {homepageGames.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={getLocalizedHomePath(locale, "/contact?interest=portfolio#project-enquiry")} variant="secondary">
            Request Game Portfolio
          </Button>
          <Button href={getLocalizedHomePath(locale, "/contact?interest=game#project-enquiry")} variant="secondary">
            Discuss Custom Game Production
          </Button>
        </div>
      </Section>

      <Section className="bg-black/20">
        <SectionHeader {...projectsSection} />
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
        <SectionHeader eyebrow={proof.eyebrow} title={proof.title} description={proof.description} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-reveal-group="cards">
          {proof.items.map((item) => (
            <Card key={item.title} tone="strong" className="h-full">
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-black/24">
        <div className="premium-card surface-hairline grid gap-8 rounded-lg border border-emerald/20 bg-emerald/[0.045] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="premium-kicker mb-4 text-xs font-semibold uppercase">{ctaSection.eyebrow}</p>
            <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">{ctaSection.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">{ctaSection.description}</p>
          </div>
          <Button href={getLocalizedHomePath(locale, "/contact#project-enquiry")} className="w-full sm:w-auto">
            {ctaSection.primary}
          </Button>
        </div>
      </Section>
    </>
  );
}
