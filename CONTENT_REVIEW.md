# OpenGamer Content Review

Date: 2026-07-29
Status: Business review required

## Verified Implementation Sources

- Local typed content in `content/`
- Local game and project assets in `public/assets/`
- Existing production configuration checks
- OpenGamer public audit scope

## Public Copy Rules Applied

- No licenses, certifications, partner names, operator relationships, revenue, user metrics or launch timelines are presented as confirmed unless supported by local project data.
- Corporate email, LinkedIn and structured organization metadata remain conditional on verified environment values.
- Game specifications are hidden when not verified instead of showing placeholders.
- Fruit Elixir and Passion Paradise variants are described as selectable payline configurations.

## Facts Requiring Business Confirmation

| Area | Current Public Handling | Required Confirmation |
| --- | --- | --- |
| Company legal name | Not displayed | Legal entity name approved for public website |
| Registration number | Not displayed | Company registration number, if public |
| Office location | Not displayed | Public office location, if approved |
| Business email | Conditional from environment | Verified public enquiry email |
| Certifications | Not displayed | Certification name, issuer, certificate ID and scope |
| Partners/integrations | Not displayed as confirmed | Approved partner names and relationship scope |
| Game RTP/volatility/max win | Only displayed where typed content provides values | Final math sheets and approved public specifications |
| Release status | Uses cautious demo/portfolio/request states | Business-approved status per title |
| Portfolio results | Not published | Case-study results or permission to state confidential availability |

## Review Notes

- `content/company.ts` now centralizes unverified company facts in `companyFacts`.
- Contact, footer and structured data avoid invented address, phone or legal fields.
- Public CTAs are normalized around `Discuss a Project`, `Explore Games`, `Play Demo`, `Request Portfolio` and `Discuss Integration`.
