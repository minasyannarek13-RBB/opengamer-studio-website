export type ServiceItem = {
  title: string;
  description: string;
  capabilities: string[];
};

export type ServiceGroup = {
  title: string;
  eyebrow: string;
  description: string;
  items: ServiceItem[];
};

export const coreCapabilities = [
  {
    title: "Slot Game Development",
    description: "Custom and turnkey HTML5 slot production from prototype to launch-ready build."
  },
  {
    title: "Game Art Production",
    description: "Concept art, symbols, UI, animation, VFX and promotional assets for casino titles."
  },
  {
    title: "Mathematics & Game Design",
    description: "Paytable modelling, RTP configuration, volatility design and feature balancing."
  },
  {
    title: "RGS Technology",
    description: "Session handling, wallet connectivity, game logic, reporting and monitoring layers."
  },
  {
    title: "Game Integration",
    description: "Aggregator, platform and operator connectivity with sandbox, QA and launch support."
  },
  {
    title: "Live Casino Development",
    description: "Show-game concepts, wheel formats, live UX and studio product design."
  },
  {
    title: "Dedicated Teams",
    description: "Embedded specialists across front-end, back-end, game design, art, QA and delivery."
  }
];

export const serviceGroups: ServiceGroup[] = [
  {
    eyebrow: "Group 01",
    title: "Game Production",
    description: "Full-cycle production for new titles and branded portfolio expansion.",
    items: [
      {
        title: "Slot Game Development",
        description: "End-to-end slot game production across design, front-end, back-end and launch support.",
        capabilities: [
          "Custom slot development",
          "Turnkey slot production",
          "Branded games",
          "White-label games",
          "Front-end development",
          "Back-end development",
          "HTML5 development",
          "Mobile optimization",
          "Game logic",
          "Feature development",
          "API integration"
        ]
      },
      {
        title: "Mathematics & Game Design",
        description: "Mathematical models and feature systems tuned for player experience and operator economics.",
        capabilities: [
          "Slot mathematics",
          "Paytable modelling",
          "Hit-frequency modelling",
          "RTP configuration",
          "Volatility design",
          "Feature design",
          "Free spins",
          "Buy bonus",
          "Wild systems",
          "Cascades",
          "Jackpot mechanics",
          "Simulation and model validation"
        ]
      },
      {
        title: "Game Art Production",
        description: "Original visual production from world concept to animated in-game assets.",
        capabilities: [
          "Concept art",
          "Character design",
          "Environment design",
          "Symbol design",
          "UI",
          "UX",
          "Animation",
          "Spine animation",
          "VFX",
          "Promotional assets",
          "Audio integration"
        ]
      }
    ]
  },
  {
    eyebrow: "Group 02",
    title: "Technology & Integration",
    description: "RGS, APIs and connectivity support for operators, aggregators and platforms.",
    items: [
      {
        title: "Remote Gaming Server",
        description: "Technology layer for game sessions, logic, wallet communication and operational reporting.",
        capabilities: [
          "RGS development",
          "Session management",
          "Wallet connectivity",
          "Bonus support",
          "Free spins support",
          "Reporting",
          "Monitoring",
          "API development",
          "Operator and aggregator connectivity"
        ]
      },
      {
        title: "Game Integration",
        description: "Structured technical launch support from documentation exchange to production monitoring.",
        capabilities: [
          "Aggregator integration",
          "Platform integration",
          "Direct operator integration",
          "Sandbox support",
          "Authentication",
          "Wallet integration",
          "Bonus compatibility",
          "QA",
          "Deployment",
          "Technical launch support"
        ]
      }
    ]
  },
  {
    eyebrow: "Group 03",
    title: "Portfolio Services",
    description: "Ways to expand or refresh a casino game portfolio without a full internal studio buildout.",
    items: [
      {
        title: "White-Label Solutions",
        description: "Ready-made or exclusive games adapted for a partner brand.",
        capabilities: ["White-label slot games", "Exclusive games", "Private portfolios", "Branded content", "Localization"]
      },
      {
        title: "Reskin Services",
        description: "New art, UI, symbols and audio for proven game mechanics.",
        capabilities: ["Theme replacement", "Art replacement", "UI redesign", "Symbol replacement", "Audio replacement", "Localization"]
      },
      {
        title: "Legacy Game Modernization",
        description: "Technical and visual updates that extend the commercial life of existing titles.",
        capabilities: ["UI refresh", "Performance optimization", "Mobile adaptation", "Feature expansion", "Technical refactoring"]
      }
    ]
  },
  {
    eyebrow: "Group 04",
    title: "Quality & Support",
    description: "Testing, certification preparation and post-launch operating support.",
    items: [
      {
        title: "Quality Assurance",
        description: "Structured functional, regression, compatibility and performance testing.",
        capabilities: ["Functional testing", "Regression testing", "Performance testing", "Device compatibility", "Load testing"]
      },
      {
        title: "Certification Support",
        description: "Certification preparation and laboratory coordination for game submissions.",
        capabilities: ["RNG preparation", "Compliance support", "Documentation", "Lab assistance", "Pre-submission QA"]
      },
      {
        title: "Live Operations",
        description: "Maintenance, updates and continuous improvements after launch.",
        capabilities: ["Maintenance", "Updates", "Bug fixing", "Continuous improvements", "Analytics"]
      }
    ]
  },
  {
    eyebrow: "Group 05",
    title: "Strategic Development",
    description: "Specialist teams and consulting for partners building or scaling iGaming products.",
    items: [
      {
        title: "Dedicated Development Teams",
        description: "Embedded teams working inside partner-defined product and sprint workflows.",
        capabilities: ["Front-end developers", "Back-end developers", "Game designers", "Artists", "Animators", "QA engineers", "Producers", "Technical leads"]
      },
      {
        title: "Technical Consulting",
        description: "Architecture, studio setup and product consulting for iGaming technology decisions.",
        capabilities: ["Architecture", "Studio setup", "Product consulting", "Technology strategy"]
      },
      {
        title: "Live Casino Development",
        description: "Original live casino product design, show formats, wheel games and studio UX concepts.",
        capabilities: ["Live casino game design", "Live show games", "Wheel games", "Game shows", "Live UX", "Streaming concepts", "Presenter experience", "Studio product design"]
      },
      {
        title: "AI-assisted iGaming Workflows",
        description: "Practical automation and analysis support for production, QA, content and operations workflows.",
        capabilities: ["QA automation support", "Content workflow assistance", "Analytics support", "Localization support", "Internal tooling"]
      }
    ]
  }
];

