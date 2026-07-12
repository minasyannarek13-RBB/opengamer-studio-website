# OpenGamer Component Library

Version: 1.0  
Status: Canonical  
Applies to: OpenGamer corporate website, service pages, game pages, portfolio pages, product pages, legal pages, lead forms, and related digital interfaces.

---

## 1. Purpose

This document defines the reusable component system for the OpenGamer website.

Its purpose is to ensure:

- consistent implementation;
- minimal component duplication;
- predictable responsive behavior;
- accessibility;
- maintainable TypeScript APIs;
- shared design logic;
- faster implementation by Codex and future developers;
- lower AI token usage through reusable specifications.

This document is a canonical source.

When instructions conflict, use this priority order:

1. Confirmed Owner Decisions
2. `WEBSITE_CONTENT_HANDOFF.md`
3. `OPEN_GAMER_DESIGN_SYSTEM.md`
4. `OPEN_GAMER_BRAND_GUIDELINES.md`
5. `OPEN_GAMER_COMPONENT_LIBRARY.md`
6. Existing approved production components
7. Older prototypes and deprecated components

---

## 2. Component Principles

### 2.1 Reuse Before Creation

Before creating a new component:

1. Search the existing component library.
2. Check whether an existing component supports the requirement.
3. Add a typed variant when the semantic role is the same.
4. Create a new component only when the structure, behavior, or meaning is materially different.

Do not create a new component only because:

- one page uses different copy;
- one card has another image;
- one section has another background;
- one button uses another label;
- one grid has a different number of items.

### 2.2 Semantic Components

Components should be named by their role, not by their page location.

Use:

- `Hero`
- `Section`
- `SectionHeader`
- `GameCard`
- `ServiceCard`
- `PortfolioCard`
- `CTASection`

Avoid:

- `HomeTopBlock`
- `GamesThing`
- `GreenBox`
- `AboutCard2`
- `HeroNew`
- `FinalFinalSection`

### 2.3 Composition Over Duplication

Prefer composition.

Example:

```tsx
<Section>
  <SectionHeader />
  <CardGrid>
    <ServiceCard />
  </CardGrid>
</Section>
Avoid one large page component containing all layout, content, and styling.
2.4 Typed APIs
Every reusable component must have typed props.
Use:
discriminated unions;
optional props only when truly optional;
clear enum-style variants;
ReactNode only where flexible content is required;
semantic prop names.
Avoid:
any;
generic data;
ambiguous boolean props;
multiple overlapping props;
undocumented magic strings.
2.5 Server Components by Default
Use Server Components by default.
Use Client Components only when needed for:
mobile navigation;
filters;
accordions;
form interaction;
tabs;
dynamic state;
animation that requires browser APIs.
Do not make the entire page client-side because one section is interactive.
2.6 Content Separation
Structured content belongs in typed content files.
Recommended:
/content
  company.ts
  contact.ts
  contactOptions.ts
  games.ts
  navigation.ts
  projects.ts
  services.ts
Components should receive data through props.
Do not hardcode large content arrays inside components unless the content is strictly implementation-specific.
3. Recommended Component Structure
Recommended directory structure:
/components
  /actions
  /cards
  /content
  /diagrams
  /feedback
  /forms
  /layout
  /media
  /navigation
  /sections
  /status
  /ui
Example:
/components
  /actions
    Button.tsx
    TextLink.tsx

  /cards
    GameCard.tsx
    PortfolioCard.tsx
    ServiceCard.tsx
    FeatureCard.tsx

  /content
    Eyebrow.tsx
    Prose.tsx
    SectionHeader.tsx

  /diagrams
    ArchitectureDiagram.tsx
    ProcessTimeline.tsx
    UserJourney.tsx

  /feedback
    EmptyState.tsx
    ErrorState.tsx
    LoadingState.tsx

  /forms
    Field.tsx
    LeadForm.tsx
    SelectField.tsx
    TextAreaField.tsx

  /layout
    Container.tsx
    Grid.tsx
    Section.tsx
    Stack.tsx

  /media
    MediaFrame.tsx
    ProjectVisual.tsx
    ResponsiveImage.tsx

  /navigation
    Breadcrumbs.tsx
    MobileMenu.tsx
    SiteFooter.tsx
    SiteHeader.tsx

  /sections
    CTASection.tsx
    Hero.tsx
    LogoStrip.tsx
    RelatedContent.tsx

  /status
    Badge.tsx
    StatusBadge.tsx

  /ui
    Accordion.tsx
    Divider.tsx
    Icon.tsx
    Pill.tsx
Do not reorganize the repository only to match this structure if an existing stable structure already works.
Apply the principles, not unnecessary file movement.
FOUNDATION COMPONENTS
4. Container
Purpose
Provides the maximum-width content boundary and horizontal page padding.
Responsibilities
consistent page width;
responsive horizontal padding;
alignment across sections;
optional narrow reading width.
Recommended API
type ContainerProps = {
  children: React.ReactNode;
  size?: "default" | "wide" | "narrow" | "legal";
  className?: string;
  as?: "div" | "section" | "main";
};
Size Mapping
wide: 1440px
default: 1280px
narrow: 1100px
legal: 760px
Rules
All major sections must use Container.
Do not hardcode different horizontal padding per page.
Legal pages should use legal.
Long-form product pages may use narrow.
Hero visuals may use wide.
Accessibility
No special ARIA behavior required.
Example
<Container size="default">
  {children}
</Container>
5. Section
Purpose
Provides consistent vertical spacing, background treatment, and semantic section structure.
Recommended API
type SectionProps = {
  children: React.ReactNode;
  id?: string;
  tone?: "default" | "alternate" | "surface" | "accent-soft";
  spacing?: "compact" | "default" | "large";
  className?: string;
  as?: "section" | "div";
  labelledBy?: string;
};
Tone Mapping
default:
  main page background

alternate:
  secondary background

surface:
  stronger contained section

accent-soft:
  restrained accent-tinted section
Spacing Mapping
compact:
  48–80px depending on viewport

default:
  64–120px depending on viewport

large:
  80–160px depending on viewport
Rules
Every major page block should use Section.
Do not manually repeat section padding classes.
id should be stable for anchor navigation.
labelledBy should point to the section heading where possible.
Accessibility
Use semantic <section> when the block has a heading.
Example
<Section
  id="game-production"
  tone="alternate"
  spacing="default"
  labelledBy="game-production-title"
>
  <Container>
    ...
  </Container>
</Section>
6. Stack
Purpose
Creates consistent vertical spacing between child elements.
Recommended API
type StackProps = {
  children: React.ReactNode;
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
  className?: string;
};
Gap Mapping
xs: 8px
sm: 12–16px
md: 20–24px
lg: 32–40px
xl: 48–64px
Rules
Use Stack instead of repeated margin utilities when multiple sibling elements share one spacing relationship.
Do not use Stack where a grid is semantically more appropriate.
7. Grid
Purpose
Provides reusable responsive grid layouts.
Recommended API
type GridProps = {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  collapse?: "mobile" | "tablet";
  className?: string;
};
Responsive Behavior
4 columns:
  desktop 4
  tablet 2
  mobile 1

3 columns:
  desktop 3
  tablet 2
  mobile 1

2 columns:
  desktop 2
  mobile 1
Rules
Card grids should use Grid.
Do not duplicate responsive grid class strings across pages.
Grid should not determine card styling.
Avoid auto-fit behavior when consistent card widths are required.
8. Divider
Purpose
Creates visual separation without introducing another card or section.
Recommended API
type DividerProps = {
  orientation?: "horizontal" | "vertical";
  tone?: "default" | "strong" | "accent";
  className?: string;
};
Rules
Use sparingly.
Do not place a divider between every component.
TYPOGRAPHY COMPONENTS
9. Eyebrow
Purpose
Provides the small uppercase category label above a heading.
Recommended API
type EyebrowProps = {
  children: React.ReactNode;
  tone?: "default" | "accent" | "muted";
  className?: string;
};
Rules
Keep text short.
Use sentence case or uppercase consistently according to existing design.
Do not place long sentences inside an eyebrow.
Do not use multiple eyebrow styles per page.
Examples
Full-Cycle iGaming Development Studio
Featured Games
Technology
Portfolio
In Development
10. SectionHeader
Purpose
Creates a consistent heading block for major sections.
Recommended API
type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  maxWidth?: "default" | "narrow" | "wide";
  action?: React.ReactNode;
  headingId?: string;
  className?: string;
};
Structure
Eyebrow
Heading
Description
Optional action
Rules
Use one section header per major section.
Keep description concise.
Avoid long paragraphs.
Use align="center" only where composition supports it.
Do not center all sections by default.
Accessibility
headingId should be used with Section.labelledBy.
Example
<SectionHeader
  eyebrow="Featured Games"
  title="Game Portfolio"
  description="Selected OpenGamer titles available for demo."
  action={<Button href="/games">Explore Our Games</Button>}
/>
11. Prose
Purpose
Provides consistent typography for long-form content.
Used for:
legal pages;
long service descriptions;
product detail text;
FAQ answers;
technical explanations.
Recommended API
type ProseProps = {
  children: React.ReactNode;
  size?: "default" | "large";
  className?: string;
};
Rules
Use a narrow reading width.
Apply consistent paragraph spacing.
Apply semantic heading styles.
Do not use for card copy.
ACTION COMPONENTS
12. Button
Purpose
Primary reusable action component.
Recommended API
type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  external?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
};
Variant Rules
Primary
Use for the main page action.
Secondary
Use for supporting actions.
Ghost
Use inside cards or compact areas.
Size Rules
sm:
  compact card action

md:
  default action

lg:
  hero or primary CTA
Behavior
If href is present:
render as link;
internal links use framework navigation;
external links use secure external attributes.
If loading is true:
disable repeated interaction;
preserve button width;
show loading text or spinner;
keep accessible status.
Accessibility
visible focus;
minimum touch target approximately 44×44px;
loading state announced;
disabled state readable;
icons must not replace text unless aria-label exists.
Rules
Do not create page-specific button classes.
Do not place three primary buttons together.
13. TextLink
Purpose
Low-priority inline or card-level action.
Recommended API
type TextLinkProps = {
  children: React.ReactNode;
  href: string;
  external?: boolean;
  icon?: boolean;
  className?: string;
};
Examples
View Game
Explore Technology
See ELEMENTALS
View Live Casino Development
Rules
Use meaningful text.
Do not use “Click Here.”
Arrow movement may be used on hover.
Keep focus visible.
14. ButtonGroup
Purpose
Groups related primary and secondary actions.
Recommended API
type ButtonGroupProps = {
  children: React.ReactNode;
  align?: "start" | "center";
  stackOnMobile?: boolean;
  className?: string;
};
Rules
Maximum two major hero buttons.
Stack on mobile when labels are long.
Preserve equal visual height.
Do not use for unrelated actions.
NAVIGATION COMPONENTS
15. SiteHeader
Purpose
Global site navigation.
Responsibilities
logo;
desktop navigation;
active route state;
mobile menu trigger;
Contact CTA;
sticky behavior;
transparent-to-solid transition if used.
Recommended API
type SiteHeaderProps = {
  navigation: NavigationItem[];
  contactHref?: string;
  transparentAtTop?: boolean;
};
Navigation Type
type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};
Final Navigation Order
Home
Services
Games
Portfolio
Technology
About
Contact
Rules
Contact may be styled as the CTA.
Do not create dropdowns unless content density requires them.
Avoid layout shift during sticky transition.
Preserve current route indication.
Mobile menu must remain accessible.
Header height must remain consistent.
Accessibility
semantic <header>;
semantic <nav>;
logo link has accessible name;
mobile menu button has aria-expanded;
active link uses aria-current="page" where appropriate.
16. MobileMenu
Purpose
Accessible mobile navigation drawer.
Recommended API
type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
  contactHref?: string;
};
Required Behavior
close button;
body scroll lock;
ESC close;
focus management;
focus return to trigger;
same navigation order as desktop;
Contact shown as CTA;
no horizontal overflow.
Rules
Do not create a separate mobile navigation content source.
Use the same navigation data.
17. SiteFooter
Purpose
Global footer navigation and contact structure.
Recommended API
type SiteFooterProps = {
  companyLinks: NavigationItem[];
  legalLinks: NavigationItem[];
  socialLinks: SocialLink[];
  email?: string;
  phone?: string;
  address?: string;
};
Social Type
type SocialLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};
Footer Groups
Company
Home
Services
Live Casino Development
Games
Portfolio
Technology
About
Contact
Legal
Privacy Policy
Terms of Use
Cookie Policy
Connect
LinkedIn
Instagram
YouTube
Facebook
Rules
Publish only confirmed social links.
Do not invent addresses.
Do not create excessive footer columns.
Stack cleanly on mobile.
Show copyright line.
18. Breadcrumbs
Purpose
Provides navigation context on detail pages.
Use on:
game detail pages;
service detail pages;
portfolio project pages;
legal pages if useful.
Recommended API
type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};
Example
Home / Portfolio / ELEMENTALS
Accessibility
use <nav aria-label="Breadcrumb">;
use ordered list;
current page is not linked;
current page uses aria-current="page".
HERO COMPONENTS
19. Hero
Purpose
Reusable hero layout for corporate, product, and service pages.
Recommended API
type HeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction?: ActionConfig;
  secondaryAction?: ActionConfig;
  visual?: React.ReactNode;
  status?: StatusConfig;
  variant?: "corporate" | "product" | "service" | "editorial";
  align?: "left" | "center";
  className?: string;
};
Action Type
type ActionConfig = {
  label: string;
  href: string;
  external?: boolean;
};
Status Type
type StatusConfig = {
  label: string;
  tone?: "live" | "development" | "concept" | "pending";
};
Variants
Corporate
Used on:
Home
Services
Technology
About
Contact
Product
Used on:
game pages;
ELEMENTALS;
LC App.
Service
Used on:
Live Casino Development;
future service detail pages.
Editorial
Used on:
Portfolio;
long-form project pages.
Rules
Maximum two hero actions.
Product status must remain visible.
Do not render visual container if no visual exists.
Do not use fake statistics.
Description should remain concise.
Mobile order: text first, visual second.
20. HeroVisual
Purpose
Consistent wrapper for hero artwork, diagrams, device frames, and project visuals.
Recommended API
type HeroVisualProps = {
  children: React.ReactNode;
  ratio?: "square" | "landscape" | "portrait" | "auto";
  treatment?: "plain" | "frame" | "glow-soft" | "surface";
  className?: string;
};
Rules
Do not crop critical visual information.
Avoid heavy glow.
Preserve aspect ratio.
Visual must not overlap text on mobile.
Use approved assets only.
SECTION COMPONENTS
21. CTASection
Purpose
Reusable final or mid-page call-to-action block.
Recommended API
type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction: ActionConfig;
  secondaryAction?: ActionConfig;
  tone?: "default" | "surface" | "accent-soft";
  visual?: React.ReactNode;
};
Rules
Use one clear primary action.
Keep copy concise.
Do not repeat the exact same CTA section multiple times on one page.
CTA must match destination.
Final CTA should normally link to Contact.
22. RelatedContent
Purpose
Displays related services, projects, or products.
Used on:
game detail pages;
service pages;
ELEMENTALS;
LC App;
Technology.
Recommended API
type RelatedContentProps = {
  title: string;
  description?: string;
  items: RelatedItem[];
};
Item Type
type RelatedItem = {
  title: string;
  description: string;
  href: string;
  category?: string;
};
Rules
Keep to 2–4 items.
Do not create circular duplication.
Use semantically related content only.
23. FeatureGrid
Purpose
Displays a set of high-level benefits or capabilities.
Recommended API
type FeatureGridProps = {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
};
Feature Type
type FeatureItem = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};
Rules
Keep descriptions short.
Avoid repeating service cards.
Use for high-level summaries, not full service detail.
24. LogoStrip
Purpose
Reserved for future approved partner, client, or technology logos.
Recommended API
type LogoStripProps = {
  title?: string;
  logos: LogoItem[];
};
Rules
Do not use until logos are approved.
Do not invent partner logos.
Do not create a generic “Trusted By” strip without evidence.
Keep hidden or unused until approved.
FOUNDATION ACCEPTANCE CRITERIA
25. Foundation Component Acceptance Criteria
The foundation component layer is correct when:
All major pages use Container.
Major page blocks use Section.
Vertical spacing is not manually duplicated across pages.
Hero layouts use one reusable Hero.
CTA sections use one reusable CTASection.
Header and footer use shared typed navigation data.
Mobile navigation uses the same source as desktop navigation.
Buttons use one shared Button.
Long-form text uses Prose.
Section titles use SectionHeader.
Breadcrumbs are consistent on detail pages.
No page-specific duplicate button components exist.
No page-specific duplicate hero components exist unless their semantics differ materially.
Server Components remain the default.
Client Components are isolated to interactive behavior.
All interactive elements have visible focus states.
Mobile navigation is keyboard accessible.
No hardcoded navigation arrays exist inside page components.
No unsupported partner/logo strip is visible.
All components follow OPEN_GAMER_DESIGN_SYSTEM.md.
26. Token-Efficient Implementation Rules
For future Codex tasks:
inspect only the relevant component file;
do not reread the full component library;
search by exact component name;
reuse existing props before adding variants;
batch related component changes;
do not print full component files in reports;
report only changed component names;
do not explain standard React patterns;
do not create new documentation for small component changes.
27. Part 1 Scope
This part defines:
layout foundations;
typography foundations;
action foundations;
global navigation;
hero components;
core section components.
The following parts will define:
cards and media components;
diagrams and project-specific components;
forms and interaction components;
feedback, loading, error, and empty states;
metadata and SEO helpers;
file structure;
reuse rules;
QA and final acceptance criteria
---

# PART 2 — CARDS, MEDIA, GAMES, SERVICES, PORTFOLIO, ELEMENTALS AND LC APP COMPONENTS

---

## 28. Purpose of Part 2

This part defines reusable components for:

- services;
- games;
- portfolio projects;
- media presentation;
- product status;
- ELEMENTALS;
- LC App;
- related content;
- project visuals.

These components must use the foundation components defined in Part 1.

Do not create page-specific card systems when the same semantic component can be reused.

---

# CARD COMPONENTS

---

## 29. `BaseCard`

### Purpose

Provides the shared structural and visual foundation for all card variants.

`BaseCard` should not normally be used directly by page components unless a generic card is genuinely required.

### Recommended API

```tsx
type BaseCardProps = {
  children: React.ReactNode;
  as?: "article" | "div" | "li";
  href?: string;
  tone?: "default" | "surface" | "featured" | "accent-soft";
  padding?: "sm" | "md" | "lg";
  interactive?: boolean;
  className?: string;
};

