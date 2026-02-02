"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Project = {
  id: number
  title: string
  location: string
  category: string
  beforeImage: string
  afterImage?: string | null // optional/nullable
  description: string
}

type LabelOverrides = {
  beforeBadge?: string       // default: "BEFORE"
  afterBadge?: string        // default: "AFTER"
  showBefore?: string        // default: "Show Before"
  showAfter?: string         // default: "Show After"
}

type BeforeAfterGalleryProps = {
  projects?: Project[]
  categories?: string[]
  labels?: LabelOverrides
}

const defaultProjects: Project[] = [
 {
  id: 1,
  title: "Luxury Kitchen Transformation with Modern Finishes",
  location: "Conroe, TX",
  category: "Kitchen",
  beforeImage: "/images/kitchen-remodeling.jpg",
  afterImage: "",
  description: "A full kitchen renovation featuring custom cabinetry, countertops, high-end appliances, and brushed gold accents. This design blends functionality with elegance, creating a bright and inviting space perfect for both cooking and entertaining."
  },
  {
    id: 2,
    title: "Entire Home Renovations",
    location: "Conroe, TX",
    category: "Full Home",
    beforeImage: "/images/usrm-1.jpg",
    afterImage: "",
    description: "First floor renovations currently in progress",
  },
  {
    id: 3,
    title: "Modern Kitchen Transformation",
    location: "Conroe, TX",
    category: "Kitchen",
    beforeImage: "/images/usrm-2.jpg",
    afterImage: "",
    description: "Complete kitchen remodel with custom cabinetry",
  },
  // Add more as needed...
]

const defaultCategories = ["All", "Kitchen", "Bathroom", "Flooring", "Addition", "Full Home"]

export default function BeforeAfterGallery({
  projects = defaultProjects,
  categories = defaultCategories,
  labels,
}: BeforeAfterGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showBefore, setShowBefore] = useState<{ [key: number]: boolean }>({})

  const l = {
    beforeBadge: labels?.beforeBadge ?? "BEFORE",
    afterBadge: labels?.afterBadge ?? "AFTER",
    showBefore: labels?.showBefore ?? "Show Before",
    showAfter: labels?.showAfter ?? "Show After",
  }

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

  const toggleImage = (projectId: number) => {
    setShowBefore((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }))
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">View Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            See the incredible transformations we've created for homeowners across the Houston area.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "modifiedoutline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const hasAfter = Boolean(project.afterImage && project.afterImage.trim() !== "")
            const isShowingBefore = showBefore[project.id] ?? true // default to BEFORE when toggling exists
            const currentSrc = hasAfter
              ? (isShowingBefore ? project.beforeImage : (project.afterImage as string))
              : project.beforeImage

            return (
              <Card key={project.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={currentSrc}
                    alt={
                      hasAfter
                        ? `${project.title} - ${isShowingBefore ? l.beforeBadge : l.afterBadge}`
                        : `${project.title}`
                    }
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={project.id === 1}
                  />

                  {/* Category badge (always) */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground hover:bg-primary/90 hover:text-white">
                      {project.category}
                    </Badge>
                  </div>

                  {/* BEFORE/AFTER badge (only if afterImage exists) */}
                  {hasAfter && (
                    <div className="absolute top-4 right-4">
                      <Badge variant={isShowingBefore ? "destructive" : "default"}>
                        {isShowingBefore ? l.beforeBadge : l.afterBadge}
                      </Badge>
                    </div>
                  )}

                  {/* Toggle button (only if afterImage exists) */}
                  {hasAfter && (
                    <Button
                      onClick={() => toggleImage(project.id)}
                      className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 text-white"
                      size="sm"
                      aria-label={isShowingBefore ? l.showAfter : l.showBefore}
                    >
                      {isShowingBefore ? l.showAfter : l.showBefore}
                    </Button>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{project.location}</p>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ready to see your home transformed?</p>
          <Button size="lg" asChild>
            <a href="/contact">Start Your Project Today</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
