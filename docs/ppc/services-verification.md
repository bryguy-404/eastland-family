# Service campaign verification

Completed 14 September 2026 against the production build served at `http://127.0.0.1:4322`. This records the dentures, crowns, and kids batch; the original family verification is in `family-handoff.md`.

## Build and site integrity

| Check | Result |
| --- | --- |
| `npm run astro -- check` | 85 files checked; zero errors, warnings, or hints |
| `npm run build` | Passed; 67 generated pages |
| `npm run audit:site` | Passed; 61 indexable URLs, 67 HTML outputs, no broken internal links or referenced assets |
| `npm run audit:migration` | Passed; 93 legacy URLs preserved or redirected |
| Homepage and family campaign | Loaded successfully in the browser after the additions |

## Browser and interaction checks

- Reviewed desktop, tablet, and mobile screenshots of all three hero sections, plus the campaign-specific sections, doctor/comfort content, FAQs, and contact areas. Lazy-loaded images were scrolled into view and confirmed loaded; the embedded map rendered.
- At 320, 390, 768, 1024, and 1440 px, all three pages fit the viewport. The mobile call bar appeared only at 640 px and below. Denture body/FAQ reading text remained at 17 px on small screens.
- All 16 authored keyword variants rendered the expected heading, accent, and body. Missing and unknown parameters retained the default. Inherited property names (`__proto__`, `toString`) and an HTML-shaped value also safely retained the default.
- Variant pages were checked at 320 and 1440 px. An additional text-boundary check at 320 and 768 px confirmed authored hero text was not clipped by the hero container.
- Every crowns variant retained the examination/laboratory qualification beside the main CTA. The pediatric-search variant identified Eastland as a general family practice and pediatric dentistry as a separate specialty.
- Each page had one H1, no form, the `noindex, follow` directive, meaningful rendered content, and no framework error overlay. Browser page-error lists were empty.
- The first native FAQ on each page opened with Enter and closed with Space.
- All 42 call links had the correct `tel:+18167957007` destination and unique campaign location identifiers: 12 dentures, 15 crowns, and 15 kids.
- Header, hero, and mobile sticky CTAs were activated through browser clicks. Remaining CTAs were activated through their DOM click handlers. Every activation produced exactly one `phone_call_click` event with the correct `landing_page`, `phone_number`, and `call_location`.

Telephone navigation was prevented during CTA testing, and analytics collection requests were blocked in the test session. No calls were placed. An initial test missed the hero button while smooth scrolling was still in progress; explicitly settling the scroll resolved the test issue, and the complete suite then passed.

## Limits and next step

The browser checks verify page behavior and the application's `dataLayer` event. They do not verify downstream GA4/Google Ads receipt, connected calls, CallRail configuration, or booking conversion. Those require the tracking owner's setup and a separate launch check.

The checks above were performed against the local production build. After pushing `main`, verify the Cloudflare deployment and the four production routes separately. Jordan's operational questions and full production URLs are in `jordan-email-draft.md`.
