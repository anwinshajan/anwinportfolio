"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left";
}

export default function ScrollFade({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const visibleClass =
      direction === "left" ? "scroll-slide-left-visible" : "scroll-fade-visible";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add(visibleClass);
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  const baseClass = direction === "left" ? "scroll-slide-left" : "scroll-fade";

  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
}
