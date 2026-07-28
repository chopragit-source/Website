"use client";

import { useState } from "react";

const TOPICS = [
  {
    id: "career",
    title: "Career Guidance",
    description:
      "Navigate your tech career path, discuss growth strategies, and get personalized advice.",
    icon: "🧭",
  },
  {
    id: "ai",
    title: "AI Use Cases",
    description:
      "Explore practical AI applications, discuss implementation strategies, and brainstorm ideas.",
    icon: "🤖",
  },
  {
    id: "networking",
    title: "Tech Networking",
    description:
      "General discussion about the tech world, industry trends, and building meaningful connections.",
    icon: "🌐",
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
    // In production, connect this to Calendly API, Cal.com, or your own scheduling backend
    console.log("Booking submitted:", { topic: selectedTopic, ...formData });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="pt-16">
        <section className="max-w-2xl mx-auto px-6 py-16 md:py-24 text-center">
          <div className="p-12 rounded-3xl border border-[var(--success)] bg-[var(--card-bg)]">
            <div className="text-5xl mb-6">✓</div>
            <h1 className="text-2xl font-semibold">Booking Request Sent!</h1>
            <p className="mt-4 text-[var(--muted)] max-w-md mx-auto">
              I&apos;ve received your request for a 30-minute call. I&apos;ll
              confirm the time slot via email within 24 hours.
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
              className="mt-8 text-sm text-[var(--accent)] hover:underline"
            >
              Book another call
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">
          Book a Call
        </h1>
        <p className="mt-4 text-lg text-[var(--muted)] max-w-xl">
          Schedule a free 30-minute conversation. Pick a topic, choose a time,
          and let&apos;s connect.
        </p>

        {/* Topic Selection */}
        <div className="mt-12">
          <h2 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-4">
            Choose a topic
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TOPICS.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`p-6 rounded-2xl border text-left transition-apple ${
                  selectedTopic === topic.id
                    ? "border-[var(--accent)] bg-[var(--card-hover)]"
                    : "border-[var(--border)] hover:bg-[var(--card-hover)]"
                }`}
              >
                <div className="text-2xl mb-3">{topic.icon}</div>
                <h3 className="font-semibold text-sm">{topic.title}</h3>
                <p className="mt-1 text-xs text-[var(--muted)] leading-relaxed">
                  {topic.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        {selectedTopic && (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm">⏱</span>
                <span className="text-sm font-medium">30 minutes</span>
              </div>
              <p className="text-xs text-[var(--muted)]">
                Topic:{" "}
                {TOPICS.find((t) => t.id === selectedTopic)?.title}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="book-name"
                  className="block text-sm font-medium mb-2"
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
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-apple text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="book-email"
                  className="block text-sm font-medium mb-2"
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
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-apple text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="book-date"
                  className="block text-sm font-medium mb-2"
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
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-apple text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="book-time"
                  className="block text-sm font-medium mb-2"
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
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-apple text-sm"
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
                className="block text-sm font-medium mb-2"
              >
                What would you like to discuss? (optional)
              </label>
              <textarea
                id="book-message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-apple text-sm resize-none"
                placeholder="Brief context so I can prepare for our conversation..."
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-apple"
            >
              Request Booking
            </button>
          </form>
        )}

        {/* Calendly Integration Note */}
        <div className="mt-16 p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
          <p className="text-sm text-[var(--muted)]">
            <strong className="text-[var(--foreground)]">💡 Pro tip:</strong>{" "}
            You can also embed your Calendly or Cal.com widget here for
            real-time availability. Replace the form above with your scheduling
            link for automatic confirmations.
          </p>
        </div>
      </section>
    </div>
  );
}
