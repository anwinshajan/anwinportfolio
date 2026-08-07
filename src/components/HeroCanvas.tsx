"use client";

import { motion } from "framer-motion";

export default function HeroCanvas() {
  const nodes = [
    { label: "Anweo", category: "Agency & Media", top: "18%", left: "14%", delay: 0 },
    { label: "Nwee", category: "E-Commerce", top: "28%", left: "62%", delay: 0.2 },
    { label: "Nweedu", category: "EdTech Learning", top: "54%", left: "16%", delay: 0.4 },
    { label: "KGVYC", category: "Gaming Community", top: "66%", left: "60%", delay: 0.6 },
  ];

  const floatingBadges = [
    { text: "Brand Architecture", top: "10%", left: "42%" },
    { text: "Automation Systems", top: "42%", left: "70%" },
    { text: "Digital Strategy", top: "80%", left: "28%" },
  ];

  return (
    <div
      className="relative group mx-auto max-w-sm lg:max-w-none perspective-1000"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        e.currentTarget.style.setProperty("--rx", `${-y / 18}deg`);
        e.currentTarget.style.setProperty("--ry", `${x / 18}deg`);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty("--rx", "0deg");
        e.currentTarget.style.setProperty("--ry", "0deg");
      }}
      style={{ perspective: "1000px" }}
    >
      {/* Coral ambient 3D glowing backing pedestal */}
      <div
        className="absolute -bottom-6 -right-6 h-full w-full rounded-3xl bg-gradient-to-br from-[#D4521A]/20 via-[#D4521A]/5 to-transparent border border-[#D4521A]/20 blur-sm transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"
        aria-hidden="true"
      />

      {/* 3D Tilted Card Frame */}
      <div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6] to-[#EAE3D9] shadow-[0_25px_60px_-15px_rgba(26,18,10,0.22)] border border-[#E5DDD5] transition-transform duration-200 ease-out"
        style={{
          transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) transform-style-3d",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#D4521A 0.75px, transparent 0.75px), radial-gradient(#1A1A1A 0.75px, #FAF7F2 0.75px)`,
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        />

        {/* Ambient radial lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,82,26,0.14),transparent_65%)] pointer-events-none" />

        {/* Interactive Geometric Canvas Box */}
        <div className="relative h-[360px] xs:h-[420px] sm:h-[480px] lg:h-[520px] w-full flex items-center justify-center p-6 overflow-hidden">
          
          {/* Animated Connecting Mesh Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#D4521A]/20 stroke-dasharray-[4_4]">
            <motion.path
              d="M 120 100 L 260 140 L 140 280 L 250 360"
              fill="none"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 260 140 L 140 280 M 120 100 L 250 360"
              fill="none"
              strokeWidth="1"
              stroke="#1A1A1A"
              strokeOpacity="0.1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Central Emblem - Stylized Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center justify-center text-center p-6 rounded-full bg-white/60 backdrop-blur-md border border-[#E5DDD5] shadow-lg"
            style={{ transform: "translateZ(30px)" }}
          >
            <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-[#D4521A] to-[#E8733E] flex items-center justify-center shadow-md text-white font-display text-2xl font-light">
              AS
            </div>
            <span
              className="mt-3 font-display text-lg font-light tracking-tight text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Creative & Tech Matrix
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4521A] mt-0.5">
              4 Live Ecosystems
            </span>
          </motion.div>

          {/* Floating Venture Nodes */}
          {nodes.map((node) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: node.delay }}
              className="absolute z-20"
              style={{ top: node.top, left: node.left, transform: "translateZ(40px)" }}
            >
              <div className="group/node flex items-center gap-2.5 rounded-full border border-[#E5DDD5] bg-white/85 px-3.5 py-1.5 backdrop-blur-md shadow-md hover:border-[#D4521A] hover:bg-white transition-all duration-300 cursor-pointer">
                <span className="h-2 w-2 rounded-full bg-[#D4521A] animate-pulse" />
                <div>
                  <p className="text-xs font-semibold text-[#1A1A1A] leading-none group-hover/node:text-[#D4521A] transition-colors">
                    {node.label}
                  </p>
                  <p className="text-[9px] text-[#7A746E] font-medium leading-none mt-0.5">
                    {node.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Micro Floating Skill Badges */}
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={badge.text}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute z-10 pointer-events-none hidden sm:block"
              style={{ top: badge.top, left: badge.left, transform: "translateZ(25px)" }}
            >
              <span className="inline-block rounded-full bg-[#1A1A1A]/8 px-2.5 py-0.5 text-[9px] font-semibold tracking-wider uppercase text-[#5C5C5C] backdrop-blur-sm border border-[#1A1A1A]/10">
                {badge.text}
              </span>
            </motion.div>
          ))}

          {/* Subtle gradient vignette bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Footer info strip */}
        <div
          className="px-6 py-4 flex items-center justify-between bg-white/75 backdrop-blur-md border-t border-[#E5DDD5]/80"
          style={{ transform: "translateZ(20px)" }}
        >
          <div>
            <p
              className="text-base font-light text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Anwin Shajan
            </p>
            <p className="text-[11px] text-[#D4521A] font-medium tracking-wide mt-0.5">
              Entrepreneur · Graphic Designer · Business Strategist
            </p>
          </div>
          <span className="text-[10px] text-[#7A746E] font-mono tracking-widest uppercase border border-[#E5DDD5] bg-[#FAF7F2] px-2.5 py-1 rounded-full shadow-sm">
            Kerala, IN
          </span>
        </div>
      </div>
    </div>
  );
}
