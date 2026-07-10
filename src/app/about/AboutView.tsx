"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Heart,
  CheckCircle2,
  ArrowRight,
  Users,
  Globe,
  Package,
  MapPin,
  Leaf,
  Award,
  Handshake,
} from "lucide-react";
import companyData from "@/data/company.json";
import timelineData from "@/data/timeline.json";
import impactStatsData from "@/data/impact-stats.json";
import { trackContactUs } from "@/lib/analytics";
import TeamTeaser from "@/components/TeamTeaser";

const heroImage = "/assets/about-hero.jpg";
const overviewImage = "/assets/about-overview.jpg";
const ceoImage = "/assets/ceo.jpeg";
const sustainabilityImage = "/assets/sustainability.jpg";

const AboutView = () => {
  const { company } = companyData;
  const { timeline } = timelineData;
  const { stats } = impactStatsData;

  const iconMap: Record<string, any> = {
    Users,
    Globe,
    Package,
    MapPin,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 animate-fade-in">
            Building Sustainable Connections
            <br />
            <span className="text-accent">from Farm to Global Market</span>
          </h1>
          <p className="font-lato text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            At AgroInternational Pty Ltd, we bridge the gap between premium
            agricultural producers and global markets, delivering quality,
            consistency, and trust in every shipment.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => trackContactUs("hero")}
          >
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 font-lato text-lg text-foreground/80 leading-relaxed">
                <p>
                  AgroInternational Pty Ltd is an international trading company
                  connecting trusted producers with global markets. We work
                  across Australia, China, Asia, and the Oceania region,
                  building reliable supply chains and long-term trade
                  partnerships.
                </p>
                <p>
                  Based in Queensland, Australia, we specialise in sourcing and
                  exporting premium agricultural products including coffee, tea,
                  macadamia nuts, avocados, sesame seeds, and spices.
                </p>
                <p>
                  With established partners across Asia and growing expansion
                  into Oceania, we focus on efficient cross-border trade,
                  consistent supply, and strong international relationships.
                </p>
                <p>
                  Our commitment to quality, reliability, and sustainable
                  sourcing ensures we deliver products that meet international
                  standards and market expectations.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={overviewImage}
                alt="Agricultural diversity and farming excellence at AgroInternational"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Our Purpose & Principles
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Guided by our mission, driven by our vision, anchored in our
              values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="p-8 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Our Mission
              </h3>
              <p className="font-lato text-foreground/80 leading-relaxed">
                {company.mission}
              </p>
            </div>

            <div className="p-8 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Our Vision
              </h3>
              <p className="font-lato text-foreground/80 leading-relaxed">
                {company.vision}
              </p>
            </div>

            <div className="p-8 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-primary mb-4">
                Core Values
              </h3>
              <ul className="space-y-3">
                {company.values.map((value, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-lato text-foreground/80">
                      <strong className="text-primary">{value.title}:</strong>{" "}
                      {value.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Our Journey
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that shaped AgroInternational into a trusted global
              partner
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-1/2"></div>

              {timeline.map((event, index) => (
                <div
                  key={event.id}
                  className={`relative mb-12 ${index % 2 === 0 ? "md:text-right" : ""}`}
                >
                  <div
                    className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background transform md:-translate-x-1/2 z-10"></div>

                    <div
                      className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:ml-auto md:pr-12" : "md:pl-12"} pl-20 md:pl-0`}
                    >
                      <div className="p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="font-montserrat font-bold text-2xl text-accent mb-2">
                          {event.year}
                        </div>
                        <h3 className="font-montserrat font-semibold text-xl text-primary mb-2">
                          {event.title}
                        </h3>
                        <p className="font-lato text-foreground/80">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TeamTeaser />

      {/* Leadership Section */}
      <section className="py-20 bg-white from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Leadership
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Guided by vision, driven by integrity
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="relative w-72 h-64 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={ceoImage}
                    alt="Abdallah Ndwala, CEO of AgroInternational Pty Ltd"
                    fill
                    sizes="288px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <h3 className="font-montserrat font-bold text-3xl text-primary mb-2">
                  {company.ceo}
                </h3>
                <p className="font-lato text-lg text-accent mb-6">
                  Chief Executive Officer
                </p>
                <div className="p-6 rounded-lg bg-muted/30 border-l-4 border-accent mb-6">
                  <p className="font-lato text-lg text-foreground/90 italic leading-relaxed">
                    &quot;Our commitment goes beyond business transactions.
                    We&apos;re building lasting partnerships that empower farmers,
                    deliver exceptional quality to our clients, and contribute to
                    a sustainable agricultural future. Every product we export
                    carries our promise of excellence.&quot;
                  </p>
                </div>
                <p className="font-lato text-foreground/80 leading-relaxed">
                  With extensive experience in international agricultural trade,
                  Abdallah leads AgroInternational with a vision of connecting
                  the world&apos;s finest produce with global markets while
                  maintaining unwavering standards of quality and ethical
                  sourcing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Impact */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={sustainabilityImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
              Sustainability & Impact
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Growing responsibly, trading ethically, impacting positively
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => {
                const Icon = iconMap[stat.icon] || Package;
                return (
                  <div key={stat.id} className="text-center">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-10 w-10 text-accent" />
                    </div>
                    <div className="font-montserrat font-bold text-4xl text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="font-lato text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 bg-white">
              <Leaf className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">
                Eco-Friendly Farming
              </h3>
              <p className="font-lato text-foreground/80">
                We partner exclusively with farms that practice sustainable
                agriculture, minimizing environmental impact while maximizing
                crop quality.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 bg-white">
              <Handshake className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">
                Farmer Empowerment
              </h3>
              <p className="font-lato text-foreground/80">
                Fair trade principles guide our partnerships, ensuring farmers
                receive equitable compensation and support for their
                communities.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 bg-white">
              <Award className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">
                Certified Excellence
              </h3>
              <p className="font-lato text-foreground/80">
                All our products meet Organic, Fairtrade, and HACCP
                certifications, guaranteeing quality and ethical standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              Our Global Reach
            </h2>
            <p className="font-lato text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
              From our headquarters in Queensland, Australia, AgroInternational
              serves partners across Africa, Europe, Asia, and the Middle East.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <div className="font-montserrat font-bold text-4xl mb-2">15+</div>
              <div className="font-lato text-primary-foreground/80">
                Countries Served
              </div>
            </div>
            <div>
              <div className="font-montserrat font-bold text-4xl mb-2">
                100+
              </div>
              <div className="font-lato text-primary-foreground/80">
                Partner Farms
              </div>
            </div>
            <div>
              <div className="font-montserrat font-bold text-4xl mb-2">5</div>
              <div className="font-lato text-primary-foreground/80">
                Continents
              </div>
            </div>
            <div>
              <div className="font-montserrat font-bold text-4xl mb-2">16</div>
              <div className="font-lato text-primary-foreground/80">
                Product Lines
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="font-lato text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Our extensive network connects premium Australian agro-products
              with buyers across Asia-Pacific, Middle East, Europe, and beyond —
              delivering quality and reliability worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
            Partner with AgroInternational Today
          </h2>
          <p className="font-lato text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our network of global partners and experience the
            AgroInternational difference
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
            >
              <Link href="/contact">
                Request Partnership <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-2"
            >
              <Link href="/products">View Products</Link>
            </Button>
          </div>

          <div className="max-w-3xl mx-auto p-6 rounded-lg bg-muted/30 border border-border/50">
            <h3 className="font-montserrat font-semibold text-xl text-primary mb-4">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <p className="font-lato text-sm text-muted-foreground mb-1">
                  Phone
                </p>
                <p className="font-lato text-foreground">
                  {company.contact.phone}
                </p>
              </div>
              <div>
                <p className="font-lato text-sm text-muted-foreground mb-1">
                  Email
                </p>
                <p className="font-lato text-foreground">
                  {company.contact.email}
                </p>
              </div>
              <div>
                <p className="font-lato text-sm text-muted-foreground mb-1">
                  Location
                </p>
                <p className="font-lato text-foreground">
                  {company.address.city}, {company.address.state}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutView;
