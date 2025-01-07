import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true},
  reactStrictMode: true,
};module.exports = {
  // ... other config options ...
  exportPathMap: async () => {
    // ... other export path map options ...
  },
  copy: [
    {
      from: 'styles',
      to: 'styles',
    },
  ],
};

export default nextConfig;
