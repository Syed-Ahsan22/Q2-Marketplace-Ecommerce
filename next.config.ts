import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
};

export default nextConfig;
