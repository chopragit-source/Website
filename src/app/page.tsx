import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      {/* HERO — Full bleed, dramatic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff3b30]/20 via-black to-[#af52de]/20 animate-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff3b30]/10 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5ac8fa]/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#af52de]/5 rounded-full blur-[150px]" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
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
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#666666]">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#666666] to-transparent" />
        </div>
      </section>

      {/* FEATURED SECTION — Big visual split */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#5ac8fa] mb-4">
                Featured
              </p>
              <h2 className="text-display text-4xl md:text-6xl">
                Career in the
                <span className="text-gradient-ice"> AI Era</span>
              </h2>
              <p className="mt-6 text-[#999999] text-lg leading-relaxed max-w-lg">
                The playbook has changed. I write about navigating careers when AI
                is reshaping every industry — and help people figure out their next
                move through free 30-minute conversations.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center mt-8 text-[#5ac8fa] font-semibold text-sm hover:text-white transition-fast group"
              >
                Book a free call
                <span className="ml-2 group-hover:translate-x-2 transition-medium">→</span>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-white/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5ac8fa]/10 to-[#af52de]/10" />
                <div className="relative text-center p-12">
                  <div className="text-7xl mb-6">🧭</div>
                  <p className="text-2xl font-bold">Career Guidance</p>
                  <p className="text-[#999999] mt-2">30 min • Free • Virtual</p>
                </div>
              </div>
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-[#ff3b30]/20 blur-xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-[#5ac8fa]/20 blur-xl animate-float" style={{ animationDelay: "3s" }} />
            </div>
          </div>
        </div>
      </section>

      {/* LATEST WRITING — Card grid */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group card-hover block rounded-2xl bg-[#111111] border border-white/5 overflow-hidden"
              >
                {/* Card top gradient bar */}
                <div
                  className="h-1"
                  style={{
                    background: i === 0 ? "var(--gradient-1)" : i === 1 ? "var(--gradient-2)" : "var(--gradient-3)",
                  }}
                />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff3b30]">
                      {post.tag}
                    </span>
                    <span className="text-[10px] text-[#666666]">•</span>
                    <span className="font-mono text-[10px] text-[#666666]">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug group-hover:text-[#ff3b30] transition-fast">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#999999] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center text-xs font-semibold text-[#999999] group-hover:text-[#ff3b30] transition-fast">
                    Read more
                    <span className="ml-1 group-hover:translate-x-1 transition-medium">→</span>
                  </div>
                </div>
              </Link>
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
          <div className="text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#af52de] mb-3">
              What I Write About
            </p>
            <h2 className="text-display text-4xl md:text-6xl">
              Deep dives into what
              <span className="text-gradient-pink"> matters.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: "AI & ML", desc: "Practical applications, not hype", color: "#ff3b30" },
              { icon: "🚀", title: "Careers", desc: "Navigate your next chapter", color: "#ff9500" },
              { icon: "💡", title: "Tech", desc: "Industry shifts and insights", color: "#5ac8fa" },
              { icon: "🌍", title: "Future", desc: "What's coming next", color: "#af52de" },
            ].map((topic) => (
              <div
                key={topic.title}
                className="group p-8 rounded-2xl bg-[#111111] border border-white/5 text-center card-hover cursor-pointer"
              >
                <div
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: `${topic.color}15` }}
                >
                  {topic.icon}
                </div>
                <h3 className="text-lg font-bold">{topic.title}</h3>
                <p className="mt-2 text-sm text-[#999999]">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Full bleed dramatic */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff3b30]/10 via-[#0a0a0a] to-[#af52de]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff3b30]/5 rounded-full blur-[200px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
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
        </div>
      </section>
    </div>
  );
}
