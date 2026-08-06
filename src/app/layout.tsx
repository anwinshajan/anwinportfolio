import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteMeta, siteUrl } from "@/content/site";

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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Anwin Shajan",
    title: "Anwin Shajan | Founder of Anweo",
    description: "Building Anweo, Nwee, Nweedu, and KGVYC from Kerala. Digital marketing, e-commerce, tutoring, and community — one founder, four ventures.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anwin Shajan — Founder & Web Developer",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anwin Shajan",
  url: siteUrl,
  jobTitle: "Founder & Web Developer",
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
    "https://www.youtube.com/@Swipeetechy",
    "https://twitter.com/anwinshajan",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAF7F2] text-[#1A1A1A] antialiased">
        {children}
      </body>
    </html>
  );
}
