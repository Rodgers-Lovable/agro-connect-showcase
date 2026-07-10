import { DOMAIN, COMPANY } from "@/lib/constants";

// Make a public-relative asset path absolute for schema/OpenGraph consumers.
export const abs = (path: string) =>
  path.startsWith("http") ? path : `${DOMAIN}${path}`;

// Reusable Organization node. Other schema can reference it via its @id.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${DOMAIN}/#organization`,
  name: COMPANY.name,
  url: DOMAIN,
  logo: abs("/assets/logo.png"),
  email: COMPANY.contact.email,
  telephone: COMPANY.contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.state,
    postalCode: COMPANY.address.postcode,
    addressCountry: "AU",
  },
};

// BreadcrumbList from an ordered list of { name, path } crumbs.
export const breadcrumb = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});
