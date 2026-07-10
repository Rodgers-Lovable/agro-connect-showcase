import type { Metadata } from "next";
import TeamView from "./TeamView";
import { JsonLd } from "@/components/JsonLd";
import { DOMAIN } from "@/lib/constants";
import { abs, breadcrumb } from "@/lib/seo";
import teamData from "@/data/team.json";

export const metadata: Metadata = {
  title: "Our Team | AgroInternational",
  description:
    "Meet the AgroInternational team — the dedicated professionals driving our mission to connect premium agro-products with global markets.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Our Team | AgroInternational",
    description:
      "The dedicated professionals driving our global agro-export mission.",
    url: "/team",
    images: ["/assets/about-overview.jpg"],
  },
};

const teamList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AgroInternational Team",
  itemListElement: teamData.team.map((m, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Person",
      name: m.name,
      jobTitle: m.title,
      image: abs(m.photo),
      worksFor: { "@id": `${DOMAIN}/#organization` },
    },
  })),
};

const crumbs = breadcrumb([
  { name: "Home", path: "/" },
  { name: "Team", path: "/team" },
]);

export default function TeamPage() {
  return (
    <>
      <JsonLd data={[teamList, crumbs]} />
      <TeamView />
    </>
  );
}
