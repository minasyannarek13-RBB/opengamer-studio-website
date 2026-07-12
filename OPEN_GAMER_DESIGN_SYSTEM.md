# OpenGamer Design System

Version: 1.0  
Status: Canonical  
Applies to: OpenGamer corporate website, portfolio pages, service pages, product pages, commercial microsites, and related digital interfaces.

---

## 1. Purpose

This document defines the visual, layout, interaction, responsive, accessibility, and implementation standards for the OpenGamer website.

Its purpose is to ensure that every page and component follows one consistent design language and can be extended without visual fragmentation or technical duplication.

This document is a canonical source for design decisions.

When instructions conflict, use this priority order:

1. Confirmed Owner Decisions
2. `WEBSITE_CONTENT_HANDOFF.md`
3. `OPEN_GAMER_DESIGN_SYSTEM.md`
4. `OPEN_GAMER_BRAND_GUIDELINES.md`
5. `OPEN_GAMER_COMPONENT_LIBRARY.md`
6. Existing approved production components
7. Older prototypes, drafts, and brochure-only visual claims

Do not apply older prototype behavior when it conflicts with this document.

---

## 2. Brand Expression

OpenGamer must be perceived as:

- a premium B2B iGaming development studio;
- a technology company;
- a casino game product company;
- a long-term development partner;
- a team capable of full-cycle delivery;
- a company operating at international enterprise standards.

OpenGamer must not look like:

- a generic outsourcing agency;
- a freelance studio;
- a consumer casino;
- a casino affiliate website;
- a gambling media portal;
- a template-based SaaS website;
- an entertainment-only gaming brand;
- a loud neon casino landing page.

The intended visual balance is:

- 70% technology company;
- 20% game development studio;
- 10% creative production company.

The site should feel:

- premium;
- modern;
- technical;
- controlled;
- international;
- reliable;
- product-led;
- visually confident;
- commercially mature.

---

## 3. Core Design Principles

### 3.1 Clarity Before Decoration

Every page must communicate clearly:

- what the page is about;
- what OpenGamer provides;
- who the product or service is for;
- what the visitor should do next.

Decorative elements must support comprehension.

Do not add visual effects that reduce readability or distract from the main content.

### 3.2 Premium Through Restraint

Premium design must come from:

- typography;
- spacing;
- composition;
- image quality;
- alignment;
- contrast;
- consistency;
- hierarchy;
- thoughtful motion.

Do not attempt to create a premium feeling through:

- excessive green glow;
- excessive gradients;
- gold luxury effects;
- heavy glassmorphism;
- excessive blur;
- unnecessary parallax;
- large amounts of animation;
- decorative casino clichés.

### 3.3 One Visual Language

All pages must use the same:

- color logic;
- spacing system;
- border treatment;
- radius system;
- typography hierarchy;
- button system;
- card system;
- icon style;
- motion system;
- focus behavior;
- navigation behavior.

### 3.4 Product-Led Storytelling

Use product, service, and technology visuals instead of generic decoration.

Preferred visual materials:

- official OpenGamer game artwork;
- approved ELEMENTALS art;
- approved LC App concept assets;
- architecture diagrams;
- product flow diagrams;
- technical UI concepts;
- conceptual device frames;
- abstract SVG illustrations;
- documentation mockups;
- process visualizations.

### 3.5 Content Must Remain Verifiable

The design must not create the impression that an unconfirmed product, feature, metric, certification, partner, integration, or project status is already final.

Avoid visual devices that suggest:

- completed launch;
- certification;
- regulatory approval;
- live operator integration;
- finished app UI;
- real player metrics;
- confirmed partnerships;
- final game mathematics.

When a project is still in development, its status must remain visible.

---

## 4. Design Tokens

Design tokens must be stored in one canonical location.

Recommended locations:

- `styles/globals.css`
- `app/globals.css`
- Tailwind theme configuration
- a dedicated token file if the project structure already supports it

