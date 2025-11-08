import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-8xl font-bold font-montserrat text-primary">404</h1>
        <p className="mb-8 text-2xl font-lato text-muted-foreground">Oops! Page not found</p>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
