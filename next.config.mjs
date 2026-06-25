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
};

export default nextConfig;
