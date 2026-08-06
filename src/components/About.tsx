import Image from "next/image";
import ScrollFade from "./ScrollFade";
import { about } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[#F3EEE7]">
      {/* Subtle coral glow */}
      <div
        className="coral-glow pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section label */}
        <ScrollFade>
          <div className="flex items-center gap-4 mb-14">
            <span className="section-label">About the Founder</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#D4521A]/25 to-transparent" />
          </div>
        </ScrollFade>

        <div className="grid gap-14 lg:grid-cols-12 items-center">

          {/* Photo — left */}
          <div className="lg:col-span-5">
            <ScrollFade delay={80} direction="left">
              <div className="relative group mx-auto max-w-sm lg:max-w-none">
                {/* Coral accent stripe */}
                <div
                  className="absolute top-8 -left-3 w-1 h-3/4 rounded-full bg-[#D4521A]/30"
                  aria-hidden="true"
                />

                <div className="relative overflow-hidden rounded-2xl border border-[#E5DDD5] shadow-[0_8px_32px_0_rgba(26,18,10,0.12)] ml-4">
                  <div className="relative h-[420px] w-full overflow-hidden bg-[#FAF7F2]">
                    <Image
                      src={about.photoSrc}
                      alt={about.photoAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                    />
                    {/* Warm overlay gradient bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F3EEE7]/40 via-transparent to-transparent" />
                  </div>

                  <div className="px-5 py-4 bg-white/60 backdrop-blur-sm border-t border-[#E5DDD5] flex items-center justify-between">
                    <div>
                      <p
                        className="text-base font-light text-[#1A1A1A]"
                        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                      >
                        Anwin Shajan
                      </p>
                      <p className="text-[11px] text-[#D4521A] font-medium tracking-wide mt-0.5">
                        Web Developer & Founder at Anweo
                      </p>
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase border border-[#E5DDD5] bg-[#FAF7F2] text-[#7A746E] px-2.5 py-1 rounded">
                      Kerala, IN
                    </span>
                  </div>
                </div>
              </div>
            </ScrollFade>
          </div>

          {/* Bio — right */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollFade delay={120}>
              {/* Large display headline */}
              <h2
                className="text-4xl sm:text-5xl font-light leading-tight text-[#1A1A1A] mb-8"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Building at the intersection of{" "}
                <em className="not-italic text-[#D4521A]">craft</em> and{" "}
                <em className="not-italic text-[#D4521A]">technology.</em>
              </h2>

              <div className="space-y-5">
                {about.bio.map((paragraph, i) => (
                  <p key={i} className="text-base leading-relaxed text-[#5C5C5C] font-light">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollFade>

            {/* Pull-quote */}
            <ScrollFade delay={220}>
              <blockquote className="relative mt-4 border-l-2 border-[#D4521A] pl-6 py-1">
                <p
                  className="text-xl sm:text-2xl font-light italic leading-relaxed text-[#1A1A1A]"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  &ldquo;{about.pullQuote}&rdquo;
                </p>
                <footer className="mt-3 text-xs font-semibold tracking-widest uppercase text-[#D4521A]">
                  — Anwin Shajan
                </footer>
              </blockquote>
            </ScrollFade>
          </div>

        </div>
      </div>
    </section>
  );
}
