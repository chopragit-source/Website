"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="text-center">
      <p className="text-spaced text-[#ff3b30] mb-6">Newsletter</p>
      <h2 className="text-display-spaced text-2xl md:text-4xl mb-6">
        Stay in the loop
      </h2>
      <p className="text-sm text-[#666] mb-10 max-w-md mx-auto leading-relaxed">
        Get my latest writing on AI, technology, and careers delivered to your inbox. No spam, just ideas worth your time.
      </p>

      {submitted ? (
        <p className="text-[#ff3b30] text-spaced">Thank you for subscribing</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-6 py-4 bg-transparent border border-white/10 text-white placeholder-[#444] text-sm focus:border-[#ff3b30] focus:outline-none transition-medium"
          />
          <button
            type="submit"
            className="text-spaced px-8 py-4 bg-[#ff3b30] text-white hover:bg-[#e6352b] transition-medium"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
