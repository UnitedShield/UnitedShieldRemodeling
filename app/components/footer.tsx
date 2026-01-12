import Link from "next/link"
import { Shield, Phone, MapPin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0">
                <img
                  src="/images/united-shield-logo.png"
                  alt="United Shield Remodeling Logo"
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
