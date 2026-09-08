# CTO Production Handoff

This file records production-facing handoff notes for the latest verified OpenGamer website descendants. Historical site passes remain documented in `SITE_UPGRADE_CHANGELOG.md`.

## 2026-09-08 15:38 +04 — Route Social Preview Integrity

Branch: `design/page-social-preview-polish-20260908-r11`  
Parent: `design/social-preview-integrity-polish-20260908-r10` at `02953ab1718fa5f876759a783d51121241feb9c8`  
Functional head before this handoff note: `33a60f5db7d856f74dc83495835811ba76cd54d7`

### Purpose

Improve B2B link sharing beyond the homepage so key OpenGamer routes carry page-specific Open Graph/Twitter presentation rather than relying on generic inherited social metadata.

### Changes

- Added dedicated social metadata layouts for About, Contact, Services, Technology and Portfolio using the approved 1200x630 OpenGamer brand preview.
- Added a product-specific ELEMENTALS visual preview for Live Casino Development.
- Added product-specific Twitter/X preview metadata for ELEMENTALS and LC App while keeping their existing page-level Open Graph metadata authoritative.
- Added `scripts/social-preview-tests.mjs` and wired it into the existing pre-build production-integrity gate.
- The new gate verifies dedicated route URL/image metadata, Open Graph + Twitter coverage for key commercial routes, and product-specific Twitter preview assets for ELEMENTALS/LC App.
- No public body copy, product claims, dependencies, production aliases, domains or production configuration were changed.

### QA

- Git compare against r10: ahead 10 / behind 0 before this handoff commit; only route metadata layouts, the social-preview test and package test wiring changed.
- Earlier incremental r11 Vercel previews for About and Services reached READY with preview `X-Robots-Tag: noindex` preserved.
- Final branch-head Vercel/build verification is required before promotion; do not treat an earlier incremental preview as head verification.

### Production Instructions

1. Carry the route metadata layouts and `scripts/social-preview-tests.mjs` forward together.
2. Keep authentic OpenGamer brand/product imagery as social-card evidence; do not substitute generated visuals that imply shipped functionality.
3. Re-run the complete production-integrity/build gate and verify rendered OG/Twitter metadata on the final branch-head preview before any promotion.
4. Keep preview noindex protection intact.
5. Do not alter `v2-current`, `main`, production aliases, domains or production configuration without explicit founder approval.

## 2026-09-08 14:50 +04 — Homepage Social Preview Integrity Gate

Branch: `design/social-preview-integrity-polish-20260908-r10`  
Parent: `design/final-visual-conversion-polish-20260908-r9` at `2946eaac979a70d092ae5fb26cc2c0cb29f8c516`  
Functional head: `be4f0aa32e8d28c90841fce428e09a570c26bb99`

### Purpose

Protect the homepage's commercial presentation when OpenGamer links are shared on LinkedIn, X and messaging platforms by making the large social preview image explicit at page level and preventing future metadata regressions.

### Changes

- Added explicit homepage Open Graph image metadata using `/assets/brand/opengamer-og.png` at `1200x630` with an `OpenGamer Studio` alt label.
- Added explicit homepage Twitter/X image metadata while retaining `summary_large_image`.
- Added a production-config regression test that fails if the homepage loses the approved social preview asset, required 1200x630 dimensions, Open Graph image binding or Twitter image binding.
- No public body copy, product claims, visual assets, dependencies, production aliases, domains or production configuration were changed.

### QA

- Vercel deployment `dpl_CgMaoEoo6ZhwPfq6n3M1k4CuGWLY` built functional head `be4f0aa32e8d28c90841fce428e09a570c26bb99` and reached `READY`.
- Production integrity suite: `10/10 PASS`, `0 fail`, including the new social-preview metadata gate.
- Asset-delivery suite: `2/2 PASS`, `0 fail`.
- Next.js optimized production compile: PASS.
- Lint/type validation: PASS.
- Static generation: `93/93 PASS`.
- Preview root returned HTTP `200`.
- Deployed HTML confirms `og:image=https://open-gamer.com/assets/brand/opengamer-og.png` with `1200x630`, plus `twitter:image` pointing to the same approved asset.
- Preview protection remains HTML `noindex, nofollow` plus `X-Robots-Tag: noindex`.

### Production Instructions

1. Carry the explicit homepage Open Graph/Twitter image metadata and its production-config test forward together.
2. Keep `/assets/brand/opengamer-og.png` as the default homepage social image unless a founder-approved 1200x630 replacement is intentionally introduced.
3. After eventual production promotion, refresh/test LinkedIn and other social caches against the production URL before relying on the card publicly.
4. Continue the existing `.vercelignore`, production-integrity and asset-delivery gates unchanged.
5. Do not alter `v2-current`, `main`, production aliases, domains or production configuration without explicit founder approval.

## 2026-09-08 13:18 +04 — Slot Asset Delivery / Regression Gate

Branch: `design/final-visual-conversion-polish-20260908-r9`  
Parent: `design/asset-delivery-polish-20260908-r8` at `ff9e89e1cfb3453ba0352b85b898dbe5af597722`  
Functional head: `d29197f984d72e659c83c845bd96bf8a252c6380`

### Purpose

Continue the full visual-asset audit by removing confirmed redundant slot source artwork from the Vercel delivery payload while preserving authentic source files in Git and preventing future public-source regressions.

### Changes

