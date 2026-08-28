import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PORTFOLIO_BUILD_DATE: new Date().toISOString().slice(0, 10),
  },
};

export default nextConfig;
