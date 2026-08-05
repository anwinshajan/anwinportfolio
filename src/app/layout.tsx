import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["300", "400"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://anwinportfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Anwin Shajan | Web Developer & Founder at Anweo",
  description:
    "Official portfolio of Anwin Shajan—Web Developer, Founder at Anweo, and Digital Tech Lead specializing in Next.js architectures, modern web application development, and client growth.",
  keywords: [
    "Anwin Shajan",
    "Anwin Shajan portfolio",
    "Anwin Shajan Kerala",
    "Anweo",
    "Next.js Developer Kerala",
    "Web Developer Ernakulam",
    "Anweo founder",
  ],
  authors: [{ name: "Anwin Shajan", url: siteUrl }],
  creator: "Anwin Shajan",
  publisher: "Anweo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Anwin Shajan",
    title: "Anwin Shajan | Web Developer & Founder at Anweo",
    description:
      "Official portfolio of Anwin Shajan—Web Developer, Founder at Anweo, and Digital Tech Lead specializing in Next.js architectures, modern web application development, and client growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anwin Shajan — Web Developer & Founder at Anweo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anwin Shajan | Web Developer & Founder at Anweo",
    description:
      "Official portfolio of Anwin Shajan—Web Developer, Founder at Anweo, and Digital Tech Lead specializing in Next.js architectures, modern web application development, and client growth.",
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
  jobTitle: "Web Developer & Founder",
  worksFor: {
    "@type": "Organization",
    name: "Anweo",
    url: siteUrl,
  },
  knowsAbout: [
    "Web Development",
    "Next.js",
    "Frontend Architecture",
    "IT Consulting",
    "Digital Growth & E-Commerce",
  ],
  sameAs: [
    "https://www.linkedin.com/in/anwinshajan",
    "https://github.com/anwinshajan",
    "https://twitter.com/anwinshajan",
    "https://www.youtube.com/@anwinshajan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark text-cream antialiased">{children}</body>
    </html>
  );
}

