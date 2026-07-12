# OpenGamer Website — Visual & Content Production Pack

**Source note:** `OPEN_GAMER_DESIGN_SYSTEM.md`, `OPEN_GAMER_BRAND_GUIDELINES.md`, `OPEN_GAMER_COMPONENT_LIBRARY.md` and `WEBSITE_CONTENT_HANDOFF.md` now exist in the connected project folder and are canonical. Visual language, tokens, component names, claim restrictions and implementation patterns must be verified against those files before implementation.

Owner Decisions applied: restricted ownership, certification, support-level, fixed-timeline, RTP-band and numeric discipline-count wording removed. Approved line **"Full-Cycle Capabilities. One Studio."** used in place of any discipline-count claim.

Capability bullet lists already defined in CH §3–§6 are not repeated here — referenced by section.

---

## 1. Homepage — Proprietary Projects Section

**Visual spec**

| Field | Spec |
|---|---|
| Section order | 4th of 10 — after Featured Games, before Live Casino Development (per CH §9) |
| Desktop | Section header (eyebrow + H2 + 1-line intro) full-width, centered or left-aligned to match adjacent sections; below it, 2-card row, equal width, ~48px gap |
| Tablet | Same 2-card row, gap reduced (~24px); wraps to stacked only if card min-width is breached |
| Mobile | Single column stack, full-width cards, image on top of each card |
| Content priority | H2 → card status pill → card title → card description → CTA |
| Existing component | Homepage capability-card shell (icon-badge + title + description, used in "Core Capabilities") as structural base |
| New component | `ProjectCard` — adds status pill + image slot, neither exists on current capability card |
| Background | Match surrounding section tone — no new gradient/background system |
| Artwork placement | Square/4:3 thumbnail at top of each card |
| CTA placement | Bottom-left of each card, text-link style; no separate section-level CTA (avoids a 3rd competing CTA) |
| Status placement | Pill badge at top of card, before title |
| Responsive behavior | 2-col → 2-col narrower → 1-col stack; images keep fixed aspect ratio at all breakpoints |
| Accessibility | Status pill carries text, not color alone; images have descriptive alt (below); card titles are H3 under section H2; visible focus state on CTA links |

**Exact copy**

- Eyebrow: `Proprietary Projects`
- Heading: `Original Concepts in Development`
- Paragraph: `Beyond client production, OpenGamer is developing its own live casino format and product concepts.`
- Card 1 — Title `ELEMENTALS` · Tagline `Premium Live Casino Show Game Concept` · Description `A four-realm show game built around the Great Wheel and a dealer-host presentation.` · Status `In Development` · CTA `View ELEMENTALS` · Image caption `ELEMENTALS — premium Live Casino show game concept`
- Card 2 — Title `LC App` · Tagline `B2B Social Engagement Layer for Live Casino` · Description `A mobile-first concept connecting players, dealers and existing live tables.` · Status `Product Concept — In Development` · CTA `View LC App` · Image caption `LC App — B2B social layer concept for Live Casino`
- Link destinations: `/portfolio/elementals`, `/portfolio/lc-app`

---

## 2. Live Casino Development — `/services/live-casino-development`

Page-wide: dark panel background matching the rest of the site (no new background system); all diagrams are SVG/CSS, not photography; contrast ≥4.5:1; heading order H1 (hero) → H2 (section) → H3 (card/diagram titles); FAQ accordion is keyboard-operable with `aria-expanded`.

**Composition table**

| # | Section | Desktop | Mobile | Component | Visual |
|---|---|---|---|---|---|
| 1 | Hero | 2-col: copy left, art right | Stacked, art below copy | Existing service-detail hero | Character/show hero render |
| 2 | Overview | Centered intro + 8-item icon grid | 1-col list | Existing icon-grid | Icon grid (see CH §4.2) |
| 3 | Product Strategy | 2-col split: copy / capability list | Stacked | Existing two-column split | — |
| 4 | Game Design | Capability card grid | 1-col list | Existing capability grid | Mechanic diagram (SVG) |
| 5 | Mathematics | Capability grid + callout panel | Stacked | Existing "Design Principle" callout | RTP/volatility chart (abstract) |
| 6 | Live UX | Capability grid | 1-col list | Existing capability grid | UI wireframe (line-art) |
| 7 | Show-Game Development | Feature panel + ELEMENTALS teaser | Stacked | Existing "In Development" callout | ELEMENTALS teaser card |
| 8 | Studio Product Design | Capability grid + note callout | Stacked | Existing capability grid + callout | Studio floor-plan diagram (SVG) |
| 9 | Broadcast Concepts | Capability grid | 1-col list | Existing capability grid | Broadcast composition mockup (wireframe) |
| 10 | Presenter Experience | Capability grid | 1-col list | Existing capability grid | Presenter-guide document mockup |
| 11 | Social Engagement Layer | Capability grid | 1-col list | Existing capability grid | Social-layer concept diagram |
| 12 | Technical Architecture | Capability grid + numbered architecture list | Stacked | Existing "System Architecture" numbered-list (from /technology) | Architecture diagram (reuse /technology pattern) |
| 13 | Production Documentation | 12-item list as document-stack visual | Stacked | New `DocumentStackCard` | Stacked document-card mockup |
| 14 | Featured Projects | Single ELEMENTALS card, image left/copy right | Stacked | Existing project-card (see §1) | Guardian render |
| 15 | Engagement Models | 6-card grid (reuse homepage Partnership Models) | 2-col → 1-col | Existing partnership-model cards | — |
| 16 | FAQ | Accordion, full width | Same | New `FAQAccordion` | — |
| 17 | Final CTA | Existing site-wide CTA band | Stacked text + button | Existing CTA band | — |

