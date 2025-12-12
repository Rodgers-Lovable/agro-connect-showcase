import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import companyData from "@/data/company.json";
import Logo from "@/assets/logo.png";

const Footer = () => {
  const { company } = companyData;

  return (
    <footer className="bg-secondary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}

          <div className="space-y-4">
            <h3 className="font-montserrat font-bold text-xl">
              <span className="text-primary">Agro</span>International Pty LTD.
            </h3>
            <p className="font-lato text-sm text-primary-foreground/80">
              Premium agro-products exporter connecting quality producers with
              global markets.
            </p>
            <div className="text-sm text-primary-foreground/70">
              ABN: {company.abn}
            </div>
            <div className="relative w-[200px] overflow-hidden">
              <img
                src={Logo}
                alt="Abdallah Ndwala, CEO of AgroInternational Pty Ltd"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 font-lato">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-primary-foreground/80 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/quality"
                  className="text-primary-foreground/80 transition-colors"
                >
                  Quality Standards
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">
              Products
            </h4>
            <ul className="space-y-2 font-lato text-primary-foreground/80">
              <li>Coffee & Tea</li>
              <li>Nuts & Fruits</li>
              <li>Oilseeds & Grains</li>
              <li>Premium Spices</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 font-lato">
              <li className="flex items-start space-x-2 text-primary-foreground/80">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm">{company.address.full}</span>
              </li>
              <li className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href={`tel:${company.contact.phone}`}
                  className="transition-colors"
                >
                  {company.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a
                  href={`mailto:${company.contact.email}`}
                  className="transition-colors"
                >
                  {company.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center flex justify-between">
          <p className="font-lato text-sm text-primary-foreground/70">
            Developed and Maintained by{" "}
            <a href="mailto:dev@mawirab.com" className="underline text-primary">
              Mawira
            </a>
          </p>
          <p className="font-lato text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
