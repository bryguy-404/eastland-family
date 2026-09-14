# Family dentistry landing page

## Preview

- Local: `http://127.0.0.1:4321/ppc/family/`
- Production-build preview: `http://127.0.0.1:4322/ppc/family/`
- Production URL: https://www.eastlandfamilydental.com/ppc/family/
- Publishing uses the repository's existing Cloudflare Pages integration on `main`. Verify that deployment before sharing; localhost links only work on the local computer.

## Content and design decisions

- Uses the revised `eastland-family-campaign-brief.md` supplied by Jordan on 14 September 2026.
- Reuses the site's head metadata and existing GTM container through BaseLayout, with a dedicated landing page header/footer and isolated campaign styles.
- All conversion CTAs call the existing practice number. Map directions and the main website remain available as utility links.
- Consolidates age bands and services into four life stages, followed by scheduling, doctor/comfort, three complete supplied Google reviews, payment options, FAQs, and contact details.
- Uses existing practice assets: the child high-five photo, Dr. Ashworth's portrait, and Rebecca/Jessica portraits. No AI-generated staff or patient portraits.
- Uses no exact minimum patient age, aggregate star rating, discount, or promised booking lead time.
- Replaces guaranteed family grouping, immediate insurance verification, and next-business-day callbacks with conditional wording.
- Keeps the same-day benefit specific to CEREC crowns. Does not promise one-visit implants, dentures, or bridges.
- Does not claim pediatric specialist status. Medicaid wording stays specific to sedation dentistry.
- Policy URLs were not available in the supplied brief or local site. No invented policy text or broken placeholder links are published in the page. Jordan's draft email requests the existing URLs.
- CTA blue is slightly darker than the brand accent to improve white-label contrast. The site's core styles and existing pages are unchanged.

## Campaign variants

`src/lib/ppc-family.ts` stores the copy and the allowlisted `kw` variants. Only the hero heading and body change. Unknown, missing, and inherited-object-property values fall back to the default. There is one H1 and the default copy works without JavaScript.

| Parameter | Hero headline |
| --- | --- |
| no parameter | Family dentistry. For every chapter. |
| `family-dentist` | Your family dentist. Close to home. |
| `family-dentistry` | Family dentistry. For every chapter. |
| `family-dental` | Family dental care. All in one place. |
| `family-dental-clinic` | A family dental clinic. A familiar team. |
| `kids` | Little smiles. The whole family. |

## Tracking and launch follow-up

- Page is `noindex, follow` and excluded from the existing organic sitemap.
- The existing GTM container is retained. Each phone link pushes one `phone_call_click` event with `call_location`, `phone_number`, and `landing_page: family`.
- This implementation verifies the browser event only. It does not configure GA4, Google Ads, or CallRail, and does not prove events are received by those services.
- Clicks express call intent. Connected/qualified calls and booked appointments require the chosen call-tracking/conversion setup; do not represent a phone click as a completed call.
- The business phone remains the existing practice number until Jordan specifies tracking requirements.
- Client questions for all four campaigns are collected in `jordan-email-draft.md`. The three additional service pages and their current checks are documented in `services-handoff.md` and `services-verification.md`.

## Verification completed

- `npm run astro -- check`: 70 files; zero errors, warnings, or hints.
- `npm run build`: 64 generated pages, including the family landing page.
- `npm run audit:site`: 61 indexable routes; no broken internal links or referenced assets.
- `npm run audit:migration`: 93 legacy URLs remain preserved or redirected.
- Production browser preview: no page errors; no horizontal overflow at 320, 390, 768, 1024, and 1440 px.
- All five keyword variants render their expected headlines. Missing/unknown values and `__proto__`/`toString` retain the default.
- FAQ toggles work with Enter and Space. Mobile call bar displays only at the mobile breakpoint.
- Header, hero, and sticky call links each emit exactly one event with the expected section and phone number. Actual telephone navigation was prevented during the test.
- Production HTML contains one H1, nine correct phone links, zero forms, no placeholder URLs, and the noindex directive. The campaign page is absent from the organic sitemap.
