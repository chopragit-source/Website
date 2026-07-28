"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight hover:text-[#ff3b30] transition-fast"
        >
          ◆ BLOG
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Writing</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <Link
            href="/book"
            className="px-5 py-2 rounded-full bg-[#ff3b30] text-white text-sm font-semibold hover:bg-[#e6352b] transition-fast"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-[2px] bg-white transition-medium ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`w-5 h-[2px] bg-white transition-medium ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-[2px] bg-white transition-medium ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-8 space-y-6">
          <MobileLink href="/" onClick={() => setMenuOpen(false)}>Home</MobileLink>
          <MobileLink href="/blog" onClick={() => setMenuOpen(false)}>Writing</MobileLink>
          <MobileLink href="/contact" onClick={() => setMenuOpen(false)}>Contact</MobileLink>
          <MobileLink href="/book" onClick={() => setMenuOpen(false)}>Book a Call</MobileLink>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-[#999999] hover:text-white transition-fast font-medium"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-2xl font-bold text-white hover:text-[#ff3b30] transition-fast"
    >
      {children}
    </Link>
  );
}
