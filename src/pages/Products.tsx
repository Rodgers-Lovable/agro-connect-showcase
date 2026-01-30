import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { DOMAIN } from "@/lib/constants";
import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";
import { trackCategoryFilter } from "@/lib/analytics";

const Products = () => {
  const { products } = productsData;
  const { categories } = categoriesData;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Premium Agro-Products - AgroInternational | Coffee, Tea, Spices</title>
        <meta 
          name="description" 
          content="Browse AgroInternational's complete range of premium agro-products: coffee, tea, macadamia nuts, avocados, sesame seeds, spices, and more. Organic and Fair Trade certified products." 
        />
        <meta 
          name="keywords" 
          content="premium coffee export, organic tea supplier, macadamia nuts exporter, spices export, sesame seeds, vanilla beans, turmeric, cinnamon" 
        />
        <link rel="canonical" href={`${DOMAIN}/products`} />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">
            Our <span className="text-accent">Products</span>
          </h1>
          <p className="font-lato text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Discover our complete range of premium agro-products
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border sticky top-20 z-40 backdrop-blur-sm bg-background/55">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => {
                trackCategoryFilter("all");
                setSelectedCategory("all");
              }}
              className={selectedCategory === "all" ? "bg-accent text-accent-foreground" : ""}
            >
              All Products
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => {
                  trackCategoryFilter(category.id);
                  setSelectedCategory(category.id);
                }}
                className={selectedCategory === category.id ? "bg-accent text-black hover:text-white" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                shortDescription={product.shortDescription}
                certifications={product.certifications}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-lato text-xl text-muted-foreground">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
