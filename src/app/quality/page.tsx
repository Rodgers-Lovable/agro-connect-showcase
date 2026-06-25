import type { Metadata } from "next";
import { DOMAIN } from "@/lib/constants";
import QualityView from "./QualityView";

export const metadata: Metadata = {
  title:
    "Quality & Standards - AgroInternational | Certifications & Excellence",
  description:
    "AgroInternational's quality certifications include Organic, Fair Trade, GlobalGAP, and Rainforest Alliance. Learn about our rigorous quality assurance process and commitment to excellence in agricultural exports.",
  keywords:
    "organic certified exporter, fair trade products, GlobalGAP certification, quality agro products, agricultural standards, ISO 22000, HACCP, sustainable farming, product traceability",
  alternates: {
    canonical: "/quality",
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

export default function QualityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <QualityView />
    </>
  );
}
