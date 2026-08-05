import Link from "next/link";
import { posts } from "@/data/posts";
import ScrollFade from "./ScrollFade";

export default function Notes() {
  return (
    <section id="notes" className="section-padding relative overflow-hidden bg-[#0b0c10]">
      <div className="mx-auto max-w-5xl relative z-10">
        <ScrollFade>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="section-heading">05. Notes &amp; Thoughts</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37]/30 via-[#d4af37]/10 to-transparent" />
          </div>
        </ScrollFade>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post, i) => (
            <ScrollFade key={post.slug} delay={i * 100}>
              <Link
                href={`/notes/${post.slug}`}
                className="glass-card-premium group block rounded-2xl p-7 transition-all duration-300 h-full flex flex-col justify-between"
              >
                <article>
                  <div className="flex items-center justify-between">
                    <time
                      dateTime={post.date}
                      className="text-xs font-mono font-light uppercase tracking-wider text-[#d4af37]/80"
                    >
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="text-xs font-light text-[#d4af37] group-hover:translate-x-1 transition-transform duration-300">
                      Read note →
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-xl font-light text-slate-100 transition-colors duration-300 group-hover:text-[#d4af37]">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300/80 font-light">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
