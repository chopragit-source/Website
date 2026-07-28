import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import MeshBackground from "@/components/MeshBackground";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <MeshBackground />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-500 tracking-tight leading-[1.1] animate-fade-in">
            I help people navigate
            <br />
            careers in the AI era.
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#9A9FA8] max-w-xl mx-auto animate-fade-in-delay-1">
            Writing on AI, careers, and the questions worth asking before your
            next move.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#5B8DEF] text-white text-sm font-medium hover:bg-[#4A7CE0] transition-smooth"
            >
              Read the Writing
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#2A2D35] text-sm font-medium text-[#9A9FA8] hover:text-[#EDEDED] hover:border-[#5B8DEF] transition-smooth"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <div className="animate-fade-in-delay-3">
          <h2 className="font-display text-2xl md:text-3xl font-500 tracking-tight mb-6">
            About
          </h2>
          <p className="text-[#9A9FA8] text-base md:text-lg leading-relaxed max-w-2xl">
            I write about how AI is reshaping careers and share practical use
            cases from real work. I also spend time helping people think through
            their next career step — whether that&apos;s a pivot into AI, a
            leadership transition, or simply figuring out what&apos;s next.
          </p>
        </div>
      </section>

      {/* Recent Writing */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="font-display text-2xl md:text-3xl font-500 tracking-tight mb-12">
          Writing
        </h2>
        <div className="space-y-10">
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
              <h3 className="mt-2 text-lg md:text-xl font-medium tracking-tight group-hover:text-[#5B8DEF] transition-smooth">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-[#9A9FA8] max-w-xl">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
        {posts.length > 0 && (
          <Link
            href="/blog"
            className="inline-block mt-12 text-sm text-[#5B8DEF] hover:text-[#F2C94C] transition-smooth"
          >
            View all writing →
          </Link>
        )}
      </section>

      {/* CTA Section */}
      <section className="border-t border-[#2A2D35]/50">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-500 tracking-tight">
            Thinking through a career move, or curious how AI fits into your work?
          </h2>
          <p className="mt-4 text-[#9A9FA8] text-base">
            Let&apos;s talk for 30 minutes — no pitch, just a conversation.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-lg bg-[#5B8DEF] text-white text-sm font-medium hover:bg-[#4A7CE0] transition-smooth"
          >
            Book a free 30-min call
          </Link>
        </div>
      </section>
    </div>
  );
}