Responsibilities
border;
radius;
background;
internal spacing;
hover state;
focus-within state;
semantic wrapper;
optional linked behavior.
Rules
Do not place a clickable link around another interactive element.
If the whole card is clickable, internal secondary actions must remain accessible.
Interactive cards must have visible focus.
Avoid excessive hover movement.
Card hover must not shift surrounding layout.
Do not duplicate border, radius, and background logic in every card component.
30. ServiceCard
Purpose
Displays a concise service offering.
Recommended API
type ServiceCardProps = {
  id?: string;
  group?: string;
  title: string;
  description: string;
  capabilities?: string[];
  href?: string;
  ctaLabel?: string;
  icon?: React.ReactNode;
  featured?: boolean;
  className?: string;
};
Content Structure
Optional group label
Optional icon
Service title
Short description
Optional capabilities
Optional CTA
Usage
Use on:
/services;
homepage capability section;
related service sections;
Live Casino Development page.
Rules
Homepage cards use only short descriptions.
Full service capabilities belong on /services.
Do not put full service descriptions inside cards.
Limit visible capability bullets to 3–6.
If more capabilities exist, link to the relevant service section.
featured may be used for Live Casino Development or another strategically important service.
Do not use different card markup for each service group.
Accessibility
If the card links to a detail page:
use a semantic link;
use clear link text;
preserve keyboard focus.
31. ServiceGroup
Purpose
Displays one grouped service category.
Examples:
Game Production
Technology & Integration
Portfolio Services
Quality & Support
Strategic Development
Recommended API
type ServiceGroupProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  services: ServiceItem[];
  tone?: "default" | "alternate";
  visual?: React.ReactNode;
};
Responsibilities
section anchor;
group heading;
responsive service grid;
optional visual;
section CTA where needed.
Rules
Use one ServiceGroup per major service category.
Do not create one identical card grid for every group without visual variation.
Alternate tone or layout where useful.
Preserve stable anchor IDs for navigation.
Live Casino Development may include a direct detail-page CTA.
32. FeatureCard
Purpose
Displays a benefit, principle, or compact capability.
Recommended API
type FeatureCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  eyebrow?: string;
  tone?: "default" | "accent";
  className?: string;
};
Usage
Use for:
Why OpenGamer;
technology principles;
live casino capability summaries;
partnership benefits;
operator/provider value.
Rules
Keep descriptions under approximately 40 words.
Do not use for long service detail.
Do not duplicate ServiceCard.
Avoid placing more than 8 feature cards in one section.
33. PartnershipCard
Purpose
Displays one engagement model.
Recommended API
type PartnershipCardProps = {
  title: string;
  description: string;
  bestFor?: string;
  outcome?: string;
  href?: string;
  ctaLabel?: string;
};
Approved Partnership Models
Custom Development
Dedicated Team
White Label
Co-Development
Technology Partnership
Long-Term Studio Partnership
Rules
Avoid pricing.
Avoid fixed timelines.
Keep commercial wording concise.
Use one shared component across homepage and service pages.
Homepage version may hide secondary details.
34. ValueCard
Purpose
Communicates business value to a specific audience.
Usage
Examples:
Operator Value
Provider Value
Aggregator Value
Platform Value
Recommended API
type ValueCardProps = {
  audience: string;
  title: string;
  description: string;
  benefits?: string[];
  icon?: React.ReactNode;
};
Rules
Do not promise measurable uplift without evidence.
Use language such as:supports;
creates additional touchpoints;
improves visibility;
enables;
extends.

