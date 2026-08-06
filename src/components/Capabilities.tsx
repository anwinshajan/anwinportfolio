import ScrollFade from "./ScrollFade";
import { capabilities } from "@/content/capabilities";

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="section-padding relative overflow-hidden bg-[#F3EEE7]"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <ScrollFade>
          <div className="flex items-center gap-4 mb-14">
            <span className="section-label">Capabilities</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#D4521A]/25 to-transparent" />
          </div>

          <div className="mb-14 max-w-xl">
            <h2
              className="text-4xl sm:text-5xl font-light leading-tight text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              What I build &{" "}
              <em className="not-italic text-[#D4521A]">how</em>.
            </h2>
          </div>
        </ScrollFade>

        {/* Editorial index list */}
        <div className="divide-y divide-[#E5DDD5]">
          {capabilities.map((cap, i) => (
            <ScrollFade key={cap.index} delay={i * 80}>
              <div className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-8 cursor-default">
                {/* Number */}
                <span
                  className="flex-shrink-0 text-5xl font-light leading-none text-[#E5DDD5] group-hover:text-[#D4521A]/30 transition-colors duration-500 select-none"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", minWidth: "3.5rem" }}
                  aria-hidden="true"
                >
                  {cap.index}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3">
                    {/* Animated coral rule */}
                    <div className="mt-2 flex-shrink-0 h-px w-6 bg-[#D4521A]/40 transition-all duration-500 group-hover:w-10 group-hover:bg-[#D4521A]" />
                    <h3
                      className="text-xl sm:text-2xl font-light text-[#1A1A1A] group-hover:text-[#D4521A] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                    >
                      {cap.title}
                    </h3>
                  </div>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-[#5C5C5C] font-light max-w-2xl">
                    {cap.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="flex-shrink-0 flex items-center self-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <svg
                    className="h-5 w-5 text-[#D4521A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
