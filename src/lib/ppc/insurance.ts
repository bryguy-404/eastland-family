import { practiceReviews } from "./reviews";
import type { HeroCopy } from "./types";

export const insuranceCarriers = {
  ameritas: "Ameritas",
  cigna: "Cigna",
  "delta-dental": "Delta Dental",
  aetna: "Aetna",
  geha: "GEHA",
} as const;
export type InsuranceCarrier = keyof typeof insuranceCarriers;

// Source: Jordan's five 15 September 2026 briefs. Network participation, free
// phone verification, claim filing, and callback timing are still unconfirmed.
// Keep the default AND every ad variant qualified until those details are supplied.
export function insuranceCopy(slug: InsuranceCarrier) {
  const carrier = insuranceCarriers[slug];
  // Avoid the brief's accidental “Delta Dental Dental Benefits” repetition.
  const dentalName = carrier === "Delta Dental" ? carrier : `${carrier} Dental`;
  const hero: HeroCopy = {
    heading: `Using ${dentalName} Benefits in Independence, MO?`,
    accent: "Start With Your Coverage Questions",
    body: `Dental plans differ, even within the same carrier. Call Eastland Family Dental with your ${carrier} card to ask about your plan, the benefits verification process, and what you may need before booking.`,
  };
  const variants: Record<string, HeroCopy> = {
    dentist: {
      heading: `${dentalName} Benefits`, accent: "In Independence, MO",
      body: `Looking for dental care with your ${carrier} plan? Call our team about plan participation, checking benefits, and becoming a new patient.`,
    },
    "near-me": {
      heading: `Using ${dentalName} Near You?`, accent: "Right Here in Independence, MO",
      body: "We are just off US-40 near Little Blue Parkway, with parking at the door. Have your insurance card ready and call about your plan and the next steps for a visit.",
    },
    "find-a-dentist": {
      heading: `Looking for a Dentist for Your ${carrier} Plan?`, accent: "Start With Your Benefits Questions",
      body: "A directory listing is only a starting point. Call with your member ID to ask about participation in your specific plan and how benefits are checked.",
    },
    accepts: {
      heading: `Have a ${carrier} Plan?`, accent: "Talk With Our Independence Team",
      body: "Coverage and participation depend on the specific plan. Call with your card to ask how your plan may work here before scheduling care.",
    },
    "dental-care": {
      heading: `${dentalName} Care Questions?`, accent: "Let's Talk About Your Plan",
      body: "Cleanings, fillings, crowns, dentures and children's dentistry in one family practice. Call about your care needs and how to check your benefits.",
    },
  };
  const faqs = [
    {
      question: `Do you work with ${carrier} dental plans?`,
      answer: `Call (816) 795-7007 with your ${carrier} card to ask about participation in your specific plan and the process for checking benefits. Naming a carrier on this page does not confirm that the practice participates in your plan. Confirm network status, coverage, and any costs before scheduling treatment.`,
      location: "faq-accept",
    },
    {
      question: "What do I need to have ready when I call?",
      answer: `Have your ${carrier} card, member ID, and group number if available. For a child or spouse, the team may also need the subscriber's details. The office can explain any additional information needed to check the plan.`,
    },
    {
      question: "How much will my visit cost?",
      answer: "Your cost depends on the treatment you need, the practice's participation in your plan, and your plan's benefits and exclusions. An examination may be needed to prepare an estimate. Benefits verification and estimates are not a guarantee of payment by your insurer.",
    },
    {
      question: "Will you file the claim, or do I have to?",
      answer: "Ask the office how claims are handled for your specific plan, including who files the paperwork, what is due at the visit, and whether reimbursement goes to you or the practice.",
    },
    {
      question: "What if my plan does not cover everything?",
      answer: "Ask about estimated out-of-pocket costs before treatment. CareCredit financing is available for qualifying patients who want to explore monthly payments. Financing is subject to credit approval, and minimum monthly payments may be required.",
    },
    {
      question: "Are you accepting new patients?",
      answer: "Yes. Call (816) 795-7007 and our scheduling coordinator can discuss availability, what to bring, and any requirements for your plan.",
      location: "faq-newpatients",
    },
    {
      question: "Do you see children as well as adults?",
      answer: "Yes. Eastland Family Dental is a general family practice, so children and adults are seen in the same office. Ask about coordinating family visits; arrangements depend on availability and individual care needs. Pediatric dentistry is a separate dental specialty. When specialist care is appropriate, we will discuss the next step with your family.",
    },
    {
      question: "Where are you located?",
      answer: "19401 East US Highway 40, Ste. 180, Independence, MO 64055 — just off I-70 near Little Blue Parkway, with parking right outside the door. We see patients from Independence, Blue Springs, Lee's Summit, Raytown, Grain Valley and the surrounding communities.",
    },
  ];
  return { carrier, dentalName, hero, variants, faqs };
}

export const insuranceChecks = [
  { icon: "calendar", title: "Annual Maximum", body: "The most your plan pays during a benefit year, and how much you have already used. Ask when it resets and whether any unused benefits carry over." },
  { icon: "card", title: "Your Deductible", body: "The amount you may pay before the plan contributes. Ask whether it applies to your treatment and how much you have already met." },
  { icon: "tooth", title: "Coverage Percentage", body: "Preventive, basic and major treatment can be covered at different rates. Ask about your treatment, the plan's allowed amount, and any exclusions." },
  { icon: "clock", title: "Waiting Periods", body: "Some plans have waiting periods before certain treatments are covered. Check the dates and limitations before planning your care." },
] as const;

export const insuranceServices = [
  { icon: "sparkle", title: "Cleanings & Exams", body: "Routine cleanings, exams, digital X-rays and preventive care for children and adults. Recommended care and coverage depend on individual needs and your plan.", cta: "Book a cleaning", location: "svc-cleanings" },
  { icon: "tooth", title: "Fillings & Crowns", body: "Tooth-colored fillings and CEREC ceramic crowns designed and milled in the office. Same-day crowns are an option for eligible cases; some teeth need laboratory work or additional visits.", cta: "Ask what's covered", location: "svc-restorative" },
  { icon: "smile", title: "Children's Dentistry", body: "Age-appropriate visits in a family practice, with fluoride and sealants when recommended. Ask about coordinating the children's appointments with your own.", cta: "Book the family", location: "svc-kids" },
  { icon: "heart", title: "Gum & Periodontal Care", body: "Diagnosis, treatment and ongoing maintenance for gum disease. Ask how your specific plan treats periodontal care and any frequency limits.", cta: "Ask about gum health", location: "svc-perio" },
  { icon: "people", title: "Dentures & Implants", body: "Full, partial, immediate and implant-supported dentures, plus bridges and extractions. An examination helps determine suitable options and treatment timing.", cta: "Talk through options", location: "svc-dentures" },
  { icon: "heart", title: "Sedation & Comfort", body: "Ask about nitrous oxide and other sedation options appropriate to your needs. Medicaid is accepted for sedation dentistry; eligibility and benefits need to be checked.", cta: "Ask about comfort", location: "svc-sedation" },
] as const;

// Complete supplied reviews, in the order requested in all five briefs.
export const insuranceReviews = ["ashtin", "ronda", "dave", "matthew", "daniil"].map((key) => practiceReviews[key]);
export const insuranceAreas = ["Independence", "Blue Springs", "Lee's Summit", "Raytown", "Grain Valley", "Sugar Creek", "Buckner", "Oak Grove", "East Kansas City"];
