import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Laura Martin",
    location: "The Woodlands, TX",
    rating: 5,
    text: "United Water Restoration Company did a fantastic job! They came out very fast, working to respond and fix the water damage. They worked around our schedule and always made sure we were comfortable with the process.",
  },
  {
    name: "Jeff K.",
    location: "Spring, TX",
    rating: 5,
    text: "They said the loss was extensive and it was, but they handled it all so well. I discovered a leaking pipe and called them immediately. They were very knowledgeable, skilled, courteous, and professional.",
  },
  {
    name: "Patricia Brennan",
    location: "Tomball, TX",
    rating: 5,
    text: "Great professional and easy to work with. Prompt response to questions. The team was efficient, thorough, and respectful of our home during the restoration process.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif font-bold text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-foreground">
            MISSION <span className="text-primary">ACCOMPLISHED</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Read our restoration customer reviews and see why The Woodlands community trusts our veteran-owned team to
            complete every mission with excellence and integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-2 border-border relative">
              <CardContent className="pt-6 md:pt-8 pb-4 md:pb-6 px-4 md:px-6">
                <div className="absolute -top-3 md:-top-4 left-4 md:left-6 bg-primary text-primary-foreground p-2 md:p-3 rounded-full">
                  <Quote className="h-4 w-4 md:h-6 md:w-6" />
                </div>

                <div className="flex mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-3 md:pt-4">
                  <p className="font-semibold text-sm md:text-base text-card-foreground">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
