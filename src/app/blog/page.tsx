import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import ScrollReveal from "@/components/ScrollReveal";

const COVER_IMAGES: Record<string, string> = {
  "agents-dont-wait-agentic-ai": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&q=80",
  "ceo-conversation-generative-ai-cost-efficiency": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
  "brains-behind-the-magic-foundation-models": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop&q=80",
  "prompt-engineering-asking-better-questions": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&q=80",
  "data-the-fuel-for-ai": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  "future-of-ai-agents": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80",
  "career-advice-for-tech-professionals": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80",
  "building-with-large-language-models": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&q=80",
};

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&q=80",
];

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

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group card-hover block rounded-2xl bg-[#111111] border border-white/5 overflow-hidden h-full"
              >
                {/* Cover image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={COVER_IMAGES[post.slug] || FALLBACK_IMAGES[i % FALLBACK_IMAGES.length]}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-medium brightness-75 saturate-[0.8]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-[#ff3b30] bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    {post.tag}
                  </span>
                </div>
                <div className="p-6">
                  <span className="font-mono text-[10px] text-[#666666]">
                    {post.date}
                  </span>
                  <h2 className="mt-2 text-lg font-bold leading-snug group-hover:text-[#ff3b30] transition-fast">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-[#999999] line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center text-xs font-semibold text-[#999999] group-hover:text-[#ff3b30] transition-fast">
                    Read more
                    <span className="ml-1 group-hover:translate-x-1 transition-medium">→</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
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
