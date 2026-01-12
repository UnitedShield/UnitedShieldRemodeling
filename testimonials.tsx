"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  // {
  //   name: "Sarah Johnson",
  //   location: "Cypress, TX",
  //   project: "Kitchen Remodel",
  //   rating: 5,
  //   text: "Scott and his team transformed our outdated kitchen into a stunning space. The attention to detail and professionalism was outstanding. They kept us informed every step of the way and finished on time.",
  // },
  // {
  //   name: "Mike Rodriguez",
  //   location: "Katy, TX",
  //   project: "Bathroom Addition",
  //   rating: 5,
  //   text: "As a fellow veteran, I appreciated Scott's military precision and work ethic. The bathroom addition exceeded our expectations and the craftsmanship is top-notch. Highly recommend United Shield Remodeling.",
  // },
  {
    name: "Jennifer Chen",
    location: "Tomball, TX",
    project: "Full Home Makeover",
    rating: 5,
    text: "We hired United Shield for a complete home renovation and couldn't be happier. From flooring to kitchen to bathrooms, everything was done with incredible skill and attention to detail.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from homeowners who've experienced the United Shield difference.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div>
                <div className="font-serif font-semibold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].location} • {testimonials[currentIndex].project}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button variant="modifiedoutline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button variant="modifiedoutline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
