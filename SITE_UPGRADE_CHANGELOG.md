# Site Upgrade Changelog

Date: 2026-07-29
Branch: `feat/premium-visual-product-system`

## Summary

Upgraded the OpenGamer website information architecture, homepage positioning, games catalogue, game detail template, services presentation, technology CTAs, contact form UX and global header/footer without changing the project architecture.

## Material Changes

- Replaced the homepage carousel with a static premium hero focused on full-cycle iGaming development and selected OpenGamer game/project references.
- Added a consistent global navigation model: Home, Games, Solutions, Projects, Technology, Company, Contact.
- Added desktop Solutions dropdown and mobile Solutions accordion.
- Rebuilt the footer around company summary, Solutions, Company, and Legal/contact columns.
- Standardized game data with explicit commercial/demo states, mechanics, features, devices and local artwork references.
- Improved game cards, catalogue filters, search coverage and no-demo CTA handling.
- Rebuilt game detail pages around a reusable commercial template.
- Reworked `/services` into grouped iGaming development solutions.
- Refined `/services/live-casino-development` around players, presenters, operations and live-product systems.
- Simplified `/contact` into a shorter first-step enquiry form with advanced details collapsed.
- Shortened the homepage into the final audit sequence and added a verified trust section.
- Added conditional phone capture when Phone is selected as the preferred contact method.
- Centralized production/preview SEO indexing logic.
- Added `typecheck` and `test` package scripts for release verification.
- Added opaque Solutions mega-menu surface with grouped service columns and ELEMENTALS featured card.
- Added reusable page atmosphere, product hero background and product signature components.
- Added product/game reference strips across Games, Services, Technology, Company, Live Casino and Contact.
- Added theme-specific visual atmosphere to game detail pages and major product pages.
- Removed unverified public mechanic labels from Dragon Rush and Sweet Wins.

## Technical Notes

- No external dependency was added.
- No unverified public facts were introduced.
- Existing lead validation, honeypot, rate-limit and provider abstraction remain in place.
- New hero visuals use local assets and CSS composition rather than remote imagery or video.
- Preview deployments remain `noindex, nofollow`; production indexing requires `VERCEL_ENV=production` and `NEXT_PUBLIC_SITE_URL=https://open-gamer.com`.
- New visual QA screenshots are local artifacts under `qa/visual/` and are intentionally excluded from Git/Vercel archives.

---

## 2026-09-08 — Visual Asset / Responsive QA Pass

Branch: `design/visual-asset-polish-20260908-r1`  
Approved parent: `63e6b2960cdc411a7a98269db174391158d2e1cd`  
Pass commits: `1e5d8b0`, `9e4d925`, `2950a60`, `a7252e7`, `08e7382`

### Purpose

Preserve the approved content-responsive version while improving visual fidelity of authentic product assets and making recurring visual QA cover the full public site at founder-review breakpoints.

### Changes

- `/portfolio`: LC App UI proof now uses contained presentation instead of destructive `object-cover` cropping; game and ELEMENTALS artwork remain cover-based.
- `/about`: LC App proof tile now preserves the full interface; game/ELEMENTALS proof remains artwork-led.
- `/services`: Product & Integration Engineering hero now preserves the LC App device ecosystem rather than cropping it as an illustration.
- `/technology`: LC App desktop-interface hero now uses contained UI presentation; Deep Dive remains artwork-led.
- `scripts/visual-qa.mjs`: removed machine-specific pnpm/runtime paths and expanded reusable QA coverage to Portfolio, ELEMENTALS, LC App and Live Casino Development.
- Visual QA breakpoints now include `390`, `430`, `768`, `1024`, `1280`, `1440` and `1920` widths.
- Visual QA now checks one-H1 structure, horizontal overflow, broken images, missing alt attributes and clipped text in major text/control elements.
- `QA_DEPLOYED_BASE_URL` can now point the QA harness at the exact preview deployment being reviewed.

### Asset Audit Notes

- Public LC App pages already use the optimized asset set under `public/assets/projects/lc-app/optimized/` (roughly 100–160 KB per asset) rather than the multi-megabyte originals for the main reviewed surfaces.
- Several game titles still have available WebP artwork while their content records reference JPG/source files. This is a safe follow-up optimization candidate after visual comparison; no asset was replaced solely to reduce bytes in this pass.
- No generated imagery was introduced. Existing authentic OpenGamer, ELEMENTALS and LC App assets were sufficient for the issues addressed here.

