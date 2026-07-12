# OpenGamer Studio Wireframe v1.0

Planning and implementation reference for the clickable website wireframe.

Scope:

- Placeholder structure only.
- No final marketing copy.
- No final images.
- No heavy animations.
- EN, RU and ES routes use the same page structure.

## Global Components

| Component | Usage |
| --- | --- |
| Header | Primary navigation, language switcher and portfolio CTA. |
| Footer | Secondary navigation and prototype note. |
| Hero | Page introduction and primary/secondary CTA pair. |
| Section | Shared vertical spacing and layout wrapper. |
| CTASection | Conversion blocks with portfolio/contact paths. |
| StudioCard | Clickable studio routing cards. |
| CapabilityCard | Capability and planning blocks. |
| PortfolioCard | Screenshot/content placeholders; strongest on Portfolio page. |
| TechnologyCard | RGS, RNG, API, frontend/backend and process blocks. |
| ContactBlock | Contact option and CTA placeholders. |
| LanguageSwitcher | EN/RU/ES route switching. |

## Page Wireframes

| Page | Sections | Component used | CTA | Notes |
| --- | --- | --- | --- | --- |
| Home | Hero; Three Main Studios; Portfolio Preview; Capabilities Overview; Technology Preview; Final CTA | Hero, StudioCard, PortfolioCard, CapabilityCard, TechnologyCard, CTASection | View Portfolio; Contact Us | Main entry page. Routes visitors to portfolio, studios and contact. |
| Studios | Hero; Studio Overview; Slot Studio Card; Live Casino Studio Card; Engineering Card; CTA | Hero, CapabilityCard, StudioCard, CTASection | View Portfolio; Contact Us | Hub page for the three studio paths. |
| Slot Studio | Hero; What We Build; Slot Portfolio Preview; Art & Visual Production; Development Capabilities; CTA | Hero, CapabilityCard, PortfolioCard, TechnologyCard, CTASection | View Portfolio; Contact Us | Uses portfolio cards strongly but does not add final game copy. |
| Live Casino Studio | Hero; Live Game Types; Show Game Concepts; Studio UX / Game Design; Product Capabilities; CTA | Hero, CapabilityCard, PortfolioCard, TechnologyCard, CTASection | View Portfolio; Contact Us | Capability structure only; no unsupported live casino claims. |
| Engineering | Hero; Custom iGaming Development; RGS / RNG; Frontend / Backend; API & Integrations; CTA | Hero, CapabilityCard, TechnologyCard, CTASection | View Portfolio; Contact Us | Technical buyer structure for architecture and integrations. |
| Capabilities | Hero; Game Design; Art & Animation; Mathematics; Frontend; Backend; RGS; RNG; QA / Integration; CTA | Hero, CapabilityCard, CTASection | View Portfolio; Contact Us | One section per capability for clean scanning. |
| Portfolio | Hero; Featured Slot Games; Art Gallery; Game Concepts; UI / UX Samples; Technology Samples; CTA | Hero, PortfolioCard, TechnologyCard, CTASection | Contact Us; View Technology | Strongest conversion page. Larger portfolio cards and repeated contact path. |
| Technology | Hero; RGS; RNG; Backend; Frontend; API; Production Pipeline; CTA | Hero, TechnologyCard, CTASection | View Portfolio; Contact Us | Technology visible but kept readable. |
| About | Hero; Company Positioning; What We Do; Who We Work With; How We Work; CTA | Hero, CapabilityCard, TechnologyCard, CTASection | View Portfolio; Contact Us | Company context without fake scale, clients or certifications. |
| Contact | Hero; Contact Options; Project Type Form; LinkedIn CTA; Email CTA | Hero, ContactBlock, ProjectTypeForm | View Portfolio; Contact Us | Static wireframe form and contact placeholders only. |

## Locale Support

| Language | Home | Route pattern |
| --- | --- | --- |
| English | `/` | `/{page}` |
| Russian | `/ru` | `/ru/{page}` |
| Spanish | `/es` | `/es/{page}` |

All wireframe sections are rendered through shared components and localized route helpers.

## Wireframe Rules

- Dark clean layout.
- Official and technological feel.
- Subtle casino-related accents only.
- Responsive structure for desktop, tablet and mobile.
- Clear navigation across all pages.
- Portfolio should remain visually strongest.
- Every page must keep `View Portfolio` and `Contact Us` paths visible.
- Use placeholders until final copy, images and proof points are approved.

