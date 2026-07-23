import type { Locale } from "@/lib/i18n";

export type HomeSlide = {
  id: string;
  category: string;
  title: string;
  description: string;
  primary: string;
  primaryHref: string;
  secondary?: string;
  secondaryHref?: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  theme: "studio" | "slots" | "elementals" | "lc" | "tech" | "brand";
};

type HomeCopy = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    kicker: string;
    heading: string;
    intro: string;
    playLabel: string;
    pauseLabel: string;
    previousLabel: string;
    nextLabel: string;
    slideLabel: string;
    tabsLabel: string;
  };
  sections: {
    capabilities: SectionCopy;
    projects: SectionCopy;
    games: SectionCopy;
    process: SectionCopy;
    technology: SectionCopy;
    engagement: SectionCopy;
    why: SectionCopy;
    cta: SectionCopy & { primary: string };
  };
  slides: HomeSlide[];
  capabilities: { title: string; items: string[] }[];
  projects: { title: string; category: string; status: string; description: string; href: string; cta: string; image: string; imageAlt: string }[];
  process: { title: string; description: string }[];
  technology: { title: string; description: string }[];
  engagement: { title: string; description: string }[];
  why: string[];
};

type SectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

const baseSlides = {
  studio: {
    image: "/assets/brand/opengamer-og.png",
    imageAlt: "OpenGamer Studio brand presentation",
    imageWidth: 1200,
    imageHeight: 630,
    theme: "studio" as const,
    primaryHref: "/services",
    secondaryHref: "/games"
  },
  slots: {
    image: "/assets/games/forest-fortune/source.jpg",
    imageAlt: "Forest Fortune slot game artwork from the OpenGamer portfolio",
    imageWidth: 600,
    imageHeight: 420,
    theme: "slots" as const,
    primaryHref: "/games",
    secondaryHref: "/contact"
  },
  elementals: {
    image: "/assets/projects/elementals/expositions/nexus-stage.webp",
    imageAlt: "ELEMENTALS Nexus stage concept artwork",
    imageWidth: 1200,
    imageHeight: 676,
    theme: "elementals" as const,
    primaryHref: "/portfolio/elementals",
    secondaryHref: "/services/live-casino-development"
  },
  lc: {
    image: "/assets/projects/lc-app/optimized/lc-app-device-ecosystem.webp",
    imageAlt: "LC App concept interface across multiple devices",
    imageWidth: 1672,
    imageHeight: 941,
    theme: "lc" as const,
    primaryHref: "/portfolio/lc-app",
    secondaryHref: "/contact"
  },
  tech: {
    image: "/assets/games/deep-dive/artwork.jpg",
    imageAlt: "Deep Dive game artwork representing frontend and backend production",
    imageWidth: 600,
    imageHeight: 420,
    theme: "tech" as const,
    primaryHref: "/technology",
    secondaryHref: "/services"
  },
  brand: {
    image: "/assets/games/choco-boom/artwork.jpg",
    imageAlt: "Choco Boom slot artwork representing branded and custom games",
    imageWidth: 600,
    imageHeight: 420,
    theme: "brand" as const,
    primaryHref: "/contact",
    secondaryHref: "/games"
  }
};

