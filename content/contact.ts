export const companyTypes = [
  "Casino operator",
  "Aggregator",
  "Casino platform",
  "Game provider",
  "White-label business",
  "iGaming startup",
  "Technology partner"
];

export type ServiceInterestGroup = {
  label: string;
  options: string[];
};

export const serviceInterests: ServiceInterestGroup[] = [
  {
    label: "Game Production",
    options: ["Custom Slot Development", "Turnkey Slot Development", "Front-End Development", "Back-End Development", "Game Art Production", "Mathematics & Game Design"]
  },
  {
    label: "Technology & Integration",
    options: ["RGS Development", "Game Integration"]
  },
  {
    label: "Portfolio Services",
    options: ["White Label Games", "Reskin Services", "Legacy Game Modernization"]
  },
  {
    label: "Quality & Support",
    options: ["Quality Assurance", "Certification Support", "Live Operations"]
  },
  {
    label: "Strategic Development",
    options: ["Technical Consulting", "Dedicated Development Team", "AI-Assisted iGaming Workflows"]
  },
  {
    label: "Live Casino",
    options: ["Live Casino Development", "Live Show Game Development", "Live Casino UX", "Studio Product Design", "Presenter Experience Design"]
  },
  {
    label: "Portfolio Partnerships",
    options: ["ELEMENTALS Partnership", "LC App Partnership"]
  },
  {
    label: "Other",
    options: ["Other"]
  }
];

export const projectStages = ["Idea", "Specification", "Prototype", "In development", "Ready for integration", "Live product"];

export const contactMethods = ["Email", "Phone", "LinkedIn"];
