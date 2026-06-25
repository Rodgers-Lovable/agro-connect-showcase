import type { Metadata } from "next";
import TeamView from "./TeamView";

export const metadata: Metadata = {
  title: "Our Team - AgroInternational | The People Behind Our Mission",
  description:
    "Meet the AgroInternational team — the dedicated professionals driving our mission to connect premium agro-products with global markets.",
  alternates: {
    canonical: "/team",
  },
};

export default function TeamPage() {
  return <TeamView />;
}