export const homepageCopy: Record<Locale, HomeCopy> = {
  en: {
    meta: {
      title: "OpenGamer Studio | iGaming Development Studio",
      description: "OpenGamer creates games, gaming products, technology and complete iGaming experiences for operators, aggregators, brands and providers.",
      ogTitle: "OpenGamer Studio | Games, Products and iGaming Technology",
      ogDescription: "A multi-product iGaming development studio for games, technology, integrations and original product concepts."
    },
    hero: {
      kicker: "Multi-product iGaming studio",
      heading: "We build games, products and technology for iGaming.",
      intro: "From game concepts and mathematics to frontend, backend, integrations and complete product development.",
      playLabel: "Start autoplay",
      pauseLabel: "Pause autoplay",
      previousLabel: "Previous project",
      nextLabel: "Next project",
      slideLabel: "Project showcase",
      tabsLabel: "Select project slide"
    },
    sections: {
      capabilities: {
        eyebrow: "Studio capabilities",
        title: "Complete products or selected production stages.",
        description: "OpenGamer can support one discipline, several production layers or a full-cycle game and product build."
      },
      projects: {
        eyebrow: "Featured projects",
        title: "A broader studio ecosystem.",
        description: "Slots, live game-show concepts and product interfaces sit inside one OpenGamer delivery system."
      },
      games: {
        eyebrow: "Games portfolio",
        title: "Confirmed game titles with real artwork.",
        description: "Explore selected OpenGamer slot titles and demo links where public demos are available."
      },
      process: {
        eyebrow: "Development process",
        title: "From idea to delivery without unclear handoffs.",
        description: "The process is flexible: partners can engage for one stage, selected stages or full-cycle production."
      },
      technology: {
        eyebrow: "Technology and delivery",
        title: "Game-facing craft connected to operating infrastructure.",
        description: "Frontend, backend, mathematics, RNG/RGS-related development, APIs and integration support are presented as one delivery scope."
      },
      engagement: {
        eyebrow: "Engagement models",
        title: "Commercial structures built around the project.",
        description: "OpenGamer can discuss fixed-scope development, selected engineering layers, licensing, IP and partnership formats."
      },
      why: {
        eyebrow: "Why OpenGamer",
        title: "Built for serious B2B delivery.",
        description: "The studio combines product, creative and engineering work without unsupported market claims."
      },
      cta: {
        eyebrow: "Commercial conversation",
        title: "Tell us what you want to build.",
        description: "Share the project type, current stage and delivery needs. OpenGamer will review the right engagement model.",
        primary: "Discuss a Project"
      }
    },
    slides: [
      {
        id: "studio",
        category: "OpenGamer Studio",
        title: "Games, products and technology in one studio.",
        description: "OpenGamer creates casino games, product concepts, custom software and iGaming technology layers.",
        primary: "View Services",
        secondary: "Play Games",
        ...baseSlides.studio
      },
      {
        id: "slots",
        category: "Slot Games Portfolio",
        title: "Portfolio titles with local game artwork.",
        description: "Selected OpenGamer slot titles are presented with real assets and demo links where confirmed.",
        primary: "Explore Games",
        secondary: "Discuss Licensing",
        ...baseSlides.slots
      },
      {
        id: "elementals",
        category: "Premium Game-Show Concept",
        title: "ELEMENTALS as one original product direction.",
        description: "A cinematic Live Casino show-game concept built around the Great Wheel and four elemental realms.",
        primary: "Explore ELEMENTALS",
        secondary: "Live Casino Development",
        ...baseSlides.elementals
      },
      {
        id: "lc-app",
        category: "Product Concept",
        title: "LC App expands the studio beyond individual games.",
        description: "A B2B social engagement layer concept for existing Live Casino operators and providers.",
        primary: "View LC App",
        secondary: "Contact OpenGamer",
        ...baseSlides.lc
      },
      {
        id: "technology",
        category: "Frontend and Backend Development",
        title: "Engineering support around the game and operating layer.",
        description: "Frontend, backend, game logic, APIs and RGS-related work can be delivered as selected stages or full production.",
        primary: "View Technology",
        secondary: "View Services",
        ...baseSlides.tech
      },
      {
        id: "custom-products",
        category: "Branded Games and Custom Products",
        title: "Custom development for brands, operators and partners.",
        description: "OpenGamer can shape branded games, custom slot work and product builds around commercial goals.",
        primary: "Discuss a Project",
        secondary: "View Portfolio",
        ...baseSlides.brand
      }
    ],
    capabilities: [
      { title: "Game creation", items: ["Game concepts", "Mechanics", "Mathematics and logic", "Slot frontend", "Slot backend", "Art and animation", "QA and optimisation"] },
      { title: "Technology", items: ["RNG-related development", "RGS-related development", "Backend systems", "API integrations", "Reverse integrations", "Operator and aggregator integrations"] },
      { title: "Commercial formats", items: ["Custom slots", "Branded games", "Frontend-only delivery", "Full-cycle production", "Licensing discussions", "Revenue-share cooperation", "IP or portfolio acquisition"] }
    ],
    projects: [
      { title: "ELEMENTALS", category: "Live Casino show-game concept", status: "Original Game Concept · In Development", description: "Premium game-show concept built around the Great Wheel and elemental realms.", href: "/portfolio/elementals", cta: "Explore Project", image: "/assets/projects/elementals/expositions/nexus-stage.webp", imageAlt: "ELEMENTALS Nexus stage artwork" },
      { title: "LC App", category: "B2B social product concept", status: "Product Concept · In Development", description: "A social engagement layer concept for existing Live Casino ecosystems.", href: "/portfolio/lc-app", cta: "View Concept", image: "/assets/projects/lc-app/optimized/lc-app-device-ecosystem.webp", imageAlt: "LC App multi-device concept interface" },
      { title: "Game Portfolio", category: "Slot game catalogue", status: "Portfolio Games", description: "Selected OpenGamer titles with real artwork and confirmed demos where available.", href: "/games", cta: "View Games", image: "/assets/games/deep-dive/artwork.jpg", imageAlt: "Deep Dive slot artwork" }
    ],
    process: [
      { title: "Product idea", description: "Clarify the business goal, audience and production scope." },
      { title: "Concept and mechanics", description: "Define rules, player experience, features and format." },
      { title: "Mathematics and logic", description: "Shape the model, game behavior and backend logic needs." },
      { title: "Visual design", description: "Translate the product into art direction, UI and presentation." },
      { title: "Frontend development", description: "Build responsive game or product interfaces for target environments." },
      { title: "Backend development", description: "Implement services, APIs, game state and supporting systems." },
      { title: "Integration and QA", description: "Prepare wallet, session, reporting and validation flows." },
      { title: "Delivery and support", description: "Package the build and support the next technical phase." }
    ],
    technology: [
      { title: "Frontend", description: "HTML5 game clients, responsive interfaces and product UI." },
      { title: "Backend", description: "Game logic, services, APIs and operational support layers." },
      { title: "Mathematics", description: "Models and logic prepared for casino game production." },
      { title: "RNG / RGS", description: "RNG and RGS-related development support without unsupported certification claims." },
      { title: "Integrations", description: "Wallet, session, operator, aggregator and reverse-integration workflows." },
      { title: "Custom products", description: "Casino software, branded games and product concepts." }
    ],
    engagement: [
      { title: "Fixed-scope development", description: "A defined project, feature or game production stage." },
      { title: "Frontend or backend layer", description: "Selected engineering work without forcing full-cycle engagement." },
      { title: "Full game production", description: "Concept, production, engineering and delivery managed together." },
      { title: "Licensing or partnership", description: "Commercial discussions around games, IP, portfolio or strategic cooperation." }
    ],
    why: ["Multi-product studio, not a one-game company", "Real game artwork and project materials", "Product, creative and engineering thinking combined", "Flexible commercial engagement models"]
  },
  ru: {} as HomeCopy,
  hy: {} as HomeCopy,
  es: {} as HomeCopy,
  pt: {} as HomeCopy
};

