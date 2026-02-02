import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare } from "lucide-react"

interface ServiceHeroProps {
  title: string
  subtitle: string
  backgroundImage: string
}

export default function ServiceHero({ title, subtitle, backgroundImage }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Service hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">{subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8">
                <MessageSquare className="h-5 w-5 mr-2" />
                Get Free Estimate
              </Button>
            </Link>
            <Button
              size="lg"
              variant="modifiedoutline"
              className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-white"
              asChild
            >
              <a href="tel:281-870-4601">
                <Phone className="h-5 w-5 mr-2" />
                Call 281-870-4601
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
