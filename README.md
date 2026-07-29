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
cp .env.example .env.local
pnpm dev
```

Production checks:

```bash
pnpm lint
pnpm typecheck
pnpm test
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
- `NEXT_PUBLIC_DEPLOYMENT_ENV` — optional public deployment label.
- `RESEND_API_KEY` — server-only Resend API key. Required for successful contact-form delivery.
- `CONTACT_RECIPIENT_EMAIL` — server-only recipient inbox for business enquiries. Required; not exposed publicly.
- `CONTACT_FROM_EMAIL` — server-only sender address from a verified Resend sending domain. Required.
- `CONTACT_REPLY_TO_DOMAIN` — optional server-only allowlist for submitted Reply-To email domains.
- `NEXT_PUBLIC_CONTACT_EMAIL` — optional public contact email rendered in footer/contact/legal copy when configured.
- `NEXT_PUBLIC_LINKEDIN_URL` — optional public LinkedIn URL. Only valid HTTPS LinkedIn URLs render.
- `NEXT_PUBLIC_MEETING_URL` — optional public meeting URL when approved.
- `LEAD_WEBHOOK_URL` / `LEAD_WEBHOOK_SECRET` — reserved for a future CRM/webhook delivery provider.

Do not commit `.env*`, `.vercel`, credentials, tokens or private source files.

Resend setup:

1. Create or access the Resend account.
2. Verify the sending domain in Resend.
3. Create a Resend API key.
4. Set `CONTACT_FROM_EMAIL` to an address on the verified sending domain.
5. Set `CONTACT_RECIPIENT_EMAIL` to the approved business inbox.
6. Test the contact form in preview.
7. Configure the same approved variables for production only after production review.

## Deployment Notes

Vercel project is already linked locally through `.vercel/project.json`, but `.vercel` is ignored and must not be committed.

Public audit deployment:

https://opengamer-public-audit.vercel.app

Latest final preview deployment:

https://opengamer-public-audit-3f1cq4jf8-open-gamer.vercel.app

Production deployment is not approved yet.

Preview deployments must keep `NEXT_PUBLIC_SITE_URL` away from `https://open-gamer.com` unless they are intended to represent production. Non-production builds are `noindex, nofollow` through environment-aware metadata and `robots.txt`.

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

## Production Deployment Workflow

1. Merge the approved production PR into the production branch.
2. Confirm Vercel production environment variables, especially `NEXT_PUBLIC_SITE_URL=https://open-gamer.com`.
3. Let Vercel build from the production branch or run the approved CLI deployment.
4. Verify homepage, games, services, contact, legal pages, sitemap and robots.
5. Submit a test enquiry only after delivery variables are configured.
6. Connect `open-gamer.com` and `www.open-gamer.com` in the correct Vercel project.
7. Verify HTTPS, canonical URLs, Open Graph URLs and `www` redirect.

## Rollback

1. Identify the last known good Vercel deployment.
2. Promote the previous deployment in Vercel or revert the merge commit.
3. Verify `open-gamer.com`, `/contact`, `/sitemap.xml` and `/robots.txt`.
4. Confirm form delivery still works.
5. Record the rollback reason and affected commit/deployment.

## Known Gaps

- Production domain is not connected in this task.
- Contact-form delivery requires Resend credentials and an approved recipient inbox.
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