### QA / Production Instructions

1. Run `pnpm lint`, `pnpm typecheck`, `pnpm test:production-config`, and `pnpm build`.
2. Deploy this branch as preview only.
3. Run visual QA against the exact preview with `QA_DEPLOYED_BASE_URL=<preview-url> pnpm qa:visual -- --target=deployed` when Playwright browsers are available.
4. Review LC App crops on `/portfolio`, `/about`, `/services` and `/technology` at 390/430/1024/1280/1440/1920.
5. Confirm preview keeps `X-Robots-Tag: noindex`.
6. Do not promote or alter production aliases/domains without founder approval.

---

## 2026-09-08 — Consolidated Visual Asset Pass

Branch: `design/visual-asset-polish-20260908-r2`  
Parent: `design/visual-asset-polish-20260908-r1` at `c92e8e71ee3de4ff118c6f4a475be50947a59737`  
Material commits: `fe2270b4ae181fb7fdd675a339a289f14b82276a`, `84075eac28e48a36f961ce7b49ab3b0ced753960`

### Purpose

Consolidate the strongest verified visual improvements from the parallel asset-polish passes instead of maintaining divergent design branches.

### Changes

- `/portfolio` hero now uses the full optimized LC App device-ecosystem composition while retaining contained UI presentation, so the proof communicates the cross-device product rather than a cropped single community screen.
- ELEMENTALS public project-card artwork now uses the current Nexus stage exposition instead of the older overview image, aligning portfolio proof with the dedicated ELEMENTALS experience.
- ELEMENTALS Fire, Water, Earth and Air cards now carry realm-specific copy rather than one repeated generic description.
- Existing authentic OpenGamer assets remain preferred; no generated imagery was added because it would not currently improve factual confidence or visual quality enough to justify replacing the available product artwork.

### QA / Production Instructions

1. Verify the branch preview builds cleanly with lint/type/build/config checks.
2. Run deployed visual QA at 390/430/768/1024/1280/1440/1920 when the browser runtime is available.
3. Review `/portfolio`, `/portfolio/elementals`, `/about`, `/services`, `/technology` and `/portfolio/lc-app` for crop, overflow, broken images and hierarchy regressions.
4. Confirm preview response keeps `X-Robots-Tag: noindex`.
5. Keep `v2-current`, `main`, production aliases, domains and production configuration unchanged.
6. Production handoff: promote only the consolidated verified commit after founder approval; no manual asset copying is required because all referenced files already exist in the repository.

---

## 2026-09-08 — Reusable UI Asset Framing Pass

Branch: `design/visual-asset-polish-20260908-r3`  
Parent: `design/visual-asset-polish-20260908-r2` at `1f7ac7b4c06b7194e6a7e2c1d60f3373812c7f01`  
Material commit: `99fe6402b828fa61721ac1c85971988326e9cf86`

### Purpose

Close a remaining visual-system inconsistency where LC App interface assets were correctly preserved in major heroes but could still be destructively cropped inside reusable product-reference strips.

### Changes

- `components/visual/ProductSignature.tsx` now identifies LC App interface assets and presents them with contained framing on a dark product surface instead of generic `object-cover` cropping.
- Game artwork and cinematic ELEMENTALS imagery keep cover-based presentation, preserving the intended distinction between artwork and product UI.
- The fix propagates automatically to reusable product-reference strips on Games, Services, Technology, Company, Live Casino and Contact wherever LC App assets are used.
- No generated imagery and no new factual claims were introduced.

### QA / Production Instructions

1. Verify `pnpm build` plus lint/type/config checks on the branch preview.
2. Inspect every `RelatedProductStrip` / `ProductSignature` containing LC App at 390/430/768/1024/1280/1440/1920.
3. Confirm product UI remains legible without stretching and other artwork retains its existing cover behavior.
4. Confirm preview keeps `X-Robots-Tag: noindex`.
5. Do not alter `v2-current`, `main`, production aliases, domains or production configuration.

---

## 2026-09-08 — Shared Game Artwork Delivery Optimization

