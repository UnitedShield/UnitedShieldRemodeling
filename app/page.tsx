import type { Metadata } from "next"
import Header from "@/components/header"
import ServiceHero from "@/components/service-hero"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import { Shield, Award, Users, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About United Shield Remodeling | Veteran-Owned | The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston",
  description:
    "Learn about United Shield Remodeling, a veteran-owned home remodeling company in The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston. Led by Scott Simpson, we bring military discipline to every project.",
}

const values = [
  {
    icon: Shield,
    title: "Integrity First",
    description: "We believe in honest estimates, transparent pricing, and work that speaks for itself.",
  },
  {
    icon: Award,
    title: "Veteran Reliability",
    description: "When we commit, we follow through. Deadlines and promises matter.",
  },
  {
    icon: CheckCircle,
    title: "Craftsmanship That Lasts",
    description: "Your home is an investment—we build it to withstand everyday life.",
  },
  {
    icon: Users,
    title: "Customer First Mindset",
    description: "We listen, adapt, and keep you updated at every stage.",
  },
]

const trustFactors = [
  "Licensed & insured for peace of mind",
  "Locally owned and operated in Texas",
  "Veteran-Owned Business recognition",
  "Dozens of successful remodels across The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston",
  "A reputation for communication, cleanliness, and professionalism",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceHero
        title="Built on Discipline. Driven by Craftsmanship. Dedicated to You."
        subtitle="Welcome to United Shield Remodeling, your trusted partner in transforming homes. We are a Veteran-owned remodeling contractor serving The Woodlands & surrounding areas. Kitchens, baths, and full-home remodels—built with integrity & craftsmanship."
        backgroundImage="/images/usrm-banner.jpg"
      />

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                United Shield Remodeling is a Veteran-Owned business serving homeowners across the Houston area and
                beyond. What sets us apart isn't just our craftsmanship—it's our approach. We show up when we say we
                will, keep communication clear, and leave your home cleaner than we found it.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience in kitchens, bathrooms, flooring, additions, and full home makeovers, we're
                here to deliver transformations that last a lifetime.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary p-3 rounded-full">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl">Veteran-Owned Business</h3>
                  <p className="text-muted-foreground">Military discipline meets home craftsmanship</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Led by owner Scott Simpson, a proud Veteran, our team brings military-level discipline, attention to
                detail, and integrity to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide every project we take on and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-xl mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Homeowners Trust Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">Why Homeowners Trust Us</h2>
              <ul className="space-y-4">
                {trustFactors.map((factor, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-lg text-muted-foreground">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* A Note from Scott */}
            <div className="bg-secondary text-secondary-foreground p-8 rounded-lg">
              <h3 className="font-serif font-bold text-2xl mb-4 text-white">A Note from Scott</h3>
              <blockquote className="text-secondary-foreground/90 leading-relaxed mb-4 italic">
                "As a Veteran, I was trained to value precision, accountability, and teamwork. Those lessons carry into
                every project we take on at United Shield Remodeling. My promise is simple: when you hire us, you'll get
                a partner who respects your home, your budget, and your time. That's how we build trust—and stunning
                spaces—one project at a time."
              </blockquote>
              <div className="text-right">
                <div className="font-serif font-semibold text-lg text-white">— Scott Simpson</div>
                <div className="text-secondary-foreground/80 text-sm">Owner, United Shield Remodeling</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