homepageCopy.ru = {
  ...homepageCopy.en,
  meta: {
    title: "OpenGamer Studio | Студия iGaming-разработки",
    description: "OpenGamer создает игры, игровые продукты, технологии и полноценные iGaming-решения для операторов, агрегаторов, брендов и провайдеров.",
    ogTitle: "OpenGamer Studio | Игры, продукты и iGaming-технологии",
    ogDescription: "Мультипродуктовая iGaming-студия для игр, технологий, интеграций и оригинальных продуктовых концептов."
  },
  hero: {
    kicker: "Мультипродуктовая iGaming-студия",
    heading: "Мы создаем игры, продукты и технологии для iGaming.",
    intro: "От игровых концептов и математики до frontend, backend, интеграций и полного продуктового цикла.",
    playLabel: "Запустить автопрокрутку",
    pauseLabel: "Остановить автопрокрутку",
    previousLabel: "Предыдущий проект",
    nextLabel: "Следующий проект",
    slideLabel: "Витрина проектов",
    tabsLabel: "Выбор слайда проекта"
  },
  sections: {
    capabilities: { eyebrow: "Возможности студии", title: "Полные продукты или отдельные этапы производства.", description: "OpenGamer может подключаться к одной дисциплине, нескольким производственным слоям или полному циклу разработки." },
    projects: { eyebrow: "Ключевые проекты", title: "Широкая экосистема студии.", description: "Слоты, live show-game концепты и продуктовые интерфейсы находятся внутри одной OpenGamer-системы разработки." },
    games: { eyebrow: "Портфолио игр", title: "Подтвержденные игровые тайтлы с реальным артом.", description: "Изучите выбранные слоты OpenGamer и demo-ссылки там, где они публично подтверждены." },
    process: { eyebrow: "Процесс разработки", title: "От идеи до поставки без размытых зон ответственности.", description: "Модель гибкая: один этап, несколько этапов или полный производственный цикл." },
    technology: { eyebrow: "Технологии и поставка", title: "Игровой frontend связан с операционной инфраструктурой.", description: "Frontend, backend, математика, RNG/RGS-related разработка, API и интеграции представлены как единый delivery scope." },
    engagement: { eyebrow: "Модели сотрудничества", title: "Коммерческая структура под задачу.", description: "OpenGamer может обсуждать fixed-scope разработку, отдельные engineering layers, licensing, IP и партнерские форматы." },
    why: { eyebrow: "Почему OpenGamer", title: "Студия для серьезной B2B-поставки.", description: "Команда соединяет продукт, креатив и инженерию без неподтвержденных рыночных заявлений." },
    cta: { eyebrow: "Коммерческий диалог", title: "Расскажите, что нужно построить.", description: "Опишите тип проекта, текущую стадию и delivery-задачу. OpenGamer предложит подходящую модель сотрудничества.", primary: "Обсудить проект" }
  },
  slides: homepageCopy.en.slides.map((slide) => ({
    ...slide,
    primary: slide.id === "studio" ? "Смотреть услуги" : slide.id === "slots" ? "Смотреть игры" : slide.id === "technology" ? "Смотреть технологии" : slide.id === "custom-products" ? "Обсудить проект" : "Открыть проект",
    secondary: slide.id === "studio" ? "Играть в демо" : slide.secondary
  })),
  capabilities: [
    { title: "Создание игр", items: ["Игровые концепты", "Механики", "Математика и логика", "Slot frontend", "Slot backend", "Арт и анимация", "QA и оптимизация"] },
    { title: "Технологии", items: ["RNG-related разработка", "RGS-related разработка", "Backend-системы", "API-интеграции", "Reverse integrations", "Интеграции с операторами и агрегаторами"] },
    { title: "Коммерческие форматы", items: ["Custom slots", "Branded games", "Frontend-only delivery", "Full-cycle production", "Licensing discussions", "Revenue-share cooperation", "IP или portfolio acquisition"] }
  ],
  projects: [
    { ...homepageCopy.en.projects[0], category: "Концепт Live Casino show game", description: "Премиальный show-game концепт вокруг Great Wheel и elemental realms.", cta: "Открыть проект" },
    { ...homepageCopy.en.projects[1], category: "B2B social product concept", description: "Концепт social engagement layer для существующих Live Casino экосистем.", cta: "Смотреть концепт" },
    { ...homepageCopy.en.projects[2], category: "Каталог слот-игр", description: "Выбранные OpenGamer тайтлы с реальным артом и подтвержденными demo там, где они доступны.", cta: "Смотреть игры" }
  ],
  process: [
    { title: "Продуктовая идея", description: "Уточняем бизнес-цель, аудиторию и production scope." },
    { title: "Концепт и механики", description: "Определяем правила, player experience, features и format." },
    { title: "Математика и логика", description: "Формируем модель, game behavior и backend logic needs." },
    { title: "Визуальный дизайн", description: "Переводим продукт в art direction, UI и presentation." },
    { title: "Frontend-разработка", description: "Создаем responsive game или product interfaces для целевых сред." },
    { title: "Backend-разработка", description: "Реализуем services, API, game state и supporting systems." },
    { title: "Интеграция и QA", description: "Готовим wallet, session, reporting и validation flows." },
    { title: "Поставка и поддержка", description: "Пакуем build и поддерживаем следующую техническую фазу." }
  ],
  technology: [
    { title: "Frontend", description: "HTML5 game clients, responsive interfaces и product UI." },
    { title: "Backend", description: "Game logic, services, API и operational support layers." },
    { title: "Математика", description: "Models и logic для casino game production." },
    { title: "RNG / RGS", description: "RNG и RGS-related development support без неподтвержденных certification claims." },
    { title: "Интеграции", description: "Wallet, session, operator, aggregator и reverse-integration workflows." },
    { title: "Custom products", description: "Casino software, branded games и product concepts." }
  ],
  engagement: [
    { title: "Fixed-scope development", description: "Определенный проект, feature или этап game production." },
    { title: "Frontend или backend layer", description: "Выбранная engineering-работа без обязательного full-cycle формата." },
    { title: "Full game production", description: "Concept, production, engineering и delivery в одном управляемом процессе." },
    { title: "Licensing или partnership", description: "Коммерческие обсуждения по games, IP, portfolio или strategic cooperation." }
  ],
  why: ["Мультипродуктовая студия, а не компания одной игры", "Реальный game artwork и проектные материалы", "Продукт, креатив и инженерия в одной команде", "Гибкие commercial engagement models"]
};