Avoid:guarantees retention;
increases GGR;
reduces CAC;
improves LTV;
unless verified.

GAME COMPONENTS
35. GameCard
Purpose
Displays an official OpenGamer game title.
Recommended API
type GameCardProps = {
  title: string;
  slug: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  description?: string;
  category?: string;
  status?: "Live" | "In Development" | "Roadmap";
  format?: string;
  rtp?: string;
  volatility?: string;
  demoUrl?: string;
  detailUrl?: string;
  featured?: boolean;
  priority?: boolean;
};
Required Behavior
show title;
show artwork;
show verified status only;
show verified metadata only;
show demo link when available;
show detail link;
omit empty fields.
Rules
Do not render placeholder metadata.
Do not render:RTP;
volatility;
format;
status;
unless verified.

Use local optimized artwork.
Keep image ratio consistent.
Do not distort game art.
Demo links may open externally.
Detail links remain internal.
featured may change size or layout, not data.
priority is reserved for above-the-fold assets.
Accessibility
image alt text must identify the game;
demo link must indicate external behavior where relevant;
focus states required;
button labels must include game title when needed for screen readers.
36. GameGrid
Purpose
Displays a responsive collection of games.
Recommended API
type GameGridProps = {
  games: GameItem[];
  columns?: 2 | 3 | 4;
  featuredSlug?: string;
  emptyMessage?: string;
};
Rules
Use one canonical game data source.
Preserve consistent card proportions.
Use 3 columns on standard desktop unless the existing design supports 4 cleanly.
Mobile uses one column.
Do not mix portfolio projects into GameGrid.
Dragon Rush must be treated like every other official title once added.
37. GameFilterBar
Purpose
Filters games by confirmed categories.
Recommended API
type GameFilter = {
  id: string;
  label: string;
};

type GameFilterBarProps = {
  filters: GameFilter[];
  activeFilter: string;
  onChange: (filterId: string) => void;
  resultCount?: number;
};
Rules
Use only real categories.
Do not create filters for:RTP;
volatility;
mechanics;
status;
unless the data is verified.

Use a client component only for the filter interaction.
All game content remains server-rendered where practical.
Provide an accessible active state.
Preserve keyboard navigation.
38. GameMeta
Purpose
Displays verified game metadata.
Recommended API
type GameMetaItem = {
  label: string;
  value?: string;
};

type GameMetaProps = {
  items: GameMetaItem[];
};
Rules
Filter out undefined or empty values before rendering.
Do not show empty rows.
Do not show Pending, TBD, or N/A publicly.
Use compact layout.
Metadata must not dominate the artwork.
39. GameHero
Purpose
Specialized composition built from the shared Hero component.
Recommended API
type GameHeroProps = {
  title: string;
  description: string;
  image: ImageConfig;
  status?: StatusConfig;
  metadata?: GameMetaItem[];
  demoUrl?: string;
};
Implementation Rule
GameHero should compose:
Hero;
HeroVisual;
GameMeta;
ButtonGroup.
Do not duplicate hero markup.
40. GameGallery
Purpose
Displays approved game screenshots, artwork, or promotional media.
Recommended API
type GameGalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  type?: "image" | "video";
};

type GameGalleryProps = {
  items: GameGalleryItem[];
};
Rules
Do not display a gallery when no approved media exists.
Do not use fake screenshots.
Use image aspect ratios consistently.
Video must not autoplay with sound.
Use captions where context is useful.
41. GameActions
Purpose
Groups game-specific actions.
Recommended API
type GameActionsProps = {
  demoUrl?: string;
  contactUrl?: string;
  detailsUrl?: string;
};
Approved Labels
Play Demo
View Details
Request Commercial Information
Discuss Integration
Rules
Do not use Play Now for commercial pages.
Demo links may open externally.
Commercial enquiry should link to Contact with the relevant service or game preselected when supported.
PORTFOLIO COMPONENTS
42. PortfolioCard
Purpose
Displays a proprietary OpenGamer project.
Used for:
ELEMENTALS;
LC App;
future approved projects.
Recommended API
type PortfolioCardProps = {
  title: string;
  slug: string;
  category: string;
  status: "In Development" | "Product Concept — In Development" | "Available";
  description: string;
  image?: ImageConfig;
  visual?: React.ReactNode;
  href: string;
  ctaLabel?: string;
  featured?: boolean;
};
Rules
Status must always be visible.
Card must not resemble a game card.
Use larger editorial layout.
Do not mix portfolio project cards with services.
Use approved art or conceptual visuals only.
Do not display fake product screenshots.
featured may enable a larger landscape treatment.
43. PortfolioGrid
Purpose
Displays portfolio projects by category.
Recommended API
type PortfolioGroup = {
  id: string;
  title: string;
  description?: string;
  projects: PortfolioProject[];
};

type PortfolioGridProps = {
  groups: PortfolioGroup[];
};
Categories
Casino Games
Live Casino & Show Games
Platforms & Applications
Rules
Casino Games category should link to /games.
ELEMENTALS belongs under Live Casino & Show Games.
LC App belongs under Platforms & Applications.
Do not list services as portfolio items.
Empty future categories should not render.
44. ProjectStatus
Purpose
Displays portfolio status consistently.
Recommended API
type ProjectStatusProps = {
  status:
    | "In Development"
    | "Product Concept — In Development"
    | "Available"
    | "Pending";
};
Rules
Always include readable text.
Use subtle status styling.
Do not use a green Live style for concept projects.
Status must appear:in hero;
in portfolio card;
near key project description.

45. ProjectOverview
Purpose
Provides a structured project summary.
Recommended API
type ProjectOverviewProps = {
  title: string;
  description: string;
  highlights: string[];
  visual?: React.ReactNode;
};
Usage
Use on:
ELEMENTALS;
LC App;
future product concepts.
Rules
Highlights should remain factual.
Avoid unverified commercial claims.
Keep to 3–6 highlights.
46. ProjectSection
Purpose
Provides a reusable section layout for long-form portfolio pages.
Recommended API
type ProjectSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items?: FeatureItem[];
  visual?: React.ReactNode;
  reverse?: boolean;
  tone?: "default" | "alternate" | "surface";
};
Rules
Use alternating layout only where visual content exists.
Do not create a unique section component per realm or LC App feature.
Use typed data to render repeated project sections.
Avoid excessive section count on mobile without grouping.
MEDIA COMPONENTS
47. MediaFrame
Purpose
Provides a consistent wrapper for images, diagrams, videos, and conceptual visuals.
Recommended API
type MediaFrameProps = {
  children: React.ReactNode;
  ratio?: "square" | "landscape" | "portrait" | "wide" | "auto";
  treatment?: "plain" | "surface" | "bordered" | "glow-soft";
  caption?: string;
  className?: string;
};
Rules
Use restrained border and background.
Avoid heavy glow.
Captions must explain the visual where needed.
Concept visuals should be labeled as conceptual where necessary.
Do not use MediaFrame to hide poor-quality assets.
48. ResponsiveImage
Purpose
Standardizes local optimized image use.
Recommended API
type ResponsiveImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  className?: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
};
Rules
Use local assets.
Use correct dimensions.
Use descriptive alt text.
Use contain for logos and UI.
Use cover for artwork only when safe.
priority only for critical above-the-fold images.
Do not use arbitrary fill without a stable parent ratio.
49. ProjectVisual
Purpose
Renders approved or conceptual project visuals.
Recommended API
type ProjectVisualProps = {
  type:
    | "image"
    | "diagram"
    | "device-frame"
    | "abstract"
    | "document-stack";
  image?: ImageConfig;
  children?: React.ReactNode;
  label?: string;
  conceptual?: boolean;
};
Rules
When conceptual is true, the UI should not imply a finished product.
Use for LC App and ELEMENTALS fallback visuals.
Never generate fake gameplay or finished screenshots.
Do not use generic stock imagery.
50. DeviceFrame
Purpose
Displays conceptual mobile UI layouts for LC App.
Recommended API
type DeviceFrameProps = {
  children: React.ReactNode;
  label?: string;
  variant?: "phone" | "tablet";
  conceptual?: boolean;
};
Rules
Default LC App device visuals are conceptual.
Show a small “Conceptual interface” label where appropriate.
Do not imply functional implementation.
Avoid detailed fake casino balances, player metrics, or transactions.
Use schematic interface blocks, not invented production screens.
51. DocumentStack
Purpose
Displays documentation deliverables visually.
Used for:
Live Casino Development;
Technical Consulting;
project documentation.
Recommended API
type DocumentStackProps = {
  documents: string[];
  title?: string;
};
Example Documents
Product Vision
Game Bible
Show Bible
GDD
PRD
Technical Specification
Pilot Blueprint
Development Roadmap
Rules
Use as a visual abstraction.
Do not imply downloadable files unless available.
Keep titles concise.
ELEMENTALS COMPONENTS
52. ElementRealmCard
Purpose
Displays one ELEMENTALS realm.
Recommended API
type ElementRealmCardProps = {
  element: "Fire" | "Water" | "Earth" | "Air";
  title?: string;
  description: string;
  status?: string;
  visual?: React.ReactNode;
};
Color Mapping
Fire → element-fire
Water → element-water
Earth → element-earth
Air → element-air
Rules
Use consistent layout for all four realms.
Do not invent final bonus mechanics.
If mechanics are pending, say:
Realm-specific bonus design in development.
Do not use stock fantasy images.
Use approved art or abstract elemental SVG.
Element color is an accent, not a full card background.
53. ElementRealmGrid
Purpose
Displays all four ELEMENTALS realms.
Recommended API
type ElementRealmGridProps = {
  realms: ElementRealmItem[];
};
Rules
Always show four realms together.
Desktop may use 4 columns or 2×2.
Mobile uses one column.
Preserve equal card height where practical.
Do not emphasize one realm unless approved.
54. GreatWheelDiagram
Purpose
Visualizes the Great Wheel and its connection to the four realms.
Recommended API
type GreatWheelDiagramProps = {
  centerLabel?: string;
  realms: {
    fire: string;
    water: string;
    earth: string;
    air: string;
  };
  conceptual?: boolean;
};
Rules
Use SVG or CSS.
Keep structure readable on mobile.
Do not imply final wheel sector count or mechanics unless verified.
Label as conceptual where appropriate.
Use accessible text equivalents.
55. NexusDiagram
Purpose
Shows the Nexus as the central world connecting the four realms.
Recommended API
type NexusDiagramProps = {
  title?: string;
  realms: string[];
  description?: string;
};
Rules
Avoid showing invented map details.
Use a high-level conceptual structure.
Preserve the temple-meets-observatory direction.
Do not use generic fantasy map stock art.
56. GuardianFeature
Purpose
Displays the ELEMENTALS dealer-host concept.
Recommended API
type GuardianFeatureProps = {
  image?: ImageConfig;
  title: string;
  description: string;
  caption?: string;
};
Rules
Use approved Guardian art only.
Do not invent biography or final presenter behavior.
Use language:dealer-host;
Guardian;
character-led presentation.

