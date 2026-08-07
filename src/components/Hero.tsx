"use client";

import { motion, type Variants } from "framer-motion";
import { hero } from "@/content/site";
import AnimatedCounter from "./AnimatedCounter";
import HeroTerminal from "./HeroTerminal";

const springEase = "easeOut" as const;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: springEase },
  },
};

const photoVariant: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: springEase, delay: 0.3 },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* Subtle coral ambient glow top-right */}
      <div
        className="coral-glow pointer-events-none absolute -top-32 -right-32 h-[700px] w-[700px] rounded-full"
        aria-hidden="true"
      />

      {/* Grain texture */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="mx-auto max-w-6xl w-full relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8 items-center">

          {/* ── Left column: Text content ── */}
          <motion.div
            className="lg:col-span-7 xl:col-span-7 space-y-7"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={item}>
              <span
                className="inline-flex items-center gap-2.5 rounded-full border border-[#E5DDD5] bg-white/70 px-4 py-1.5 backdrop-blur-sm text-[11px] font-semibold tracking-[0.18em] uppercase text-[#7A746E]"
              >
                <span className="coral-dot" />
                {hero.badge}
              </span>
            </motion.div>

            {/* Name — large display serif */}
            <motion.div variants={item}>
              <h1
                className="font-display leading-[1.0] tracking-tight text-[#1A1A1A]"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
                  fontWeight: 300,
                }}
              >
                {hero.name.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.div variants={item}>
              <p className="text-lg font-light leading-relaxed text-[#3D3935] max-w-md sm:text-xl">
                {hero.tagline}
              </p>
            </motion.div>

            {/* Description */}
            <motion.div variants={item}>
              <p className="text-base font-light leading-relaxed text-[#7A746E] max-w-lg">
                {hero.description}
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-8 border-y border-[#E5DDD5] py-5"
            >
              {hero.stats.map((stat) => (
                <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <a href={hero.ctaPrimary.href} className="btn-coral" id="hero-cta-primary">
                {hero.ctaPrimary.label}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href={hero.ctaSecondary.href} className="btn-ghost" id="hero-cta-secondary">
                {hero.ctaSecondary.label}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right column: Studio Command Terminal & Automation Dashboard ── */}
          <motion.div
            className="lg:col-span-5 xl:col-span-5 relative"
            variants={photoVariant}
            initial="hidden"
            animate="show"
          >
            <HeroTerminal />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40" aria-hidden="true">
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#7A746E]">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-[#7A746E] to-transparent" />
      </div>
    </section>
  );
}
