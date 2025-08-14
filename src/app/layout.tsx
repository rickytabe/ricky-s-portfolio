import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import {
  seoConfig,
  structuredData,
  websiteStructuredData,
  portfolioStructuredData,
} from "@/lib/seo-config";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: seoConfig.title,
    template: `%s | Tabe Rickson`,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [seoConfig.author],
  creator: seoConfig.author.name,
  publisher: seoConfig.author.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoConfig.siteUrl,
    title: seoConfig.title,
    description: seoConfig.description,
    siteName: "Tabe Rickson Portfolio",
    images: [
      {
        url: seoConfig.image,
        width: 1200,
        height: 630,
        alt: "Tabe Rickson Portfolio Banner",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    creator: seoConfig.social.x,
    images: [seoConfig.image],
  },
  verification: { google: "your-google-site-verification-code" },
  alternates: { canonical: seoConfig.siteUrl },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
  icons: {
    icon: '/favicon.png',
    apple:'/favicon.png',
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioStructuredData) }}
        />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />

        {/* Additional meta */}
        <meta name="image" content={seoConfig.image} />
        <meta name="thumbnail" content={seoConfig.image} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
        </body>
    </html>
  );
}