Avoid describing a finalized script unless approved.
57. ElementalsStatusPanel
Purpose
Communicates current project status and limits.
Recommended API
type ElementalsStatusPanelProps = {
  status: "In Development";
  confirmed: string[];
  pending: string[];
};
Confirmed Examples
Great Wheel concept
Four elemental realms
Dealer-host format
Cinematic fantasy direction
Pending Examples
final mechanics;
final mathematics;
certification;
launch timing;
studio/provider partner.
Rules
Keep factual.
Do not make the page look incomplete or apologetic.
Present development status as structured product progress.
LC APP COMPONENTS
58. LCAppConceptHero
Purpose
Specialized hero composition for LC App.
Recommended API
type LCAppConceptHeroProps = {
  title: string;
  description: string;
  status: "Product Concept — In Development";
  visual: React.ReactNode;
  primaryAction: ActionConfig;
  secondaryAction?: ActionConfig;
};
Implementation Rule
Compose from:
Hero;
DeviceFrame;
ProjectStatus;
ButtonGroup.
Do not duplicate the shared hero system.
59. SocialLayerDiagram
Purpose
Shows the LC App social layer around existing Live Casino infrastructure.
Recommended API
type SocialLayerDiagramProps = {
  nodes?: {
    players: string;
    dealers: string;
    tables: string;
    operator: string;
    provider: string;
    app: string;
  };
  conceptual?: boolean;
};
Conceptual Flow
Players
↓
LC App Social Layer
↓
Discovery / Communication / Profiles
↓
Existing Operator or Provider Environment
↓
Existing Live Tables
Rules
Make clear that LC App sits on top of existing environments.
Do not depict LC App as the licensed gaming infrastructure.
Do not depict wallet or regulatory flows unless confirmed.
Use “Conceptual integration model” where appropriate.
60. DealerProfileConcept
Purpose
Displays the dealer-as-creator concept.
Recommended API
type DealerProfileConceptProps = {
  namePlaceholder?: string;
  roleLabel?: string;
  conceptual?: boolean;
};
Rules
Use neutral placeholder identities.
Do not use real dealer photos without approval.
Do not show fake follower counts, earnings, ratings, or player metrics.
Use schematic blocks.
Label as conceptual.
61. DiscoveryFeedConcept
Purpose
Displays conceptual content discovery.
Recommended API
type DiscoveryFeedConceptProps = {
  items: DiscoveryConceptItem[];
  conceptual?: boolean;
};
Item Types
table;
dealer;
game format;
live event;
featured content.
Rules
Do not create fake operator logos.
Do not create real-looking user data.
Keep content generic.
Label as conceptual.
62. UserJourney
Purpose
Displays a high-level user journey.
Recommended API
type UserJourneyStep = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
};

type UserJourneyProps = {
  steps: UserJourneyStep[];
  orientation?: "horizontal" | "vertical";
};
LC App Journey
Discover
Connect
Access Live Table
Engage
Return
Rules
Keep 3–6 steps.
Do not imply unbuilt functionality as complete.
Mobile uses vertical orientation.
Use readable sequence numbers.
63. OperatorProviderValue
Purpose
Compares LC App value for operators and providers.
Recommended API
type OperatorProviderValueProps = {
  operator: ValueCardProps;
  provider: ValueCardProps;
};
Rules
Do not use measurable uplift claims.
Keep benefits conceptual and capability-led.
Use phrases:additional engagement layer;
stronger discovery;
dealer visibility;
integration concept;
additional retention touchpoints.

64. LCAppStatusPanel
Purpose
Communicates LC App status and restrictions.
Recommended API
type LCAppStatusPanelProps = {
  status: "Product Concept — In Development";
  confirmed: string[];
  notConfirmed: string[];
};
Not Confirmed Examples
pilots;
users;
metrics;
commercial agreements;
launch date;
final monetization model;
regulatory approval.
Rules
Status must remain visible.
Avoid negative language.
Use factual structure.
RELATED CONTENT COMPONENTS
65. RelatedGames
Purpose
Displays 2–4 related games.
Recommended API
type RelatedGamesProps = {
  games: GameItem[];
  title?: string;
};
Rules
Do not repeat the current game.
Use only verified titles.
Keep small and secondary.
66. RelatedServices
Purpose
Displays 2–4 related services.
Recommended API
type RelatedServicesProps = {
  services: ServiceItem[];
  title?: string;
};
Rules
Use short descriptions.
Link to anchors or detail pages.
Avoid circular links without value.
67. RelatedProjects
Purpose
Displays related portfolio projects.
Usage
Examples:
ELEMENTALS page links to LC App;
LC App page links to ELEMENTALS;
Live Casino Development links to both.
Rules
Keep to 1–2 items until the portfolio grows.
Show status.
Use PortfolioCard in compact mode where possible.
MEDIA AND CARD ACCESSIBILITY
68. Card Accessibility Rules
All interactive cards must:
have visible focus;
have clear accessible name;
avoid nested interactive controls;
use semantic <article> where appropriate;
preserve logical reading order;
not reveal critical content only on hover.
If a card contains separate actions:
use distinct links or buttons;
do not wrap the entire card in another link unless implementation remains valid.
69. Image Accessibility Rules
Decorative images:
alt=""
Informative images:
describe the product or artwork;
avoid repeating adjacent text word-for-word;
include project title when useful.
Examples:
Forest Fortune game artwork
ELEMENTALS Guardian character concept
LC App conceptual mobile interface
OpenGamer RGS architecture diagram
Do not use:
image
picture
banner
graphic
as alt text.
70. Conceptual Visual Labels
Use one consistent label:
Conceptual interface
Conceptual product flow
Conceptual architecture
Concept art
In-development visual
Do not use:
final UI;
production screen;
live dashboard;
official gameplay;
unless true.
CONTENT MAPPING
71. Game Data Mapping
Recommended canonical type:
type GameItem = {
  title: string;
  slug: string;
  shortDescription: string;
  artworkSrc: string;
  imageAlt: string;
  demoUrl?: string;
  detailUrl: string;
  category?: string[];
  status?: "Live" | "In Development" | "Roadmap";
  format?: string;
  rtp?: string;
  volatility?: string;
  mechanics?: string[];
  seo: {
    title: string;
    description: string;
  };
};
Optional fields must remain undefined until verified.
Do not populate optional fields with placeholders.
72. Service Data Mapping
Recommended canonical type:
type ServiceItem = {
  id: string;
  slug: string;
  group: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  bestFor?: string;
  deliverable?: string;
  ctaLabel: string;
  href?: string;
  relatedServiceSlugs?: string[];
  seo: {
    title: string;
    description: string;
  };
};
73. Portfolio Data Mapping
Recommended canonical type:
type PortfolioProject = {
  title: string;
  slug: string;
  category:
    | "Live Casino Show Game"
    | "Application"
    | "Technology";
  status:
    | "In Development"
    | "Product Concept — In Development"
    | "Available";
  shortDescription: string;
  fullDescription: string;
  heroImage?: string;
  gallery?: string[];
  capabilities?: string[];
  ctaLabel: string;
  seo: {
    title: string;
    description: string;
  };
};
PART 2 ACCEPTANCE CRITERIA
74. Acceptance Criteria
Part 2 is implemented correctly when:
All service cards use one shared ServiceCard.
All game cards use one shared GameCard.
All portfolio projects use one shared PortfolioCard.
Game metadata is omitted when unverified.
Dragon Rush uses the same data model as other games.
ELEMENTALS realm cards share one component.
ELEMENTALS diagrams do not invent final mechanics.
LC App visuals are labeled conceptual where appropriate.
LC App diagrams clearly show integration with existing operators/providers.
No fake users, balances, player metrics, or operator logos appear.
Related content components reuse existing card components.
All images use local optimized assets where available.
No stock imagery is introduced.
All cards have keyboard-visible focus.
No critical content appears only on hover.
Project status appears consistently.
Portfolio projects remain separate from games and services.
Data comes from typed content files.
No duplicate page-specific card components are created.
All components follow the Design System and Brand Guidelines.
75. Token-Efficient Implementation Rules
For Codex:
search for exact component names before creating new ones;
reuse BaseCard;
reuse Hero;
reuse MediaFrame;
create data-driven repeated sections;
do not hardcode realm cards four times;
do not hardcode LC App journey steps inside page markup;
inspect only relevant content and component files;
batch all game catalogue updates;
batch all portfolio updates;
run full QA after the complete implementation batch;
keep final reporting concise.
76. Part 2 Scope
This part defines:
service cards;
game cards;
game grids;
game detail media;
portfolio cards;
portfolio project sections;
media wrappers;
ELEMENTALS components;
LC App components;
related content;
typed content mapping.
The next part will define:
diagrams;
process components;
forms;
accordions;
tabs;
filters;
status and feedback;
loading, error, and empty states;
cookie consent;
interactive accessibility.
---

# PART 3 — DIAGRAMS, FORMS, FAQ, INTERACTIVE COMPONENTS, FEEDBACK STATES AND COOKIE CONSENT

---

## 77. Purpose of Part 3

This part defines reusable components for:

- diagrams;
- process flows;
- architecture visuals;
- timelines;
- forms;
- FAQ;
- accordions;
- tabs;
- filters;
- loading states;
- error states;
- empty states;
- cookie consent;
- interactive accessibility;
- user feedback.

All components in this part must reuse the foundations from Part 1 and the card/media system from Part 2.

Do not create page-specific interactive logic when a shared component can handle the same role.

---

# DIAGRAM COMPONENTS

---

## 78. `ArchitectureDiagram`

### Purpose

Displays a technical architecture flow.

Used for:

