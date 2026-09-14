import { familyReviews } from "../ppc-family";
import type { Review } from "./types";

// Complete reviews supplied by Jordan. These describe the practice, not treatment results.
// No aggregate rating, invented service attribution, or relative review dates.
export const practiceReviews: Record<string, Review> = {
  dave: familyReviews[0],
  matthew: familyReviews[1],
  daniil: familyReviews[2],
  ashtin: {
    name: "Ashtin Hunter", initial: "A",
    quote: "I had a great experience from start to finish. The front desk staff was welcoming, friendly, and helpful, and the doctors were kind, professional, and made me feel comfortable throughout my visit. Even though I wasn't an established patient, they were able to get me in at the last minute, which I truly appreciated. I was treated with care and respect by everyone in the office. I highly recommend this dental office to anyone looking for compassionate, quality dental care.",
  },
  ronda: {
    name: "Ronda Wright", initial: "R",
    quote: "I had an amazing experience at this dental office! The staff were friendly, welcoming, and truly made me feel comfortable. I have to give a special shout-out to Rebecca — she was thorough, and explained everything along the way. My teeth have never felt better!\n\nIf you're looking for a new dentist, just give them a try. You won't be disappointed. I'm so glad I made the switch!",
  },
};
