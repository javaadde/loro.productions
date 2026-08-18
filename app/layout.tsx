import type { Metadata } from "next";
import "./globals.css";
import { GrainOverlay } from "@/components/GrainOverlay";

export const metadata: Metadata = {
  title: "Loro Productions | Video Production & Personal Branding Studio",
  description: "Loro Productions turns founders, executives, and visionaries into industry authorities through high-retention video storytelling, cinema-grade studio production, and organic distribution.",
  keywords: [
    "Loro Productions",
    "Video Production Agency",
    "Personal Branding",
    "Founder Personal Brand",
    "Short Form Video Editing",
    "Docuseries Production",
    "High Retention Reels",
  ],
  authors: [{ name: "Loro Productions" }],
  openGraph: {
    title: "Loro Productions | Video Production & Personal Branding",
    description: "We craft binge-worthy personal brands with cinematic video production and retention architecture.",
    url: "https://loro.productions",
    siteName: "Loro Productions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loro Productions | Video Production & Personal Branding",
    description: "We craft binge-worthy personal brands with cinematic video production and retention architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen relative bg-paper-100 text-brand-charcoal selection:bg-brand-orange selection:text-paper-100">
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
