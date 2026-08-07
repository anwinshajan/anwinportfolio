"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { statusUpdates, type StatusUpdate } from "@/content/updates";

export default function HeroStatusFeed() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Business", "Venture", "Life & Learning", "Design & Tech"];

  const filteredUpdates =
    selectedCategory === "All"
      ? statusUpdates
      : statusUpdates.filter((item) => item.category === selectedCategory);

  return (
    <div
      className="relative group mx-auto w-full perspective-1000 select-none"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        e.currentTarget.style.setProperty("--rx", `${-y / 25}deg`);
        e.currentTarget.style.setProperty("--ry", `${x / 25}deg`);
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        target.style.setProperty("--rx", "0deg");
        target.style.setProperty("--ry", "0deg");
      }}
      style={{ perspective: "1000px" }}
    >
      {/* 3D Coral glowing backing pedestal */}
      <div
        className="absolute -bottom-5 -right-5 h-full w-full rounded-3xl bg-gradient-to-br from-[#D4521A]/20 via-[#D4521A]/5 to-transparent border border-[#D4521A]/20 blur-sm transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Glassmorphic Feed Card */}
      <div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6] to-[#EAE3D9] shadow-[0_25px_60px_-15px_rgba(26,18,10,0.22)] border border-[#E5DDD5] transition-transform duration-200 ease-out p-5 sm:p-6 h-[520px] sm:h-[560px] flex flex-col justify-between"
        style={{
          transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) transform-style-3d",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Ambient top light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,82,26,0.12),transparent_70%)] pointer-events-none" />

        {/* Top Header Bar & Category Filter */}
        <div className="relative z-20 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#D4521A] animate-ping" />
              <h3
                className="text-xl font-light text-[#1A1A1A] tracking-tight"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Life & Business Feed
              </h3>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E5DDD5] bg-white/80 px-3 py-0.5 text-[10px] font-semibold tracking-wider text-[#7A746E] uppercase backdrop-blur-md shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600 animate-pulse" />
              LIVE UPDATES
            </span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-1 px-3 rounded-full text-[11px] font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#D4521A] text-white shadow-sm"
                    : "bg-white/60 text-[#7A746E] hover:bg-white hover:text-[#1A1A1A] border border-[#E5DDD5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Updates Feed List */}
        <div className="relative z-20 my-3 flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar">
          <AnimatePresence mode="popLayout">
            {filteredUpdates.map((update) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group/card rounded-2xl bg-white/85 border border-[#E5DDD5] p-4 shadow-sm backdrop-blur-md hover:border-[#D4521A]/50 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded-md text-[9px] font-semibold tracking-wide ${
                        update.category === "Business"
                          ? "bg-[#D4521A]/10 text-[#D4521A] border border-[#D4521A]/20"
                          : update.category === "Venture"
                          ? "bg-purple-50 text-purple-700 border border-purple-200"
                          : update.category === "Design & Tech"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {update.category}
                    </span>
                    {update.tag && (
                      <span className="text-[10px] font-medium text-[#7A746E]">
                        • {update.tag}
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-mono text-[#7A746E]">
                    {update.timestamp}
                  </span>
                </div>

                <h4 className="text-sm font-medium text-[#1A1A1A] leading-snug group-hover/card:text-[#D4521A] transition-colors">
                  {update.title}
                </h4>

                <p className="mt-1 text-xs text-[#5C5C5C] font-light leading-relaxed">
                  {update.content}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer Admin Status Info */}
        <div
          className="relative z-20 flex items-center justify-between pt-3 border-t border-[#E5DDD5]/80 text-[10px] font-mono text-[#7A746E]"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span>Admin Feed Sync Active</span>
          </div>

          <span className="uppercase tracking-widest text-[#D4521A] font-semibold">
            Anwin Shajan
          </span>
        </div>
      </div>
    </div>
  );
}
