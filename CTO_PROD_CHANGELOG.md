# CTO Production Handoff

Current production-relevant state for the OpenGamer website. Git history is the archive for superseded implementation details.

## Current branch

- Branch: `build/contact-conversion-handoff-20260908`
- Baseline lineage: `v2-current`
- Last fully tested code head: `7e06037653d96db3d0a72caf5acc6854f10ea8c9`
- QA at that head: `pnpm lint` PASS; `pnpm typecheck` PASS; `pnpm test` PASS; `pnpm build` PASS.
- Production domain/DNS/aliases/secrets/env: unchanged.
- Deployment policy: do not deploy intermediate commits. Finish code + QA first, then create one fresh RC preview.

## Current architecture

Primary public routes:
- `/`
- `/games` and `/games/[slug]`
- `/services`
- `/technology`
- `/portfolio`
- `/portfolio/elementals`
- `/portfolio/lc-app`
- `/about`
- `/contact`
- legal routes

Legacy `/studios`, `/capabilities` and `/services/live-casino-development` are redirects only. Live Casino is part of `/services#live-casino`; do not restore a separate implementation.

Locale routes exist only as compatibility redirects to the canonical non-localized routes.

## Product and factual rules

- Verified public game demo → `Playable` / `Play Demo`.
- Confirmed title without public demo → `Portfolio Title` / `No Public Demo` / commercial discussion CTA.
- Confirmed in-development title → `In Development`.
- Homepage game proof derives artwork and demo status from the typed game catalogue instead of maintaining duplicate status data.
- ELEMENTALS: original Live Casino IP in development. Do not claim launch, certification, integration, studio operation or licensing unless confirmed.
- LC App: separate in-development B2B product concept. Do not present as a launched production application.
- RGS-related engineering does not imply ownership of a proprietary platform/RGS or certification.
- Never add unconfirmed clients, partners, pilots, licenses, certifications, revenue, metrics, approvals or production readiness.

## Current site state

- Homepage: buyer-first hero, catalogue-driven game proof, separate ELEMENTALS/LC App directions, delivery flow and commercial CTA; reduced-motion handling added to major hero interactions.
- Services: one canonical services surface covering game production, technology/integration, portfolio adaptation, Live Casino product scope and dedicated delivery.
- Technology: engineering stack, frontend/backend roles, architecture boundaries, partner dependencies, workflow and engagement models.
- Portfolio: separates playable games, original IP and product/interface work; supports playable and portfolio-only titles together.
- Games: mixed-status catalogue; non-public-demo titles remain visible without fake demo CTAs.
- Game detail: status-aware CTA behavior.
- About: credibility/delivery-first.
- Contact: routing + brief + enquiry form, without redundant portfolio showcase.
- ELEMENTALS and LC App detail pages: public-product narratives with explicit development status.

## Repository cleanup

Superseded homepage generations, legacy route wrappers, stale QA/status/release docs, obsolete design/component/sitemap/SEO planning docs, old homepage content sources, dead shared components and unreferenced duplicate assets have been removed from the working branch.

Active sources of truth:
- current implementation code
- typed `content/` records
- `README.md`
- `OPEN_GAMER_BRAND_GUIDELINES.md`
- this handoff

Test harnesses now execute current TypeScript sources rather than relying on deleted legacy homepage/asset assumptions.

Do not restore removed files because an older commit, preview or document references them.

## Vercel

Ignore Vercel during iterative development. The historical project contains obsolete preview deployments; current connector access can list but not delete them.

At RC time:
- preserve production/domain aliases;
- preserve the final RC and one known-good rollback deployment;
- remove obsolete branch/intermediate/error previews where possible;
- never treat an old preview URL as source-of-truth.

## Release gate

Before production merge/port:

1. `pnpm lint`
2. `pnpm typecheck`
3. `pnpm test`
4. `pnpm build`
5. responsive QA at 390 / 430 / 1024 / 1440 / 1920
6. verify image resolution/crops and all referenced assets
7. verify game statuses, catalogue filters and detail CTAs
8. verify Services/Technology/Portfolio/About/Contact/ELEMENTALS/LC App
9. verify legacy and locale redirects
10. verify Header/Footer, keyboard focus and mobile navigation
11. verify contact intent routing + submission with approved env
12. verify canonical/OG metadata, sitemap, robots and security headers
13. confirm legal review status
14. create one fresh Vercel RC preview from the exact tested head
15. only then decide production merge/alias/domain action

## Rollback

Prefer reverting the release commit or promoting one known-good deployment. After rollback smoke homepage, games, contact, sitemap, robots and lead delivery.