**Exact copy (headline / paragraph / status / CTA / caption only — capability bullets are in CH §4)**

1. Hero — `Live Casino Development` · "Original live casino product design — from studio-based table games to next-generation show formats built around original bonus mechanics and strong visual identity, not template clones." · CTA `Discuss a Live Casino Concept`
2. Overview — Kicker: **"Full-Cycle Capabilities. One Studio."** · Heading `Full-Cycle Live Casino Design` · "OpenGamer designs live casino products end-to-end — concept, mathematics, UX, show format and studio presentation — delivered as documentation a partner's studio or provider team can build from."
3. Product Strategy — `Positioning Before Production` · "Every concept starts with market and commercial fit, not mechanics." · CTA `Discuss Product Strategy`
4. Game Design — `Original Table & Show Concepts` · "Mechanics designed for differentiation, not imitation."
5. Mathematics — `Mathematical Models for Live Formats` · "Rules, paytables, probability structures and risk models are designed and prepared for simulation and validation as the concept progresses."
6. Live UX — `Interfaces Built for Live Play` · "Betting flows and result presentation designed for speed, clarity and multi-device play."
7. Show-Game Development — `Next-Generation Show Games` · "Proprietary show formats — including ELEMENTALS — built around original bonus mechanics, not market-standard clones." · CTA `See ELEMENTALS`
8. Studio Product Design — `Studio Concepts for Live Formats` · "Design guidance for how a format is presented on a studio floor — not construction or operation of a studio."
9. Broadcast Concepts — `Designed for the Stream` · "UX and visual concepts built with latency and multi-platform delivery in mind."
10. Presenter Experience — `Designing the Host Experience` · "Scripts, prompts and workflow frameworks that make presenters part of the product."
11. Social Engagement Layer — `Community Built Into the Format` · "Concepts for player interaction, discovery and retention layered onto live formats."
12. Technical Architecture — `Architecture for Live Products` · "Consulting on the technical backbone a live product needs before build." · CTA `Discuss Technical Scope`
13. Production Documentation — `Documentation That Gets Built` · "Every concept is delivered as structured documentation a studio or dev team can execute against."
14. Featured Projects — `ELEMENTALS` · "Premium four-realm show game concept currently in development." · CTA `View ELEMENTALS` · Caption `ELEMENTALS — in development`
15. Engagement Models — `Scoped to the Outcome` · "Custom Development, Dedicated Team, Co-Development and Technology Partnership."
16. FAQ — Q: "Does OpenGamer operate a live studio?" A: "No — OpenGamer designs live casino products and documentation; studio construction or operation is a partner or third-party function unless otherwise agreed." Q: "Is ELEMENTALS available now?" A: "It is in development — see Product Status on its page."
17. Final CTA — `Design Your Next Live Casino Format` · "Share the target market, format direction and studio context — OpenGamer will propose the right engagement model." · CTA `Discuss a Live Casino Concept`

**Live Casino Development visual pack (diagrams only — no stock casino/dealer photography)**

| Section | Visual type | Composition notes |
|---|---|---|
| Product Strategy | Abstract doc/strategy-brief mockup | Simple layered "brief" card with title bar + text lines, no real content shown |
| Game Design | Mechanic diagram | Abstract wheel/card/table icon set, line-art, no finished art |
| Mathematics | RTP/volatility chart | Abstract bar/curve chart, no real numbers labeled |
| Live UX | UI wireframe | Greyscale/line wireframe of a betting interface, no branding applied |
| Show-Game Development | Teaser card | Reuses ELEMENTALS Guardian render at reduced size, "In Development" tag |
| Studio Product Design | Studio floor-plan diagram | Top-down abstract floor plan: table, camera positions, lighting rig icons |
| Broadcast Concepts | Composition mockup | Wireframe broadcast frame with placeholder overlay zones labeled (result graphic, presenter prompt) |
| Presenter Experience | Document mockup | "Presenter Guide" cover mockup, no real script content |
| Social Engagement Layer | Concept diagram | Node diagram: player ↔ dealer ↔ discovery feed, abstract icons only |
| Technical Architecture | Architecture diagram | Reuse existing /technology numbered-layer diagram pattern, relabeled for live casino context |
| Production Documentation | Document-stack visual | 3–4 overlapping document-card mockups labeled Game Bible / Show Bible / GDD / PRD, covers only, no page content |
| Featured ELEMENTALS | Character render | Guardian render, existing asset |

**SEO:** unchanged from CH §12 (Title "Live Casino Development \| OpenGamer Studio").

---

## 3. Portfolio — `/portfolio`

**Visual spec**

