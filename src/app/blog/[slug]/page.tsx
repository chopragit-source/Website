import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import { calculateReadingTime } from "@/lib/readingTime";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — Ankur Chopra`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();
  const readingTime = calculateReadingTime(post.content);

  return (
    <>
      <ReadingProgressBar />
      <article className="min-h-screen pt-32 pb-32">
        <div className="max-w-3xl mx-auto px-8">
          {/* Header */}
          <header className="mb-16">
            <Link href="/blog" className="text-spaced text-[#666] hover:text-[#ff3b30] transition-fast mb-8 inline-block">
              ← Back to Writing
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <p className="text-spaced text-[#ff3b30]">{post.tag}</p>
              <span className="text-spaced text-[#444]">{post.date}</span>
              <span className="text-spaced text-[#444]">{readingTime}</span>
            </div>
            <h1 className="text-display-spaced text-3xl md:text-5xl leading-tight">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-8 text-base text-[#666] leading-relaxed font-light">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-[#ff3b30] mb-16" />

          {/* Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-light prose-headings:tracking-wide
              prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-12 prose-h3:mb-4
              prose-p:text-[#999] prose-p:leading-relaxed prose-p:font-light
              prose-a:text-[#ff3b30] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-strong:font-medium
              prose-ul:text-[#999] prose-ol:text-[#999]
              prose-li:leading-relaxed
              prose-blockquote:border-l-[#ff3b30] prose-blockquote:text-[#999]
              prose-code:text-[#ff3b30] prose-code:bg-[#1a1a1a] prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-white/5"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Footer */}
          <div className="mt-20 pt-12 border-t border-white/5">
            <Link href="/blog" className="text-spaced text-[#666] hover:text-[#ff3b30] transition-fast">
              ← Back to all posts
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
