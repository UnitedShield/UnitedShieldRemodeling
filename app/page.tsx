import type { Metadata } from "next"
import Header from "@/components/header"
import HeroWithForm from "@/components/hero-with-form"
import ServiceCards from "@/components/service-cards"
import ProcessSteps from "@/components/process-steps"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Home Remodeling Services | United Shield Remodeling | The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston",
  description:
    "Expert home remodeling services in The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston. Kitchens, bathrooms, flooring, additions & full home makeovers. Veteran-owned, licensed & insured. Free estimates.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroWithForm
        title="Transform Your Home with Expert Remodeling Services"
        subtitle="From single rooms to whole-home transformations, we deliver craftsmanship that lasts."
        backgroundImage="/images/usrm-banner.jpg"
        showForm={false}
      />
      <ServiceCards />
      <ProcessSteps />
      <CTASection />
      <Footer />
    </main>
  )
}
