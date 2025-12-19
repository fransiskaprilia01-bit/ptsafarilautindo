import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT SAFARI LAUT INDO - Wisata Tirta Terbaik di Padang",
  description: "Nikmati petualangan wisata tirta tak terlupakan bersama PT SAFARI LAUT INDO. Paket wisata pulau, snorkeling, dan sewa kapal terbaik di Sumatera Barat.",
  keywords: ["PT SAFARI LAUT INDO", "wisata tirta", "wisata bahari", "Padang", "Sumatera Barat", "snorkeling", "sewa kapal", "wisata pulau"],
  authors: [{ name: "PT SAFARI LAUT INDO" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "PT SAFARI LAUT INDO - Wisata Tirta Terbaik di Padang",
    description: "Nikmati petualangan wisata tirta tak terlupakan bersama PT SAFARI LAUT INDO. Paket wisata pulau, snorkeling, dan sewa kapal terbaik di Sumatera Barat.",
    url: "https://safarilautindo.com",
    siteName: "PT SAFARI LAUT INDO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT SAFARI LAUT INDO - Wisata Tirta Terbaik di Padang",
    description: "Nikmati petualangan wisata tirta tak terlupakan bersama PT SAFARI LAUT INDO.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="a054x89q4m5fbhmxvr9s6e0zsreksj" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