- OpenGamer RGS;
- game integration;
- Live Casino technical architecture;
- LC App integration concept;
- wallet and session flows.

### Recommended API

```tsx
type ArchitectureNode = {
  id: string;
  label: string;
  description?: string;
  category?: string;
  status?: "confirmed" | "conceptual" | "pending";
};

type ArchitectureEdge = {
  from: string;
  to: string;
  label?: string;
};

type ArchitectureDiagramProps = {
  title?: string;
  description?: string;
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
  orientation?: "horizontal" | "vertical";
  conceptual?: boolean;
};
Rules
Use concise labels.
Use horizontal orientation on desktop where practical.
Use vertical orientation on mobile.
Do not imply confirmed architecture when conceptual.
Do not include wallet, transaction, compliance, or infrastructure layers unless verified.
Use status labels when relevant.
Provide a text alternative for accessibility.
Accessibility
Diagram must have a readable heading.
Include a hidden or visible linear text version.
Do not rely only on arrows or color.
Ensure labels remain readable at mobile widths.
79. IntegrationFlow
Purpose
Displays the integration process.
Recommended API
type IntegrationStep = {
  number?: number;
  title: string;
  description: string;
  status?: "standard" | "optional";
};

type IntegrationFlowProps = {
  steps: IntegrationStep[];
  title?: string;
  description?: string;
};
Approved Integration Flow
Technical Discovery
Documentation Exchange
Sandbox Connection
Wallet and Game-Flow Testing
Quality Assurance
Partner Approval
Production Launch
Monitoring and Support
Rules
Do not display fixed timelines.
Do not promise 48-hour integration.
Do not imply certification is always part of the same flow.
Mobile uses a vertical step sequence.
Desktop may use horizontal or stepped layout.
80. ProcessTimeline
Purpose
Displays a development or delivery process.
Recommended API
type ProcessStep = {
  id: string;
  number: number;
  title: string;
  description?: string;
  phase?: string;
};

type ProcessTimelineProps = {
  steps: ProcessStep[];
  orientation?: "horizontal" | "vertical";
  compact?: boolean;
};
Approved OpenGamer Development Process
Discovery
Planning
Design
Development
Quality Assurance
Certification Preparation
Launch
Support
Rules
Use “Certification Preparation” rather than implying guaranteed certification.
Keep descriptions concise.
Do not add fixed durations unless verified.
Use one shared process component across pages.
Do not create a separate timeline implementation for Live Casino unless the process materially differs.
81. UserJourneyDiagram
Purpose
Displays a customer, player, operator, or product journey.
Used for:
LC App;
game onboarding;
Live Casino player flow;
partnership process.
Recommended API
type JourneyStep = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
};

type UserJourneyDiagramProps = {
  steps: JourneyStep[];
  title?: string;
  orientation?: "horizontal" | "vertical";
  conceptual?: boolean;
};
LC App Example
Discover
Connect
Access Existing Live Table
Engage
Return
Rules
Keep to 3–6 steps.
Do not imply unbuilt functionality is already operational.
Label as conceptual when required.
Use vertical layout on mobile.
Keep step labels readable.
82. SystemLayerDiagram
Purpose
Displays layered architecture.
Example
Player Client
Operator or Aggregator
OpenGamer API Layer
OpenGamer RGS
Game Logic and RNG Connectivity
Wallet, Reporting and Monitoring
Recommended API
type SystemLayer = {
  title: string;
  description?: string;
  tone?: "default" | "accent" | "muted";
};

type SystemLayerDiagramProps = {
  layers: SystemLayer[];
  title?: string;
  conceptual?: boolean;
};
Rules
Use only confirmed layers.
Use “RNG Connectivity” unless ownership and implementation details are verified.
Avoid overclaiming infrastructure ownership.
Keep the diagram commercially understandable.
83. BroadcastFlowDiagram
Purpose
Displays conceptual Live Casino broadcast flow.
Recommended API
type BroadcastFlowNode = {
  title: string;
  description?: string;
};

type BroadcastFlowDiagramProps = {
  nodes: BroadcastFlowNode[];
  conceptual?: boolean;
};
Possible High-Level Flow
Studio Concept
Presenter Position
Camera Logic
Broadcast Composition
Player-Facing Overlay
Operator or Provider Environment
Rules
Label as conceptual.
Do not imply OpenGamer owns broadcast infrastructure.
Do not show physical studio construction capability unless confirmed.
Use for design and consulting scope only.
84. StudioConceptDiagram
Purpose
Displays studio product design concepts.
Recommended API
type StudioZone = {
  id: string;
  label: string;
  description?: string;
};

type StudioConceptDiagramProps = {
  zones: StudioZone[];
  title?: string;
  conceptual?: boolean;
};
Possible Zones
Presenter Position
Main Game Device
Display Area
Camera Zones
Lighting Zones
Brand Integration
Operational Movement
Rules
Do not imply construction drawings.
Use abstract plan view.
Label as conceptual.
Avoid detailed measurements unless verified.
85. DataFlowDiagram
Purpose
Displays data movement between systems.
Used for:
RGS;
operator integration;
LC App concept;
reporting architecture.
Recommended API
type DataFlowNode = {
  id: string;
  label: string;
};

type DataFlowConnection = {
  from: string;
  to: string;
  label?: string;
};

type DataFlowDiagramProps = {
  nodes: DataFlowNode[];
  connections: DataFlowConnection[];
  conceptual?: boolean;
};
Rules
Use only approved system names.
Do not expose credentials, endpoints, or sensitive architecture.
Public diagrams remain high-level.
Label conceptual flows appropriately.
FAQ AND DISCLOSURE COMPONENTS
86. FAQSection
Purpose
Displays a grouped list of frequently asked questions.
Recommended API
type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

type FAQSectionProps = {
  title?: string;
  description?: string;
  items: FAQItem[];
  allowMultiple?: boolean;
};
Rules
Use concise, factual answers.
Do not use FAQ to publish unsupported claims.
Keep answers between approximately 40 and 120 words.
Use one shared accordion system.
FAQ content belongs in typed content files when reused.
87. Accordion
Purpose
Provides accessible expandable content.
Recommended API
type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  type?: "single" | "multiple";
  defaultOpenId?: string;
};
Required Behavior
keyboard accessible;
clear open state;
correct ARIA attributes;
smooth restrained animation;
reduced-motion support;
visible focus.
Rules
Do not hide essential primary information inside accordions.
Use for:FAQ;
secondary service details;
mobile content compression;
technical explanations.

Do not use accordion solely to shorten a page with weak structure.
88. Disclosure
Purpose
Provides a compact single expandable block.
Recommended API
type DisclosureProps = {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};
Usage
Use for:
additional technical details;
legal notes;
optional explanations;
conceptual-status clarification.
TAB COMPONENTS
89. Tabs
Purpose
Switches between related content views.
Recommended API
type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  items: TabItem[];
  defaultTabId?: string;
  orientation?: "horizontal" | "vertical";
};
Usage
Use sparingly for:
Operator vs Provider value;
service group summaries;
technical concept comparisons;
desktop content compression.
Rules
Do not use tabs for primary navigation.
Content must remain accessible without mouse.
Use correct ARIA tab roles.
Mobile may switch to accordion if space is limited.
Do not hide SEO-critical content behind client-only rendering when avoidable.
90. SegmentedControl
Purpose
Provides compact switching between a small number of options.
Recommended API
type SegmentOption = {
  id: string;
  label: string;
};

type SegmentedControlProps = {
  options: SegmentOption[];
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
};
Usage
Use for:
confirmed game filters;
portfolio category filters;
view mode switching.
Rules
Use only when there are 2–4 options.
Must be keyboard accessible.
Do not use for long labels.
FILTER COMPONENTS
91. FilterBar
Purpose
Provides reusable filtering controls.
Recommended API
type FilterOption = {
  id: string;
  label: string;
  count?: number;
};

type FilterBarProps = {
  options: FilterOption[];
  activeId: string;
  onChange: (id: string) => void;
  label?: string;
};
Rules
Use confirmed categories only.
Preserve clear active state.
Show result count only if accurate.
Avoid creating empty categories.
Mobile should allow horizontal scrolling or wrapping without overflow.
Filters must work with keyboard.
92. SearchField
Purpose
Reserved for future portfolio or insights search.
Recommended API
type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label: string;
};
Rules
Do not add search to the current launch unless needed.
Keep component available for future growth.
Do not build unnecessary search infrastructure.
FORM COMPONENTS
93. FormField
Purpose
Provides the shared wrapper for form labels, help text, errors, and field state.
Recommended API
type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  helpText?: string;
  children: React.ReactNode;
};
Rules
Every input must use a visible label.
Do not rely only on placeholder text.
Error text must be connected through aria-describedby.
Required and optional states must be clear.
Do not mark both required and optional.
94. TextInput
Recommended API
type TextInputProps = {
  id: string;
  name: string;
  type?: "text" | "email" | "url" | "tel";
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
};
Rules
Use appropriate type.
Use appropriate autocomplete.
Preserve mobile keyboard behavior.
Do not expose sensitive values.
Do not hardcode business data into placeholders.
95. TextArea
Recommended API
type TextAreaProps = {
  id: string;
  name: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  maxLength?: number;
};
Rules
Minimum default rows: 5.
Project description should remain the main long-form field.
Show character count only if a meaningful max length exists.
Avoid auto-expanding without testing.
96. SelectField
Recommended API
type SelectOption = {
  value: string;
  label: string;
};

type SelectGroup = {
  label: string;
  options: SelectOption[];
};

type SelectFieldProps = {
  id: string;
  name: string;
  options?: SelectOption[];
  groups?: SelectGroup[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
};
Rules
Use grouped options for serviceOfInterest.
Use native <select> where possible for reliability.
Use <optgroup> for service categories.
Do not create a custom select unless necessary.
Preserve keyboard and screen-reader support.
97. CheckboxField
Recommended API
type CheckboxFieldProps = {
  id: string;
  name: string;
  label: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
};
Rules
Consent text must be clear.
Link to privacy policy where relevant.
Checkbox target should remain large enough for touch.
Do not pre-check consent.
98. RadioGroup
Recommended API
type RadioOption = {
  value: string;
  label: string;
  description?: string;
};

type RadioGroupProps = {
  name: string;
  legend: string;
  options: RadioOption[];
  required?: boolean;
};
Usage
Use only when options are few and benefit from being visible.
Do not replace compact selects with radio groups without reason.
99. LeadForm
Purpose
Primary B2B enquiry form.
Recommended API
type LeadFormProps = {
  serviceGroups: SelectGroup[];
  companyTypes: SelectOption[];
  projectStages?: SelectOption[];
  budgetRanges?: SelectOption[];
  endpoint?: string;
  defaultService?: string;
};
Required Fields
Full Name
Company
Business Email
Job Title
Company Type
Service of Interest
Project Description
Consent
Optional Fields
Website
Preferred Contact Method
Project Stage
Expected Launch
Number of Games
Existing Platform
Target Markets
Required Integration
Budget Range
Required States
idle;
submitting;
success;
validation error;
server error;
spam-safe success;
duplicate-submission prevention.
Rules
Preserve existing validation.
Preserve honeypot protection.
Do not add a CRM provider without credentials.
Keep delivery provider env-driven.
Do not log sensitive data in production.
Use mn@open-gamer.com only if confirmed as the active destination.
Keep contact email strategy in the launch checklist until finalized.
100. FormStatus
Purpose
Displays form submission feedback.
Recommended API
type FormStatusProps = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
};
Accessibility
use aria-live;
loading uses polite announcements;
error and success messages remain visible;
do not rely only on icon or color.
101. HoneypotField
Purpose
Provides invisible spam detection.
Rules
Must remain hidden from normal users.
Must not be focusable.
Must not interfere with autofill.
Server must return safe success for detected bots where appropriate.
Do not reveal spam-detection logic publicly.
102. SubmitButton
Purpose
Specialized use of shared Button.
Recommended API
type SubmitButtonProps = {
  loading: boolean;
  disabled?: boolean;
  label?: string;
  loadingLabel?: string;
};
Rules
Preserve width during loading.
Prevent duplicate submission.
Use:Send Project Request
Submit Enquiry

Avoid generic Submit where a more descriptive label is possible.
FEEDBACK COMPONENTS
103. LoadingState
Purpose
Displays non-blocking loading feedback.
Recommended API
type LoadingStateProps = {
  label?: string;
  variant?: "inline" | "section" | "page";
};
Rules
Avoid full-page loading for static content.
Preserve layout.
Use server rendering where possible.
Do not show indefinite spinners when content can be pre-rendered.
104. Skeleton
Purpose
Preserves layout while dynamic content loads.
Recommended API
type SkeletonProps = {
  width?: string | number;
  height?: string | number;
  radius?: "small" | "medium" | "large";
};
Rules
Use only for real dynamic loading.
Do not add skeletons to fully static pages.
Respect reduced-motion.
Avoid shimmering effects that are visually aggressive.
105. EmptyState
Purpose
Displays a useful message when no content matches.
Recommended API
type EmptyStateProps = {
  title: string;
  description?: string;
  action?: ActionConfig;
  icon?: React.ReactNode;
};
Examples
No games match this filter.
No portfolio projects are available in this category.
No additional media is available.
Rules
Explain what happened.
Offer a useful next action.
Avoid generic “Nothing here.”
106. ErrorState
Purpose
Displays recoverable errors.
Recommended API
type ErrorStateProps = {
  title: string;
  description?: string;
  retryLabel?: string;
  onRetry?: () => void;
  action?: ActionConfig;
};
Rules
Keep messages understandable.
Do not expose stack traces.
Offer recovery.
Preserve branding.
Use accessible alert semantics where appropriate.
107. SuccessState
Purpose
Displays successful completion.
Recommended API
type SuccessStateProps = {
  title: string;
  description?: string;
  action?: ActionConfig;
};
Lead Form Example
Title:
Thank you. Your enquiry has been received.
Description:
The OpenGamer business development team will review the project details and follow up through the contact information provided.
Do not promise a response time unless confirmed.
108. InlineNotice
Purpose
Displays compact informational, warning, success, or error messages.
Recommended API
type InlineNoticeProps = {
  tone: "info" | "success" | "warning" | "error";
  title?: string;
  children: React.ReactNode;
};
Usage
Use for:
conceptual-status notice;
legal notice;
pending information;
form error;
product status explanation.
Rules
Do not overuse.
Keep text concise.
Use icons consistently.
Do not rely only on color.
STATUS COMPONENTS
109. Badge
Recommended API
type BadgeProps = {
  children: React.ReactNode;
  tone?: "default" | "accent" | "muted" | "info" | "warning";
  size?: "sm" | "md";
};
Usage
Use for:
service category;
project category;
featured;
conceptual;
verified.
110. StatusBadge
Recommended API
type StatusBadgeProps = {
  status:
    | "Live"
    | "In Development"
    | "Product Concept — In Development"
    | "Roadmap"
    | "Pending";
};
Rules
Keep mapping centralized.
Always include text.
Do not use the same strong green style for all statuses.
Do not invent new statuses without content-model approval.
111. VerificationLabel
Purpose
Internal or optional public indicator for verified content.
Recommended API
type VerificationLabelProps = {
  verified: boolean;
  label?: string;
};
Rules
Do not expose internal verification logic unless useful.
Prefer omission of unverified data instead of visible “unverified” labels.
Use mainly in admin or internal preview contexts.
COOKIE CONSENT COMPONENTS
112. CookieBanner
Purpose
Provides cookie consent controls.
Recommended API
type CookieBannerProps = {
  onAcceptAll: () => void;
  onRejectNonEssential: () => void;
  onOpenPreferences: () => void;
};
Required Actions
Accept All
Reject Non-Essential
Manage Preferences
Rules
Essential cookies remain active.
Analytics must remain blocked until consent.
Do not use dark patterns.
Reject action must be visible.
Banner must not block critical navigation.
Text must link to Cookie Policy.
Accessibility
keyboard accessible;
clear focus order;
readable on mobile;
no forced scrolling traps.
113. CookiePreferences
Purpose
Allows users to control cookie categories.
Recommended API
type CookieCategory = {
  id: string;
  title: string;
  description: string;
  required?: boolean;
  enabled: boolean;
};

type CookiePreferencesProps = {
  categories: CookieCategory[];
  onSave: (categories: CookieCategory[]) => void;
  onClose: () => void;
};
Categories
Essential
Analytics
Marketing, only if used
Functional, only if used
Rules
Essential cannot be disabled.
Do not list categories that are not used.
Keep provider details aligned with legal copy.
Do not activate analytics before consent.
114. ConsentState
Purpose
Centralizes consent storage.
Recommended Shape
type ConsentState = {
  essential: true;
  analytics: boolean;
  marketing?: boolean;
  functional?: boolean;
  updatedAt: string;
};
Rules
Store consent safely.
Respect regional legal requirements.
Allow users to reopen preferences.
Update Cookie Policy when providers change.
Do not claim legal compliance without review.
INTERACTION ACCESSIBILITY
115. Focus Management
Interactive overlays must:
move focus into the active element;
trap focus when appropriate;
restore focus on close;
support ESC close;
preserve visible focus.
Applies to:
mobile menu;
cookie preferences;
modal;
drawer.
116. Keyboard Rules
Required:
Tab navigates interactive elements.
Shift+Tab moves backward.
Enter activates buttons and links.
Space activates buttons and toggles where appropriate.
Arrow keys support tabs or segmented controls.
ESC closes dismissible overlays.
No keyboard traps.
117. Reduced Motion
When prefers-reduced-motion: reduce is active:
disable section reveal animations;
disable decorative looping movement;
simplify accordions;
remove parallax;
preserve instant state changes;
keep functionality intact.
118. Touch Interaction
Minimum touch target:
44×44px
Required for:
buttons;
menu trigger;
accordion trigger;
checkboxes;
close icons;
filter controls;
cookie consent actions.
Avoid tightly packed inline controls.
119. Hover Rules
Do not hide essential information behind hover.
Hover may enhance:
border;
elevation;
image scale;
arrow movement;
background.
Mobile must receive the same essential content without hover.
MODAL AND DRAWER COMPONENTS
120. Modal
Purpose
Reserved for focused interactions.
Recommended API
type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
};
Rules
Use sparingly.
Do not use for normal navigation.
Must trap focus.
Must close with ESC.
Must restore focus.
Must prevent background interaction.
Do not use for intrusive marketing popups.
121. Drawer
Purpose
Provides side-panel interaction.
Used for:
mobile menu;
cookie preferences;
future filters.
Recommended API
type DrawerProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  side?: "left" | "right";
  children: React.ReactNode;
};
Rules
Use shared drawer for mobile menu and future panels.
Avoid duplicating overlay logic.
Preserve focus management.
Lock background scroll.
FORM DATA AND VALIDATION
122. Lead Form Data Type
Recommended:
type LeadFormData = {
  fullName: string;
  company: string;
  businessEmail: string;
  jobTitle: string;
  companyType: string;
  serviceOfInterest: string;
  projectDescription: string;
  website?: string;
  preferredContactMethod?: string;
  projectStage?: string;
  expectedLaunch?: string;
  numberOfGames?: string;
  existingPlatform?: string;
  targetMarkets?: string;
  requiredIntegration?: string;
  budgetRange?: string;
  consent: boolean;
  honeypot?: string;
};
123. Validation Rules
Required:
full name;
company;
business email;
job title;
company type;
service of interest;
project description;
consent.
Validate:
email format;
URL format where entered;
reasonable field lengths;
project description minimum length;
consent;
honeypot.
Do not validate optional fields when empty.
124. Server Response Shape
Recommended:
type LeadApiResponse =
  | {
      ok: true;
      message: string;
    }
  | {
      ok: false;
      message: string;
      fieldErrors?: Record<string, string>;
    };
Rules
Do not expose internal provider errors.
Return generic safe server messages.
Log detailed errors only in secure server context.
Preserve typed response handling.
PART 3 ACCEPTANCE CRITERIA
125. Acceptance Criteria
Part 3 is implemented correctly when:
Architecture diagrams use shared typed components.
Mobile diagrams convert to vertical layouts.
Conceptual diagrams are labeled where required.
Integration flow does not publish fixed timelines.
Process timeline uses “Certification Preparation.”
FAQ uses one accessible accordion system.
Tabs and filters are keyboard accessible.
Forms use shared field wrappers.
Service options use grouped select options.
Lead form preserves honeypot and server validation.
Loading, success, and error states are accessible.
Duplicate form submission is prevented.
Cookie consent blocks analytics until approval.
Cookie preferences do not use dark patterns.
Modal and drawer focus is managed.
Reduced-motion behavior is supported.
No critical content depends on hover.
Empty states provide a useful next action.
No stack traces or internal errors appear publicly.
All interactive components follow the Design System and Brand Guidelines.
126. Token-Efficient Implementation Rules
For Codex:
reuse one diagram data structure where possible;
do not create page-specific accordion implementations;
reuse FormField;
reuse native select with optgroups;
do not add custom form libraries unless needed;
preserve existing validation before refactoring;
batch form and contact-option changes;
run interaction QA after the implementation batch;
do not print full component code in final reports;
report only component names and checks.
127. Part 3 Scope
This part defines:
architecture diagrams;
process flows;
timelines;
user journeys;
FAQ;
accordions;
tabs;
filters;
form controls;
lead form behavior;
loading states;
empty states;
error states;
cookie consent;
modals;
drawers;
interaction accessibility.
The final part will define:
metadata and SEO helpers;
schema components;
file naming;
component exports;
testing strategy;
deprecation rules;
final library acceptance criteria;
maintenance and token-efficiency rules.
---

# PART 4 — SEO HELPERS, SCHEMA, TESTING, EXPORTS, DEPRECATION, QA AND FINAL ACCEPTANCE CRITERIA

---

## 128. Purpose of Part 4

This part defines the final implementation standards for:

- metadata helpers;
- canonical URLs;
- structured data;
- sitemap and robots;
- component exports;
- naming;
- testing;
- visual QA;
- deprecation;
- documentation;
- maintenance;
- final acceptance criteria;
- token-efficient future development.

This section completes the canonical OpenGamer component library.

---

# SEO AND METADATA HELPERS

---

## 129. `createPageMetadata`

### Purpose

Creates consistent Next.js metadata for all public routes.

### Recommended API

```tsx
type CreatePageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

