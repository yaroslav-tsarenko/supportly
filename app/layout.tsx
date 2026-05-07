import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Supportly — Calm Customer Support Software for Growing Teams",
    template: "%s | Supportly",
  },
  description:
    "A modern customer support platform with shared inbox, live chat, AI replies, knowledge base, automation, and analytics.",
  openGraph: {
    title: "Supportly — Calm Customer Support Software for Growing Teams",
    description:
      "A modern customer support platform with shared inbox, live chat, AI replies, knowledge base, automation, and analytics.",
    type: "website",
    url: "https://supportly.io",
    siteName: "Supportly",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supportly — Calm Customer Support Software for Growing Teams",
    description:
      "A modern customer support platform with shared inbox, live chat, AI replies, knowledge base, automation, and analytics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
