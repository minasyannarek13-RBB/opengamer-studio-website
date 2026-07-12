import type { PageKey } from "@/content/types";

export type WireframeComponent =
  | "StudioCard"
  | "CapabilityCard"
  | "PortfolioCard"
  | "TechnologyCard"
  | "ContactBlock"
  | "CTASection"
  | "ProjectTypeForm";

export type WireframeItem = {
  title: string;
  body: string;
  href?: string;
  meta?: string[];
};

export type WireframeSection = {
  title: string;
  eyebrow: string;
  body: string;
  component: WireframeComponent;
  items?: WireframeItem[];
  primaryHref?: string;
  secondaryHref?: string;
  strong?: boolean;
};

export type WireframePage = {
  key: PageKey;
  sections: WireframeSection[];
};

const studioItems: WireframeItem[] = [
  {
    title: "Slot Studio",
    body: "Slot game production structure and portfolio path.",
    href: "/studios/slot-studio",
    meta: ["Slots", "Math", "Assets"]
  },
  {
    title: "Live Casino Studio",
    body: "Live casino concept structure and player flow planning.",
    href: "/studios/live-casino-studio",
    meta: ["Show games", "UX", "Rules"]
  },
  {
    title: "Engineering",
    body: "Frontend, backend, RGS, RNG and API delivery structure.",
    href: "/studios/engineering",
    meta: ["RGS", "RNG", "API"]
  }
];

const portfolioItems: WireframeItem[] = [
  {
    title: "Featured Slot Placeholder",
    body: "Game card placeholder with RTP, volatility and feature tags.",
    href: "/portfolio",
    meta: ["RTP", "Volatility", "Tags"]
  },
  {
    title: "Portfolio Card Placeholder",
    body: "Screenshot area for future game presentation.",
    href: "/portfolio",
    meta: ["Slot", "Mobile", "Demo"]
  },
  {
    title: "Concept Card Placeholder",
    body: "Future concept or prototype card.",
    href: "/portfolio",
    meta: ["Concept", "UX", "Flow"]
  }
];

const capabilityItems: WireframeItem[] = [
  { title: "Game Design", body: "Mechanics, feature concepts and player flow placeholders.", meta: ["Concept", "UX"] },
  { title: "Art & Animation", body: "Visual asset, UI and animation production placeholders.", meta: ["2D", "UI"] },
  { title: "Mathematics", body: "RTP, volatility and paytable planning placeholders.", meta: ["RTP", "Volatility"] },
  { title: "Frontend", body: "Game client, responsive UI and interaction layer placeholders.", meta: ["Client", "UI"] },
  { title: "Backend", body: "Game services, admin tools and reporting placeholders.", meta: ["Services", "Admin"] },
  { title: "RGS", body: "Game launch, sessions and game logic infrastructure placeholders.", meta: ["Launch", "Sessions"] },
  { title: "RNG", body: "Random outcome flow and integration placeholders.", meta: ["Outcome", "Flow"] },
  { title: "QA / Integration", body: "Testing, integration support and handover placeholders.", meta: ["QA", "Handover"] }
];

const technologyItems: WireframeItem[] = [
  { title: "RGS", body: "Remote game server architecture placeholder.", meta: ["Launch", "Sessions"] },
  { title: "RNG", body: "Random number generation integration placeholder.", meta: ["Outcome", "Audit"] },
  { title: "Backend", body: "Backend services and admin tools placeholder.", meta: ["Services", "Reporting"] },
  { title: "Frontend", body: "Game frontend and responsive UI placeholder.", meta: ["Client", "Mobile"] },
  { title: "API", body: "Wallet, launch, round and reporting API placeholder.", meta: ["Wallet", "Reports"] },
  { title: "Production Pipeline", body: "Concept, build, QA, integration and handover placeholder.", meta: ["Build", "QA"] }
];

const contactItems: WireframeItem[] = [
  { title: "Portfolio Inquiry", body: "Placeholder route for portfolio discussions.", href: "/portfolio" },
  { title: "Custom Development", body: "Placeholder route for custom iGaming scope.", href: "/contact" },
  { title: "Technology Scope", body: "Placeholder route for RGS, RNG or API questions.", href: "/technology" }
];

