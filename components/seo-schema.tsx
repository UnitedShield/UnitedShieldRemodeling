import Script from "next/script"

interface SEOSchemaProps {
  page?: "home" | "service" | "about" | "contact" | "gallery"
  serviceName?: string
}

export default function SEOSchema({ page = "home", serviceName }: SEOSchemaProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://unitedshieldremodeling.com",
    name: "United Shield Remodeling",
    description:
      "Veteran-owned home remodeling company serving The Woodlands, Spring, Conroe, Tomball, Montgomery, Magnolia, Willis, Cypress, and North Houston",
    url: "https://unitedshieldremodeling.com",
    telephone: "281-870-4601",
    email: "info@unitedshieldremodeling.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "29.7604",
      longitude: "-95.3698",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Conroe",
        "@id": "https://en.wikipedia.org/wiki/Conroe",
      },
      {
        "@type": "City",
        name: "Tomball",
      },
      {
        "@type": "City",
        name: "Magnolia",
      },
    ],
    openingHours: ["Mo-Fr 07:00-18:00", "Sa 08:00-16:00"],
    priceRange: "$$",
    image: "https://unitedshieldremodeling.com/images/united-shield-logo.png",
    logo: "https://unitedshieldremodeling.com/images/united-shield-logo.png",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61579958900947",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Remodeling Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Remodeling",
            description: "Custom kitchen remodeling with cabinetry, countertops, and appliance installation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Remodeling",
            description: "Complete bathroom renovations including walk-in showers, vanities, and tile work.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flooring Installation",
            description: "Hardwood, luxury vinyl, and tile flooring installation and refinishing.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Home Additions",
            description: "Room additions, garage conversions, and home expansions.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Home Makeovers",
            description: "Complete home renovations and whole-house remodeling projects.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah Johnson",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
        reviewBody:
          "Scott and his team transformed our outdated kitchen into a stunning space. The attention to detail and professionalism was outstanding.",
      },
    ],
  }

  const serviceSchema = serviceName
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: serviceName,
        provider: {
          "@type": "LocalBusiness",
          name: "United Shield Remodeling",
          telephone: "281-870-4601",
          email: "info@unitedshieldremodeling.com",
        },
        areaServed: {
          "@type": "State",
          name: "Texas",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: serviceName,
        },
      }
    : null

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {serviceSchema && (
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      )}
    </>
  )
}
