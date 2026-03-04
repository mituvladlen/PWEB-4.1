import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/PWEB-4.1" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
