import type { MetadataRoute } from "next";
import { DOMAIN } from "@/lib/constants";

// Generated at build time so the sitemap URL and rules stay in sync with
// DOMAIN (from company.json) — no hard-coded origin to drift.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The TinaCMS admin SPA is served at /admin — keep it out of search results.
      disallow: "/admin",
    },
    sitemap: `${DOMAIN}/sitemap.xml`,
    host: DOMAIN,
  };
}
