"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LogEntry {
  timestamp: string;
  prefix: string;
  message: string;
  type: "success" | "info" | "highlight" | "warning";
}

const TAB_LOGS: { [key: string]: LogEntry[] } = {
  all: [
    { timestamp: "02:58:10", prefix: "ANWEO_MEDIA", message: "Rendered 4K commercial video ad campaign", type: "highlight" },
    { timestamp: "02:58:12", prefix: "WHATSAPP_BOT", message: "Automated business lead funnel dispatched", type: "success" },
    { timestamp: "02:58:15", prefix: "NWEE_STORE", message: "Razorpay + Supabase instant checkout synced", type: "info" },
    { timestamp: "02:58:18", prefix: "NWEEDU_LMS", message: "Life skills & curriculum module live", type: "success" },
    { timestamp: "02:58:22", prefix: "KGVYC_GAMING", message: "Kerala tournament leaderboard active (500+ players)", type: "highlight" },
  ],
  automation: [
    { timestamp: "02:58:01", prefix: "WA_ENGINE", message: "WhatsApp Cloud API webhook listening on port 8080", type: "info" },
    { timestamp: "02:58:05", prefix: "CRM_SYNC", message: "Google Sheets + Razorpay customer record created", type: "success" },
    { timestamp: "02:58:14", prefix: "AUTO_INVITE", message: "Digital wedding invitation link generated", type: "highlight" },
    { timestamp: "02:58:20", prefix: "NOTIFICATION", message: "Broadcast message sent to 1,200 active users", type: "success" },
  ],
  media: [
    { timestamp: "02:57:40", prefix: "BLENDER_3D", message: "Photorealistic product scene rendered (Cycles GPU)", type: "highlight" },
    { timestamp: "02:57:52", prefix: "FFMPEG_PROC", message: "H.265 video compression complete (1080p60)", type: "success" },
    { timestamp: "02:58:04", prefix: "PREMIERE_EXP", message: "Cinematic commercial master exported", type: "info" },
    { timestamp: "02:58:16", prefix: "GRAPHICS", message: "Vector brand guidelines asset package built", type: "success" },
  ],
  web: [
    { timestamp: "02:58:00", prefix: "NEXT_BUILD", message: "Turbopack SSR compilation finished in 540ms", type: "success" },
    { timestamp: "02:58:08", prefix: "VERCEL_EDGE", message: "Edge CDN cache purged & static pages deployed", type: "info" },
    { timestamp: "02:58:14", prefix: "TAILWIND_CSS", message: "Design system design tokens & fonts loaded", type: "success" },
    { timestamp: "02:58:22", prefix: "SUPABASE_DB", message: "Real-time PostgreSQL connection active", type: "highlight" },
  ],
};

export default function HeroTerminal() {
  const [activeTab, setActiveTab] = useState<keyof typeof TAB_LOGS>("all");
  const [displayedLogs, setDisplayedLogs] = useState<LogEntry[]>(TAB_LOGS.all);
  const [pulseCount, setPulseCount] = useState(148);

  useEffect(() => {
    setDisplayedLogs(TAB_LOGS[activeTab]);
  }, [activeTab]);

  // Simulate real-time background ping pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

      {/* Terminal Window Box */}
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
                anwin-studio ~ bash (ONLINE)
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#241F1A] px-3 py-0.5 text-[10px] font-mono text-[#D4521A] border border-[#382E26]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4521A] animate-ping" />
              LIVE SYSTEM
            </span>
          </div>

          {/* Interactive Log Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#1D1916] border border-[#2A241F]">
            {[
              { id: "all", label: "Ventures" },
              { id: "automation", label: "Automations" },
              { id: "media", label: "Video & 3D" },
              { id: "web", label: "Web Systems" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as keyof typeof TAB_LOGS)}
                className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-mono font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#D4521A] text-white shadow-md"
                    : "text-[#8A8177] hover:text-white hover:bg-[#2A241F]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Stream Terminal Logs */}
        <div className="relative z-20 my-4 flex-1 overflow-hidden font-mono text-xs space-y-2.5 bg-[#0B0A09] rounded-2xl p-4 border border-[#241F1A] shadow-inner">
          <div className="flex items-center justify-between text-[10px] text-[#635B52] pb-2 border-b border-[#1D1916]">
            <span>SYSTEM LOG STREAM</span>
            <span>EVENTS: {pulseCount}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-2.5"
            >
              {displayedLogs.map((entry, idx) => (
                <div key={idx} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#635B52] text-[10px] select-none">{entry.timestamp}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[9px] font-semibold tracking-wider ${
                      entry.type === "highlight"
                        ? "bg-[#D4521A]/20 text-[#E8733E] border border-[#D4521A]/40"
                        : entry.type === "success"
                        ? "bg-green-900/30 text-green-400 border border-green-800/40"
                        : "bg-[#241F1A] text-[#A0988E]"
                    }`}
                  >
                    {entry.prefix}
                  </span>
                  <span className="text-[#D6CEC4] flex-1 text-[11px]">{entry.message}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Typing Prompt Cursor */}
          <div className="flex items-center gap-2 pt-2 text-[#D4521A]">
            <span className="text-xs">$</span>
            <span className="text-xs text-[#A0988E]">ready for next deployment</span>
            <span className="h-3.5 w-2 bg-[#D4521A] animate-pulse" />
          </div>
        </div>

        {/* Footer Metrics */}
        <div
          className="relative z-20 flex items-center justify-between pt-3 border-t border-[#2A241F] text-[10px] font-mono text-[#8A8177]"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center gap-4">
            <span>Stack: <strong className="text-[#D6CEC4]">Next.js · Blender · WhatsApp API</strong></span>
          </div>
          <span className="text-[#D4521A] font-semibold uppercase tracking-wider">Kerala, IN</span>
        </div>
      </div>
    </div>
  );
}
