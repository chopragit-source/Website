import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import ScrollReveal from "@/components/ScrollReveal";
import Newsletter from "@/components/Newsletter";
import SocialLinks from "@/components/SocialLinks";
import ParallaxImage from "@/components/ParallaxImage";
import HeroParticlesWrapper from "@/components/HeroParticlesWrapper";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="relative">
      {/* ===== HERO — Full-screen cinematic ===== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroParticlesWrapper />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-[1]" />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <p className="text-spaced text-[#ff3b30] mb-8 animate-fade-in-up">
            A Blog by Ankur Chopra
          </p>

          <h1 className="text-display text-5xl md:text-8xl lg:text-[10rem] animate-fade-in-up-delay">
            Think
            <span className="text-gradient-fire"> Bigger.</span>
          </h1>

          <p className="mt-10 text-sm md:text-base text-[#666] max-w-lg mx-auto animate-fade-in-up-delay-2 leading-relaxed">
            AI, technology, careers, and everything in between.
            No fluff — just ideas worth your time.
          </p>

          <div className="mt-14 animate-fade-in-up-delay-2">
            <Link
              href="/blog"
              className="text-spaced px-10 py-4 border border-white/20 hover:border-[#ff3b30] hover:text-[#ff3b30] transition-medium inline-block"
            >
              Read the Blog
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-bounce-slow">
          <span className="text-spaced text-[#444]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#666] to-transparent" />
        </div>
      </section>

      {/* ===== LATEST WRITING ===== */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-20">
              <div>
                <p className="text-spaced text-[#ff3b30] mb-4">Latest Writing</p>
                <h2 className="text-display-spaced text-3xl md:text-5xl">
                  Fresh thoughts.
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex text-spaced text-[#666] hover:text-[#ff3b30] transition-fast"
              >
                View all →
              </Link>
            </div>
          </ScrollReveal>

          {/* Featured post */}
          {posts.length > 0 && (
            <ScrollReveal>
              <Link href={`/blog/${posts[0].slug}`} className="group block mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/5 hover:border-white/10 transition-medium">
                  <ParallaxImage
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80"
                    alt={posts[0].title}
                    className="h-64 md:h-[400px]"
                  />
                  <div className="p-10 md:p-14 flex flex-col justify-center">
                    <p className="text-spaced text-[#ff3b30] mb-4">Featured</p>
                    <span className="text-spaced text-[#444] mb-6">{posts[0].date}</span>
                    <h3 className="text-xl md:text-3xl font-light tracking-wide leading-snug group-hover:text-[#ff3b30] transition-medium">
                      {posts[0].title}
                    </h3>
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

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {posts.slice(1).map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block bg-black p-10 hover:bg-[#0a0a0a] transition-medium h-full">
                  <p className="text-spaced text-[#ff3b30] mb-3">{post.tag}</p>
                  <span className="text-spaced text-[#444] block mb-4">{post.date}</span>
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
      </section>

      {/* ===== TOPICS ===== */}
      <section className="py-32 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal>
            <p className="text-spaced text-[#af52de] mb-4">Topics</p>
            <h2 className="text-display-spaced text-3xl md:text-5xl mb-20">
              What I write about.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5">
            {[
              { icon: "⚡", title: "AI & ML", desc: "Practical applications, not hype" },
              { icon: "🚀", title: "Careers", desc: "Navigating your path forward" },
              { icon: "💡", title: "Technology", desc: "Industry shifts & insights" },
              { icon: "🌍", title: "Ideas", desc: "Thinking out loud" },
            ].map((topic, i) => (
              <ScrollReveal key={topic.title} delay={i * 0.1}>
                <div className="bg-black p-10 text-center hover:bg-[#0a0a0a] transition-medium group cursor-pointer h-full">
                  <span className="text-4xl block mb-6 group-hover:scale-110 transition-medium">{topic.icon}</span>
                  <h3 className="text-spaced-lg text-sm mb-3 group-hover:text-[#ff3b30] transition-medium">{topic.title}</h3>
                  <p className="text-xs text-[#666]">{topic.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-2xl mx-auto px-8">
          <ScrollReveal>
            <Newsletter />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="relative shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-white/10">
                  <img
                    src="https://raw.githubusercontent.com/chopragit-source/Website/main/avatar.jpeg"
                    alt="Ankur Chopra"
                    className="w-full h-full object-cover object-center scale-110"
                  />
                </div>
              </div>
              <div>
                <p className="text-spaced text-[#ff3b30] mb-4">About</p>
                <h2 className="text-display-spaced text-2xl md:text-3xl mb-6">Ankur Chopra</h2>
                <p className="text-sm text-[#666] leading-relaxed max-w-lg mb-8">
                  20+ years in the technology industry. Deeply fascinated by AI and its power
                  to change how we work, think, and create. This blog is my space to think out
                  loud and share what I'm learning along the way.
                </p>
                <SocialLinks />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <ScrollReveal>
            <p className="text-sm text-[#666] mb-8">
              Want to chat about AI, careers, or tech?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/book"
                className="text-spaced px-10 py-4 bg-[#ff3b30] text-white hover:bg-[#e6352b] transition-medium inline-block"
              >
                Book 30 Min — Free
              </Link>
              <Link
                href="/contact"
                className="text-spaced px-10 py-4 border border-white/20 hover:border-[#ff3b30] hover:text-[#ff3b30] transition-medium inline-block"
              >
                Send a Message
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
