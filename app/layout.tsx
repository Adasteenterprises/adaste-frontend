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
        <header className="p-4 text-center shadow-sm bg-white">
          <h1 className="text-2xl font-bold text-blue-700">Adaste Credit</h1>
          <p className="text-sm text-gray-500">
            Your Trusted Credit Partner
          </p>
        </header>
        <main className="min-h-screen p-6">{children}</main>
        <footer className="p-4 text-center border-t text-sm text-gray-600 bg-white">
          © {new Date().getFullYear()} Adaste Credit. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

