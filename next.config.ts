import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
}

module.exports = nextConfig

export default nextConfig;
