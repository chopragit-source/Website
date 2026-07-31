import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import CommentSection from "@/components/CommentSection";
import Newsletter from "@/components/Newsletter";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import ShareButtons from "@/components/ShareButtons";
import RelatedPosts from "@/components/RelatedPosts";
import Script from "next/script";

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
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: [post.tag],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
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
      {/* Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Structured Data for SEO */}
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: {
              "@type": "Person",
              name: "Ankur Chopra",
              url: "https://www.linkedin.com/in/ankurchopra82/",
            },
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: {
              "@type": "WebPage",
            },
          }),
        }}
      />

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
            <span className="text-[10px] text-[#666666]">•</span>
            <span className="font-mono text-[10px] text-[#666666]">
              {post.readingTime}
            </span>
          </div>
          <h1 className="text-display text-3xl md:text-5xl leading-tight">
            {post.title}
          </h1>

          {/* Share Buttons */}
          <div className="mt-6">
            <ShareButtons title={post.title} slug={slug} />
          </div>
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

        {/* Share again at bottom */}
        <section className="mt-16 pt-10 border-t border-white/10">
          <ShareButtons title={post.title} slug={slug} />
        </section>

        {/* Related Posts */}
        <section className="mt-16 pt-10 border-t border-white/10">
          <RelatedPosts currentSlug={slug} currentTag={post.tag} allPosts={getAllPosts()} />
        </section>

        {/* Newsletter */}
        <section className="mt-16 pt-10 border-t border-white/10">
          <Newsletter />
        </section>

        {/* Comments */}
        <section className="mt-16 pt-10 border-t border-white/10">
          <CommentSection postSlug={slug} />
        </section>
      </article>
    </div>
  );
}