| Field | Spec |
|---|---|
| Desktop | Hero (heading + intro, centered/left), then 3 category blocks stacked vertically, each with a short intro line + card row |
| Tablet | Same structure, card rows may wrap to 2-up |
| Mobile | Full stack, one card per row |
| Existing component | Category section = existing "grouped services" pattern (from /services page groups); cards = `ProjectCard` (§1) for Casino Games / ELEMENTALS / LC App |
| New component | None required — reuse `ProjectCard` and existing games-grid card |
| Background | Standard page background, no new treatment |
| Artwork | Games category → existing 7 game-card thumbnails; ELEMENTALS category → Guardian render thumbnail; Platforms category → LC App device-mockup thumbnail |
| CTA | One CTA per category card ("Explore Games" / "View ELEMENTALS" / "View LC App"); single page-level CTA at bottom ("Discuss a Project") |
| Status | ELEMENTALS: `In Development`; LC App: `Product Concept — In Development`; Games: no status pill (live titles) |
| Accessibility | Category headings are H2, card titles H3, status pills text-based |

**Exact copy**

- Hero eyebrow `Portfolio` · Heading `Games, Live Casino Formats and Product Concepts` · Paragraph "From live slot titles to original live casino formats and product concepts — this is what OpenGamer builds and is building."
- Category 1 — `Casino Games` · "Live, confirmed slot titles built and shipped by OpenGamer." → card → `/games`
- Category 2 — `Live Casino & Show Games` · "Original live casino and show-game concepts, starting with ELEMENTALS." → ELEMENTALS card (title/tagline/status/CTA per §1) → `/portfolio/elementals`
- Category 3 — `Platforms & Applications` · "Product concepts extending Live Casino into new engagement models." → LC App card (title/tagline/status/CTA per §1) → `/portfolio/lc-app`
- Page CTA: `Discuss a Project` → `/contact`

---

## 4. ELEMENTALS — `/portfolio/elementals`

Canon line (use once, link elsewhere): *ELEMENTALS is a premium Live Casino Show Game concept built around the Great Wheel and four elemental realms — Fire, Water, Earth, Air — unified by a central world (the Nexus) and presented by a dealer-host character. Status: In Development.*

**Visual spec**

| # | Section | Desktop | Mobile | Component | Status |
|---|---|---|---|---|---|
| 1 | Hero | Full-bleed dark background, centered wordmark + Guardian render right or behind copy | Stacked, render behind/above copy at reduced opacity | New `PortfolioHero` (dark, cinematic, status pill) | `In Development` pill top of hero |
| 2 | Product Overview | 2-col: copy left, wheel render right | Stacked | Existing two-col split | — |
| 3 | The Nexus | Full-width copy band over dark environment art (or placeholder gradient) | Stacked | New `LoreSection` (reusable for Nexus/realms) | — |
| 4 | The Great Wheel | Centered render + short copy below | Same, smaller render | `LoreSection` | — |
| 5–8 | Fire / Water / Earth / Air | 4-up card grid, each realm = icon/color chip + short copy | 1-col stack | New `RealmCard` (color-coded per element) | — |
| 9 | Bonus-Round Philosophy | Centered statement + small icon | Same | Existing statement/callout block | — |
| 10 | Dealer-Host Experience | 2-col: Guardian render left, copy right | Stacked, render above | `LoreSection` | — |
| 11 | Visual Direction | Mood-tag row (Premium / Cinematic / Mysterious / Serious / Not carnival / Not arcade) | Wraps to 2 rows | New `TagRow` | — |
| 12 | Product Status | Single status panel, centered | Same | New `StatusPanel` | `In Development` |
| 13 | Partnership Opportunity | 2–3 short value bullets, centered | Same | Existing bullet block | — |
| 14 | CTA | Existing CTA band | Stacked | Existing CTA band | CTA `Discuss ELEMENTALS Partnership` |

Accessibility: dark-on-dark hero requires the Guardian render or gradient overlay to keep text contrast ≥4.5:1 behind the wordmark; realm cards use both color and text label for the element (not color alone); status pill always text-labeled.

**Exact copy**

1. Hero — `ELEMENTALS` · "A premium Live Casino show game built around four elemental realms and the Great Wheel." · Status `In Development`
2. Product Overview — `One Wheel. Four Realms.` · "ELEMENTALS combines a central Great Wheel with four elemental bonus realms, presented through a dealer-host format and a cinematic, ritual-inspired world." · Caption `The Great Wheel at the center of ELEMENTALS`
3. The Nexus — `The Nexus` · "The Nexus is the central world connecting all four realms — the setting for the base game and the point every bonus round returns to." · Caption `The Nexus — the world at the center of ELEMENTALS`
4. The Great Wheel — `The Great Wheel` · "The Great Wheel is the core mechanic that routes play into the base game and the four elemental bonus rounds." · Caption `The Great Wheel`
5. Fire — `Fire` · "One of four elemental bonus realms, each with its own bonus round and visual identity." · Caption `Fire Realm`
6. Water — `Water` · same pattern · Caption `Water Realm`
7. Earth — `Earth` · same pattern · Caption `Earth Realm`
8. Air — `Air` · same pattern · Caption `Air Realm`
9. Bonus-Round Philosophy — `Built to Differentiate, Not Clone` · "Each realm's bonus round is designed as original mechanics rather than a reskin of an existing market format — final mechanics are in development and not yet published."
10. Dealer-Host Experience — `A Guardian, Not a Generic Dealer` · "ELEMENTALS is presented through a dealer-host character rather than a standard studio dealer format, reinforcing the ritual/fantasy tone." · Caption `The Guardian — ELEMENTALS dealer-host`
11. Visual Direction — `Ancient Ritual, Cinematic Fantasy` · Tags: `Premium` `Cinematic` `Mysterious` `Serious` `Not carnival` `Not arcade`
12. Product Status — `In Development` · "Mechanics, mathematics, launch timing and certification are not yet finalized."
13. Partnership Opportunity — `Building ELEMENTALS Together` · "OpenGamer is open to studio, provider and co-development partnerships to bring ELEMENTALS toward production."
14. CTA — `Discuss an ELEMENTALS Partnership` · "Discuss studio production, provider collaboration or a co-development partnership for ELEMENTALS." · CTA `Discuss ELEMENTALS Partnership`

