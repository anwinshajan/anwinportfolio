"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { statusUpdates, type StatusUpdate } from "@/content/updates";

export default function HeroTerminal() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Business", "Venture", "Life & Learning", "Design & Tech"];

  const filteredUpdates =
    activeCategory === "All"
      ? statusUpdates
      : statusUpdates.filter((u) => u.category === activeCategory);

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
      {/* 3D Glowing backing pedestal */}
      <div
        className="absolute -bottom-5 -right-5 h-full w-full rounded-3xl bg-gradient-to-br from-[#D4521A]/20 via-[#D4521A]/5 to-transparent border border-[#D4521A]/20 blur-sm transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 pointer-events-none"
        aria-hidden="true"
      />

      {/* Terminal Window Frame */}
      <div
        className="relative overflow-hidden rounded-3xl bg-[#141210] border border-[#2A241F] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] transition-transform duration-200 ease-out p-5 sm:p-6 h-[520px] sm:h-[560px] flex flex-col justify-between"
        style={{
          transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) transform-style-3d",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Subtle scanline effect */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent 50%, rgba(255, 255, 255, 0.2) 51%)`,
            backgroundSize: "100% 4px",
          }}
        />

        {/* Terminal Header Bar */}
        <div className="relative z-20 space-y-4">
          <div className="flex items-center justify-between border-b border-[#2A241F] pb-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              <span className="ml-2 text-xs font-mono text-[#A0988E] tracking-tight">
                anwin-journal ~ bash (LIFE & BUSINESS LOGS)
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#241F1A] px-3 py-0.5 text-[10px] font-mono text-[#D4521A] border border-[#382E26]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4521A] animate-ping" />
              LIVE FEED
            </span>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-1 px-2.5 rounded-lg text-[11px] font-mono font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#D4521A] text-white shadow-md"
                    : "bg-[#1D1916] text-[#8A8177] hover:text-white hover:bg-[#2A241F] border border-[#2A241F]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Log Stream Area */}
        <div className="relative z-20 my-3 flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar font-mono text-xs bg-[#0B0A09] rounded-2xl p-4 border border-[#241F1A] shadow-inner">
          <div className="flex items-center justify-between text-[10px] text-[#635B52] pb-2 border-b border-[#1D1916]">
            <span>LATEST LIFE & BUSINESS LOGS</span>
            <span>TOTAL: {filteredUpdates.length}</span>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredUpdates.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group/log rounded-xl bg-[#171412] border border-[#26201B] p-3.5 hover:border-[#D4521A]/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[9px] font-semibold tracking-wider ${
                        item.category === "Business"
                          ? "bg-[#D4521A]/20 text-[#E8733E] border border-[#D4521A]/40"
                          : item.category === "Venture"
                          ? "bg-purple-900/30 text-purple-300 border border-purple-800/40"
                          : item.category === "Design & Tech"
                          ? "bg-blue-900/30 text-blue-300 border border-blue-800/40"
                          : "bg-amber-900/30 text-amber-300 border border-amber-800/40"
                      }`}
                    >
                      {item.category.toUpperCase()}
                    </span>
                    {item.tag && (
                      <span className="text-[10px] text-[#8A8177]">
                        [{item.tag}]
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] text-[#635B52] font-mono">
                    {item.timestamp}
                  </span>
                </div>

                <p className="text-xs font-semibold text-[#E6DFD5] group-hover/log:text-[#E8733E] transition-colors leading-snug">
                  {item.title}
                </p>

                <p className="mt-1 text-[11px] text-[#9A9187] leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Prompt Cursor */}
          <div className="flex items-center gap-2 pt-2 text-[#D4521A]">
            <span className="text-xs">$</span>
            <span className="text-xs text-[#8A8177]">post next update in /content/updates.ts</span>
            <span className="h-3.5 w-2 bg-[#D4521A] animate-pulse" />
          </div>
        </div>

        {/* Terminal Footer */}
        <div
          className="relative z-20 flex items-center justify-between pt-2 border-t border-[#2A241F] text-[10px] font-mono text-[#8A8177]"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span>Admin Feed Live Sync</span>
          </div>

          <span className="text-[#D4521A] font-semibold uppercase tracking-wider">
            Anwin Shajan
          </span>
        </div>
      </div>
    </div>
  );
}
