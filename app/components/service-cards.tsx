import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChefHat, Bath, Home, Plus, Sparkles } from "lucide-react"

const services = [
  {
    icon: ChefHat,
    title: "Kitchens",
    description: "Smart layouts, beautiful finishes, chef-worthy function.",
    href: "/kitchens",
  },
  {
    icon: Bath,
    title: "Bathrooms",
    description: "Spa-like showers, elegant vanities, durable tile.",
    href: "/bathrooms",
  },
  {
    icon: Home,
    title: "Flooring",
    description: "Hardwood, LVP/LVT, and tile—installed perfectly.",
    href: "/flooring",
  },
  {
    icon: Plus,
    title: "Additions",
    description: "More space, seamlessly integrated.",
    href: "/additions",
  },
  {
    icon: Sparkles,
    title: "Full Home Makeovers",
    description: "Transform your entire home with one expert team.",
    href: "/full-home-makeovers",
  },
]

export default function ServiceCards() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From single rooms to whole-home transformations, we deliver craftsmanship that lasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button asChild variant="modifiedoutline" className="w-full bg-transparent">
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
