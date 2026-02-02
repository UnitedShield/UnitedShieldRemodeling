import type { Metadata } from "next"
import Header from "@/components/header"
import ServiceHero from "@/components/service-hero"
import ServiceDetails from "@/components/service-details"
import FAQ from "@/components/faq"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Home Additions | United Shield Remodeling | The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston",
  description:
    "Expand your home without moving. Room additions, garage conversions & more. Veteran-owned home addition services in The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston. Free estimates.",
}

const additionServices = [
  "Room additions (bedrooms, offices, playrooms)",
  "Garage conversions",
  "Living room & kitchen extensions",
  "Outdoor living spaces & patios",
  "Structural coordination with existing layout",
]

const additionFAQs = [
  {
    question: "Do you handle permits for additions?",
    answer:
      "Yes, we handle all necessary permits and inspections for your addition project. We ensure everything meets local building codes and regulations, taking the paperwork burden off your shoulders.",
  },
  {
    question: "Can you match my home's current style and finishes?",
    answer:
      "We take great care to match existing architectural details, siding, roofing, and interior finishes so your addition looks like it was always part of your home's original design.",
  },
  {
    question: "How long does a typical addition take?",
    answer:
      "Addition timelines vary based on size and complexity, typically ranging from 6-12 weeks. We provide a detailed schedule during planning and keep you updated on progress throughout construction.",
  },
  {
    question: "Do you coordinate with designers and architects?",
    answer:
      "Yes, we work closely with architects and designers when needed for complex additions. We can also provide design services in-house for simpler projects to streamline the process.",
  },
]

export default function AdditionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero
        title="Expand Your Home Without Leaving the Neighborhood You Love"
        subtitle="Need more space? United Shield Remodeling designs and builds seamless home additions—from extra bedrooms to expanded living areas—so your house grows with your needs."
        backgroundImage="images/usrm-banner.jpg?height=600&width=1200"
      />
      <ServiceDetails
        services={additionServices}
        whyItMatters="A thoughtful addition increases your home's functionality and value, without the hassle of moving. We make sure it blends perfectly with your existing style."
      />
      <FAQ faqs={additionFAQs} />
      <CTASection />
      <Footer />
    </main>
  )
}
