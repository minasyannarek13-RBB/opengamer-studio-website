# CTO Production Handoff Log

## 2026-09-08 11:21 +04 — Catalogue demo CTA lands on enquiry form

- **Status:** NEEDS CTO REVIEW
- **Baseline:** `v2-current` @ `697e1a3dbd0fa2fd33d4a62f09cd3dca3f10bc19`
- **Implementation commit:** `00527cb7ad235e555e12626824b298db69653ed1`
- **Purpose:** remove the remaining Games catalogue conversion leak for titles without a public demo.
- **Files/components changed:**
  - `components/sections/GameCard.tsx` — changes the fallback `Request Demo` CTA from `/contact?interest=game&game=<slug>` to `/contact?interest=game&game=<slug>#project-enquiry`.
- **User-visible effect:** visitors requesting access from a catalogue card now land directly at the existing enquiry form while the exact game slug and game-interest context remain preserved.
- **Technical rationale:** aligns catalogue-card behavior with the already-hardened game-detail CTA flow and reuses the existing Contact anchor/query handling; no new field, API contract, dependency, content claim or configuration is introduced.
- **Verification:** focused one-line href change on the current handoff branch; source query parameters are unchanged. New Vercel preview/build and repository lint/typecheck/test/build must be rechecked before production handoff; no local success is claimed in this run.
- **Env/migration/config dependency:** none.
- **Rollback:** revert `00527cb7ad235e555e12626824b298db69653ed1`.
- **CTO production action required:** on preview, choose a catalogue game without a public demo and confirm `Request Demo` lands on `#project-enquiry` with `interest=game&game=<slug>` intact; then run `lint`, `typecheck`, `test`, `build` and visual QA before port/merge. No DNS/alias/env action required.

## 2026-09-08 10:20 +04 — Permanent redirects for hidden locale paths

- **Status:** NEEDS CTO REVIEW
- **Baseline:** `v2-current` @ `697e1a3dbd0fa2fd33d4a62f09cd3dca3f10bc19`
- **Implementation commit:** `741c5d88ea3b6ca0688352641da5a623f0a08cf0`
- **Purpose:** make hidden locale-prefix routes canonical permanent redirects instead of temporary redirects.
- **Files/components changed:**
  - `app/[locale]/[...path]/page.tsx` — replaces Next.js `redirect()` with `permanentRedirect()` while preserving the exact destination mapping.
- **User-visible effect:** none in normal navigation; locale-prefixed legacy/hidden paths still resolve to the same canonical route, but crawlers and clients now receive a permanent redirect signal.
- **Technical rationale:** the current site intentionally hides locale-prefixed duplicates, so a permanent redirect better represents canonical URL intent and avoids treating those paths as temporary alternate locations. This focused change was already identified in the coordinated Site Improvement/QA branch `design/site-integrity-polish-20260908-r6` (`7104464`).
- **Verification:** exact one-file coordinated diff ported to the current build handoff branch. Destination construction is unchanged. New Vercel preview/build and repository lint/typecheck/test/build must be rechecked before production handoff; no local success is claimed in this run.
- **Env/migration/config dependency:** none.
- **Rollback:** revert `741c5d88ea3b6ca0688352641da5a623f0a08cf0`.
- **CTO production action required:** verify preview status; smoke-test `/en`, `/en/games` and another supported locale-prefixed path to confirm they permanently redirect to the corresponding canonical non-prefixed route; then run `lint`, `typecheck`, `test`, `build` and visual QA before port/merge. No DNS/alias/env action required.

## 2026-09-08 09:24 +04 — Sitemap freshness signal hygiene

- **Status:** NEEDS CTO REVIEW
- **Baseline:** `v2-current` @ `697e1a3dbd0fa2fd33d4a62f09cd3dca3f10bc19`
- **Implementation commit:** `94ba10978f1ad0c5ddc8edd817f1c6b65cbc5faa`
- **Purpose:** stop the sitemap from falsely reporting every public route and game page as modified at the exact time the sitemap is generated.
- **Files/components changed:**
  - `app/sitemap.ts` — removes runtime `lastModified: new Date()` while preserving route coverage, change-frequency hints and priority values.
