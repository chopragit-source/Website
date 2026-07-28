import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Writing — AI, Careers & Tech",
  description:
    "Articles on artificial intelligence, career navigation, and the questions worth asking.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-14">
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="font-display text-3xl md:text-5xl font-500 tracking-tight animate-fade-in">
          Writing
        </h1>
        <p className="mt-4 text-base text-[#9A9FA8] max-w-lg animate-fade-in-delay-1">
          On AI, careers, and the questions worth asking.
        </p>

        <div className="mt-16 space-y-12">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-[#9A9FA8] whitespace-nowrap">
                  {post.date}
                </span>
                <span className="font-mono text-xs text-[#5B8DEF] uppercase tracking-wider">
                  {post.tag}
                </span>
              </div>
              <h2 className="mt-2 text-lg md:text-xl font-medium tracking-tight group-hover:text-[#5B8DEF] transition-smooth">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-[#9A9FA8] max-w-xl leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="mt-16 text-[#9A9FA8]">
            No posts yet. Check back soon.
          </p>
        )}
      </section>
    </div>
  );
}
