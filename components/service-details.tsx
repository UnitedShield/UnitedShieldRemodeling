import { Check, Phone } from "lucide-react"

interface ServiceDetailsProps {
  services: string[]
  whyItMatters: string
}

export default function ServiceDetails({ services, whyItMatters }: ServiceDetailsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">What We Do</h2>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">Why It Matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{whyItMatters}</p>

            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="font-serif font-semibold text-xl mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-4">
                Call 281-870-4601 or request your free estimate today. Let's bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:281-870-4601"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Request Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
