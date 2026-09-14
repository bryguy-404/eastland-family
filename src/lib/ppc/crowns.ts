import type { HeroCopy, FaqItem, ProcessStep } from "./types";

export const crownHero: HeroCopy = {
  heading: "Dental crowns.", accent: "Often in one visit.",
  body: "Eastland uses CEREC to design and mill many eligible ceramic crowns in the office. That can mean a finished restoration in one appointment, with no temporary crown or separate placement visit.",
};
export const crownVariants: Record<string, HeroCopy> = {
  crowns: crownHero,
  "same-day": { heading: "Same-day crowns.", accent: "For eligible teeth.", body: "Many eligible ceramic crowns can be scanned, designed, milled, and fitted at Eastland in one visit. An examination determines whether the CEREC workflow is right for your tooth." },
  "crowns-near-me": { heading: "Dental crowns", accent: "close to home.", body: "Find crown care in Independence, MO, with in-office CEREC for many eligible teeth and laboratory-made options when needed. Call to discuss an examination." },
  "crown-dentist": { heading: "Crowns & bridges.", accent: "A plan for your smile.", body: "A damaged tooth and a missing tooth need different solutions. Talk with Eastland about an examination and whether a crown, bridge, or another restoration may be appropriate." },
  "broken-tooth": { heading: "A cracked tooth?", accent: "Start with a call.", body: "Tell our team about the damage, symptoms, and when it happened. We can discuss appointment availability; a clinical examination is needed to determine whether a crown or another treatment is appropriate." },
  "crown-replacement": { heading: "Crown come loose?", accent: "Let's talk next steps.", body: "Call about a loose, chipped, or missing crown. Tell us what happened so we can discuss an assessment. Whether an existing crown can be reused or needs replacing depends on an examination." },
};
export const cerecSteps: ProcessStep[] = [
  { title: "Examine", body: "Evaluate the tooth and any imaging needed to decide whether a crown is appropriate." },
  { title: "Scan", body: "Prepare the tooth and digitally record its shape and the surrounding bite." },
  { title: "Design & mill", body: "Design the restoration on screen and mill it from a ceramic block selected for the case." },
  { title: "Check & fit", body: "Check the fit, appearance, and bite, then adjust and place the finished restoration." },
];
export const crownReasons = [
  { icon: "tooth", title: "A large filling", body: "When little healthy tooth remains around a filling, a crown may provide support and protection.", cta: "Ask about your tooth", location: "ind-filling" },
  { icon: "sparkle", title: "A crack or fracture", body: "An examination identifies the extent of damage and whether a crown or another treatment may help.", cta: "Cracked tooth? Call", location: "ind-fracture" },
  { icon: "smile", title: "Significant wear", body: "A tooth affected by wear may benefit from restoring its shape, with careful attention to your bite.", cta: "Discuss your options", location: "ind-wear" },
  { icon: "heart", title: "After a root canal", body: "A treated tooth may need a crown to protect the remaining structure, especially in the back of the mouth.", cta: "Ask about next steps", location: "ind-rootcanal" },
  { icon: "people", title: "A missing tooth", body: "A bridge can replace a gap using supporting teeth or implants. The design depends on your mouth.", cta: "Ask about bridges", location: "ind-bridge" },
  { icon: "calendar", title: "An older crown", body: "A loose, damaged, or failing crown needs an assessment to determine the appropriate next step.", cta: "Talk about your crown", location: "ind-replace" },
] as const;
export const crownFaqs: FaqItem[] = [
  { question: "Can I get a crown in a single visit?", answer: "Many eligible crowns can be completed in one visit using CEREC. Suitability depends on the tooth, bite, material, and treatment needs, and is determined by clinical examination. Some cases require a dental laboratory. Call to arrange an evaluation and discuss the appointment sequence for your care." },
  { question: "How much does a crown cost?", answer: "The tooth, restoration material, and any additional treatment affect the cost. Insurance benefits also vary. After an examination, the office can discuss your treatment estimate and the process for checking coverage. CareCredit is available subject to credit approval." },
  { question: "Why might I need a crown instead of a filling?", answer: "A filling replaces an area of missing tooth structure. A crown covers the tooth and may be recommended when a large filling, damage, wear, or previous treatment has left it vulnerable. Your dentist will explain the options after examining the tooth." },
  { question: "What are crowns made from?", answer: "Crowns may be made from ceramic, metal alloys, or combinations. Material is selected with the tooth's location, appearance, remaining structure, and bite in mind. CEREC is used for selected ceramic restorations; other cases may use a laboratory." },
  { question: "My crown came off. Can you see me?", answer: "Call and explain what happened, any symptoms, and whether you still have the crown. The team can discuss appointment availability and the appropriate next step. An examination determines whether the existing crown can be reused or a replacement is needed." },
  { question: "What if I am anxious about treatment?", answer: "Mention any concerns when you call. The team can discuss local anesthetic and comfort options, including nitrous oxide when appropriate. The care plan and any sedation depend on a clinical assessment and your health history." },
  { question: "Do you also provide dental bridges?", answer: "Yes. Eastland provides bridges to replace one or more missing teeth using supporting teeth or implants. An examination determines the design and materials. Bridges may need laboratory fabrication and require cleaning underneath and around their supports." },
  { question: "Can I discuss a crown another dentist recommended?", answer: "Call about arranging an examination and tell the team what has been recommended. Ask which records or X-rays to bring. Your dentist can evaluate the tooth and discuss the recommendation with you at the visit." },
];
