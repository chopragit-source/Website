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
  return {
    title: `${post.title}`,
    description: post.excerpt,
  };
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
    <div className="pt-14">
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-[#5B8DEF] hover:text-[#F2C94C] transition-smooth mb-10"
        >
          ← Back to Writing
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-mono text-xs text-[#9A9FA8]">
              {post.date}
            </span>
            <span className="font-mono text-xs text-[#5B8DEF] uppercase tracking-wider">
              {post.tag}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-500 tracking-tight leading-tight">
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
          <section className="mt-16 pt-8 border-t border-[#2A2D35]/50">
            <h2 className="font-display text-xl font-500 mb-6 text-[#EDEDED]">
              Related Media
            </h2>
            {post.youtube && <YouTubeEmbed url={post.youtube} />}
            {post.spotify && <SpotifyEmbed url={post.spotify} />}
          </section>
        )}

        {/* Comments */}
        <section className="mt-16 pt-8 border-t border-[#2A2D35]/50">
          <CommentSection postSlug={slug} />
        </section>
      </article>
    </div>
  );
}
