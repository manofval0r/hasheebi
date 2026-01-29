import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-headings",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hashebi Global Services - Leading Construction Firm in Nigeria",
    template: "%s | Hashebi Global Services"
  },
  description: "Hashebi Global Services Nigeria Ltd is a premier construction and civil engineering firm specializing in high-fidelity residential, commercial, and industrial projects with structural integrity.",
  keywords: ["construction nigeria", "civil engineering warri", "building contractors delta", "hashebi global", "nigerian construction firm"],
  authors: [{ name: "Hashebi Global Services" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://hashebi.com.ng",
    siteName: "Hashebi Global Services",
    title: "Hashebi Global Services - Excellence in Construction",
    description: "Building Nigeria's future with precision and integrity. Discover our portfolio of landmark projects.",
    images: [
      {
        url: "/images/WhatsApp Image 2026-01-29 at 4.18.54 PM.jpeg",
        width: 1200,
        height: 630,
        alt: "Hashebi Global Construction Site",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashebi Global Services",
    description: "Nigeria's most reliable construction and engineering partner.",
    images: ["/images/WhatsApp Image 2026-01-29 at 4.18.54 PM.jpeg"],
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
        className={`${inter.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased selection:bg-brand-gold selection:text-white`}
      >
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Hashebi Global Services Nigeria Ltd",
              "image": "https://hashebi.com.ng/logo.png",
              "@id": "https://hashebi.com.ng",
              "url": "https://hashebi.com.ng",
              "telephone": "07065007653",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3 Ekuredeurhoboroad",
                "addressLocality": "Warri",
                "addressRegion": "Delta State",
                "postalCode": "332213",
                "addressCountry": "NG"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 5.5140,
                "longitude": 5.7485
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": []
            })
          }}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
