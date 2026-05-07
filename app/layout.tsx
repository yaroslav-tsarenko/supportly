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
    default: "Supportly — Smart Call Support Software for Growing Teams",
    template: "%s | Supportly",
  },
  description:
    "A modern call support platform with smart routing, call queue management, AI call summaries, real-time monitoring, and powerful analytics.",
  openGraph: {
    title: "Supportly — Smart Call Support Software for Growing Teams",
    description:
      "A modern call support platform with smart routing, call queue management, AI call summaries, real-time monitoring, and powerful analytics.",
    type: "website",
    url: "https://supportly.io",
    siteName: "Supportly",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supportly — Smart Call Support Software for Growing Teams",
    description:
      "A modern call support platform with smart routing, call queue management, AI call summaries, real-time monitoring, and powerful analytics.",
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
