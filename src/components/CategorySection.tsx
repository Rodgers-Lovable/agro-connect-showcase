import { Coffee, Wheat, Flame, LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CategorySectionProps {
  name: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Wheat,
  Flame,
};

const CategorySection = ({ name, description, icon }: CategorySectionProps) => {
  const Icon = iconMap[icon] || Coffee;

  return (
    <Card className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
          <Icon className="h-8 w-8 text-accent" />
        </div>
        <CardTitle className="font-montserrat text-2xl text-primary">{name}</CardTitle>
        <CardDescription className="font-lato text-base">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default CategorySection;
