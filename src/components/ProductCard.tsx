import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  image?: string;
  shortDescription: string;
  certifications?: string[];
}

const ProductCard = ({ id, name, image, shortDescription, certifications = [] }: ProductCardProps) => {
  const getImageSrc = () => {
    if (!image) return null;
    try {
      return new URL(`../assets/products/${image}`, import.meta.url).href;
    } catch {
      return null;
    }
  };

  const imageSrc = getImageSrc();

  return (
    <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {imageSrc && (
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={imageSrc} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-montserrat text-xl text-primary group-hover:text-accent transition-colors">
          {name}
        </CardTitle>
        <CardDescription className="font-lato">{shortDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        {certifications.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <Badge key={cert} variant="secondary" className="text-xs">
                {cert}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors">
          <Link to="/contact">Request Quote</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
