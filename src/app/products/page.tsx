import type { Metadata } from "next";
import ProductsView from "./ProductsView";

export const metadata: Metadata = {
  title: "Premium Agro-Products - AgroInternational | Coffee, Tea, Spices",
  description:
    "Browse AgroInternational's complete range of premium agro-products: coffee, tea, macadamia nuts, avocados, sesame seeds, spices, and more. Organic and Fair Trade certified products.",
  keywords:
    "premium coffee export, organic tea supplier, macadamia nuts exporter, spices export, sesame seeds, vanilla beans, turmeric, cinnamon",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return <ProductsView />;
}
