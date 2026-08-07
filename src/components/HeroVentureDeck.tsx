"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ventures, type Venture } from "@/content/ventures";

export default function HeroVentureDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through venture cards every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ventures.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activeVenture = ventures[activeIndex];

  return (
    <div
      className="relative group mx-auto w-full perspective-1000 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={(e) => {
        setIsPaused(false);
        const target = e.currentTarget;
        target.style.setProperty("--rx", "0deg");
        target.style.setProperty("--ry", "0deg");
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        e.currentTarget.style.setProperty("--rx", `${-y / 25}deg`);
        e.currentTarget.style.setProperty("--ry", `${x / 25}deg`);
      }}
      style={{ perspective: "1000px" }}
    >
      {/* Coral 3D glowing pedestal */}
      <div
        className="absolute -bottom-5 -right-5 h-full w-full rounded-3xl bg-gradient-to-br from-[#D4521A]/20 via-[#D4521A]/5 to-transparent border border-[#D4521A]/20 blur-sm transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main 3D Card Stack Container */}
      <div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6] to-[#EAE3D9] shadow-[0_25px_60px_-15px_rgba(26,18,10,0.22)] border border-[#E5DDD5] transition-transform duration-200 ease-out p-6 sm:p-7 min-h-[520px] sm:min-h-[560px] flex flex-col justify-between"
        style={{
          transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) transform-style-3d",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Subtle background radial ambient light */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,82,26,0.12),transparent_70%)] pointer-events-none" />

        {/* Top Header & Venture Selector Tabs */}
        <div className="relative z-20 space-y-4">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E5DDD5] bg-white/80 px-3.5 py-1 text-[10px] font-semibold tracking-wider uppercase text-[#7A746E] backdrop-blur-md shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4521A] animate-pulse" />
              Featured Ventures Showcase
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#7A746E] uppercase border border-[#E5DDD5] bg-[#FAF7F2] px-2.5 py-0.5 rounded-full">
              {activeIndex + 1} / {ventures.length}
            </span>
          </div>

          {/* Interactive Venture Selector Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/5 border border-[#E5DDD5] backdrop-blur-sm">
            {ventures.map((v, i) => (
              <button
                key={v.name}
                onClick={() => setActiveIndex(i)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all duration-300 relative ${
                  i === activeIndex
                    ? "text-white shadow-md"
                    : "text-[#7A746E] hover:text-[#1A1A1A] hover:bg-white/50"
                }`}
              >
                {i === activeIndex && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 rounded-lg bg-[#D4521A]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{v.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Animated Stacked Venture Cards */}
        <div className="relative z-20 my-5 flex-1 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVenture.name}
              initial={{ opacity: 0, y: 15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.97 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full flex flex-col justify-between rounded-2xl bg-white/90 border border-[#E5DDD5] p-5 sm:p-6 shadow-xl backdrop-blur-md"
              style={{ transform: "translateZ(30px)" }}
            >
              {/* Card Banner & Title */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  {activeVenture.image && (
                    <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-[#E5DDD5] bg-[#FAF7F2] flex-shrink-0 shadow-sm">
                      <Image
                        src={activeVenture.image}
                        alt={activeVenture.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h3
                      className="text-2xl font-light text-[#1A1A1A] leading-none"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {activeVenture.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#D4521A] mt-1">
                      {activeVenture.tagline}
                    </p>
                  </div>
                </div>

                <span className="badge-live flex-shrink-0">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-600 animate-pulse" />
                  {activeVenture.status}
                </span>
              </div>

              {/* Description */}
              <p className="my-4 text-xs sm:text-sm text-[#5C5C5C] font-light leading-relaxed">
                {activeVenture.description}
              </p>

              {/* Tech Tools Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {activeVenture.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-block rounded-md border border-[#E5DDD5] bg-[#FAF7F2] px-2 py-0.5 text-[10px] font-medium text-[#7A746E]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* CTA Action Button */}
              {activeVenture.url ? (
                <a
                  href={activeVenture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-coral text-xs py-2.5 px-4 w-full flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore {activeVenture.name}</span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ) : (
                <div className="text-center py-2 text-xs font-medium text-[#7A746E] bg-[#FAF7F2] rounded-xl border border-[#E5DDD5]">
                  Live Venture
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Navigation Dots & Auto-cycle Status */}
        <div
          className="relative z-20 flex items-center justify-between pt-2 border-t border-[#E5DDD5]/80"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center gap-1.5">
            {ventures.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-[#D4521A]" : "w-1.5 bg-[#E5DDD5] hover:bg-[#7A746E]"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <span className="text-[9px] font-mono tracking-widest text-[#7A746E] uppercase">
            {isPaused ? "Paused" : "Auto-playing"}
          </span>
        </div>
      </div>
    </div>
  );
}
