"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

interface NodeData {
  id: string;
  label: string;
  subtitle: string;
  type: "venture" | "skill";
  initialX: number; // offset from center in px
  initialY: number; // offset from center in px
}

const INITIAL_NODES: NodeData[] = [
  // ── Ventures ──
  { id: "anweo", label: "Anweo", subtitle: "Agency & Media", type: "venture", initialX: -160, initialY: -140 },
  { id: "nwee", label: "Nwee", subtitle: "E-Commerce", type: "venture", initialX: 160, initialY: -130 },
  { id: "nweedu", label: "Nweedu", subtitle: "EdTech Learning", type: "venture", initialX: -170, initialY: 130 },
  { id: "kgvyc", label: "KGVYC", subtitle: "Gaming Community", type: "venture", initialX: 165, initialY: 140 },

  // ── Core Skills ──
  { id: "skill_design", label: "Graphic Design", subtitle: "Brand Identity", type: "skill", initialX: -90, initialY: -210 },
  { id: "skill_web", label: "Web Architecture", subtitle: "Next.js & React", type: "skill", initialX: 100, initialY: -200 },
  { id: "skill_whatsapp", label: "WhatsApp Automation", subtitle: "Business Workflows", type: "skill", initialX: -210, initialY: -10 },
  { id: "skill_video", label: "Video Production", subtitle: "Ad & Film Editing", type: "skill", initialX: 210, initialY: 0 },
  { id: "skill_strategy", label: "Business Strategy", subtitle: "Growth Infrastructure", type: "skill", initialX: -90, initialY: 220 },
  { id: "skill_3d", label: "3D & Motion", subtitle: "Cinematic Visuals", type: "skill", initialX: 100, initialY: 210 },
];

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsets, setOffsets] = useState<{ [id: string]: { x: number; y: number } }>(() => {
    const init: { [id: string]: { x: number; y: number } } = {};
    INITIAL_NODES.forEach((n) => {
      init[n.id] = { x: n.initialX, y: n.initialY };
    });
    return init;
  });

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const centerX = containerSize.width / 2;
  const centerY = containerSize.height / 2;

  const handleDrag = (id: string, x: number, y: number) => {
    setOffsets((prev) => ({
      ...prev,
      [id]: { x, y },
    }));
  };

  return (
    <div
      className="relative group mx-auto max-[#max-w-none] lg:max-w-none perspective-1000 select-none"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        e.currentTarget.style.setProperty("--rx", `${-y / 25}deg`);
        e.currentTarget.style.setProperty("--ry", `${x / 25}deg`);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty("--rx", "0deg");
        e.currentTarget.style.setProperty("--ry", "0deg");
      }}
      style={{ perspective: "1000px" }}
    >
      {/* Coral 3D glowing pedestal */}
      <div
        className="absolute -bottom-6 -right-6 h-full w-full rounded-3xl bg-gradient-to-br from-[#D4521A]/20 via-[#D4521A]/5 to-transparent border border-[#D4521A]/20 blur-sm transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 pointer-events-none"
        aria-hidden="true"
      />

      {/* 3D Container Card */}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6] to-[#EAE3D9] shadow-[0_25px_60px_-15px_rgba(26,18,10,0.22)] border border-[#E5DDD5] transition-transform duration-200 ease-out h-[520px] sm:h-[580px] w-full"
        style={{
          transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) transform-style-3d",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Grid pattern backdrop */}
        <div
          className="absolute inset-0 opacity-[0.20] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#D4521A 0.8px, transparent 0.8px), radial-gradient(#1A1A1A 0.8px, #FAF7F2 0.8px)`,
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        />

        {/* Ambient light glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,82,26,0.15),transparent_65%)] pointer-events-none" />

        {/* Interactive Instruction Banner */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5DDD5] bg-white/80 px-3.5 py-1 text-[10px] font-semibold tracking-wider text-[#7A746E] uppercase backdrop-blur-md shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4521A] animate-ping" />
            Drag nodes to explore ventures & skills
          </span>
        </div>

        {/* SVG Dynamic Straight Lines to Center Node */}
        {containerSize.width > 0 && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {INITIAL_NODES.map((node) => {
              const current = offsets[node.id] || { x: node.initialX, y: node.initialY };
              const targetX = centerX + current.x;
              const targetY = centerY + current.y;
              const isVenture = node.type === "venture";

              return (
                <line
                  key={`line-${node.id}`}
                  x1={centerX}
                  y1={centerY}
                  x2={targetX}
                  y2={targetY}
                  stroke={isVenture ? "#D4521A" : "#1A1A1A"}
                  strokeOpacity={isVenture ? 0.35 : 0.2}
                  strokeWidth={isVenture ? 2 : 1.25}
                  strokeDasharray={isVenture ? "none" : "4 4"}
                />
              );
            })}
          </svg>
        )}

        {/* Central Node: Anwin Shajan (ME) */}
        <div
          className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ transform: "translate(-50%, -50%) translateZ(40px)" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center text-center p-4 rounded-full bg-white/90 backdrop-blur-md border border-[#D4521A]/40 shadow-xl"
          >
            <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-tr from-[#D4521A] to-[#E8733E] flex items-center justify-center shadow-md text-white font-display text-2xl font-light">
              AS
            </div>
            <span
              className="mt-2 font-display text-base sm:text-lg font-medium tracking-tight text-[#1A1A1A] leading-none"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Anwin Shajan
            </span>
            <span className="text-[9px] uppercase tracking-[0.18em] font-semibold text-[#D4521A] mt-0.5">
              Founder & Builder
            </span>
          </motion.div>
        </div>

        {/* Draggable Venture & Skill Nodes */}
        {INITIAL_NODES.map((node) => {
          const isVenture = node.type === "venture";
          return (
            <motion.div
              key={node.id}
              drag
              dragConstraints={containerRef}
              dragElastic={0.12}
              dragMomentum={false}
              onDrag={(_, info) => {
                handleDrag(node.id, node.initialX + info.offset.x, node.initialY + info.offset.y);
              }}
              initial={{ x: node.initialX, y: node.initialY, opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute z-30 top-1/2 left-1/2 cursor-grab active:cursor-grabbing"
              style={{
                x: node.initialX,
                y: node.initialY,
                marginLeft: isVenture ? "-60px" : "-55px",
                marginTop: "-20px",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className={`group/item flex items-center gap-2.5 rounded-full px-3.5 py-1.5 backdrop-blur-md border shadow-md transition-all duration-200 hover:scale-105 ${
                  isVenture
                    ? "bg-white/90 border-[#D4521A]/50 hover:border-[#D4521A] hover:bg-white"
                    : "bg-white/75 border-[#E5DDD5] hover:border-[#1A1A1A]/40 hover:bg-white"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    isVenture ? "bg-[#D4521A] animate-pulse" : "bg-[#7A746E]"
                  }`}
                />
                <div>
                  <p
                    className={`text-xs font-semibold leading-none ${
                      isVenture
                        ? "text-[#1A1A1A] group-hover/item:text-[#D4521A]"
                        : "text-[#3D3935] group-hover/item:text-[#1A1A1A]"
                    }`}
                  >
                    {node.label}
                  </p>
                  <p className="text-[9px] text-[#7A746E] font-medium leading-none mt-0.5">
                    {node.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Footer info strip */}
        <div
          className="absolute bottom-0 inset-x-0 z-30 px-6 py-3.5 flex items-center justify-between bg-white/75 backdrop-blur-md border-t border-[#E5DDD5]/80 pointer-events-none"
          style={{ transform: "translateZ(20px)" }}
        >
          <div>
            <p
              className="text-sm font-light text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Interactive Ecosystem Canvas
            </p>
            <p className="text-[10px] text-[#D4521A] font-medium tracking-wide">
              Ventures · Graphic Design · Business Strategy
            </p>
          </div>
          <span className="text-[9px] text-[#7A746E] font-mono tracking-widest uppercase border border-[#E5DDD5] bg-[#FAF7F2] px-2.5 py-0.5 rounded-full shadow-sm">
            Kerala, IN
          </span>
        </div>
      </div>
    </div>
  );
}
