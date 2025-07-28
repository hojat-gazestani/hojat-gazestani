import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },  
  experimental: {
    optimizeFonts: true,
  },
};

export default nextConfig;
