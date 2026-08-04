"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollFade({
  children,
  className = "",
  delay = 0,
}: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("scroll-fade-visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-fade ${className}`}>
      {children}
    </div>
  );
}
