"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string; // e.g. "3+" or "150"
  label: string;
}

function parseNumeric(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

export default function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const { num, suffix } = parseNumeric(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1200;
          const steps = 40;
          const stepTime = duration / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += 1;
            const progress = current / steps;
            // Ease out cubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentNum = Math.round(easedProgress * num);
            setDisplayed(`${currentNum}${suffix}`);

            if (current >= steps) {
              clearInterval(timer);
              setDisplayed(value);
            }
          }, stepTime);

          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num, suffix, value, hasAnimated]);

  return (
    <div ref={ref} className="flex flex-col">
      <span
        className="font-display text-4xl font-light leading-none text-[#1A1A1A] tabular-nums"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        {displayed || "0"}
      </span>
      <span className="mt-1.5 text-xs font-medium uppercase tracking-[0.14em] text-[#7A746E]">
        {label}
      </span>
    </div>
  );
}
