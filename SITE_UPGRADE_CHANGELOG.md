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
