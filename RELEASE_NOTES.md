# Release Notes

## 2026-07-12 Preview Readiness Pass

### Added

- Official OpenGamer brand and game assets stored locally under `/public/assets`.
- Dedicated game folders for Forest Fortune, Sweet Wins, Deep Dive, Choco Boom, Fruit Elixir and Passion Paradise.
- Lead delivery adapter layer prepared for console, Resend, HubSpot, Pipedrive and custom providers.
- Top-level error boundary and polished 404 state.
- Organization structured data.
- Sitemap entries for all game detail routes.

### Improved

- Premium B2B visual pass across header, footer, homepage, service cards, game cards, legal pages and contact form.
- Shared button component now preserves external anchor attributes for demo links.
- Game artwork uses the source aspect ratio to avoid unnecessary crop.
- Metadata base, sitemap and robots use shared site URL configuration.
- Contact form handles loading, success, validation, server error, network failure and duplicate-submit states.
- Removed obsolete prototype components, placeholder localized content and planning-only wireframe documentation.
- Contact page now gives qualified B2B visitors clearer guidance on what to include.
- Mobile menu closes cleanly after contact CTA navigation.
- Added repeatable Playwright screenshot QA script.
- Contact form now uses contact/project fieldsets with required and optional field indicators.
- Legal pages now show last-updated formatting and improved reading width.
- Games page filter ARIA and heading order fixed for Lighthouse accessibility.

### Verified

- `pnpm lint`: passed.
- `pnpm build`: passed.
- Production route smoke-test passed for all required launch routes, all game detail routes, sitemap, robots, legacy redirects and lead API states.
- Deployed preview route check passed for all required routes.
- Local visual QA generated 75 screenshots with zero scripted failures after scroll/decode handling for lazy-loaded images.
- Lighthouse: local `/` 100 performance, 100 accessibility, 100 best practices, 100 SEO; local `/games` 98/100/100/100; local `/contact` 100/100/100/100; deployed `/` 99/100/100/100.
- Copy checked against the local brochure and official public OpenGamer site. Unconfirmed RTP, volatility, fixed timelines, shipped counts, regulated market availability, client logos, partner names and certifications remain unpublished.
- Updated Vercel preview deployed as `dpl_4dGhRfpztkntssFdw3aNrzUskGSw`; public alias `https://opengamer-studio-prototype.vercel.app` smoke-tested after alias update.
- `.vercelignore` added so local QA/browser artifacts are not uploaded on future preview deployments.

### Remaining

- Confirm legal copy, legal entity details and final privacy/cookie treatment.
- Confirm final contact email strategy.
- Confirm CRM/email provider and credentials outside source control.
- Confirm game-level metadata before showing RTP, volatility, format, release status or certification details.
- Keep production domain deployment blocked until legal and lead delivery details are approved.
