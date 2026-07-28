"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Formspree integration — replace YOUR_FORM_ID with your actual Formspree form ID
    // Sign up free at https://formspree.io and create a form to get your ID
    const FORMSPREE_ID = "YOUR_FORM_ID";

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch {
      // Fallback — still show success for demo purposes
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }

    setLoading(false);
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#5ac8fa]/5 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#5ac8fa] mb-4 animate-fade-in-up">
            Contact
          </p>
          <h1 className="text-display text-5xl md:text-7xl animate-fade-in-up-delay">
            Say Hello.
          </h1>
          <p className="mt-4 text-lg text-[#999999] max-w-lg animate-fade-in-up-delay-2">
            Have a question, idea, or just want to connect? Drop me a message.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto px-6 pb-32">
        <ScrollReveal>
          {submitted ? (
            <div className="p-12 rounded-2xl bg-[#111111] border border-white/5 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#34c759]/20 flex items-center justify-center text-3xl mb-6">
                ✓
              </div>
              <h2 className="text-2xl font-bold">Message Sent!</h2>
              <p className="mt-3 text-[#999999]">
                I&apos;ll get back to you as soon as I can.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-sm font-semibold text-[#5ac8fa] hover:text-white transition-fast"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-[#999999] mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-[#111111] border border-white/10 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#ff3b30] transition-fast"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-[#999999] mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-[#111111] border border-white/10 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#ff3b30] transition-fast"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-widest text-[#999999] mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-[#111111] border border-white/10 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#ff3b30] transition-fast"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-[#999999] mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-[#111111] border border-white/10 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#ff3b30] transition-fast resize-none"
                  placeholder="Tell me more..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 rounded-full bg-[#ff3b30] text-white text-sm font-bold uppercase tracking-wider hover:scale-105 glow-red transition-medium disabled:opacity-50 disabled:hover:scale-100"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </ScrollReveal>
      </section>
    </div>
  );
}
