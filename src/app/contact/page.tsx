import ScrollReveal from "@/components/ScrollReveal";
import SocialLinks from "@/components/SocialLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Ankur Chopra",
  description: "Get in touch with Ankur Chopra.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-32">
      <div className="max-w-3xl mx-auto px-8">
        <ScrollReveal>
          <p className="text-spaced text-[#ff3b30] mb-6">Contact</p>
          <h1 className="text-display-spaced text-4xl md:text-6xl mb-8">
            Let's connect.
          </h1>
          <p className="text-sm text-[#666] leading-relaxed max-w-lg mb-16">
            Have a question, want to collaborate, or just want to say hello?
            I'd love to hear from you.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="space-y-12">
            <div className="border border-white/5 p-10 hover:border-white/10 transition-medium">
              <p className="text-spaced text-[#ff3b30] mb-4">Email</p>
              <a
                href="mailto:ankurbk2000@gmail.com"
                className="text-lg font-light tracking-wide text-[#999] hover:text-white transition-fast"
              >
                ankurbk2000@gmail.com
              </a>
            </div>

            <div className="border border-white/5 p-10 hover:border-white/10 transition-medium">
              <p className="text-spaced text-[#ff3b30] mb-4">Phone</p>
              <a
                href="tel:+919888950483"
                className="text-lg font-light tracking-wide text-[#999] hover:text-white transition-fast"
              >
                +91 9888950483
              </a>
            </div>

            <div className="border border-white/5 p-10 hover:border-white/10 transition-medium">
              <p className="text-spaced text-[#ff3b30] mb-4">Social</p>
              <SocialLinks />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
