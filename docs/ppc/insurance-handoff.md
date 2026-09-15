# Insurance campaign landing pages

Built from the five campaign briefs supplied on 15 September 2026: Ameritas, Cigna, Delta Dental, Aetna, and GEHA.

## Routes and preview

| Carrier | Local production-build preview | Production route after deployment |
| --- | --- | --- |
| Ameritas | http://127.0.0.1:4325/ppc/ameritas/ | https://www.eastlandfamilydental.com/ppc/ameritas/ |
| Cigna | http://127.0.0.1:4325/ppc/cigna/ | https://www.eastlandfamilydental.com/ppc/cigna/ |
| Delta Dental | http://127.0.0.1:4325/ppc/delta-dental/ | https://www.eastlandfamilydental.com/ppc/delta-dental/ |
| Aetna | http://127.0.0.1:4325/ppc/aetna/ | https://www.eastlandfamilydental.com/ppc/aetna/ |
| GEHA | http://127.0.0.1:4325/ppc/geha/ | https://www.eastlandfamilydental.com/ppc/geha/ |

Production deployment uses the repository's existing Cloudflare Pages integration on `main`. Verify the deployment before sharing the production URLs. Restart the local preview with `npm run build && npm run preview -- --host 127.0.0.1 --port 4325` if necessary.

The user approved publication on 15 September 2026, with the requirement that these campaigns stay unlinked from the main site. They have no incoming links from the site's navigation, header, footer, content pages, or organic sitemap.

## Implementation

- Five explicit Astro routes use `src/layouts/InsuranceCampaignLayout.astro`. Shared content and carrier names live in `src/lib/ppc/insurance.ts`, and the brief's `.efdi` design is isolated in `src/styles/ppc-insurance.css`.
- Uses the briefs' navy/porcelain/sand/powder palette, serif headings, call card, four practice highlights, six services, five full patient reviews plus a call tile, payment options, dentist, service area, eight FAQs, contact/map, footer, and mobile call bar.
- Reuses the existing BaseLayout for metadata, skip link, and GTM container. The campaign has its own header/footer and no forms or main-site navigation menu.
- Uses the existing logo and Dr. Ashworth's actual portrait. No carrier logos are included.
- Each page has 25 telephone CTAs, retaining all 25 location identifiers from the briefs. The destination uses the practice's existing international format, `tel:+18167957007`.
- All five briefs normalize to the same page source once carrier names/slugs are replaced. Their remaining differences concern ad keywords and ad-copy character counts, rather than different landing-page structures.

## Campaign message and supporting details

The project manager's feedback, relayed by Bryan on 15 September 2026, establishes the campaign message: patients with these five carriers can use their insurance at Eastland. The pages lead with carrier acceptance and an invitation to schedule. They are not guides to using insurance benefits.

- Default hero: “Have [carrier] Insurance? We Accept It at Eastland.” Every ad variant reinforces acceptance, nearby care, or becoming a patient, with scheduling as the main CTA.
- The call card, trust bar, acceptance section, call bands, first FAQ, title, description, and FAQ structured data carry the same message. The first FAQ answers “Yes” directly.
- The former deductible/annual-maximum/coverage-percentage/waiting-period lesson is replaced by reasons to choose Eastland: new patients welcome, family care, range of services, and early appointments.
- Plan-specific information remains secondary in the short hero note, acceptance-section note, payment section, FAQs, and footer. Acceptance is not presented as confirmation of every network product, every covered procedure, or a zero patient balance.
- No free or immediate benefits-check promise, guaranteed price, specific coverage rate, or callback deadline is added. Benefits verification and estimates do not guarantee insurer payment.
- Keeps CareCredit's credit-approval/monthly-payment disclosure and limits the Medicaid statement to sedation dentistry.
- Qualifies same-day CEREC crowns by eligibility and possible laboratory/additional visits. Family appointment coordination depends on availability. Eastland is described as a general family practice, with pediatric dentistry identified as a separate specialty.
- Uses all five full supplied reviews in the requested order. Removes relative dates, reviewer activity counts, an unverified aggregate Google score, and the separate Katie W. excerpt. Individual five-star ratings are from the supplied briefs; no aggregate review schema or count is added.
- Fixes the briefs' repeated “Delta Dental Dental” in headings and metadata.
- Omits unresolved privacy/terms placeholder links. The footer has working main-site and directions links and preserves carrier non-affiliation, individual-plan variation, financing, and treatment disclosures.

Carrier acceptance follows the project manager's direction; individual network products have not been independently verified. Visible copy, metadata, and FAQ structured data agree. Dentist structured data includes practice details and hours, with no specific network or aggregate-rating claim.

## Keyword variants

Every route supports all five authored options:

| `kw` | Intent |
| --- | --- |
| `dentist` | A dentist who accepts the carrier in Independence |
| `near-me` | Nearby care and office location |
| `find-a-dentist` | Finding a welcoming dentist who accepts the carrier |
| `accepts` | Direct confirmation that Eastland accepts the carrier |
| `dental-care` | Dental services at a practice accepting the carrier |

Example: `/ppc/delta-dental/?kw=find-a-dentist`. Missing, unknown, inherited-property, and HTML-shaped values keep the default. Only allowlisted text is inserted with `textContent`. Default copy and native FAQs work without JavaScript.

## Tracking and office hours

- Retains the site's existing GTM container and sends exactly one `phone_call_click` event to `dataLayer` per activation, consistent with the other PPC pages. The brief's additional direct `gtag` call is omitted to avoid a second delivery path.
- Payload includes `call_location`, `phone_number: +18167957007`, `landing_page` (carrier slug), and `carrier` (display name, including `Delta Dental` and `GEHA`).
- The tracking owner should register `carrier` and `call_location` as needed and check downstream GA4/Google Ads configuration. Browser events indicate call intent; they do not prove a connected call or booking.
- The sticky bar and current-day table row use `America/Chicago`, Monday–Thursday 7:00 AM–4:30 PM, refreshing every minute. If time-zone formatting fails, the static published hours remain visible.
- Pages use the existing PPC directive `noindex, follow` and stay outside the organic sitemap.

## Client details still needed

1. Specific contracted products, network status, and any excluded plans within the accepted carriers. Add confirmed distinctions where useful without replacing the acceptance-and-scheduling message with a benefits tutorial.
2. Benefits-verification logistics and any costs or timing, if needed for the supporting FAQs. These are not the campaign's main offer.
3. Claim-filing and reimbursement arrangements, plus how estimates and balances are discussed.
4. Actual privacy and terms URLs, and a current verified Google aggregate rating/count if that badge is desired.

The briefs also contain Google Ads operations advice (keyword changes, pausing malformed Delta Dental keywords, ad-group budgets, and trademark handling). Those notes are campaign-manager follow-ups; this task implements the landing pages and does not modify advertising accounts.

Verification results are recorded in `insurance-verification.md`.
