# OpenGamer CTO Production Handoff Changelog

## 2026-09-08 — Preview indexing integrity hardening
- Branch: `design/preview-indexing-integrity-polish-20260908-r14`
- Parent: `design/game-art-delivery-integrity-polish-20260908-r13` @ `6a04d59ed5200b9bb9464c969774de9e2ed5be41`
- Functional commit: `559619d0130481080fb1557bf8b68295154eceb2`
- Purpose: keep non-production previews fully isolated from search-engine discovery while preserving production sitemap behavior.
- Changed: `app/robots.ts`, `scripts/production-config-tests.mjs`.
- Behavior: when `isIndexableProduction` is false, `/robots.txt` returns `Disallow: /` with no sitemap reference. Production behavior remains `Allow: /` plus `${siteUrl}/sitemap.xml`.
- Regression gate: production-integrity tests now fail if the preview block advertises a sitemap or loses `Disallow: /`.
- QA: Vercel deployment `dpl_5bKTUxyMgD7oCo3DcHxKuW9L8tKF` reached READY; production-integrity `11/11 PASS`; asset-delivery `3/3 PASS`; social-preview `7/7 PASS`; Next.js compile/lint/type/static generation `93/93 PASS`; runtime warning/error/fatal = 0.
- Runtime verification: preview `/robots.txt` returns HTTP 200 with exactly `User-Agent: *` + `Disallow: /`, no sitemap, and response header `X-Robots-Tag: noindex`.
- Production instruction: carry the robots change and regression test together. Do not alter `main`, `v2-current`, production aliases, domains or production configuration without founder approval.
