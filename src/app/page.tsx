import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-40 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient leading-tight">
          Thoughts on AI,
          <br />
          Tech & the Future.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
          Exploring artificial intelligence, career growth, and emerging
          technology — one idea at a time.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-apple"
          >
            Read the Blog
          </Link>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-[var(--card-hover)] transition-apple"
          >
            Book a Call
          </Link>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Latest Posts
          </h2>
          <Link
            href="/blog"
            className="text-sm text-[var(--accent)] hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-6 rounded-2xl border border-[var(--border)] hover:bg-[var(--card-hover)] transition-apple"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-[var(--muted)]">
                  {post.tag}
                </span>
                <span className="text-xs text-[var(--muted)]">
                  {post.date}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-[var(--accent)] transition-apple">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-[var(--muted)] text-lg max-w-xl mx-auto">
            Whether it&apos;s career guidance, AI use cases, or general tech
            networking — I&apos;m always open to a conversation.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center mt-8 px-8 py-3 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-apple"
          >
            Schedule 30 Minutes
          </Link>
        </div>
      </section>
    </div>
  );
}
