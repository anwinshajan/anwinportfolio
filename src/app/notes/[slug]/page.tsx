import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/content/notes";

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

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Top bar */}
      <div
        className="sticky top-0 z-50 border-b border-[#E5DDD5] bg-[#FAF7F2]/90 backdrop-blur-md"
      >
        <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-light text-lg text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Anwin Shajan
          </Link>
          <Link
            href="/#notes"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A746E] transition-colors hover:text-[#D4521A]"
          >
            <svg
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All Notes
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <article>
          {/* Header */}
          <header className="mb-12">
            {/* Title */}
            <h1
              className="mt-4 leading-tight text-[#1A1A1A]"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                fontWeight: 300,
              }}
            >
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-5 text-lg font-light leading-relaxed text-[#5C5C5C] border-b border-[#E5DDD5] pb-8">
              {post.excerpt}
            </p>

            {/* Coral accent rule */}
            <div className="mt-8 h-0.5 w-12 bg-[#D4521A]/50 rounded-full" />
          </header>

          {/* Body */}
          <div className="prose-warm">
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
          <footer className="mt-16 flex items-center justify-between border-t border-[#E5DDD5] pt-8">
            <Link
              href="/#notes"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#D4521A] hover:text-[#B8431A] transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              All Notes
            </Link>

            <Link
              href="/#connect"
              className="text-sm font-medium text-[#7A746E] hover:text-[#D4521A] transition-colors"
            >
              Get in Touch →
            </Link>
          </footer>
        </article>
      </main>
    </div>
  );
}
