// ============================================================
//  VENTURES CONTENT — edit this file to add / update ventures
//  Each venture renders as a card in the Ventures section.
// ============================================================

export type VentureStatus = "Live" | "Building" | "Beta";

export interface Venture {
  /** Display name of the venture */
  name: string;
  /** One-line descriptor shown below the name */
  tagline: string;
  /** 2-3 sentence description of the venture */
  description: string;
  /** Technology / tool tags shown at the bottom of the card */
  tools: string[];
  /** Optional live URL — if provided, shows an external link button */
  url?: string;
  /** Optional path to a thumbnail image in /public/images/ */
  image?: string;
  /** Current status badge on the card */
  status: VentureStatus;
  /** Optional: accent color override for this venture's card (CSS color value) */
  accentColor?: string;
}

export const ventures: Venture[] = [
  {
    name: "Anweo",
    tagline: "Digital Marketing & Advertising Agency",
    description:
      "A full-service digital agency delivering video advertisements, WhatsApp automation systems, web and app development, and digital invitation experiences. Anweo works with brands that need creative execution backed by technical infrastructure.",
    tools: ["Next.js", "Supabase", "FFmpeg", "Blender", "WhatsApp API"],
    url: "https://anweo.com",
    image: "/images/anweo.png",
    status: "Live",
  },
  {
    name: "Nwee",
    tagline: "E-Commerce Platform",
    description:
      "An e-commerce platform built for speed and reliability. Nwee handles everything from product listings and inventory to payment processing and logistics, delivering a seamless buying experience.",
    tools: ["Next.js", "Supabase", "Razorpay", "Node.js"],
    url: "https://nwee.in",
    image: "/images/nwee.png",
    status: "Live",
  },
  {
    name: "Nweedu",
    tagline: "Online Learning Platform",
    description:
      "An online learning platform for students at every level. Nweedu delivers curriculum through a fresh, engaging approach with qualified teachers — and goes beyond the classroom with content not taught in school: money management, life skills, and interest-driven learning that sets students up for real-world success.",
    tools: ["Next.js", "Supabase", "Video Streaming", "Razorpay"],
    url: "https://nweedu.com",
    image: "/images/nweedu.png",
    status: "Live",
  },
  {
    name: "KGVYC",
    tagline: "Gaming Community",
    description:
      "An established gaming community now in its expansion phase — growing tournaments, content creation, and a thriving competitive and casual gaming culture across Kerala and beyond.",
    tools: ["Discord", "Community Management", "Live Streaming"],
    image: "/images/kgvyc.png",
    status: "Live",
  },
];
