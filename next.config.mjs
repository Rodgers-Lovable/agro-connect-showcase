/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESLint is run separately (`npm run lint`); don't block production builds on it.
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Serve the TinaCMS admin (a static SPA in public/admin) at /admin,
  // not just /admin/index.html.
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
  // Baseline security headers on every response.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
