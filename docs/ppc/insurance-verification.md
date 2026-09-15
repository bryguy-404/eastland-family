# Insurance campaign verification

Initial verification completed 15 September 2026 against the production build at `http://127.0.0.1:4325`. Covers Ameritas, Cigna, Delta Dental, Aetna, and GEHA. The acceptance-focused copy revision and its verification are recorded below.

## Build and site integrity

| Check | Result |
| --- | --- |
| `npm run astro -- check` | 94 files; zero errors, warnings, or hints |
| `npm run build` | Passed; 72 pages generated |
| `npm run audit:site` | 61 indexable URLs; 72 HTML outputs; zero broken internal links or referenced assets |
| `npm run audit:migration` | 93 legacy URLs preserved in place or redirected |
| Review comparison | All five full review texts on each carrier page match section 4.2 of that carrier's supplied brief, allowing HTML encoding/whitespace |
| Search indexing | All five routes have `noindex, follow` and are excluded from the organic sitemap |
| Main-site separation | All 67 pre-existing generated HTML pages contain no links to the five insurance routes; header, navigation, footer, and organic sitemap remain unchanged |

## Browser checks

The automated browser suite passed 440 assertions covering the five new pages and the existing home/family/dentures/crowns/kids pages. A further 20 checks covered the map request and office-hours behavior.

- Each carrier page fits 320, 390, 560, 640, 768, 860, 1024, and 1440 px viewports. Hero text and CTA labels stay within their containers. The sticky call bar appears at 860 px and below, matching the supplied design's breakpoint.
- Each page has one H1, eight native FAQs, no forms, complete rendered content, and no framework error overlay. Recorded browser page-error lists were empty for all five pages.
- Each carrier's title, canonical URL, hero, FAQ, and disclaimer use the correct carrier. Other carriers do not appear. No duplicated “Delta Dental Dental,” aggregate rating claim, free benefits-check offer, or unresolved policy/review placeholder appears.
- All five keyword variants per carrier render their authored heading, accent, and body. Unknown values, `__proto__`, `toString`, `constructor`, and an HTML-shaped value retain the default. All these cases also fit at 320 and 1440 px. The plan-confirmation note remains visible across variants.
- Each page's first FAQ closes with Enter and opens with Space. All eight FAQ questions and answers match the page's JSON-LD after whitespace normalization.
- All 25 call locations per page are unique and match the briefs' location identifiers. All 125 telephone links use `tel:+18167957007`.
- Header, hero, and sticky CTAs were activated with browser clicks. Remaining CTAs were activated through DOM click handlers. Each activation emitted exactly one `phone_call_click` event with the correct location, carrier display name, carrier slug, and phone number.
- All five dentist portraits loaded successfully. Desktop and mobile screenshots were captured for every carrier, including full-page, doctor, FAQ, contact, status, reviews, and footer views. Visual review found readable layouts and no overlapping controls.
- The embedded Google map loaded its address marker and map tiles. Initial screenshots were taken before the lazy iframe finished loading; allowing the request to finish produced a complete map. The footer also provides a direct directions link.
- The homepage and all four prior PPC campaigns still render successfully after the additions.

## Office hours

The exact generated campaign module was run in the browser against simulated instants, restoring the browser's original clock and timer functions after each check. Labels and highlighted table rows were checked for:

- 6:59 AM and 7:00 AM on a working day.
- 4:29 PM and 4:30 PM on a working day.
- A closed Friday and a closed Sunday during the daylight-saving transition.
- Midnight in the office time zone.
- Winter opening times, when the Chicago UTC offset differs from summer.
- Unavailable `Intl.DateTimeFormat`, which retains the published static hours rather than guessing from the visitor's clock.

## Evidence and limits

Local evidence is saved in `/private/tmp/eastland-insurance-qa/`, with result files `/private/tmp/eastland-insurance-qa-results.json` and `/private/tmp/eastland-insurance-edge-results.json`. Temporary runners are `/private/tmp/eastland-insurance-qa.py` and `/private/tmp/eastland-insurance-edge-qa.py`.

Telephone navigation was prevented during CTA testing, and GTM/analytics collection requests were blocked in the test browser. No calls were placed. These checks verify page behavior and the browser event, not downstream GA4/Google Ads receipt, connected calls, bookings, insurer coverage, or practice operations.

This record covers the local production build before publication. Verify the live routes after the Cloudflare deployment completes. Client confirmations and implementation decisions are in `insurance-handoff.md`.

## Acceptance-focused copy revision — 15 September 2026

Following the project manager's feedback, all five carriers now lead with acceptance and appointment scheduling. The prior benefits tutorial was replaced with practice highlights; all 25 ad variants, metadata, call-card text, first FAQ, structured data, and footer were updated consistently. The short plan-specific coverage note replaces the original plan-confirmation note described above.

- Astro check passed for 94 files with no errors, warnings, or hints. The production build generated 72 pages. Site and migration audits passed, with no broken links or assets and all 93 legacy URLs preserved or redirected.
- The revised browser suite passed 520 assertions: all five carriers, eight viewport widths (320–1440 px), every ad variant and safe fallback, carrier-specific acceptance copy, scheduling CTA, no clipped text, matching visible/structured FAQs, keyboard operation, and all 125 call events.
- Each default hero says “We Accept It at Eastland.” Every authored variant states acceptance, and every first FAQ begins with a direct “Yes” answer. Metadata also identifies the carrier as accepted. No headline leads with benefits questions, and the four-part insurance lesson is absent.
- Desktop and mobile screenshots of all five revised pages were visually reviewed. The existing design, images, phone destinations, call-location identifiers, and office-hours script were retained.
- All 67 other generated HTML pages were checked for incoming links to these campaigns; none were present. Sitemap exclusion and `noindex, follow` remain in place.
- Temporary evidence: `/private/tmp/eastland-insurance-acceptance-qa/` and `/private/tmp/eastland-insurance-acceptance-results.json`. Runner: `/private/tmp/eastland-insurance-acceptance-qa.py`.

Telephone navigation and analytics collection were blocked in the local test browser. No calls were placed. These tests verify copy consistency and page behavior; carrier acceptance comes from the project manager's supplied direction, and no blanket in-network or full-coverage claim is made. Production URLs are checked separately after the `main` deployment.
