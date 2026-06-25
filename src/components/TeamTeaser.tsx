import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeamTeaser = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Users className="h-8 w-8 text-accent" />
        </div>
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">
          Meet Our Team
        </h2>
        <p className="font-lato text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          The dedicated professionals driving our global agricultural mission
        </p>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/team">
            Meet the Team <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default TeamTeaser;
