# OpenGamer Studio Website

Premium B2B iGaming website for OpenGamer Studio, built as a Next.js application with local portfolio, game and product-concept assets.

## Stack

- Framework: Next.js 15
- Language: TypeScript
- UI: React 19 + Tailwind CSS
- Package manager: pnpm
- Recommended Node: Node 20+; tested locally with Node 24.14.0
- Hosting target: Vercel

## Local Setup

```bash
pnpm install
pnpm dev
```

Production checks:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

Visual QA:

```bash
pnpm qa:visual -- --skip-build
```

## Project Structure

- `app/` — Next.js App Router routes.
- `components/` — shared layout, section and UI components.
- `content/` — canonical website content/data sources.
- `public/assets/brand/` — brand images.
- `public/assets/games/` — deployed game artwork.
- `public/assets/projects/elementals/` — deployed ELEMENTALS artwork.
- `public/assets/projects/lc-app/optimized/` — deployed LC App concept mockups.
- `lib/site.ts` — canonical site URL configuration.
- `lib/leadDelivery.ts` — contact-form delivery adapter.

## Key Routes

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

## Environment Variables

- `NEXT_PUBLIC_SITE_URL` — canonical site URL for metadata, sitemap and robots. Defaults to `https://open-gamer.com`.
- `LEAD_PROVIDER` — optional contact-form delivery provider. Current default is `console`; `resend`, `hubspot`, `pipedrive` and `custom` are reserved but not configured.

Do not commit `.env*`, `.vercel`, credentials, tokens or private source files.

## Deployment Notes

Vercel project is already linked locally through `.vercel/project.json`, but `.vercel` is ignored and must not be committed.

Preview deployment used for final handoff:

https://opengamer-studio-prototype-50p0l7tpi-open-gamer.vercel.app

Production deployment is not approved yet.

## Production Domain Checklist

1. Confirm intended production domain.
2. Add domain in Vercel project settings.
3. Configure required DNS records.
4. Verify domain ownership.
5. Set production environment variables.
6. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
7. Verify canonical URLs and Open Graph URLs.
8. Verify sitemap URL and robots sitemap directive.
9. Remove preview-only noindex behavior if present at platform level.
10. Verify SSL.
11. Test `www` and non-`www` redirects.
12. Test route redirects from the old site where required.
13. Submit production sitemap after launch.
14. Run production Lighthouse.
15. Test contact-form delivery.
16. Confirm analytics and consent configuration.
17. Confirm legal-page review status.
18. Keep a rollback deployment available.

## Known Gaps

- Production domain is not connected in this task.
- Contact-form delivery provider is not configured beyond the console adapter.
- Analytics and cookie-consent tooling are not confirmed.
- Legal pages still require final legal review.
- LC App remains a product concept, not a launched product.
- ELEMENTALS remains in development, not launched, certified or integrated.
- Final Core geometry for OPEN GAMER GENESIS is not approved.

## Factual Status Restrictions

Do not claim:

- LC App is live, production-ready or used by operators/providers.
- LC App has active users, pilots, integrations, metrics or launch timing.
- ELEMENTALS is live, launched, certified, integrated or commercially proven.
- OpenGamer has unconfirmed licenses, certifications, clients, integrations or partnerships.
