import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import AnimatedHero from "@/components/AnimatedHero";
import ScrollReveal from "@/components/ScrollReveal";
import Newsletter from "@/components/Newsletter";
import SocialLinks from "@/components/SocialLinks";
import TypewriterText from "@/components/TypewriterText";
import CursorGlow from "@/components/CursorGlow";
import TiltCard from "@/components/TiltCard";
import CounterAnimation from "@/components/CounterAnimation";
import GradientBorderCard from "@/components/GradientBorderCard";
import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="relative">
      <CursorGlow />

      {/* HERO — Full bleed with animated canvas + typewriter */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedHero />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff3b30]/10 via-black/60 to-[#af52de]/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#ff3b30]/10 rounded-full blur-[150px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#5ac8fa]/8 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#af52de]/5 rounded-full blur-[180px] animate-pulse-slow" style={{ animationDelay: "4s" }} />
        </div>

        {/* Noise/grain texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\" opacity=\"0.5\"/%3E%3C/svg%3E')" }} />

        {/* Grid overlay */}
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
              ⚡ AI • Careers • Technology
            </p>
          </div>

          <h1 className="text-display text-5xl md:text-8xl lg:text-9xl animate-fade-in-up-delay">
            <span className="text-gradient-fire">Ankur Chopra</span>
          </h1>

          <div className="mt-6 text-2xl md:text-4xl font-bold animate-fade-in-up-delay-2 h-14 flex items-center justify-center">
            <TypewriterText
              words={["AI Enthusiast @ AWS", "Career Strategist", "Tech Writer", "Building the Future"]}
              className="text-gradient-ice"
            />
          </div>

          <p className="mt-8 text-lg md:text-xl text-[#999999] max-w-2xl mx-auto animate-fade-in-up-delay-2">
            Deep dives into AI, career strategy, and the ideas reshaping technology.
            No fluff — just insights worth your time.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up-delay-2">
            <MagneticButton href="/blog" className="items-center justify-center px-8 py-4 rounded-full bg-[#ff3b30] text-white text-sm font-bold uppercase tracking-wider hover:shadow-[0_0_50px_rgba(255,59,48,0.5)] transition-medium">
              Explore Writing →
            </MagneticButton>
            <MagneticButton href="/book" className="items-center justify-center px-8 py-4 rounded-full border-2 border-white/20 text-white text-sm font-bold uppercase tracking-wider hover:border-[#ff3b30] hover:shadow-[0_0_30px_rgba(255,59,48,0.2)] transition-medium">
              Book 30-Min Call
            </MagneticButton>
          </div>

          {/* Social Links */}
          <div className="mt-12 animate-fade-in-up-delay-2">
            <SocialLinks className="justify-center" />
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

      {/* STATS COUNTER */}
      <section className="py-20 bg-[#050505] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterAnimation end={50} suffix="+" label="Articles Written" />
            <CounterAnimation end={200} suffix="+" label="Calls Taken" />
            <CounterAnimation end={10} suffix="k+" label="Readers" />
            <CounterAnimation end={5} suffix="+" label="Years in AI" />
          </div>
        </div>
      </section>

      {/* ABOUT — With avatar */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
        {/* Wavy divider top */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden">
          <svg viewBox="0 0 1440 60" className="w-full h-[60px] text-[#050505]" preserveAspectRatio="none">
            <path d="M0,0 C360,60 1080,0 1440,60 L1440,0 L0,0 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#5ac8fa] mb-4">
                About Me
              </p>
              <h2 className="text-display text-4xl md:text-6xl">
                <span className="text-gradient-ice">Ankur Chopra</span>
              </h2>
              <p className="mt-2 text-lg font-semibold text-[#ff3b30]">AI Enthusiast @ AWS</p>
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
              <div className="mt-8 flex items-center gap-6">
                <Link
                  href="/book"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-[#ff3b30] text-white text-sm font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(255,59,48,0.4)] transition-medium"
                >
                  Book a Call →
                </Link>
                <SocialLinks />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative flex justify-center">
                {/* Digital Avatar */}
                <div className="relative">
                  <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#ff3b30]/30 shadow-[0_0_60px_rgba(255,59,48,0.2)]">
                    {/* Stylized avatar based on photo */}
                    <svg viewBox="0 0 320 320" className="w-full h-full">
                      {/* Background gradient */}
                      <defs>
                        <linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1a1a2e" />
                          <stop offset="100%" stopColor="#0f0f23" />
                        </linearGradient>
                        <linearGradient id="skinTone" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#c68642" />
                          <stop offset="100%" stopColor="#8d5524" />
                        </linearGradient>
                        <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f5f0e8" />
                          <stop offset="100%" stopColor="#e8e0d4" />
                        </linearGradient>
                      </defs>
                      {/* Background */}
                      <circle cx="160" cy="160" r="160" fill="url(#avatarBg)" />
                      {/* Body/Shirt */}
                      <ellipse cx="160" cy="340" rx="100" ry="120" fill="url(#shirtGrad)" />
                      {/* Neck */}
                      <rect x="140" y="220" width="40" height="30" rx="5" fill="url(#skinTone)" />
                      {/* Face */}
                      <ellipse cx="160" cy="170" rx="65" ry="75" fill="url(#skinTone)" />
                      {/* Hair */}
                      <ellipse cx="160" cy="115" rx="68" ry="50" fill="#1a1a1a" />
                      <path d="M95,140 Q100,90 160,85 Q220,90 225,140 Q210,100 160,95 Q110,100 95,140" fill="#111111" />
                      {/* Eyes */}
                      <ellipse cx="140" cy="170" rx="8" ry="6" fill="#2c2c2c" />
                      <ellipse cx="180" cy="170" rx="8" ry="6" fill="#2c2c2c" />
                      <circle cx="140" cy="169" r="3" fill="#ffffff" opacity="0.3" />
                      <circle cx="180" cy="169" r="3" fill="#ffffff" opacity="0.3" />
                      {/* Eyebrows */}
                      <path d="M128,158 Q140,152 152,156" stroke="#1a1a1a" strokeWidth="3" fill="none" />
                      <path d="M168,156 Q180,152 192,158" stroke="#1a1a1a" strokeWidth="3" fill="none" />
                      {/* Nose */}
                      <path d="M155,178 Q160,188 165,178" stroke="#8d5524" strokeWidth="1.5" fill="none" opacity="0.6" />
                      {/* Mouth */}
                      <path d="M145,200 Q160,206 175,200" stroke="#6b3a1a" strokeWidth="2" fill="none" />
                      {/* Stubble hint */}
                      <ellipse cx="160" cy="210" rx="25" ry="15" fill="#8d5524" opacity="0.15" />
                    </svg>
                  </div>
                  {/* Orbiting elements */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 rounded-full bg-[#ff3b30]" />
                  </div>
                  <div className="absolute inset-[-20px] animate-spin-reverse">
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#5ac8fa]" />
                  </div>
                  {/* Glow behind */}
                  <div className="absolute inset-0 -z-10 rounded-full bg-[#ff3b30]/10 blur-[60px] scale-110" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* LATEST WRITING — Tilt cards with images */}
      <section className="py-32 bg-[#0a0a0a] relative">
        {/* Wavy divider */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden rotate-180">
          <svg viewBox="0 0 1440 60" className="w-full h-[60px] text-black" preserveAspectRatio="none">
            <path d="M0,60 C480,0 960,60 1440,0 L1440,60 L0,60 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff3b30] mb-3">
                  ✍️ Latest
                </p>
                <h2 className="text-display text-4xl md:text-5xl">
                  Fresh off the press.
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex text-sm text-[#999999] hover:text-[#ff3b30] transition-fast font-semibold"
              >
                View all →
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.15}>
                <TiltCard className="h-full">
                  <GradientBorderCard className="h-full">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block h-full"
                    >
                      {/* Cover image */}
                      <div className="relative h-52 overflow-hidden rounded-t-2xl">
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
        </div>
      </section>

      {/* TOPICS — Bold visual */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff3b30]/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#af52de] mb-3">
                🔥 What I Write About
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
              <ScrollReveal key={topic.title} delay={i * 0.12}>
                <TiltCard>
                  <div className="group rounded-2xl bg-[#111111] border border-white/5 overflow-hidden cursor-pointer hover:border-[#ff3b30]/30 transition-medium">
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={topic.img}
                        alt={topic.title}
                        className="w-full h-full object-cover group-hover:scale-115 transition-medium brightness-50 saturate-[0.7]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl">{topic.icon}</span>
                      </div>
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="text-base font-bold group-hover:text-[#ff3b30] transition-fast">{topic.title}</h3>
                      <p className="mt-1 text-xs text-[#999999]">{topic.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 bg-[#050505] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5ac8fa]/30 to-transparent" />
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <Newsletter />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA — Dramatic */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff3b30]/15 via-black to-[#af52de]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#ff3b30]/8 rounded-full blur-[200px] animate-pulse-slow" />

        {/* Wavy divider */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden">
          <svg viewBox="0 0 1440 60" className="w-full h-[60px] text-[#050505]" preserveAspectRatio="none">
            <path d="M0,60 C360,0 1080,60 1440,0 L1440,60 L0,60 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-display text-5xl md:text-8xl">
              Let&apos;s
              <span className="text-gradient-fire"> Talk.</span>
            </h2>
            <p className="mt-8 text-lg text-[#999999] max-w-xl mx-auto">
              Whether it&apos;s career guidance, AI use cases, or just a conversation
              about tech — I&apos;m always open to connecting.
            </p>
            <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center">
              <MagneticButton href="/book" className="items-center justify-center px-10 py-5 rounded-full bg-[#ff3b30] text-white text-sm font-bold uppercase tracking-wider hover:shadow-[0_0_60px_rgba(255,59,48,0.5)] transition-medium">
                Schedule 30 Minutes — Free
              </MagneticButton>
              <MagneticButton href="/contact" className="items-center justify-center px-10 py-5 rounded-full border-2 border-white/20 text-white text-sm font-bold uppercase tracking-wider hover:border-[#ff3b30] hover:text-[#ff3b30] transition-medium">
                Send a Message
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