- **User-visible effect:** none directly; search engines no longer receive a synthetic freshness timestamp for every URL on every sitemap request.
- **Technical rationale:** an always-current `lastModified` is not evidence of actual content modification and can degrade crawl/freshness signal quality. Omitting it is safer until the site has a truthful per-page content timestamp source.
- **Verification:** change is isolated to one optional `MetadataRoute.Sitemap` property; existing route generation and URL construction are unchanged. Prior handoff head `6298f17` has a successful Vercel deployment status and zero unresolved Vercel preview feedback. New head preview/build must be rechecked before production handoff. Container-side clone/test was unavailable in this run because the execution container could not resolve GitHub; no local lint/typecheck/test/build success is claimed.
- **Env/migration/config dependency:** none.
- **Rollback:** revert `94ba10978f1ad0c5ddc8edd817f1c6b65cbc5faa`.
- **CTO production action required:** verify the new preview/build, open `/sitemap.xml` and confirm all expected routes remain present without synthetic `lastmod`, then run repository `lint`, `typecheck`, `test`, `build` and visual QA before port/merge. No DNS/alias/env action required.

## 2026-09-08 08:19 +04 — Preserve game context through commercial CTAs

- **Status:** NEEDS CTO REVIEW
- **Baseline:** `v2-current` @ `697e1a3dbd0fa2fd33d4a62f09cd3dca3f10bc19`
- **Implementation commit:** `ad90e408fd06178504bf787e279da5027b5ae1d1`
- **Purpose:** remove a conversion/context leak on individual game pages so commercial enquiries retain the exact game the visitor was viewing.
- **Files/components changed:**
  - `app/games/[slug]/page.tsx` — introduces one canonical game-enquiry URL per detail page and routes `Request Demo`, hero `Discuss a Project`, and the bottom commercial CTA to `/contact?interest=game&game=<slug>#project-enquiry`; the portfolio CTA now also lands directly on the enquiry form.
- **User-visible effect:** visitors moving from a specific game into a commercial discussion land at the form instead of the top of Contact, and OpenGamer receives the selected game slug in the existing lead source context rather than losing it on some CTA paths.
- **Technical rationale:** reuses the current query/context capture already implemented by `LeadForm`; no new field, API contract, dependency, CRM behavior, content claim or production configuration is introduced.
- **Verification:** implementation is isolated to CTA href composition in the existing server-rendered game detail route; the existing `LeadForm` records `window.location.search` in `contextParameter`, so the game slug remains available to downstream lead handling. Vercel preview/build status for this new head must be rechecked before production handoff. Live `v2.open-gamer.com` equivalence is not claimed.
- **Env/migration/config dependency:** none.
- **Rollback:** revert `ad90e408fd06178504bf787e279da5027b5ae1d1`.
- **CTO production action required:** verify one demo-enabled and one request-demo game page on preview; confirm both hero CTA paths and the bottom `Discuss a Project` land on `#project-enquiry` with `interest=game&game=<slug>` preserved, then run repository `lint`, `typecheck`, `test`, `build`, and visual QA before port/merge. No DNS/alias/env action required.

## 2026-09-08 07:21 +04 — Homepage positioning + direct enquiry conversion

- **Status:** NEEDS CTO REVIEW
- **Baseline:** `v2-current` @ `697e1a3dbd0fa2fd33d4a62f09cd3dca3f10bc19`
- **Implementation commits:** `c059422b8ba32528f0348e42406976961f12b0a6`, `c42301b70a32446b101ce65f9de490855e5476d4`
- **Purpose:** sharpen the English homepage first impression around OpenGamer's existing game-production and engineering capabilities and remove friction between commercial CTAs and the enquiry form.
- **Files/components changed:**
  - `components/home/StudioHomepage.tsx` — ports the focused coordinated homepage pass from `design/full-site-polish-pass-20260908` commit `7970d60b21774c9ab976ae10f20f001b3ca48ee9`: clearer English hero/section positioning, stronger games/custom-production CTA labels, form-anchor links and keyboard focus treatment for hero proof tiles.
  - `app/contact/page.tsx` — adds the missing `#project-enquiry` target with scroll offset and routes the three enquiry cards directly to that target while preserving existing `interest` query preselection.
