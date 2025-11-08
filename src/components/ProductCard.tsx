import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  shortDescription: string;
  certifications?: string[];
}

const ProductCard = ({ id, name, shortDescription, certifications = [] }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
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
