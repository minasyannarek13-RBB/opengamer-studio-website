# OpenGamer CTO Production Handoff Changelog

## 2026-09-08 — Preview SEO isolation hardening
- Branch: `design/social-preview-coverage-polish-20260908-r13`
- Functional commit: `b70fe8f1fb0ef01d5713c6b023b4eef6f0b7fce4`
- Approved ancestor: `design/font-delivery-integrity-polish-20260908-r12` @ `55981a08baca8ae9cf9ff02ee3787601f3ea48a1`
- Purpose: keep non-production previews fully isolated from search-engine discovery while preserving production sitemap behavior.
- Changed: `app/robots.ts`
- Behavior: when `isIndexableProduction` is false, robots returns `Disallow: /` and no sitemap reference. Production behavior remains `Allow: /` plus `${siteUrl}/sitemap.xml`.
- QA required before production handoff: build/lint/typecheck, verify preview `/robots.txt` contains no sitemap and disallows `/`, verify preview response still carries `X-Robots-Tag: noindex`, verify production configuration is unchanged.
- Production instruction: cherry-pick/apply only after normal CTO review; no domain, alias, environment or production configuration changes are part of this commit.