- Added 11 confirmed redundant slot JPG/source files to `.vercelignore`; their optimized or otherwise selected public counterparts remain in use.
- The 11 newly excluded slot files total 3,838,035 bytes (~3.66 MiB) in Git. Vercel confirmed they are removed before build.
- Added `scripts/asset-delivery-tests.mjs` to recursively scan `app/`, `components/`, `content/` and `lib/` and fail if any deployment-excluded visual asset becomes publicly referenced.
- Added a second asset-delivery contract test that verifies every excluded visual path remains present in `.vercelignore`.
- Extended the existing production-config build gate so both the prior 9 integrity tests and the new 2 visual-asset delivery tests execute before every Next.js build.
- Preserved current public visuals, responsive behavior and factual boundaries. No AI-generated imagery was introduced because authentic OpenGamer/ELEMENTALS/LC App assets remain preferable for the current public surfaces.
- Did not exclude variant/title artwork that lacks a verified optimized replacement.

### QA

- Vercel deployment `dpl_7DcSNHA4KiUGSkNqwgFD1gdBWVC6` built functional head `d29197f984d72e659c83c845bd96bf8a252c6380` and reached `READY`.
- Vercel found `.vercelignore` and removed 17 configured visual files before build (the six prior LC App source files plus the 11 slot source/archive files).
- Existing production integrity suite: `9/9 PASS`, `0 fail`.
- New asset-delivery suite: `2/2 PASS`, `0 fail`.
- Next.js optimized production compile: PASS.
- Lint/type validation: PASS.
- Static generation: `93/93 PASS`.
- Runtime warning/error/fatal check: no entries.
- Preview root returned HTTP `200` and retained both HTML `noindex, nofollow` metadata and `X-Robots-Tag: noindex`.
- Runtime HTML confirms the homepage key game visuals use optimized WebP assets for Forest Fortune, Deep Dive, Dragon Rush and Sweet Wins.

### Production Instructions

1. Carry `.vercelignore`, `scripts/production-config-tests.mjs`, `scripts/asset-delivery-tests.mjs` and the pre-build integrity gate forward together.
2. Do not reintroduce an excluded visual path into public source. If an archived source asset is needed publicly, first create/verify a production-appropriate optimized asset and update the delivery contract intentionally.
3. Do not exclude Fruit Elixir/Passion Paradise variants, The Aztecs, Rich or Dead or other title assets unless a verified replacement exists and the source scan passes.
4. Keep authentic source artwork in Git unless a separate repository-storage cleanup is explicitly approved.
5. Re-run deployed responsive visual QA at 390/430/768/1024/1280/1440/1920 before founder-approved production promotion.
6. Do not alter `v2-current`, `main`, production aliases, domains or production configuration without explicit founder approval.

## 2026-09-08 12:16 +04 — Asset Delivery / Build Integrity Gate

Branch: `design/asset-delivery-polish-20260908-r8`  
Parent: `design/conversion-integrity-polish-20260908-r7` at `322b41ed9214ee831a62d8731c48632bdde2e6f9`  
Functional head: `58b541e81c502c3ca55ea31ac89e4fcf1758dbf1`

### Purpose

Reduce deployment waste and prevent public code from silently regressing to superseded multi-megabyte LC App source assets.

### Changes

- Kept the six authentic high-resolution LC App source files in Git for archival/editing use, but excluded them from Vercel deployment through `.vercelignore`.
- Public pages continue to use the optimized LC App variants under `public/assets/projects/lc-app/optimized/`.
- Removed roughly 11.2 MB of redundant raw LC App assets from the preview deployment payload without changing public visuals.
- Added production-integrity tests that recursively scan `app/`, `components/`, `content/` and `lib/` and fail if public source reintroduces one of the excluded heavy asset URLs.
- Added a test that verifies the Vercel ignore contract for all six raw files.
- Changed the Vercel build path to run `pnpm test:production-config` before `next build`, so factual/config/lead-delivery and asset-delivery invariants now hard-gate every preview build.
- No generated imagery, new public claims, dependency changes or production configuration changes were introduced.

### QA

- Vercel deployment `dpl_2MRuE4QbBEC1Tt9yzVkjhaNxWZsA` built functional head `58b541e81c502c3ca55ea31ac89e4fcf1758dbf1` and reached `READY`.
- Vercel explicitly removed all six configured raw LC App assets before build.
- Production integrity suite: `9/9 PASS`, `0 fail`.
- Next.js optimized production compile: PASS.
- Lint/type validation: PASS.
- Static generation: `93/93 PASS`.
- Runtime warning/error/fatal check: no entries.
- Preview protection remains `X-Robots-Tag: noindex`.
- Optimized LC App device ecosystem asset was verified available on the preceding READY r8 preview at 101,326 bytes; functional head references the same optimized path and passed the public-source regression test.

### Production Instructions

1. Carry `.vercelignore`, `scripts/production-config-tests.mjs` and the pre-build integrity gate forward together.
2. Do not reintroduce the excluded raw LC App paths into public source. If a source image must return to a public page, create/verify an optimized public variant first.
3. Keep the high-resolution originals in Git unless a separate repository-cleanup decision is made; this pass intentionally changes deployment delivery, not source ownership.
4. Re-run deployed responsive visual QA at 390/430/768/1024/1280/1440/1920 before founder-approved production promotion.
5. Do not alter `v2-current`, `main`, production aliases, domains or production configuration without explicit founder approval.