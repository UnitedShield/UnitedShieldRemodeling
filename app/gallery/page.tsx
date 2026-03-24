import type { Metadata } from "next"
import Header from "@/components/header"
import ServiceHero from "@/components/service-hero"
import FacebookGallery from "@/components/facebook-gallery"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import SEOSchema from "@/components/seo-schema"

export const metadata: Metadata = {
  title: "Project Gallery | United Shield Remodeling | The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston",
  description:
    "Browse our gallery of completed home remodeling projects. Kitchen renovations, bathroom remodels, flooring installations, and full home makeovers across The Woodlands, Spring, Conroe, Tomball, and surrounding areas.",
  openGraph: {
    title: "Project Gallery | United Shield Remodeling",
    description: "See the incredible home transformations we've completed for homeowners across the Houston area.",
    images: [
      {
        url: "/images/usrm-banner.jpg",
        width: 1200,
        height: 630,
        alt: "United Shield Remodeling Project Gallery",
      },
    ],
  },
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <SEOSchema page="gallery" />
      <Header />
      <ServiceHero
        title="Our Project Gallery"
        subtitle="See the transformations we've delivered for homeowners across The Woodlands and surrounding areas."
        backgroundImage="/images/usrm-banner.jpg"
      />
      <FacebookGallery />
      <CTASection />
      <Footer />
    </main>
  )
}
