import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "404 - Page Not Found | AgroInternational",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-8xl font-bold font-montserrat text-primary">
          404
        </h1>
        <p className="mb-8 text-2xl font-lato text-muted-foreground">
          Oops! Page not found
        </p>
        <Button
          asChild
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
