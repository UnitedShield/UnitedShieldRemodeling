import type { Metadata } from "next"
import Header from "@/components/header"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact United Shield Remodeling | Free Estimates | The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston",
  description:
    "Contact United Shield Remodeling for your free estimate. The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston. Call (281) 870-4601 or email info@unitedshieldremodeling.com",
}

const serviceAreas = [
  "The Woodlands",
  "Spring",
  "Conroe", 
  "Tomball", 
  "Montgomery", 
  "Magnolia", 
  "Willis", 
  "Cypress", 
  "North Houston",
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif font-bold text-4xl md:text-5xl mb-6">Ready to Transform Your Home?</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and discover how United Shield Remodeling can bring your vision to
            life with military-grade precision and craftsmanship.
          </p>
          <div className="flex items-center justify-center gap-2 text-primary">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">Veteran-Owned • Licensed • Insured</span>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif font-bold text-3xl mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-1">Phone</h3>
                    <div className="text-muted-foreground">
                      <div>
                        Office:{" "}
                        <a href="tel:281-870-4601" className="text-primary hover:underline">
                          281-870-4601
                        </a>
                      </div>
                      <div>
                        Cell:{" "}
                        <a href="tel:281-728-6335" className="text-primary hover:underline">
                          281-728-6335
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:info@unitedshieldremodeling.com"
                      className="text-primary hover:underline text-muted-foreground"
                    >
                      info@unitedshieldremodeling.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-1">Service Area</h3>
                    <p className="text-muted-foreground">The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-1">Business Hours</h3>
                    <div className="text-muted-foreground">
                      <div>Monday - Friday: 7:00 AM - 6:00 PM</div>
                      <div>Saturday: 8:00 AM - 4:00 PM</div>
                      <div>Sunday: By appointment</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Owner Information */}
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="font-serif font-semibold text-xl mb-3">Meet the Owner</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary p-2 rounded-full">
                    <Shield className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold">Scott Simpson</div>
                    <div className="text-muted-foreground text-sm">Owner & Lead Contractor</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Veteran-owned and operated, Scott brings military discipline and attention to detail to every
                  remodeling project. Your satisfaction and home's transformation are his top priorities.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Areas We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proudly serving homeowners throughout The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {serviceAreas.map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-semibold text-foreground">{area}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Don't see your area listed?{" "}
              <a href="tel:281-870-4601" className="text-primary hover:underline font-semibold">
                Call us at 281-870-4601
              </a>{" "}
              to discuss your project location.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
