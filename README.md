# Personal Blog — AI, Tech & Beyond

A clean, Apple-inspired personal blog built with Next.js and Tailwind CSS. Features include:

- **Blog system** — Markdown-based posts with frontmatter metadata
- **Comments** — Threaded comment system with replies
- **Media embeds** — YouTube and Spotify players embedded directly in posts
- **Booking** — 30-minute appointment scheduling for career guidance, AI discussions, and networking
- **Contact form** — Direct messaging
- **Responsive** — Looks great on all devices
- **Dark mode** — Automatic system preference detection

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Writing Blog Posts

Create `.md` files in `content/posts/`. Each post needs frontmatter:

```markdown
---
title: "Your Post Title"
date: "2026-07-01"
excerpt: "A brief description that shows in post listings."
tag: "AI"
youtube: "https://www.youtube.com/watch?v=VIDEO_ID"
spotify: "https://open.spotify.com/episode/EPISODE_ID"
---

Your markdown content here...
```

Supported `tag` values: AI, Tech, Career, General (or any custom tag).

The `youtube` and `spotify` fields are optional — they'll render embedded players when provided.

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" → Import this repository
4. Click "Deploy" — that's it!

Vercel will auto-deploy on every push to `main`.

## Customization

- **Styling** — Edit `src/app/globals.css` for colors and theme variables
- **Navigation** — Edit `src/components/Navbar.tsx`
- **Booking topics** — Edit `src/app/book/page.tsx` (TOPICS array)
- **Scheduling** — Replace the booking form with a Calendly/Cal.com embed for real-time availability

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [gray-matter](https://github.com/jonmitchell/gray-matter) — Frontmatter parsing
- [remark](https://github.com/remarkjs/remark) — Markdown to HTML
