import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Writing — AI, Careers & Tech",
  description: "Articles on AI, career navigation, technology, and the future of work.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff3b30]/5 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff3b30] mb-4 animate-fade-in-up">
            Blog
          </p>
          <h1 className="text-display text-5xl md:text-7xl animate-fade-in-up-delay">
            Writing.
          </h1>
          <p className="mt-4 text-lg text-[#999999] max-w-lg animate-fade-in-up-delay-2">
            Exploring AI, careers, and technology — one idea at a time.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card-hover block rounded-2xl bg-[#111111] border border-white/5 overflow-hidden"
            >
              <div
                className="h-1"
                style={{
                  background: i % 3 === 0 ? "var(--gradient-1)" : i % 3 === 1 ? "var(--gradient-2)" : "var(--gradient-3)",
                }}
              />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff3b30]">
                    {post.tag}
                  </span>
                  <span className="text-[10px] text-[#666666]">•</span>
                  <span className="font-mono text-[10px] text-[#666666]">
                    {post.date}
                  </span>
                </div>
                <h2 className="text-lg font-bold leading-snug group-hover:text-[#ff3b30] transition-fast">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-[#999999] line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center text-xs font-semibold text-[#999999] group-hover:text-[#ff3b30] transition-fast">
                  Read more
                  <span className="ml-1 group-hover:translate-x-1 transition-medium">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-[#999999] text-center py-20 text-lg">
            No posts yet. Check back soon.
          </p>
        )}
      </section>
    </div>
  );
}
