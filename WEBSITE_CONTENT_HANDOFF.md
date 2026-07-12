# OpenGamer Website — Content & Codex Handoff

Sources: Brochure PDF, opengamer-studio-prototype.vercel.app, open-gamer.com. No invented facts. Uncertain items labeled `Pending` / `Founder decision required`.

---

## 1. Gap Audit

| Area | Existing (prototype) | Missing | Required change |
|---|---|---|---|
| Services | Named services grouped by capability, matches brochure source list | `/services/live-casino-development` detail page; numeric discipline-count wording removed | Build LC dev detail page; use "Full-Cycle Capabilities. One Studio." |
| Games | 6 game pages (Forest Fortune, Sweet Wins, Deep Dive, Choco Boom, Fruit Elixir, Passion Paradise), metadata intentionally withheld | Dragon Rush page; consistent `content/games.ts` | Add Dragon Rush; centralize catalogue file |
| Portfolio | No `/portfolio` route, no nav item | Whole IA branch: `/portfolio`, `/portfolio/elementals`, `/portfolio/lc-app` | Build all three routes + nav entry |
| Live Casino | One service card, 8 bullets, no depth | Full 17-section page per §4 | Build dedicated page |
| ELEMENTALS | One sentence on services page, one character image | Full portfolio page, SEO, assets | Build `/portfolio/elementals` |
| LC App | Not mentioned anywhere | Entire page and positioning | Build `/portfolio/lc-app` |
| Navigation | Home / Services / Games / Technology / About / Contact | "Portfolio" nav item | Insert after Games (§2) |
| Homepage | Hero, capabilities, featured games, tech teaser, process, partnership models, why-OG, CTA | "Proprietary Projects" section (ELEMENTALS + LC App) | Insert new section (§9) |
| Contact form | `serviceOfInterest` has 8 options only | 25-item list from brief, grouped | Replace dropdown source (§11) |
| SEO | Per-page meta already present, good pattern | Meta for new routes | Extend per §12 table |
| Assets | Artwork for 6 games, 1 ELEMENTALS character render, brand kit | Dragon Rush art, LC App concept art, portfolio OG images | See §13 asset table |

---

## 2. Final Sitemap

```
/
/services
/services/live-casino-development
/games
/games/[slug]            → forest-fortune, sweet-wins, deep-dive, choco-boom,
                            fruit-elixir, passion-paradise, dragon-rush
/portfolio
/portfolio/elementals
/portfolio/lc-app
/technology
/about
/contact
/privacy-policy
/terms-of-use
/cookie-policy
```

**Main nav:** Home · Services · Games · Portfolio · Technology · About · Contact
**Dropdowns:** none required — keep flat top-level nav (matches current prototype pattern).
**Mobile nav:** same 7 items, single-column drawer, Contact styled as CTA button.

**Footer — Company:** Home, Services, Live Casino Development, Games, Portfolio, Technology, About, Contact
**Footer — Legal:** Privacy Policy, Terms of Use, Cookie Policy
**Footer — Connect:** LinkedIn, Instagram, YouTube, Facebook (existing)

**Internal-linking map:**
- `/` → featured games (→ `/games/[slug]`), proprietary projects (→ `/portfolio/elementals`, `/portfolio/lc-app`), Live Casino teaser (→ `/services/live-casino-development`)
- `/services` → each service card → own anchor; Live Casino card → `/services/live-casino-development`
- `/services/live-casino-development` → Featured Projects section → `/portfolio/elementals`; final CTA → `/contact`
- `/games` → each card → `/games/[slug]`; page CTA → `/contact`
- `/portfolio` → category cards → `/portfolio/elementals`, `/portfolio/lc-app`, `/games`
- `/portfolio/elementals` & `/portfolio/lc-app` → cross-link to each other ("also see") + `/services/live-casino-development` + `/contact`
- `/technology` → CTA → `/contact`
- `/about` → CTA → `/contact`

---

## 3. Services Content

Discipline-count note: remove all numeric discipline-count claims from public website copy. Use the approved line **"Full-Cycle Capabilities. One Studio."** Do not fabricate an additional service. Do not publish brochure-only fixed integration timing, certification-cycle timing or RTP-band figures as site-wide claims; the prototype's own Technology page already states "No fixed integration timeline is promised before technical discovery," which supersedes the brochure. Treat brochure timeline/RTP figures as `Founder decision required` before publishing.

| # | Slug | Group | Name | Short description (20–35 words) |
|---|---|---|---|---|
| 1 | slot-game-development | Game Production | Slot Game Development | End-to-end production of custom and turnkey slot titles, from prototype to a fully optimized, launch-ready build across desktop and mobile. |
| 2 | game-art-production | Game Production | Game Art Production | Full visual production for slot and live casino titles — concept art, character and world design carried through to animated, production-ready assets. |
| 3 | mathematics-game-design | Game Production | Mathematics & Game Design | Paytable modelling, RTP configuration, volatility design and feature balancing — the engineering layer behind player experience and operator economics. |
| 4 | remote-gaming-server | Technology & Integration | Remote Gaming Server | OpenGamer RGS technology handling wallet transactions, game logic, bonusing and reporting, built for aggregator and direct-operator connectivity. |
| 5 | game-integration | Technology & Integration | Game Integration | Structured technical launch support — aggregator, platform and operator connectivity validated through sandbox testing and QA before deployment. |
| 6 | white-label-solutions | Portfolio Services | White Label Solutions | Ready-made or exclusive game portfolios delivered under a partner's own brand, without the partner building an internal studio. |
| 7 | reskin-services | Portfolio Services | Reskin Services | New art, UI, symbols and audio applied to proven mechanics — a fast, cost-efficient route to fresh, on-brand content. |
| 8 | legacy-game-modernization | Portfolio Services | Legacy Game Modernization | Technical and visual updates — UI refresh, performance optimization, mobile adaptation — that extend the commercial life of existing titles. |
| 9 | quality-assurance | Quality & Support | Quality Assurance | Structured functional, regression, performance and device-compatibility testing before any title reaches certification or a live environment. |
| 10 | certification-support | Quality & Support | Certification Support | Documentation preparation and laboratory coordination that keeps certification timelines predictable for game submissions. |
| 11 | live-operations | Quality & Support | Live Operations | Continuous maintenance, updates, bug fixing and analytics that keep live titles performing after launch. |
| 12 | technical-consulting | Strategic Development | Technical Consulting | Architecture, studio-setup and product consulting for partners making iGaming technology decisions. |
| 13 | dedicated-development-teams | Strategic Development | Dedicated Development Teams | Embedded front-end, back-end, design, art and QA specialists working directly inside a partner's roadmap and sprint cycles. |
| 14 | live-casino-development | Strategic Development | Live Casino Development | Original live casino product design — table games, show formats, wheel mechanics and studio UX, not template clones. |
| 15 | ai-solutions-igaming | Strategic Development | AI Solutions for iGaming | Applied AI across production and product — QA automation, analytics, content workflows and internal tooling. |

