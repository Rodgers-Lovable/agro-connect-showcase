import type { Metadata } from "next";
import ContactView from "./ContactView";
import { JsonLd } from "@/components/JsonLd";
import { COMPANY } from "@/lib/constants";
import { organizationSchema, breadcrumb } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us | AgroInternational",
  description:
    "Contact AgroInternational Pty Ltd for premium agro-products export inquiries. Email, phone, and office address in Australia. Business hours Monday-Friday 9AM-5PM AEST.",
  keywords:
    "contact agro exporter, AgroInternational contact, agro products inquiry, export inquiry Australia",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | AgroInternational",
    description:
      "Get in touch for premium agro-products export inquiries.",
    url: "/contact",
    images: ["/assets/global-reach.jpg"],
  },
};

const contactSchema = {
  ...organizationSchema,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: COMPANY.contact.phone,
    email: COMPANY.contact.email,
    areaServed: "Worldwide",
    availableLanguage: "English",
  },
};

const crumbs = breadcrumb([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[contactSchema, crumbs]} />
      <ContactView />
    </>
  );
}
