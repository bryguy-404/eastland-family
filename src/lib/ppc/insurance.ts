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

// The project manager's 15 September feedback confirms the campaign message:
// Eastland accepts these carriers. Lead with acceptance and scheduling throughout.
// Specific network products, coverage, and claim-handling details remain plan-dependent.
export function insuranceCopy(slug: InsuranceCarrier) {
  const carrier = insuranceCarriers[slug];
  // Keep the Delta Dental brand from becoming “Delta Dental Dental Insurance.”
  const dentalName = carrier === "Delta Dental" ? carrier : `${carrier} Dental`;
  const hero: HeroCopy = {
    heading: `Have ${dentalName} Insurance?`,
    accent: "We Accept It at Eastland.",
    body: `Eastland Family Dental accepts ${carrier} insurance for dental care in Independence, MO. From your next checkup to care for the whole family, we're here to help. New patients welcome—call to schedule your visit.`,
  };
  const variants: Record<string, HeroCopy> = {
    dentist: {
      heading: `A Dentist Who Accepts ${carrier}`, accent: "Right Here in Independence, MO",
      body: `Eastland Family Dental accepts ${carrier} insurance and welcomes new patients. Find care for your smile and your family with a local team. Call to schedule your visit.`,
    },
    "near-me": {
      heading: `${carrier} Accepted Near You`, accent: "Visit Eastland in Independence, MO",
      body: `Looking for a nearby dentist? Eastland Family Dental accepts ${carrier} insurance, just off US-40 near Little Blue Parkway. Call to schedule care close to home.`,
    },
    "find-a-dentist": {
      heading: `Looking for a Dentist Who Accepts ${carrier}?`, accent: "You've Found Eastland Family Dental.",
      body: `Eastland Family Dental accepts ${carrier} insurance and cares for children and adults in Independence, MO. We'd love to welcome you. Call to arrange your first visit.`,
    },
    accepts: {
      heading: `Yes, We Accept ${carrier}.`, accent: "Call to Schedule Your Visit.",
      body: `You can use your ${carrier} insurance at Eastland Family Dental in Independence, MO. Whether you're due for a cleaning or looking for a new family dentist, our team is ready to welcome you.`,
    },
    "dental-care": {
      heading: `Dental Care With ${carrier} Insurance`, accent: "Your Family Is Welcome at Eastland.",
      body: `Eastland Family Dental accepts ${carrier} insurance. Explore cleanings, fillings, crowns, dentures, and children's care in one general family practice. Call to schedule your next visit.`,
    },
  };
  const faqs = [
    {
      question: `Do you accept ${carrier} insurance?`,
      answer: `Yes. Eastland Family Dental accepts ${carrier} insurance. Call (816) 795-7007 to schedule your visit and have your insurance card handy. Coverage, network details, and out-of-pocket costs depend on your specific plan and treatment.`,
      location: "faq-accept",
    },
    {
      question: "What do I need to have ready when I call?",
      answer: `Tell us who needs an appointment and what brings you in. Have your ${carrier} card, member ID, and group number handy if available. Our scheduling team can discuss appointment times and what to bring to your visit.`,
    },
    {
      question: "How much will my visit cost?",
      answer: "Your cost depends on your treatment and your plan's benefits, network terms, and exclusions. An examination may be needed to prepare an estimate. Ask the team about expected out-of-pocket costs before treatment; your insurer determines payment under your plan.",
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
      answer: `Yes. New patients with ${carrier} insurance are welcome at Eastland. Call (816) 795-7007 and our scheduling coordinator can help you find a time for your first visit.`,
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

export const insuranceHighlights = [
  { icon: "people", title: "New Patients Welcome", body: "Looking for a new dental home? Our team is ready to welcome you and help you schedule your first visit." },
  { icon: "smile", title: "Care for the Family", body: "Children and adults can see the same general dental team, with care that grows with your family's needs." },
  { icon: "tooth", title: "More Care in One Place", body: "From checkups and cleanings to fillings, crowns, and dentures, explore care for your smile at Eastland." },
  { icon: "clock", title: "Early Appointments", body: "Our office opens at 7:00 AM, Monday through Thursday. Call to find an available time that fits your day." },
] as const;

export const insuranceServices = [
  { icon: "sparkle", title: "Cleanings & Exams", body: "Routine cleanings, exams, digital X-rays and preventive care for children and adults. Keep up with your smile's everyday needs.", cta: "Book a cleaning", location: "svc-cleanings" },
  { icon: "tooth", title: "Fillings & Crowns", body: "Tooth-colored fillings and CEREC ceramic crowns designed and milled in the office. Same-day crowns are an option for eligible cases; some teeth need laboratory work or additional visits.", cta: "Schedule a tooth evaluation", location: "svc-restorative" },
  { icon: "smile", title: "Children's Dentistry", body: "Age-appropriate visits in a family practice, with fluoride and sealants when recommended. Ask about coordinating the children's appointments with your own.", cta: "Book the family", location: "svc-kids" },
  { icon: "heart", title: "Gum & Periodontal Care", body: "Diagnosis, treatment and ongoing maintenance for gum disease, with a care plan based on your examination and ongoing needs.", cta: "Ask about gum health", location: "svc-perio" },
  { icon: "people", title: "Dentures & Implants", body: "Full, partial, immediate and implant-supported dentures, plus bridges and extractions. An examination helps determine suitable options and treatment timing.", cta: "Talk through options", location: "svc-dentures" },
  { icon: "heart", title: "Sedation & Comfort", body: "Ask about nitrous oxide and other sedation options appropriate to your needs. Missouri Medicaid is accepted for sedation dentistry; eligibility and benefits need to be checked.", cta: "Ask about comfort", location: "svc-sedation" },
] as const;

// Complete supplied reviews, in the order requested in all five briefs.
export const insuranceReviews = ["ashtin", "ronda", "dave", "matthew", "daniil"].map((key) => practiceReviews[key]);
export const insuranceAreas = ["Independence", "Blue Springs", "Lee's Summit", "Raytown", "Grain Valley", "Sugar Creek", "Buckner", "Oak Grove", "East Kansas City"];
