import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-sm mb-4">Navigate</h3>
            <div className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/book">Book a Call</FooterLink>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-4">Topics</h3>
            <div className="space-y-2">
              <FooterLink href="/blog?tag=ai">Artificial Intelligence</FooterLink>
              <FooterLink href="/blog?tag=tech">Technology</FooterLink>
              <FooterLink href="/blog?tag=career">Career</FooterLink>
              <FooterLink href="/blog?tag=general">General</FooterLink>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-4">Connect</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Reach out for career guidance, AI discussions, or general tech
              networking. Always happy to connect.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} Personal Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-apple"
    >
      {children}
    </Link>
  );
}
