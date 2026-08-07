"use client";

import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";

interface CanvasNode {
  id: string;
  label: string;
  subtitle: string;
  type: "venture" | "skill";
  // Angle in degrees around center (0 = right, 90 = bottom, 180 = left, 270 = top)
  angleDeg: number;
  // Radius percentage relative to half-canvas size (e.g., 0.55 = 55% out from center)
  radiusRatio: number;
}

const NODES: CanvasNode[] = [
  // ── 4 Core Ventures (Symmetric Diagonal Inner Ring) ──
  { id: "anweo", label: "Anweo", subtitle: "Agency & Media", type: "venture", angleDeg: 215, radiusRatio: 0.58 },
  { id: "nwee", label: "Nwee", subtitle: "E-Commerce Platform", type: "venture", angleDeg: 325, radiusRatio: 0.58 },
  { id: "nweedu", label: "Nweedu", subtitle: "EdTech Learning", type: "venture", angleDeg: 145, radiusRatio: 0.58 },
  { id: "kgvyc", label: "KGVYC", subtitle: "Gaming Community", type: "venture", angleDeg: 35, radiusRatio: 0.58 },

  // ── Core Skills & Capabilities (Outer Ring) ──
  { id: "skill_design", label: "Graphic Design", subtitle: "Brand & Visual Identity", type: "skill", angleDeg: 265, radiusRatio: 0.84 },
  { id: "skill_web", label: "Web Architecture", subtitle: "Next.js & Frontend", type: "skill", angleDeg: 295, radiusRatio: 0.84 },
  { id: "skill_video", label: "Video Production", subtitle: "Ad Production & Edit", type: "skill", angleDeg: 10, radiusRatio: 0.85 },
  { id: "skill_3d", label: "3D & Motion", subtitle: "Cinematic Renders", type: "skill", angleDeg: 65, radiusRatio: 0.85 },
  { id: "skill_strategy", label: "Business Strategy", subtitle: "Ventures & Scaling", type: "skill", angleDeg: 115, radiusRatio: 0.85 },
  { id: "skill_whatsapp", label: "WhatsApp Automation", subtitle: "Business Systems", type: "skill", angleDeg: 175, radiusRatio: 0.85 },
];

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Store absolute position (x, y) relative to top-left of container
  const [nodePositions, setNodePositions] = useState<{ [id: string]: { x: number; y: number } }>({});

  // Compute responsive layout on size change
  const computeInitialPositions = () => {
    if (!containerRef.current) return;
    const w = containerRef.current.offsetWidth;
    const h = containerRef.current.offsetHeight;
    setDimensions({ width: w, height: h });

    const centerX = w / 2;
    const centerY = h / 2;
    // Radius base: max distance from center to corner
    const rxBase = Math.min(w / 2 - 70, 240);
    const ryBase = Math.min(h / 2 - 60, 220);

    const initialPos: { [id: string]: { x: number; y: number } } = {};
    NODES.forEach((n) => {
      const rad = (n.angleDeg * Math.PI) / 180;
      const x = centerX + Math.cos(rad) * rxBase * n.radiusRatio;
      const y = centerY + Math.sin(rad) * ryBase * n.radiusRatio;
      initialPos[n.id] = { x, y };
    });
    setNodePositions(initialPos);
  };

  useLayoutEffect(() => {
    computeInitialPositions();
  }, []);

  useEffect(() => {
    const handleResize = () => computeInitialPositions();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;

  return (
    <div
      className="relative group mx-auto w-full perspective-1000 select-none"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        e.currentTarget.style.setProperty("--rx", `${-y / 30}deg`);
        e.currentTarget.style.setProperty("--ry", `${x / 30}deg`);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty("--rx", "0deg");
        e.currentTarget.style.setProperty("--ry", "0deg");
      }}
      style={{ perspective: "1000px" }}
    >
      {/* 3D coral glowing background pedestal */}
      <div
        className="absolute -bottom-5 -right-5 h-full w-full rounded-3xl bg-gradient-to-br from-[#D4521A]/20 via-[#D4521A]/5 to-transparent border border-[#D4521A]/20 blur-sm transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main 3D Card Frame */}
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6] to-[#EAE3D9] shadow-[0_25px_60px_-15px_rgba(26,18,10,0.22)] border border-[#E5DDD5] transition-transform duration-200 ease-out h-[540px] sm:h-[600px] w-full"
        style={{
          transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) transform-style-3d",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.20] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#D4521A 0.8px, transparent 0.8px), radial-gradient(#1A1A1A 0.8px, #FAF7F2 0.8px)`,
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        />

        {/* Ambient center lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,82,26,0.14),transparent_65%)] pointer-events-none" />

        {/* Instruction Badge */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E5DDD5] bg-white/80 px-3.5 py-1 text-[10px] font-semibold tracking-wider text-[#7A746E] uppercase backdrop-blur-md shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4521A] animate-ping" />
            Drag nodes to explore ventures & capabilities
          </span>
        </div>

        {/* SVG Dynamic Connecting Lines to Center */}
        {dimensions.width > 0 && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {NODES.map((n) => {
              const pos = nodePositions[n.id];
              if (!pos) return null;
              const isVenture = n.type === "venture";

              return (
                <g key={`group-${n.id}`}>
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={pos.x}
                    y2={pos.y}
                    stroke={isVenture ? "#D4521A" : "#1A1A1A"}
                    strokeOpacity={isVenture ? 0.45 : 0.22}
                    strokeWidth={isVenture ? 2 : 1.25}
                    strokeDasharray={isVenture ? "none" : "4 4"}
                  />
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isVenture ? 3.5 : 2.5}
                    fill={isVenture ? "#D4521A" : "#7A746E"}
                  />
                </g>
              );
            })}
          </svg>
        )}

        {/* Center Node: Anwin Shajan (ME) */}
        <div
          className="absolute z-20 top-1/2 left-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{ transform: "translate(-50%, -50%) translateZ(40px)" }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center px-4 py-3 sm:px-5 sm:py-4 rounded-full bg-white/95 backdrop-blur-md border border-[#D4521A]/40 shadow-xl"
          >
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-tr from-[#D4521A] to-[#E8733E] flex items-center justify-center shadow-md text-white font-display text-xl sm:text-2xl font-light">
              AS
            </div>
            <span
              className="mt-1.5 font-display text-sm sm:text-base font-semibold tracking-tight text-[#1A1A1A] leading-none"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Anwin Shajan
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.18em] font-bold text-[#D4521A] mt-0.5">
              Founder & Builder
            </span>
          </motion.div>
        </div>

        {/* Draggable Venture & Capability Nodes */}
        {NODES.map((n) => {
          const pos = nodePositions[n.id];
          if (!pos) return null;
          const isVenture = n.type === "venture";

          return (
            <motion.div
              key={n.id}
              drag
              dragConstraints={containerRef}
              dragElastic={0.1}
              dragMomentum={false}
              onDrag={(_, info) => {
                const rad = (n.angleDeg * Math.PI) / 180;
                const rxBase = Math.min(dimensions.width / 2 - 70, 240);
                const ryBase = Math.min(dimensions.height / 2 - 60, 220);
                const initX = centerX + Math.cos(rad) * rxBase * n.radiusRatio;
                const initY = centerY + Math.sin(rad) * ryBase * n.radiusRatio;

                setNodePositions((prev) => ({
                  ...prev,
                  [n.id]: {
                    x: initX + info.offset.x,
                    y: initY + info.offset.y,
                  },
                }));
              }}
              style={{
                position: "absolute",
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                transform: "translate(-50%, -50%) translateZ(35px)",
                zIndex: isVenture ? 30 : 25,
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <div
                className={`group/item flex items-center gap-2 rounded-full px-3 py-1.5 backdrop-blur-md border shadow-md transition-all duration-200 hover:scale-105 ${
                  isVenture
                    ? "bg-white/95 border-[#D4521A]/50 hover:border-[#D4521A] hover:bg-white"
                    : "bg-white/80 border-[#E5DDD5] hover:border-[#1A1A1A]/40 hover:bg-white"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full flex-shrink-0 ${
                    isVenture ? "bg-[#D4521A] animate-pulse" : "bg-[#7A746E]"
                  }`}
                />
                <div className="whitespace-nowrap">
                  <p
                    className={`text-xs font-semibold leading-tight ${
                      isVenture
                        ? "text-[#1A1A1A] group-hover/item:text-[#D4521A]"
                        : "text-[#3D3935] group-hover/item:text-[#1A1A1A]"
                    }`}
                  >
                    {n.label}
                  </p>
                  <p className="text-[9px] text-[#7A746E] font-medium leading-none mt-0.5">
                    {n.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Footer info strip */}
        <div
          className="absolute bottom-0 inset-x-0 z-30 px-6 py-3 flex items-center justify-between bg-white/75 backdrop-blur-md border-t border-[#E5DDD5]/80 pointer-events-none"
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
