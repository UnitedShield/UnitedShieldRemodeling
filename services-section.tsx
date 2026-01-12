import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplets, Flame, Shield, Zap } from "lucide-react"

const services = [
  {
    icon: Droplets,
    title: "Water Damage Restoration",
    description:
      "Swift tactical response to water emergencies. Our team deploys advanced extraction equipment and drying systems to restore your property with military precision.",
    image: "/placeholder-ffd35.png",
    features: [
      "24/7 Emergency Response",
      "Advanced Moisture Detection",
      "Complete Structural Drying",
      "Mold Prevention Protocol",
    ],
  },
  {
    icon: Flame,
    title: "Fire Damage Restoration",
    description:
      "Comprehensive fire damage recovery operations. We execute systematic restoration plans to rebuild what fire has damaged, with unwavering attention to detail.",
    image: "/fire-restoration-team.png",
    features: ["Smoke & Soot Removal", "Structural Assessment", "Content Restoration", "Odor Elimination"],
  },
  {
    icon: Shield,
    title: "Mold Remediation",
    description:
      "Strategic mold elimination missions. Our certified specialists conduct thorough assessments and execute precise remediation protocols to secure your environment.",
    image: "/placeholder-9rjjp.png",
    features: ["Mold Inspection & Testing", "Containment Procedures", "Safe Removal Process", "Prevention Strategies"],
  },
  {
    icon: Zap,
    title: "Emergency Services",
    description:
      "Rapid deployment emergency response team. Available 24/7 to secure your property and begin immediate stabilization procedures when disaster strikes.",
    image: "/emergency-restoration-response.png",
    features: ["Immediate Response", "Property Securing", "Emergency Board-Up", "Insurance Coordination"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-foreground">
            OUR <span className="text-primary">TACTICAL SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deploying military-grade precision and veteran expertise to restore your property. Every mission is executed
            with the same dedication we brought to serving our country.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-2 border-border hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-3 rounded-full">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-serif text-2xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="modifiedoutline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
