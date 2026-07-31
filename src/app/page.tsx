import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import AnimatedHero from "@/components/AnimatedHero";
import ScrollReveal from "@/components/ScrollReveal";
import Newsletter from "@/components/Newsletter";
import SocialLinks from "@/components/SocialLinks";
import TypewriterText from "@/components/TypewriterText";
import CursorGlow from "@/components/CursorGlow";
import TiltCard from "@/components/TiltCard";
import GradientBorderCard from "@/components/GradientBorderCard";
import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="relative">
      <CursorGlow />

      {/* HERO — Bold intro, blog-first */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        <AnimatedHero />
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff3b30]/10 via-black/60 to-[#af52de]/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#ff3b30]/10 rounded-full blur-[150px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#5ac8fa]/8 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\" opacity=\"0.5\"/%3E%3C/svg%3E')" }} />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-[#ff3b30] mb-8">
              ⚡ A Blog by Ankur Chopra
            </p>
          </div>

          <h1 className="text-display text-5xl md:text-8xl lg:text-9xl animate-fade-in-up-delay">
            Think
            <span className="text-gradient-fire"> Bigger.</span>
          </h1>

          <div className="mt-6 text-xl md:text-3xl font-bold animate-fade-in-up-delay-2 h-12 flex items-center justify-center">
            <TypewriterText
              words={["AI & Machine Learning", "Career Insights", "Tech Deep Dives", "Ideas Worth Sharing"]}
              className="text-gradient-ice"
            />
          </div>

          <p className="mt-8 text-lg md:text-xl text-[#999999] max-w-2xl mx-auto animate-fade-in-up-delay-2">
            My space for thinking out loud about AI, technology, careers, and everything
            in between. No fluff — just ideas worth your time.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up-delay-2">
            <MagneticButton href="/blog" className="items-center justify-center px-8 py-4 rounded-full bg-[#ff3b30] text-white text-sm font-bold uppercase tracking-wider hover:shadow-[0_0_50px_rgba(255,59,48,0.5)] transition-medium">
              Read the Blog →
            </MagneticButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#666666]">Scroll</span>
          <svg width="20" height="30" viewBox="0 0 20 30" className="text-[#666666]">
            <rect x="6" y="1" width="8" height="14" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="10" cy="6" r="1.5" fill="currentColor" className="animate-scroll-dot" />
          </svg>
        </div>
      </section>

      {/* LATEST WRITING — The main event */}
      <section className="py-24 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff3b30] mb-3">
                  ✍️ Latest Writing
                </p>
                <h2 className="text-display text-3xl md:text-5xl">
                  Fresh thoughts.
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex text-sm text-[#999999] hover:text-[#ff3b30] transition-fast font-semibold"
              >
                View all posts →
              </Link>
            </div>
          </ScrollReveal>

          {/* Featured post — large */}
          {posts.length > 0 && (
            <ScrollReveal>
              <Link
                href={`/blog/${posts[0].slug}`}
                className="group block mb-10"
              >
                <GradientBorderCard>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-2xl">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80"
                        alt={posts[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-medium brightness-75 saturate-[0.8]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111] hidden md:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent md:hidden" />
                      <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-white bg-[#ff3b30] px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff3b30]">
                          {posts[0].tag}
                        </span>
                        <span className="font-mono text-[10px] text-[#666666]">
                          {posts[0].date}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold leading-snug group-hover:text-[#ff3b30] transition-fast">
                        {posts[0].title}
                      </h3>
                      <p className="mt-4 text-sm text-[#999999] leading-relaxed line-clamp-3">
                        {posts[0].excerpt}
                      </p>
                      <div className="mt-6 flex items-center text-sm font-bold text-[#ff3b30] group-hover:translate-x-2 transition-medium">
                        Read this post →
                      </div>
                    </div>
                  </div>
                </GradientBorderCard>
              </Link>
            </ScrollReveal>
          )}

          {/* Rest of posts — grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.12}>
                <TiltCard className="h-full">
                  <GradientBorderCard className="h-full">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block h-full"
                    >
                      <div className="relative h-48 overflow-hidden rounded-t-2xl">
                        <img
                          src={
                            i % 3 === 0
                              ? "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80"
                              : i % 3 === 1
                              ? "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop&q=80"
                              : "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&q=80"
                          }
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-medium brightness-75 saturate-[0.8]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                        <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-white bg-[#ff3b30] px-3 py-1 rounded-full">
                          {post.tag}
                        </span>
                      </div>
                      <div className="p-6">
                        <span className="font-mono text-[10px] text-[#666666]">
                          {post.date}
                        </span>
                        <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-[#ff3b30] transition-fast">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-sm text-[#999999] line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="mt-5 flex items-center text-xs font-bold text-[#ff3b30] group-hover:translate-x-2 transition-medium">
                          Read more →
                        </div>
                      </div>
                    </Link>
                  </GradientBorderCard>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              href="/blog"
              className="text-sm text-[#999999] hover:text-[#ff3b30] transition-fast font-semibold"
            >
              View all posts →
            </Link>
          </div>
        </div>
      </section>

      {/* TOPICS — What I write about */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff3b30]/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#af52de] mb-3">
                Topics
              </p>
              <h2 className="text-display text-3xl md:text-5xl">
                What I write
                <span className="text-gradient-pink"> about.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: "⚡", title: "AI & ML", desc: "Practical applications, not hype", color: "#ff3b30", img: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&h=300&fit=crop&q=80" },
              { icon: "🚀", title: "Careers", desc: "Navigating your path", color: "#ff9500", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&q=80" },
              { icon: "💡", title: "Tech", desc: "Industry shifts & insights", color: "#5ac8fa", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&q=80" },
              { icon: "🌍", title: "Ideas", desc: "Thinking out loud", color: "#af52de", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&q=80" },
            ].map((topic, i) => (
              <ScrollReveal key={topic.title} delay={i * 0.1}>
                <TiltCard>
                  <div className="group rounded-2xl bg-[#111111] border border-white/5 overflow-hidden cursor-pointer hover:border-[#ff3b30]/30 transition-medium">
                    <div className="relative h-28 overflow-hidden">
                      <img
                        src={topic.img}
                        alt={topic.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-medium brightness-50 saturate-[0.7]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl">{topic.icon}</span>
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-sm font-bold group-hover:text-[#ff3b30] transition-fast">{topic.title}</h3>
                      <p className="mt-1 text-[10px] text-[#999999]">{topic.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER — Subscribe to writing */}
      <section className="py-24 bg-[#050505] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5ac8fa]/30 to-transparent" />
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <Newsletter />
          </ScrollReveal>
        </div>
      </section>

      {/* ABOUT — Brief, secondary */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-black" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* Photo */}
              <div className="relative shrink-0">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,59,48,0.2)]">
                  <div
                    className="absolute inset-0 rounded-full p-[3px]"
                    style={{
                      background: "linear-gradient(135deg, #ff3b30, #ff9500, #af52de, #5ac8fa, #ff3b30)",
                      backgroundSize: "300% 300%",
                      animation: "gradientShift 4s ease infinite",
                    }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src="https://raw.githubusercontent.com/chopragit-source/Website/main/avatar.jpeg"
                        alt="Ankur Chopra"
                        className="w-full h-full object-cover object-center scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <h2 className="text-display text-2xl md:text-3xl mb-2">Ankur Chopra</h2>
                <p className="text-sm font-semibold text-[#ff3b30] mb-4">AI Enthusiast</p>
                <p className="text-[#999999] text-base leading-relaxed max-w-lg">
                  I write about how AI is reshaping careers and share practical use cases from
                  real work. This blog is my space to think out loud, explore ideas, and share
                  what I&apos;m learning along the way.
                </p>
                <div className="mt-6">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONNECT — Small, secondary CTA */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-sm text-[#999999] mb-4">
              Want to chat about AI, careers, or tech? I&apos;m always open to connecting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#ff3b30] text-white text-xs font-bold uppercase tracking-wider hover:scale-105 transition-medium"
              >
                Book 30 Min — Free
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:border-[#ff3b30] transition-medium"
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