**ELEMENTALS visual asset pack**

| Asset | Status | Purpose | Aspect ratio | Dimensions | Background |
|---|---|---|---|---|---|
| Guardian character render | Available (extract from brochure p.14) | Hero, Dealer-Host section, homepage thumbnail, OG base | 3:4 | 1200×1600 min | Opaque (existing render) |
| Great Wheel render | Available (referenced in brochure; extract if a clean isolated version exists, else generate) | Product Overview, Great Wheel section | 1:1 | 1200×1200 | Transparent if generated |
| Nexus environment concept | Generate | The Nexus section background/illustration | 16:9 | 1920×1080 | Opaque |
| Fire realm concept | Generate | Fire card | 4:5 | 960×1200 | Opaque |
| Water realm concept | Generate | Water card | 4:5 | 960×1200 | Opaque |
| Earth realm concept | Generate | Earth card | 4:5 | 960×1200 | Opaque |
| Air realm concept | Generate | Air card | 4:5 | 960×1200 | Opaque |
| OG image | Generate (compose) | Social share | 1.91:1 | 1200×630 | Opaque |
| Homepage thumbnail | Reuse Guardian render, cropped | Proprietary Projects card | 4:3 | 800×600 | Opaque |

| Asset | Composition notes | Text-safe area | Mobile crop |
|---|---|---|---|
| Guardian render | Character centered-right, dark negative space left for copy overlay | Left 40% of frame kept clear | Crop to bust/shoulders-up, centered |
| Great Wheel render | Wheel centered, radial glow, no legible sector labels (mechanics unconfirmed) | Bottom 20% clear for caption | Crop tight to wheel, square |
| Nexus environment | Symmetrical temple/observatory framing, wide empty sky/ceiling space top-third | Top third clear for heading overlay | Crop to center vertical band |
| Fire/Water/Earth/Air cards | Single symbolic motif per element (flame / wave / stone / wind swirl), not a character per realm unless Guardian-consistent character art is later approved | Bottom 25% clear for label | Full card crop, no change (cards are already mobile-width) |
| OG image | Guardian render + wordmark, dark gradient base | Center-safe zone per standard OG text-safe practice | N/A (fixed asset) |

| Asset | Image-generation prompt | Negative prompt |
|---|---|---|
| Great Wheel render | "Ornate ancient ceremonial wheel, dark temple-observatory setting, mint-green and bronze glowing runes, cinematic fantasy lighting, symmetrical composition, no visible numbers or sector labels, premium dark background, high detail illustration" | "carnival colors, cartoon style, arcade UI, neon pink/purple, casino chips, dice, playing cards, text, numbers, sector labels, low detail, cluttered" |
| Nexus environment | "Ancient temple-meets-observatory interior, four glowing portals in the distance representing fire/water/earth/air, dark cinematic fantasy atmosphere, mint-green ambient light, symmetrical wide shot, premium illustration, empty ceremonial floor" | "carnival tent, arcade cabinet, bright primary colors, cartoon characters, modern casino signage, text, logos, people, gameplay UI" |
| Fire realm | "Abstract ceremonial flame motif in a dark stone alcove, ember particles, mint-green accent light, premium dark fantasy illustration, no text" | "cartoon fire, emoji, bright red/orange cartoon flames, casino symbols, text, numbers" |
| Water realm | "Abstract ceremonial water/wave motif in a dark stone alcove, glowing teal light, premium dark fantasy illustration, no text" | "cartoon waves, emoji, swimming pool imagery, casino symbols, text, numbers" |
| Earth realm | "Abstract ceremonial stone/crystal motif in a dark alcove, mossy textures, mint-green glow, premium dark fantasy illustration, no text" | "cartoon rocks, emoji, desert cliché imagery, casino symbols, text, numbers" |
| Air realm | "Abstract ceremonial wind/storm motif in a dark alcove, swirling translucent energy, mint-green light, premium dark fantasy illustration, no text" | "cartoon clouds, emoji, cheerful sky imagery, casino symbols, text, numbers" |

Do not invent final wheel sectors, bonus mechanics, or gameplay screens for any of the above.

---

## 5. LC App — `/portfolio/lc-app`

Positioning line (reuse once): *LC App is a B2B social engagement layer for existing Live Casino operators and providers — mobile-first, combining communication, discovery and gameplay access. Status: Product Concept — In Development.*

**Visual spec**

