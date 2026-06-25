/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESLint is run separately (`npm run lint`); don't block production builds on it.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
