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
    title: `${post.title} — Blog`,
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
    <div className="pt-16">
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-[var(--accent)] hover:underline mb-8"
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-[var(--muted)]">
              {post.tag}
            </span>
            <span className="text-sm text-[var(--muted)]">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
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
          <section className="mt-16 pt-8 border-t border-[var(--border)]">
            <h2 className="text-xl font-semibold mb-6">Related Media</h2>
            {post.youtube && <YouTubeEmbed url={post.youtube} />}
            {post.spotify && <SpotifyEmbed url={post.spotify} />}
          </section>
        )}

        {/* Comments */}
        <section className="mt-16 pt-8 border-t border-[var(--border)]">
          <CommentSection postSlug={slug} />
        </section>
      </article>
    </div>
  );
}