homepageCopy.hy = {
  ...homepageCopy.en,
  meta: {
    title: "OpenGamer Studio | iGaming զարգացման ստուդիա",
    description: "OpenGamer-ը ստեղծում է խաղեր, խաղային ապրանքներ, տեխնոլոգիա և ամբողջական iGaming փորձառություններ օպերատորների, ագրեգատորների, բրենդների և պրովայդերների համար:",
    ogTitle: "OpenGamer Studio | Խաղեր, ապրանքներ և iGaming տեխնոլոգիա",
    ogDescription: "Բազմապրոդուկտ iGaming զարգացման ստուդիա խաղերի, տեխնոլոգիայի, ինտեգրացիաների և օրիգինալ կոնցեպտների համար:"
  },
  hero: {
    kicker: "Բազմապրոդուկտ iGaming ստուդիա",
    heading: "Մենք ստեղծում ենք խաղեր, ապրանքներ և տեխնոլոգիա iGaming-ի համար:",
    intro: "Խաղային կոնցեպտներից և մաթեմատիկայից մինչև frontend, backend, ինտեգրացիաներ և ամբողջական product development:",
    playLabel: "Միացնել ավտոփոփոխումը",
    pauseLabel: "Դադարեցնել ավտոփոփոխումը",
    previousLabel: "Նախորդ նախագիծ",
    nextLabel: "Հաջորդ նախագիծ",
    slideLabel: "Նախագծերի ցուցադրություն",
    tabsLabel: "Ընտրել նախագծի սլայդը"
  },
  sections: {
    capabilities: { eyebrow: "Ստուդիայի հնարավորություններ", title: "Ամբողջական ապրանքներ կամ ընտրված արտադրական փուլեր:", description: "OpenGamer-ը կարող է աջակցել մեկ ուղղությամբ, մի քանի շերտերում կամ ամբողջական խաղային ու product build-ում:" },
    projects: { eyebrow: "Նշված նախագծեր", title: "Ավելի լայն ստուդիական էկոհամակարգ:", description: "Սլոթերը, live show-game կոնցեպտները և product interfaces-ը մեկ OpenGamer delivery system-ի մաս են:" },
    games: { eyebrow: "Խաղերի պորտֆոլիո", title: "Հաստատված խաղեր իրական artwork-ով:", description: "Դիտեք ընտրված OpenGamer սլոթերը և demo հղումները, որտեղ դրանք հասանելի են:" },
    process: { eyebrow: "Զարգացման գործընթաց", title: "Գաղափարից մինչև delivery առանց անորոշ handoff-ների:", description: "Գործընթացը ճկուն է՝ մեկ փուլ, ընտրված փուլեր կամ full-cycle production:" },
    technology: { eyebrow: "Տեխնոլոգիա և delivery", title: "Խաղային craft-ը միացված է operating infrastructure-ին:", description: "Frontend, backend, mathematics, RNG/RGS-related development, API և ինտեգրացիաներ մեկ delivery scope-ում:" },
    engagement: { eyebrow: "Գործակցության մոդելներ", title: "Կոմերցիոն կառուցվածք նախագծի շուրջ:", description: "OpenGamer-ը կարող է քննարկել fixed-scope development, engineering layers, licensing, IP և partnership formats:" },
    why: { eyebrow: "Ինչու OpenGamer", title: "Ստուդիա լուրջ B2B delivery-ի համար:", description: "Ստուդիան միավորում է product, creative և engineering աշխատանքը առանց չհաստատված շուկայական պնդումների:" },
    cta: { eyebrow: "Կոմերցիոն խոսակցություն", title: "Ասեք, ինչ եք ուզում կառուցել:", description: "Նշեք նախագծի տեսակը, փուլը և delivery պահանջները. OpenGamer-ը կդիտարկի համապատասխան մոդելը:", primary: "Քննարկել նախագիծը" }
  },
  slides: homepageCopy.en.slides.map((slide) => ({ ...slide, primary: slide.id === "studio" ? "Դիտել ծառայությունները" : slide.id === "slots" ? "Դիտել խաղերը" : slide.id === "custom-products" ? "Քննարկել նախագիծը" : "Դիտել նախագիծը" })),
  capabilities: [
    { title: "Խաղերի ստեղծում", items: ["Խաղային կոնցեպտներ", "Մեխանիկաներ", "Մաթեմատիկա և տրամաբանություն", "Slot frontend", "Slot backend", "Արտ և անիմացիա", "QA և օպտիմիզացիա"] },
    { title: "Տեխնոլոգիա", items: ["RNG-related development", "RGS-related development", "Backend systems", "API integrations", "Reverse integrations", "Operator և aggregator integrations"] },
    { title: "Կոմերցիոն ձևաչափեր", items: ["Custom slots", "Branded games", "Frontend-only delivery", "Full-cycle production", "Licensing discussions", "Revenue-share cooperation", "IP կամ portfolio acquisition"] }
  ],
  projects: [
    { ...homepageCopy.en.projects[0], category: "Live Casino show-game կոնցեպտ", description: "Պրեմիում show-game կոնցեպտ Great Wheel-ի և elemental realms-ի շուրջ:", cta: "Դիտել նախագիծը" },
    { ...homepageCopy.en.projects[1], category: "B2B social product concept", description: "Social engagement layer կոնցեպտ գոյություն ունեցող Live Casino էկոհամակարգերի համար:", cta: "Դիտել կոնցեպտը" },
    { ...homepageCopy.en.projects[2], category: "Սլոթ խաղերի կատալոգ", description: "Ընտրված OpenGamer խաղեր իրական artwork-ով և հաստատված demo հղումներով, որտեղ հասանելի են:", cta: "Դիտել խաղերը" }
  ],
  process: [
    { title: "Product idea", description: "Հստակեցվում են բիզնես նպատակը, լսարանը և production scope-ը:" },
    { title: "Concept and mechanics", description: "Սահմանվում են կանոնները, player experience-ը, features-ը և format-ը:" },
    { title: "Mathematics and logic", description: "Ձևավորվում են model-ը, game behavior-ը և backend logic needs-ը:" },
    { title: "Visual design", description: "Ապրանքը վերածվում է art direction-ի, UI-ի և presentation-ի:" },
    { title: "Frontend development", description: "Կառուցվում են responsive game կամ product interfaces:" },
    { title: "Backend development", description: "Իրականացվում են services, API, game state և supporting systems:" },
    { title: "Integration and QA", description: "Պատրաստվում են wallet, session, reporting և validation flows:" },
    { title: "Delivery and support", description: "Build-ը փաթեթավորվում է և աջակցվում է հաջորդ տեխնիկական փուլը:" }
  ],
  technology: [
    { title: "Frontend", description: "HTML5 game clients, responsive interfaces և product UI:" },
    { title: "Backend", description: "Game logic, services, API և operational support layers:" },
    { title: "Mathematics", description: "Models և logic casino game production-ի համար:" },
    { title: "RNG / RGS", description: "RNG և RGS-related development support առանց չհաստատված certification claims:" },
    { title: "Integrations", description: "Wallet, session, operator, aggregator և reverse-integration workflows:" },
    { title: "Custom products", description: "Casino software, branded games և product concepts:" }
  ],
  engagement: [
    { title: "Fixed-scope development", description: "Սահմանված project, feature կամ game production stage:" },
    { title: "Frontend կամ backend layer", description: "Ընտրված engineering աշխատանք առանց պարտադիր full-cycle engagement-ի:" },
    { title: "Full game production", description: "Concept, production, engineering և delivery միասին:" },
    { title: "Licensing կամ partnership", description: "Commercial discussions games, IP, portfolio կամ strategic cooperation-ի շուրջ:" }
  ],
  why: ["Բազմապրոդուկտ ստուդիա, ոչ մեկ խաղի ընկերություն", "Իրական game artwork և project materials", "Product, creative և engineering մտածողություն միասին", "Ճկուն commercial engagement models"]
};