- **User-visible effect:** visitors get a clearer B2B statement of what OpenGamer builds, a simpler games/capabilities narrative, and commercial CTAs now land at the relevant enquiry form instead of only changing the contact URL.
- **Technical rationale:** ports the strongest focused change from the coordinated site-improvement branch instead of introducing a competing redesign, then closes an integration gap in that branch where homepage CTAs referenced an anchor that did not exist. No dependency, API contract, lead-delivery, DNS, secret, env, migration or production-config change.
- **Verification:** authoritative `v2-current` baseline remains unchanged at `697e1a3`; prior handoff head `a34f44d` has green Vercel status. Vercel preview for implementation head `c42301b` was **pending** at log time. Live `v2.open-gamer.com` could not be fetched by the available web runtime in this run, so no live-deployment equivalence is claimed.
- **Rollback:** revert `c42301b70a32446b101ce65f9de490855e5476d4` and `c059422b8ba32528f0348e42406976961f12b0a6`.
- **CTO production action required:** review the preview at homepage + `/contact` on mobile and desktop; verify hero CTA, game-production/portfolio CTAs and all three contact intent cards land on `#project-enquiry` and preserve service-interest preselection; then run repository `lint`, `typecheck`, `test`, `build` and the visual-QA command before port/merge. No DNS/alias action required.

## 2026-09-08 06:23 +04 — Portable full-site visual QA coverage

- **Status:** NEEDS CTO REVIEW
- **Baseline:** `v2-current` @ `697e1a3dbd0fa2fd33d4a62f09cd3dca3f10bc19`
- **Implementation commit:** `d75c0d68e7a7bfbbf24ece88a1b2a70f31d0efa2`
- **Purpose:** make the existing Playwright visual-QA runner portable across developer/CTO environments and broaden regression coverage for the current v2 site before production handoff.
- **Files/components changed:**
  - `scripts/visual-qa.mjs` — removes machine-specific pnpm/node paths; allows `QA_DEPLOYED_BASE_URL`; adds live-casino, portfolio, ELEMENTALS and LC App routes; adds 1920/1280 desktop and 430 mobile widths; detects clipped text in addition to H1/overflow/broken-image/alt checks.
- **User-visible effect:** none directly; reduces the chance of shipping responsive, clipping or asset regressions across key public routes and makes the same QA command reproducible by the CTO instead of depending on one Mac filesystem.
- **Technical rationale:** ports the focused QA improvement from coordinated commit `08e7382f87fd9ae8f42d28399482f75c36ef93f9`. No application dependency, route implementation, API, content, DNS, secret, env contract or production configuration is changed; `QA_DEPLOYED_BASE_URL` is optional.
- **Verification:** exact coordinated QA implementation applied to the current build handoff branch. CI/preview for `d75c0d6` must be rechecked; the script itself should be run with the repository Playwright/browser setup before production merge.
- **Rollback:** revert `d75c0d68e7a7bfbbf24ece88a1b2a70f31d0efa2`.
- **CTO production action required:** run the repository install/bootstrap as usual, then execute the existing visual-QA command against local build and the intended preview by setting `QA_DEPLOYED_BASE_URL`; review `qa/screenshots/summary.json` and screenshots, then run `lint`, `typecheck`, `test`, and `build`. No DNS/alias action required.

## 2026-09-08 05:21 +04 — Legal-page production wording and responsive hardening

- **Status:** NEEDS CTO REVIEW
- **Baseline:** `v2-current` @ `697e1a3dbd0fa2fd33d4a62f09cd3dca3f10bc19`
- **Implementation commit:** `8e3d30d330d5e5aa23e0e14e21d35bcf412e592d`
- **Purpose:** remove internal pre-launch wording from public legal pages and harden the shared legal layout for narrow screens without changing legal section content.
- **Files/components changed:**
  - `components/pages/LegalPage.tsx` — removes the public sentence `Final legal review is required before production launch`, replaces it with neutral visitor/business-enquiry copy, and adds responsive heading/card sizing plus overflow-safe wrapping.