| # | Section | Desktop | Mobile | Component | Status |
|---|---|---|---|---|---|
| 1 | Hero | 2-col: copy left, device-frame mockup right | Stacked, device mockup below | New `PortfolioHero` (shared with ELEMENTALS) | `Product Concept — In Development` |
| 2 | Product Overview | 2-col: copy / device mockup | Stacked | Existing two-col split | — |
| 3 | Industry Problem | Centered statement + 3-icon row | 1-col stack | Existing icon-row block | — |
| 4 | Product Concept | 3-block row: profiles / discovery / gameplay access | 1-col stack | New `ConceptBlockRow` | — |
| 5 | Social Layer | Device mockup (feed) + copy | Stacked | `DeviceFrameMockup` | — |
| 6 | Dealer-Led Engagement | Device mockup (dealer profile) + copy | Stacked | `DeviceFrameMockup` | — |
| 7 | Player Discovery | Device mockup (discovery feed) + copy | Stacked | `DeviceFrameMockup` | — |
| 8 | Communication | Device mockup (chat UI) + copy | Stacked | `DeviceFrameMockup` | — |
| 9 | Operator Value | 2–3 value cards | 1-col stack | Existing value-card grid | — |
| 10 | Provider Value | 2–3 value cards | 1-col stack | Existing value-card grid | — |
| 11 | User Journey | 3-step horizontal flow diagram | Vertical flow | New `JourneyFlow` | — |
| 12 | Integration Concept | Simple diagram: Operator/Provider → LC App | Stacked | New `IntegrationDiagram` | — |
| 13 | Supported Content Concepts | 3 icon labels (Blackjack/Baccarat/Poker-variant) | 1-col row | Existing icon-label row | — |
| 14 | Product Status | Status panel | Same | `StatusPanel` (shared with ELEMENTALS) | `Product Concept — In Development` |
| 15 | Partnership Opportunity | 2–3 bullets | Same | Existing bullet block | — |
| 16 | CTA | Existing CTA band | Stacked | Existing CTA band | CTA `Discuss LC App Partnership` |

Accessibility: every device-frame mockup labeled "Concept" in visible text (not implied only by style); no real or simulated balances/metrics anywhere; status panel text-based.

**Exact copy**

1. Hero — `LC App` · "A B2B social engagement layer for Live Casino." · Status `Product Concept — In Development`
2. Product Overview — `Social Layer for Existing Live Casino` · "LC App gives Live Casino its own social environment — communication, discovery and gameplay access in a mobile-first application built for existing operators and providers, not to replace them."
3. Industry Problem — `Live Casino Has No Social Layer` · "Live Casino tables are broadcast experiences with limited player-to-player or player-to-dealer interaction outside the table itself."
4. Product Concept — `Communication + Discovery + Gameplay` · "LC App combines social profiles, content discovery and access to existing live tables in one mobile experience." (blocks: `Profiles`, `Discovery`, `Gameplay Access`)
5. Social Layer — `A Social Environment Around the Table` · "Players connect, follow and interact around live tables rather than only inside a single broadcast." · Conceptual label `Concept UI — Social Feed`
6. Dealer-Led Engagement — `Dealers as Creator-Like Figures` · "Dealers gain a discoverable presence within the app, extending engagement beyond the table." · Conceptual label `Concept UI — Dealer Profile`
7. Player Discovery — `Finding Tables and People` · "Discovery feeds surface tables, dealers and content relevant to each player." · Conceptual label `Concept UI — Discovery Feed`
8. Communication — `Built-In Player Communication` · "Messaging and profile features support communication around live play." · Conceptual label `Concept UI — Messaging`
9. Operator Value — `Engagement, Retention, Acquisition` · "An additional engagement and retention layer for operators running Live Casino, layered on top of existing tables."
10. Provider Value — `A Social Layer on Existing Content` · "A concept for extending existing blackjack, baccarat and poker-variant content with a social distribution layer."
11. User Journey — `From Discovery to Table` · Steps: `Discover` → `Connect` → `Join a Live Table`
12. Integration Concept — `Built on Top of Existing Operators` · "Designed to integrate with existing operator/provider live tables — it does not replace underlying licensed gambling infrastructure."
13. Supported Content Concepts — `Starting with Core Table Games` · Labels: `Blackjack` `Baccarat` `Poker-variant concepts`
14. Product Status — `Product Concept — In Development` · "No pilots, users, metrics or partner integrations are confirmed at this stage."
15. Partnership Opportunity — `Building LC App with Operators and Providers` · "OpenGamer is open to pilot, integration and strategic partnership discussions with licensed Live Casino operators and providers."
16. CTA — `Discuss an LC App Partnership` · "Reach out to discuss a pilot, integration or strategic partnership discussion." · CTA `Discuss LC App Partnership`

**LC App visual asset pack**

