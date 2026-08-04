import { ventures } from "@/data/ventures";
import ScrollFade from "./ScrollFade";

export default function Ventures() {
  return (
    <section id="ventures" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <ScrollFade>
          <h2 className="section-heading">Ventures</h2>
        </ScrollFade>

        <div className="mt-12 space-y-0 divide-y divide-cream/8">
          {ventures.map((venture, i) => (
            <ScrollFade key={venture.name} delay={i * 100}>
              <article className="group py-10 first:pt-0 last:pb-0">
                <div className="grid gap-6 md:grid-cols-5">
                  {/* Name & tagline */}
                  <div className="md:col-span-2">
                    <h3 className="font-serif text-2xl font-light text-cream transition-colors duration-300 group-hover:text-accent md:text-3xl">
                      {venture.name}
                    </h3>
                    <p className="mt-1 text-sm font-light text-cream/40">
                      {venture.tagline}
                    </p>
                  </div>

                  {/* Description & tools */}
                  <div className="md:col-span-3">
                    <p className="text-base leading-relaxed text-cream/60">
                      {venture.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {venture.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-cream/10 px-3 py-1 text-xs font-light text-cream/40 transition-colors duration-300 group-hover:border-accent/20 group-hover:text-cream/60"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {venture.url && (
                      <a
                        href={venture.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-light text-accent/70 transition-colors duration-300 hover:text-accent"
                      >
                        Visit {venture.name}
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
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
                </div>
              </article>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
