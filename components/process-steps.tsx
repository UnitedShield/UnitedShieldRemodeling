import { MessageSquare, FileText, Hammer, Star } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "1. Consultation",
    description: "We discuss goals, style, and budget.",
  },
  {
    icon: FileText,
    title: "2. Design & Estimate",
    description: "Clear scope, transparent pricing.",
  },
  {
    icon: Hammer,
    title: "3. Build",
    description: "Skilled craftsmen, tidy daily, on-schedule updates.",
  },
  {
    icon: Star,
    title: "4. Final Walk-through",
    description: "We don't wrap until you're thrilled.",
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From consultation to completion, we keep you informed every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  {/* <div className="absolute -top-2 -left-1 bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div> */}
                </div>
                <h3 className="font-serif font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
