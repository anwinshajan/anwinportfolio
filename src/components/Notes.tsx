import Link from "next/link";
import ScrollFade from "./ScrollFade";
import { posts } from "@/content/notes";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Notes() {
  return (
    <section
      id="notes"
      className="section-padding relative overflow-hidden bg-[#F3EEE7]"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <ScrollFade>
          <div className="flex items-center gap-4 mb-14">
            <span className="section-label">Notes & Writing</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#D4521A]/25 to-transparent" />
          </div>

          <div className="mb-14 max-w-xl">
            <h2
              className="text-4xl sm:text-5xl font-light leading-tight text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Thinking out{" "}
              <em className="not-italic text-[#D4521A]">loud.</em>
            </h2>
          </div>
        </ScrollFade>

        {/* Editorial list */}
        <div className="divide-y divide-[#E5DDD5]">
          {posts.map((post, i) => (
            <ScrollFade key={post.slug} delay={i * 90}>
              <Link
                href={`/notes/${post.slug}`}
                className="group block py-8"
                aria-label={`Read: ${post.title}`}
              >
                <article className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        className="text-xl sm:text-2xl font-light text-[#1A1A1A] group-hover:text-[#D4521A] transition-colors duration-300 leading-tight"
                        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                      >
                        {post.title}
                        {/* Animated underline */}
                        <span
                          className="block h-px w-0 bg-[#D4521A] mt-1 transition-all duration-500 ease-out group-hover:w-full"
                          aria-hidden="true"
                        />
                      </h3>

                      {/* Arrow */}
                      <span className="flex-shrink-0 mt-1 text-[#D4521A] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-[#5C5C5C] font-light max-w-2xl">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
