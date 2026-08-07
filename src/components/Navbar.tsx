"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-spaced text-xs tracking-[0.4em] hover:text-[#ff3b30] transition-fast"
        >
          ANKUR CHOPRA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Writing</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <Link
            href="/book"
            className="text-spaced px-6 py-3 border border-white/20 hover:border-[#ff3b30] hover:text-[#ff3b30] transition-medium"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-2 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-[1px] bg-white transition-medium ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`}
          />
          <span
            className={`w-6 h-[1px] bg-white transition-medium ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-[1px] bg-white transition-medium ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-xl border-t border-white/5 px-8 py-12 space-y-8 animate-fade-in">
          <MobileLink href="/" onClick={() => setMenuOpen(false)}>Home</MobileLink>
          <MobileLink href="/blog" onClick={() => setMenuOpen(false)}>Writing</MobileLink>
          <MobileLink href="/about" onClick={() => setMenuOpen(false)}>About</MobileLink>
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
      className="text-spaced text-[#999999] hover:text-white transition-fast"
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
      className="block text-2xl font-light tracking-wider text-white hover:text-[#ff3b30] transition-fast"
    >
      {children}
    </Link>
  );
}
