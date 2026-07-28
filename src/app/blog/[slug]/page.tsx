import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import CommentSection from "@/components/CommentSection";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-16">
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-[#ff3b30] hover:text-white transition-fast mb-12 font-semibold"
        >
          ← Back to Writing
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff3b30]">
              {post.tag}
            </span>
            <span className="text-[10px] text-[#666666]">•</span>
            <span className="font-mono text-[10px] text-[#666666]">
              {post.date}
            </span>
          </div>
          <h1 className="text-display text-3xl md:text-5xl leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Content */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Media Embeds */}
        {(post.youtube || post.spotify) && (
          <section className="mt-20 pt-10 border-t border-white/10">
            <h2 className="text-2xl font-bold mb-8">🎬 Related Media</h2>
            {post.youtube && <YouTubeEmbed url={post.youtube} />}
            {post.spotify && <SpotifyEmbed url={post.spotify} />}
          </section>
        )}

        {/* Comments */}
        <section className="mt-20 pt-10 border-t border-white/10">
          <CommentSection postSlug={slug} />
        </section>
      </article>
    </div>
  );
}
