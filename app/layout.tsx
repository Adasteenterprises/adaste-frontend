import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Adaste Credit | Your Trusted Credit Partner",
  description:
    "Adaste Credit provides reliable, fast, and flexible financial solutions — empowering your goals with trust and transparency.",
  keywords: [
    "Adaste Credit",
    "Loans in Kenya",
    "Personal Loans",
    "Business Financing",
    "Microloans",
    "Fast Credit",
    "Financial Solutions",
  ],
  authors: [{ name: "Adaste Credit" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Adaste Credit | Your Trusted Credit Partner",
    description:
      "Access reliable and flexible financial solutions to achieve your goals with Adaste Credit.",
    url: "https://adaste.co.ke",
    siteName: "Adaste Credit",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Header Navigation */}
        <header className="p-4 shadow-sm bg-white flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Adaste Credit" className="h-8" />
            <span className="text-xl font-bold text-blue-700">Adaste Credit</span>
          </Link>
          <nav className="space-x-6 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <Link href="/dashboard" className="hover:text-blue-700">Dashboard</Link>
            <Link href="#services" className="hover:text-blue-700">Services</Link>
            <Link href="#about" className="hover:text-blue-700">About</Link>
            <Link href="#contact" className="hover:text-blue-700">Contact</Link>
          </nav>
        </header>

        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="p-6 text-center border-t text-sm text-gray-600 bg-white">
          <p>© {new Date().getFullYear()} Adaste Credit. All rights reserved.</p>
          <p className="text-xs text-gray-400">Your Trusted Credit Partner</p>
        </footer>
      </body>
    </html>
  );
}