### Full descriptions, capabilities, deliverables

**01 · Slot Game Development**
Full: End-to-end slot production spanning design, front-end, back-end, mathematics coordination and launch support. Delivered as custom builds, turnkey titles, white-label content or branded games, in HTML5 across desktop and mobile, with API integration and feature development handled in-house.
Capabilities: Custom slot development · Turnkey slot production · Branded games · White-label games · Front-end development · Back-end development · HTML5 slots · Mobile optimization · API integration · Game logic & feature development
Best suited for: Operators and providers needing a new title from scratch or a turnkey addition to their catalogue.
Deliverable: Launch-ready HTML5 slot build. CTA: "Discuss a Slot Project." Related: Game Art Production, Mathematics & Game Design, Game Integration. Visual: game build screenshots / device frame. SEO title: "Slot Game Development | OpenGamer Studio." SEO description: "Custom and turnkey HTML5 slot development for operators, aggregators and platforms — design, engineering and launch support in one studio."

**02 · Game Art Production**
Full: Original visual production for slot and live casino titles — concept art and character/world design carried through symbol design, UI/UX, animation (including Spine), VFX and promotional artwork, to a single art-directed standard.
Capabilities: Concept art · Character design · Environment design · Symbol design · UI design · UX design · Animation · Spine animation · VFX · Promotional artwork
Best suited for: Partners needing a distinct visual identity for a new title or brand refresh.
Deliverable: Full production-ready art package. CTA: "Discuss an Art Project." Related: Slot Game Development, Reskin Services. Visual: character art / symbol sheets. SEO title: "Game Art Production | OpenGamer Studio." SEO description: "Concept art, character design, animation and VFX production for slot and live casino titles."

**03 · Mathematics & Game Design**
Full: The mathematical and feature-design layer behind every title — paytable and hit-frequency modelling, RTP configuration, volatility curves, bonus mechanics and simulation-driven economy balancing across reel formats.
Capabilities: Slot mathematics · Paytable modelling · Hit-frequency modelling · RTP configuration · Volatility design · Feature design (free spins, cascades, buy bonus, wilds) · Jackpot mechanics · Simulation & model validation
Best suited for: Titles requiring custom math models or feature economies distinct from template configurations.
Deliverable: Validated math model + paytable documentation. CTA: "Discuss a Math Model." Related: Slot Game Development, Quality Assurance. Visual: RTP/volatility chart mockups. SEO title: "Slot Mathematics & Game Design | OpenGamer Studio." SEO description: "RTP modelling, volatility design and bonus-feature mathematics for casino slot titles."

**04 · Remote Gaming Server**
Full: An OpenGamer RGS technology layer handling game sessions, wallet communication, bonusing, free spins, tournaments, reporting and monitoring — architected for both aggregator and direct-operator connectivity.
Capabilities: RGS development · Wallet integration · Free spins engine · Tournament engine · Bonus engine · Reporting · Monitoring · API development
Best suited for: Providers and platforms needing session, wallet and reporting infrastructure behind their content.
Deliverable: Integrated RGS layer with reporting/monitoring. CTA: "Discuss RGS Integration." Related: Game Integration, Technical Consulting. Visual: system-architecture diagram. SEO title: "Remote Gaming Server (RGS) | OpenGamer Studio." SEO description: "RGS technology for wallet, bonusing, reporting and monitoring across casino game portfolios."

**05 · Game Integration**
Full: Structured, QA-validated connectivity to aggregators and casino platforms — covering documentation exchange, sandbox connection, wallet/game-flow testing and production deployment, with ongoing technical support.
Capabilities: Aggregator integration · Platform integration · Direct-operator integration · Sandbox support · Authentication · Wallet integration · Bonus compatibility · QA · Deployment · Technical launch support
Best suited for: Operators/aggregators onboarding OpenGamer content or platforms needing integration support.
Deliverable: Certified, production-deployed integration. CTA: "Discuss Integration." Related: Remote Gaming Server, Quality Assurance. Visual: integration workflow diagram. SEO title: "Game Integration Services | OpenGamer Studio." SEO description: "Aggregator, platform and operator integration support with sandbox testing and QA."

**06 · White Label Solutions**
Full: Ready-made or exclusive game content delivered under a partner's own brand — including private portfolios, branded content and localization — so operators and platforms differentiate without building an internal studio.
Capabilities: White-label slot games · Exclusive games · Private portfolios · Branded content · Localization
Best suited for: Operators/platforms wanting exclusive or branded content without in-house development.
Deliverable: Branded game or portfolio, ready for deployment. CTA: "Discuss White Label." Related: Reskin Services, Slot Game Development. Visual: branded UI mockup. SEO title: "White Label Slot Solutions | OpenGamer Studio." SEO description: "Exclusive and white-label slot portfolios delivered under a partner's own brand."

**07 · Reskin Services**
Full: New visual identity — theme, art, UI, symbols and audio — applied to proven game mechanics, giving partners fresh, on-brand content on a faster and lower-cost production timeline than a full rebuild.
Capabilities: Theme replacement · Art replacement · UI redesign · Symbol replacement · Audio replacement · Localization
Best suited for: Portfolio refreshes reusing validated mechanics under a new theme.
Deliverable: Re-themed, ready-to-integrate build. CTA: "Discuss a Reskin." Related: Legacy Game Modernization, Game Art Production. Visual: before/after theme comparison. SEO title: "Slot Reskin Services | OpenGamer Studio." SEO description: "Theme, art and audio replacement services for proven slot mechanics."

**08 · Legacy Game Modernization**
Full: Existing titles brought up to current technical and design standards — UI refresh, performance optimization, mobile adaptation, feature expansion and technical refactoring — extending commercial lifetime.
Capabilities: UI refresh · Performance optimization · Mobile adaptation · Feature expansion · Technical refactoring
Best suited for: Providers with older titles losing performance or mobile compatibility.
Deliverable: Modernized, optimized build. CTA: "Discuss Modernization." Related: Reskin Services, Quality Assurance. Visual: performance/optimization diagram. SEO title: "Legacy Game Modernization | OpenGamer Studio." SEO description: "Technical and visual modernization services that extend the life of existing slot titles."

**09 · Quality Assurance**
Full: Structured, multi-layer testing — functional, regression, performance, device compatibility and load — applied before any title reaches certification or a live environment.
Capabilities: Functional testing · Regression testing · Performance testing · Device compatibility · Load testing
Best suited for: Any title approaching certification or production release.
Deliverable: QA sign-off report. CTA: "Discuss QA Scope." Related: Certification Support, Game Integration. Visual: QA checklist / test-matrix graphic. SEO title: "iGaming Quality Assurance | OpenGamer Studio." SEO description: "Functional, regression, performance and device-compatibility testing for casino games."

