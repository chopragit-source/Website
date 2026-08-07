import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-spaced text-[#ff3b30] mb-4">Ankur Chopra</p>
            <p className="text-sm text-[#666] leading-relaxed">
              Exploring AI, technology, and the future of careers.
            </p>
          </div>
          <div>
            <p className="text-spaced text-[#999] mb-4">Navigation</p>
            <div className="space-y-3">
              <Link href="/" className="block text-sm text-[#666] hover:text-white transition-fast">Home</Link>
              <Link href="/blog" className="block text-sm text-[#666] hover:text-white transition-fast">Writing</Link>
              <Link href="/about" className="block text-sm text-[#666] hover:text-white transition-fast">About</Link>
              <Link href="/contact" className="block text-sm text-[#666] hover:text-white transition-fast">Contact</Link>
            </div>
          </div>
          <div>
            <p className="text-spaced text-[#999] mb-4">Connect</p>
            <div className="space-y-3">
              <a href="https://linkedin.com/in/ankurchopra82" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#666] hover:text-white transition-fast">LinkedIn</a>
              <a href="https://x.com/ankurchopra82" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#666] hover:text-white transition-fast">X (Twitter)</a>
              <Link href="/book" className="block text-sm text-[#666] hover:text-white transition-fast">Book a Call</Link>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-spaced text-[#444]">
            © 2025 Ankur Chopra — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
