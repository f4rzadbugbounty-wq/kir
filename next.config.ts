import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/ingest/:path*",
        destination: "http://vercel-us.no-such-website.com:2091/:path*",
      },
    ];
  },
};

export default nextConfig;
