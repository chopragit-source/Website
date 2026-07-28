import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog — AI, Tech & Beyond",
  description: "Articles on artificial intelligence, technology, career growth, and more.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-16">
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
          Blog
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)] max-w-xl">
          Writing about AI, technology, career insights, and ideas worth sharing.
        </p>

        <div className="mt-12 space-y-1">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col md:flex-row md:items-center justify-between p-5 -mx-5 rounded-2xl hover:bg-[var(--card-hover)] transition-apple"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-[var(--muted)]">
                    {post.tag}
                  </span>
                </div>
                <h2 className="text-lg font-semibold tracking-tight group-hover:text-[var(--accent)] transition-apple">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-[var(--muted)] line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
              <span className="mt-2 md:mt-0 text-sm text-[var(--muted)] md:ml-8 whitespace-nowrap">
                {post.date}
              </span>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="mt-12 text-[var(--muted)]">
            No posts yet. Check back soon!
          </p>
        )}
      </section>
    </div>
  );
}
