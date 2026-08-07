import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://website-ankurchopra.vercel.app"),
  title: "Ankur Chopra — AI, Technology & Careers",
  description:
    "Exploring AI, technology, and the future of careers. Practical insights, no hype.",
  openGraph: {
    title: "Ankur Chopra — AI, Technology & Careers",
    description: "Deep dives into AI, career strategy, and the ideas reshaping technology.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankur Chopra — AI, Technology & Careers",
    description: "Deep dives into AI, career strategy, and the ideas reshaping technology.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <SmoothScroll>
          <Navbar />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
