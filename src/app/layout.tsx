import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michele Pio Voccia | Software Engineer",
  description:
    "Portfolio di Michele Pio Voccia",
  keywords: [
    "Michele Pio Voccia",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Michele Pio Voccia" }],
  openGraph: {
    title: "Michele Pio Voccia | Full Stack Developer",
    description:
      "Digitalizzo tutto quello che desideri.",
    type: "website",
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michele Piovoccia | Full Stack Developer",
    description:
      "Creo applicazioni web moderne, scalabili e orientate al business.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michele Piovoccia",
  jobTitle: "Full Stack Developer",
  url: "https://michelepiovoccia.dev",
  sameAs: [
    "https://github.com/michelepiovoccia1999",
    "https://linkedin.com/in/michelepiovoccia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