export const wireframePages: Record<PageKey, WireframePage> = {
  home: {
    key: "home",
    sections: [
      {
        title: "Three Main Studios",
        eyebrow: "Studios",
        body: "Clickable routing blocks for the three main production areas.",
        component: "StudioCard",
        items: studioItems
      },
      {
        title: "Portfolio Preview",
        eyebrow: "Portfolio",
        body: "Product-first preview area with placeholder cards.",
        component: "PortfolioCard",
        items: portfolioItems,
        primaryHref: "/portfolio",
        strong: true
      },
      {
        title: "Capabilities Overview",
        eyebrow: "Capabilities",
        body: "Short overview of the main build capabilities.",
        component: "CapabilityCard",
        items: capabilityItems.slice(0, 4),
        primaryHref: "/capabilities"
      },
      {
        title: "Technology Preview",
        eyebrow: "Technology",
        body: "Technical blocks prepared for future RGS, RNG and API detail.",
        component: "TechnologyCard",
        items: technologyItems.slice(0, 4),
        primaryHref: "/technology"
      },
      {
        title: "Final CTA",
        eyebrow: "Next step",
        body: "Placeholder conversion block for portfolio and contact paths.",
        component: "CTASection",
        primaryHref: "/portfolio",
        secondaryHref: "/contact"
      }
    ]
  },
  studios: {
    key: "studios",
    sections: [
      {
        title: "Studio Overview",
        eyebrow: "Structure",
        body: "One hub page connecting content, concepts and engineering.",
        component: "CapabilityCard",
        items: [
          { title: "Content", body: "Slot portfolio and production placeholders." },
          { title: "Concepts", body: "Live casino concept and UX placeholders." },
          { title: "Engineering", body: "Technology delivery placeholders." }
        ],
        primaryHref: "/capabilities"
      },
      {
        title: "Studio Cards",
        eyebrow: "Studios",
        body: "Clickable cards for each studio path.",
        component: "StudioCard",
        items: studioItems
      },
      {
        title: "CTA",
        eyebrow: "Next step",
        body: "Choose a studio path or contact directly.",
        component: "CTASection",
        primaryHref: "/portfolio",
        secondaryHref: "/contact"
      }
    ]
  },
  slotStudio: {
    key: "slotStudio",
    sections: [
      {
        title: "What We Build",
        eyebrow: "Scope",
        body: "Placeholder structure for slot concepts, mechanics, math, UI and assets.",
        component: "CapabilityCard",
        items: capabilityItems.slice(0, 4),
        secondaryHref: "/contact"
      },
      {
        title: "Slot Portfolio Preview",
        eyebrow: "Portfolio",
        body: "Clickable placeholder game cards for future slot presentation.",
        component: "PortfolioCard",
        items: portfolioItems,
        primaryHref: "/portfolio",
        strong: true
      },
      {
        title: "Art & Visual Production",
        eyebrow: "Visuals",
        body: "Wireframe blocks for symbols, backgrounds, UI and animation assets.",
        component: "PortfolioCard",
        items: [
          { title: "Symbol Set", body: "Asset grid placeholder.", href: "/portfolio", meta: ["Art"] },
          { title: "Backgrounds", body: "Scene placeholder.", href: "/portfolio", meta: ["Visual"] },
          { title: "Animation Frames", body: "Animation placeholder.", href: "/portfolio", meta: ["Motion"] }
        ]
      },
      {
        title: "Development Capabilities",
        eyebrow: "Build",
        body: "Wireframe blocks for frontend, backend, configs and integration package.",
        component: "TechnologyCard",
        items: technologyItems.slice(2, 6),
        primaryHref: "/technology"
      },
      {
        title: "CTA",
        eyebrow: "Next step",
        body: "Discuss slot portfolio or custom slot build.",
        component: "CTASection",
        primaryHref: "/portfolio",
        secondaryHref: "/contact"
      }
    ]
  },
  liveCasinoStudio: {
    key: "liveCasinoStudio",
    sections: [
      {
        title: "Live Game Types",
        eyebrow: "Formats",
        body: "Placeholder cards for table games, show games and hybrid concepts.",
        component: "CapabilityCard",
        items: [
          { title: "Table Concepts", body: "Rules and round flow placeholder." },
          { title: "Show Games", body: "Bonus moments and player choice placeholder." },
          { title: "Hybrid Concepts", body: "Casino UX concept placeholder." }
        ]
      },
      {
        title: "Show Game Concepts",
        eyebrow: "Concepts",
        body: "Clickable concept cards for future live casino ideation.",
        component: "PortfolioCard",
        items: [
          { title: "Round Flow", body: "Game loop placeholder.", href: "/contact", meta: ["Flow"] },
          { title: "Player Choice", body: "Interaction placeholder.", href: "/contact", meta: ["UX"] },
          { title: "Bonus Moment", body: "Feature placeholder.", href: "/contact", meta: ["Feature"] }
        ]
      },
      {
        title: "Studio UX / Game Design",
        eyebrow: "UX",
        body: "Wireframe blocks for player screen, host flow and studio control needs.",
        component: "CapabilityCard",
        items: [
          { title: "Player Screen", body: "Game UI placeholder." },
          { title: "Host Flow", body: "Presenter flow placeholder." },
          { title: "Studio Control", body: "Operational UX placeholder." }
        ],
        primaryHref: "/capabilities"
      },
      {
        title: "Product Capabilities",
        eyebrow: "Build",
        body: "Connect concept, UI, logic, backend and handover placeholders.",
        component: "TechnologyCard",
        items: technologyItems.slice(2, 6),
        primaryHref: "/technology"
      },
      {
        title: "CTA",
        eyebrow: "Next step",
        body: "Discuss live casino concept development.",
        component: "CTASection",
        primaryHref: "/portfolio",
        secondaryHref: "/contact"
      }
    ]
  },
  engineering: {
    key: "engineering",
    sections: [
      {
        title: "Custom iGaming Development",
        eyebrow: "Custom",
        body: "Wireframe blocks for game products, tools, integrations and backoffice.",
        component: "CapabilityCard",
        items: [
          { title: "Game Products", body: "Product module placeholder." },
          { title: "Internal Tools", body: "Backoffice placeholder." },
          { title: "Integrations", body: "Platform connection placeholder." }
        ]
      },
      {
        title: "RGS / RNG",
        eyebrow: "Core",
        body: "Technical placeholders for game server and random outcome flows.",
        component: "TechnologyCard",
        items: technologyItems.slice(0, 2),
        primaryHref: "/technology"
      },
      {
        title: "Frontend / Backend",
        eyebrow: "Stack",
        body: "Wireframe blocks for client UI and service layer.",
        component: "TechnologyCard",
        items: technologyItems.slice(2, 4)
      },
      {
        title: "API & Integrations",
        eyebrow: "Integration",
        body: "Placeholder blocks for wallet, launch, reporting and platform APIs.",
        component: "TechnologyCard",
        items: [technologyItems[4]],
        secondaryHref: "/contact"
      },
      {
        title: "CTA",
        eyebrow: "Next step",
        body: "Discuss architecture, migration or integration scope.",
        component: "CTASection",
        primaryHref: "/portfolio",
        secondaryHref: "/contact"
      }
    ]
  },
  capabilities: {
    key: "capabilities",
    sections: [
      ...capabilityItems.map<WireframeSection>((item) => ({
        title: item.title,
        eyebrow: "Capability",
        body: item.body,
        component: "CapabilityCard",
        items: [{ ...item }],
        primaryHref: item.title === "Art & Animation" ? "/portfolio" : "/contact",
        secondaryHref: "/contact"
      })),
      {
        title: "CTA",
        eyebrow: "Next step",
        body: "Match buyer need to studio capability.",
        component: "CTASection",
        primaryHref: "/portfolio",
        secondaryHref: "/contact"
      }
    ]
  },
  portfolio: {
    key: "portfolio",
    sections: [
      {
        title: "Featured Slot Games",
        eyebrow: "Strongest conversion page",
        body: "Large placeholder cards for future game screenshots and tags.",
        component: "PortfolioCard",
        items: portfolioItems,
        secondaryHref: "/contact",
        strong: true
      },
      {
        title: "Art Gallery",
        eyebrow: "Visual production",
        body: "Placeholder gallery for symbols, backgrounds and UI assets.",
        component: "PortfolioCard",
        items: [
          { title: "Symbol Placeholder", body: "Asset preview placeholder.", href: "/contact", meta: ["Art"] },
          { title: "Background Placeholder", body: "Scene preview placeholder.", href: "/contact", meta: ["Visual"] },
          { title: "UI Asset Placeholder", body: "Interface asset placeholder.", href: "/contact", meta: ["UI"] }
        ],
        strong: true
      },
      {
        title: "Game Concepts",
        eyebrow: "Concepts",
        body: "Future concept cards without unsupported claims.",
        component: "PortfolioCard",
        items: [
          { title: "Concept Placeholder", body: "Gameplay idea placeholder.", href: "/contact", meta: ["Concept"] },
          { title: "Mechanic Placeholder", body: "Feature flow placeholder.", href: "/contact", meta: ["Mechanic"] },
          { title: "Prototype Placeholder", body: "Prototype card placeholder.", href: "/contact", meta: ["Prototype"] }
        ]
      },
      {
        title: "UI / UX Samples",
        eyebrow: "Interface",
        body: "Placeholder screens for game menus, HUD and player flows.",
        component: "PortfolioCard",
        items: [
          { title: "Game Screen", body: "Screen placeholder.", href: "/contact", meta: ["UI"] },
          { title: "Menu Flow", body: "Flow placeholder.", href: "/contact", meta: ["UX"] },
          { title: "Mobile State", body: "Responsive placeholder.", href: "/contact", meta: ["Mobile"] }
        ]
      },
      {
        title: "Technology Samples",
        eyebrow: "Technology",
        body: "Wireframe blocks connecting portfolio assets to technical delivery.",
        component: "TechnologyCard",
        items: technologyItems.slice(0, 4),
        primaryHref: "/technology"
      },
      {
        title: "CTA",
        eyebrow: "Next step",
        body: "Request portfolio discussion or development scope call.",
        component: "CTASection",
        primaryHref: "/contact",
        secondaryHref: "/technology"
      }
    ]
  },
  technology: {
    key: "technology",
    sections: [
      ...technologyItems.map<WireframeSection>((item) => ({
        title: item.title,
        eyebrow: "Technology",
        body: item.body,
        component: "TechnologyCard",
        items: [{ ...item }],
        primaryHref: item.title === "Frontend" ? "/portfolio" : "/contact",
        secondaryHref: "/contact"
      })),
      {
        title: "CTA",
        eyebrow: "Next step",
        body: "Discuss architecture or integration scope.",
        component: "CTASection",
        primaryHref: "/portfolio",
        secondaryHref: "/contact"
      }
    ]
  },
  about: {
    key: "about",
    sections: [
      {
        title: "Company Positioning",
        eyebrow: "Positioning",
        body: "Placeholder company positioning block.",
        component: "CapabilityCard",
        items: [{ title: "Full-cycle Studio", body: "Content and technology positioning placeholder." }],
        primaryHref: "/capabilities"
      },
      {
        title: "What We Do",
        eyebrow: "Scope",
        body: "Commercial focus placeholders.",
        component: "CapabilityCard",
        items: [
          { title: "Slots", body: "Slot portfolio and development placeholder." },
          { title: "Live Concepts", body: "Live casino concept placeholder." },
          { title: "Technology", body: "RGS, RNG and API placeholder." }
        ],
        primaryHref: "/portfolio"
      },
      {
        title: "Who We Work With",
        eyebrow: "Audience",
        body: "Target client placeholders.",
        component: "CapabilityCard",
        items: [
          { title: "Operators", body: "Operator placeholder." },
          { title: "Providers", body: "Provider placeholder." },
          { title: "Startups / Investors", body: "Startup and investor placeholder." }
        ]
      },
      {
        title: "How We Work",
        eyebrow: "Process",
        body: "Simple delivery flow placeholder.",
        component: "TechnologyCard",
        items: [
          { title: "Scope", body: "Define project placeholder." },
          { title: "Build", body: "Production placeholder." },
          { title: "Handover", body: "Integration and handover placeholder." }
        ]
      },
      {
        title: "CTA",
        eyebrow: "Next step",
        body: "Discuss portfolio, studio capability or partnership fit.",
        component: "CTASection",
        primaryHref: "/portfolio",
        secondaryHref: "/contact"
      }
    ]
  },
  contact: {
    key: "contact",
    sections: [
      {
        title: "Contact Options",
        eyebrow: "Options",
        body: "Segmented routes for qualified B2B inquiries.",
        component: "ContactBlock",
        items: contactItems,
        primaryHref: "/portfolio",
        secondaryHref: "/contact"
      },
      {
        title: "Project Type Form",
        eyebrow: "Form",
        body: "Static wireframe form for future inquiry capture.",
        component: "ProjectTypeForm",
        secondaryHref: "/contact"
      },
      {
        title: "LinkedIn CTA",
        eyebrow: "Business network",
        body: "Placeholder business social CTA.",
        component: "ContactBlock",
        items: [{ title: "LinkedIn Placeholder", body: "Future LinkedIn link placeholder.", href: "/contact" }]
      },
      {
        title: "Email CTA",
        eyebrow: "Direct contact",
        body: "Placeholder email CTA for future contact details.",
        component: "ContactBlock",
        items: [{ title: "Email Placeholder", body: "Future email contact placeholder.", href: "/contact" }],
        primaryHref: "/portfolio"
      }
    ]
  }
};

export function getWireframePage(key: PageKey): WireframePage {
  return wireframePages[key];
}
