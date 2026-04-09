import type { Metadata } from "next"
import Header from "@/components/header"
import ServiceHero from "@/components/service-hero"
import ServiceDetails from "@/components/service-details"
import FAQ from "@/components/faq"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Bathroom & Bathtub Remodeling Services - The Woodlands, Tx | United Shield Remodeling",
  description:
    "Transform your bathroom into a spa-like retreat. Walk-in showers, custom vanities, tile work & more. Veteran-owned bathroom remodeling in The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston. Free estimates.",
}

const bathroomServices = [
  "Walk-in showers with frameless glass",
  "Bathtub replacements & freestanding tubs",
  "Custom vanities & double sinks",
  "Tile flooring & wall accents",
  "Lighting and mirror upgrades",
  "Accessibility improvements (grab bars, walk-in tubs)",
]

const bathroomFAQs = [
  {
    question: "Do you install walk-in showers?",
    answer:
      "Yes! Walk-in showers are one of our specialties. We can convert your existing tub/shower combo into a beautiful, accessible walk-in shower with custom tile work, frameless glass doors, and modern fixtures.",
  },
  {
    question: "Can you make my bathroom more accessible?",
    answer:
      "Absolutely. We specialize in accessibility improvements including grab bars, walk-in tubs, curbless showers, comfort-height toilets, and wider doorways to ensure your bathroom is safe and comfortable for all users.",
  },
  {
    question: "How long does a typical bathroom remodel take?",
    answer:
      "Most bathroom remodels take 2-4 weeks depending on the complexity. We work efficiently to minimize disruption while ensuring every detail meets our high standards of craftsmanship.",
  },
  {
    question: "Do you handle plumbing and electrical?",
    answer:
      "Yes, we coordinate all plumbing and electrical work with licensed professionals. This ensures everything is up to code and properly integrated with your new bathroom design.",
  },
]

export default function BathroomsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero
        title="Custom Bathroom Remodeling"
        subtitle="Your bathroom: reimagined as a personal retreat. Turn your bathroom into a spa-like sanctuary. Whether it's a sleek modern shower, a luxurious tub, or a practical upgrade, United Shield Remodeling delivers bathrooms that combine comfort, beauty, and durability."
        backgroundImage="/images/usrm-banner.jpg"
      />
      <ServiceDetails
        services={bathroomServices}
        whyItMatters="A bathroom remodel boosts your home's value while giving you a space to relax and recharge. Every detail is tailored to your lifestyle."
      />
      <FAQ faqs={bathroomFAQs} />
      <CTASection />
      <Footer />
    </main>
  )
}
