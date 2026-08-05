export interface Venture {
  name: string;
  tagline: string;
  description: string;
  tools: string[];
  url?: string;
  image?: string;
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
  },
  {
    name: "Nwee",
    tagline: "E-Commerce Venture",
    description:
      "An e-commerce platform built for speed and reliability. Nwee handles everything from product listings and inventory to payment processing and logistics, delivering a seamless buying experience.",
    tools: ["Next.js", "Supabase", "Razorpay", "Node.js"],
    url: "https://nwee.in",
    image: "/images/nwee.png",
  },
  {
    name: "Nweedu",
    tagline: "Online Tutoring for Kerala SSLC",
    description:
      "An online tutoring brand focused on Kerala SSLC students. Nweedu provides structured video lessons, live sessions, and exam-oriented preparation materials tailored to the state syllabus.",
    tools: ["Next.js", "Supabase", "Video Streaming", "Razorpay"],
    url: "https://nweedu.com",
    image: "/images/nweedu.png",
  },
  {
    name: "KGVYC",
    tagline: "Gaming Community",
    description:
      "A gaming community that brings together players, organizes tournaments, and builds a culture around competitive and casual gaming in Kerala and beyond.",
    tools: ["Discord", "Community Management", "Live Streaming"],
  },
];
