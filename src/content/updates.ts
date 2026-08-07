// ============================================================
//  LIVE UPDATES CONTENT — Edit this file to publish new life & business updates!
//  Newest updates appear at the top of the Hero Status Feed.
// ============================================================

export interface StatusUpdate {
  id: string;
  category: "Business" | "Life & Learning" | "Venture" | "Design & Tech";
  timestamp: string;
  title: string;
  content: string;
  tag?: string;
  isHot?: boolean;
}

export const statusUpdates: StatusUpdate[] = [
  {
    id: "up_1",
    category: "Business",
    timestamp: "Just now",
    title: "Scaling Anweo's Client Automations",
    content: "Deploying automated WhatsApp lead funnels & Razorpay booking workflows for 15+ Kerala SMBs.",
    tag: "Anweo Agency",
    isHot: true,
  },
  {
    id: "up_2",
    category: "Venture",
    timestamp: "Yesterday",
    title: "Nweedu Life-Skills Curriculum Expand",
    content: "Added money management & real-world practical skills modules alongside academic tutoring.",
    tag: "Nweedu EdTech",
  },
  {
    id: "up_3",
    category: "Design & Tech",
    timestamp: "3 days ago",
    title: "Next.js 16 + Turbopack Infrastructure",
    content: "Migrated web architecture across all venture portals for sub-second page loads & edge performance.",
    tag: "Tech Stack",
  },
  {
    id: "up_4",
    category: "Life & Learning",
    timestamp: "5 days ago",
    title: "KGVYC Community Expansion",
    content: "Organizing Kerala's next esports tournament bracket with 500+ active competitive players.",
    tag: "KGVYC Esports",
  },
  {
    id: "up_5",
    category: "Design & Tech",
    timestamp: "1 week ago",
    title: "Cinematic Video Ad Production",
    content: "Filming 4K commercial campaign assets in Blender 3D & Premiere for upcoming brand launches.",
    tag: "Video Production",
  },
];