| Asset | Purpose | Aspect ratio | Dimensions | Content blocks | Conceptual label | Mobile behavior | Design/gen prompt |
|---|---|---|---|---|---|---|---|
| Hero device frame | Hero, homepage thumbnail | 9:19.5 (phone) | 900×1950 | Empty app shell, nav bar, placeholder feed cards (no real content) | "Concept UI" | Frame scales down, stays centered | "Minimal dark-mode mobile app UI mockup, empty state feed with placeholder rounded cards, no text, no logos, no numbers, mint-green accent on near-black background, clean modern app-design mockup, device frame only, no real photos" |
| Social-layer diagram | Social Layer section | 1:1 | 1200×1200 | Nodes: Player / Dealer / Table, connecting lines | "Concept Diagram" | Stacks nodes vertically | "Abstract node-and-line diagram, three labeled circular nodes (Player, Dealer, Table), thin connecting lines, dark background, mint-green line accents, flat minimal vector style" |
| Dealer profile concept | Dealer-Led Engagement | 9:19.5 | 900×1950 | Placeholder avatar circle, name-bar (blank/lorem-free), no follower count | "Concept UI" | Same frame, scaled | "Mobile app profile screen mockup, placeholder circular avatar, empty text bars instead of real name/stats, no follower counts, no numbers, dark UI, mint-green accents, wireframe-level detail only" |
| Discovery feed | Player Discovery | 9:19.5 | 900×1950 | Grid of placeholder thumbnail cards, no images/text | "Concept UI" | Same frame, scaled | "Mobile discovery feed UI mockup, grid of empty placeholder thumbnail cards, dark theme, mint-green highlight state, no real images, no text, no icons implying real people" |
| Communication concept | Communication section | 9:19.5 | 900×1950 | Chat bubble shapes, no real text | "Concept UI" | Same frame, scaled | "Mobile messaging UI mockup, empty chat bubble shapes only, no text, dark theme, mint-green sent-message bubble, minimal wireframe style" |
| Operator/Provider value | Operator/Provider Value sections | 4:3 | 1200×900 | Simple 2-box comparison layout | "Concept Diagram" | Stacks to 1-col | "Abstract two-column value diagram, labeled boxes only (no icons of real brands), dark background, mint-green dividers, flat vector style" |
| User journey | User Journey section | 16:9 | 1600×900 | 3-step horizontal arrow flow | "Concept Diagram" | Vertical flow | "Simple 3-step horizontal flow diagram with arrows, minimal icon per step, dark background, mint-green accent, flat vector style, no text baked into image" |
| Integration diagram | Integration Concept | 16:9 | 1600×900 | Operator/Provider box → LC App box, one arrow | "Concept Diagram" | Stacks vertically | "Minimal two-box system diagram connected by one arrow, dark background, mint-green line, flat vector style, no logos" |
| Product-status panel | Product Status section | — | — | Text panel only, no image required | — | — | N/A — text/UI component, not an image asset |
| OG image | Social share | 1.91:1 | 1200×630 | Device frame + wordmark on dark gradient | "LC App — Product Concept" | N/A | Compose from hero device frame + wordmark, no gen needed if hero asset exists |
| Homepage thumbnail | Proprietary Projects card | 4:3 | 800×600 | Cropped hero device frame | — | Fixed aspect crop | Crop from hero device frame asset |

Do not depict real balances, follower counts, earnings, operator logos, casino transactions, or any licensed-product claim in any LC App visual.

---

## 6. Dragon Rush — `/games/dragon-rush`

Facts confirmed from open-gamer.com and OpenGamer's own portfolio deck: Dragon Rush is a live title in the OpenGamer catalogue with a confirmed demo URL and confirmed artwork (young-dragon/forest theme, eggs and crystals visible in art). Note: the portfolio deck's descriptive paragraph under the Dragon Rush artwork is a duplicate of the Forest Fortune text (a copy-paste error in that source document) and is not usable as Dragon Rush's description — excluded here rather than repeated as fact.

| Field | Content |
|---|---|
| Title | Dragon Rush |
| Slug | `dragon-rush` |
| Short description | A dragon-themed slot title from the confirmed OpenGamer portfolio. |
| Detail-page introduction | A dragon-themed slot title from the confirmed OpenGamer portfolio. |
| Demo CTA | `Play Demo` → `https://open-gamer.com/games/view?code=dragon-rush` |
| Secondary CTA | `Discuss Similar Game` → `/contact` |
| Image alt text | Dragon Rush artwork |
| Card caption | Confirmed OpenGamer title |
| SEO title | Dragon Rush \| OpenGamer Studio |
| Meta description | A dragon-themed slot title from the confirmed OpenGamer portfolio. |
| Artwork location recommendation | `/public/assets/games/dragon-rush/artwork.webp` — approved local migration from the official OpenGamer website; preserve best available source resolution |
| Crop recommendation | Center-crop on the title lockup + dragon hatchling character, matching the crop pattern already used for the other 6 game cards |
| Mobile artwork behavior | Same artwork, full-width card image, no separate mobile-only crop needed (matches existing game-card component behavior) |
| Additional Metadata (page body copy) | "RTP, volatility, release status, format, mechanics and certification details are intentionally omitted until approved game-level information is available." (identical pattern to the 6 existing game pages) |

---

## 7. Asset Manifest

