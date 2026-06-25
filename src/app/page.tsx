import companyData from "@/data/company.json";
import { DOMAIN } from "@/lib/constants";
import HomeView from "./HomeView";

const { company } = companyData;

// Structured Data for SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${DOMAIN}/#localbusiness`,
  name: company.name,
  description:
    "Premium agro-products exporter specializing in coffee, tea, spices, oilseeds, and nuts from Australia to global markets.",
  url: DOMAIN,
  telephone: company.contact.phone,
  email: company.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.postcode,
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.7539,
    longitude: 153.1425,
  },
  openingHours: ["Mo-Fr 09:00-17:00"],
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "Worldwide",
  },
  serviceType: "Agricultural Export",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Agro-Products",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Premium Coffee",
          description: "High-quality coffee beans for export",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Organic Tea",
          description: "Certified organic tea varieties",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Spices & Nuts",
          description: "Premium spices, oilseeds and nuts",
        },
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HomeView />
    </>
  );
}
