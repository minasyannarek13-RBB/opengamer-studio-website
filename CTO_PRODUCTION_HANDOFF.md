# CTO Production Handoff

This file records production-facing handoff notes for the latest verified OpenGamer website descendants. Historical site passes remain documented in `SITE_UPGRADE_CHANGELOG.md`.

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
