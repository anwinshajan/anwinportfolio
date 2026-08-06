"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Image from "next/image";
import { hero } from "@/content/site";
import AnimatedCounter from "./AnimatedCounter";

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
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    // hero_2.jpg stays for 5 seconds (5000ms)
    // hero_3.jpg stays for 10 seconds (10000ms)
    const currentPhoto = hero.heroPhotos[photoIndex];
    const duration = currentPhoto.includes("hero_2") ? 5000 : 10000;

    const timer = setTimeout(() => {
      setPhotoIndex((prev) => (prev + 1) % hero.heroPhotos.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [photoIndex]);

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

          {/* ── Right column: Interactive 3D Floating Photo Loop ── */}
          <motion.div
            className="lg:col-span-5 xl:col-span-5 relative"
            variants={photoVariant}
            initial="hidden"
            animate="show"
          >
            <div
              className="relative group mx-auto max-w-sm lg:max-w-none perspective-1000"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                e.currentTarget.style.setProperty("--rx", `${-y / 15}deg`);
                e.currentTarget.style.setProperty("--ry", `${x / 15}deg`);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty("--rx", "0deg");
                e.currentTarget.style.setProperty("--ry", "0deg");
              }}
              style={{
                perspective: "1000px",
              }}
            >
              {/* Decorative coral glowing 3D pedestal behind photo */}
              <div
                className="absolute -bottom-6 -right-6 h-full w-full rounded-3xl bg-gradient-to-br from-[#D4521A]/20 via-[#D4521A]/5 to-transparent border border-[#D4521A]/20 blur-sm transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"
                aria-hidden="true"
              />

              {/* 3D Tilted Card Frame */}
              <div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#FAF7F2] via-[#F3EEE7] to-[#EAE3D9] shadow-[0_25px_60px_-15px_rgba(26,18,10,0.22)] border border-[#E5DDD5] transition-transform duration-200 ease-out"
                style={{
                  transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) transform-style-3d",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* 3D Depth backdrop ambient light */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,82,26,0.12),transparent_70%)] pointer-events-none" />

                {/* Floating 3D Image Container */}
                <div className="relative h-[340px] xs:h-[400px] sm:h-[480px] lg:h-[520px] w-full flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={photoIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={hero.heroPhotos[photoIndex]}
                        alt={hero.photoAlt}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </motion.div>
                  </AnimatePresence>
                  {/* Subtle warm overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Photo Pagination Indicator Dots */}
                  <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md px-3 py-1.5 border border-white/20">
                    {hero.heroPhotos.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setPhotoIndex(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === photoIndex ? "w-5 sm:w-6 bg-[#D4521A]" : "w-2 bg-white/60 hover:bg-white"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Photo caption */}
                <div
                  className="px-6 py-4 flex items-center justify-between bg-white/70 backdrop-blur-md border-t border-[#E5DDD5]/80"
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
