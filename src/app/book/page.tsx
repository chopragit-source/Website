"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

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

  // Replace YOUR_CAL_USERNAME with your actual Cal.com username
  // Sign up free at https://cal.com
  const CAL_USERNAME = "ankur-chopra-sc6gta";
  const CAL_EVENT = "30min";

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
        <ScrollReveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#999999] mb-6">
            What would you like to discuss?
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
        </ScrollReveal>
      </section>

      {/* Cal.com Embed */}
      {selectedTopic && (
        <section className="max-w-4xl mx-auto px-6 pb-32">
          <ScrollReveal>
            <div className="rounded-2xl bg-[#111111] border border-white/5 overflow-hidden">
              <div className="p-6 border-b border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ff3b30]/20 flex items-center justify-center text-sm">
                  ⏱
                </div>
                <div>
                  <p className="text-sm font-bold">30-minute call</p>
                  <p className="text-xs text-[#999999]">
                    Topic: {TOPICS.find((t) => t.id === selectedTopic)?.title}
                  </p>
                </div>
              </div>

              {/* Cal.com iframe embed */}
              <div className="p-6">
                <div className="rounded-xl overflow-hidden bg-white" style={{ minHeight: "600px" }}>
                  <iframe
                    src={`https://cal.com/${CAL_USERNAME}/${CAL_EVENT}?embed=true&theme=dark`}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="Book a call"
                    style={{ minHeight: "600px" }}
                  />
                </div>
                <p className="mt-4 text-xs text-[#666666] text-center">
                  Powered by Cal.com — select a time that works for you and you&apos;ll receive a confirmation email.
                </p>
              </div>
            </div>

            {/* Fallback info */}
            <div className="mt-8 p-6 rounded-2xl bg-[#111111] border border-white/5">
              <p className="text-sm text-[#999999]">
                <strong className="text-white">💡 Note:</strong> If the calendar doesn&apos;t load,
                you can book directly at{" "}
                <a
                  href={`https://cal.com/ankur-chopra-sc6gta/30min`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5ac8fa] hover:underline"
                >
                  cal.com/ankur-chopra-sc6gta/30min
                </a>
              </p>
            </div>
          </ScrollReveal>
        </section>
      )}
    </div>
  );
}
