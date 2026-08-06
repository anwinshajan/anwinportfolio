import ScrollFade from "./ScrollFade";
import { testimonials } from "@/content/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "text-[#D4521A]" : "text-[#E5DDD5]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden bg-[#FAF7F2]"
    >
      {/* Coral ambient glow */}
      <div
        className="coral-glow pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <ScrollFade>
          <div className="flex items-center gap-4 mb-14">
            <span className="section-label">Client Stories</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#D4521A]/25 to-transparent" />
          </div>

          <div className="mb-12 max-w-xl">
            <h2
              className="text-4xl sm:text-5xl font-light leading-tight text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Trusted by{" "}
              <em className="not-italic text-[#D4521A]">founders</em> &amp; brands.
            </h2>
          </div>
        </ScrollFade>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollFade key={t.name} delay={i * 100}>
              <article className="glass-card group relative flex flex-col rounded-2xl p-7 h-full">
                {/* Quote mark */}
                <span
                  className="absolute top-5 right-7 text-6xl font-light leading-none text-[#D4521A]/12 select-none"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Stars */}
                <StarRating rating={t.rating} />

                {/* Quote */}
                <blockquote className="mt-4 flex-1">
                  <p
                    className="text-base leading-relaxed text-[#3D3935] font-light"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.05rem" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Attribution */}
                <footer className="mt-6 flex items-center gap-3 pt-5 border-t border-[#E5DDD5]">
                  {/* Avatar */}
                  <div className="h-9 w-9 rounded-full bg-[#D4521A]/15 border border-[#D4521A]/25 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold text-[#D4521A]">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A]">{t.name}</p>
                    <p className="text-xs text-[#7A746E] font-light">{t.role}</p>
                  </div>
                </footer>
              </article>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
