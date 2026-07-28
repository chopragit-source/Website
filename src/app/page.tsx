import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import AnimatedHero from "@/components/AnimatedHero";
import ScrollReveal from "@/components/ScrollReveal";
import Newsletter from "@/components/Newsletter";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      {/* HERO — Full bleed with animated canvas */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedHero />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff3b30]/10 via-black/50 to-[#af52de]/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff3b30]/8 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5ac8fa]/8 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ff3b30] mb-6 animate-fade-in-up">
            AI • Careers • Technology
          </p>
          <h1 className="text-display text-5xl md:text-8xl lg:text-9xl animate-fade-in-up-delay">
            Think
            <span className="text-gradient-fire"> Bigger.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[#999999] max-w-2xl mx-auto animate-fade-in-up-delay-2">
            Deep dives into AI, career strategy, and the ideas reshaping technology.
            No fluff — just insights worth your time.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up-delay-2">
            <Link
              href="/blog"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#ff3b30] text-white text-sm font-bold uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_40px_rgba(255,59,48,0.4)] transition-medium"
            >
              Explore Writing
              <span className="ml-2 group-hover:translate-x-1 transition-medium">→</span>
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/20 text-white text-sm font-bold uppercase tracking-wider hover:border-white/60 hover:scale-105 transition-medium"
            >
              Book 30-Min Call
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-12 animate-fade-in-up-delay-2">
            <SocialLinks className="justify-center" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#666666]">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#666666] to-transparent" />
        </div>
      </section>

      {/* ABOUT / FEATURED — Big visual split */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#5ac8fa] mb-4">
                About Me
              </p>
              <h2 className="text-display text-4xl md:text-6xl">
                Navigating the
                <span className="text-gradient-ice"> AI Era</span>
              </h2>
              <p className="mt-6 text-[#999999] text-lg leading-relaxed max-w-lg">
                I write about how AI is reshaping careers and share practical use
                cases from real work. I also spend time helping people think through
                their next career step — whether that&apos;s a pivot into AI, a
                leadership transition, or simply figuring out what&apos;s next.
              </p>
              <p className="mt-4 text-[#999999] text-lg leading-relaxed max-w-lg">
                Book a free 30-minute conversation. No pitch, no agenda — just genuine
                career guidance and AI discussion.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center mt-8 text-[#5ac8fa] font-semibold text-sm hover:text-white transition-fast group"
              >
                Book a free call
                <span className="ml-2 group-hover:translate-x-2 transition-medium">→</span>
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                {/* Photo placeholder — replace with your actual headshot */}
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-white/5 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5ac8fa]/5 to-[#af52de]/5" />
                  {/* Replace this div with an actual <img> of yourself */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff3b30] to-[#ff9500] flex items-center justify-center text-5xl mb-6">
                      👤
                    </div>
                    <p className="text-xl font-bold">Your Name</p>
                    <p className="text-sm text-[#999999] mt-2">AI & Career Strategist</p>
                    <div className="mt-6">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-[#ff3b30]/20 blur-xl animate-float" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-[#5ac8fa]/20 blur-xl animate-float" style={{ animationDelay: "3s" }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* LATEST WRITING — Card grid with images */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff3b30] mb-3">
                  Latest
                </p>
                <h2 className="text-display text-4xl md:text-5xl">
                  Fresh off the press.
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex text-sm text-[#999999] hover:text-white transition-fast font-medium"
              >
                View all →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.15}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group card-hover block rounded-2xl bg-[#111111] border border-white/5 overflow-hidden h-full"
                >
                  {/* Cover image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        i === 0
                          ? "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80"
                          : i === 1
                          ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&q=80"
                          : "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop&q=80"
                      }
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
                    <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-[#ff3b30] transition-fast">
                      {post.title}
                    </h3>
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

          <Link
            href="/blog"
            className="md:hidden inline-flex mt-10 text-sm text-[#999999] hover:text-white transition-fast font-medium"
          >
            View all writing →
          </Link>
        </div>
      </section>

      {/* TOPICS SECTION — Visual showcase */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#af52de] mb-3">
                What I Write About
              </p>
              <h2 className="text-display text-4xl md:text-6xl">
                Deep dives into what
                <span className="text-gradient-pink"> matters.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: "AI & ML", desc: "Practical applications, not hype", color: "#ff3b30", img: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&h=300&fit=crop&q=80" },
              { icon: "🚀", title: "Careers", desc: "Navigate your next chapter", color: "#ff9500", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&q=80" },
              { icon: "💡", title: "Tech", desc: "Industry shifts and insights", color: "#5ac8fa", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&q=80" },
              { icon: "🌍", title: "Future", desc: "What's coming next", color: "#af52de", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&q=80" },
            ].map((topic, i) => (
              <ScrollReveal key={topic.title} delay={i * 0.1}>
                <div className="group card-hover rounded-2xl bg-[#111111] border border-white/5 overflow-hidden cursor-pointer">
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={topic.img}
                      alt={topic.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-medium brightness-50 saturate-[0.7]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
                  </div>
                  <div className="p-6 text-center">
                    <div
                      className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center text-xl mb-4"
                      style={{ background: `${topic.color}20` }}
                    >
                      {topic.icon}
                    </div>
                    <h3 className="text-base font-bold">{topic.title}</h3>
                    <p className="mt-1 text-xs text-[#999999]">{topic.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <Newsletter />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA — Full bleed dramatic */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff3b30]/10 via-[#0a0a0a] to-[#af52de]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff3b30]/5 rounded-full blur-[200px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-display text-4xl md:text-7xl">
              Let&apos;s
              <span className="text-gradient-fire"> Talk.</span>
            </h2>
            <p className="mt-6 text-lg text-[#999999] max-w-xl mx-auto">
              Whether it&apos;s career guidance, AI use cases, or just a conversation
              about tech — I&apos;m always open to connecting.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#ff3b30] text-white text-sm font-bold uppercase tracking-wider hover:scale-105 glow-red transition-medium"
              >
                Schedule 30 Minutes — Free
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full border-2 border-white/20 text-white text-sm font-bold uppercase tracking-wider hover:border-[#ff3b30] hover:text-[#ff3b30] transition-medium"
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
