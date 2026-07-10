import type { Metadata } from "next";
import { DOMAIN } from "@/lib/constants";
import GalleryView from "./GalleryView";

export const metadata: Metadata = {
  title: "Gallery - AgroInternational | Farms, Products & Operations in Photos",
  description:
    "Explore the AgroInternational gallery — photos of our partner farms, premium coffee, tea and spices, quality processing, and global export logistics.",
  keywords:
    "agro international gallery, farm photos, coffee tea spices photos, agricultural export, quality processing, logistics gallery",
  alternates: {
    canonical: "/gallery",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Gallery - AgroInternational",
  description:
    "Photos of AgroInternational's partner farms, premium products, quality processing, and export logistics.",
  url: `${DOMAIN}/gallery`,
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <GalleryView />
    </>
  );
}
