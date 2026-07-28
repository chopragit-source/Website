"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <div className="pt-14">
      <section className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <h1 className="font-display text-3xl md:text-5xl font-500 tracking-tight animate-fade-in">
          Get in Touch
        </h1>
        <p className="mt-4 text-base text-[#9A9FA8] max-w-lg animate-fade-in-delay-1">
          Have a question, idea, or just want to say hello? Drop me a message.
        </p>

        {submitted ? (
          <div className="mt-12 p-8 rounded-lg bg-[#1A1D23] border border-[#2A2D35] text-center">
            <div className="text-3xl mb-4">✓</div>
            <h2 className="text-lg font-medium">Message Sent</h2>
            <p className="mt-2 text-sm text-[#9A9FA8]">
              Thanks for reaching out. I&apos;ll respond as soon as I can.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm text-[#5B8DEF] hover:text-[#F2C94C] transition-smooth"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-[#9A9FA8] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
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
                  htmlFor="email"
                  className="block text-sm text-[#9A9FA8] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
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

            <div>
              <label
                htmlFor="subject"
                className="block text-sm text-[#9A9FA8] mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-[#1A1D23] border border-[#2A2D35] text-[#EDEDED] placeholder:text-[#9A9FA8]/50 focus:outline-none focus:border-[#5B8DEF] transition-smooth text-sm"
                placeholder="What's on your mind?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-[#9A9FA8] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-[#1A1D23] border border-[#2A2D35] text-[#EDEDED] placeholder:text-[#9A9FA8]/50 focus:outline-none focus:border-[#5B8DEF] transition-smooth text-sm resize-none"
                placeholder="Tell me more..."
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-[#5B8DEF] text-white text-sm font-medium hover:bg-[#4A7CE0] transition-smooth"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
