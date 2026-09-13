# OpenGamer Studio Website

Premium B2B iGaming website for OpenGamer Studio. Next.js application with local game, ELEMENTALS and LC App assets.

## Stack

- Next.js 15 / React 19 / TypeScript / Tailwind CSS
- pnpm
- Node 20+
- Hosting target: Vercel

## Local setup

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

## Source of truth

Use current implementation and typed content, not historical branches or old design documents.

- `app/` — active routes and page composition
- `components/` — active reusable UI
- `content/` — canonical public content/data records
- `public/assets/brand/` — OpenGamer brand assets
- `public/assets/games/` — game artwork
- `public/assets/projects/elementals/` — ELEMENTALS artwork
- `public/assets/projects/lc-app/optimized/` — LC App concept visuals
- `OPEN_GAMER_BRAND_GUIDELINES.md` — brand/claims guidance
- `CTO_PROD_CHANGELOG.md` — current production handoff

Do not restore deleted prototype components or superseded design/content handoff documents unless a current requirement explicitly needs them.

## Active public routes

- `/`
- `/services`
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

Legacy studio routes may redirect to the current public information architecture. Do not rebuild them as separate product pages without an explicit product decision.

## Environment

- `NEXT_PUBLIC_SITE_URL` — canonical public site URL
- `NEXT_PUBLIC_DEPLOYMENT_ENV` — optional deployment label
- `RESEND_API_KEY` — server-only contact delivery key
- `CONTACT_RECIPIENT_EMAIL` — server-only business inbox
- `CONTACT_FROM_EMAIL` — server-only sender address on a verified domain
- `CONTACT_REPLY_TO_DOMAIN` — optional Reply-To allowlist
- `NEXT_PUBLIC_CONTACT_EMAIL` — optional public contact email
- `NEXT_PUBLIC_LINKEDIN_URL` — optional public LinkedIn URL
- `NEXT_PUBLIC_MEETING_URL` — optional approved meeting URL
- `LEAD_WEBHOOK_URL` / `LEAD_WEBHOOK_SECRET` — reserved integration variables

Never commit `.env*`, `.vercel`, credentials, tokens or private source files.

## Game status model

- Verified public demo → `Playable` / `Play Demo`
- Confirmed portfolio title without public demo → `Portfolio Title` / `No public demo` / commercial discussion CTA
- Confirmed in-development title → `In Development`

Do not imply demo availability merely because a game exists in the portfolio.

## Factual restrictions

Do not claim unconfirmed licenses, certifications, clients, integrations, partnerships, revenue, pilots, metrics or production status.

LC App remains an in-development B2B product direction and must not be described as a launched production application.

ELEMENTALS remains an original Live Casino IP in development and must not be described as launched, certified, integrated or commercially proven unless that status is later confirmed.

RGS-related engineering means engineering around remote game server environments. It does not imply ownership of a proprietary platform or certification.

## Deployment

Do not deploy every intermediate commit. Complete coherent page/code passes first, run QA, then create a release candidate deployment.

Before production:

1. Run lint, typecheck, tests and build.
2. Review responsive layouts and major artwork crops.
3. Verify contact routing and configured delivery environment.
4. Verify metadata, canonical URLs, sitemap and robots behavior.
5. Confirm legal review status.
6. Keep at least one known-good rollback deployment.
7. Connect or alter production domains only with explicit approval.

## Rollback

Use a known-good Vercel deployment or revert the release commit. After rollback verify homepage, games, contact, sitemap, robots and form delivery.
