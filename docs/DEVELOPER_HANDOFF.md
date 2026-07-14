# OpenGamer Website Developer Handoff

Status: Preview-ready handoff  
Branch: `codex/opengamer-preview-readiness`  
Preview URL: https://opengamer-studio-prototype-50p0l7tpi-open-gamer.vercel.app  
Share URL: https://opengamer-studio-prototype-50p0l7tpi-open-gamer.vercel.app/?_vercel_share=c6n1S4eXAPt8NXbdh4QuxVlvbGlu0Ypg  
Final pushed commit SHA: see final delivery report / `git rev-parse HEAD`

## Current Project State

The site is a Next.js 15 / React 19 / TypeScript website for OpenGamer Studio. It includes the redesigned homepage, complete game catalogue, ELEMENTALS portfolio page, LC App concept page, services, technology, about, contact and legal placeholder pages.

Production deployment is not approved. The current deployment is preview-only.

## Routes

- `/`
- `/services`
- `/services/live-casino-development`
- `/games`
- `/games/[slug]`
- `/portfolio`
- `/portfolio/elementals`
- `/portfolio/lc-app`
- `/technology`
- `/about`
- `/contact`
- `/privacy-policy`
- `/terms-of-use`
- `/cookie-policy`

Locale routes under `/ru` and `/es` also exist through the current app structure.

## Content Architecture

- `content/games.ts` — game catalogue, featured homepage games and Hero product-panel games.
- `content/portfolio.ts` — ELEMENTALS and LC App portfolio data/assets.
- `content/home.ts` — homepage lifecycle, capability and future-product content.
- `content/services.ts` — services, technology, process and partnership model content.
- `content/contact.ts` — contact form select options.
- `content/navigation.ts` — navigation structure.

Avoid hardcoding repeatable website content directly in page components when an existing `content/*` source exists.

## Asset Architecture

- Brand: `public/assets/brand/`
- Games: `public/assets/games/`
- ELEMENTALS: `public/assets/projects/elementals/`
- LC App optimized concept mockups: `public/assets/projects/lc-app/optimized/`
- Original supplied LC App files are preserved under `public/assets/projects/lc-app/`

Only local assets under `public/assets/` should render on the website. Do not add remote image URLs.

## Deployment Procedure

Preview:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
pnpm dlx vercel deploy --yes --target=preview
```

Production is intentionally excluded from this handoff. Do not run `vercel deploy --prod` until founder approval is explicit.

## Production Domain Migration Checklist

1. Confirm intended production domain.
2. Add domain in Vercel project settings.
3. Configure required DNS records.
4. Verify domain ownership.
5. Set production environment variables.
6. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
7. Verify canonical base URL, Open Graph URLs, sitemap URL and robots sitemap directive.
8. Remove preview-only noindex behavior if configured at the Vercel/project layer.
9. Verify SSL.
10. Test `www` and non-`www` redirects.
11. Test old-site route redirects where required.
12. Confirm trailing-slash behavior.
13. Submit production sitemap after launch.
14. Run production Lighthouse.
15. Test contact-form delivery.
16. Confirm analytics and consent configuration.
17. Confirm legal-page review status.
18. Keep rollback deployment available.

## Contact Form and Analytics

- Current lead delivery default: `LEAD_PROVIDER=console`.
- Reserved providers exist in code but are not configured: `resend`, `hubspot`, `pipedrive`, `custom`.
- Analytics provider is not confirmed.
- Cookie consent provider is not confirmed.

## Open Founder Decisions

- Production domain and canonical URL.
- Contact-form delivery provider.
- Analytics and consent tooling.
- Legal-page approval.
- Final Core geometry for OPEN GAMER GENESIS.
- Whether LC App receives additional production screenshots later.
- Whether missing LC App product-lineup asset should be supplied.

## Do Not Represent as Confirmed

- LC App is live, production-ready or used by operators/providers.
- LC App has active users, pilots, integrations, metrics or launch timing.
- ELEMENTALS is live, launched, certified, integrated or commercially proven.
- OpenGamer has unconfirmed licenses, certifications, clients, integrations, geographic coverage or partnerships.

## Validation Snapshot

Local:

- `pnpm lint` passed.
- `pnpm exec tsc --noEmit` passed.
- `pnpm build` passed.
- LC App visual QA passed.
- Lighthouse local: homepage 99/100/100/100, LC App 99/100/100/100.

Preview:

- Preview deployment ready.
- LC App preview QA passed.
- Preview Lighthouse: homepage Performance 94, Accessibility 100, Best Practices 100, SEO 69; LC App Performance 98, Accessibility 100, Best Practices 100, SEO 69.
- Preview SEO score is reduced by protected preview/noindex behavior, not by page metadata.
