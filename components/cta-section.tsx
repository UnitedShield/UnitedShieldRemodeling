import { Button } from "@/components/ui/button"
import { Phone, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Ready to Transform Your Home?</h2>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
          Get your free consultation today and discover how United Shield Remodeling can bring your vision to life with
          military-grade precision and craftsmanship.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Free Estimate
            </Button>
          </Link>
          <Button
            size="lg"
            variant="modifiedoutline"
            className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-50 bg-transparent"
            asChild
          >
            <a href="tel:281-870-4601">
              <Phone className="h-5 w-5 mr-2" />
              Call 281-870-4601
            </a>
          </Button>
        </div>

        <p className="text-primary-foreground/80 text-sm mt-6">Licensed • Insured • Veteran Owned Business</p>
      </div>
    </section>
  )
}
