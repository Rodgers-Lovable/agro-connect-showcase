import type { Metadata } from "next";
import ProductsView from "./ProductsView";
import { JsonLd } from "@/components/JsonLd";
import { abs, breadcrumb } from "@/lib/seo";
import productsData from "@/data/products.json";

export const metadata: Metadata = {
  title: "Premium Coffee, Tea & Spices | AgroInternational",
  description:
    "Browse AgroInternational's complete range of premium agro-products: coffee, tea, macadamia nuts, avocados, sesame seeds, spices, and more. Organic and Fair Trade certified products.",
  keywords:
    "premium coffee export, organic tea supplier, macadamia nuts exporter, spices export, sesame seeds, vanilla beans, turmeric, cinnamon",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Premium Coffee, Tea & Spices | AgroInternational",
    description:
      "Explore our premium coffee, tea, spices, oilseeds, and nuts for global export.",
    url: "/products",
    images: ["/assets/products/coffee.jpg"],
  },
};

const productList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Agro-Products",
  itemListElement: productsData.products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      description: p.shortDescription,
      image: abs(p.image),
      category: p.category,
    },
  })),
};

const crumbs = breadcrumb([
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
]);

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={[productList, crumbs]} />
      <ProductsView />
    </>
  );
}