| Asset ID | Route | Section | File name | Status | Source | Dimensions | Format | Mobile crop | Conceptual label |
|---|---|---|---|---|---|---|---|---|---|
| A-01 | / | Proprietary Projects | elementals-thumb.webp | Extract from approved material | Guardian render, brochure p.14 | 800×600 | webp | Fixed crop, bust-up | — |
| A-02 | / | Proprietary Projects | lc-app-thumb.webp | Founder asset required (or generate) | LC App hero device frame | 800×600 | webp | Fixed crop | "Concept UI" |
| A-03 | /services/live-casino-development | Show-Game Dev | elementals-teaser.webp | Extract from approved material | Guardian render, brochure p.14 | 1200×1200 | webp | Square crop | — |
| A-04 | /services/live-casino-development | Technical Architecture | lcd-architecture-diagram.svg | Create as SVG/CSS | New, based on /technology architecture pattern | 1600×900 | svg | Reflow, no crop | — |
| A-05 | /services/live-casino-development | Studio Product Design | lcd-studio-floorplan.svg | Create as SVG/CSS | New | 1600×900 | svg | Reflow | — |
| A-06 | /services/live-casino-development | Production Documentation | lcd-doc-stack.webp/svg | Create as SVG/CSS | New | 1200×900 | svg/webp | Reflow | — |
| A-07 | /portfolio/elementals | Hero / Dealer-Host | elementals-guardian.png | Available (extract from brochure) | Brochure p.14 | 1200×1600 | png | Bust-up crop | — |
| A-08 | /portfolio/elementals | Great Wheel | elementals-wheel.png | Extract from approved material / Generate if isolated version unavailable | Brochure reference | 1200×1200 | png | Square crop | — |
| A-09 | /portfolio/elementals | The Nexus | elementals-nexus.png | Generate concept art | New | 1920×1080 | png | Center vertical band | — |
| A-10 | /portfolio/elementals | Fire | elementals-fire.png | Generate concept art | New | 960×1200 | png | Full-card crop | — |
| A-11 | /portfolio/elementals | Water | elementals-water.png | Generate concept art | New | 960×1200 | png | Full-card crop | — |
| A-12 | /portfolio/elementals | Earth | elementals-earth.png | Generate concept art | New | 960×1200 | png | Full-card crop | — |
| A-13 | /portfolio/elementals | Air | elementals-air.png | Generate concept art | New | 960×1200 | png | Full-card crop | — |
| A-14 | /portfolio/elementals | OG | elementals-og.png | Generate (compose) | Guardian render + wordmark | 1200×630 | png | Fixed | — |
| A-15 | /portfolio/lc-app | Hero | lc-app-hero-device.png | Generate concept art | New | 900×1950 | png | Scales, centered | "Concept UI" |
| A-16 | /portfolio/lc-app | Social Layer | lc-app-social-diagram.svg | Create as SVG/CSS | New | 1200×1200 | svg | Reflow | "Concept Diagram" |
| A-17 | /portfolio/lc-app | Dealer-Led Engagement | lc-app-dealer-profile.png | Generate concept art | New | 900×1950 | png | Scales | "Concept UI" |
| A-18 | /portfolio/lc-app | Player Discovery | lc-app-discovery-feed.png | Generate concept art | New | 900×1950 | png | Scales | "Concept UI" |
| A-19 | /portfolio/lc-app | Communication | lc-app-chat.png | Generate concept art | New | 900×1950 | png | Scales | "Concept UI" |
| A-20 | /portfolio/lc-app | Operator/Provider Value | lc-app-value-diagram.svg | Create as SVG/CSS | New | 1200×900 | svg | Reflow | "Concept Diagram" |
| A-21 | /portfolio/lc-app | User Journey | lc-app-journey.svg | Create as SVG/CSS | New | 1600×900 | svg | Vertical reflow | "Concept Diagram" |
| A-22 | /portfolio/lc-app | Integration Concept | lc-app-integration.svg | Create as SVG/CSS | New | 1600×900 | svg | Vertical reflow | "Concept Diagram" |
| A-23 | /portfolio/lc-app | OG | lc-app-og.png | Generate (compose) | Hero device frame + wordmark | 1200×630 | png | Fixed | — |
| A-24 | /games/dragon-rush | Hero | artwork.webp | Approved for local migration | Official OpenGamer website | Preserve best available source resolution | webp | Center crop on title+character | — |

---

## 8. Codex Execution Delta

**Routes to add:** `/portfolio`, `/portfolio/elementals`, `/portfolio/lc-app`, `/services/live-casino-development`, `/games/dragon-rush` (unchanged from CH §14).

**Files to update:** homepage page file (insert Proprietary Projects section per §1 above), `content/games.ts` (add dragon-rush per §6), nav + footer (Portfolio link, per CH §10), sitemap generator, contact-form service list (unchanged, per CH §11).

**Components to reuse:** capability-card grid, two-column split, icon-grid, "Design Principle"/callout panel, /technology architecture numbered-list, homepage Partnership Models card grid, existing project/game card shell, existing CTA band, existing service-detail hero.

**Minimum new components:** `ProjectCard` (status pill + image slot), `PortfolioHero` (shared ELEMENTALS/LC App), `RealmCard`, `LoreSection`, `StatusPanel`, `TagRow`, `DeviceFrameMockup`, `ConceptBlockRow`, `JourneyFlow`, `IntegrationDiagram`, `DocumentStackCard`, `FAQAccordion`. Build once, reuse across pages (e.g. `StatusPanel` and `PortfolioHero` serve both ELEMENTALS and LC App).

**Assets to add:** per Asset Manifest §7 — prioritize A-07 (Guardian, already available) and A-24 (Dragon Rush artwork, approved for local migration) first since they unblock full page builds; generated concept art (SVG diagrams, device mockups, realm art) can ship as placeholders and be swapped later without a page-structure change.

**Content files to update:** `content/games.ts`, `content/portfolio.ts` (new — ELEMENTALS + LC App section data per §4/§5), `content/nav.ts`.

**Smoke-test routes:** `/`, `/services/live-casino-development`, `/portfolio`, `/portfolio/elementals`, `/portfolio/lc-app`, `/games/dragon-rush`.

