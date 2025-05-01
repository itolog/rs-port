import { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    scrollRestoration: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
