/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: true,
              dimensions: false, // drop width/height attributes
              svgoConfig: { plugins: ["removeDimensions"] },
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
