# Launch Checklist

## Completed

- Launch routes created: `/`, `/services`, `/games`, `/technology`, `/about`, `/contact`, `/privacy-policy`, `/terms-of-use`, `/cookie-policy`.
- Header, footer, CTA, section header, cards, service cards, game cards, architecture diagram and process timeline implemented.
- Homepage rebuilt with confirmed positioning, capabilities, featured games, technology flow, process, partnership models and final CTA.
- Services page grouped into five capability groups.
- Games page includes responsive grid, keyboard-accessible filters and confirmed OpenGamer artwork.
- Technology page includes RGS capabilities, layered architecture, integration workflow and principles.
- About page uses confirmed leadership names and roles only.
- Contact page includes validated lead form and temporary server handler.
- Sitemap and robots routes added.
- `.env.example` added.
- Official logo, favicon, OG image and game artwork localized under `/public/assets`.
- Remote image runtime dependency removed from Next.js image config.
- Legacy prototype routes redirect to the launch surface.
- Game detail routes show confirmed game information only.
- Contact form includes provider abstraction, loading state, success state, validation errors, server error state, duplicate-submit protection and accessible feedback.
- Premium UI polish completed for shared components, header, footer, homepage, game cards, contact form, legal pages, 404 and error boundary.
- External demo links preserve `target` and `rel` attributes through the shared button component.
- Game artwork cards use the source artwork aspect ratio to avoid unnecessary cropping.
- Local route smoke-test passed against the production preview server.
- Obsolete prototype components, placeholder content files and planning-only wireframe docs removed.
- Sitemap includes all game detail URLs.
- Organization structured data added using confirmed company details only.
- Contact page includes clearer B2B enquiry guidance.
- Mobile menu closes after tapping the contact CTA.

## Pending Factual Items

- Confirm legal entity details and final legal copy.
- Confirm CRM or email provider for lead delivery.
- Confirm final game statuses, RTP, volatility, formats and certification data.
- Confirm whether all social links should remain public.
- Confirm final local asset ownership and filenames.
- Confirm whether public contact email should use the brochure email `mn@open-gamer.com`, the official site email `info@open-gamer.com`, or both.

## Deployment Notes

- Target deployment: Vercel.
- Build command: `pnpm build`.
- Install command: `pnpm install`.
- Output: default Next.js Vercel output.
- Preview command if Vercel CLI is installed and authenticated: `vercel`.
- If global Vercel CLI is unavailable on this machine, use:
  `env PATH=/Users/macbook/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH /Users/macbook/Library/pnpm/bin/pnpm dlx vercel@latest`
- Required environment variable: `LEAD_EMAIL_TO=mn@open-gamer.com`.
- Recommended preview environment variable: `NEXT_PUBLIC_SITE_URL=https://your-vercel-preview-url.vercel.app`.
- Current lead provider variable: `LEAD_PROVIDER=console`.
- No credentials are hardcoded.
- Current machine status: `vercel` and `npm` are unavailable in PATH. Vercel CLI 55.0.0 runs through `pnpm dlx`, but no saved Vercel credentials were found and the device login flow requires user authentication.

## Asset Migration Reminder

- Completed: downloaded official logo, favicon, OG image and all six game artworks.
- Completed: converted game artwork to WebP.
- Completed: stored optimized files under `/public/assets/brand` and `/public/assets/games`.
- Keep the source JPG/PNG files until final asset ownership and compression settings are approved.

## CRM Reminder

- Replace the temporary console lead provider with Resend, HubSpot, Pipedrive, email delivery or another approved CRM adapter.

## Legal Reminder

- Review privacy policy, terms of use and cookie policy with legal counsel before public launch.

## QA Notes

- `pnpm lint`: passed.
- `pnpm build`: passed.
- Smoke-tested: `/`, `/services`, `/games`, all six game detail routes, `/technology`, `/about`, `/contact`, `/privacy-policy`, `/terms-of-use`, `/cookie-policy`, `/sitemap.xml`, `/robots.txt`.
- Smoke-tested legacy redirects: `/capabilities`, `/portfolio`, `/studios`, `/studios/engineering`, `/ru`, `/es`, `/ru/portfolio`, `/es/capabilities`.
- Smoke-tested lead API validation and valid submission path.
- Automated screenshot capture was blocked by the local browser runtime; rerun visual screenshot QA after Playwright browsers or a compatible Chrome automation environment is available.