function createPageMetadata(
  input: CreatePageMetadataInput
): Metadata;
Responsibilities
page title;
meta description;
canonical URL;
Open Graph title;
Open Graph description;
Open Graph URL;
Open Graph image;
Twitter card;
robots index state.
Rules
Every public route must use unique metadata.
Canonical URLs must use the approved production base URL.
Preview deployments must not hardcode Vercel aliases as canonical production URLs.
Use a default OG image only when a page-specific image is unavailable.
Do not generate unsupported claims in metadata.
Keep metadata content consistent with visible page copy.
130. Metadata Base
Purpose
Defines the canonical website origin.
Recommended environment variable:
NEXT_PUBLIC_SITE_URL
Recommended fallback during preview:
https://open-gamer.com
Use the final production domain once approved.
Rules
Do not use localhost in production metadata.
Do not use a temporary Vercel URL as the permanent canonical origin.
Keep base URL logic in one shared file.
Sitemap, robots, schema, metadata, and canonical URLs must use the same source.
131. buildCanonicalUrl
Recommended API
function buildCanonicalUrl(path: string): string;
Rules
Normalize leading slashes.
Avoid duplicate trailing slashes.
Avoid duplicate domain logic.
Use for metadata, schema, sitemap, and breadcrumbs.
132. Open Graph Images
Default
Use the approved OpenGamer OG image.
Recommended location:
/public/assets/brand/opengamer-og.png
Page-Specific OG Images
Create or use approved images for:
Games;
Dragon Rush;
ELEMENTALS;
LC App;
Live Casino Development;
Portfolio.
Rules
Recommended dimensions: 1200×630.
Use local assets.
Do not use fake gameplay.
Do not use unapproved concept art.
LC App conceptual visuals must not look like released product screenshots.
ELEMENTALS OG image should use approved art and clear development status where appropriate.
133. PageSeo
Purpose
Optional internal abstraction for metadata configuration.
Recommended type:
type PageSeo = {
  title: string;
  description: string;
  canonicalPath: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};
