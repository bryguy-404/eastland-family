# Eastland service campaign pages

Implemented on 14 September 2026 from Jordan's dentures, crowns, and kids Markdown files. The existing family campaign design remains the visual foundation. Publishing uses the repository's existing Cloudflare Pages integration on `main`. No advertising account settings have been modified.

## Preview routes

| Campaign | Local production-build preview | Production URL |
| --- | --- | --- |
| Family | http://127.0.0.1:4322/ppc/family/ | https://www.eastlandfamilydental.com/ppc/family/ |
| Dentures | http://127.0.0.1:4322/ppc/dentures/ | https://www.eastlandfamilydental.com/ppc/dentures/ |
| Crowns | http://127.0.0.1:4322/ppc/crowns/ | https://www.eastlandfamilydental.com/ppc/crowns/ |
| Kids | http://127.0.0.1:4322/ppc/kids/ | https://www.eastlandfamilydental.com/ppc/kids/ |

The local preview requires the Astro preview server. Localhost links cannot be shared with Jordan. The combined email in `jordan-email-draft.md` includes the production URLs; verify the successful Cloudflare deployment and live routes before sending.

## Campaign decisions

**Dentures:** Larger reading sizes and call buttons, a real portrait of Dr. Ashworth, four denture choices, a treatment-planning sequence, cost questions, comfort, practice reviews, FAQs, and contact details. Immediate dentures are described as planned before extractions and suitable only for selected cases. Healing, relines, and possible specialist coordination remain explicit. No promise of same-day dentures, included follow-up visits, a price, or all treatment under one roof.

**Crowns:** CEREC leads the page, with a prominent scan/design/mill/fit section and the alternative laboratory workflow. The hero, CEREC section, FAQs, and footer explain that an examination determines suitability. This qualification remains beside the hero for every ad variant. No promise of crown treatment at the first appointment, a fixed appointment length, or qualification by telephone. Reasons for care include damage, large fillings, wear, root-canal protection, bridges, and replacing older crowns.

**Kids:** A first-visit walkthrough, preventive services, a section for anxious children, Dr. Ashworth's real portrait and father-of-six background, coverage, FAQs, and contact. The copy identifies the practice as general dentistry; the pediatric-search variant explains the specialty distinction directly in the hero. The AAPD's first-checkup guidance is attributed separately from Eastland's unconfirmed minimum age. No promised parent-in-room policy, lap exam, appointment duration, prizes, new-patient availability, or coordinated scheduling.

**Across all three:** Phone calls are the conversion action. Utility links provide directions, the main website, and the cited AAPD guidance. The supplied full reviews describe the Eastland team; they are not relabeled as children's, crown, or denture treatment experiences. No invented ratings, review dates, discounts, carrier participation, instant benefits checking, or callback guarantees. Medicaid language remains specific to sedation dentistry. CareCredit includes credit-approval and minimum-payment qualifications.

## Copy and implementation locations

- `src/pages/ppc/{dentures,crowns,kids}.astro`: campaign composition, introductions, sections, and metadata.
- `src/lib/ppc/{dentures,crowns,kids}.ts`: hero copy, approved parameter variants, service cards, process steps, and FAQs.
- `src/lib/ppc/reviews.ts`: complete supplied reviews; existing family reviews are reused by reference.
- `src/layouts/ServiceCampaignLayout.astro`: campaign header/footer, mobile call bar, keyword handling, and tracking.
- `src/components/ppc/Campaign*.astro`: shared hero, doctor, payment, review, FAQ, and contact sections.
- `src/styles/ppc-services.css`: campaign-specific styling, scoped under `.service-landing`. The original family page styles and markup were not changed for this batch.

Existing local assets are reused. The child high-five and adult consultation photographs illustrate care; they are not presented as patient testimonials or examples of actual treatment outcomes. Only the actual Dr. Ashworth portrait identifies a clinician. The treatment-room photo is not labeled as Eastland's room. No invented CEREC equipment photograph is used.

## Ad keyword variants

Append `?kw=VALUE` to the campaign's own path. The parameter changes the hero heading and body only. Missing, unknown, and inherited-property values retain the complete default hero. URL text is never inserted as HTML. UTM and other query parameters are left intact.

| Campaign | Supported `kw` values |
| --- | --- |
| Dentures | `dentures`, `partial-dentures`, `full-dentures`, `dentures-near-me`, `denture-repair` |
| Crowns | `crowns`, `same-day`, `crowns-near-me`, `crown-dentist`, `broken-tooth`, `crown-replacement` |
| Kids | `pediatric-dentist`, `childrens-dentist`, `dentist-for-kids`, `kids-dentist`, `kids-cleaning` |

Example: `/ppc/crowns/?kw=same-day`. Parameter mappings are ready for use but have not been entered into Google Ads.

## Tracking and publication

- All four campaign pages use `noindex, follow` and stay outside the organic sitemap. Canonicals point to their intended campaign paths without query parameters.
- The site's existing GTM container is retained. Each call link pushes one `phone_call_click` event containing `call_location`, `phone_number`, and `landing_page` (`dentures`, `crowns`, or `kids`).
- The practice phone remains `(816) 795-7007`. Campaign locations identify header, hero, service cards, process/comfort/payment, FAQs, final contact, and mobile sticky calls.
- Browser checks verify event delivery into `dataLayer`. They do not establish receipt in GA4 or Google Ads, configure CallRail, or prove a call connected. Ad conversions need to be configured and verified by the tracking owner before launch.
- Existing policy URLs and review sources are requested in the email. Broken placeholder links and made-up policy text are not rendered in the pages.
- Campaign copy uses conditional wording while Jordan confirms operational details. The corresponding ads should retain the same qualifications, particularly CEREC eligibility, general dentistry for children, and family appointment availability.

## Content basis

Practice-specific information comes from the supplied briefs and the existing site's practice, financing, doctor, CEREC, restorative, and children's-care content. Items requiring operational confirmation are listed in the email; supplied assertions of prior QA were not treated as verification of this implementation.

General explanations were checked against [ADA crown guidance](https://www.mouthhealthy.org/all-topics-a-z/crowns), [ADA denture guidance](https://www.mouthhealthy.org/all-topics-a-z/dentures), and [AAPD parent guidance](https://www.aapd.org/resources/parent/faq/). These sources support general patient education, not Eastland's appointment policies or a particular patient's eligibility.

Current technical and browser results are recorded in `services-verification.md`.