**10 · Certification Support**
Full: Documentation preparation, RNG readiness and laboratory liaison that keep certification submissions predictable and reduce back-and-forth with testing labs.
Capabilities: RNG preparation · Compliance support · Documentation · Lab assistance · Pre-submission QA
Best suited for: Titles preparing for lab submission in a regulated market.
Deliverable: Certification-ready documentation package. CTA: "Discuss Certification." Related: Quality Assurance, Technical Consulting. Visual: document checklist graphic. SEO title: "Certification Support | OpenGamer Studio." SEO description: "RNG documentation and lab-liaison support to prepare casino games for certification."

**11 · Live Operations**
Full: Ongoing maintenance, updates, bug fixing, continuous improvement and analytics for titles after launch — keeping live performance and stability on trend.
Capabilities: Maintenance · Updates · Bug fixing · Continuous improvements · Analytics
Best suited for: Live titles needing sustained post-launch support.
Deliverable: Scoped live-ops support package. CTA: "Discuss Live Support." Related: Quality Assurance, Technical Consulting. Visual: uptime/monitoring dashboard mockup. SEO title: "Live Operations | OpenGamer Studio." SEO description: "Post-launch maintenance, updates and analytics support for live casino games."

**12 · Technical Consulting**
Full: Architecture, studio-setup and product-strategy guidance for partners building or scaling their own iGaming technology, informed by OpenGamer's own production and RGS experience.
Capabilities: Architecture · Studio setup · Product consulting · Technology strategy
Best suited for: Startups or platforms scoping their own technical build.
Deliverable: Technical strategy / architecture brief. CTA: "Book a Consulting Session." Related: Remote Gaming Server, Dedicated Development Teams. Visual: architecture whiteboard graphic. SEO title: "iGaming Technical Consulting | OpenGamer Studio." SEO description: "Architecture and technology-strategy consulting for iGaming operators and platforms."

**13 · Dedicated Development Teams**
Full: Embedded front-end, back-end, design, art, animation, QA and production specialists working as a direct extension of a partner's product organization, scoped and staffed for the length of the engagement.
Capabilities: Front-end developers · Back-end developers · Game designers · Artists · Animators · QA engineers · Producers · Technical leads
Best suited for: Partners needing sustained capacity inside their own roadmap and sprint cycle.
Deliverable: Staffed, embedded team. CTA: "Discuss a Dedicated Team." Related: Technical Consulting, Live Casino Development. Visual: team-structure diagram. SEO title: "Dedicated iGaming Development Teams | OpenGamer Studio." SEO description: "Embedded front-end, back-end, art and QA teams working inside your product roadmap."

**14 · Live Casino Development** — see §4 for full page.
Full: Original live casino product design, from studio-based table games to next-generation show formats built around original bonus mechanics and strong visual identity — not template clones.
Capabilities: Live casino game design · Live show games · Wheel games · Game shows · Live UX · Streaming concepts · Presenter experience · Studio product design
Best suited for: Operators/providers wanting a differentiated live casino format instead of licensing a market-standard clone.
Deliverable: Game Bible / Show Bible / production-ready design package. CTA: "Discuss a Live Casino Concept." Related: ELEMENTALS (portfolio), Game Art Production. Visual: character/show render. SEO title: "Live Casino Development | OpenGamer Studio." SEO description: "Original live casino and show-game design — concept, mathematics, UX and studio product design."

**15 · AI Solutions for iGaming**
Full: Applied AI woven into both partner products and OpenGamer's own production pipeline — automation, analytics, content workflows and internal tooling that accelerate delivery without replacing craft.
Capabilities: AI automation · AI customer support · AI analytics · AI game content · AI internal tools · AI business optimization
Best suited for: Partners looking to accelerate QA, content or analytics workflows.
Deliverable: Scoped automation/tooling implementation. CTA: "Discuss AI-Assisted Workflows." Related: Quality Assurance, Live Operations. Visual: workflow-automation diagram. SEO title: "AI Solutions for iGaming | OpenGamer Studio." SEO description: "Applied AI for QA automation, analytics and content workflows in casino game production."

---

## 4. Live Casino Development Page — `/services/live-casino-development`

Do not claim OpenGamer operates, constructs or manages a physical Live Casino studio — all studio content below is design/consulting scope, not operations.

