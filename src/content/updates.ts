// ============================================================
//  LIVE UPDATES CONTENT — Edit this file to publish new life & business updates!
//  Format: LIFEUPDATE{date} >> content (Ascending date order)
// ============================================================

export interface StatusUpdate {
  id: string;
  date: string; // e.g. "2026.08.01"
  category: "Business" | "Life & Learning" | "Venture" | "Design & Tech";
  text: string;
  tag?: string;
}

export const statusUpdates: StatusUpdate[] = [
  {
    id: "up_5",
    date: "2026.08.01",
    category: "Design & Tech",
    text: "Filming & rendering 4K commercial ad campaign assets in Blender 3D & Premiere Pro",
    tag: "Video Production",
  },
  {
    id: "up_4",
    date: "2026.08.03",
    category: "Life & Learning",
    text: "Organizing Kerala's esports tournament bracket in KGVYC with 500+ active players",
    tag: "KGVYC Esports",
  },
  {
    id: "up_3",
    date: "2026.08.05",
    category: "Design & Tech",
    text: "Next.js 16 + Turbopack architecture migration completed across all portals for sub-second performance",
    tag: "Tech Stack",
  },
  {
    id: "up_2",
    date: "2026.08.07",
    category: "Venture",
    text: "Nweedu expanded with life-skills & money management modules alongside academic tutoring",
    tag: "Nweedu EdTech",
  },
  {
    id: "up_1",
    date: "2026.08.08",
    category: "Business",
    text: "Scaling Anweo's client automations (WhatsApp funnels & Razorpay workflows for 15+ SMBs)",
    tag: "Anweo Agency",
  },
];
