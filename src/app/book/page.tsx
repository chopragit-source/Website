"use client";

import { useState } from "react";

const TOPICS = [
  {
    id: "career",
    title: "Career Guidance",
    description: "Navigate your next move in the AI era.",
    icon: "🧭",
    color: "#ff3b30",
  },
  {
    id: "ai",
    title: "AI Use Cases",
    description: "Explore how AI fits into your work.",
    icon: "⚡",
    color: "#5ac8fa",
  },
  {
    id: "networking",
    title: "Tech Networking",
    description: "General conversation about the tech world.",
    icon: "🌍",
    color: "#af52de",
  },
];

export default function BookPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Booking submitted:", { topic: selectedTopic, ...formData });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="p-12 rounded-2xl bg-[#111111] border border-white/5 text-center max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#34c759]/20 flex items-center justify-center text-3xl mb-6">
            ✓
          </div>
          <h1 className="text-2xl font-bold">Booking Request Sent!</h1>
          <p className="mt-3 text-[#999999] text-sm">
            I&apos;ll confirm the time via email within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setSelectedTopic(null);
              setFormData({ name: "", email: "", message: "", preferredDate: "", preferredTime: "" });
            }}
            className="mt-8 text-sm font-semibold text-[#ff3b30] hover:text-white transition-fast"
          >
            Book another call
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#af52de]/5 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#af52de] mb-4 animate-fade-in-up">
            Book a Call
          </p>
          <h1 className="text-display text-5xl md:text-7xl animate-fade-in-up-delay">
            Let&apos;s Connect.
          </h1>
          <p className="mt-4 text-lg text-[#999999] max-w-lg animate-fade-in-up-delay-2">
            30 minutes. No pitch, no agenda — just a genuine conversation.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#999999] mb-6">
          Pick a topic
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TOPICS.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className={`p-7 rounded-2xl border text-left transition-medium ${
                selectedTopic === topic.id
                  ? "border-[#ff3b30] bg-[#111111] scale-[1.02] shadow-[0_0_30px_rgba(255,59,48,0.15)]"
                  : "border-white/5 bg-[#111111] hover:border-white/20 hover:scale-[1.01]"
              }`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{ background: `${topic.color}15` }}
              >
                {topic.icon}
              </div>
              <h3 className="text-base font-bold">{topic.title}</h3>
              <p className="mt-1 text-xs text-[#999999]">{topic.description}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      {selectedTopic && (
        <section className="max-w-2xl mx-auto px-6 pb-32">
          <div className="p-5 rounded-xl bg-[#1a1a1a] border border-white/5 mb-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#ff3b30]/20 flex items-center justify-center text-sm">
              ⏱
            </div>
            <div>
              <p className="text-sm font-bold">30 minutes</p>
              <p className="text-xs text-[#999999]">
                Topic: {TOPICS.find((t) => t.id === selectedTopic)?.title}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="book-name" className="block text-xs font-bold uppercase tracking-widest text-[#999999] mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="book-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-[#111111] border border-white/10 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#ff3b30] transition-fast"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="book-email" className="block text-xs font-bold uppercase tracking-widest text-[#999999] mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="book-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-[#111111] border border-white/10 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#ff3b30] transition-fast"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="book-date" className="block text-xs font-bold uppercase tracking-widest text-[#999999] mb-3">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="book-date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-[#111111] border border-white/10 text-white focus:outline-none focus:border-[#ff3b30] transition-fast"
                />
              </div>
              <div>
                <label htmlFor="book-time" className="block text-xs font-bold uppercase tracking-widest text-[#999999] mb-3">
                  Preferred Time
                </label>
                <select
                  id="book-time"
                  required
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-[#111111] border border-white/10 text-white focus:outline-none focus:border-[#ff3b30] transition-fast"
                >
                  <option value="">Select a time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="book-message" className="block text-xs font-bold uppercase tracking-widest text-[#999999] mb-3">
                Context (optional)
              </label>
              <textarea
                id="book-message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-[#111111] border border-white/10 text-white placeholder:text-[#666666] focus:outline-none focus:border-[#ff3b30] transition-fast resize-none"
                placeholder="What would you like to discuss?"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 rounded-full bg-[#ff3b30] text-white text-sm font-bold uppercase tracking-wider hover:scale-105 glow-red transition-medium"
            >
              Request Booking →
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
