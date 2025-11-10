import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet";
import companyData from "@/data/company.json";

const Contact = () => {
  const { company } = companyData;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Us - AgroInternational | Get in Touch</title>
        <meta 
          name="description" 
          content="Contact AgroInternational Pty Ltd for premium agro-products export inquiries. Email, phone, and office address in Australia. Business hours Monday-Friday 9AM-5PM AEST." 
        />
        <meta 
          name="keywords" 
          content="contact agro exporter, AgroInternational contact, agro products inquiry, export inquiry Australia" 
        />
        <link rel="canonical" href="https://www.agrointernational.com.au/contact" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="font-lato text-xl max-w-3xl mx-auto text-primary-foreground/90">
            We're here to answer your questions and discuss your requirements
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="font-montserrat font-bold text-3xl text-primary mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="font-montserrat font-bold text-3xl text-primary mb-6">
                Contact Information
              </h2>

              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-1">
                        Phone
                      </h3>
                      <a
                        href={`tel:${company.contact.phone}`}
                        className="font-lato text-foreground/80 hover:text-accent transition-colors"
                      >
                        {company.contact.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${company.contact.email}`}
                        className="font-lato text-foreground/80 hover:text-accent transition-colors"
                      >
                        {company.contact.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-lg text-primary mb-1">
                        Address
                      </h3>
                      <p className="font-lato text-foreground/80">
                        {company.address.full}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-lg text-primary mb-3">
                    Business Hours
                  </h3>
                  <div className="space-y-2 font-lato text-foreground/80">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM AEST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>By Appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-3xl text-primary mb-8 text-center">
            Find Us
          </h2>
          <div className="max-w-6xl mx-auto h-96 bg-muted rounded-lg flex items-center justify-center">
            <p className="font-lato text-muted-foreground">
              Map integration available upon request
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
