"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight transition-apple hover:opacity-70"
        >
          ✦ Blog
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/book">Book a Call</NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-[var(--foreground)] transition-apple ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-[var(--foreground)] transition-apple ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-[var(--foreground)] transition-apple ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass-card border-t border-[var(--border)] px-6 py-4 space-y-4">
          <MobileLink href="/" onClick={() => setMenuOpen(false)}>
            Home
          </MobileLink>
          <MobileLink href="/blog" onClick={() => setMenuOpen(false)}>
            Blog
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
      className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-apple"
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
      className="block text-base text-[var(--foreground)] hover:text-[var(--accent)] transition-apple"
    >
      {children}
    </Link>
  );
}
