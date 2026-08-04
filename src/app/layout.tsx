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

const siteUrl = "https://anwinshajan.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Anwin Shajan — Founder of Anweo, Nwee & Nweedu",
  description:
    "Anwin Shajan is a Kerala-based entrepreneur and builder. Founder of Anweo (digital marketing agency), Nwee (e-commerce), and Nweedu (online tutoring for Kerala SSLC students).",
  keywords: [
    "Anwin Shajan",
    "Anweo",
    "Nwee",
    "Nweedu",
    "Kerala entrepreneur",
    "digital marketing agency Kerala",
    "web developer Kerala",
  ],
  authors: [{ name: "Anwin Shajan", url: siteUrl }],
  creator: "Anwin Shajan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Anwin Shajan",
    title: "Anwin Shajan — Founder of Anweo, Nwee & Nweedu",
    description:
      "Kerala-based entrepreneur building digital ventures — Anweo, Nwee, and Nweedu.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anwin Shajan — Founder & Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anwin Shajan — Founder of Anweo, Nwee & Nweedu",
    description:
      "Kerala-based entrepreneur building digital ventures — Anweo, Nwee, and Nweedu.",
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
  jobTitle: "Entrepreneur & Founder",
  url: siteUrl,
  sameAs: ["https://linkedin.com/in/anwinshajan"],
  description:
    "Kerala-based entrepreneur and builder. Founder of Anweo, Nwee, and Nweedu.",
  knowsAbout: [
    "Web Development",
    "Digital Marketing",
    "Video Production",
    "E-Commerce",
    "Online Education",
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