Branch: `design/visual-asset-polish-20260908-r4`  
Parent: `design/visual-asset-polish-20260908-r3` at `4839585685121bb0aa02fe203c3fc7e907e26281`  
Material commits: `3084416`, `3865bb5`, `b28bd6d`

### Purpose

Reduce repeated game-art payload on high-frequency catalogue and studio-reference surfaces without changing artwork composition, factual content or titles that do not already have a verified WebP asset in the repository.

### Changes

- Added `lib/gameAssets.ts` as a conservative verified-asset resolver for seven titles that already have matching WebP artwork: Choco Boom, Deep Dive, Dragon Rush, Forest Fortune, Fruit Elixir, Passion Paradise and Sweet Wins.
- `GameCard` now uses the verified WebP path for those titles across homepage/catalogue/portfolio card surfaces while preserving the existing fallback for all other games.
- `StudioGameSignature` now uses the same verified resolver, reducing repeated payload on Home, Services, Live Casino, Technology, About, Contact, Portfolio, ELEMENTALS and LC App cross-reference surfaces.
- No source image was deleted, no game without an existing WebP was altered, and no generated artwork or new factual claim was introduced.
- Representative repository savings include Forest Fortune `source.jpg` 117,817 B → `artwork.webp` 55,160 B, Dragon Rush `source.jpg` 361,559 B → 55,604 B, Choco Boom `artwork.jpg` 356,141 B → 54,380 B and Sweet Wins `source.jpg` 49,589 B → 37,418 B before framework-level image transformation/caching.

### QA / Production Instructions

1. Verify lint, typecheck, production-config tests and Next.js build on the exact r4 preview.
2. Inspect `/`, `/games`, `/portfolio` and shared studio-signature surfaces for unchanged composition and correct game artwork.
3. Confirm titles without verified WebP continue using their existing source files.
4. Confirm the preview remains `X-Robots-Tag: noindex` and no production alias/domain/configuration changes occur.
5. Promote only after founder approval; all optimized assets already exist in the repository and require no manual upload.

---

## 2026-09-08 09:16 +04 — Full Game Artwork Delivery Pass

Branch: `design/visual-asset-polish-20260908-r5`  
Parent: `design/visual-asset-polish-20260908-r4` at `813c27b855cb4687466959535f6eeda78c4faae1`  
Material commits: `d9247d97b0ead01a17bbedf62f96b2199ac72f04`, `20adc33e67e521e4acf3479efd4c4b8ee2a827e1`

### Purpose

Extend the verified WebP delivery strategy from shared catalogue/signature components to the remaining game-detail surfaces, while keeping original game artwork, product facts and production configuration unchanged.

### Changes

- Expanded the verified artwork resolver from seven to eleven catalogue titles by adding existing WebP assets for Cake Bonanza, Dragon Fruits, Goblin Gems and Royal Fruits.
- Game-detail metadata/Open Graph images, hero atmosphere, primary hero artwork and related-game cards now use the same verified optimized resolver as shared catalogue components.
- Titles without a verified matching WebP continue to fall back to their existing source artwork; variant titles are not remapped to another configuration merely to save bytes.
- No source/master asset was deleted. LC App continues to use its existing optimized 100–160 KB interface assets, and ELEMENTALS continues to use its current WebP exposition set on primary public surfaces.
- No generated imagery was introduced because the authentic existing product assets remain stronger and more factually defensible for the current public site.

### QA

- Vercel preview deployment `dpl_CtaZ84CJuz7ZVkHokTCLLExhJGjP` built commit `20adc33e67e521e4acf3479efd4c4b8ee2a827e1` successfully.
- Next.js compile passed; lint/type validation passed; static generation passed `93/93`; deployment reached `READY`.
- Preview access preserved `X-Robots-Tag: noindex`.
- Preview runtime warning/error/fatal log check returned no entries.

### Production Instructions

1. Treat r5 as the next verified design/asset descendant after r4; do not cherry-pick older visual branches over it.
2. Re-run the existing responsive visual QA at 390/430/768/1024/1280/1440/1920 before any founder-approved promotion.
3. Confirm the exact game artwork on `/games`, representative `/games/[slug]` pages and related-game cards remains visually unchanged aside from asset format/delivery.
4. Keep `v2-current`, `main`, production aliases, domains and production configuration unchanged until explicit founder authorization.
5. No manual asset upload is required; all optimized files referenced by this pass already exist in the repository.
