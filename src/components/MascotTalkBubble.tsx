"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { about } from "@/content/site";

export default function MascotTalkBubble() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Initial popup after 4 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    // Recurring interval: visible for 7s, hidden for 12s
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-0 left-3 sm:left-10 z-40 pointer-events-none flex items-end gap-2 sm:gap-3">
      {/* Cartoon Character Container */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 160, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 160, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="pointer-events-auto flex items-end gap-2 sm:gap-3 pb-0"
          >
            {/* Mascot Image (Peeking up from bottom) */}
            <div
              className="relative h-28 w-24 sm:h-40 sm:w-36 overflow-hidden cursor-pointer group"
              onClick={() => {
                const connectEl = document.getElementById("connect");
                if (connectEl) {
                  connectEl.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Image
                src="/images/anwin_photo_v3.png"
                alt="Anwin Mascot"
                fill
                sizes="(max-width: 640px) 96px, 144px"
                className="object-contain object-bottom filter drop-shadow-[0_10px_20px_rgba(212,82,26,0.3)] transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1"
              />
            </div>

            {/* Speech Bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -10 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="relative mb-4 sm:mb-8 rounded-2xl bg-white dark:bg-[#1A1A1A] p-3 sm:p-4 text-[#1A1A1A] dark:text-white border-2 border-[#D4521A]/30 shadow-[0_12px_35px_rgba(0,0,0,0.15)] backdrop-blur-md max-w-[170px] xs:max-w-[210px] sm:max-w-xs"
            >
              {/* Speech bubble tail pointing left/down */}
              <div className="absolute -left-2.5 bottom-4 h-3.5 w-3.5 sm:h-4 sm:w-4 rotate-45 bg-white dark:bg-[#1A1A1A] border-l-2 border-b-2 border-[#D4521A]/30" />

              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDismissed(true);
                }}
                className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#1A1A1A] text-white text-xs hover:bg-[#D4521A] transition-colors border border-white/20"
                aria-label="Dismiss mascot message"
              >
                ✕
              </button>

              {/* Message Content */}
              <div className="space-y-2">
                <p className="text-sm font-medium leading-snug tracking-tight text-[#1A1A1A] dark:text-white">
                  Why starin&apos;, Let&apos;s Talk 👋
                </p>
                <a
                  href="#connect"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("connect");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4521A] hover:underline"
                >
                  <span>Get in touch</span>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
