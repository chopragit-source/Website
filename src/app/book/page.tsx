"use client";

import { useState } from "react";

const TOPICS = [
  {
    id: "career",
    title: "Career Guidance",
    description:
      "Navigate your next career move in the AI era.",
    icon: "🧭",
  },
  {
    id: "ai",
    title: "AI Use Cases",
    description:
      "Explore how AI fits into your work or project.",
    icon: "◆",
  },
  {
    id: "networking",
    title: "Tech Networking",
    description:
      "General conversation about the tech world.",
    icon: "◎",
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
      <div className="pt-14">
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 text-center">
          <div className="p-12 rounded-lg bg-[#1A1D23] border border-[#2A2D35]">
            <div className="text-4xl mb-6">✓</div>
            <h1 className="font-display text-xl font-500">Booking Request Sent</h1>
            <p className="mt-4 text-[#9A9FA8] text-sm max-w-sm mx-auto">
              I&apos;ll confirm the time slot via email within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setSelectedTopic(null);
                setFormData({
                  name: "",
                  email: "",
                  message: "",
                  preferredDate: "",
                  preferredTime: "",
                });
              }}
              className="mt-8 text-sm text-[#5B8DEF] hover:text-[#F2C94C] transition-smooth"
            >
              Book another call
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-14">
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="font-display text-3xl md:text-5xl font-500 tracking-tight animate-fade-in">
          Book a Call
        </h1>
        <p className="mt-4 text-base text-[#9A9FA8] max-w-lg animate-fade-in-delay-1">
          30 minutes. No pitch, just a conversation. Pick a topic and a time.
        </p>

        {/* Topic Selection */}
        <div className="mt-12">
          <p className="font-mono text-xs text-[#9A9FA8] uppercase tracking-wider mb-4">
            Choose a topic
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TOPICS.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`p-5 rounded-lg border text-left transition-smooth ${
                  selectedTopic === topic.id
                    ? "border-[#5B8DEF] bg-[#1A1D23]"
                    : "border-[#2A2D35] hover:border-[#5B8DEF]/50 bg-transparent"
                }`}
              >
                <div className="text-lg mb-2">{topic.icon}</div>
                <h3 className="text-sm font-medium">{topic.title}</h3>
                <p className="mt-1 text-xs text-[#9A9FA8] leading-relaxed">
                  {topic.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        {selectedTopic && (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="p-4 rounded-lg bg-[#1A1D23] border border-[#2A2D35]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#5B8DEF]">30 min</span>
                <span className="text-xs text-[#9A9FA8]">·</span>
                <span className="text-xs text-[#9A9FA8]">
                  {TOPICS.find((t) => t.id === selectedTopic)?.title}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="book-name"
                  className="block text-sm text-[#9A9FA8] mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="book-name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#1A1D23] border border-[#2A2D35] text-[#EDEDED] placeholder:text-[#9A9FA8]/50 focus:outline-none focus:border-[#5B8DEF] transition-smooth text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="book-email"
                  className="block text-sm text-[#9A9FA8] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="book-email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#1A1D23] border border-[#2A2D35] text-[#EDEDED] placeholder:text-[#9A9FA8]/50 focus:outline-none focus:border-[#5B8DEF] transition-smooth text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="book-date"
                  className="block text-sm text-[#9A9FA8] mb-2"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="book-date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredDate: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#1A1D23] border border-[#2A2D35] text-[#EDEDED] focus:outline-none focus:border-[#5B8DEF] transition-smooth text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="book-time"
                  className="block text-sm text-[#9A9FA8] mb-2"
                >
                  Preferred Time
                </label>
                <select
                  id="book-time"
                  required
                  value={formData.preferredTime}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredTime: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#1A1D23] border border-[#2A2D35] text-[#EDEDED] focus:outline-none focus:border-[#5B8DEF] transition-smooth text-sm"
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
              <label
                htmlFor="book-message"
                className="block text-sm text-[#9A9FA8] mb-2"
              >
                Context (optional)
              </label>
              <textarea
                id="book-message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-[#1A1D23] border border-[#2A2D35] text-[#EDEDED] placeholder:text-[#9A9FA8]/50 focus:outline-none focus:border-[#5B8DEF] transition-smooth text-sm resize-none"
                placeholder="Brief context so I can prepare..."
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-[#5B8DEF] text-white text-sm font-medium hover:bg-[#4A7CE0] transition-smooth"
            >
              Request Booking
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
