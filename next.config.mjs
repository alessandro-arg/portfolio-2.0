// next.config.mjs
const nextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          [
            "@svgr/webpack",
            {
              svgo: true,
              dimensions: false, // <-- drop width/height attributes
              svgoConfig: { plugins: ["removeDimensions"] }, // (either is fine)
            },
          ],
        ],
        as: "*.js",
      },
    },
  },
};
export default nextConfig;
