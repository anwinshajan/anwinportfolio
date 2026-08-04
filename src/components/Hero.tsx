"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <div
        className={`relative z-10 text-center transition-all duration-1000 ease-out ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <h1 className="font-serif text-5xl font-light tracking-tight text-cream sm:text-6xl md:text-7xl lg:text-8xl">
          Anwin Shajan
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-cream/60 sm:text-lg">
          Founder &amp; builder — shaping digital ventures from Kerala.
          <br className="hidden sm:block" />
          Anweo · Nwee · Nweedu
        </p>
      </div>

      {/* Scroll cue */}
      <div
        className={`absolute bottom-12 left-1/2 z-10 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-light uppercase tracking-[0.25em] text-cream/30">
            Scroll
          </span>
          <div className="h-8 w-px bg-cream/20" />
        </div>
      </div>
    </section>
  );
}