Rules
Keywords are optional and not a substitute for content quality.
Do not keyword-stuff.
Store page SEO data near canonical content where practical.
Avoid duplicating SEO strings in page files and content files.
STRUCTURED DATA COMPONENTS
134. JsonLd
Purpose
Safely renders structured data.
Recommended API
type JsonLdProps = {
  data: Record<string, unknown>;
};

function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
Rules
Only render factual structured data.
Do not expose secrets or internal IDs.
Do not mark concept products as available commercial products.
Do not use unsupported ratings, reviews, prices, availability, or offers.
Keep schema synchronized with visible content.
135. OrganizationSchema
Purpose
Describes OpenGamer as an organization.
Recommended Fields
@context
@type
name
url
logo
description
sameAs
contactPoint, only when confirmed
address, only when legally approved
Rules
Use approved social URLs only.
Do not add fake office locations.
Do not add employee counts unless verified.
Do not add founding year unless approved.
Do not add partner names.
136. BreadcrumbSchema
Purpose
Provides structured breadcrumb data on detail pages.
Recommended Input
type BreadcrumbSchemaItem = {
  name: string;
  url: string;
};

type BreadcrumbSchemaProps = {
  items: BreadcrumbSchemaItem[];
};
Use On
game detail pages;
portfolio project pages;
Live Casino Development;
legal pages where breadcrumbs exist.
Rules
Schema items must match visible breadcrumbs.
Use canonical URLs.
Current page should be the final item.
137. ServiceSchema
Purpose
Describes a confirmed OpenGamer service.
Use On
Services page;
Live Casino Development page;
future service detail pages.
Recommended Fields
@type: Service
name
description
provider
areaServed, only when confirmed
serviceType
Rules
Do not add pricing.
Do not add guaranteed results.
Do not add false market coverage.
Do not describe certification approval as a service outcome.
138. CreativeWorkSchema
Purpose
Describes concept-stage portfolio projects.
Recommended for:
ELEMENTALS;
LC App where SoftwareApplication could wrongly imply a released app.
Rules
Include development status in description.
Do not add offers, ratings, release dates, users, or commercial availability.
Use CreativeWork or a similarly cautious type until product status changes.
139. Game Structured Data
Use a general WebPage, CreativeWork, or appropriate supported type unless a precise game schema is verified.
Rules
Do not invent:ratings;
review counts;
offers;
price;
release date;
supported platforms;
age rating;
game mode.

Visible game metadata and schema metadata must match.
SITEMAP AND ROBOTS
140. Sitemap
The sitemap must include all approved public routes.
Required routes:
/
 /services
 /services/live-casino-development
 /games
 /games/sweet-wins
 /games/dragon-rush
 /games/forest-fortune
 /games/choco-boom
 /games/deep-dive
 /games/fruit-elixir
 /games/passion-paradise
 /portfolio
 /portfolio/elementals
 /portfolio/lc-app
 /technology
 /about
 /contact
 /privacy-policy
 /terms-of-use
 /cookie-policy
Rules
Generate game routes from canonical typed game data.
Generate project routes from canonical portfolio data.
Do not manually duplicate route lists where data can generate them.
Do not include:internal QA routes;
API routes;
preview-only pages;
hidden CMS scaffolding;
draft content.

Use correct canonical origin.
141. Robots
Requirements
Allow indexing of public launch pages.
Block internal or non-public routes where applicable.
Include sitemap URL.
Do not block required assets.
Do not accidentally block the entire site in production.
Preview Guidance
Preview deployments may use noindex when appropriate, but the public approved preview alias may remain accessible for review.
Production indexing must be explicitly verified before launch.
INTERNAL LINKING COMPONENTS
142. InternalLinkMap
Purpose
Defines expected cross-links between major pages.
Recommended relationships:
Home
→ Services
→ Games
→ Portfolio
→ Live Casino Development
→ Technology
→ Contact

Services
→ Live Casino Development
→ Games
→ Technology
→ Contact

Live Casino Development
→ ELEMENTALS
→ LC App
→ Contact

Games
→ Game Detail
→ Contact

Portfolio
→ ELEMENTALS
→ LC App
→ Games

ELEMENTALS
→ Live Casino Development
→ LC App
→ Contact

LC App
→ Live Casino Development
→ ELEMENTALS
→ Contact
Rules
Do not add links merely for SEO.
Links must be contextually useful.
Avoid repeated identical CTA links in the same section.
Related content should use canonical content data.
COMPONENT EXPORTS
143. Barrel Exports
Barrel exports may be used when they improve clarity.
Example:
export { Button } from "./Button";
export { TextLink } from "./TextLink";
export { ButtonGroup } from "./ButtonGroup";
Rules
Avoid deep circular dependencies.
Avoid one global barrel that exports every component in the project.
Prefer category-level exports:/components/actions
/components/cards
/components/forms
/components/layout

Keep import paths predictable.
144. Component File Naming
Use PascalCase for React component files.
Examples:
Button.tsx
GameCard.tsx
LeadForm.tsx
ArchitectureDiagram.tsx
Use camelCase for utilities.
Examples:
createPageMetadata.ts
buildCanonicalUrl.ts
formatGameStatus.ts
Use kebab-case for static asset folders and route segments.
Examples:
dragon-rush
live-casino-development
lc-app
145. Component Naming Rules
Use semantic names.
Approved examples:
GameCard
PortfolioCard
ServiceGroup
ProjectStatus
UserJourneyDiagram
Avoid:
CardNew
CardV2
GreenCard
PortfolioBox
LiveSectionFinal
NewHero
Component1
If a component is replaced, rename or deprecate the old one clearly.
PROP DESIGN RULES
146. Boolean Props
Avoid multiple ambiguous booleans.
Bad:
<Card
  green
  big
  special
  animated
/>
Prefer:
<Card
  tone="accent-soft"
  size="large"
  variant="featured"
/>
Rules
Use booleans only for clear yes/no behavior.
Use variants for mutually exclusive visual states.
Do not create impossible prop combinations.
147. Optional Props
Optional props must not produce empty UI.
Examples:
undefined rtp must render nothing;
missing image must use an approved conceptual treatment or no media block;
missing CTA must not leave spacing;
missing description must not render an empty paragraph.
148. Default Props
Use defaults for stable visual behavior.
Examples:
Section spacing → default
Button size → md
Card tone → default
Hero alignment → left
Grid gap → md
Do not use defaults that hide factual uncertainty.
TESTING STRATEGY
149. Testing Levels
Use a balanced testing strategy:
Type checking
Linting
Production build
Unit tests for utilities
Component interaction tests where useful
Route smoke tests
Visual QA
Accessibility checks
Lighthouse review
Manual final review
Do not add excessive tests for static presentational markup without value.
150. Required Commands
At minimum:
pnpm lint
pnpm build
If project scripts exist:
pnpm test
pnpm test:e2e
pnpm qa:visual
Rules
Never declare completion with a failing build.
Fix lint errors.
Document warnings honestly.
Do not suppress errors without reason.
151. Utility Unit Tests
Prioritize tests for:
canonical URL generation;
metadata helpers;
lead validation;
content filtering;
sitemap route generation;
status mapping;
consent state handling.
152. Component Interaction Tests
Prioritize:
MobileMenu;
Accordion;
Tabs;
FilterBar;
LeadForm;
CookieBanner;
CookiePreferences;
Modal;
Drawer.
Test:
keyboard behavior;
open/close behavior;
focus return;
validation;
loading;
success;
error.
153. Route Smoke Tests
Required routes:
/
 /services
 /services/live-casino-development
 /games
 /games/sweet-wins
 /games/dragon-rush
 /games/forest-fortune
 /games/choco-boom
 /games/deep-dive
 /games/fruit-elixir
 /games/passion-paradise
 /portfolio
 /portfolio/elementals
 /portfolio/lc-app
 /technology
 /about
 /contact
 /privacy-policy
 /terms-of-use
 /cookie-policy
 /sitemap.xml
 /robots.txt
