import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import companyData from "@/data/company.json";

const About = () => {
  const { company } = companyData;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">
            About <span className="text-accent">AgroInternational</span>
          </h1>
          <p className="font-lato text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Your trusted partner in premium agro-products export
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat font-bold text-4xl text-primary mb-8 text-center">
              Our Story
            </h2>
            <p className="font-lato text-lg text-foreground/80 leading-relaxed mb-6">
              {company.history}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-bold text-2xl text-primary mb-4">
                  Our Mission
                </h3>
                <p className="font-lato text-foreground/80 leading-relaxed">
                  {company.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-bold text-2xl text-primary mb-4">
                  Our Vision
                </h3>
                <p className="font-lato text-foreground/80 leading-relaxed">
                  {company.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-4xl text-primary mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {company.values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-montserrat font-bold text-2xl text-accent">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">
                  {value.title}
                </h3>
                <p className="font-lato text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-4xl mb-12">
              Company Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-montserrat font-semibold text-xl mb-2 text-accent">
                  CEO
                </h3>
                <p className="font-lato text-lg">{company.ceo}</p>
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-xl mb-2 text-accent">
                  ABN
                </h3>
                <p className="font-lato text-lg">{company.abn}</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-montserrat font-semibold text-xl mb-2 text-accent">
                  Headquarters
                </h3>
                <p className="font-lato text-lg">{company.address.full}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
