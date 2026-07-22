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
    title: "RGS-Related Engineering",
    description: "Session handling, wallet connectivity, game logic, reporting and operational visibility."
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
    eyebrow: "Primary Area 01",
    title: "Slot Game Development",
    description: "Casino game production across concept, design, mathematics, art, front-end, backend and launch support.",
    items: [
      {
        title: "Slot Game Development",
        description: "End-to-end slot game production for custom, branded, white-label or portfolio expansion projects.",
        capabilities: [
          "Custom slot development",
          "Turnkey slot production",
          "Branded games",
          "White-label games",
          "Exclusive game builds",
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
        title: "Game Mathematics and Feature Design",
        description: "Mathematical models and feature systems shaped for player experience and game production requirements.",
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
        title: "Game Art, UI and Animation",
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
    eyebrow: "Primary Area 02",
    title: "Backend and RGS-Related Development",
    description: "Backend engineering for game sessions, wallet communication, game logic and RGS-related environments.",
    items: [
      {
        title: "Backend and RGS-Related Engineering",
        description: "Engineering support for session handling, game logic, wallet communication and operational reporting layers.",
        capabilities: [
          "RGS-related development",
          "Session management",
          "Wallet connectivity",
          "Bonus support",
          "Free spins support",
          "Reporting",
          "Operational visibility",
          "API development",
          "Operator and aggregator connectivity"
        ]
      },
      {
        title: "RNG and Certification Preparation Support",
        description: "Preparation support for RNG-related implementation, documentation, QA and independent laboratory submission workflows.",
        capabilities: [
          "RNG-related development",
          "RNG integration support",
          "Certification preparation support",
          "Documentation support",
          "Pre-submission QA",
          "Independent laboratory testing support"
        ]
      }
    ]
  },
  {
    eyebrow: "Primary Area 03",
    title: "Integration and Technical Delivery",
    description: "Technical delivery support for connecting games with partner platforms, aggregators and operator environments.",
    items: [
      {
        title: "Game Integration",
        description: "Structured technical launch support from documentation exchange to release coordination.",
        capabilities: [
          "Aggregator integration",
          "Platform integration",
          "Direct operator integration",
          "Sandbox support",
          "Authentication",
          "Wallet integration",
          "Bonus compatibility",
          "QA",
          "Release coordination",
          "Technical launch support"
        ]
      },
      {
        title: "Reskin and Legacy Game Modernization",
        description: "Technical and visual updates for existing titles, including theme, UI, asset and mobile-performance improvements.",
        capabilities: ["Theme replacement", "Art replacement", "UI redesign", "Symbol replacement", "Audio replacement", "Localization", "Performance optimization", "Technical refactoring"]
      }
    ]
  },
  {
    eyebrow: "Primary Area 04",
    title: "Live Casino Product Development",
    description: "Original live casino product design, show-game concepts, wheel formats and studio UX direction.",
    items: [
      {
        title: "Live Casino Development",
        description: "Live casino product design, show formats, wheel games and studio UX concepts for partner-led production environments.",
        capabilities: ["Live casino game design", "Live show games", "Wheel games", "Game shows", "Live UX", "Streaming concepts", "Presenter experience", "Studio product design"]
      },
      {
        title: "Original Show-Game Formats",
        description: "Concept and product design for original show-game formats, bonus rounds, visual systems and presenter-led experiences.",
        capabilities: ["Format design", "Bonus concept design", "World and theme direction", "User experience", "Studio flow", "Presenter interaction"]
      }
    ]
  },
  {
    eyebrow: "Primary Area 05",
    title: "Dedicated Teams and Product Support",
    description: "Specialist teams, QA, post-launch product support and advisory for partners building or scaling iGaming products.",
    items: [
      {
        title: "Dedicated Development Teams",
        description: "Embedded specialists working inside partner-defined product and sprint workflows.",
        capabilities: ["Front-end developers", "Back-end developers", "Game designers", "Artists", "Animators", "QA engineers", "Producers", "Technical leads"]
      },
      {
        title: "Quality Assurance and Post-Launch Product Support",
        description: "Functional testing, regression coverage, device compatibility checks, maintenance and structured post-release improvements.",
        capabilities: ["Functional testing", "Regression testing", "Performance testing", "Device compatibility", "Maintenance", "Updates", "Bug fixing", "Continuous improvements"]
      },
      {
        title: "Product and Technical Advisory",
        description: "Architecture, product structure and technical advisory for iGaming technology decisions.",
        capabilities: ["Architecture", "Product consulting", "Technology strategy", "Delivery planning"]
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
  { title: "Support", description: "Operational visibility, updates and post-launch support continue after release." }
];

export const architectureFlow = [
  "Player Client",
  "Operator or Aggregator",
  "API and Game Services",
  "Backend and Game Logic",
  "Wallet, Reporting and Support Interfaces"
];

export const technologyArchitectureFlow = [
  "Player Environment",
  "Partner Environment",
  "Game Technology Layer",
  "Operational Layer"
];

export const integrationWorkflow = [
  "Technical discovery",
  "Documentation exchange",
  "Sandbox connection",
  "Wallet and game-flow testing",
  "QA",
  "Partner approval",
  "Release Coordination",
  "Post-release support"
];

export const technologyPrinciples = [
  "Scalable architecture",
  "Modular development",
  "Responsive delivery",
  "Controlled releases",
  "Operational visibility",
  "Maintainability",
  "Integration flexibility",
  "Security-aware development"
];
