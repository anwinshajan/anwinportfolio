"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { ventures } from "@/content/ventures";
import type { VentureStatus } from "@/content/ventures";
import ScrollFade from "./ScrollFade";

function StatusBadge({ status }: { status: VentureStatus }) {
  if (status === "Live") {
    return (
      <span className="badge-live">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-600" />
        Live
      </span>
    );
  }
  if (status === "Beta") {
    return <span className="badge-beta">Beta</span>;
  }
  return <span className="badge-building">Building</span>;
}

function VentureCard({ venture, index }: { venture: (typeof ventures)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 22 });
  const springY = useSpring(y, { stiffness: 180, damping: 22 });

  const rotateX = useTransform(springY, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <ScrollFade delay={index * 110}>
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card group relative flex flex-col rounded-2xl overflow-hidden h-full"
      >
        {/* Image */}
        {venture.image && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={venture.image}
              alt={`${venture.name} artwork`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle bottom border line */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-[#E5DDD5]" />
          </div>
        )}

        <div className="flex flex-col flex-1 p-7">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3
                className="text-2xl font-light text-[#1A1A1A] group-hover:text-[#D4521A] transition-colors duration-300"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {venture.name}
              </h3>
              <p className="mt-1 text-xs font-medium tracking-wide text-[#D4521A]">
                {venture.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0 flex-col sm:flex-row">
              <StatusBadge status={venture.status} />
              {venture.url && (
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5DDD5] text-[#7A746E] transition-all duration-300 hover:border-[#D4521A] hover:text-[#D4521A] hover:bg-[#FDEBD8]"
                  aria-label={`Visit ${venture.name}`}
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] font-light flex-1">
            {venture.description}
          </p>
        </div>
      </motion.div>
    </ScrollFade>
  );
}

export default function Ventures() {
  return (
    <section id="ventures" className="section-padding relative overflow-hidden bg-[#FAF7F2]">
      <div className="mx-auto max-w-6xl relative z-10">
        <ScrollFade>
          <div className="flex items-center gap-4 mb-14">
            <span className="section-label">Digital Ventures</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#D4521A]/25 to-transparent" />
          </div>

          {/* Section intro */}
          <div className="mb-12 max-w-xl">
            <h2
              className="text-4xl sm:text-5xl font-light leading-tight text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Four ventures.<br />
              One{" "}
              <em className="not-italic text-[#D4521A]">interconnected</em> vision.
            </h2>
          </div>
        </ScrollFade>

        <div className="grid gap-6 md:grid-cols-2">
          {ventures.map((venture, i) => (
            <VentureCard key={venture.name} venture={venture} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
