import type { Metadata } from "next"
import Header from "@/components/header"
import ServiceHero from "@/components/service-hero"
import ServiceDetails from "@/components/service-details"
import FAQ from "@/components/faq"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Full Home Makeovers | United Shield Remodeling | The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston",
  description:
    "Transform your entire home with one expert team. Whole-home remodeling services in The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston. Veteran-owned, licensed & insured. Free estimates.",
}

const fullHomeMakeoverServices = [
  "Whole-home design planning",
  "Kitchen and bathroom upgrades",
  "Flooring replacement throughout",
  "Lighting and electrical updates",
  "Layout reconfigurations & wall removal",
  "Interior painting for a polished finish",
]

const fullHomeMakeoverFAQs = [
  {
    question: "Can I remodel in phases or all at once?",
    answer:
      "We offer both options! Phased remodeling allows you to spread costs over time and minimize disruption, while full remodeling gets everything done efficiently. We'll help you choose the best approach for your situation.",
  },
  {
    question: "How do you handle budgeting for large-scale makeovers?",
    answer:
      "We provide detailed, transparent pricing broken down by room and system. We work with you to prioritize improvements within your budget and can suggest cost-effective alternatives without compromising quality.",
  },
  {
    question: "Will I need to move out during the remodel?",
    answer:
      "For full-home makeovers, temporary relocation is often recommended for safety and efficiency. However, we can work with you to keep certain areas livable if staying in your home is necessary.",
  },
  {
    question: "Do you provide design guidance for a consistent style?",
    answer:
      "Yes! Our design team ensures a cohesive look throughout your home. We help you select materials, colors, and finishes that flow seamlessly from room to room while reflecting your personal style.",
  },
]

export default function FullHomeMakeoversPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero
        title="Transform Your Entire Home with One Expert Team"
        subtitle="Sometimes, it's not just one room—it's the whole house. United Shield Remodeling offers full home makeovers that refresh and reimagine every square foot, creating a cohesive and modern space you'll love for years to come."
        backgroundImage="images/usrm-banner.jpg?height=600&width=1200"
      />
      <ServiceDetails
        services={fullHomeMakeoverServices}
        whyItMatters="A full-home remodel maximizes your property's value and gives you a fresh start without leaving the place you already call home."
      />
      <FAQ faqs={fullHomeMakeoverFAQs} />
      <CTASection />
      <Footer />
    </main>
  )
}
