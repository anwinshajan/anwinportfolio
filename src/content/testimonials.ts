// ============================================================
//  TESTIMONIALS CONTENT — edit this file to add real testimonials
//
//  HOW TO ADD A REAL TESTIMONIAL:
//  1. Replace a placeholder entry's fields with real data
//  2. Set `isPlaceholder: false`
//  3. Deploy — the card will appear in the Testimonials section
// ============================================================

export interface Testimonial {
  /** Person's full name */
  name: string;
  /** Their title and company (e.g. "CEO, Acme Corp") */
  role: string;
  /** The quote text (1-3 sentences works best) */
  quote: string;
  /** 1–5 star rating */
  rating: number;
  /** Optional initials shown in avatar placeholder (max 2 chars) */
  initials: string;
  /** Set to false once you replace with real data */
  isPlaceholder?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rahul Menon",
    role: "Founder, TechStart Kerala",
    quote:
      "Anwin delivered our entire web platform in record time. The attention to detail and technical depth is exceptional — he doesn't just build what you ask for, he builds what you actually need.",
    rating: 5,
    initials: "RM",
    isPlaceholder: true,
  },
  {
    name: "Priya Nair",
    role: "Marketing Director, Bloom Retail",
    quote:
      "The WhatsApp automation system Anweo built for us transformed our customer communication. Response times dropped by 80% and conversions went up significantly.",
    rating: 5,
    initials: "PN",
    isPlaceholder: true,
  },
  {
    name: "Arun Krishnan",
    role: "CEO, GrowthLab Digital",
    quote:
      "Working with Anwin is genuinely different. He brings a product-builder's mindset to every client project — not just execution, but strategy, architecture, and long-term thinking.",
    rating: 5,
    initials: "AK",
    isPlaceholder: true,
  },
];
