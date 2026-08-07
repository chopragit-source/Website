import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call — Ankur Chopra",
  description: "Book a free 30-minute call with Ankur Chopra.",
};

export default function BookPage() {
  return (
    <div className="min-h-screen pt-32 pb-32">
      <div className="max-w-3xl mx-auto px-8">
        <ScrollReveal>
          <p className="text-spaced text-[#ff3b30] mb-6">Book a Call</p>
          <h1 className="text-display-spaced text-4xl md:text-6xl mb-8">
            30 minutes. Free.
          </h1>
          <p className="text-sm text-[#666] leading-relaxed max-w-lg mb-16">
            Want to discuss AI, career moves, or technology strategy?
            Book a free 30-minute call. No pitch, just conversation.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="border border-white/5 p-10 md:p-14">
            <p className="text-spaced text-[#999] mb-6">What we can talk about</p>
            <ul className="space-y-4 text-sm text-[#666] leading-relaxed mb-12">
              <li className="flex items-start gap-3">
                <span className="text-[#ff3b30] mt-1">→</span>
                AI and Generative AI — practical applications for your business
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff3b30] mt-1">→</span>
                Career guidance in technology and enterprise sales
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff3b30] mt-1">→</span>
                Cloud strategy and digital transformation
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff3b30] mt-1">→</span>
                General mentoring and advice
              </li>
            </ul>

            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-spaced px-10 py-4 bg-[#ff3b30] text-white hover:bg-[#e6352b] transition-medium inline-block"
            >
              Schedule on Calendly
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
