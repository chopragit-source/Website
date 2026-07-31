import Link from "next/link";
import { PostMeta } from "@/lib/posts";

interface RelatedPostsProps {
  currentSlug: string;
  currentTag: string;
  allPosts: PostMeta[];
}

const COVER_IMAGES: Record<string, string> = {
  "agents-dont-wait-agentic-ai": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&q=80",
  "ceo-conversation-generative-ai-cost-efficiency": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&q=80",
  "brains-behind-the-magic-foundation-models": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop&q=80",
  "prompt-engineering-asking-better-questions": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&q=80",
  "data-the-fuel-for-ai": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80",
};

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&q=80";

export default function RelatedPosts({ currentSlug, currentTag, allPosts }: RelatedPostsProps) {
  // Get posts with same tag first, then others — exclude current post
  const related = allPosts
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      if (a.tag === currentTag && b.tag !== currentTag) return -1;
      if (a.tag !== currentTag && b.tag === currentTag) return 1;
      return 0;
    })
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">📖 Keep Reading</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl bg-[#111111] border border-white/5 overflow-hidden hover:border-[#ff3b30]/30 transition-medium"
          >
            <div className="relative h-32 overflow-hidden">
              <img
                src={COVER_IMAGES[post.slug] || FALLBACK_IMAGE}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-medium brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#ff3b30]">
                  {post.tag}
                </span>
                <span className="font-mono text-[9px] text-[#666666]">
                  {post.readingTime}
                </span>
              </div>
              <h3 className="text-sm font-bold leading-snug group-hover:text-[#ff3b30] transition-fast line-clamp-2">
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
