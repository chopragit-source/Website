import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">◆ BLOG</h3>
            <p className="text-[#999999] text-sm max-w-sm leading-relaxed mb-6">
              Exploring AI, technology, and the future of careers. Always open to
              a conversation about what&apos;s next.
            </p>
            <SocialLinks />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#999999] mb-4">
              Navigate
            </h4>
            <div className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/blog">Writing</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/book">Book a Call</FooterLink>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#999999] mb-4">
              Topics
            </h4>
            <div className="space-y-3">
              <FooterLink href="/blog">AI & Machine Learning</FooterLink>
              <FooterLink href="/blog">Career Growth</FooterLink>
              <FooterLink href="/blog">Tech Industry</FooterLink>
              <FooterLink href="/blog">Future of Work</FooterLink>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#666666]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block text-sm text-[#999999] hover:text-white transition-fast"
    >
      {children}
    </Link>
  );
}
