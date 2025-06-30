import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["next-mdx-remote"],
  experimental: {
    useCache: true,
  },
};

export default nextConfig;
