import { Button } from "@/components/ui/button"
import { Phone, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('/military-water-damage-restoration.png')`,
        }}
      />

      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6 leading-tight">
            WATER & FIRE DAMAGE
            <br />
            <span className="text-primary">RESTORATION SERVICES</span>
            <br />
            IN THE WOODLANDS, TX
          </h1>

          <p className="text-xl mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Veteran-owned company delivering tactical precision in emergency restoration. When disaster strikes, we
            respond with military-grade efficiency and unwavering commitment.
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 mb-8"
          >
            <Phone className="h-5 w-5 mr-2" />
            Get Immediate Help: (281) 297-8500
          </Button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm">Google Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm">Yelp Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm">Facebook Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
