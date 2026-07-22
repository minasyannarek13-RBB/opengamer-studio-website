# OpenGamer Website Developer Handoff

Status: Preview-ready handoff  
Branch: `codex/opengamer-preview-readiness`  
Preview URL: https://opengamer-studio-prototype-50p0l7tpi-open-gamer.vercel.app  
Share URL: https://opengamer-studio-prototype-50p0l7tpi-open-gamer.vercel.app/?_vercel_share=c6n1S4eXAPt8NXbdh4QuxVlvbGlu0Ypg  
Final pushed commit SHA: see final delivery report / `git rev-parse HEAD`

## Current Project State

The site is a Next.js 15 / React 19 / TypeScript website for OpenGamer Studio. It includes the redesigned homepage, complete game catalogue, ELEMENTALS portfolio page, LC App concept page, services, technology, about, contact and legal pages.

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

- Contact delivery uses Resend through `lib/leadDelivery.ts`.
- Successful form submission requires `RESEND_API_KEY`, `CONTACT_RECIPIENT_EMAIL` and `CONTACT_FROM_EMAIL`.
- `CONTACT_RECIPIENT_EMAIL` is server-only and must not be exposed in public UI.
- `CONTACT_FROM_EMAIL` must use a sender address from a verified Resend domain.
- Optional public values: `NEXT_PUBLIC_CONTACT_EMAIL` and `NEXT_PUBLIC_LINKEDIN_URL`.
- Analytics provider is not confirmed.
- Cookie consent provider is not confirmed.

Resend setup:

1. Create or access the Resend account.
2. Verify the sending domain in Resend.
3. Create a Resend API key.
4. Configure `CONTACT_FROM_EMAIL` with the verified sending domain.
5. Configure `CONTACT_RECIPIENT_EMAIL` with the approved inbox.
6. Test delivery in preview.
7. Configure the same approved variables for production only after review.

## Founder Decisions Required Before Production

| ID | Decision | Current safe behaviour | Options | Recommended default | Required evidence | Production impact | Owner |
|---|---|---|---|---|---|---|---|
| FD-01 | Lead-delivery provider | Form returns an honest delivery error until Resend is configured. | Resend | Resend | Provider account, API key, sender domain status | Blocks production enquiry capture | Founder |
| FD-02 | Production recipient email | `CONTACT_RECIPIENT_EMAIL` is required server-only config. | Approved business inbox | Shared business inbox if available | Confirmed recipient access | Blocks reliable lead routing | Founder |
| FD-03 | Public corporate email | Public email renders only from `NEXT_PUBLIC_CONTACT_EMAIL`. | Approved public contact address, or hidden | Hide until confirmed | Approved public contact email | Affects footer/contact/legal copy | Founder |
| FD-04 | Public telephone | Not published. | Omit | Omit | Founder approval if ever reintroduced | Avoids unconfirmed public personal contact data | Founder |
| FD-05 | Legal entity name | Legal pages avoid naming a final legal entity. | Current legal entity, trading name only | Trading name only until legal approval | Company registration source | Blocks legal-page approval | Founder/legal |
| FD-06 | Registration number | Not published. | Publish, omit | Omit until verified | Registration extract | Blocks final legal footer if required | Founder/legal |
| FD-07 | Registered address wording | Address is not published until confirmed. | Registered office, business contact address, remove | Hide until confirmed | Address approval and wording | Affects footer/contact/legal accuracy | Founder/legal |
| FD-08 | Public social links | LinkedIn only, controlled by `NEXT_PUBLIC_LINKEDIN_URL`. | LinkedIn URL, or hidden | LinkedIn only | Confirmed active official LinkedIn URL | Affects footer trust links | Founder |
| FD-09 | Legal-page approval | Pages state legal details remain pending review. | Approve current, revise with counsel | Review with counsel before production | Legal review sign-off | Blocks production readiness | Founder/legal |
| FD-10 | Commercial status per game | Demo status only where a demo URL exists; no commercial availability claim. | Per-game status labels | No commercial label until confirmed | Approved game availability matrix | Blocks sales-language expansion | Founder/commercial |
| FD-11 | Approved demo links | Buttons render only for configured public demo URLs. | Keep, replace, remove per game | Keep only verified public demos | Demo URL review | Affects Games QA and external links | Founder/product |
| FD-12 | Public wording for RGS-related development | Site uses RGS-related/backend engineering wording. | Keep qualified wording, reduce further, approve stronger wording | Keep qualified wording | Technical capability approval | Affects Services/Technology claims | Founder/CTO |
| FD-13 | Public wording for RNG-related development | Site uses RNG-related/certification preparation support wording. | Keep qualified wording, reduce further, approve stronger wording | Keep qualified wording | Technical and compliance approval | Affects Services/Technology claims | Founder/CTO/legal |

## Open Founder Decisions

- Production domain and canonical URL.
- Contact-form delivery provider.
- Analytics and consent tooling.
- Legal-page approval.
- Final Core geometry for OPEN GAMER GENESIS.
- Whether LC App receives additional production screenshots later.

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
