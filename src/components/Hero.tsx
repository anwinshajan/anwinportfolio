"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* Soft Champagne Ambient Glow */}
      <div className="bg-glow-gold-subtle absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full pointer-events-none z-0 opacity-60 blur-3xl" />

      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="mx-auto max-w-5xl w-full relative z-10 grid gap-12 lg:grid-cols-12 items-center">
        {/* Left Column - Clean Executive Copy & Buttons */}
        <div
          className={`lg:col-span-7 space-y-6 transition-all duration-1000 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Subtle Gold Tag Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/25 bg-[#d4af37]/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
            <span className="text-[11px] font-medium tracking-[0.2em] text-[#d4af37] uppercase">
              Founder &amp; System Architect · Kerala, India
            </span>
          </div>

          {/* Elegant Serif Title */}
          <h1 className="font-serif text-5xl font-light tracking-tight text-gradient-gold sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
            Anwin Shajan
          </h1>

          {/* Clean Description */}
          <p className="max-w-xl text-base font-light leading-relaxed text-slate-300/90 sm:text-lg">
            Building high-impact digital ventures from Kerala. Founder of{" "}
            <strong className="font-normal text-amber-200/90 border-b border-[#d4af37]/40 pb-0.5">Anweo</strong>,{" "}
            <strong className="font-normal text-amber-200/90 border-b border-[#d4af37]/40 pb-0.5">Nwee</strong>, and{" "}
            <strong className="font-normal text-amber-200/90 border-b border-[#d4af37]/40 pb-0.5">Nweedu</strong>.
          </p>

          {/* Metric Bar */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400 font-light border-y border-white/10 py-4 max-w-xl">
            <div>
              <span className="font-serif text-lg font-normal text-white">3+</span>
              <span className="ml-2">Live Ventures</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div>
              <span className="font-serif text-lg font-normal text-white">Agency &amp; Tech</span>
              <span className="ml-2">Automation</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div>
              <span className="font-serif text-lg font-normal text-white">BSc</span>
              <span className="ml-2">Adult Nursing</span>
            </div>
          </div>

          {/* Premium Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#ventures"
              className="btn-premium-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-wider"
            >
              Explore Ventures ↓
            </a>
            <a
              href="#connect"
              className="btn-premium-outline px-7 py-3.5 text-xs font-semibold uppercase tracking-wider"
            >
              Get in Touch ↗
            </a>
          </div>
        </div>

        {/* Right Column - Museum Portrait Frame */}
        <div
          className={`lg:col-span-5 relative transition-all duration-1000 delay-200 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-[#d4af37]/30 to-transparent blur-md opacity-30 group-hover:opacity-60 transition duration-700" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#12141d] p-2 shadow-2xl">
              <div className="relative h-[440px] sm:h-[480px] w-full overflow-hidden rounded-xl bg-[#0b0c10]">
                <Image
                  src="/images/anwin_photo_v3.png"
                  alt="Anwin Shajan"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141d] via-transparent to-transparent opacity-60" />
              </div>

              {/* Caption */}
              <div className="px-4 py-3 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-base font-light text-slate-100">Anwin Shajan</h3>
                  <p className="text-[11px] text-[#d4af37]/80 font-light">Founder &amp; Builder</p>
                </div>
                <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase border border-white/10 px-2.5 py-1 rounded">
                  Kerala, IN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
