// Campaign copy is separate from the layout so confirmed details can be updated easily.
// Avoid age cutoffs, aggregate review ratings, and guaranteed scheduling/coverage claims.
export const familyHero = {
  heading: "Family dentistry.",
  accent: "For every chapter.",
  body: "Little smiles. Busy parents. Grandparents, too. Bring your family's dental care together with a welcoming team right here in Independence.",
};

export const familyKeywordVariants: Record<string, typeof familyHero> = {
  "family-dentist": {
    heading: "Your family dentist.",
    accent: "Close to home.",
    body: "A dental home for children, parents, and grandparents in Independence, MO. Call our team to talk through care for your whole household.",
  },
  "family-dentistry": familyHero,
  "family-dental": {
    heading: "Family dental care.",
    accent: "All in one place.",
    body: "From routine cleanings to restoring your smile, Eastland Family Dental brings care for children and adults together in one Independence office.",
  },
  "family-dental-clinic": {
    heading: "A family dental clinic.",
    accent: "A familiar team.",
    body: "General dental care for children and adults in Independence, MO. Get to know a team that makes room for your questions and helps you understand your options.",
  },
  kids: {
    heading: "Little smiles.",
    accent: "The whole family.",
    body: "A calm introduction to dental care for children, with care for parents in the same practice. Call our Independence team about your child's visit.",
  },
};

export const familyStages = [
  { label: "LITTLE SMILES", title: "Children", icon: "smile", description: "A gentle introduction to the dentist, with guidance for growing smiles and the parents behind them.", services: ["Exams & preventive care", "Fluoride & sealants", "Healthy habits at home"] },
  { label: "GROWING CONFIDENCE", title: "Teens", icon: "sparkle", description: "Support through the busy years, with everyday prevention and a clear picture of what comes next.", services: ["Cleanings & checkups", "Tooth-colored fillings", "Wisdom teeth evaluation"] },
  { label: "EVERYDAY WELL-BEING", title: "Adults", icon: "tooth", description: "Keep your smile healthy, restore a tooth, or explore a change. We will talk through your options.", services: ["Cleanings & gum care", "Same-day CEREC crowns", "Whitening & veneers"] },
  { label: "CARE THAT CONTINUES", title: "Older adults", icon: "heart", description: "Personal care to help maintain your smile, with options for restoring and replacing teeth.", services: ["Periodontal maintenance", "Dentures & partials", "Implants & bridges"] },
] as const;

// Full review text supplied in Jordan's 14 September 2026 campaign brief.
// Aggregate rating, relative dates and reviewer activity counts are intentionally omitted.
export const familyReviews = [
  {
    name: "Dave Burkhardt", initial: "D",
    quote: "Went to get my teeth cleaned and have to say it was a good visit. It was the first time I'd met Dr. Ashworth and Jessica, the hygienist, but after a few minutes of conversation I felt like we'd been friends for a while. They both were nice, and competent!",
  },
  {
    name: "Matthew Singer", initial: "M",
    quote: "Coffee and tea drinker and my teeth stain pretty quickly even with brushing. Had a very nice cleaning experience with Rebecca. Asked her opinion on a couple different things and she seemed well informed. Looked in the mirror when I got in my truck and was very pleased.",
  },
  {
    name: "Daniil Shapovalov", initial: "D",
    quote: "They have some of the nicest and most professional doctors and staff I've ever experienced. From the moment you walk in, everyone is welcoming, friendly, and makes you feel comfortable. They really take the time to care for their patients and explain everything clearly. I would highly recommend them to anyone looking for quality dental care.",
  },
];

export const familyFaqs = [
  {
    question: "Do you care for both children and adults?",
    answer: "Yes. Eastland is a general family dental practice providing care for children and adults. Call with your child's age and needs so the team can help you plan an appropriate visit. Pediatric dentistry is a separate specialty; some needs may require specialist care.",
  },
  {
    question: "Can our family have appointments together?",
    answer: "Ask our scheduling team about coordinating your family's visits. Let us know who needs to be seen and which days work for you. Appointment arrangements depend on availability and the care each person needs.",
  },
  {
    question: "How do I get started as a new patient?",
    answer: "Call (816) 795-7007 during office hours. Tell the team who needs an appointment, whether there are any immediate concerns, and your preferred days. They can discuss availability and what to bring to your visit.",
  },
  {
    question: "What if someone is nervous about the dentist?",
    answer: "Please tell us when you call. We can discuss ways to make the visit more comfortable, including nitrous oxide when appropriate. Other sedation options depend on the patient's needs and a clinical assessment.",
  },
  {
    question: "Do you accept my insurance?",
    answer: "Call with your insurance details so the office can explain the process for checking your plan and benefits. Coverage varies by plan and treatment. CareCredit is also available for qualifying patients, and Missouri Medicaid is accepted for preventive, restorative and sedation care. Sedation is available to all patients, whatever their insurance.",
  },
  {
    question: "When is the office open?",
    answer: "Monday through Thursday, 7:00 AM to 4:30 PM. The office is closed Friday through Sunday. Call during office hours to discuss appointments; if you call outside those hours, follow the phone system's instructions.",
  },
];
