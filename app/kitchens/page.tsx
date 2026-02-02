import Header from "@/components/header"
import HeroWithForm from "@/components/hero-with-form"
import ServiceCards from "@/components/service-cards"
import ProcessSteps from "@/components/process-steps"
import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

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
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroWithForm
        title="Your Vision, Our Craft—Expert Home Remodeling in Texas"
        subtitle="Welcome to United Shield Remodeling, your trusted partner in transforming homes. We are a Veteran-owned remodeling contractor serving The Woodlands & surrounding areas. Kitchens, baths, and full-home remodels—built with integrity & craftsmanship."
        backgroundImage="/images/kitchen-remodeling.jpg"
      />
      <ServiceCards />
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
      <ProcessSteps />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
