import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Shield, Award, Menu, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between text-sm gap-2 md:gap-6">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="text-xs md:text-sm font-medium">VETERAN OWNED BUSINESS</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span className="text-xs md:text-sm font-medium">LICENSED & INSURED</span>
            </div>
            <Link href="tel:281-870-4601">
              <div className="hidden sm:flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-xs md:text-sm font-medium">FREE ESTIMATES</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <img
                src="/images/united-shield-logo.png"
                alt="United Shield Remodeling Logo"
                className="h-12 w-12 md:h-16 md:w-16 object-contain"
              />
            </div>
            <div>
              <h1 className="font-serif font-bold text-lg md:text-2xl text-foreground">UNITED SHIELD REMODELING</h1>
              <p className="text-muted-foreground text-xs md:text-sm">THE WOODLANDS & SURROUNDING AREAS </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary font-medium transition-colors text-sm">
                SERVICES
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/services" className="w-full cursor-pointer">
                    All Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/kitchens" className="w-full cursor-pointer">
                    Kitchens
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/bathrooms" className="w-full cursor-pointer">
                    Bathrooms
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/flooring" className="w-full cursor-pointer">
                    Flooring
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/additions" className="w-full cursor-pointer">
                    Additions
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/full-home-makeovers" className="w-full cursor-pointer">
                    Full Home Makeovers
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/gallery" className="text-foreground hover:text-primary font-medium transition-colors text-sm">
              GALLERY
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary font-medium transition-colors text-sm">
              ABOUT
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary font-medium transition-colors text-sm">
              CONTACT
            </Link>
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="modifiedoutline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-6 mt-6 px-2">
                  <Link href="/services" className="text-foreground hover:text-primary font-medium transition-colors">
                    Services
                  </Link>
                  <Link href="/kitchens" className="text-foreground hover:text-primary font-medium transition-colors">
                    Kitchens
                  </Link>
                  <Link href="/bathrooms" className="text-foreground hover:text-primary font-medium transition-colors">
                    Bathrooms
                  </Link>
                  <Link href="/flooring" className="text-foreground hover:text-primary font-medium transition-colors">
                    Flooring
                  </Link>
                  <Link href="/additions" className="text-foreground hover:text-primary font-medium transition-colors">
                    Additions
                  </Link>
                  <Link href="/gallery" className="text-foreground hover:text-primary font-medium transition-colors">
                    Gallery
                  </Link>
                  <Link href="/about" className="text-foreground hover:text-primary font-medium transition-colors">
                    About
                  </Link>
                  <Link href="/contact" className="text-foreground hover:text-primary font-medium transition-colors">
                    Contact
                  </Link>
                  <Button className="font-semibold mt-4" style={{ backgroundColor: "#d89a26", color: "white" }}>
                    <Phone className="h-4 w-4 mr-2" />
                    281-870-4601
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
