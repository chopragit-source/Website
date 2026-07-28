"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F1115]/80 backdrop-blur-md border-b border-[#2A2D35]/50">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-[#EDEDED] hover:text-[#5B8DEF] transition-smooth"
        >
          Home
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/blog">Writing</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/book">Book a Call</NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-4 h-[1.5px] bg-[#EDEDED] transition-smooth ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
          />
          <span
            className={`w-4 h-[1.5px] bg-[#EDEDED] transition-smooth ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-4 h-[1.5px] bg-[#EDEDED] transition-smooth ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F1115]/95 backdrop-blur-md border-t border-[#2A2D35]/50 px-6 py-6 space-y-5">
          <MobileLink href="/" onClick={() => setMenuOpen(false)}>
            Home
          </MobileLink>
          <MobileLink href="/blog" onClick={() => setMenuOpen(false)}>
            Writing
          </MobileLink>
          <MobileLink href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </MobileLink>
          <MobileLink href="/book" onClick={() => setMenuOpen(false)}>
            Book a Call
          </MobileLink>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-[#9A9FA8] hover:text-[#EDEDED] transition-smooth"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-base text-[#EDEDED] hover:text-[#5B8DEF] transition-smooth"
    >
      {children}
    </Link>
  );
}
