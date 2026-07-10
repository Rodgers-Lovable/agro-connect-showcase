import type { Metadata } from "next";
import AboutView from "./AboutView";
import { JsonLd } from "@/components/JsonLd";
import { DOMAIN } from "@/lib/constants";
import { organizationSchema, breadcrumb } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us | AgroInternational",
  description:
    "Learn about AgroInternational Pty Ltd - Leading exporter of premium agro-products from Australia. Our mission, vision, commitment to sustainable farming, and CEO Abdallah Ndwala's leadership.",
  keywords:
    "about AgroInternational, agro exporter Australia, CEO Abdallah Ndwala, sustainable farming, agro export company, agricultural products Australia",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | AgroInternational",
    description:
      "Leading exporter of premium agro-products from Australia to global markets.",
    url: "/about",
    images: ["/assets/about-hero.jpg"],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${DOMAIN}/about`,
  mainEntity: organizationSchema,
};

const crumbs = breadcrumb([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[aboutSchema, crumbs]} />
      <AboutView />
    </>
  );
}
