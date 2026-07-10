import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { DOMAIN } from "@/lib/constants";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const description =
  "AgroInternational Pty Ltd - Professional exporter and supplier of premium coffee, tea, spices, oilseeds, and nuts from Australia. Quality certified agro-products for global markets.";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: "AgroInternational - Premium Agro-Products Exporter | Australia",
  description,
  keywords:
    "agro products exporter Australia, premium coffee exporter, organic tea supplier, sesame seeds export, macadamia nuts, spices exporter, bulk agricultural products",
  authors: [{ name: "AgroInternational Pty Ltd" }],
  openGraph: {
    title: "AgroInternational - Premium Agro-Products Exporter",
    description:
      "Professional exporter of premium coffee, tea, spices, oilseeds, and nuts from Australia to global markets.",
    type: "website",
    url: DOMAIN,
    images: ["/assets/hero-agro.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgroInternational - Premium Agro-Products Exporter",
    description:
      "Professional exporter of premium coffee, tea, spices, oilseeds, and nuts from Australia to global markets.",
    images: ["/assets/hero-agro.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body>
        <Providers>{children}</Providers>
        <ScrollToTopButton />
        <Toaster />
        <Sonner />
        <Script
          src="https://umami.mawirab.com/script.js"
          data-website-id="a97a9bc8-0f06-41c4-b476-48e613a2a5e9"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