Do not duplicate color, spacing, radius, or shadow values across components.

---

## 5. Color System

The current website palette remains the base system.

Final brand hex values may be adjusted only through an approved brand update.

### 5.1 Core Colors

```css
:root {
  --color-background-primary: #05100b;
  --color-background-secondary: #0a1711;
  --color-background-tertiary: #0f1e17;

  --color-surface-primary: rgba(255, 255, 255, 0.04);
  --color-surface-secondary: rgba(255, 255, 255, 0.07);
  --color-surface-hover: rgba(255, 255, 255, 0.10);
  --color-surface-strong: rgba(255, 255, 255, 0.13);

  --color-text-primary: #ffffff;
  --color-text-secondary: #b8c3bd;
  --color-text-muted: #7f8c85;
  --color-text-disabled: #59635e;

  --color-accent-primary: #2ee6a6;
  --color-accent-hover: #45efb5;
  --color-accent-active: #20c98e;
  --color-accent-soft: rgba(46, 230, 166, 0.14);
  --color-accent-border: rgba(46, 230, 166, 0.35);

  --color-border-primary: rgba(255, 255, 255, 0.10);
  --color-border-strong: rgba(255, 255, 255, 0.18);
  --color-border-muted: rgba(255, 255, 255, 0.06);

  --color-error: #ff6b6b;
  --color-error-soft: rgba(255, 107, 107, 0.12);

  --color-warning: #f6c85f;
  --color-warning-soft: rgba(246, 200, 95, 0.12);

  --color-success: #2ee6a6;
  --color-success-soft: rgba(46, 230, 166, 0.12);

  --color-info: #66b3ff;
  --color-info-soft: rgba(102, 179, 255, 0.12);
}5.2 Background Usage
Use:
background-primary for the main page background;
background-secondary for alternating sections;
background-tertiary for stronger section separation;
surface colors for cards, dialogs, forms, navigation, and layered panels.
Do not use many competing background tones on the same page.
5.3 Accent Usage
Use the main green accent for:
primary buttons;
active navigation;
selected filters;
focus states;
technical diagram highlights;
small labels;
selected status markers;
key visual separators.
Do not use the main accent for:
long paragraphs;
every heading;
every icon;
every border;
large background areas;
full-page gradients.
5.4 Status Colors
Use status colors carefully.
Examples:
Live: green
In Development: amber or soft green
Product Concept: neutral blue or muted cyan
Pending: grey
Error: red
Do not rely on color alone. Always include readable text.
6. Product-Specific Accent Rules
6.1 ELEMENTALS
ELEMENTALS may use controlled elemental colors.
Recommended semantic palette:
--element-fire: #d8573c;
--element-water: #3d8fd1;
--element-earth: #7b8f55;
--element-air: #a8c9d6;
These colors must remain secondary to the OpenGamer master brand.
Use them for:
realm labels;
subtle gradients;
diagram markers;
section accents;
realm-specific borders;
icon accents.
Do not transform the entire site into a four-color fantasy theme.
ELEMENTALS must remain visually connected to OpenGamer.
6.2 LC App
LC App should use:
graphite;
white;
controlled green;
subtle cyan;
subtle blue;
restrained interface gradients.
LC App must not look like:
a consumer casino;
a social-media clone;
a finished public app;
a colorful entertainment app.
7. Typography
Use the current approved project font unless a new font is explicitly approved.
Recommended font roles:
--font-display: var(--font-primary);
--font-body: var(--font-primary);
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
Do not introduce decorative fonts for individual pages.
7.1 Typography Scale
Desktop:
Display XL: 72–88px
Display L: 56–72px
H1: 48–64px
H2: 36–48px
H3: 28–36px
H4: 22–28px
Body Large: 18–20px
Body Standard: 16–18px
Body Small: 14–16px
Caption: 12–14px
Eyebrow: 11–13px
Tablet:
Display XL: 56–64px
Display L: 48–56px
H1: 42–52px
H2: 34–42px
H3: 26–32px
H4: 21–26px
Mobile:
Display XL: 44–52px
Display L: 38–46px
H1: 36–44px
H2: 30–36px
H3: 24–30px
H4: 20–24px
Body Large: 18px
Body Standard: 16px
Body Small: 14px
Caption: 12–13px
Eyebrow: 11–12px
7.2 Typography Rules
Hero headings should normally fit within two or three lines.
Avoid one-word wrapping caused by excessive font size.
Use short paragraphs.
Main paragraph line length should usually remain between 45 and 70 characters.
Legal and long-form pages should use a narrower reading column.
Use uppercase only for:short eyebrows;
short labels;
badges;
compact navigation labels.

Do not use uppercase for long paragraphs.
Avoid excessive letter spacing.
Avoid decorative text shadows.
Use weight and spacing before using color to create hierarchy.
7.3 Heading Hierarchy
Every page must have:
one H1;
logical H2 sections;
H3 for subsections;
no skipped heading levels unless technically justified.
Do not use visual styling to imitate heading hierarchy with non-semantic elements.
8. Spacing System
Use an 8-point spacing system.
4px
8px
12px
16px
24px
32px
40px
48px
64px
80px
96px
120px
160px
Recommended token naming:
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-30: 120px;
--space-40: 160px;
8.1 Section Spacing
Desktop:
Standard section padding: 120px top and bottom
Compact section padding: 80px top and bottom
Hero top padding: 140–180px
Hero bottom padding: 100–140px
Tablet:
Standard section padding: 88px
Compact section padding: 64px
Hero top padding: 120px
Hero bottom padding: 88px
Mobile:
Standard section padding: 64px
Compact section padding: 48px
Hero top padding: 96px
Hero bottom padding: 64px
8.2 Internal Spacing
Recommended:
Eyebrow to heading: 12–16px
Heading to description: 20–24px
Description to CTA: 28–32px
Card title to copy: 12–16px
Card copy to capability list: 16–20px
Card content to CTA: 20–24px
Grid gaps desktop: 24–32px
Grid gaps mobile: 16–20px
8.3 Vertical Rhythm
Avoid:
sections that look compressed;
sections with excessive empty space;
back-to-back dense card grids;
inconsistent gaps between similar elements.
Use alternating section density to create rhythm.
9. Layout System
9.1 Container Widths
Recommended:
Full layout maximum: 1440px
Primary content maximum: 1280px
Reading content maximum: 1100px
Long-form text maximum: 760px
Legal text maximum: 760px
9.2 Grid
Desktop:
12-column grid;
24–32px gutters.
Tablet:
8-column grid;
20–24px gutters.
Mobile:
4-column grid;
16–20px gutters.
9.3 Standard Page Rhythm
Recommended page sequence:
Header
Hero
Primary proof or capability section
Main content
Supporting content
Related product or service
Final CTA
Footer
Avoid:
too many card grids in sequence;
repeating the same visual layout for every section;
placing all CTAs only at the bottom;
dense walls of text.
9.4 Layout Alternation
Use controlled variation:
text left / visual right;
visual left / text right;
full-width editorial section;
card grid;
diagram section;
horizontal process;
compact CTA block.
Do not use random layout changes without purpose.
10. Breakpoints
Use the existing project breakpoints if already stable.
Recommended reference breakpoints:
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1440px
wide: 1920px
Mandatory test widths:
320px
375px
390px
414px
768px
1024px
1280px
1440px
1920px
11. Responsive Rules
11.1 General
Mobile layouts must be designed, not merely collapsed.
Cards should stack logically.
Typography must remain readable.
Hero art must not cover text.
Buttons must remain easy to tap.
No horizontal overflow.
No clipped game titles.
No fixed-width content that breaks on small screens.
11.2 Grid Behavior
4-column desktop grid → 2-column tablet → 1-column mobile
3-column desktop grid → 2-column tablet → 1-column mobile
2-column desktop layout → 1-column mobile
11.3 Hero Behavior
Desktop:
text and visual may appear side by side.
Mobile:
text appears first;
visual appears below;
CTA buttons stack when required;
decorative visuals may be reduced or hidden.
11.4 Diagram Behavior
Desktop:
horizontal or layered architecture layout.
Mobile:
vertical flow;
simplified labels;
reduced decorative lines;
no forced horizontal scrolling unless absolutely necessary.
11.5 Navigation Behavior
Desktop:
inline navigation;
visible CTA.
Mobile:
drawer or full-screen menu;
clear close button;
body scroll locked;
focus managed correctly;
Contact styled as a CTA.
12. Border Radius
Use a limited radius scale.
--radius-small: 8px;
--radius-medium: 14px;
--radius-large: 20px;
--radius-xl: 28px;
--radius-pill: 999px;
Usage:
inputs: small or medium;
buttons: small or pill;
cards: medium or large;
hero media: large or XL;
badges: pill;
modals: large or XL.
Do not mix many radius styles on the same page.
13. Borders
Default border:
border: 1px solid var(--color-border-primary);
Hover border:
border-color: var(--color-border-strong);
Accent border:
border-color: var(--color-accent-border);
Use accent borders only for:
selected states;
active filters;
featured product cards;
important product status;
highlighted technical nodes.
Avoid placing borders around every piece of content.
14. Shadows and Depth
Use subtle shadows.
Recommended:
box-shadow:
  0 20px 60px rgba(0, 0, 0, 0.28);
Optional elevated card:
box-shadow:
  0 24px 80px rgba(0, 0, 0, 0.34);
Avoid:
bright green glow;
heavy colored shadows;
shadows on every card;
excessive layered blur;
glow-based readability.
Use background contrast and borders before shadows.
15. Gradients
Allowed:
subtle background gradients;
technical diagram gradients;
controlled hero lighting;
subdued product accents.
Avoid:
bright rainbow gradients;
gradients behind long text;
gradients on every button;
aggressive green glow;
heavy blur that reduces performance.
Recommended background example:
background:
  radial-gradient(
    circle at 20% 10%,
    rgba(46, 230, 166, 0.10),
    transparent 38%
  ),
  var(--color-background-primary);
16. Buttons
16.1 Primary Button
Use for the main action.
Examples:
Discuss a Project
Explore Our Games
View Portfolio
Discuss ELEMENTALS
Discuss an LC App Partnership
Discuss Live Casino Development
Style:
accent background;
dark text;
strong contrast;
minimum height 44px;
clear hover and active state;
visible focus state;
no excessive glow.
16.2 Secondary Button
Use for supporting actions.
Style:
transparent or surface background;
light border;
white text;
subtle hover fill.
16.3 Ghost Button
Use for:
card links;
compact navigation;
secondary actions inside dense layouts.
16.4 Text Link
Use for low-priority actions.
Must include a visible hover and focus state.
16.5 Button Rules
Maximum two primary actions in a hero.
Use action-oriented labels.
Avoid vague labels:Learn More
Click Here
Submit
Read More

Prefer:View Portfolio
Explore Technology
Discuss Integration
Request Project Information
Explore Live Casino Development

Buttons must not wrap awkwardly on mobile.
Icon direction must match action direction.
Do not use multiple button styles for the same action type.
17. Links
Inline links must:
be visually distinguishable;
have a hover state;
have a visible focus state;
not rely only on color where context is unclear.
External links should indicate external behavior when useful.
Do not open every internal link in a new tab.
18. Cards
18.1 Standard Card
Used for:
services;
capabilities;
partnership models;
values;
process summaries.
Structure:
Optional eyebrow or icon
Title
Short description
Optional capability list
Optional CTA
18.2 Service Card
Must support:
service group;
service name;
short description;
optional capabilities;
related service link;
CTA.
Do not put the entire service description inside the card.
18.3 Game Card
Structure:
Artwork
Game title
Optional verified metadata
Demo action
Details action
Rules:
consistent artwork ratio;
no empty metadata rows;
no unverified RTP;
no unverified volatility;
no unverified format;
no unverified release state;
game title must remain readable;
artwork crop must preserve main character and title area.
18.4 Portfolio Project Card
Used for:
ELEMENTALS;
LC App;
future proprietary projects.
Structure:
Category
Title
Status
Short description
Visual
CTA
Portfolio cards should be:
more editorial;
larger;
more product-led;
visually distinct from service cards.
18.5 Feature Card
Use for important capability blocks.
Must have:
stronger hierarchy;
clear label;
concise copy;
optional diagram or icon.
18.6 Status Card
Used for:
In Development;
Product Concept;
Pending;
Live.
Always show readable status text.
19. Card Interaction
Allowed:
subtle elevation;
border change;
background change;
image scale up to approximately 1.03;
CTA reveal;
arrow movement.
Avoid:
card tilting;
extreme 3D effects;
large hover displacement;
flashing borders;
repeated infinite animation.
20. Hero System
Every hero should contain:
eyebrow;
H1;
supporting copy;
one or two CTAs;
optional visual;
optional status badge.
20.1 Corporate Hero
Used on:
Home
Services
Technology
About
Contact
20.2 Product Hero
Used on:
Game detail pages
ELEMENTALS
LC App
Product hero must emphasize:
product identity;
category;
status;
visual;
next action.
20.3 Service Detail Hero
Used on:
Live Casino Development;
future service detail pages.
Must communicate:
service category;
value;
commercial relevance;
CTA.
20.4 Hero Rules
H1 should normally remain within three lines.
Keep body copy concise.
Do not use fake metrics.
Do not place critical text over busy art without an overlay.
Do not use autoplay audio.
Do not use autoplay video unless separately approved.
Hero visual must remain secondary to the main message.
Mobile layout must remain text-first.
21. Section Header
Every major section may use:
eyebrow;
heading;
short description;
optional CTA.
Recommended structure:
Eyebrow
Heading
Description
Optional action
Do not add long paragraphs to section headers.
22. Media and Imagery
Preferred:
official game artwork;
approved ELEMENTALS visuals;
approved LC App visuals;
abstract diagrams;
SVG product concepts;
architecture diagrams;
documentation previews;
device frames;
interface concepts.
Do not use:
generic stock-office images;
casino chips;
roulette tables;
random dealers;
slot-machine stock photography;
fake gameplay screenshots;
generic social-media stock images;
generic futuristic AI imagery.
22.1 Image Formats
Prefer:
AVIF for large raster visuals;
WebP for broad compatibility;
SVG for diagrams;
PNG only where transparency or fidelity requires it.
22.2 Image Handling
All production UI assets should be local.
Use:
Next.js Image;
defined dimensions;
responsive sizes;
lazy loading below the fold;
priority only for critical hero assets;
descriptive alt text;
no layout shift.
22.3 Image Cropping
Use consistent object-position.
Do not crop:
game logos;
character faces;
primary symbols;
project titles;
important interface areas.
23. Iconography
Use one icon family consistently.
Preferred style:
outline;
minimal;
medium stroke;
geometric;
no cartoon treatment.
Do not mix:
filled icons;
outline icons;
emoji;
illustrated icons;
3D icons.
Icons should support meaning.
Do not place an icon on every sentence.
24. Diagrams
Use diagrams for:
RGS architecture;
integration flow;
user journeys;
Live Casino product flow;
LC App integration;
development process;
ELEMENTALS realm structure;
studio design concepts;
broadcast flow.
Diagram rules:
keep labels concise;
use accessible contrast;
use semantic grouping;
simplify on mobile;
avoid excessive decorative arrows;
do not imply confirmed technical architecture when conceptual.
Conceptual diagrams must be clearly described as conceptual where relevant.
25. Motion System
Motion must remain subtle and functional.
25.1 Allowed Motion
fade-in;
small vertical reveal;
card hover elevation;
button hover;
navigation transition;
accordion expansion;
filter transition;
subtle diagram animation;
restrained background movement.
25.2 Timing
Fast interaction: 120–180ms
Standard transition: 200–300ms
Section reveal: 400–600ms
Recommended easing:
cubic-bezier(0.2, 0.8, 0.2, 1)
25.3 Motion Rules
Respect prefers-reduced-motion.
Do not delay content visibility.
Do not animate every element.
Do not use heavy parallax.
Do not use infinite animation for attention.
Do not animate large headings continuously.
Avoid motion that increases layout shift.
Mobile motion should be lighter than desktop motion.
26. Forms
Every input must have:
visible label;
clear required or optional state;
focus state;
error state;
disabled state where needed;
help text where necessary;
accessible description where necessary.
Recommended input height:
44px desktop minimum
48px mobile preferred
26.1 Input Styling
Use:
dark surface;
clear border;
white text;
muted placeholder;
accent focus ring.
26.2 Form Layout
Group related fields.
Keep optional qualification fields visually secondary.
Use one column on mobile.
Use two columns on desktop only where it improves scanning.
Avoid overly long form pages without grouping.
Keep consent clearly visible.
26.3 Submission States
Required states:
idle;
loading;
success;
validation error;
server error;
spam-safe success;
duplicate submission prevention.
26.4 Error Behavior
Errors must appear near the related field.
Error summaries may be used for long forms.
Do not use color alone.
Error messages must be specific and actionable.
27. Navigation
27.1 Desktop Navigation
Final order:
Home
Services
Games
Portfolio
Technology
About
Contact
Contact may be styled as the main CTA.
27.2 Mobile Navigation
Requirements:
single-column drawer;
same item order;
Contact styled as a CTA;
clear close button;
body scroll locked;
focus managed correctly;
ESC key closes the menu where applicable;
no horizontal overflow.
27.3 Sticky Header
The header may transition from transparent to solid after scroll.
It must not:
create layout shift;
obscure content;
become visually heavy;
reduce contrast.
27.4 Active States
Use:
accent color;
underline;
subtle background;
or a combination.
Do not rely only on text weight.
28. Footer
Recommended structure:
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
Only confirmed links may be published.
Footer rules:
balanced columns;
readable mobile stacking;
no excessive link density;
clear copyright line;
visible business email;
no fake office locations.
29. Tables
Use tables only when data comparison is necessary.
For mobile:
convert tables to stacked cards where practical;
otherwise allow controlled horizontal scrolling;
preserve labels;
avoid tiny text.
Do not use tables as a general layout tool.
30. Accordions
Use accordions for:
FAQ;
secondary technical details;
long capability lists;
mobile content compression.
Accordion requirements:
semantic button;
keyboard accessible;
clear open state;
smooth but restrained animation;
correct ARIA attributes;
reduced-motion support.
31. Badges and Status Labels
Badge variants:
Live
In Development
Product Concept
Pending
Featured
Service Category
Project Category
Rules:
use short labels;
use pill shape;
use muted background;
include text;
avoid multiple badges competing on one card.
32. Filters
Game filters must:
use confirmed categories only;
be keyboard accessible;
have visible active state;
not create empty unsupported categories;
work on mobile;
preserve focus.
Do not create filters for unverified metadata.
33. Loading and Empty States
Loading states must:
preserve layout;
avoid large visual jumps;
use restrained skeletons;
not mimic real content indefinitely.
Empty states must:
explain the situation;
offer a next action;
avoid generic error language.
34. Error Pages
Required:
404 page;
generic error boundary;
unavailable content state.
Error pages should:
preserve OpenGamer branding;
provide navigation;
offer a route back to Home or Contact;
avoid technical stack traces.
35. Accessibility
Minimum target:
WCAG AA contrast;
keyboard navigation;
visible focus states;
semantic landmarks;
semantic headings;
labelled forms;
accessible menus;
accessible accordions;
descriptive alt text;
reduced-motion support;
no information conveyed by color alone;
minimum touch target around 44×44px;
accessible error messages;
meaningful link text.
Do not use:
click-only interactions;
hover-only content;
placeholder-only labels;
hidden focus outlines.
36. Performance Rules
Use:
Server Components by default;
Client Components only when interaction requires them;
local optimized assets;
Next.js Image;
responsive image sizes;
lazy loading;
minimal third-party scripts;
controlled hydration;
code splitting;
deferred analytics;
consent-aware analytics.
Avoid:
large animation libraries without justification;
oversized hero videos;
blocking scripts;
duplicate fonts;
unused CSS;
client-side rendering for static content.
Targets:
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
Do not damage usability merely to increase a numeric score.
37. Page-Specific Visual Direction
37.1 Home
The homepage must feel like one story.
Recommended sequence:
Hero
Core Capabilities
Featured Games
Proprietary Projects
Live Casino Development
Technology
Development Process
Partnership Models
Why OpenGamer
Final CTA
Do not overload the homepage with all service details.
37.2 Services
Use:
grouped capability sections;
anchor navigation;
alternating layouts;
clear service hierarchy;
focused CTAs;
diagrams where helpful.
Do not create an endless wall of identical cards.
37.3 Live Casino Development
Use:
product strategy diagrams;
game design flows;
studio concept plans;
broadcast diagrams;
UX wireframes;
documentation mockups;
ELEMENTALS as a featured project.
Do not use generic dealer photography.
37.4 Games
Use:
artwork-led layouts;
consistent card ratios;
verified metadata only;
clear demo links;
clear detail links;
restrained filters.
37.5 Portfolio
Use:
large project cards;
editorial layouts;
strong status labels;
product-led storytelling;
clear separation between games, show games, and applications.
37.6 ELEMENTALS
Visual direction:
ancient ritual;
cinematic fantasy;
premium;
mysterious;
temple-meets-observatory;
serious;
not carnival;
not arcade.
Allowed visuals:
approved character art;
approved wheel art;
abstract realm diagrams;
elemental SVG visuals;
premium environment treatments.
Not allowed:
fake gameplay;
generic fantasy stock;
amusement-park styling;
bright cartoon color treatment.
37.7 LC App
Visual direction:
modern;
mobile-first;
B2B;
product-led;
social layer;
clear system diagrams;
conceptual device frames.
Concept visuals must not be presented as finished app screenshots.
37.8 Technology
Use:
architecture diagrams;
integration flows;
layered technical sections;
concise technical copy;
commercial clarity.
Do not turn the page into API documentation.
37.9 About
Use:
company positioning;
leadership roles;
principles;
delivery model;
restrained visual design.
Do not invent biographies.
37.10 Contact
Use:
clear form hierarchy;
visible business context;
concise supporting information;
strong submission feedback.
37.11 Legal Pages
Use:
narrow reading width;
clear headings;
adequate line height;
visible update date;
no decorative clutter.
38. Conceptual Asset Rules
When final assets are unavailable:
Allowed:
abstract SVG;
CSS diagrams;
device-frame concepts;
flow diagrams;
schematic interface blocks;
approved extracted project art.
Not allowed:
fake production screenshots;
fake gameplay;
fake live studio images;
generic stock photos;
misleading interface mockups presented as final.
Conceptual visuals should be described as conceptual where needed.
39. Content Density Rules
Recommended maximums:
Hero paragraph: 25–45 words
Section introduction: 30–70 words
Card description: 15–40 words
Service short description: 20–35 words
Service full description: 60–110 words
CTA text: 5–15 words
FAQ answer: 40–120 words
Avoid long text blocks without visual separation.
40. Design Consistency Rules
Never:
create a new button style for one page;
create a new card radius for one section;
introduce a new color without a token;
hardcode spacing repeatedly;
mix icon families;
use inconsistent section padding;
duplicate similar components;
create page-specific hacks when a reusable component can solve the problem.
Always:
reuse existing tokens;
reuse approved components;
extend variants before creating new components;
preserve responsive behavior;
preserve accessibility behavior.
41. CMS and Content Separation
All structured content should come from typed content files.
Recommended:
/content
  company.ts
  contact.ts
  contactOptions.ts
  games.ts
  navigation.ts
  projects.ts
  services.ts
Do not hardcode large content objects inside page components.
Pages should consume typed data and reusable components.
42. Component Reuse Rules
Before creating a component:
Search for an existing component.
Check whether a variant can solve the requirement.
Extend the existing component if the visual role is the same.
Create a new component only when the semantic or interaction role differs.
Do not create:
multiple card components with only minor styling differences;
duplicate section wrappers;
duplicate CTA sections;
duplicate hero variants with repeated markup;
page-specific buttons.
43. Design QA Checklist
Before each preview deployment, verify:
Global
consistent typography;
consistent section spacing;
consistent card radius;
consistent button variants;
consistent borders;
no duplicated visual patterns;
no remote image dependency;
no broken links;
no horizontal overflow;
no unverified claims.
Desktop
1280px;
1440px;
1920px.
Tablet
768px;
1024px.
Mobile
320px;
375px;
390px;
414px.
Components
header;
mobile menu;
footer;
buttons;
cards;
filters;
accordions;
forms;
diagrams;
status badges;
CTA sections.
Content
headings remain readable;
no empty metadata;
no fake claims;
no unsupported certification wording;
no repeated copy;
all CTAs work.
44. Canonical Owner Decisions
The following rules are final unless explicitly changed by the owner.
44.1 Disciplines Claim
Remove all numeric “16 Disciplines” claims.
Use:
Full-Cycle Capabilities. One Studio.
Do not replace it with “15 Disciplines” unless explicitly requested.
44.2 Game Metadata
Publish game RTP, volatility, format, max win, mechanics, or status only after verifying exact values against approved sources.
Omit unverified fields.
44.3 Game Variants
Use one main catalogue entry per game theme.
Fruit Elixir and Passion Paradise line variants may be listed inside the game detail page only if verified.
44.4 Dragon Rush
Official-site Dragon Rush artwork is approved for local migration.
44.5 ELEMENTALS
Use approved artwork plus abstract SVG or CSS visuals only.
Do not create fake gameplay screenshots.
Status:
In Development
Partnership positioning:
Studio, provider and co-development partnerships.
44.6 LC App
Use conceptual diagrams and device frames only.
Do not present concepts as finished product screenshots.
Status:
Product Concept — In Development
Do not position LC App as:
a standalone casino;
a licensed operator;
a provider competitor;
a finished consumer app.
44.7 Claims That Must Not Be Published
Do not publish:
48-hour integration;
5–7-day certification cycle;
24/7 support;
general 94–97% RTP claims;
guaranteed certification;
guaranteed performance;
guaranteed commercial results.
44.8 RGS Language
Use:
OpenGamer RGS
Do not use:
Proprietary RGS
unless legal ownership is explicitly confirmed.
44.9 Unsupported Language
Do not use:
certified integration;
SLA-based support;
GLI-ready;
guaranteed certification;
industry-leading;
world-leading;
best-in-class;
revolutionary;
number one.
45. Future Expansion Rules
Future routes may include:
/careers
/partners
/case-studies
/insights
/news
/docs
/api
/investors
Do not build or expose them until requested.
The current architecture should remain extensible without prebuilding unnecessary pages.
46. Final Rule
The design system exists to reduce ambiguity, technical duplication, visual drift, and unnecessary AI token usage.
All future implementation tasks should reference this file instead of repeating visual rules in every prompt.
Codex, Claude, or any developer should inspect only the relevant sections of this document for the current task and should not rewrite or summarize the entire system before implementation.
```
