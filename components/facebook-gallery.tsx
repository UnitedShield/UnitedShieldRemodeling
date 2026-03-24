"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Camera, ExternalLink, ImageIcon } from "lucide-react"

const FACEBOOK_PAGE_URL = "https://www.facebook.com/profile.php?id=61579958900947"
const FACEBOOK_PHOTOS_URL = "https://www.facebook.com/profile.php?id=61579958900947&sk=photos"

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

export default function FacebookGallery() {
  const fbContainerRef = useRef<HTMLDivElement>(null)
  const [sdkLoaded, setSdkLoaded] = useState(false)

  useEffect(() => {
    // Load the Facebook SDK
    if (typeof window !== "undefined" && !(window as any).FB) {
      const script = document.createElement("script")
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0"
      script.async = true
      script.defer = true
      script.crossOrigin = "anonymous"
      script.onload = () => {
        setSdkLoaded(true)
        if ((window as any).FB) {
          (window as any).FB.XFBML.parse(fbContainerRef.current)
        }
      }
      document.body.appendChild(script)
    } else if ((window as any).FB) {
      setSdkLoaded(true)
      ;(window as any).FB.XFBML.parse(fbContainerRef.current)
    }
  }, [])

  return (
    <>
      {/* Main Facebook Feed Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1877F2]/10 text-[#1877F2] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <FacebookIcon className="h-5 w-5" />
              LATEST FROM FACEBOOK
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">
              Recent Projects & Updates
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Check out our latest remodeling projects, progress photos, and completed transformations — posted directly from the jobsite.
            </p>
          </div>

          {/* Facebook Page Plugin - Timeline with photos */}
          <div className="max-w-3xl mx-auto" ref={fbContainerRef}>
            <div
              className="fb-page"
              data-href={FACEBOOK_PAGE_URL}
              data-tabs="timeline"
              data-width="500"
              data-height="800"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote cite={FACEBOOK_PAGE_URL} className="fb-xfbml-parse-ignore">
                {/* Fallback while SDK loads */}
                <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                  <FacebookIcon className="h-12 w-12 text-[#1877F2] mx-auto mb-4" />
                  <p className="text-lg font-semibold mb-2">Loading Facebook Feed...</p>
                  <p className="text-muted-foreground mb-6">
                    If the feed doesn&apos;t load, view our photos directly on Facebook.
                  </p>
                  <a
                    href={FACEBOOK_PAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#0d5bbd] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <FacebookIcon className="h-5 w-5" />
                    Visit Our Facebook Page
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Big Photo Album CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <a
              href={FACEBOOK_PHOTOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1877F2] to-[#0d5bbd] p-8 md:p-12 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white rounded-full" />
                  <div className="absolute bottom-8 left-8 w-48 h-48 border-2 border-white rounded-full" />
                  <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-white rounded-full" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <Camera className="w-12 h-12 md:w-16 md:h-16 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                      Browse All Project Photos
                    </h3>
                    <p className="text-white/90 text-lg mb-6 leading-relaxed">
                      View our complete photo collection — before &amp; after shots, in-progress updates, and finished renovations from kitchens, bathrooms, flooring, and whole-home makeovers.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-white text-[#1877F2] font-semibold px-6 py-3 rounded-lg group-hover:bg-gray-100 transition-colors">
                      <ImageIcon className="h-5 w-5" />
                      View Photo Album on Facebook
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Secondary actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button variant="modifiedoutline" size="lg" asChild>
              <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
                <FacebookIcon className="h-5 w-5" />
                Follow Our Page
              </a>
            </Button>
            <Button variant="modifiedoutline" size="lg" asChild>
              <a href="/contact" className="gap-2">
                Start Your Project
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
