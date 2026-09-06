import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PORTFOLIO_BUILD_DATE: new Date().toISOString().slice(0, 10),
  },

  async redirects() {
    return [
      {
        source: "/about",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/#projects",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/links",
        destination: "/",
        permanent: true,
      },
      {
        source: "/projects/portfolio",
        destination: "/#projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
