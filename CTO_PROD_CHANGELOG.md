# CTO Production Handoff

Current production-relevant state for the OpenGamer website. Git history is the archive for superseded implementation details.

## Current branch

- Branch: `build/contact-conversion-handoff-20260908`
- Baseline lineage: `v2-current`
- Approved founder-review baseline: `2377d18231c1cbce379358972e9bc8d6bea25f2d`
- Baseline status: reviewed locally by Narek and accepted as the primary version for production preparation.
- Forward rule: later commits may improve defects and polish, but must not regress the approved baseline. Any regression versus this baseline blocks release.
- Production domain/DNS/aliases/secrets/env: unchanged.
- Deployment policy: never deploy to Vercel automatically. Prepare, test and review code first; deploy only after Narek explicitly approves the exact prepared version.

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

Legacy `/studios`, `/studios/capabilities`, `/capabilities` and `/services/live-casino-development` are redirects only. Live Casino is part of `/services#live-casino`; do not restore a separate implementation.

Locale routes exist only as compatibility redirects to the canonical non-localized routes.

## Product and factual rules

- Verified public game demo → `Playable` / `Play Demo`.
- Confirmed title without public demo → `Portfolio Title` / `No Public Demo` / commercial discussion CTA.
- Confirmed in-development title → `In Development`.
- Homepage game proof derives status, demo availability, artwork and descriptions from typed `content/games.ts`; do not reintroduce duplicate hardcoded status data.
- The approved Games state includes visible artwork for Captain Boom, Nuclear Blast, Wars of the Gods, Goblin Gems and Royal Fruits. Preserve this exact functional behavior in forward changes.
- ELEMENTALS: original Live Casino IP in development. Do not claim launch, certification, integration, studio operation or licensing unless confirmed.
- LC App: separate in-development B2B product concept. Do not present as a launched production application.
- RGS-related engineering does not imply ownership of a proprietary platform/RGS or certification.
- Never add unconfirmed clients, partners, pilots, licenses, certifications, revenue, metrics, approvals or production readiness.

## Current site state

- Homepage: first screen leads with the three buying intents — build casino games, extend delivery and solve a product gap — with restrained engagement signals. Hero proof is catalogue-driven; ELEMENTALS and LC App remain visibly separate in-development product directions.
- Services: one canonical services surface covering game production, technology/integration, portfolio adaptation, Live Casino product scope and dedicated delivery.
- Technology: engineering stack, frontend/backend roles, architecture boundaries, partner dependencies, workflow and engagement models.
- Portfolio: separates playable games, original IP and product/interface work; supports playable and portfolio-only titles together.
- Games: mixed-status catalogue; non-public-demo titles remain visible without fake demo CTAs. Approved portfolio-artwork state is release-critical.
- Game detail: status-aware CTA behavior.
- About: credibility/delivery-first.
- Contact: routing + brief + enquiry form, without redundant portfolio showcase.
- ELEMENTALS and LC App detail pages: public-product narratives with explicit development status.
- Accessibility: reduced-motion protection plus forced-colors focus/current/pressed visibility.

## Repository cleanup

Superseded homepage generations, legacy route wrappers, stale QA/status/release docs, obsolete design/component/sitemap/SEO planning docs, old homepage content sources, dead shared components and unreferenced duplicate assets have been removed from the working branch.

Active sources of truth:
- current implementation code
- typed `content/` records
- `README.md`
- `OPEN_GAMER_BRAND_GUIDELINES.md`
- this handoff

Do not restore removed files because an older commit, preview or document references them. A helper/component is not dead if current branch consumers or typecheck still require it.

## Release gate

Before production deployment:

1. Diff latest branch head against approved baseline `2377d18231c1cbce379358972e9bc8d6bea25f2d`; confirm only intentional forward fixes/polish.
2. `pnpm lint`
3. `pnpm typecheck`
4. `pnpm test`
5. `pnpm build`
6. responsive QA at 390 / 430 / 1024 / 1280 / 1440 / 1512 / 1920 where feasible
7. verify image resolution/crops and all referenced assets, especially approved portfolio artwork
8. verify game statuses, catalogue filters and detail CTAs
9. verify Services/Technology/Portfolio/About/Contact/ELEMENTALS/LC App
10. verify legacy and locale redirects
11. verify Header/Footer, keyboard focus, forced-colors and mobile navigation
12. verify contact intent routing + submission with approved env
13. verify canonical/OG metadata, sitemap, robots and security headers
14. confirm legal review status
15. founder review of the exact prepared candidate
16. Vercel deployment only after explicit founder approval
17. production smoke: `/`, `/games`, one game detail, `/services`, `/portfolio`, `/portfolio/elementals`, `/portfolio/lc-app`, `/contact`, sitemap/robots
18. only then decide production merge/alias/domain action

## Rollback

Approved rollback anchor: `2377d18231c1cbce379358972e9bc8d6bea25f2d`.

If a forward production candidate regresses, revert the release commit or return to the approved anchor. After rollback smoke homepage, games, contact, sitemap, robots and lead delivery.
