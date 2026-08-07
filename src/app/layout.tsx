import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteMeta, siteUrl } from "@/content/site";
import FloatingSocialLoop from "@/components/FloatingSocialLoop";
import MascotTalkBubble from "@/components/MascotTalkBubble";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteMeta.title,
  description: siteMeta.description,
  keywords: [...siteMeta.keywords],
  authors: [{ name: "Anwin Shajan", url: siteUrl }],
  creator: "Anwin Shajan",
  publisher: "Anweo",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Anwin Shajan",
    title: siteMeta.title,
    description: siteMeta.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anwin Shajan — Entrepreneur, Graphic Designer & Business Strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
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
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Anwin Shajan",
  alternateName: ["Anweo"],
  url: "https://anwinportfolio.vercel.app/",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anwin Shajan",
  url: siteUrl,
  jobTitle: "Entrepreneur, Graphic Designer & Business Strategist",
  worksFor: {
    "@type": "Organization",
    name: "Anweo",
    url: "https://anweo.com",
  },
  knowsAbout: [
    "Web Development",
    "Next.js",
    "Frontend Architecture",
    "Digital Marketing",
    "E-Commerce",
    "Video Production",
  ],
  sameAs: [
    "https://www.linkedin.com/in/anwinshajan",
    "https://www.instagram.com/__an_xin_/",
    "https://www.youtube.com/@anwin_shajan",
    "https://twitter.com/anwinshajan_",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-[#FAF7F2] text-[#1A1A1A] antialiased">
        {children}
        <FloatingSocialLoop />
        <MascotTalkBubble />
      </body>
    </html>
  );
}
