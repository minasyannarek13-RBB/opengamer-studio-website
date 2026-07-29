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
    options: ["RGS-Related Development", "Game Integration"]
  },
  {
    label: "Portfolio Services",
    options: ["White Label Games", "Reskin Services", "Legacy Game Modernization"]
  },
  {
    label: "Quality & Support",
    options: ["Quality Assurance", "Certification Preparation Support", "Post-Launch Product Support"]
  },
  {
    label: "Strategic Development",
    options: ["Product and Technical Advisory", "Dedicated Development Team"]
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

export const expectedLaunchOptions = ["As soon as possible", "Within 3 months", "3-6 months", "6-12 months", "More than 12 months", "Not decided"];

export const numberOfGamesOptions = ["1 game", "2-5 games", "6-10 games", "10+ games", "Ongoing production", "Not applicable"];

export const budgetRangeOptions = ["Budget defined", "Budget under review", "Requesting estimate", "Prefer to discuss"];

export const contactMethods = ["Email", "Phone", "LinkedIn"];
