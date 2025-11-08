import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Quality", path: "/quality" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-montserrat font-bold text-2xl text-primary">
              <span className="text-accent">Agro</span>International
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-lato font-medium text-foreground/80 hover:text-accent transition-colors relative",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300",
                  "hover:after:w-full",
                  isActive(link.path) && "text-accent after:w-full"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "font-lato font-medium text-foreground/80 hover:text-accent transition-colors px-2 py-1",
                    isActive(link.path) && "text-accent"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Request Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
