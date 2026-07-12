# Visual QA Report

## Deployment Access

- Preview URL tested: `https://opengamer-studio-prototype.vercel.app`.
- Access status: public HTTP 200.
- Deployment protection: not observed.
- Required deployed routes loaded successfully: `/`, `/services`, `/games`, all six game detail pages, `/technology`, `/about`, `/contact`, legal pages, `/sitemap.xml`, `/robots.txt`.
- Updated preview deployment id: `dpl_4dGhRfpztkntssFdw3aNrzUskGSw`.
- Unique deployment URL: `https://opengamer-studio-prototype-q1bm6m0xm-open-gamer.vercel.app` is ready but Vercel SSO protected.
- Public alias `https://opengamer-studio-prototype.vercel.app` was updated and smoke-tested after deployment.

## Visual Test Setup

- Added `@playwright/test`.
- Installed Chromium into `.playwright-browsers`, ignored from Git.
- Added script: `pnpm qa:visual`.
- Screenshot output folders: `qa/screenshots/desktop`, `qa/screenshots/tablet`, `qa/screenshots/mobile`.
- Screenshots are ignored from Git; the script is committed.

## Pages Tested

- `/`
- `/services`
- `/games`
- `/games/forest-fortune`
- `/games/sweet-wins`
- `/games/deep-dive`
- `/games/choco-boom`
- `/games/fruit-elixir`
- `/games/passion-paradise`
- `/technology`
- `/about`
- `/contact`
- `/privacy-policy`
- `/terms-of-use`
- `/cookie-policy`

## Viewports Tested

- 1440 x 1000
- 1024 x 900
- 768 x 1024
- 390 x 844
- 375 x 812

## Screenshots Created

- Initial local plus deployed run: 150 screenshots.
- Final local confirmation run: 75 screenshots.
- Final scripted result: zero failures for h1 count, horizontal overflow, broken images or missing image alt text.

## Defects Found

- Homepage lazy images were initially counted as broken before scroll/decode completion.
- `/games` Lighthouse accessibility scored 92 because the filter wrapper used `role=list` without listitem children and card headings jumped from `h1` to `h3`.
- Contact form was visually long on mobile and did not clearly separate required fields from optional context.
- Legal pages lacked last-updated formatting and had wider-than-ideal reading blocks.

## Fixes Implemented

- Visual QA script now scrolls through each page and waits for image decode before capture and metrics.
- Games filter ARIA corrected and a hidden `h2` added for heading order.
- Contact form grouped into Contact Details and Project Context fieldsets.
- Contact form labels now show required markers and optional indicators.
- Legal pages now show `Last updated: July 12, 2026` and use narrower content width.

## Lighthouse Results

| Target | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | --- | --- | --- |
| Local `/` | 100 | 100 | 100 | 100 | 1.6 s | 0 | 20 ms |
| Local `/games` | 98 | 100 | 100 | 100 | 2.3 s | 0 | 20 ms |
| Local `/contact` | 100 | 100 | 100 | 100 | 1.9 s | 0 | 30 ms |
| Deployed `/` | 99 | 100 | 100 | 100 | 1.6 s | 0 | 20 ms |

## Remaining Factual Inputs

- Final legal entity, data controller and legal text.
- CRM/email provider and delivery credentials.
- Game RTP, volatility, format, release status and certification data.
- Public social link ownership approval.
- Final local asset ownership and compression approval.

## Remaining Production Blockers

- Production domain deployment is intentionally not performed.
- Final legal and CRM details are production blockers, not preview blockers.
