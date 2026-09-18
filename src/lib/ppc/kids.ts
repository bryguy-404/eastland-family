import type { HeroCopy, FaqItem, ProcessStep } from "./types";

export const kidsHero: HeroCopy = {
  heading: "Little smiles.", accent: "A gentle beginning.",
  body: "A first checkup. A new dental home. A child who needs a little reassurance. Eastland welcomes children in a general family practice, with care for the grown-ups, too.",
};
export const kidsVariants: Record<string, HeroCopy> = {
  "pediatric-dentist": { heading: "Looking for a", accent: "pediatric dentist?", body: "Eastland provides children's care in a general family practice. Pediatric dentistry is a separate specialty. Call with your child's age and needs to discuss the appropriate setting for their care." },
  "childrens-dentist": { heading: "Children's dentistry.", accent: "A friendly first step.", body: "Dental care for children in Independence, MO, with a general family practice that makes room for questions. Tell us about your child and let's discuss their next visit." },
  "dentist-for-kids": kidsHero,
  "kids-dentist": { heading: "A dentist for kids.", accent: "And their grown-ups.", body: "Explore children's care in the same Independence practice as their parents. Share your child's age, needs, and any worries when you call our team." },
  "kids-cleaning": { heading: "Little teeth.", accent: "Healthy habits.", body: "Children's checkups, cleanings, and preventive care in a general family practice. Call Eastland to discuss an age-appropriate visit and the next step for your child." },
};
export const firstVisitSteps: ProcessStep[] = [
  { title: "A friendly introduction", body: "Meet the team and share your child's dental history, questions, and any worries about the visit." },
  { title: "A look at their smile", body: "An age-appropriate examination helps assess teeth, gums, and development. Imaging is discussed when needed." },
  { title: "Care that fits their needs", body: "Cleaning, fluoride, or sealants may be recommended based on your child's teeth, cavity risk, and readiness." },
  { title: "A clear next step", body: "Talk through findings, care at home, and any follow-up or treatment recommendations with the team." },
];
export const kidsServices = [
  { icon: "smile", title: "Exams & cleanings", body: "Age-appropriate checkups and cleanings, with attention to how your child's smile is developing.", location: "svc-exams", cta: "Ask about a checkup" },
  { icon: "sparkle", title: "Fluoride & sealants", body: "Preventive options recommended according to your child's teeth and risk of cavities.", location: "svc-sealants", cta: "Ask about prevention" },
  { icon: "tooth", title: "Growth & development", body: "Keep track of arriving adult teeth, changes in the bite, and questions as your child grows.", location: "svc-growth", cta: "Talk about growing smiles" },
  { icon: "heart", title: "Fillings & repairs", body: "An assessment of cavities or damage, followed by a discussion of suitable treatment options.", location: "svc-fillings", cta: "Discuss a tooth concern" },
  { icon: "people", title: "Healthy habits at home", body: "Practical guidance for children and caregivers on brushing, prevention, and everyday routines.", location: "svc-homecare", cta: "Ask a care question" },
  { icon: "calendar", title: "Care for parents, too", body: "Children and adults can be seen in the same practice. Ask about coordinating appointments.", location: "svc-parents", cta: "Talk about family visits" },
] as const;
export const kidsFaqs: FaqItem[] = [
  { question: "Do you see children, or do we need a pediatric dentist?", answer: "Eastland welcomes children in a general family practice. Dr. Glenn Ashworth is a general dentist; pediatric dentistry is a separate specialty. Call with your child's age, needs, and any concerns so the team can discuss whether care here or a specialist setting may be appropriate." },
  { question: "When should my child first see a dentist?", answer: "The American Academy of Pediatric Dentistry recommends a first checkup when the first tooth appears, no later than the first birthday. For care at Eastland, call with your child's age to discuss availability and the appropriate setting for their needs.", source: { label: "Read the AAPD's first-visit guidance", href: "https://www.aapd.org/resources/parent/faq/" } },
  { question: "What if my child is frightened of the dentist?", answer: "Tell us when you call, including what has been difficult at previous visits. We can discuss the approach to their appointment and appropriate comfort options. Nitrous oxide is available when clinically suitable; any treatment or sedation plan requires an assessment." },
  { question: "Can I stay with my child during the visit?", answer: "Ask the team when booking how parents are involved in the appointment. They can discuss arrangements based on your child's age, needs, and the type of visit. We want you to understand what to expect before you arrive." },
  { question: "Can my child and I have appointments together?", answer: "Ask about coordinating your family's visits when you call. Tell us who needs care and your preferred days. The arrangements depend on appointment availability and each person's treatment needs." },
  { question: "Do you take our insurance or Missouri Medicaid?", answer: "Call with your plan details to discuss the process for checking benefits. Missouri Medicaid is accepted for preventive, restorative and sedation care, with eligibility and benefits verified before treatment. Sedation is available to all patients, whatever their insurance. CareCredit is available subject to credit approval." },
  { question: "Will my child need X-rays or a cleaning at the first visit?", answer: "The services recommended depend on your child's age, teeth, cavity risk, and clinical findings. The dentist can explain the reason for any imaging or treatment and which services make sense for that visit." },
  { question: "How do I arrange a first appointment?", answer: "Call (816) 795-7007, Monday through Thursday, 7:00 AM to 4:30 PM. Share your child's age, needs, and any worries so the team can discuss availability and what to bring. Outside office hours, follow the phone system's instructions." },
];
