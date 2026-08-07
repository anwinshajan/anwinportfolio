// ============================================================
//  LIVE UPDATES CONTENT
// ============================================================

export interface StatusUpdate {
  id: string;
  date: string; // e.g. "2026.08.08"
  category: "Business" | "Life & Learning" | "Venture" | "Design & Tech";
  text: string;
  tag?: string;
}

export const statusUpdates: StatusUpdate[] = [
  {
    id: "init_1",
    date: "2026.08.08",
    category: "Business",
    text: "Terminal live updates initialized. Ready for new updates.",
  },
];
