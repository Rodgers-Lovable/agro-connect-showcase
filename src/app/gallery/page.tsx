import type { Metadata } from "next";
import { DOMAIN } from "@/lib/constants";
import { breadcrumb } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import GalleryView from "./GalleryView";

export const metadata: Metadata = {
  title: "Farm & Product Gallery | AgroInternational",
  description:
    "Explore the AgroInternational gallery — photos of our partner farms, premium coffee, tea and spices, quality processing, and global export logistics.",
  keywords:
    "agro international gallery, farm photos, coffee tea spices photos, agricultural export, quality processing, logistics gallery",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Farm & Product Gallery | AgroInternational",
    description:
      "Photos of our partner farms, premium products, quality processing, and export logistics.",
    url: "/gallery",
    images: ["/assets/about-overview.jpg"],
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

const crumbs = breadcrumb([
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
]);

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={[structuredData, crumbs]} />
      <GalleryView />
    </>
  );
}
