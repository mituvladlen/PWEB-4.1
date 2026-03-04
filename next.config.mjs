const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/PWEB-4.1" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
