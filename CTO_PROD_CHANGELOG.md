# OpenGamer CTO Production Handoff Changelog

## 2026-09-08 — Portfolio commercial clarity and verified locale chain
- Branch: `design/portfolio-commercial-clarity-polish-20260908-r18`.
- Parent: `design/locale-canonical-integrity-polish-20260908-r17` @ `f68f1395333b1e2e7483569b9276bb11324614e2`; the complete branch remains a descendant of the last verified r15 baseline.
- Functional commit: `3de9d825e622c6bfd9e6e25d661dc6f9a792f292`.
- Purpose: reduce repetitive public “concept” framing in portfolio cards and visual descriptions while preserving the factual in-development status of ELEMENTALS and LC App; also close final verification of the r16/r17 locale-routing chain.
- Changed: `content/portfolio.ts` only for functional content; no layout, production config, domain, alias or runtime configuration changes.
- Commercial copy: ELEMENTALS is presented as original IP / a cinematic Live Casino show-game direction; LC App as an in-development B2B product direction for discovery, creator-led engagement and communities around existing Live Casino ecosystems. Neither is represented as launched, integrated, licensed, revenue-generating or production-ready.
- Visual semantics: LC App alt text now describes the screens as product design rather than repeatedly labelling every asset “concept”; the public visual note is shortened to “Product visuals illustrate the intended LC App experience and cross-device direction.”
- QA: Vercel deployment `dpl_J6ttdQ6CdNydf5Wth7uqpK7Dcj7j` reached READY. Production-integrity `11/11 PASS`; asset-delivery `3/3 PASS`; social-preview `7/7 PASS`; locale/schema `2/2 PASS`; security-header `2/2 PASS`; locale-routing `2/2 PASS`; Next.js compile PASS; lint/type PASS; static generation `93/93 PASS`; runtime warning/error logs = 0.
- Locale verification: the final r18 build proves the r17 canonical routing contract passes together with its updated regression test. The earlier r17 red deployment was an intermediate helper commit built before the test update, not a failure of the final routing state.
- Production instruction: review r18 as the current verified forward candidate. Do not merge/promote or alter `main`, `v2-current`, production aliases, domains or production configuration without founder authorization.

## 2026-09-08 — Locale canonical routing correction
- Branch: `design/locale-canonical-integrity-polish-20260908-r17`
- Parent: `design/locale-routing-integrity-polish-20260908-r16` @ `8a65d235e89b8881bc3e24f54d5599a393ad2d5d`.
- Functional head before handoff note: `fa009454c90236f7c012e9037da9873ca42f0852`.
- Purpose: align launch navigation with the actual public locale contract. Audit found r16 described `/ru`, `/hy`, `/es` and `/pt` as genuine localized home destinations even though `app/[locale]/page.tsx` permanently redirects every locale home to `/`.
- Changed: `lib/routes.ts`, `components/layout/Header.tsx`, `scripts/locale-routing-tests.mjs`.
- Behavior: all header, mega-menu, mobile-nav, CTA, footer and logo destinations now resolve directly to canonical launch routes. The logo no longer manufactures a `/ru|hy|es|pt` homepage hop. Localized route files remain compatibility redirects; existing translated copy stays in source but is not newly exposed as public product claims.
- Regression gate: locale-routing tests now assert the real launch contract, including canonical locale-home handling and the absence of `getLocalizedPath(locale, ...)` in Header navigation.
- QA: the first incremental Vercel deployment (`dpl_AmTZFornruL7P5GQ8P9hY9fzhYWd`) failed exactly as expected because it built the helper commit before the updated regression test landed (`'/' !== '/ru'`). That failure confirms the old gate detected the intentional contract change. Final-head Vercel verification remains required before promotion; do not infer readiness from the intermediate deployment.
- Production instruction: promote only after the final r17 head passes the complete production-config gates, Next.js build/static generation and preview runtime checks. `main`, `v2-current`, production aliases, domains and production configuration remain untouched.

## 2026-09-08 — Locale navigation routing integrity
- Branch: `design/locale-routing-integrity-polish-20260908-r16`
- Parent: `design/accessibility-metadata-polish-20260908-r15` @ `8d8fcab9db8b62b69a1f6fb0bef79e652926f862`
- Functional head before handoff note: `275aeef3287fdfe58df7ee4088d45daba0d39fd2`
- Purpose: stop localized homepage navigation from manufacturing `/ru|hy|es|pt/...` URLs for launch pages that are not actually localized and immediately redirect to the canonical English route.
- Changed: `lib/routes.ts`, `components/layout/Header.tsx`, `components/layout/Footer.tsx`, `package.json`, `scripts/locale-routing-tests.mjs`.
- Behavior: r16 intended to keep locale home routes localized while canonicalizing non-home launch pages. Subsequent r17 audit found this description was inconsistent with `app/[locale]/page.tsx`, which permanently redirects locale homes to `/`; r17 supersedes this routing contract.
- Regression gate: superseded by r17 because the r16 test encoded the inaccurate locale-home assumption.
- Integration: r16 is a direct descendant of the verified accessibility/security r15 branch and preserves its document-language, schema-logo and browser-security work.
- QA status: functional routing changes were observed in READY Vercel builds on the parallel build branch, but the r16 branch head itself was not treated as the approved baseline.
- Production instruction: use r17 or later after final verification. `main`, `v2-current`, production aliases, domains and production configuration remain untouched.

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
