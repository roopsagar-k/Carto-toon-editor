import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    removeConsole: false,
  }
};

export default nextConfig;
