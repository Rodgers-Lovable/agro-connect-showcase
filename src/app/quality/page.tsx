import type { Metadata } from "next";
import { DOMAIN } from "@/lib/constants";
import { breadcrumb } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import QualityView from "./QualityView";

export const metadata: Metadata = {
  title: "Quality & Certifications | AgroInternational",
  description:
    "AgroInternational's quality certifications include Organic, Fair Trade, GlobalGAP, and Rainforest Alliance. Learn about our rigorous quality assurance process and commitment to excellence in agricultural exports.",
  keywords:
    "organic certified exporter, fair trade products, GlobalGAP certification, quality agro products, agricultural standards, ISO 22000, HACCP, sustainable farming, product traceability",
  alternates: { canonical: "/quality" },
  openGraph: {
    title: "Quality & Certifications | AgroInternational",
    description:
      "Organic, Fair Trade, GlobalGAP and Rainforest Alliance certified agricultural exports.",
    url: "/quality",
    images: ["/assets/quality-hero.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Quality & Standards - AgroInternational",
  description:
    "AgroInternational's quality certifications include Organic, Fair Trade, GlobalGAP, and Rainforest Alliance. Learn about our rigorous quality assurance process.",
  url: `${DOMAIN}/quality`,
};

const crumbs = breadcrumb([
  { name: "Home", path: "/" },
  { name: "Quality", path: "/quality" },
]);

export default function QualityPage() {
  return (
    <>
      <JsonLd data={[structuredData, crumbs]} />
      <QualityView />
    </>
  );
}
