import type { HeroCopy, FaqItem, ProcessStep } from "./types";

export const dentureHero: HeroCopy = {
  heading: "Dentures that fit",
  accent: "your next chapter.",
  body: "Full, partial, immediate, and implant-supported options, with a team that helps you understand the choices. Start with a conversation about your smile, your comfort, and your goals.",
};
export const dentureVariants: Record<string, HeroCopy> = {
  dentures: dentureHero,
  "partial-dentures": { heading: "Partial dentures.", accent: "A place for your smile.", body: "When you still have natural teeth, a partial denture may help fill the gaps. Talk with our Independence team about an examination and the options for your remaining teeth." },
  "full-dentures": { heading: "Full dentures.", accent: "A fresh beginning.", body: "Explore complete dentures for an upper or lower arch, with a plan for preparation, fitting, and follow-up. Your care starts with an examination at Eastland Family Dental." },
  "dentures-near-me": { heading: "Dentures near you.", accent: "Care close to home.", body: "Full and partial denture care right here in Independence, MO. Call Eastland Family Dental on East US Highway 40 to discuss your next step." },
  "denture-repair": { heading: "A changing fit?", accent: "Let's take a look.", body: "Loose, uncomfortable, or damaged dentures deserve an evaluation. Call to discuss whether an adjustment, reline, selected repair, or replacement may be an option for your appliance." },
};
export const dentureOptions = [
  { tag: "A COMPLETE UPPER OR LOWER ARCH", title: "Full dentures", icon: "smile", body: "A complete denture replaces all the teeth in an upper or lower arch. Its shape and fit are planned around your mouth and bite.", note: "The dentist evaluates your remaining teeth and gums before recommending a full denture.", cta: "Ask about full dentures", location: "opt-full" },
  { tag: "WORKING WITH YOUR NATURAL TEETH", title: "Partial dentures", icon: "tooth", body: "A partial denture fits around the teeth you still have. Clasps or other attachments help support the removable appliance.", note: "An examination helps determine which teeth can support the partial and how it should fit.", cta: "Ask about partial dentures", location: "opt-partial" },
  { tag: "PLANNED BEFORE EXTRACTIONS", title: "Immediate dentures", icon: "calendar", body: "For suitable cases, a denture can be made in advance and placed when remaining teeth are removed, providing teeth during healing.", note: "As gums and bone change, adjustments, relining, or replacement may be needed after healing.", cta: "Ask about immediate dentures", location: "opt-immediate" },
  { tag: "ADDITIONAL SUPPORT & STABILITY", title: "Implant-supported", icon: "sparkle", body: "Dental implants can help retain and stabilize a denture when your mouth and health history are suitable for implant treatment.", note: "Bone support, healing, and any preparation or specialist care are part of the treatment discussion.", cta: "Ask about implant options", location: "opt-implant" },
] as const;
export const dentureSteps: ProcessStep[] = [
  { title: "An examination", body: "Talk about what matters to you while the dentist evaluates your teeth, gums, jaw, and bite." },
  { title: "A plan for preparation", body: "Discuss any extractions, gum treatment, grafting, implant care, or specialist coordination that may be needed." },
  { title: "Made for your mouth", body: "Scans or impressions record your mouth so the dental laboratory can make your denture." },
  { title: "Fitting & follow-up", body: "The team checks fit, pressure spots, speech, and chewing. Follow-up visits help address the adjustment period." },
];
export const dentureFaqs: FaqItem[] = [
  { question: "Do I need full dentures or partial dentures?", answer: "That depends on the condition and number of remaining teeth and the support available. A full denture replaces all teeth in an upper or lower arch; a partial fits around remaining teeth. An examination helps determine which approach suits your mouth." },
  { question: "How much will my dentures cost?", answer: "The cost depends on the type of denture and whether other care is needed first. Call about arranging an examination, the process for checking insurance benefits, and payment options. An assessment helps establish an estimate for your treatment plan." },
  { question: "Will I be without teeth while I heal?", answer: "An immediate denture may be an option. It is planned and made before extractions, then placed when teeth are removed. Gums and bone change during healing, so adjustments, relining, or replacement may be needed. Your dentist can explain whether this approach is suitable for you." },
  { question: "How long does getting dentures take?", answer: "Timing depends on preparation, healing, and the denture being made. After an examination, the dentist can outline the expected stages and timing for your treatment needs." },
  { question: "Can you help with loose or damaged dentures?", answer: "Call to discuss an evaluation. Adjustments, relines, and selected repairs are among the practice's services, but what is possible depends on your appliance and the condition of your mouth. Tell the team what has changed and where the denture was made." },
  { question: "What if I am nervous about extractions?", answer: "Tell us when you call. We can discuss comfort options, including nitrous oxide when appropriate, and how any necessary extractions would fit into your care plan. Sedation requires an assessment of your needs and health history." },
  { question: "Is all treatment done in the same office?", answer: "Eastland offers denture care as well as extractions, grafting, and implant services. Some complex needs may require coordination with a specialist. Your dentist will explain who is involved and the sequence of care before treatment." },
];
