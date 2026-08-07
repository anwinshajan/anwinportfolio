// ============================================================
//  SITE CONTENT — edit this file to update top-level copy
//  Sections: hero, about, social links
// ============================================================

export interface HeroStat {
  label: string;
  value: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface CTA {
  label: string;
  href: string;
}

// ── Hero Section ────────────────────────────────────────────
export const hero = {
  /** Displayed as the large display name in the hero */
  name: "Anwin\nShajan",

  /** Small badge above the name */
  badge: "Entrepreneur · Graphic Designer · Business Strategist",

  /** Bold sub-headline beneath the name */
  tagline: "Entrepreneur, Graphic Designer, and Business Strategist.",

  /** Body paragraph in the hero */
  description:
    "Founder of Anweo, Nwee & Nweedu. I design, strategist, and grow brand identities — from concept to scale.",

  /** Stats displayed in the metric bar */
  stats: [
    { label: "Ventures Built", value: "5+" },
    { label: "Years of Experience", value: "5+" },
    { label: "Live Products", value: "10+" },
  ] satisfies HeroStat[],

  /** Primary CTA button */
  ctaPrimary: { label: "Explore Ventures", href: "#ventures" } satisfies CTA,

  /** Secondary CTA button */
  ctaSecondary: { label: "Get in Touch", href: "#connect" } satisfies CTA,

  /** Path to headshot photo — place image in /public/images/ */
  photoSrc: "/images/hero_avatar.jpg",
  heroPhotos: [
    "/images/hero_avatar.jpg",
  ],
  photoAlt: "Anwin Shajan — Entrepreneur, Graphic Designer & Business Strategist",
} as const;

// ── About Section ───────────────────────────────────────────
export const about = {
  /** Array of bio paragraphs. Each string renders as a <p> tag. */
  bio: [
    "I'm an entrepreneur, graphic designer, and business strategist based in Kerala, India. I build and scale internet businesses — combining strategic vision, brand execution, and growth.",
    "Anweo is my flagship digital agency: bespoke web architecture, video production, WhatsApp automation systems, and performance marketing for brands that need creative execution backed by technical infrastructure.",
    "Nweedu goes beyond conventional tutoring — we work with students at every level, teaching through a fresh and engaging lens with qualified teachers. Alongside the curriculum, we offer content not taught in school: money management, life skills, and interest-driven learning that sets students up for real-world success. Nwee is our e-commerce platform built for speed and scale.",
    "KGVYC, our gaming community, is now in its expansion phase — growing tournaments, content, and a thriving competitive culture across Kerala and beyond.",
  ],

  /** Pull-quote displayed prominently in the About section */
  pullQuote:
    "Range isn't a weakness — it's the most undervalued strength a builder can have.",

  /** Path to about photo (can be same as hero or different candid shot) */
  photoSrc: "/images/about_photo.jpg",
  photoAlt: "Anwin Shajan",
} as const;

// ── Social / Connect Links ───────────────────────────────────
export const social: SocialLink[] = [
  {
    platform: "Email",
    url: "mailto:anwinpadinjarakara@gmail.com",
    label: "anwinpadinjarakara@gmail.com",
  },
  {
    platform: "WhatsApp",
    url: "https://wa.me/918590757297",
    label: "Message Now",
  },
  {
    platform: "Call",
    url: "tel:+918590757297",
    label: "Talk Now",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/__an_xin_/",
    label: "Open Instagram",
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@anwin_shajan",
    label: "Visit Youtube",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/anwinshajan",
    label: "Visit Profile",
  },
  {
    platform: "X",
    url: "https://twitter.com/anwinshajan_",
    label: "Visit X Profile",
  },
];

// ── SEO / Meta ───────────────────────────────────────────────
export const siteUrl = "https://anwinportfolio.vercel.app";

export const siteMeta = {
  title: "Anwin Shajan | Entrepreneur, Graphic Designer & Business Strategist",
  description:
    "Anwin Shajan is a Kerala-based founder building Anweo (digital marketing agency), Nwee (e-commerce), Nweedu (online tutoring), and KGVYC (gaming community). Explore his ventures and writing.",
  keywords: [
    // Identity / Name-based
    "Anwin Shajan",
    "Anwin Shajan Kerala",
    "Anwin Shajan founder",
    "Anwin Shajan Anweo",
    "Anwin Shajan portfolio",
    // Venture-linked
    "Anweo",
    "Anweo digital marketing agency",
    "Anweo founder Kerala",
    "Nwee",
    "Nwee e-commerce Kerala",
    "Nweedu",
    "Nweedu online tutoring",
    "KGVYC",
    "KGVYC gaming community Kerala",
    // Service / Category
    "Digital marketing agency Kerala",
    "Video ad production Kerala",
    "WhatsApp automation for business",
    "Web and app development Kerala",
    "Next.js developer Kerala",
    "E-commerce website development",
    "Digital wedding invitations Kerala",
    "Google Sheets + Razorpay integration",
    "Small business automation systems",
    // Founder / Entrepreneur Positioning
    "Serial entrepreneur Kerala",
    "Multi-venture founder",
    "Bootstrapped founder India",
    "Tech founder Kerala",
    "Digital entrepreneur India",
    // Location-modified long-tail
    "Digital marketing agency Ernakulam",
    "Web developer Kerala for small business",
    "Kerala startup founder",
    "Kochi digital agency",
    // Community / Content Angle
    "Kerala gamers community",
    "YouTube gaming community India",
    "Gaming and vlogging community Kerala",
  ],
} as const;