homepageCopy.es = {
  ...homepageCopy.en,
  meta: {
    title: "OpenGamer Studio | Estudio de desarrollo iGaming",
    description: "OpenGamer crea juegos, productos, tecnologia y experiencias iGaming completas para operadores, agregadores, marcas y proveedores.",
    ogTitle: "OpenGamer Studio | Juegos, productos y tecnologia iGaming",
    ogDescription: "Un estudio iGaming multiproducto para juegos, tecnologia, integraciones y conceptos propios."
  },
  hero: { ...homepageCopy.en.hero, kicker: "Estudio iGaming multiproducto", heading: "Creamos juegos, productos y tecnologia para iGaming.", intro: "Desde conceptos y matematica de juego hasta frontend, backend, integraciones y desarrollo completo de producto.", playLabel: "Iniciar autoplay", pauseLabel: "Pausar autoplay", previousLabel: "Proyecto anterior", nextLabel: "Proyecto siguiente", slideLabel: "Showcase de proyectos", tabsLabel: "Seleccionar slide" },
  sections: {
    capabilities: { eyebrow: "Capacidades del estudio", title: "Productos completos o etapas seleccionadas.", description: "OpenGamer puede apoyar una disciplina, varias capas de produccion o un desarrollo full-cycle." },
    projects: { eyebrow: "Proyectos destacados", title: "Un ecosistema de estudio mas amplio.", description: "Slots, conceptos live show-game e interfaces de producto dentro de un mismo sistema OpenGamer." },
    games: { eyebrow: "Portfolio de juegos", title: "Titulos confirmados con arte real.", description: "Explora slots seleccionados de OpenGamer y demos publicas cuando estan disponibles." },
    process: { eyebrow: "Proceso de desarrollo", title: "De la idea a la entrega con responsabilidad clara.", description: "Modelo flexible: una etapa, varias etapas o produccion full-cycle." },
    technology: { eyebrow: "Tecnologia y delivery", title: "Produccion de juego conectada a infraestructura operativa.", description: "Frontend, backend, matematica, desarrollo RNG/RGS-related, APIs e integraciones como un scope unico." },
    engagement: { eyebrow: "Modelos de colaboracion", title: "Estructuras comerciales segun el proyecto.", description: "OpenGamer puede discutir desarrollo fixed-scope, capas de ingenieria, licensing, IP y partnership." },
    why: { eyebrow: "Por que OpenGamer", title: "Preparado para delivery B2B serio.", description: "El estudio combina producto, creatividad e ingenieria sin afirmaciones comerciales no confirmadas." },
    cta: { eyebrow: "Conversacion comercial", title: "Cuentanos que quieres construir.", description: "Comparte el tipo de proyecto, etapa actual y necesidades de delivery. OpenGamer revisara el modelo adecuado.", primary: "Hablar de un proyecto" }
  },
  slides: homepageCopy.en.slides.map((slide) => ({ ...slide, primary: slide.id === "studio" ? "Ver servicios" : slide.id === "slots" ? "Ver juegos" : slide.id === "custom-products" ? "Hablar de un proyecto" : "Explorar proyecto" })),
  capabilities: [
    { title: "Creacion de juegos", items: ["Conceptos de juego", "Mecanicas", "Matematica y logica", "Slot frontend", "Slot backend", "Arte y animacion", "QA y optimizacion"] },
    { title: "Tecnologia", items: ["Desarrollo RNG-related", "Desarrollo RGS-related", "Sistemas backend", "Integraciones API", "Reverse integrations", "Integraciones con operadores y agregadores"] },
    { title: "Formatos comerciales", items: ["Custom slots", "Branded games", "Frontend-only delivery", "Full-cycle production", "Licensing discussions", "Revenue-share cooperation", "IP o portfolio acquisition"] }
  ],
  projects: [
    { ...homepageCopy.en.projects[0], category: "Concepto Live Casino show-game", description: "Concepto premium de show-game basado en Great Wheel y elemental realms.", cta: "Explorar proyecto" },
    { ...homepageCopy.en.projects[1], category: "Concepto social B2B", description: "Capa de social engagement para ecosistemas existentes de Live Casino.", cta: "Ver concepto" },
    { ...homepageCopy.en.projects[2], category: "Catalogo de slots", description: "Titulos seleccionados de OpenGamer con arte real y demos confirmadas cuando estan disponibles.", cta: "Ver juegos" }
  ],
  process: [
    { title: "Idea de producto", description: "Alinear objetivo comercial, audiencia y alcance de produccion." },
    { title: "Concepto y mecanicas", description: "Definir reglas, player experience, features y formato." },
    { title: "Matematica y logica", description: "Preparar el modelo, comportamiento de juego y necesidades backend." },
    { title: "Diseno visual", description: "Convertir el producto en art direction, UI y presentacion." },
    { title: "Frontend development", description: "Crear interfaces responsive de juego o producto." },
    { title: "Backend development", description: "Implementar servicios, APIs, game state y sistemas de soporte." },
    { title: "Integracion y QA", description: "Preparar wallet, session, reporting y validation flows." },
    { title: "Entrega y soporte", description: "Empaquetar el build y apoyar la siguiente fase tecnica." }
  ],
  technology: [
    { title: "Frontend", description: "HTML5 game clients, responsive interfaces y product UI." },
    { title: "Backend", description: "Game logic, services, APIs y operational support layers." },
    { title: "Matematica", description: "Models y logic preparados para casino game production." },
    { title: "RNG / RGS", description: "Soporte RNG y RGS-related sin claims de certificacion no confirmados." },
    { title: "Integraciones", description: "Wallet, session, operator, aggregator y reverse-integration workflows." },
    { title: "Custom products", description: "Casino software, branded games y product concepts." }
  ],
  engagement: [
    { title: "Fixed-scope development", description: "Proyecto, feature o etapa de produccion claramente definida." },
    { title: "Frontend o backend layer", description: "Trabajo de ingenieria seleccionado sin forzar full-cycle engagement." },
    { title: "Full game production", description: "Concept, production, engineering y delivery gestionados juntos." },
    { title: "Licensing o partnership", description: "Conversaciones comerciales sobre games, IP, portfolio o strategic cooperation." }
  ],
  why: ["Estudio multiproducto, no una empresa de un solo juego", "Arte real de juegos y materiales de proyecto", "Producto, creatividad e ingenieria combinados", "Modelos comerciales flexibles"]
};

