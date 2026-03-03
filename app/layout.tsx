import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display_SC, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import SEOSchema from "@/components/seo-schema"

const playfairDisplaySC = Playfair_Display_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display-sc",
  weight: ["400", "700"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "United Shield Remodeling - Expert Home Remodeling in Northwest Houston, Texas | Veteran Owned",
  description:
    "Transform your home with United Shield Remodeling. Kitchens, bathrooms, flooring, additions & full home makeovers. Veteran-owned, licensed & insured. The Woodlands, Conroe, Tomball, Magnolia, Spring, Willis,and Montgomery",
  keywords: [
    "home remodeling Northwest Houston",
    "kitchen remodeling Northwest Houston Texas",
    "bathroom renovation Northwest Houston",
    "veteran owned contractor",
    "home additions Northwest Houston",
    "flooring installation Northwest Houston Texas",
  ],
  authors: [{ name: "United Shield Remodeling" }],
  creator: "United Shield Remodeling",
  publisher: "United Shield Remodeling",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unitedshieldremodeling.com",
    siteName: "United Shield Remodeling",
    title: "United Shield Remodeling - Expert Home Remodeling in Texas | Veteran Owned",
    description:
      "Transform your home with United Shield Remodeling. Veteran-owned, licensed & insured. Serving Conroe, Tomball & surrounding areas.",
    images: [
      {
        url: "/images/usrm-banner.jpg",
        width: 1200,
        height: 630,
        alt: "United Shield Remodeling - Kitchen Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "United Shield Remodeling - Expert Home Remodeling in Texas",
    description: "Veteran-owned home remodeling company serving The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston and surrounding areas.",
    images: ["/images/usrm-bannerjpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplaySC.variable} ${sourceSans.variable} antialiased`}>
      <head>
        <SEOSchema />
      </head>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
