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

## 2026-09-08 — Visual Asset Polish

Branch: `design/visual-asset-polish-20260908`
Material change commit: `18b5a79482d877cebccca0a52cb7df760ee0888e`

### Purpose

Improve visual fidelity without redesign churn by treating game artwork and UI/product imagery differently. Product-interface visuals must remain legible rather than being destructively cropped to fill decorative cards.

### Changes

- Portfolio hero now uses the LC App device-ecosystem composition instead of the mobile-community frame.
- LC App portfolio hero uses `object-contain` with restrained padding so the full cross-device product composition remains visible across responsive card sizes.
- Game and cinematic artwork continue to use `object-cover`, preserving the stronger editorial crop appropriate to those assets.
- ELEMENTALS project-card artwork now uses the current Nexus stage exposition instead of the older `overview.jpg`, improving consistency with the dedicated ELEMENTALS page while reducing the source asset footprint for that public card.
- ELEMENTALS realm descriptions are now specific to Fire, Water, Earth and Air rather than repeating one generic sentence across four visually distinct assets.

### QA / Production Notes

- No new generated imagery was introduced because the current authentic OpenGamer, ELEMENTALS and LC App asset set already covers the required public surfaces at higher factual confidence.
- No product status, integration, partner, customer, certification or launch-readiness claims were added.
- Keep `v2-current`, `main`, production aliases and production domains unchanged.
- Promote only after preview build/type checks pass and preview continues to return `x-robots-tag: noindex`.
