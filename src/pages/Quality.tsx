import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Leaf, Handshake, Award, Globe, MapPin, Clipboard, Search, 
  Factory, FileText, Ship, CheckCircle, PackageCheck, FileCheck,
  Package, FlaskConical, ShieldCheck, MapPinned, TreePine, Shield,
  ArrowRight, Users, Sprout
} from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import certificationsData from "@/data/certifications.json";
import traceabilityData from "@/data/traceability.json";
import sustainablePracticesData from "@/data/sustainable-practices.json";
import qualityGalleryData from "@/data/quality-gallery.json";
import partnershipsData from "@/data/partnerships.json";
import exportLogisticsData from "@/data/export-logistics.json";
import complianceDocsData from "@/data/compliance-docs.json";
import testimonialsData from "@/data/testimonials.json";
import qualityHeroImage from "@/assets/quality-hero.jpg";
import qualityInspectionImage from "@/assets/quality-inspection.jpg";
import labTestingImage from "@/assets/lab-testing.jpg";
import packagingImage from "@/assets/packaging.jpg";
import gradingImage from "@/assets/grading.jpg";
import sustainabilityImage from "@/assets/sustainability.jpg";
import logisticsImage from "@/assets/logistics.jpg";

const Quality = () => {
  const { certifications, qualityProcess } = certificationsData;
  const { traceabilitySteps } = traceabilityData;
  const { sustainablePractices } = sustainablePracticesData;
  const { galleryItems } = qualityGalleryData;
  const { partnerships } = partnershipsData;
  const { logisticsSteps } = exportLogisticsData;
  const { documents } = complianceDocsData;
  const { testimonials } = testimonialsData;

  const iconMap = {
    Leaf, Handshake, Award, Globe, MapPin, Clipboard, Search,
    Factory, FileText, Ship, CheckCircle, PackageCheck, FileCheck,
    Package, FlaskConical, ShieldCheck, MapPinned, TreePine, Shield,
    Users, Sprout
  };

  const galleryImageMap: { [key: string]: string } = {
    "quality-inspection.jpg": qualityInspectionImage,
    "lab-testing.jpg": labTestingImage,
    "packaging.jpg": packagingImage,
    "grading.jpg": gradingImage,
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Quality & Standards - AgroInternational",
    "description": "AgroInternational's quality certifications include Organic, Fair Trade, GlobalGAP, and Rainforest Alliance. Learn about our rigorous quality assurance process.",
    "url": "https://www.agrointernational.com.au/quality"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Quality & Standards - AgroInternational | Certifications & Excellence</title>
        <meta 
          name="description" 
          content="AgroInternational's quality certifications include Organic, Fair Trade, GlobalGAP, and Rainforest Alliance. Learn about our rigorous quality assurance process and commitment to excellence in agricultural exports." 
        />
        <meta 
          name="keywords" 
          content="organic certified exporter, fair trade products, GlobalGAP certification, quality agro products, agricultural standards, ISO 22000, HACCP, sustainable farming, product traceability" 
        />
        <link rel="canonical" href="https://www.agrointernational.com.au/quality" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${qualityHeroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">
            Quality You Can Trust, <br />
            <span className="text-accent">From Farm to Global Market</span>
          </h1>
          <p className="font-lato text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Our commitment to excellence in every product we export, backed by international certifications and rigorous quality control.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Our Certifications
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognized by leading international standards organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {certifications.map((cert, index) => {
              const Icon = iconMap[cert.icon as keyof typeof iconMap];
              return (
                <div 
                  key={cert.id}
                  className="group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="h-full shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-accent/50">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="font-montserrat font-semibold text-xl text-primary mb-3 group-hover:text-accent transition-colors">
                        {cert.name}
                      </h3>
                      <p className="font-lato text-muted-foreground">
                        {cert.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Our Quality Process
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto">
              Every product goes through our rigorous quality assurance process to ensure excellence at every stage
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {qualityProcess.map((process, index) => (
              <Card key={index} className="shadow-medium hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="font-montserrat font-bold text-xl text-accent-foreground">
                        {process.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-xl text-primary mb-2">
                        {process.title}
                      </h3>
                      <p className="font-lato text-foreground/80">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Traceability Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${logisticsImage})` }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
              From Farm to Export — <span className="text-accent">Complete Traceability</span>
            </h2>
            <p className="font-lato text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Full transparency at every stage, ensuring product integrity from sourcing to shipment
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {traceabilitySteps.map((step, index) => {
                const Icon = iconMap[step.icon as keyof typeof iconMap];
                return (
                  <div 
                    key={step.id}
                    className="relative group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-white/20 hover:border-accent/50 transition-all duration-300 h-full">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <div>
                          <h3 className="font-montserrat font-semibold text-lg mb-2">
                            {step.title}
                          </h3>
                          <p className="font-lato text-sm text-primary-foreground/80">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Farming Practices */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.2] bg-cover bg-center"
          style={{ backgroundImage: `url(${sustainabilityImage})` }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Sustainable Farming Practices
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto">
              Committed to eco-friendly methods and empowering farming communities worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {sustainablePractices.map((practice, index) => (
              <div 
                key={practice.id}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8 rounded-xl bg-gradient-to-br from-accent/10 to-primary/5 hover:from-accent/20 hover:to-primary/10 transition-all duration-300 transform hover:-translate-y-2 h-full border border-border/30">
                  <div className="mb-4">
                    <span className="font-montserrat font-bold text-5xl text-accent group-hover:scale-110 inline-block transition-transform">
                      {practice.stat}
                    </span>
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">
                    {practice.label}
                  </h3>
                  <p className="font-lato text-sm text-muted-foreground">
                    {practice.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control in Action - Visual Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Quality Control in Action
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Behind the scenes of our rigorous quality control and processing operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {galleryItems.map((item, index) => (
              <div 
                key={item.id}
                className="relative group overflow-hidden rounded-xl shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={galleryImageMap[item.image]}
                    alt={item.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-montserrat font-semibold text-lg">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships & Affiliations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Partnerships & Affiliations
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading certification bodies and industry organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {partnerships.map((partner, index) => (
              <div 
                key={partner.id}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6 rounded-lg bg-white border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300 text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-sm text-primary mb-1">
                    {partner.name}
                  </h3>
                  <p className="font-lato text-xs text-muted-foreground">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export & Logistics Excellence */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Export & Logistics Excellence
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto">
              Efficient, secure, and reliable global export handling with real-time tracking
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {logisticsSteps.map((step, index) => {
                const Icon = iconMap[step.icon as keyof typeof iconMap];
                return (
                  <div 
                    key={step.id}
                    className="group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Card className="h-full shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-accent/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-montserrat font-semibold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                              {step.title}
                            </h3>
                            <p className="font-lato text-sm text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Partner Feedback */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              What Our Partners Say
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by importers and distributors worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="h-full shadow-medium hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/30">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <svg className="w-10 h-10 text-accent/40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="font-lato text-lg text-foreground mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-border/50 pt-4">
                      <p className="font-montserrat font-semibold text-primary">
                        {testimonial.author}
                      </p>
                      <p className="font-lato text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Documentation Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Compliance & Documentation
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete transparency with comprehensive quality and safety documentation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {documents.map((doc, index) => {
              const Icon = iconMap[doc.icon as keyof typeof iconMap];
              return (
                <div 
                  key={doc.id}
                  className="group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="h-full shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-accent/50">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-2">
                        {doc.title}
                      </h3>
                      <p className="font-lato text-sm text-muted-foreground">
                        {doc.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">
                Request Quality Documentation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Partner with AgroInternational for <br />
            <span className="text-accent">World-Class Agricultural Products</span>
          </h2>
          <p className="font-lato text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Experience the difference that quality, transparency, and commitment make. 
            Let's build a successful partnership together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
              <Link to="/contact">
                Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-background/90 text-foreground hover:bg-background border-2">
              <Link to="/products">
                View Our Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quality;
