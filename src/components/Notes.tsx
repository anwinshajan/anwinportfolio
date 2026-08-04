import Link from "next/link";
import { posts } from "@/data/posts";
import ScrollFade from "./ScrollFade";

export default function Notes() {
  return (
    <section id="notes" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <ScrollFade>
          <h2 className="section-heading">Notes</h2>
        </ScrollFade>

        <div className="mt-12 space-y-0 divide-y divide-cream/8">
          {posts.map((post, i) => (
            <ScrollFade key={post.slug} delay={i * 100}>
              <Link
                href={`/notes/${post.slug}`}
                className="group block py-8 first:pt-0 last:pb-0"
              >
                <article>
                  <time
                    dateTime={post.date}
                    className="text-xs font-light uppercase tracking-widest text-cream/30"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="mt-2 font-serif text-xl font-light text-cream transition-colors duration-300 group-hover:text-accent md:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/50">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-light text-cream/30 transition-colors duration-300 group-hover:text-accent/60">
                    Read more
                    <svg
                      className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </article>
              </Link>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