| # | Section | Eyebrow | Heading | Copy (final) | Capabilities/cards | CTA | Visual | Mobile priority |
|---|---|---|---|---|---|---|---|---|
| 1 | Hero | Service 14 | Live Casino Development | Original live casino product design — from studio-based table games to next-generation show formats built around original bonus mechanics and strong visual identity, not template clones. | — | Discuss a Live Casino Concept | Character/show hero render | High |
| 2 | Overview | What we do | Full-Cycle Live Casino Design | OpenGamer designs live casino products end-to-end: concept, mathematics, UX, show format and studio presentation — delivered as documentation and design packages a partner's studio or provider team can build from. | Live casino game design · Live show games · Wheel games · Game shows · Live UX · Streaming concepts · Presenter experience · Studio product design | — | Icon grid | High |
| 3 | Product Strategy | Strategy | Positioning Before Production | Every concept starts with market and commercial fit, not mechanics. | Product Vision · Market Positioning · Audience Definition · Competitive Analysis · Portfolio Planning · Roadmap · Commercial Model Design · Operator & Provider Positioning | Discuss Product Strategy | Strategy-doc mockup | Medium |
| 4 | Live Casino Game Design | Design | Original Table & Show Concepts | Mechanics designed for differentiation, not imitation. | Table Game Concepts · Original Card Games · Wheel Games · Show Games · Bonus Mechanics · Side Bets · Multiplier Systems · Progressive Features · Tournament Concepts · Interaction Mechanics | — | Mechanic diagram | High |
| 5 | Mathematics | Math | Mathematical Models for Live Formats | Rules, paytables, probability structures and risk models are designed and prepared for simulation and validation as the concept progresses. | Rules · Paytables · Probability Models · RTP Modelling · Volatility · Side Bets · Bonus Rounds · Simulation · Risk Analysis · Exposure Analysis | — | Abstract probability/risk model chart | Low |
| 6 | Live UX and Interface Design | UX | Interfaces Built for Live Play | Betting flows and result presentation designed for speed, clarity and multi-device play. | Betting Interface · Game Lobby · Mobile UX · Decision Flows · Result Presentation · Game History · Multi-Seat UX · Multi-Table UX · Accessibility · Responsive Interfaces | — | UI wireframe | High |
| 7 | Show-Game Development | Show format | Next-Generation Show Games | Proprietary show formats — including ELEMENTALS — built around original bonus mechanics, not market-standard clones. | Format design · Bonus round design · Studio-to-broadcast flow · Original IP | See ELEMENTALS | Show-game render | High |
| 8 | Studio Product Design | Studio | Studio Concepts for Live Formats | Design guidance for how a format is presented on a physical or virtual studio floor — not construction or operation of a studio. | Studio Layout Concepts · Table & Set Design · Presenter Positioning · Camera Planning · Lighting Concepts · Display Placement · Physical Device Concepts · Brand Integration · Operational Flow | — | Studio floor plan diagram | Medium |
| 9 | Streaming and Broadcast Concepts | Broadcast | Designed for the Stream | UX and visual concepts built with latency and multi-platform delivery in mind. | Broadcast UX · Camera Logic · Stream Composition · Player Overlays · Result Graphics · Presenter Prompts · Latency-Aware UX · Multi-Platform Delivery Concepts | — | Broadcast composition mockup | Medium |
| 10 | Presenter and Dealer Experience | Presenter | Designing the Host Experience | Scripts, prompts and workflow frameworks that make presenters part of the product, not just an operator. | Presenter Role · Host Scripts · Explanation Flow · Interaction Framework · Presenter Screens · Operational Prompts · Training Structure · Brand Tone · Dealer Workflow | — | Presenter guide mockup | Low |
| 11 | Social and Engagement Layer | Engagement | Community Built Into the Format | Concepts for player interaction, discovery and retention layered onto live formats. | Player Interaction · Dealer-Led Engagement · Community Mechanics · Creator Concepts · Messaging · Profiles · Discovery Feeds · Table Discovery · Presenter Discovery · Retention Features | — | Social-layer concept diagram | Low |
| 12 | Technical Consulting | Tech | Architecture for Live Products | Consulting on the technical backbone a live product needs before build. | Architecture Concepts · Provider Integration · Wallet & Session Flows · Game State · Reporting · APIs · Monitoring · Compliance Preparation · Roadmap | Discuss Technical Scope | Architecture diagram | Low |
| 13 | Production Documentation | Docs | Documentation That Gets Built | Every concept is delivered as structured documentation a studio or dev team can execute against. | Product Vision · Game Bible · Show Bible · GDD · PRD · Visual Direction · Operator Presentation · Technical Specification · Pilot Blueprint · Development Roadmap · Studio Requirements · Presenter Guide | — | Document stack mockup | Medium |
| 14 | Featured Projects | Portfolio | ELEMENTALS | Premium four-realm show game concept currently in development — see full concept. | ELEMENTALS card (link) | View ELEMENTALS | ELEMENTALS character art | High |
| 15 | Engagement Models | Ways to work together | Scoped to the Outcome | Custom Development · Dedicated Team · Co-Development · Technology Partnership — same models as §5/Part 18 of brochure. | (reuse Partnership Models block, §9) | — | Model comparison cards | Medium |
| 16 | FAQ | FAQ | Common Questions | Q: Does OpenGamer operate a live studio? A: No — OpenGamer designs live casino products and documentation; studio construction/operation is a partner or third-party function unless otherwise agreed. Q: Is ELEMENTALS available now? A: It is in development; see Product Status on its page. | — | — | Accordion | Medium |
| 17 | Final CTA | Let's build | Design Your Next Live Casino Format | Share the target market, format direction and studio context — OpenGamer will propose the right engagement model. | — | Discuss a Live Casino Concept | — | High |

**SEO:** Title "Live Casino Development | OpenGamer Studio" · Description "Original live casino and show-game design — concept, mathematics, live UX and studio product design for operators and providers."

---

## 5. ELEMENTALS Page — `/portfolio/elementals`

Canonical lore reference (use once, link elsewhere as "see ELEMENTALS canon"): *ELEMENTALS is a premium Live Casino Show Game concept built around the Great Wheel and four elemental realms — Fire, Water, Earth and Air — each with its own bonus round, unified by a central world (the Nexus) and presented by a dealer-host character. Visual direction: ancient ritual, cinematic fantasy, temple-meets-observatory. Status: In Development.*

| # | Section | Headline | Copy | Cards/bullets | Visual | Caption |
|---|---|---|---|---|---|---|
| 1 | Hero | ELEMENTALS | A premium Live Casino show game built around four elemental realms and the Great Wheel. Status: In Development. | — | Hero character render (existing brochure art) | "ELEMENTALS — In Development" |
| 2 | Product Overview | One Wheel. Four Realms. | ELEMENTALS combines a central Great Wheel with four elemental bonus realms, presented through a dealer-host format and a cinematic, ritual-inspired world. | Great Wheel · Four Realms · Dealer-Host Presentation · Character-Led Identity | Wheel concept render | "The Great Wheel at the center of ELEMENTALS" |
| 3 | The Nexus and Core World | The Nexus | The Nexus is the central world connecting all four realms — the setting for the base game and the point every bonus round returns to. | Central hub concept · Temple-meets-observatory tone | Nexus environment concept art (pending) | "The Nexus — the world at the center of ELEMENTALS" |
| 4 | The Great Wheel | The Great Wheel | The Great Wheel is the core mechanic that routes play into the base game and the four elemental bonus rounds. | Central mechanic · Routes to four realms | Wheel render | "The Great Wheel" |
| 5 | Fire Realm | Fire | One of four elemental bonus realms, each with its own bonus round and visual identity. | Element: Fire · Realm-specific bonus round (mechanics pending) | Fire realm concept art (pending) | "Fire Realm" |
| 6 | Water Realm | Water | One of four elemental bonus realms, each with its own bonus round and visual identity. | Element: Water · Realm-specific bonus round (mechanics pending) | Water realm concept art (pending) | "Water Realm" |
| 7 | Earth Realm | Earth | One of four elemental bonus realms, each with its own bonus round and visual identity. | Element: Earth · Realm-specific bonus round (mechanics pending) | Earth realm concept art (pending) | "Earth Realm" |
| 8 | Air Realm | Air | One of four elemental bonus realms, each with its own bonus round and visual identity. | Element: Air · Realm-specific bonus round (mechanics pending) | Air realm concept art (pending) | "Air Realm" |
| 9 | Bonus-Round Philosophy | Design philosophy | Built to Differentiate, Not Clone | Each realm's bonus round is designed as original mechanics rather than a reskin of an existing market format — final mechanics are in development and not yet published. | Original mechanics per realm · Simulation-tested before release (per math standard) | Concept sketch | — |
| 10 | Dealer-Host Experience | Host | A Guardian, Not a Generic Dealer | ELEMENTALS is presented through a dealer-host character (Guardian) rather than a standard studio dealer format, reinforcing the ritual/fantasy tone. | Character-led hosting · Ritual tone · Not carnival/arcade | Guardian character render (existing) | "The Guardian — ELEMENTALS dealer-host" |
| 11 | Visual Direction | Visual direction | Ancient Ritual, Cinematic Fantasy | Premium, mysterious, temple-meets-observatory art direction — deliberately distinct from carnival or arcade-style wheel games. | Premium · Cinematic · Mysterious · Serious · Not carnival · Not arcade | Mood board / character art | — |
| 12 | Product Status | Status | In Development | ELEMENTALS is a product concept in active development. Mechanics, mathematics, launch timing and certification are not yet finalized. | Status: In Development | — | — |
| 13 | Partnership Opportunity | Partner with us | Building ELEMENTALS Together | OpenGamer is open to studio, provider and co-development partnerships to bring ELEMENTALS toward production. | Studio partnership · Provider partnership · Co-development | — | — |
| 14 | CTA | Let's talk | Discuss an ELEMENTALS Partnership | Discuss studio production, provider collaboration or a co-development partnership for ELEMENTALS. | — | Discuss ELEMENTALS Partnership | — |

