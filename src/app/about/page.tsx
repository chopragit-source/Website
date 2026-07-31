import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SocialLinks from "@/components/SocialLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Ankur Chopra",
  description:
    "Who I am, why this blog exists, and what you can expect from it.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-28 pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#ff3b30]/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#af52de]/6 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff3b30] mb-4">
            About
          </p>
          <h1 className="text-display text-4xl md:text-6xl mb-16">
            The story behind
            <span className="text-gradient-fire"> this blog.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-5 mb-16">
            <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 shadow-[0_0_30px_rgba(255,59,48,0.2)]">
              <div
                className="absolute inset-0 rounded-full p-[2px]"
                style={{
                  background:
                    "linear-gradient(135deg, #ff3b30, #ff9500, #af52de, #5ac8fa, #ff3b30)",
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
            <div>
              <h2 className="text-xl font-bold">Ankur Chopra</h2>
              <p className="text-sm text-[#999999]">Writer · AI Enthusiast · Builder</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-14">
          <ScrollReveal delay={0.15}>
            <Section title="Who am I">
              I'm Ankur Chopra. I've spent 20+ years in the technology industry,
              wearing many hats — engineer, strategist, leader. Somewhere along the way, I
              became deeply fascinated by AI and its power to change how we work, think, and
              create.
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Section title="What is this blog">
              A space where I explore AI, technology, and the future — in plain language. No
              jargon walls. No gatekeeping. Just honest, curious writing for anyone who wants
              to understand what's happening and why it matters.
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <Section title="Why blog now">
              Because AI isn't a future thing anymore — it's a right now thing.
              It's reshaping careers, industries, and everyday life. And the conversation
              around it shouldn't be locked behind technical walls or boardroom slides.
              Everyone deserves a seat at this table.
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Section title="Who is this blog for">
              You. Whether you're a student just starting out, a professional navigating
              a career shift, or a senior leader trying to make sense of the AI wave — this
              blog is for the curious. No prerequisites. Just bring your questions.
            </Section>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <Section title="What can you look forward to">
              Simple breakdowns of complex AI ideas. Real stories from the field. Career
              perspectives that cut through the noise. And a space where learning feels like a
              conversation — not a lecture.
            </Section>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-20 pt-12 border-t border-white/5">
            <p className="text-[#999999] text-sm mb-6">
              Want to connect, collaborate, or just say hello?
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#ff3b30] text-white text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_40px_rgba(255,59,48,0.4)] transition-all duration-300"
              >
                Send a Message
              </Link>
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:border-[#ff3b30] transition-all duration-300"
              >
                Book a Call
              </Link>
            </div>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff3b30] mb-3">
        {title}
      </h3>
      <p className="text-base md:text-lg text-[#cccccc] leading-relaxed">
        {children}
      </p>
    </div>
  );
}
