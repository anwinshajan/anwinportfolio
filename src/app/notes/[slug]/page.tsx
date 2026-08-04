import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/data/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} — Anwin Shajan`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — Anwin Shajan`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Anwin Shajan"],
    },
    twitter: {
      card: "summary",
      title: `${post.title} — Anwin Shajan`,
      description: post.excerpt,
    },
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Simple markdown-like rendering: split by double newline for paragraphs,
  // handle **bold** inline
  const paragraphs = post.body.split("\n\n");

  return (
    <main className="section-padding">
      <article className="mx-auto max-w-2xl">
        {/* Back link */}
        <Link
          href="/#notes"
          className="group inline-flex items-center gap-2 text-xs font-light uppercase tracking-widest text-cream/30 transition-colors duration-300 hover:text-cream/60"
        >
          <svg
            className="h-3 w-3 transition-transform duration-300 group-hover:-translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to notes
        </Link>

        {/* Header */}
        <header className="mt-8">
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
          <h1 className="mt-3 font-serif text-3xl font-light leading-tight text-cream sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base font-light leading-relaxed text-cream/50">
            {post.excerpt}
          </p>
          <div className="mt-8 h-px w-12 bg-accent/40" />
        </header>

        {/* Body */}
        <div className="prose-custom mt-10">
          {paragraphs.map((para, i) => {
            // Handle **bold** text
            const parts = para.split(/\*\*(.*?)\*\*/g);
            return (
              <p key={i}>
                {parts.map((part, j) =>
                  j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                )}
              </p>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-cream/8 pt-8">
          <Link
            href="/#notes"
            className="text-sm font-light text-accent/70 transition-colors duration-300 hover:text-accent"
          >
            ← All notes
          </Link>
        </div>
      </article>
    </main>
  );
}
