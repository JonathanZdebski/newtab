/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.js
const withSvgr = (nextConfig = {}) => {
  return {
    ...nextConfig,
    webpack(config, options) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
};

module.exports = withSvgr();
