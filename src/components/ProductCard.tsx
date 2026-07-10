"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trackProductQuoteRequest } from "@/lib/analytics";

interface ProductCardProps {
  id: string;
  name: string;
  image?: string;
  shortDescription: string;
  certifications?: string[];
}

const ProductCard = ({ id, name, image, shortDescription, certifications = [] }: ProductCardProps) => {
  const imageSrc = image || null;

  return (
    <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {imageSrc && (
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
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
        <Button 
          asChild 
          variant="outline" 
          className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors"
          onClick={() => trackProductQuoteRequest(name)}
        >
          <Link href="/contact">Request Quote</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
