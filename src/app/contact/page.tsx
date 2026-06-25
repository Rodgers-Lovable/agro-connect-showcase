import type { Metadata } from "next";
import ContactView from "./ContactView";

export const metadata: Metadata = {
  title: "Contact Us - AgroInternational | Get in Touch",
  description:
    "Contact AgroInternational Pty Ltd for premium agro-products export inquiries. Email, phone, and office address in Australia. Business hours Monday-Friday 9AM-5PM AEST.",
  keywords:
    "contact agro exporter, AgroInternational contact, agro products inquiry, export inquiry Australia",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactView />;
}
