import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Handshake, Award, Globe } from "lucide-react";
import { Helmet } from "react-helmet";
import certificationsData from "@/data/certifications.json";

const Quality = () => {
  const { certifications, qualityProcess } = certificationsData;

  const iconMap = {
    Leaf,
    Handshake,
    Award,
    Globe,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Quality & Standards - AgroInternational | Certifications</title>
        <meta 
          name="description" 
          content="AgroInternational's quality certifications include Organic, Fair Trade, GlobalGAP, and Rainforest Alliance. Learn about our rigorous quality assurance process and commitment to excellence." 
        />
        <meta 
          name="keywords" 
          content="organic certified exporter, fair trade products, GlobalGAP certification, quality agro products, agricultural standards" 
        />
        <link rel="canonical" href="https://www.agrointernational.com.au/quality" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">
            Quality & <span className="text-accent">Standards</span>
          </h1>
          <p className="font-lato text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Our commitment to excellence in every product we export
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-4xl text-primary mb-12 text-center">
            Our Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert) => {
              const Icon = iconMap[cert.icon as keyof typeof iconMap];
              return (
                <Card key={cert.id} className="shadow-medium hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">
                      {cert.name}
                    </h3>
                    <p className="font-lato text-muted-foreground">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-4xl text-primary mb-4 text-center">
            Our Quality Process
          </h2>
          <p className="font-lato text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Every product goes through our rigorous quality assurance process
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {qualityProcess.map((process, index) => (
              <Card key={index} className="shadow-medium">
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

      {/* Quality Commitment */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-4xl mb-6">
              Our Quality Commitment
            </h2>
            <p className="font-lato text-xl leading-relaxed text-primary-foreground/90 mb-8">
              At AgroInternational, quality is not just a standard—it's our promise. We work closely with 
              certified producers, implement strict quality control measures, and ensure every product meets 
              international standards before it reaches your market.
            </p>
            <p className="font-lato text-lg text-primary-foreground/80">
              Our certifications and quality processes demonstrate our commitment to delivering excellence 
              in every shipment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quality;
