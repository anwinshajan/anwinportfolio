import Image from "next/image";
import { ventures } from "@/data/ventures";
import ScrollFade from "./ScrollFade";

export default function Ventures() {
  return (
    <section id="ventures" className="section-padding relative overflow-hidden bg-[#0b0c10]">
      <div className="mx-auto max-w-5xl relative z-10">
        <ScrollFade>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="section-heading">03. Digital Ventures</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37]/30 via-[#d4af37]/10 to-transparent" />
          </div>
        </ScrollFade>

        <div className="grid gap-8 md:grid-cols-2">
          {ventures.map((venture, i) => (
            <ScrollFade key={venture.name} delay={i * 100}>
              <article className="glass-card-premium group relative flex flex-col justify-between overflow-hidden rounded-2xl p-7 h-full">
                <div>
                  {/* Thumbnail Image */}
                  {venture.image && (
                    <div className="relative mb-6 h-48 w-full overflow-hidden rounded-xl border border-white/10 bg-[#0b0c10]">
                      <Image
                        src={venture.image}
                        alt={`${venture.name} Artwork`}
                        fill
                        className="object-cover object-center filter saturate-90 brightness-95 transition duration-700 group-hover:scale-104 group-hover:saturate-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12141d] via-[#12141d]/30 to-transparent opacity-80" />
                    </div>
                  )}

                  {/* Header info */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-2xl font-light text-slate-100 transition-colors duration-300 group-hover:text-[#d4af37]">
                        {venture.name}
                      </h3>
                      <p className="mt-1 text-xs font-light tracking-wide text-[#d4af37]/80">
                        {venture.tagline}
                      </p>
                    </div>

                    {venture.url && (
                      <a
                        href={venture.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/10 p-2 text-slate-400 transition duration-300 hover:border-[#d4af37]/60 hover:text-[#d4af37]"
                        aria-label={`Visit ${venture.name}`}
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.25}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </a>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300/80 font-light">
                    {venture.description}
                  </p>
                </div>

                {/* Tool Pills */}
                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {venture.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-0.5 text-[11px] font-light text-slate-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
