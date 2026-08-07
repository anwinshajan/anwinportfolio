"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { statusUpdates, type StatusUpdate } from "@/content/updates";

export default function HeroTerminal() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [items, setItems] = useState<StatusUpdate[]>(statusUpdates);
  const consoleRef = useRef<HTMLDivElement>(null);

  const loadUpdates = () => {
    const saved = localStorage.getItem("anwin_life_updates");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch {
        setItems(statusUpdates);
      }
    } else {
      setItems(statusUpdates);
    }
  };

  useEffect(() => {
    loadUpdates();
    const handleUpdate = () => loadUpdates();
    window.addEventListener("anwin_updates_changed", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("anwin_updates_changed", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  // Auto scroll console to bottom when logs update
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [items, activeFilter]);

  const categories = [
    { id: "all", label: "all.log" },
    { id: "Business", label: "business" },
    { id: "Venture", label: "ventures" },
    { id: "Life & Learning", label: "life" },
    { id: "Design & Tech", label: "tech" },
  ];

  const filteredUpdates = (
    activeFilter === "all"
      ? items
      : items.filter((u) => u.category === activeFilter)
  ).slice().sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div
      className="relative group mx-auto w-full perspective-1000 select-none font-mono text-xs"
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
      {/* Coral 3D glowing backing pedestal */}
      <div
        className="absolute -bottom-5 -right-5 h-full w-full rounded-3xl bg-gradient-to-br from-[#D4521A]/20 via-[#D4521A]/5 to-transparent border border-[#D4521A]/20 blur-sm transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Authentic Terminal Window */}
      <div
        className="relative overflow-hidden rounded-3xl bg-[#0B0D12] border border-[#1C2333] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] transition-transform duration-200 ease-out p-5 sm:p-6 h-[520px] sm:h-[560px] flex flex-col justify-between"
        style={{
          transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) transform-style-3d",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Subtle Terminal Scanline */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent 50%, rgba(0, 229, 163, 0.15) 51%)`,
            backgroundSize: "100% 4px",
          }}
        />

        {/* Terminal Header Bar */}
        <div className="relative z-20 space-y-3.5">
          <div className="flex items-center justify-between border-b border-[#1A2130] pb-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              <span className="ml-2 text-xs text-[#6B7A90] tracking-tight">
                anwin@studio:~$ cat /logs/life-updates.log
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#121722] px-3 py-0.5 text-[10px] text-[#00E5A3] border border-[#1A2333]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00E5A3] animate-ping" />
              LIVE
            </span>
          </div>

          {/* Terminal Filter Commands */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            <span className="text-[#516175] font-semibold">$ filter:</span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`py-0.5 px-2.5 rounded text-[11px] font-mono transition-all duration-200 ${
                  activeFilter === cat.id
                    ? "bg-[#D4521A] text-white font-bold"
                    : "bg-[#141A26] text-[#7A8A9E] hover:text-[#00E5A3] hover:bg-[#1C2436] border border-[#1C2333]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Authentic Terminal Output Console */}
        <div ref={consoleRef} className="relative z-20 my-3 flex-1 overflow-y-auto pr-1 space-y-3.5 custom-scrollbar bg-[#06080C] rounded-2xl p-4 border border-[#141A26]">
          <AnimatePresence mode="popLayout">
            {filteredUpdates.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.18 }}
                className="leading-relaxed hover:bg-[#101520]/60 p-1.5 rounded transition-colors"
              >
                <div className="text-xs leading-relaxed">
                  <span className="text-[#00E5A3] font-bold select-none mr-2">
                    LIFEUPDATE&#123;{item.date}&#125; &gt;&gt;
                  </span>
                  <span className="text-[#DCE4EE] font-medium">
                    {item.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Active Terminal Input Prompt */}
          <div className="flex items-center gap-2 pt-2 text-xs">
            <span className="text-[#00E5A3] font-bold">
              anwin@studio:~$ LIFEUPDATE&#123;2026.08.08&#125; &gt;&gt;
            </span>
            <span className="h-4 w-2 bg-[#00E5A3] animate-pulse" />
          </div>
        </div>

        {/* Terminal Footer */}
        <div
          className="relative z-20 flex items-center justify-between pt-2 border-t border-[#1C2333] text-[10px] text-[#556477]"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00E5A3]" />
            <span>admin_source: /src/content/updates.ts</span>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/admin" className="hover:text-[#00E5A3] transition-colors font-mono">
              [admin_panel ⚙]
            </Link>
            <span className="text-[#D4521A] font-bold uppercase tracking-wider">
              Anwin Shajan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
