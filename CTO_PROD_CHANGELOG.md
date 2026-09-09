# CTO Production Handoff

Current release-candidate handoff for the OpenGamer website. Git history is the archive for superseded implementation notes; this file intentionally tracks only the current production-relevant state.

Production/DNS/domain aliases/secrets/environment variables are not changed by this branch.

## Current branch

- Branch: `build/contact-conversion-handoff-20260908`
- Baseline lineage: `v2-current`
- Production domain: do not change without explicit founder approval.
- Deployment policy: do not deploy every intermediate commit. Finish coherent code/page passes, run QA, then create one release-candidate preview.

## Current product status rules

- Verified public game demo → `Playable` / `Play Demo`.
- Confirmed game without public demo → `Portfolio Title` / `No public demo` / commercial discussion CTA.
- Confirmed in-development game → `In Development`.
- LC App: in-development B2B product direction; not a launched production application.
- ELEMENTALS: original Live Casino IP in development; not launched/certified/integrated unless later confirmed.
- RGS-related engineering does not imply ownership of a proprietary RGS/platform or certification.
- Do not claim unconfirmed licenses, certifications, clients, partnerships, integrations, pilots, revenue or metrics.

## Current implementation passes

### Homepage

Rebuilt around buyer clarity, playable game proof, separate ELEMENTALS/LC App product directions, delivery flow and a concise commercial closing CTA.

Key implementation lineage includes:
- `7df6506ac0a5a8b65af8de23f9561bb9480095a2` — homepage hero rebuild.
- `c48925fd7837d74938dfd7b2f952806fcdbafbd4` — engagement-path screen.
- `d304bf95a15e93ff020c0f80be1e47249e13987d` / `f60b63df03926c743f75df25e849560b5edf8f2f` — playable-work proof and asset correction.
- `38908afeb5868703d5a5f0799d207f9d12c3bb77` — original-IP/product-directions showcase.
- `4bb638f770f7138acd81702f6b936c9cda693061` — delivery flow.
- `7bc700249808773a9a8800824b1310a96a7c7709` — final homepage CTA pass.

### Services

Buyer-oriented engagement routes plus detailed game production, technology/integration, portfolio/product, Live Casino and dedicated-delivery sections. Product proof is embedded where relevant rather than repeated as a generic lower gallery.

Recent implementation lineage includes:
- `6fc2de705fb8a0e6bb3821ab26b836007b8b18e2`
- `2a7e559eeeebf0f94dd2e431b22be57c052185b5`
- `081258c88da0b4d04f6646980cc6f7eb96b3567a`
- `e1ddacece1a14036cf3151749cb56b0b08df5295`
- `fd7ba91cff2980ff55cbe1c1447be735ce5a9812`
- `339ea1241f0b59f810bf15d182746d85fedda959`
- `ebf0fe107ed7842523d3abd0d2f3ee6efe400888`

### Technology

Technology page now explains game-client, service, RGS-related, partner-connectivity and release layers; frontend/backend roles are visually separated; architecture boundaries and partner dependencies are explicit; workflow and engagement models are delivery-oriented.

Recent implementation lineage includes:
- `2a3505a828680d4937232a9f4ad29cfd72eb9311`
- `deb2eb01f8839d5502a65aae4a08b29bb8b0386d`
- `b74491687ab4a41f97131318645e7b46e2426d32`
- `1954355c66b6d4136ebf37b6cdc5e8acd21b837d`

### Portfolio

Portfolio differentiates three proof types rather than presenting one generic grid: playable games, ELEMENTALS original IP and LC App product/interface work. Game proof mixes playable titles and portfolio-only titles.

Recent implementation lineage includes:
- `2441126da61386f07c8e836e82c7cd5b668b29d5`
- `0dc9056fd7d2ac43e987b8983042947b6afe7c4c`

### About

About is credibility/delivery-first rather than another product gallery. It explains studio responsibility, engagement modes and operating principles with product proof kept secondary.

Recent implementation:
- `3bac36591fecf96eb1855ecbe80541fef207fa0c`

### Contact

Contact is centered on commercial routing and the enquiry form. Repeated portfolio proof was removed; a short brief checklist and routing expectations remain.

Recent implementation:
- `f24b014d02a975034445db280663e9c750fe539d`

### Games and game detail

Catalogue distinguishes public-demo titles from portfolio-only titles without hiding either category.

Recent implementation:
- `99c9d07da66d5d524e94c046265c428b66954f74` — GameCard status/CTA model.
- `d81c4aedb86f9b8f446f6d53671c734c91e36e01` — catalogue filters.
- `5ba53a7e9889d2b4bd0d0d6e4aa887ad985e0119` — normalized portfolio-only wording.
- `94d50e24a11b674eaad8ff3354a3e0fe9f04bd44` — Games page mixed playable/portfolio proof.
- `ed7247e18b3c276a3d09a7a8972dbb2cd49fa5ee` — game detail template aligned with status model.

## Repository cleanup

The release branch intentionally removes superseded implementations and process snapshots so current code is easier to reason about.

Removed:
- old homepage generations: `GameProofRail`, `HeroGenesis`, `HeroGenesisMotionRoot`, `StudioHomepage`, `ProjectShowcaseSlider`, old hero visuals;
- stale QA/status/release snapshot documents;
- obsolete `WEBSITE_CONTENT_HANDOFF.md` and old visual/component/design-system implementation specs that described superseded architecture;
- redundant individual localized redirect wrappers now covered by the universal `[locale]/[...path]` compatibility redirect.

Keep as active root guidance:
- `README.md`
- `OPEN_GAMER_BRAND_GUIDELINES.md`
- this handoff file
- typed `content/` records and current implementation code

Do not restore deleted prototype/spec files solely because an older commit or document references them.

## Vercel cleanup note

The project contains many historical preview deployments from intermediate page passes and obsolete design branches. Current connector access can list but cannot delete deployments.

Before/after the final RC deployment:
- preserve production/domain aliases;
- preserve the final RC and at least one known-good rollback deployment;
- old preview deployments from obsolete design branches and intermediate commits can be removed from Vercel;
- do not use historical preview URLs as source-of-truth for current code.

## Final release gate

Before production port/merge:

1. `pnpm lint`
2. `pnpm typecheck`
3. `pnpm test`
4. `pnpm build`
5. responsive QA at minimum 390, 430, 1024, 1440 and 1920 widths
6. verify all referenced game/project images resolve and crops are intentional
7. verify `/games` playable vs portfolio-only states and all game detail CTAs
8. verify `/services`, `/technology`, `/portfolio`, `/about`, `/contact`
9. verify Header/Footer navigation, focus states and mobile navigation
10. verify contact intent/query routing and form submission behavior with approved environment variables
11. verify canonical metadata, OG metadata, sitemap, robots and security headers
12. verify locale compatibility redirects
13. confirm legal review status
14. create one fresh Vercel RC preview from the final tested head
15. only then decide production merge/alias/domain action

## Rollback

Prefer reverting the release commit or promoting a known-good deployment. After rollback verify homepage, games, contact, sitemap, robots and contact delivery.
