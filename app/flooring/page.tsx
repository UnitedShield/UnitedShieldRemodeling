import type { Metadata } from "next"
import Header from "@/components/header"
import ServiceHero from "@/components/service-hero"
import ServiceDetails from "@/components/service-details"
import FAQ from "@/components/faq"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Flooring Installation | United Shield Remodeling | The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston",
  description:
    "Beautiful floors that set the tone for your home. Hardwood, LVP, tile installation & more. Veteran-owned flooring services in The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston. Free estimates.",
}

const flooringServices = [
  "Hardwood installation & refinishing",
  "Luxury vinyl plank (LVP/LVT)",
  "Tile installation for kitchens, baths, and living spaces",
  "Subfloor preparation & removal of old flooring",
  "Baseboard and trim finishing",
]

const flooringFAQs = [
  {
    question: "Which flooring materials are best for high-traffic areas?",
    answer:
      "For high-traffic areas, we recommend luxury vinyl plank (LVP), engineered hardwood, or porcelain tile. These materials offer excellent durability while maintaining beautiful aesthetics that can withstand daily wear and tear.",
  },
  {
    question: "Do you remove old flooring?",
    answer:
      "Yes, we handle complete flooring removal and disposal as part of our service. We also prepare the subfloor to ensure your new flooring has a solid, level foundation for long-lasting results.",
  },
  {
    question: "How do I maintain hardwood vs. LVP?",
    answer:
      "Hardwood requires periodic refinishing and careful moisture control, while LVP is virtually maintenance-free with just regular cleaning. We provide detailed care instructions for whichever flooring you choose.",
  },
  {
    question: "Can you install heated flooring systems?",
    answer:
      "Yes, we can install radiant floor heating systems, particularly popular in bathrooms and kitchens. This adds comfort and can increase your home's value while providing energy-efficient heating.",
  },
]

export default function FlooringPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero
        title="Beautiful Floors That Set the Tone for Your Home"
        subtitle="Floors are the foundation of your home's style and comfort. At United Shield Remodeling, we install high-quality flooring that elevates every room—from warm hardwood to durable tile."
        backgroundImage="images/usrm-banner.jpg?height=600&width=1200"
      />
      <ServiceDetails
        services={flooringServices}
        whyItMatters="The right flooring ties your home together, adding both style and lasting durability. Our craftsmanship ensures a perfect fit, every time."
      />
      <FAQ faqs={flooringFAQs} />
      <CTASection />
      <Footer />
    </main>
  )
}