homepageCopy.pt = {
  ...homepageCopy.en,
  meta: {
    title: "OpenGamer Studio | Estudio de desenvolvimento iGaming",
    description: "A OpenGamer cria jogos, produtos, tecnologia e experiencias iGaming completas para operadores, agregadores, marcas e provedores.",
    ogTitle: "OpenGamer Studio | Jogos, produtos e tecnologia iGaming",
    ogDescription: "Um estudio iGaming multiproduto para jogos, tecnologia, integracoes e conceitos proprios."
  },
  hero: { ...homepageCopy.en.hero, kicker: "Estudio iGaming multiproduto", heading: "Criamos jogos, produtos e tecnologia para iGaming.", intro: "De conceitos e matematica de jogo a frontend, backend, integracoes e desenvolvimento completo de produto.", playLabel: "Iniciar autoplay", pauseLabel: "Pausar autoplay", previousLabel: "Projeto anterior", nextLabel: "Proximo projeto", slideLabel: "Showcase de projetos", tabsLabel: "Selecionar slide" },
  sections: {
    capabilities: { eyebrow: "Capacidades do estudio", title: "Produtos completos ou etapas selecionadas.", description: "A OpenGamer pode apoiar uma disciplina, varias camadas de producao ou um build full-cycle." },
    projects: { eyebrow: "Projetos em destaque", title: "Um ecossistema de estudio mais amplo.", description: "Slots, conceitos live show-game e interfaces de produto dentro de um unico sistema OpenGamer." },
    games: { eyebrow: "Portfolio de jogos", title: "Titulos confirmados com arte real.", description: "Explore slots selecionados da OpenGamer e links de demo quando disponiveis." },
    process: { eyebrow: "Processo de desenvolvimento", title: "Da ideia a entrega com responsabilidade clara.", description: "Modelo flexivel: uma etapa, etapas selecionadas ou producao full-cycle." },
    technology: { eyebrow: "Tecnologia e delivery", title: "Craft de jogo conectado a infraestrutura operacional.", description: "Frontend, backend, matematica, desenvolvimento RNG/RGS-related, APIs e integracoes como um escopo unico." },
    engagement: { eyebrow: "Modelos de colaboracao", title: "Estruturas comerciais conforme o projeto.", description: "A OpenGamer pode discutir desenvolvimento fixed-scope, camadas de engenharia, licensing, IP e partnership." },
    why: { eyebrow: "Por que OpenGamer", title: "Construida para delivery B2B serio.", description: "O estudio combina produto, criatividade e engenharia sem afirmacoes de mercado nao confirmadas." },
    cta: { eyebrow: "Conversa comercial", title: "Conte o que voce quer construir.", description: "Compartilhe o tipo de projeto, estagio atual e necessidades de delivery. A OpenGamer avaliara o modelo adequado.", primary: "Discutir um projeto" }
  },
  slides: homepageCopy.en.slides.map((slide) => ({ ...slide, primary: slide.id === "studio" ? "Ver servicos" : slide.id === "slots" ? "Ver jogos" : slide.id === "custom-products" ? "Discutir um projeto" : "Explorar projeto" })),
  capabilities: [
    { title: "Criacao de jogos", items: ["Conceitos de jogo", "Mecanicas", "Matematica e logica", "Slot frontend", "Slot backend", "Arte e animacao", "QA e otimizacao"] },
    { title: "Tecnologia", items: ["Desenvolvimento RNG-related", "Desenvolvimento RGS-related", "Sistemas backend", "Integracoes API", "Reverse integrations", "Integracoes com operadores e agregadores"] },
    { title: "Formatos comerciais", items: ["Custom slots", "Branded games", "Frontend-only delivery", "Full-cycle production", "Licensing discussions", "Revenue-share cooperation", "IP ou portfolio acquisition"] }
  ],
  projects: [
    { ...homepageCopy.en.projects[0], category: "Conceito Live Casino show-game", description: "Conceito premium de show-game em torno da Great Wheel e elemental realms.", cta: "Explorar projeto" },
    { ...homepageCopy.en.projects[1], category: "Conceito social B2B", description: "Camada de social engagement para ecossistemas existentes de Live Casino.", cta: "Ver conceito" },
    { ...homepageCopy.en.projects[2], category: "Catalogo de slots", description: "Titulos selecionados da OpenGamer com arte real e demos confirmadas quando disponiveis.", cta: "Ver jogos" }
  ],
  process: [
    { title: "Ideia de produto", description: "Alinhar objetivo comercial, publico e escopo de producao." },
    { title: "Conceito e mecanicas", description: "Definir regras, player experience, features e formato." },
    { title: "Matematica e logica", description: "Preparar modelo, comportamento do jogo e necessidades backend." },
    { title: "Design visual", description: "Transformar o produto em art direction, UI e apresentacao." },
    { title: "Frontend development", description: "Construir interfaces responsive de jogo ou produto." },
    { title: "Backend development", description: "Implementar services, APIs, game state e supporting systems." },
    { title: "Integracao e QA", description: "Preparar wallet, session, reporting e validation flows." },
    { title: "Entrega e suporte", description: "Empacotar o build e apoiar a proxima fase tecnica." }
  ],
  technology: [
    { title: "Frontend", description: "HTML5 game clients, responsive interfaces e product UI." },
    { title: "Backend", description: "Game logic, services, APIs e operational support layers." },
    { title: "Matematica", description: "Models e logic preparados para casino game production." },
    { title: "RNG / RGS", description: "Suporte RNG e RGS-related sem claims de certificacao nao confirmados." },
    { title: "Integracoes", description: "Wallet, session, operator, aggregator e reverse-integration workflows." },
    { title: "Custom products", description: "Casino software, branded games e product concepts." }
  ],
  engagement: [
    { title: "Fixed-scope development", description: "Projeto, feature ou etapa de producao claramente definida." },
    { title: "Frontend ou backend layer", description: "Trabalho de engenharia selecionado sem exigir full-cycle engagement." },
    { title: "Full game production", description: "Concept, production, engineering e delivery geridos juntos." },
    { title: "Licensing ou partnership", description: "Conversas comerciais sobre games, IP, portfolio ou strategic cooperation." }
  ],
  why: ["Estudio multiproduto, nao uma empresa de um jogo so", "Arte real de jogos e materiais de projeto", "Produto, criatividade e engenharia combinados", "Modelos comerciais flexiveis"]
};