**SEO title:** "ELEMENTALS | Premium Live Casino Show Game — OpenGamer"
**Meta description:** "ELEMENTALS is a premium Live Casino show game concept built around four elemental realms and the Great Wheel. In development."
**OG title:** "ELEMENTALS — A New Kind of Live Casino Show Game"
**OG description:** "Four realms. One Wheel. A cinematic live casino show game concept from OpenGamer Studio."
**Structured-data description:** "ELEMENTALS: premium Live Casino show game concept in development by OpenGamer Studio, featuring four elemental realms and a central Great Wheel."
**CTA labels:** "Discuss ELEMENTALS Partnership," "View Live Casino Development"
**Asset list:** Guardian character render (have), Great Wheel concept render (have, from brochure), 4× realm concept art (pending), Nexus environment concept (pending), OG image 1200×630 (pending)
**Missing-information list:** Final bonus-round mechanics per realm; math/RTP model; target certification markets; launch timing; any confirmed studio/provider partner; visual assets for all 4 realms and the Nexus.

---

## 6. LC App Page — `/portfolio/lc-app`

Positioning: LC App is a B2B social engagement layer for existing Live Casino operators and providers — mobile-first, combining communication, discovery and gameplay access. Not a standalone operator, not a competitor to Live Casino providers, not a finished consumer app. Status: Product Concept — In Development.

| # | Section | Headline | Copy | Cards/bullets | Visual | Mobile priority |
|---|---|---|---|---|---|---|
| 1 | Hero | LC App | A B2B social engagement layer for Live Casino. Status: Product Concept — In Development. | — | Mobile device frame mockup | High |
| 2 | Product Overview | What it is | Social Layer for Existing Live Casino | LC App gives Live Casino its own social environment — communication, discovery and gameplay access in a mobile-first application built for existing operators and providers, not to replace them. | B2B application · Mobile-first · Existing operator/provider integration | Device frame mockup | High |
| 3 | Industry Problem | The gap | Live Casino Has No Social Layer | Live Casino tables are broadcast experiences with limited player-to-player or player-to-dealer interaction outside the table itself. | Limited discovery · Limited communication · Limited dealer-led engagement | Conceptual diagram | Medium |
| 4 | Product Concept | Concept | Communication + Discovery + Gameplay | LC App combines social profiles, content discovery and access to existing live tables in one mobile experience. | Social profiles · Content discovery · Access to existing live tables | App concept mockup | High |
| 5 | Social Live Casino Layer | Social layer | A Social Environment Around the Table | Players connect, follow and interact around live tables rather than only inside a single broadcast. | Social Live Casino environment · Player communication | Feed mockup | Medium |
| 6 | Dealer-Led Engagement | Dealer as creator | Dealers as Creator-Like Figures | Dealers gain a discoverable, creator/influencer-like presence within the app, extending engagement beyond the table. | Dealer-led engagement · Presenter discovery | Dealer profile mockup | High |
| 7 | Player Discovery | Discovery | Finding Tables and People | Discovery feeds surface tables, dealers and content relevant to each player. | Discovery feeds · Table discovery · Presenter discovery | Discovery feed mockup | Medium |
| 8 | Communication | Communication | Built-In Player Communication | Messaging and profile features support communication around live play. | Messaging · Profiles | Chat UI mockup | Low |
| 9 | Operator Value | For operators | Engagement, Retention, Acquisition | LC App is positioned as an additional engagement and retention layer for operators running Live Casino, layered on top of existing tables. | Retention and engagement concepts · Distribution/acquisition concepts | Value diagram | Medium |
| 10 | Provider Value | For providers | A Social Layer on Existing Content | For Live Casino providers, LC App is a concept for extending existing blackjack, baccarat and poker-variant content with a social distribution layer. | Blackjack/baccarat/poker-variant concepts · Distribution concepts | Value diagram | Medium |
| 11 | High-Level User Journey | User journey | From Discovery to Table | Discover a dealer or table → follow/connect → join an existing live table through the app. | Discovery → Connection → Gameplay access | Journey diagram | Medium |
| 12 | Integration Concept | Integration | Built on Top of Existing Operators | LC App is designed to integrate with existing operator/provider live tables — it does not replace underlying licensed gambling infrastructure. | Existing operator/provider integration concept | Integration diagram | Low |
| 13 | Supported Content Concepts | Content | Starting with Core Table Games | Concept coverage begins with blackjack, baccarat and poker-variant tables. | Blackjack · Baccarat · Poker-variant concepts | Table icons | Low |
| 14 | Product Status | Status | Product Concept — In Development | LC App is a concept-stage product. No pilots, users, metrics or partner integrations are confirmed at this stage. | Status: Product Concept — In Development | — | High |
| 15 | Partnership Opportunity | Partner with us | Building LC App with Operators and Providers | OpenGamer is open to pilot, integration and strategic partnership discussions with licensed Live Casino operators and providers. | Operator conversations · Provider conversations · Strategic partnership discussions | — | Medium |
| 16 | CTA | Let's talk | Discuss an LC App Partnership | Reach out to discuss a pilot, integration or strategic partnership discussion. | — | Discuss LC App Partnership | High |

**SEO title:** "LC App | B2B Social Layer for Live Casino — OpenGamer"
**Meta description:** "LC App is a B2B social engagement layer for existing Live Casino operators and providers — mobile-first communication, discovery and gameplay access. Product concept."
**OG content:** Title "LC App — A Social Layer for Live Casino" / Description "A mobile-first B2B concept giving Live Casino its own social environment. In development."
**Structured-data description:** "LC App: B2B social engagement layer concept for Live Casino operators and providers, developed by OpenGamer Studio."
**CTA labels:** "Discuss LC App Partnership," "View Live Casino Development"
**Asset list:** Mobile device frame mockups (need to design — no gameplay screenshots exist), conceptual UI wireframes, OG image 1200×630 (all pending)
**Missing-information list:** No confirmed pilots, users, CAC/LTV/ARPU, valuation, or investor materials — all excluded from the public LC App page per instruction. Final feature set, launch timing, confirmed operator/provider conversations.

