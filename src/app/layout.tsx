import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { portfolioData } from "@/data/portfolioData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#06090e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} — Portfolio`,
  description: `${portfolioData.personal.name}'s personal portfolio showcasing modern, responsive web development projects built with React, Next.js, and TypeScript.`,
  keywords: [
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Software Engineer",
    "Web Development Portfolio",
  ],
  authors: [{ name: portfolioData.personal.name }],
  creator: portfolioData.personal.name,
  openGraph: {
    title: `${portfolioData.personal.name} — Portfolio`,
    description: portfolioData.personal.shortBio,
    type: "website",
    locale: "en_US",
    siteName: `${portfolioData.personal.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} — Portfolio`,
    description: portfolioData.personal.shortBio,
  },
  icons: {
    icon: "/window.svg",
    shortcut: "/window.svg",
    apple: "/window.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
