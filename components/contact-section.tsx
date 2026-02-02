import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, MapPin, Shield } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
            WHY CHOOSE <span className="text-primary">US?</span>
          </h2>
          <p className="text-base md:text-xl text-secondary-foreground/90 max-w-3xl mx-auto">
            When you need help with water, fire, or mold damage, don't hesitate to call us. We'll be there 24/7 and we
            can respond quickly so that everything gets taken care of as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <div className="bg-primary text-primary-foreground p-6 md:p-8 rounded-lg mb-6 md:mb-8">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <Shield className="h-8 w-8 md:h-12 md:w-12" />
                <div>
                  <h3 className="font-serif font-bold text-lg md:text-2xl">UNITED SHIELD REMODELING</h3>
                  <p className="text-primary-foreground/90 text-sm md:text-base">GROUP OF THE WOODLANDS</p>
                </div>
              </div>

              <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
                United Shield Remodeling Group of The Woodlands is a full-service restoration company that specializes
                in water, flood, sewage, and mold damage projects. With over 15 years combined experience, they are here
                to serve the community by providing the best customer satisfaction throughout each project.
              </p>

              <p className="text-sm md:text-base leading-relaxed">
                We work in the best of professionals who always pay close attention to detail. Our property damage
                restoration experts are highly qualified professionals with work-ready when you need them. Our team of
                local, licensed, and insured restoration professionals throughout each project.
              </p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <Card className="bg-card border-2 border-border">
              <CardHeader className="pb-3 md:pb-6">
                <CardTitle className="flex items-center gap-2 md:gap-3 text-card-foreground text-base md:text-lg">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  Emergency Response
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                  Available 24/7 for immediate emergency response. When disaster strikes, we deploy immediately.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm md:text-base"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  Call Now: (281) 297-8500
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-border">
              <CardHeader className="pb-3 md:pb-6">
                <CardTitle className="flex items-center gap-2 md:gap-3 text-card-foreground text-base md:text-lg">
                  <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm md:text-base text-muted-foreground">
                  <strong>Emergency Response:</strong> Within 1 hour
                  <br />
                  <strong>Assessment:</strong> Same day
                  <br />
                  <strong>Work Begins:</strong> Immediately upon approval
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-border">
              <CardHeader className="pb-3 md:pb-6">
                <CardTitle className="flex items-center gap-2 md:gap-3 text-card-foreground text-base md:text-lg">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  Service Area
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm md:text-base text-muted-foreground">
                  Proudly serving The Woodlands, Tomball, Conroe, Magnolia and surrounding North West Houston Area.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