**Visual-QA routes:** `/portfolio/elementals` (confirm premium/cinematic tone, no carnival/arcade cues), `/portfolio/lc-app` (confirm no fake metrics/screenshots), `/` (Proprietary Projects doesn't push Live Casino Development section below an awkward fold), `/services/live-casino-development` (confirm no stock dealer/casino photography anywhere).

**Acceptance criteria:**
1. No restricted ownership, certification, support-level, fixed-timeline, RTP-band or numeric discipline-count wording appears anywhere in shipped copy.
2. "Full-Cycle Capabilities. One Studio." appears on the Live Casino Development Overview section exactly as specified.
3. No RTP/volatility/format/mechanics/certification claims on Dragon Rush, ELEMENTALS, or LC App.
4. No fake gameplay screenshots, real balances, follower counts, earnings, or operator logos anywhere in LC App visuals.
5. All new components in the "minimum new components" list are used at least once per their target page.
6. Asset manifest statuses resolved where owner decisions allow: A-24 is approved for local migration; A-02 and A-08 remain unresolved until final LC App and ELEMENTALS source assets are approved.

---

## 9. Founder Inputs Still Required

1. Canonical `OPEN_GAMER_DESIGN_SYSTEM.md`, `OPEN_GAMER_BRAND_GUIDELINES.md`, `OPEN_GAMER_COMPONENT_LIBRARY.md` and `WEBSITE_CONTENT_HANDOFF.md` now exist and must be used during implementation.
2. Dragon Rush artwork — resolved for implementation: official OpenGamer website artwork is approved for local migration to `/public/assets/games/dragon-rush/artwork.webp`.
3. ELEMENTALS realm/Nexus art and an isolated Great Wheel render — none confirmed beyond the single Guardian character render.
4. LC App — no visual assets exist; confirm whether concept art should be commissioned or AI-generated per the prompts in §5.
5. Confirm placement of "Full-Cycle Capabilities. One Studio." beyond the Live Casino Development page (e.g., should it also replace messaging on `/services` — out of scope for this pack).
6. Carried over from CH §15 and still open: game-metadata publication decision (RTP/volatility/format), Fruit Elixir/Passion Paradise line-variant handling, brochure timeline/RTP claims.

---

# Owner Corrections and Canonical Overrides

This section overrides any conflicting wording or implementation recommendation elsewhere in this document.

## 1. Canonical Documentation Exists

The following files now exist in the project and are canonical:

- `WEBSITE_CONTENT_HANDOFF.md`
- `OPEN_GAMER_DESIGN_SYSTEM.md`
- `OPEN_GAMER_BRAND_GUIDELINES.md`
- `OPEN_GAMER_COMPONENT_LIBRARY.md`

Codex must use the actual design tokens, component names, content rules, claim restrictions, and implementation standards from these files.

Any inferred design token, color value, component name, or implementation pattern in this Visual & Content Production Pack is advisory only.

The canonical master files take precedence.

## 2. ELEMENTALS Partnership Language

Remove investor-facing partnership and funding-conversation references from the public ELEMENTALS website page.

Use only:

- Studio Partnership
- Provider Partnership
- Co-Development Partnership

Approved wording:

`OpenGamer is open to studio, provider and co-development partnerships to bring ELEMENTALS toward production.`

Approved CTA copy:

`Discuss studio production, provider collaboration or a co-development partnership for ELEMENTALS.`

## 3. LC App Partnership Language

The public LC App page should primarily target:

- licensed operators;
- Live Casino providers;
- integration partners;
- pilot partners;
- strategic product partners.

Do not foreground fundraising or investor conversations on the main public product page.

Approved wording:

`OpenGamer is open to pilot, integration and strategic partnership discussions with licensed Live Casino operators and providers.`

Investment positioning belongs in separate investor material unless explicitly approved for the public website.

## 4. Product Status Formatting

Use the exact canonical status:

`Product Concept — In Development`

Do not use:

- `Product Concept — In Development`
- `Product Concept — In Development`
- `Product Concept — In Development`

ELEMENTALS status remains:

`In Development`

## 5. Proprietary Language

Replace:

- `original bonus mechanics`
- `original show-game formats`

with:

- `original bonus mechanics`
- `original show-game formats`

unless ownership and IP language have been legally confirmed.

Use ownership-neutral RGS language unless legal ownership is explicitly confirmed.

Use:

`OpenGamer RGS`

## 6. Simulation and Validation Claims

Do not publish:

`Mathematical Models for Live Formats`

unless the exact Live Casino mathematical models described on the page have already been simulated.

Safer approved heading:

`Mathematical Models for Live Formats`

Approved description:

`Rules, paytables, probability structures and risk models are designed and prepared for simulation and validation as the concept progresses.`

Do not imply completed validation for products still in concept development.

## 7. Dragon Rush

Dragon Rush must use:

- official OpenGamer title;
- official OpenGamer artwork;
- official demo URL;
- local optimized asset;
- thematic description only.

Do not publish `Live`, RTP, volatility, format, mechanics, release date or certification unless Codex verifies the exact value against the official OpenGamer source during implementation.

The official artwork may be migrated locally from the existing OpenGamer website.

Target asset path:

`/public/assets/games/dragon-rush/artwork.webp`

## 8. Asset Paths

All public asset paths must begin under:

`/public/assets/`

Recommended folders:

```text
/public/assets/games/dragon-rush
/public/assets/projects/elementals
/public/assets/projects/lc-app
/public/assets/live-casino
