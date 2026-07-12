# Release Notes

## 2026-07-12 Preview Readiness Pass

### Added

- Official OpenGamer brand and game assets stored locally under `/public/assets`.
- Dedicated game folders for Forest Fortune, Sweet Wins, Deep Dive, Choco Boom, Fruit Elixir and Passion Paradise.
- Lead delivery adapter layer prepared for console, Resend, HubSpot, Pipedrive and custom providers.
- Top-level error boundary and polished 404 state.

### Improved

- Premium B2B visual pass across header, footer, homepage, service cards, game cards, legal pages and contact form.
- Shared button component now preserves external anchor attributes for demo links.
- Game artwork uses the source aspect ratio to avoid unnecessary crop.
- Metadata base, sitemap and robots use shared site URL configuration.
- Contact form handles loading, success, validation, server error, network failure and duplicate-submit states.

### Verified

- `pnpm lint`: passed.
- `pnpm build`: passed.
- Production route smoke-test passed for all required launch routes, sitemap and robots.
- Copy checked against the local brochure and official public OpenGamer site. Unconfirmed RTP, volatility, fixed timelines, shipped counts, regulated market availability, client logos, partner names and certifications remain unpublished.

### Remaining

- Confirm legal copy, legal entity details and final privacy/cookie treatment.
- Confirm final contact email strategy.
- Confirm CRM/email provider and credentials outside source control.
- Confirm game-level metadata before showing RTP, volatility, format, release status or certification details.
- Run screenshot-based visual QA in an environment with a working Playwright or Chrome automation runtime.
- Create Vercel preview once Vercel CLI is installed and authenticated.
