import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, Award } from "lucide-react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CategorySection from "@/components/CategorySection";
import heroImage from "@/assets/hero-agro.jpg";
import categoriesData from "@/data/categories.json";
import certificationsData from "@/data/certifications.json";
import companyData from "@/data/company.json";

const Home = () => {
  const { categories } = categoriesData;
  const { certifications } = certificationsData;
  const { company } = companyData;

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": company.name,
    "url": "https://www.agrointernational.com.au",
    "logo": "https://www.agrointernational.com.au/logo.png",
    "description": "Premium agro-products exporter from Australia. Specializing in coffee, tea, spices, oilseeds, and nuts.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": company.address.street,
      "addressLocality": company.address.city,
      "addressRegion": company.address.state,
      "postalCode": company.address.postcode,
      "addressCountry": company.address.country
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": company.contact.phone,
      "contactType": "sales",
      "email": company.contact.email
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
            Premium Agro-Products
            <br />
            <span className="text-accent">From Australia to the World</span>
          </h1>
          <p className="font-lato text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Your trusted partner for high-quality coffee, tea, spices, oilseeds, and nuts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
              <Link to="/products">
                View Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-background/90 hover:bg-background border-2">
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Our Product Categories
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of premium agro-products sourced from the finest producers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategorySection
                key={category.id}
                name={category.name}
                description={category.description}
                icon={category.icon}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/products">
                Explore All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Quality You Can Trust
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Certified excellence in every product we export
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {certifications.map((cert) => {
              const IconComponent = cert.icon === "Leaf" ? Shield : cert.icon === "Handshake" ? Globe : Award;
              return (
                <div key={cert.id} className="text-center">
                  <div className="mx-auto w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-primary mb-2">
                    {cert.name}
                  </h3>
                  <p className="font-lato text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Ready to Start Your Order?
          </h2>
          <p className="font-lato text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get in touch with our team for personalized quotes and expert consultation
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
