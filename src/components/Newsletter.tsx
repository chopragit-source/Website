"use client";

import { useState } from "react";
import Link from "next/link";

const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029Vb8W7u2AInPmXxHnQt15";
// Replace with your ConvertKit form ID once you have it
const CONVERTKIT_FORM_ID = "9748078";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);

    try {
      // ConvertKit form submission (no API key needed — uses public form endpoint)
      await fetch(`https://app.convertkit.com/forms/${CONVERTKIT_FORM_ID}/subscriptions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email_address: email.trim(),
        }),
      });
    } catch {
      // Still show success
    }

    setSubmitted(true);
    setEmail("");
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-[#111111] border border-white/5 text-center">
        <div className="text-3xl mb-3">🎉</div>
        <p className="text-sm font-semibold">You&apos;re in!</p>
        <p className="text-xs text-[#999999] mt-1">
          You&apos;ll get notified when I publish something new.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-2xl bg-[#111111] border border-white/5">
      <h3 className="text-lg font-bold mb-2">Never miss a post</h3>
      <p className="text-sm text-[#999999] mb-6">
        Get new articles delivered to your inbox or WhatsApp. No spam, unsubscribe anytime.
      </p>

      {/* Email signup */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-5 py-3 rounded-full bg-black border border-white/10 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#ff3b30] transition-fast text-sm"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-full bg-[#ff3b30] text-white text-sm font-bold hover:scale-105 transition-medium whitespace-nowrap disabled:opacity-50"
        >
          {loading ? "..." : "Subscribe"}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-px bg-white/5" />
        <span className="text-[10px] uppercase tracking-wider text-[#666666]">or</span>
        <div className="flex-1 h-px bg-white/5" />
      </div>

      {/* WhatsApp + RSS */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href={WHATSAPP_CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/20 hover:scale-105 transition-medium"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Join WhatsApp Channel
        </Link>
        <Link
          href="/feed.xml"
          target="_blank"
          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#ff9500]/10 border border-[#ff9500]/30 text-[#ff9500] text-sm font-semibold hover:bg-[#ff9500]/20 hover:scale-105 transition-medium"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
          </svg>
          RSS Feed
        </Link>
      </div>
    </div>
  );
}
