import Link from "next/link"
import Image from "next/image"
import { Shield, Phone, MapPin, Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0">
                <Image
                  src="/images/united-shield-logo.png"
                  alt="United Shield Remodeling Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl">UNITED SHIELD REMODELING</h3>
                <p className="text-secondary-foreground/80 text-sm">THE WOODLANDS • SPRING • CONROE • TOMBALL • MONTGOMERY • MAGNOLIA • WILLIS • CYPRESS • NORTH HOUSTON</p>
              </div>
            </div>

            <p className="text-secondary-foreground/90 leading-relaxed mb-6 max-w-md">
            Welcome to United Shield Remodeling, your trusted partner in transforming homes. We are a Veteran-owned remodeling contractor serving The Woodlands & surrounding areas. Kitchens, baths, and full-home remodels—built with integrity & craftsmanship.
            </p>

            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-primary" />
              <span>Licensed • Insured • Veteran Owned Business</span>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/kitchens" className="hover:text-primary transition-colors">
                  Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link href="/bathrooms" className="hover:text-primary transition-colors">
                  Bathroom Remodeling
                </Link>
              </li>
              <li>
                <Link href="/flooring" className="hover:text-primary transition-colors">
                  Flooring Installation
                </Link>
              </li>
              <li>
                <Link href="/additions" className="hover:text-primary transition-colors">
                  Home Additions
                </Link>
              </li>
              <li>
                <Link href="/full-home-makeovers" className="hover:text-primary transition-colors">
                  Full Home Makeovers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">CONTACT INFO</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <Link href="tel:281-870-4601">
                    <div>O: 281-870-4601</div>
                  </Link>
                  <Link href="tel:281-728-6335">
                    <div>C: 281-728-6335</div>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@unitedshieldremodeling.com" className="hover:text-primary transition-colors">
                  info@unitedshieldremodeling.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>
                  United Shield Remodeling<br/>
                  9311 FM 1488 RD #30-171<br/>
                  Magnolia, TX 77354
                </span>
              </div>

              {/* Social Media */}
              <div className="pt-4 border-t border-secondary-foreground/20 mt-4">
                <h5 className="font-semibold text-sm mb-3">FOLLOW US</h5>
                <a
                  href="https://www.facebook.com/profile.php?id=61579958900947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#0d5bbd] text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/80">
            <p>&copy; 2025 United Shield Remodeling. All rights reserved.</p>
            <div className="bg-primary/10 px-3 py-1 rounded-full">
              <span className="text-primary font-semibold">
               We are a Veteran-owned remodeling contractor serving The Woodlands & surrounding areas. Kitchens, baths, and full-home remodels—built with integrity & craftsmanship.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