---

## 7. Games Catalogue

RTP/volatility/format note: open-gamer.com (live public site) already publishes RTP, volatility and grid format per title. The prototype under rebuild deliberately withholds this data pending approval. **Founder decision required:** publish confirmed live-site figures on the new site, or keep withholding until a formal data-approval step. Table below omits these fields pending that decision.

| Title | Slug | Short description | Demo URL | Artwork source | Status |
|---|---|---|---|---|---|
| Sweet Wins | sweet-wins | A candy-themed slot title from the confirmed OpenGamer portfolio. | open-gamer.com/games/view?code=sweet-wins | prototype `/assets/games/sweet-wins/artwork.webp` | Confirmed catalogue title |
| Dragon Rush | dragon-rush | A dragon-themed slot title from the confirmed OpenGamer portfolio. | open-gamer.com/games/view?code=dragon-rush | approved local migration to `/public/assets/games/dragon-rush/artwork.webp` from the official OpenGamer website | Confirmed catalogue title; page build required |
| Forest Fortune | forest-fortune | A nature-themed slot title from the confirmed OpenGamer portfolio. | open-gamer.com/games/view?code=forest-fortune | prototype `/assets/games/forest-fortune/artwork.webp` | Confirmed catalogue title |
| Choco Boom | choco-boom | A confectionery slot title from the confirmed OpenGamer portfolio. | open-gamer.com/games/view?code=choco-boom | prototype `/assets/games/choco-boom/artwork.webp` | Confirmed catalogue title |
| Deep Dive | deep-dive | An underwater slot title from the confirmed OpenGamer portfolio. | open-gamer.com/games/view?code=deep-dive | prototype `/assets/games/deep-dive/artwork.webp` | Confirmed catalogue title |
| Fruit Elixir | fruit-elixir | A fruit-themed slot title from the confirmed OpenGamer portfolio. | open-gamer.com/games/view?code=fruit-elixir-5 | prototype `/assets/games/fruit-elixir/artwork.webp` | Confirmed catalogue title (multiple line variants exist on open-gamer.com — 5/10/20/40L; consolidate or list variants: Founder decision required) |
| Passion Paradise | passion-paradise | A tropical slot title from the confirmed OpenGamer portfolio. | open-gamer.com/games/view?code=passion-paradise-5 | prototype `/assets/games/passion-paradise/artwork.webp` | Confirmed catalogue title (line variants exist as above) |

Per-title SEO/alt/caption (same pattern for all 7 — apply per title, substitute `{Title}` / `{theme}`):
- SEO title: "{Title} | OpenGamer Studio"
- Meta description: "A {theme} slot title from the confirmed OpenGamer portfolio."
- Image alt: "{Title} artwork"
- Card caption: "Confirmed OpenGamer title"
- Missing fields (all titles): RTP, volatility, grid format, max win, mechanics, release date — pending founder decision above.

Suitable for `content/games.ts` as a typed array with fields: `slug, title, shortDescription, demoUrl, artworkSrc, status, seo: { title, description }, imageAlt, cardCaption`. Do not add `rtp`, `volatility`, `format`, `maxWin` fields until the founder decision is resolved — leave them optional/undefined in the type, not hardcoded.

---

## 8. Portfolio Page — `/portfolio`

**Hero:** Eyebrow "Portfolio" · Heading "Games, Live Casino Formats and Product Concepts" · Copy: "From live slot titles to original live casino formats and social product concepts — this is what OpenGamer builds and is building."

**Category 1 — Casino Games:** Intro: "Live, confirmed slot titles built and shipped by OpenGamer." → card linking to `/games` (all 7 titles).
**Category 2 — Live Casino & Show Games:** Intro: "Original live casino and show-game concepts, starting with ELEMENTALS." → ELEMENTALS card: "ELEMENTALS — Premium Live Casino Show Game Concept — In Development" → `/portfolio/elementals`.
**Category 3 — Platforms & Applications:** Intro: "Product concepts extending Live Casino into new engagement models." → LC App card: "LC App — B2B Social Engagement Layer for Live Casino — Product Concept — In Development" → `/portfolio/lc-app`.

**CTA:** "Discuss a Project" → `/contact`.
Do not mix service listings into this page — services stay on `/services`.

---

## 9. Homepage Update

| Section | Eyebrow | Heading | Copy | Cards | CTA | Visual |
|---|---|---|---|---|---|---|
| 1. Hero | Full-Cycle iGaming Development Studio | Casino Game Development and RGS Technology | (unchanged — existing copy confirmed good) | Game production · RGS technology · Integration support · QA and launch support | Discuss a Project / Explore Games | Existing game artwork carousel |
| 2. Core Capabilities | One Studio | Full Production Capability | (unchanged) | Existing 6 cards | — | Icon grid |
| 3. Featured Games | Featured Games | Game Portfolio | (unchanged) — add Dragon Rush as 7th card | 7 game cards | Explore Our Games | Game artwork |
| 4. Proprietary Projects *(new)* | Proprietary Projects | Original Concepts in Development | Beyond client production, OpenGamer is building its own live casino and product concepts. | ELEMENTALS — "Premium Live Casino Show Game Concept" → `/portfolio/elementals`; LC App — "B2B Social Engagement Layer for Live Casino" → `/portfolio/lc-app` | View Portfolio | Character render + device mockup |
| 5. Live Casino Development | Technology | Live Casino Development | Original live casino product design — table games, show formats and studio UX. | (3–4 pulled from §4 capability groups) | View Live Casino Development | Show-game render |
| 6. Technology | Technology | Technology Behind Every Title | (unchanged) | Existing architecture steps | Explore Our Technology | Architecture diagram |
| 7. Process | Process | Development Process | (unchanged, 8-phase) | — | — | Process stepper |
| 8. Partnership Models | Partnership Models | Ways to Work Together | (unchanged, 6 models) | — | — | Model cards |
| 9. Why OpenGamer | Why OpenGamer | Built for Long-Term B2B Delivery | (unchanged, 8 points) | — | — | Checklist grid |
| 10. Final CTA | Let's Build the Right Product Together | (unchanged) | — | Discuss a Project | — |

Only one new section required (Proprietary Projects) — insert after Featured Games, before Live Casino Development. Do not overcrowd further.

---

## 10. Navigation and Footer

**Main nav (final):** Home · Services · Games · Portfolio · Technology · About · Contact — insert "Portfolio" between "Games" and "Technology."
**Mobile nav:** same order, drawer pattern already in use; Contact as filled CTA button.
**Footer Company column:** Home, Services, Live Casino Development, Games, Portfolio, Technology, About, Contact.
**Footer Legal column:** unchanged (Privacy Policy, Terms of Use, Cookie Policy).
**Footer Connect:** unchanged (LinkedIn, Instagram, YouTube, Facebook).

