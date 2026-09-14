export type CampaignId = "dentures" | "crowns" | "kids";
export interface HeroCopy { heading: string; accent: string; body: string; }
export interface FaqItem { question: string; answer: string; source?: { label: string; href: string }; }
export interface Review { name: string; initial: string; quote: string; }
export interface ProcessStep { title: string; body: string; }