homepageCopy.ru.slides = [
  { ...homepageCopy.ru.slides[0], category: "OpenGamer Studio", title: "Игры, продукты и технологии в одной студии.", description: "OpenGamer создает casino games, product concepts, custom software и iGaming technology layers.", secondary: "Играть в демо" },
  { ...homepageCopy.ru.slides[1], category: "Портфолио слот-игр", title: "Игровые тайтлы с локальным artwork.", description: "Выбранные OpenGamer slot titles представлены с реальными assets и demo links там, где они подтверждены.", secondary: "Обсудить licensing" },
  { ...homepageCopy.ru.slides[2], category: "Premium Game-Show Concept", title: "ELEMENTALS как отдельное оригинальное направление.", description: "Cinematic Live Casino show-game concept вокруг Great Wheel и четырех elemental realms.", secondary: "Live Casino Development" },
  { ...homepageCopy.ru.slides[3], category: "Product Concept", title: "LC App показывает, что студия шире отдельных игр.", description: "B2B social engagement layer concept для существующих Live Casino operators и providers.", secondary: "Связаться с OpenGamer" },
  { ...homepageCopy.ru.slides[4], category: "Frontend и Backend Development", title: "Engineering support вокруг игры и operating layer.", description: "Frontend, backend, game logic, APIs и RGS-related work могут поставляться как отдельные этапы или full production.", secondary: "Смотреть услуги" },
  { ...homepageCopy.ru.slides[5], category: "Branded Games and Custom Products", title: "Custom development для brands, operators и partners.", description: "OpenGamer может формировать branded games, custom slot work и product builds вокруг коммерческих целей.", secondary: "Смотреть portfolio" }
];

