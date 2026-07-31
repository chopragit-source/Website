"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // In production, connect to Mailchimp, ConvertKit, Buttondown, etc.
    console.log("Newsletter signup:", email);
    setSubmitted(true);
    setEmail("");
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
      <h3 className="text-lg font-bold mb-2">Stay in the loop</h3>
      <p className="text-sm text-[#999999] mb-5">
        Get new posts delivered to your inbox. No spam, unsubscribe anytime.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
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
          className="px-6 py-3 rounded-full bg-[#ff3b30] text-white text-sm font-bold hover:scale-105 transition-medium whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