---

## 11. Contact Form — `serviceOfInterest`

Grouped, ordered list (replace existing 8-item flat list):

**Game Production:** Custom Slot Development · Turnkey Slot Development · Front-End Development · Back-End Development · Game Art Production · Mathematics & Game Design
**Technology & Integration:** RGS Development · Game Integration
**Portfolio Services:** White Label Games · Reskin Services · Legacy Game Modernization
**Quality & Support:** Quality Assurance · Certification Support · Live Operations
**Strategic Development:** Technical Consulting · Dedicated Development Team · AI-Assisted iGaming Workflows
**Live Casino:** Live Casino Development · Live Show Game Development · Live Casino UX · Studio Product Design · Presenter Experience Design
**Portfolio Partnerships:** ELEMENTALS Partnership · LC App Partnership
**Other:** Other

Keep existing form fields (Company type, Project stage, Budget range, etc.) unchanged — only the `serviceOfInterest` option list and grouping change.

---

## 12. SEO Pack

| Route | SEO title | Meta description | H1 | Primary keyword | Secondary keywords | Canonical | Structured-data type |
|---|---|---|---|---|---|---|---|
| / | Slot Game Provider \| OpenGamer Studio | OpenGamer designs, develops and delivers casino games and gaming technology for operators, aggregators and platform providers. | Casino Game Development and RGS Technology | iGaming development studio | slot game development, RGS technology | / | Organization |
| /services | Services \| OpenGamer Studio | Custom slot game development, RGS development, casino game integration, art production and dedicated iGaming development teams. | Full-Cycle iGaming Development Services | iGaming development services | slot development, game art, RGS | /services | Service |
| /services/live-casino-development | Live Casino Development \| OpenGamer Studio | Original live casino and show-game design — concept, mathematics, live UX and studio product design for operators and providers. | Live Casino Development | live casino development | show game design, live casino UX | /services/live-casino-development | Service |
| /games | Slot Games \| OpenGamer Studio | Explore OpenGamer's portfolio of live slot titles built for operators, aggregators and platforms. | Game Portfolio | slot game portfolio | HTML5 slots, casino games | /games | CollectionPage |
| /games/dragon-rush | Dragon Rush \| OpenGamer Studio | A dragon-themed slot title from the confirmed OpenGamer portfolio. | Dragon Rush | Dragon Rush slot | OpenGamer slot games | /games/dragon-rush | Game (if supported) / WebPage |
| /portfolio | Portfolio \| OpenGamer Studio | Games, live casino formats and product concepts from OpenGamer Studio. | Portfolio | OpenGamer portfolio | live casino concepts, slot portfolio | /portfolio | CollectionPage |
| /portfolio/elementals | ELEMENTALS \| Premium Live Casino Show Game — OpenGamer | ELEMENTALS is a premium Live Casino show game concept built around four elemental realms and the Great Wheel. In development. | ELEMENTALS | ELEMENTALS live casino | show game, elemental wheel game | /portfolio/elementals | WebPage |
| /portfolio/lc-app | LC App \| B2B Social Layer for Live Casino — OpenGamer | LC App is a B2B social engagement layer for existing Live Casino operators and providers. Product concept. | LC App | LC App live casino | B2B social layer, live casino engagement | /portfolio/lc-app | WebPage |
| /technology | Technology \| OpenGamer Studio | RGS development, casino game integration, game session handling, wallet communication, reporting and monitoring. | Casino Game Technology from Client to Operation | RGS technology | wallet integration, game session handling | /technology | WebPage |
| /about | About \| OpenGamer Studio | OpenGamer is a full-cycle iGaming development studio built for long-term B2B technology partnerships. | A Full-Cycle Studio Built for Long-Term Partnerships | iGaming development studio | studio leadership, B2B partnership | /about | AboutPage |
| /contact | Contact \| OpenGamer Studio | Contact OpenGamer to discuss custom slot game development, RGS technology, casino game integration or a dedicated iGaming development team. | Tell Us What You Want to Build | contact iGaming studio | project request, dedicated team | /contact | ContactPage |
| /privacy-policy | Privacy Policy \| OpenGamer Studio | (existing legal copy — unchanged) | Privacy Policy | — | — | /privacy-policy | WebPage |
| /terms-of-use | Terms of Use \| OpenGamer Studio | (existing legal copy — unchanged) | Terms of Use | — | — | /terms-of-use | WebPage |
| /cookie-policy | Cookie Policy \| OpenGamer Studio | (existing legal copy — unchanged) | Cookie Policy | — | — | /cookie-policy | WebPage |

---

## 13. Asset Inventory

| Route | Section | Required asset | Available source | File type | Recommended dimensions | Status | Notes |
|---|---|---|---|---|---|---|---|
| Global | Brand | Logo, favicon, brand marks | prototype `/assets/brand/` | webp/svg | existing | Available | Reuse as-is |
| Global | OG default | Default OG image | prototype `/assets/brand/opengamer-og.png` | png | 1200×630 | Available | Reuse |
| /games/sweet-wins | Hero | Artwork | prototype `/assets/games/sweet-wins/artwork.webp` | webp | existing | Available | — |
| /games/forest-fortune | Hero | Artwork | prototype `/assets/games/forest-fortune/artwork.webp` | webp | existing | Available | — |
| /games/deep-dive | Hero | Artwork | prototype `/assets/games/deep-dive/artwork.webp` | webp | existing | Available | — |
| /games/choco-boom | Hero | Artwork | prototype `/assets/games/choco-boom/artwork.webp` | webp | existing | Available | — |
| /games/fruit-elixir | Hero | Artwork | prototype `/assets/games/fruit-elixir/artwork.webp` | webp | existing | Available | — |
| /games/passion-paradise | Hero | Artwork | prototype `/assets/games/passion-paradise/artwork.webp` | webp | existing | Available | — |
| /games/dragon-rush | Hero | Artwork | official OpenGamer website, approved for local migration to `/public/assets/games/dragon-rush/artwork.webp` | webp | preserve best available source resolution | Resolved for implementation | Do not publish RTP, volatility, format, mechanics, release date or certification until verified and approved |
| /portfolio/elementals | Hero, Dealer-Host | Guardian character render | brochure page 14 | png (extract) | 1200×1200 | Available | Extract from brochure PDF |
| /portfolio/elementals | Great Wheel | Wheel concept render | brochure (referenced, not separately rendered) | — | — | Missing | Recommend abstract SVG/CSS wheel diagram until real art exists |
| /portfolio/elementals | 4 Realms + Nexus | Realm concept art ×5 | none | — | — | Missing | Use abstract elemental color-coded diagrams (Fire/Water/Earth/Air) as placeholder, not fake gameplay screenshots |
| /portfolio/elementals | OG | OG image | none | png | 1200×630 | Missing | Compose from Guardian render + wordmark |
| /portfolio/lc-app | Hero, Concept | Device/UI mockups | none | — | — | Missing | Use conceptual device-frame mockups / abstract UI wireframes, not fake screenshots |
| /portfolio/lc-app | OG | OG image | none | png | 1200×630 | Missing | Compose from device mockup + wordmark |
| / | Proprietary Projects | ELEMENTALS + LC App thumbnails | reuse above | — | — | Partially missing | ELEMENTALS thumbnail available (Guardian render); LC App thumbnail missing |
| /services/live-casino-development | Various | Diagrams (architecture, studio floor plan, broadcast composition) | none | svg | — | Missing | Build as abstract SVG/CSS diagrams, no stock imagery |

