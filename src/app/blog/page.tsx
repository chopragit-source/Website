import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Ankur Chopra",
  description: "All posts on AI, technology, careers, and ideas.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-8">
        <ScrollReveal>
          <p className="text-spaced text-[#ff3b30] mb-6">Writing</p>
          <h1 className="text-display-spaced text-4xl md:text-6xl mb-6">
            All posts.
          </h1>
          <p className="text-sm text-[#666] max-w-lg mb-20">
            Thoughts on AI, technology, and careers — written for the curious.
          </p>
        </ScrollReveal>

        {/* Featured */}
        {posts.length > 0 && (
          <ScrollReveal>
            <Link href={`/blog/${posts[0].slug}`} className="group block mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/5 hover:border-white/10 transition-medium">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80"
                  alt={posts[0].title}
                  className="h-64 md:h-[350px]"
                />
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <p className="text-spaced text-[#ff3b30] mb-4">Featured</p>
                  <span className="text-spaced text-[#444] mb-4">{posts[0].date}</span>
                  <h2 className="text-2xl md:text-3xl font-light tracking-wide leading-snug group-hover:text-[#ff3b30] transition-medium">
                    {posts[0].title}
                  </h2>
                  <p className="mt-6 text-sm text-[#666] leading-relaxed line-clamp-3">
                    {posts[0].excerpt}
                  </p>
                  <span className="mt-8 text-spaced text-[#666] group-hover:text-[#ff3b30] transition-medium">
                    Read article →
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        )}

        {/* All posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {posts.slice(1).map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group block bg-black p-10 hover:bg-[#0a0a0a] transition-medium h-full">
                <div className="flex items-center gap-4 mb-4">
                  <p className="text-spaced text-[#ff3b30]">{post.tag}</p>
                  <span className="text-spaced text-[#444]">{post.date}</span>
                </div>
                <h3 className="text-lg font-light tracking-wide leading-snug group-hover:text-[#ff3b30] transition-medium">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm text-[#666] line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-6 text-spaced text-[#444] group-hover:text-[#ff3b30] transition-medium inline-block">
                  Read →
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
