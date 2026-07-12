# Project Status

## Audit

- Existing project found in `opengamer-studio-prototype`.
- Stack: Next.js 15, TypeScript, App Router, Tailwind CSS, React 19.
- Existing routes before implementation: `/`, `/about`, `/capabilities`, `/contact`, `/portfolio`, `/studios`, `/technology`, localized `ru` and `es` variants, and studio detail routes.
- Required launch routes missing before implementation: `/services`, `/games`, `/privacy-policy`, `/terms-of-use`, `/cookie-policy`.
- Existing reusable components: header, footer, hero, page template, cards, buttons, sections, portfolio and technology preview blocks.
- Existing issue: public pages were prototype/wireframe style, not launch-ready.
- Existing remote assets confirmed from official OpenGamer site: logo, favicon, OG image and game artwork from `open-gamer.com` / `cdn.open-gamer.com`.
- Official logo, favicon, OG image and six game artworks have been localized under `/public/assets`.
- Current build after audit: passed with bundled Node runtime.
- Current lint after audit: passed with bundled Node runtime.

## Implementation Notes

- Launch content now uses typed source files under `/content`.
- Launch UI now uses local image paths only for brand, favicon, OG and game artwork.
- Original source JPG/PNG files are preserved beside optimized WebP game artwork.
- Legacy prototype routes redirect to launch routes to avoid public placeholder pages.
- Lead delivery now uses a provider abstraction with `console`, `resend`, `hubspot`, `pipedrive` and `custom` provider targets reserved for future implementation.
- Premium polish pass completed across shared UI components, homepage, launch page hero bands, game cards, contact form states, 404 and error handling.
- Contact form now catches network/API failures client-side and keeps accessible validation feedback for required fields and consent.
- Copy was reviewed against the local brochure and official public OpenGamer website. Shipped counts, RTP bands, fixed timelines, regulated market availability, partner/client logos and certifications remain unpublished until approved.
- Local smoke QA covered all required routes against `next start`.
- Screenshot automation was attempted, but Playwright browser binaries were unavailable and the local Chrome runtime closed under automation sandbox constraints. Structural smoke checks and code-level layout review were completed.
- Final lint: passed.
- Final production build: passed.
- Production smoke-test: passed for `/`, `/services`, `/games`, `/games/forest-fortune`, `/technology`, `/about`, `/contact`, `/privacy-policy`, `/terms-of-use`, `/cookie-policy`, `/sitemap.xml`, `/robots.txt`.
- Vercel CLI and npm were not available in PATH, so no preview deployment was created from this machine.
- Legal entity details, social ownership review, CRM/email provider and final legal copy still require owner confirmation.

## Current Preview Readiness

- Build command: `pnpm build`.
- Start command: `pnpm start`.
- Output mode: default Next.js Vercel output.
- Metadata base: `NEXT_PUBLIC_SITE_URL`, then `VERCEL_URL`, then local fallback.
- Required preview environment variables: `NEXT_PUBLIC_SITE_URL`, `LEAD_EMAIL_TO`, `LEAD_PROVIDER=console`.
- No production domain deployment has been created.