Do not source generic stock photography for any missing asset — use approved project art, diagrams, or abstract SVG/CSS visuals only.

---

## 14. Codex Implementation Handoff

**Files likely to change:**
`app/(site)/portfolio/page.tsx` (new), `app/(site)/portfolio/elementals/page.tsx` (new), `app/(site)/portfolio/lc-app/page.tsx` (new), `app/(site)/services/live-casino-development/page.tsx` (new), `app/(site)/games/dragon-rush/page.tsx` (new), `content/games.ts` (extend), `content/services.ts` (extend/confirm 15 vs "16" copy), `content/nav.ts` / nav component (add Portfolio), `components/Footer.tsx` (add Live Casino Development + Portfolio links), `app/(site)/contact/page.tsx` or form-config file (replace `serviceOfInterest` list), `app/(site)/page.tsx` (insert Proprietary Projects section), `app/sitemap.ts` (add new routes), metadata/SEO config per new route.

**Routes to add:** `/portfolio`, `/portfolio/elementals`, `/portfolio/lc-app`, `/services/live-casino-development`, `/games/dragon-rush`.

**Typed content files to create/update:** `content/games.ts` (add dragon-rush entry; keep rtp/volatility/format fields optional), `content/portfolio.ts` (new — elementals + lc-app entries with sections from §5/§6), `content/services.ts` (confirm 15-item structure matches §3), `content/contactOptions.ts` (grouped serviceOfInterest per §11).

**Reusable components needed:** Section-with-eyebrow-heading-copy (already exists, reuse), capability bullet-card grid (exists, reuse), portfolio category card (new — for `/portfolio`), realm/element card (new — for ELEMENTALS), device-frame mockup component (new — for LC App), FAQ accordion (new — for Live Casino Development page).

**Navigation changes:** insert "Portfolio" between "Games" and "Technology" in both desktop and mobile nav; footer Company column add "Live Casino Development" and "Portfolio."

**Sitemap changes:** add the 5 new routes to `app/sitemap.ts` / sitemap.xml generation.

**Contact-form changes:** replace flat 8-item `serviceOfInterest` select with grouped 25-item list from §11 (use `<optgroup>` or equivalent grouped-select pattern); no other field changes.

**Asset folders:** `/assets/games/dragon-rush/`, `/assets/portfolio/elementals/`, `/assets/portfolio/lc-app/` — create; populate per §13.

**Smoke-test routes:** `/`, `/services`, `/services/live-casino-development`, `/games`, `/games/dragon-rush`, `/portfolio`, `/portfolio/elementals`, `/portfolio/lc-app`, `/contact`.

**Visual-QA routes:** `/portfolio/elementals` (tone check: premium/cinematic, not carnival), `/portfolio/lc-app` (no fake screenshots), `/` (Proprietary Projects section doesn't overcrowd hero-to-footer flow), `/contact` (grouped dropdown renders correctly on mobile).

**Acceptance criteria:**
1. All 5 new routes render with content matching §3–§8 exactly (no placeholder lorem ipsum).
2. No RTP/volatility/format/mechanics/certification claims appear anywhere for ELEMENTALS, LC App, or games pending the founder decision in §7.
3. Nav and footer include Portfolio and Live Casino Development links on every page.
4. Contact form `serviceOfInterest` shows all 25 grouped options.
5. Sitemap.xml includes all new routes with correct canonicals from §12.
6. No stock photography used for missing ELEMENTALS/LC App assets — abstract/diagram/device-mockup treatments only.
7. Numeric discipline-count copy is removed and replaced with "Full-Cycle Capabilities. One Studio."

---

## 15. Remaining Factual Inputs (Founder decisions required)

1. **Discipline-count copy** — resolved: remove numeric discipline-count claims and use "Full-Cycle Capabilities. One Studio."
2. **Game metadata (RTP, volatility, format, max win)** — open-gamer.com already publishes these; prototype withholds them. Decide: publish on new site or keep withheld.
3. **Fruit Elixir / Passion Paradise line variants** — open-gamer.com lists multiple line-count SKUs (5/10/20/40L) per theme; decide whether the new site shows one canonical entry per theme (as brief specifies) or all variants.
4. **Dragon Rush artwork** — resolved for implementation: official OpenGamer website artwork is approved for local migration to `/public/assets/games/dragon-rush/artwork.webp`.
5. **ELEMENTALS realm and Nexus art** — no confirmed visual assets beyond the Guardian character render; needed before publishing realm sections with real imagery instead of abstract placeholders.
6. **LC App visual assets** — no confirmed UI, device mockups, or brand treatment exist yet.
7. **Brochure-only timeline and RTP claims** — fixed integration, certification-cycle and RTP-band figures are not reflected on the live Technology page; confirm whether these are safe to publish site-wide or should stay brochure-only.
## Owner Decisions

1. Remove all numeric discipline-count claims. Use:
   “Full-Cycle Capabilities. One Studio.”

2. Publish game RTP, volatility and format only after verifying exact values against the official OpenGamer website. Omit unverified fields.

3. Use one catalogue entry per game theme. Fruit Elixir and Passion Paradise line variants may be listed inside the detail page only if verified.

4. Dragon Rush artwork from the official OpenGamer website is approved for local migration.

5. ELEMENTALS must use approved artwork plus abstract SVG/CSS visuals only. Do not create fake gameplay screenshots.

6. LC App must use conceptual diagrams and device frames only. Do not present them as finished product screenshots.

7. Do not publish:
   - fixed integration timing
   - fixed certification-cycle timing
   - always-on support coverage
   - general RTP-band claims

8. Use “OpenGamer RGS” unless legal ownership language is explicitly confirmed.

9. Do not use unsupported terms such as:
   - certification-complete integration wording
   - contractual support-level wording
   - lab-readiness shorthand
   - guaranteed certification

10. LC App status:
    “Product Concept — In Development.”

11. ELEMENTALS partnership positioning:
    studio, provider and co-development partnerships.
