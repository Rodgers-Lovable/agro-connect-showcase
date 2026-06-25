import type { Metadata } from "next";
import AboutView from "./AboutView";

export const metadata: Metadata = {
  title: "About Us - AgroInternational | Premium Agro-Products Exporter",
  description:
    "Learn about AgroInternational Pty Ltd - Leading exporter of premium agro-products from Australia. Our mission, vision, commitment to sustainable farming, and CEO Abdallah Ndwala's leadership.",
  keywords:
    "about AgroInternational, agro exporter Australia, CEO Abdallah Ndwala, sustainable farming, agro export company, agricultural products Australia",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutView />;
}
