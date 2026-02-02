import { Card, CardContent } from "@/components/ui/card"
import { Shield, Target, Users, Award } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "VETERAN LEADERSHIP",
    description: "Led by veterans who understand the importance of mission completion and serving others with honor.",
  },
  {
    icon: Target,
    title: "TACTICAL PRECISION",
    description: "Every restoration project is approached with military-grade planning and execution standards.",
  },
  {
    icon: Users,
    title: "COMMUNITY COMMITMENT",
    description:
      "Dedicated to protecting and serving The Woodlands community with the same loyalty we showed our country.",
  },
  {
    icon: Award,
    title: "EXCELLENCE STANDARD",
    description:
      "Maintaining the highest standards of quality and integrity in every restoration mission we undertake.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="font-serif font-bold text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-card-foreground">
              YOUR LOCAL WATER RESTORATION,
              <br />
              <span className="text-primary">FIRE RESTORATION & MOLD REMOVAL EXPERTS</span>
              <br />
              IN THE WOODLANDS, TX
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              We proudly serve The Woodlands community with the same dedication and precision we brought to military
              service. Whether you're seeking water restoration, looking for fire cleanup services, or require mold
              remediation, United Water Restoration Group of The Woodlands is here to help.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Our veteran-owned company combines tactical expertise with compassionate service, ensuring every
              restoration mission is completed with honor, integrity, and unwavering commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
            {values.map((value, index) => (
              <Card key={index} className="bg-background border-2 border-border text-center p-4 md:p-6">
                <CardContent className="pt-4 md:pt-6">
                  <div className="bg-primary text-primary-foreground p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                    <value.icon className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                  <h3 className="font-serif font-semibold text-base md:text-lg mb-2 md:mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
