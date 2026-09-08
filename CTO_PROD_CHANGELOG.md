# OpenGamer CTO Production Handoff Changelog

## 2026-09-08 — Accessibility, schema and browser-security hardening
- Branch: `design/accessibility-metadata-polish-20260908-r15`
- Parent: `design/preview-indexing-integrity-polish-20260908-r14` @ `1582bc4a014bce83b4b8a25a7463310e08be68ef`
- Functional commit before handoff note: `44d6e099c8c5858d7faf17ef1bf8da2955fe5b65`
- Purpose: close non-visual production-quality gaps in document language handling, structured-data asset consistency and baseline browser protections.
- Changed: `app/layout.tsx`, `next.config.ts`, `package.json`, `scripts/locale-accessibility-tests.mjs`, `scripts/security-header-tests.mjs`.
- Accessibility: the root document now bootstraps supported route language (`en`, `ru`, `hy`, `es`, `pt`) before body parsing when such a localized route is present, while keeping the site statically generated.
- Structured data: `Organization.logo` now derives from the canonical `logoAsset.src` used by the site instead of a separately hard-coded logo path.
- Security: all routes now receive `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, and a restrictive `Permissions-Policy` for camera, microphone, geolocation and payment. CSP was intentionally not added without a nonce/hash design because a careless inline policy could break Next.js runtime scripts.
- Regression gates: new tests fail the build if the locale bootstrap/schema-logo contract or the baseline security-header contract regresses.
- QA: pre-build gates confirmed production-integrity `11/11 PASS`, asset-delivery `3/3 PASS`, social-preview `7/7 PASS`, locale/schema `2/2 PASS` on the incremental r15 build. Final branch-head deployment must additionally confirm the security-header `2/2` gate, full Next.js compile/lint/type/static generation, runtime headers and preview noindex before promotion.
- Production instruction: carry the layout, header config and both new test files together. Do not add CSP until script/style/image requirements are explicitly mapped. Do not alter `main`, `v2-current`, production aliases, domains or production configuration without founder approval.

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