export const partnershipModels = [
  "Custom Development",
  "Dedicated Team",
  "White Label",
  "Co-Development",
  "Technology Partnership",
  "Long-Term Studio Partnership"
];

export const whyOpenGamer = [
  "One accountable production team",
  "Full-cycle development",
  "Flexible project structures",
  "Front-end and back-end capability",
  "Integration support",
  "Scalable technology approach",
  "Dedicated specialist teams",
  "Long-term partnership model"
];

export const developmentProcess = [
  { title: "Discovery", description: "Scope, business model and technical context are clarified." },
  { title: "Planning", description: "Delivery structure, roadmap and dependencies are defined." },
  { title: "Design", description: "Mechanics, user experience, art direction and feature logic are shaped." },
  { title: "Development", description: "Front-end, back-end and game logic are implemented." },
  { title: "Quality Assurance", description: "Functional, regression and device testing are executed." },
  { title: "Certification Preparation", description: "Documentation, RNG preparation and lab coordination are prepared where required." },
  { title: "Launch", description: "Production release is coordinated with the partner." },
  { title: "Support", description: "Monitoring, updates and live operations continue post-launch." }
];

export const architectureFlow = [
  "Player Client",
  "Operator or Aggregator",
  "OpenGamer API Layer",
  "RGS and Game Logic",
  "Wallet, Reporting and Monitoring"
];

export const technologyArchitectureFlow = [
  "Player",
  "Game Client",
  "Operator or Aggregator",
  "API Layer",
  "RGS",
  "Game Logic and RNG",
  "Wallet and Transactions",
  "Reporting and Monitoring"
];

export const integrationWorkflow = [
  "Technical discovery",
  "Documentation exchange",
  "Sandbox connection",
  "Wallet and game-flow testing",
  "QA",
  "Partner approval",
  "Production launch",
  "Monitoring and support"
];

export const technologyPrinciples = [
  "Scalable architecture",
  "Modular development",
  "Responsive delivery",
  "Controlled releases",
  "Monitoring",
  "Maintainability",
  "Integration flexibility",
  "Security-aware development"
];
