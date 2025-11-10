import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, Award, Leaf, Truck } from "lucide-react";
import { Helmet } from "react-helmet";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CategorySection from "@/components/CategorySection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-agro.jpg";
import aboutImage from "@/assets/about-farmers.jpg";
import logisticsImage from "@/assets/logistics.jpg";
import globalReachImage from "@/assets/global-reach.jpg";
import categoriesData from "@/data/categories.json";
import certificationsData from "@/data/certifications.json";
import companyData from "@/data/company.json";
import featuresData from "@/data/features.json";
import testimonialsData from "@/data/testimonials.json";
import faqData from "@/data/faq.json";

const Home = () => {
  const { categories } = categoriesData;
  const { certifications } = certificationsData;
  const { company } = companyData;
  const { features } = featuresData;
  const { testimonials } = testimonialsData;
  const { faq } = faqData;

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

      {/* About / Mission Snapshot */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
                Who We Are
              </h2>
              <p className="font-lato text-lg text-foreground mb-6 leading-relaxed">
                AgroInternational Pty Ltd is a leading exporter of high-quality agro-products from Australia. 
                We connect global markets with premium produce sourced from sustainable farms.
              </p>
              <p className="font-lato text-lg text-foreground mb-8 leading-relaxed">
                Our mission is to deliver quality, consistency, and trust — from farm to market.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Farmers sorting premium coffee beans for export from Australia"
                className="w-full h-full object-cover"
              />
            </div>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${logisticsImage})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Why Choose Us
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for premium agro-products worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const IconComponent = 
                feature.icon === "Globe" ? Globe : 
                feature.icon === "Leaf" ? Leaf : 
                feature.icon === "Shield" ? Shield : 
                Truck;
              return (
                <Card key={feature.id} className="border-2 hover:border-accent transition-colors">
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-lato text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Trusted by Partners Worldwide
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              What our global partners say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-2">
                <CardContent className="pt-8 pb-6">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-accent/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="font-lato text-lg text-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-montserrat font-semibold text-primary">
                      {testimonial.author}
                    </p>
                    <p className="font-lato text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${globalReachImage})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Our Global Reach
          </h2>
          <p className="font-lato text-xl mb-4 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            From our headquarters in Queensland, Australia, AgroInternational serves partners 
            across Africa, Europe, Asia, and the Middle East.
          </p>
          <div className="flex items-center justify-center gap-2 text-2xl mb-8">
            <Globe className="h-8 w-8" />
            <p className="font-montserrat font-semibold">
              Delivering premium agricultural products across 15+ countries and counting.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item) => (
                <AccordionItem key={item.id} value={`item-${item.id}`}>
                  <AccordionTrigger className="font-montserrat font-semibold text-lg text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-lato text-base text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
