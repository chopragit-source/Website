import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import SocialLinks from "@/components/SocialLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Ankur Chopra",
  description: "Who I am, why this blog exists, and what you can expect.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <ScrollReveal>
          <p className="text-spaced text-[#ff3b30] mb-6">About</p>
          <h1 className="text-display-spaced text-4xl md:text-6xl mb-20">
            The story behind this blog.
          </h1>
        </ScrollReveal>

        {/* Avatar */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-6 mb-20">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10">
              <img
                src="https://raw.githubusercontent.com/chopragit-source/Website/main/avatar.jpeg"
                alt="Ankur Chopra"
                className="w-full h-full object-cover object-center scale-110"
              />
            </div>
            <div>
              <h2 className="text-lg font-light tracking-wide">Ankur Chopra</h2>
              <p className="text-spaced text-[#666] mt-1">Writer · AI Enthusiast · Builder</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Sections */}
        <div className="space-y-20">
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

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="mt-24 pt-16 border-t border-white/5">
            <p className="text-sm text-[#666] mb-8">
              Want to connect, collaborate, or just say hello?
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact"
                className="text-spaced px-10 py-4 bg-[#ff3b30] text-white hover:bg-[#e6352b] transition-medium inline-block"
              >
                Send a Message
              </Link>
              <Link
                href="/book"
                className="text-spaced px-10 py-4 border border-white/20 hover:border-[#ff3b30] hover:text-[#ff3b30] transition-medium inline-block"
              >
                Book a Call
              </Link>
            </div>
            <div className="mt-10">
              <SocialLinks />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-spaced text-[#ff3b30] mb-4">{title}</h3>
      <p className="text-base md:text-lg text-[#999] leading-relaxed font-light">
        {children}
      </p>
    </div>
  );
}