- **User-visible effect:** legal pages no longer expose internal launch-process language; headings, cards and long text wrap more safely on mobile while retaining the existing v2 visual identity.
- **Technical rationale:** ports the focused verified improvement from coordinated branch `design/content-responsive-polish-20260908` instead of duplicating a competing redesign. No dependency, route, API, legal-section-data or configuration change.
- **Verification:** exact focused diff from coordinated commit `63e6b2960cdc411a7a98269db174391158d2e1cd` applied to the current build handoff branch. CI/preview for implementation commit `8e3d30d` must be rechecked after this commit; no DNS, secrets, env, migration or production configuration changes.
- **Rollback:** revert `8e3d30d330d5e5aa23e0e14e21d35bcf412e592d`.
- **CTO production action required:** verify preview/CI, inspect `/privacy` and `/terms` (or all routes using `LegalPage`) at mobile + desktop widths, then run repository `lint`, `typecheck`, `test`, and `build` before port/merge. No DNS/alias action required.

## 2026-09-08 04:22 +04 — Error-state visual alignment and recovery paths

- **Status:** NEEDS CTO REVIEW
- **Baseline:** `v2-current` @ `697e1a3dbd0fa2fd33d4a62f09cd3dca3f10bc19`
- **Implementation head:** `d0fe1ed52b8628f099eb43bbb3586defa71d33c5`
- **Purpose:** bring 404/runtime error states into the current premium v2 visual system and reduce dead-end navigation.
- **Files/components changed:**
  - `app/error.tsx` — replaces bespoke retry button styling with shared `Button`, aligns card/background/typography with the current premium surface system, and adds `role="alert"`.
  - `app/not-found.tsx` — aligns 404 styling with the same system and adds direct recovery routes to Home and Games.
- **User-visible effect:** error and 404 pages now look consistent with the rest of the site; users hitting a bad route can continue to the game portfolio instead of facing a single dead-end action.
- **Technical rationale:** reuses existing `Button` and visual-system utilities, so no dependency, route, API or configuration change is introduced.
- **Verification:** diff was copied from the latest coordinated `design/verification-polish-pass-20260908` workstream commits and applied cleanly to the build handoff branch. Vercel check for implementation head `d0fe1ed` is **pending** at log time; no DNS, secrets, env, migration, lead API contract or production configuration changes.
- **Rollback:** revert `d0fe1ed52b8628f099eb43bbb3586defa71d33c5` and `a7035ae4544ffb1eaca403131750fac6c5810c8a`.
- **CTO production action required:** wait for/verify green preview status, smoke-test an invalid route plus an induced runtime error path where practical, then run repository `lint`, `typecheck`, `test`, and `build` before port/merge. No DNS/alias change is required.

## 2026-09-08 03:24 +04 — Contact conversion + localized proof/navigation

- **Status:** NEEDS CTO REVIEW
- **Baseline:** `v2-current` @ `697e1a3dbd0fa2fd33d4a62f09cd3dca3f10bc19`
- **Batch head:** `33c8898082cfe9bf6b3b6aca58aea9f2c40ebc05`
- **Purpose:** reduce enquiry friction and preserve localized commercial proof/navigation on top of the current v2 baseline.
- **Files/components changed:**
  - `app/contact/page.tsx` — adds three intent routes for game production, engineering/integration, and portfolio/partnership enquiries; improves contact copy and guidance.
  - `components/home/StudioHomepage.tsx` — localizes the homepage studio-proof section while keeping claims limited to visible portfolio/capabilities.
  - `components/layout/Header.tsx` — preserves localized navigation improvements from the coordinated design/QA workstream.
- **User-visible effect:** clearer first contact path, lower form ambiguity, localized proof copy, and more consistent localized navigation.
- **Technical rationale:** contact route query parameters map into the existing `LeadForm` service-interest logic, so the CTA path preselects the relevant enquiry category without adding dependencies or changing lead API behavior.
- **Verification:** GitHub/Vercel status for batch head `33c8898` = **success**. Diff vs `v2-current`: 3 files, +126/-17. No DNS, secrets, env, API contract, migration, or production configuration changes.
- **Rollback:** revert the four commits after `697e1a3` or reset the deployment to `v2-current` baseline `697e1a3`.
- **CTO production action required:** review preview/diff, run repository `lint`, `typecheck`, `test`, and `build` in the production environment, then port/merge this branch only if checks remain green. No DNS/alias change is required.