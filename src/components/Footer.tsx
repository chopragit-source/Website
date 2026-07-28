import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2D35]/50 mt-32">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="text-xs text-[#9A9FA8]">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="/blog"
            className="text-xs text-[#9A9FA8] hover:text-[#EDEDED] transition-smooth"
          >
            Writing
          </Link>
          <Link
            href="/contact"
            className="text-xs text-[#9A9FA8] hover:text-[#EDEDED] transition-smooth"
          >
            Contact
          </Link>
          <Link
            href="/book"
            className="text-xs text-[#9A9FA8] hover:text-[#EDEDED] transition-smooth"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </footer>
  );
}
