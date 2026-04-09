import type { Metadata } from "next"
import Header from "@/components/header"
import ServiceHero from "@/components/service-hero"
import ServiceDetails from "@/components/service-details"
import FAQ from "@/components/faq"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import SEOSchema from "@/components/seo-schema"

export const metadata: Metadata = {
  title: "Custom Kitchen Design & Remodeling Services - The Woodlands, Tx | United Shield Remodeling",
  description:
    "Transform your kitchen with United Shield Remodeling. Custom cabinetry, countertops, backsplashes & more. Veteran-owned kitchen remodeling in The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston. Free estimates.",
  openGraph: {
    title: "Kitchen Remodeling | United Shield Remodeling | The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston",
    description: "Transform your kitchen with custom cabinetry, countertops, and modern appliances.",
    images: [
      {
        url: "/images/usrm-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Kitchen Remodeling by United Shield Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Remodeling | United Shield Remodeling",
    description: "Transform your kitchen with expert remodeling services in The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston.",
    images: ["/images/usrm-banner.jpg"],
  },
}

const kitchenServices = [
  "Custom cabinetry & storage solutions",
  "Countertops (granite, quartz, butcher block, more)",
  "Modern backsplashes & tile work",
  "Lighting upgrades for ambiance & function",
  "Open-concept layouts and island installations",
  "Appliance installation & integration",
]

const kitchenFAQs = [
  {
    question: "Do you help with design and layout?",
    answer:
      "Yes! We provide comprehensive design consultation to help you create the perfect kitchen layout that maximizes both function and style. Our team works with you to understand your cooking habits, storage needs, and aesthetic preferences.",
  },
  {
    question: "Can you reuse existing cabinets or do you only install new ones?",
    answer:
      "We can work with your existing cabinets if they're in good structural condition. We offer cabinet refacing, painting, and hardware updates as cost-effective alternatives to full replacement when appropriate.",
  },
  {
    question: "What's the average timeline for a kitchen remodel?",
    answer:
      "Most kitchen remodels take 3-6 weeks depending on the scope of work. We provide a detailed timeline during your consultation and keep you updated throughout the process to ensure minimal disruption to your daily routine.",
  },
  {
    question: "Do you provide countertop and tile samples?",
    answer:
      "We bring samples directly to your home so you can see how different materials look in your actual lighting conditions. This helps ensure you make the best choice for your space and style.",
  },
]

export default function KitchensPage() {
  return (
    <main className="min-h-screen">
      <SEOSchema page="service" serviceName="Kitchen Remodeling" />
      <Header />
      <ServiceHero
        title="Kitchen Remodeling Services"
        <h2="Cook, Gather, and Entertain in a Kitchen Designed Just for You"</h2>
        subtitle="Your kitchen is the heart of your home—and it should be as functional as it is beautiful. At United Shield Remodeling, we transform outdated kitchens into stunning, chef-worthy spaces built around your lifestyle."
        backgroundImage="/images/kitchen-remodeling.jpg"
      />
      <ServiceDetails
        services={kitchenServices}
        whyItMatters="A remodeled kitchen adds value, improves flow, and makes everyday life more enjoyable. From casual family dinners to hosting friends, we'll give you a kitchen that truly works for you."
      />
      <FAQ faqs={kitchenFAQs} />
      <CTASection />
      <Footer />
    </main>
  )
}