homepageCopy.hy.slides = [
  { ...homepageCopy.hy.slides[0], category: "OpenGamer Studio", title: "Խաղեր, ապրանքներ և տեխնոլոգիա մեկ ստուդիայում:", description: "OpenGamer-ը ստեղծում է casino games, product concepts, custom software և iGaming technology layers:", secondary: "Խաղալ demo" },
  { ...homepageCopy.hy.slides[1], category: "Slot Games Portfolio", title: "Պորտֆոլիո խաղեր տեղական artwork-ով:", description: "Ընտրված OpenGamer slot titles-ը ներկայացված են իրական assets-ով և հաստատված demo links-ով:", secondary: "Քննարկել licensing" },
  { ...homepageCopy.hy.slides[2], category: "Premium Game-Show Concept", title: "ELEMENTALS-ը օրիգինալ product direction է:", description: "Cinematic Live Casino show-game concept Great Wheel-ի և չորս elemental realms-ի շուրջ:", secondary: "Live Casino Development" },
  { ...homepageCopy.hy.slides[3], category: "Product Concept", title: "LC App-ը ընդլայնում է ստուդիան անհատական խաղերից դուրս:", description: "B2B social engagement layer concept գոյություն ունեցող Live Casino operators-ի և providers-ի համար:", secondary: "Կապվել OpenGamer-ի հետ" },
  { ...homepageCopy.hy.slides[4], category: "Frontend և Backend Development", title: "Engineering support խաղի և operating layer-ի շուրջ:", description: "Frontend, backend, game logic, APIs և RGS-related work կարող են մատակարարվել որպես առանձին փուլեր կամ full production:", secondary: "Դիտել ծառայությունները" },
  { ...homepageCopy.hy.slides[5], category: "Branded Games and Custom Products", title: "Custom development brands, operators և partners-ի համար:", description: "OpenGamer-ը կարող է ձևավորել branded games, custom slot work և product builds կոմերցիոն նպատակների շուրջ:", secondary: "Դիտել portfolio" }
];

homepageCopy.es.slides = [
  { ...homepageCopy.es.slides[0], category: "OpenGamer Studio", title: "Juegos, productos y tecnologia en un solo estudio.", description: "OpenGamer crea casino games, product concepts, custom software y capas tecnologicas iGaming.", secondary: "Jugar demos" },
  { ...homepageCopy.es.slides[1], category: "Portfolio de slots", title: "Titulos de portfolio con artwork local.", description: "Slots seleccionados de OpenGamer con assets reales y demos confirmadas cuando estan disponibles.", secondary: "Hablar de licensing" },
  { ...homepageCopy.es.slides[2], category: "Concepto premium game-show", title: "ELEMENTALS como direccion original de producto.", description: "Concepto cinematico de Live Casino show-game basado en Great Wheel y cuatro elemental realms.", secondary: "Live Casino Development" },
  { ...homepageCopy.es.slides[3], category: "Concepto de producto", title: "LC App muestra una vision mas amplia que juegos individuales.", description: "Concepto B2B de social engagement layer para operadores y proveedores existentes de Live Casino.", secondary: "Contactar OpenGamer" },
  { ...homepageCopy.es.slides[4], category: "Frontend y Backend Development", title: "Ingenieria alrededor del juego y la capa operativa.", description: "Frontend, backend, game logic, APIs y RGS-related work como etapas seleccionadas o produccion completa.", secondary: "Ver servicios" },
  { ...homepageCopy.es.slides[5], category: "Branded Games and Custom Products", title: "Custom development para marcas, operadores y partners.", description: "OpenGamer puede crear branded games, custom slot work y product builds alrededor de objetivos comerciales.", secondary: "Ver portfolio" }
];

homepageCopy.pt.slides = [
  { ...homepageCopy.pt.slides[0], category: "OpenGamer Studio", title: "Jogos, produtos e tecnologia em um unico estudio.", description: "A OpenGamer cria casino games, product concepts, custom software e camadas tecnologicas iGaming.", secondary: "Jogar demos" },
  { ...homepageCopy.pt.slides[1], category: "Portfolio de slots", title: "Titulos de portfolio com artwork local.", description: "Slots selecionados da OpenGamer com assets reais e demos confirmadas quando disponiveis.", secondary: "Discutir licensing" },
  { ...homepageCopy.pt.slides[2], category: "Conceito premium game-show", title: "ELEMENTALS como uma direcao original de produto.", description: "Conceito cinematico de Live Casino show-game em torno da Great Wheel e quatro elemental realms.", secondary: "Live Casino Development" },
  { ...homepageCopy.pt.slides[3], category: "Conceito de produto", title: "LC App mostra uma visao alem dos jogos individuais.", description: "Conceito B2B de social engagement layer para operadores e provedores existentes de Live Casino.", secondary: "Contatar OpenGamer" },
  { ...homepageCopy.pt.slides[4], category: "Frontend e Backend Development", title: "Engenharia ao redor do jogo e da camada operacional.", description: "Frontend, backend, game logic, APIs e RGS-related work como etapas selecionadas ou producao completa.", secondary: "Ver servicos" },
  { ...homepageCopy.pt.slides[5], category: "Branded Games and Custom Products", title: "Custom development para marcas, operadores e partners.", description: "A OpenGamer pode criar branded games, custom slot work e product builds em torno de objetivos comerciais.", secondary: "Ver portfolio" }
];
