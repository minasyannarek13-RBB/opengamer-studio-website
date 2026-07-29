# Site Upgrade Changelog

Date: 2026-07-29
Branch: `feat/full-site-content-ux-upgrade`

## Summary

Upgraded the OpenGamer website information architecture, homepage positioning, games catalogue, game detail template, services presentation, technology CTAs, contact form UX and global header/footer without changing the project architecture.

## Material Changes

- Replaced the homepage carousel with a static premium hero focused on full-cycle iGaming development and selected OpenGamer game/project references.
- Added a consistent global navigation model: Home, Games, Solutions, Projects, Technology, Company, Contact.
- Added desktop Solutions dropdown and mobile Solutions accordion.
- Rebuilt the footer around company summary, Solutions, Company, and Legal/contact columns.
- Standardized game data with explicit commercial/demo states, mechanics, features, devices and local artwork references.
- Improved game cards, catalogue filters, search coverage and no-demo CTA handling.
- Rebuilt game detail pages around a reusable commercial template.
- Reworked `/services` into grouped iGaming development solutions.
- Refined `/services/live-casino-development` around players, presenters, operations and live-product systems.
- Simplified `/contact` into a shorter first-step enquiry form with advanced details collapsed.

## Technical Notes

- No external dependency was added.
- No unverified public facts were introduced.
- Existing lead validation, honeypot, rate-limit and provider abstraction remain in place.
- New hero visuals use local assets and CSS composition rather than remote imagery or video.