Also test:
legacy redirects;
404;
lead API validation;
honeypot response;
valid local submission behavior.
154. Visual QA
Capture screenshots at:
1440×1000
1024×900
768×1024
390×844
375×812
Required visual QA pages:
Home
Services
Live Casino Development
Games
All game detail pages
Portfolio
ELEMENTALS
LC App
Technology
About
Contact
Legal pages
Rules
Do not commit browser binaries.
Screenshots may be ignored by Git if they are large.
Keep the QA script.
Run full visual QA after coherent implementation batches, not every small edit.
155. Visual QA Checklist
Check:
horizontal overflow;
broken card grids;
image crop;
hero balance;
heading wraps;
navigation fit;
footer balance;
form layout;
filter behavior;
conceptual labels;
project status;
section spacing;
mobile CTA stacking;
diagram readability;
long email wrapping;
legal-page readability.
156. Accessibility QA
Check:
keyboard navigation;
visible focus;
menu focus management;
accordion semantics;
tab semantics;
form labels;
error announcements;
contrast;
alt text;
reduced motion;
touch targets;
no hover-only content;
no color-only meaning.
Target:
Accessibility: 95+
157. Lighthouse QA
Target:
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
Rules
Test local production build.
Test deployed preview where possible.
Do not damage design or usability to chase a score.
Document measured results honestly.
Investigate major regressions.
ERROR AND LOGGING STANDARDS
158. Public Errors
Public UI must not expose:
stack traces;
API keys;
provider names where sensitive;
raw server errors;
internal file paths;
environment variables;
database details.
Use safe user-facing messages.
159. Server Logging
Server logs may include:
request ID;
timestamp;
route;
provider response category;
validation outcome.
Do not log:
full project description in production unless required;
consent content;
credentials;
tokens;
secrets;
unnecessary personal information.
DEPRECATION RULES
160. Deprecating Components
When replacing a component:
Confirm all usages.
Introduce the replacement.
Migrate consumers.
Remove unused code.
Update imports.
Run lint and build.
Document material changes.
Do not leave multiple “temporary” versions indefinitely.
161. Deprecated Naming
Do not keep files such as:
HeroOld.tsx
HeroNew.tsx
HeroFinal.tsx
CardV2.tsx
CardLatest.tsx
Use Git history for old versions.
162. Legacy Prototype Code
Obsolete static prototype or wireframe code should remain removed once the production implementation replaces it.
Do not restore obsolete layers unless they contain unique approved content or assets.
DOCUMENTATION RULES
163. Existing Documentation
Maintain only necessary canonical files:
WEBSITE_CONTENT_HANDOFF.md
OPEN_GAMER_DESIGN_SYSTEM.md
OPEN_GAMER_BRAND_GUIDELINES.md
OPEN_GAMER_COMPONENT_LIBRARY.md
PROJECT_STATUS.md
LAUNCH_CHECKLIST.md
RELEASE_NOTES.md
FINAL_QA_REPORT.md
VISUAL_QA_REPORT.md
Do not create a new document for every small change.
164. Documentation Update Rules
Update documentation only when:
public routes change;
service scope changes;
product status changes;
component standards change;
launch blockers change;
deployment changes;
QA results change materially.
Keep updates concise.
GIT STANDARDS
165. Branching
Use the existing working branch unless a new branch is required.
Current example:
codex/opengamer-preview-readiness
Do not rewrite history without approval.
166. Commit Structure
Use logical commits.
Examples:
feat: expand service portfolio
feat: add live casino development page
feat: add portfolio projects
feat: add dragon rush
fix: improve mobile navigation
refactor: unify project cards
perf: optimize portfolio assets
docs: update final qa report
Rules
Avoid one huge commit when changes separate cleanly.
Avoid a commit for every tiny edit.
Keep working tree clean before reporting completion.
Do not commit secrets.
Do not commit local Vercel credentials.
Do not commit Playwright browser binaries.
DEPLOYMENT STANDARDS
167. Preview Deployment
Preview deployment is required after major implementation.
Use the existing linked Vercel project.
Do not deploy production automatically.
Required Report
public preview URL;
unique deployment URL;
deployment ID;
production status;
access restrictions if any.
168. Production Deployment
Production deployment requires explicit owner approval.
Before production:
legal entity confirmed;
legal copy reviewed;
contact email finalized;
lead delivery provider configured;
social links approved;
game metadata reviewed;
final assets approved;
cookie consent aligned with actual providers;
production domain confirmed;
launch checklist completed.
169. Environment Variables
Maintain .env.example.
Possible variables:
NEXT_PUBLIC_SITE_URL=
LEAD_DELIVERY_PROVIDER=
LEAD_DESTINATION_EMAIL=
RESEND_API_KEY=
HUBSPOT_ACCESS_TOKEN=
PIPEDRIVE_API_TOKEN=
Only include variables actually supported by the code.
Do not commit real secrets.
CONTENT MODEL INTEGRITY
170. Single Source of Truth
Canonical content sources:
content/company.ts
content/contact.ts
content/contactOptions.ts
content/games.ts
content/navigation.ts
content/projects.ts
content/services.ts
Rules
Do not duplicate game data in pages.
Do not duplicate navigation in header and footer.
Do not duplicate project status in multiple hardcoded locations.
Generate sitemap routes from content where practical.
Related content uses canonical records.
171. Status Integrity
Approved statuses:
Live
Available
Integration Ready
In Development
Product Concept — In Development
Roadmap
Pending
Do not create new status labels without approval.
172. Claim Integrity
Before rendering any factual claim, confirm:
source;
current validity;
owner approval where needed;
consistency across visible copy and metadata.
Owner Decisions override older brochure claims.
FINAL COMPONENT LIBRARY ACCEPTANCE CRITERIA
173. Architecture Acceptance
The component library is complete when:
Layout uses shared Container, Section, Grid, and Stack.
Typography uses shared Eyebrow, SectionHeader, and Prose.
Actions use shared Button, TextLink, and ButtonGroup.
Navigation uses shared SiteHeader, MobileMenu, SiteFooter, and Breadcrumbs.
Heroes compose from one shared system.
Services use shared service components.
Games use shared game components.
Portfolio uses shared portfolio components.
ELEMENTALS repeated structures are data-driven.
LC App conceptual structures are data-driven.
Diagrams use shared typed components.
Forms use shared fields and validation.
FAQ uses one accessible accordion.
Cookie consent uses one shared state model.
Feedback states are shared.
SEO uses shared metadata and schema helpers.
Canonical content is stored outside page components.
Duplicate components are removed.
Client Components remain limited to interaction.
All public routes pass build and smoke tests.
174. Visual Acceptance
Components follow the Design System.
No page introduces an unapproved visual language.
Cards use consistent radius, borders, and spacing.
Buttons use approved variants.
Mobile layouts are intentional.
No horizontal overflow.
No fake screenshots.
No generic stock imagery.
Product status remains visible.
Unverified metadata is omitted.
Diagrams remain readable on mobile.
Focus states are visible.
Reduced motion is supported.
Footer and header remain consistent.
Conceptual assets are labeled where appropriate.
175. Brand Acceptance
Components do not introduce unsupported claims.
OpenGamer RGS terminology is used.
Numeric disciplines claims are removed.
Fixed timeline claims are absent.
General RTP range claims are absent.
ELEMENTALS status is In Development.
LC App status is Product Concept — In Development.
LC App is not presented as a casino operator.
OpenGamer is not presented as a certification lab.
Live Casino design scope does not imply studio operation or construction.
176. Accessibility Acceptance
All actions are keyboard accessible.
Focus is visible.
Mobile menu manages focus.
Drawers and modals manage focus.
Accordions use correct semantics.
Forms use labels and connected errors.
Status does not rely on color alone.
Images use meaningful alt text.
Reduced motion works.
Touch targets are sufficient.
No essential content is hover-only.
Screen-reader order matches visual order.
177. Performance Acceptance
Server Components are default.
Client Components are isolated.
Local optimized assets are used.
Hero priority images are limited.
Below-the-fold images are lazy-loaded.
No unnecessary remote CDN image dependency exists.
No excessive animation library is added.
No blocking third-party scripts are added.
Layout shift remains controlled.
Lighthouse remains within target range.
178. QA Acceptance
Before reporting completion:
pnpm lint
pnpm build
Must pass.
Also required:
route smoke test;
lead API validation test;
visual QA;
accessibility review;
sitemap review;
robots review;
canonical review;
preview deployment.
Any blocked step must be documented honestly.
TOKEN-EFFICIENCY RULES
179. Minimal Inspection
For each future task:
Identify exact route or component.
Read only relevant canonical section.
Inspect only relevant code files.
Avoid rereading unchanged documents.
Avoid scanning the entire repository unless needed.
180. Minimal Output
Progress reports should use:
Completed
Changed files
Checks
Remaining factual inputs
Deployment
Git
Do not include:
long reasoning;
repeated brief;
full code dumps;
narration of minor actions;
generic explanations.
181. Batch Changes
Batch:
service updates;
game catalogue updates;
portfolio updates;
metadata updates;
QA updates.
Do not run full lint/build after every one-line change.
Run them after coherent implementation batches.
182. Reuse Before Generation
Before generating code:
search exact component names;
inspect existing variants;
reuse typed content;
extend props;
avoid new dependencies;
avoid new documents.
183. Stop Conditions
Do not stop after:
planning;
audit;
partial page creation;
documentation-only changes.
Stop only when:
implementation is complete;
checks pass;
blockers are factual or authentication-based;
preview is deployed or exact blocker is documented.
MAINTENANCE
184. Versioning
Update this document only when component standards change materially.
Version examples:
1.0 — initial canonical library
1.1 — portfolio expansion
1.2 — CMS integration
2.0 — major design-system or architecture change
Do not increment for minor copy changes.
185. Ownership
Component-system changes should be reviewed by:
technical owner;
product owner;
design owner where available.
Factual public-content changes require owner approval.
186. Future Components
Potential future components:
CaseStudyCard
PartnerLogoGrid
InsightCard
CareerCard
DocumentationNavigation
APIReferenceLayout
CMSPreviewBadge
LocalizationSwitcher
Do not build until requested.
187. Final Rule
This component library is the canonical implementation reference for the OpenGamer website.
Future Codex or developer tasks should reference only the relevant sections instead of repeating the entire specification.
The implementation must prioritize:
reuse;
factual accuracy;
maintainability;
accessibility;
performance;
premium visual consistency;
minimal token usage.
