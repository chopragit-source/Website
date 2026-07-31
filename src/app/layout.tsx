import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://website-ankurchopra.vercel.app"),
  title: "AI & Tech — Career Guidance, Insights & More",
  description:
    "Exploring AI, technology, and the future of careers. Book a free call to discuss your next move.",
  openGraph: {
    title: "AI & Tech — Career Guidance, Insights & More",
    description: "Deep dives into AI, career strategy, and the ideas reshaping technology.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Tech — Career Guidance, Insights & More",
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
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
