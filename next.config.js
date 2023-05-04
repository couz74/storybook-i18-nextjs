const { i18n } = require("./next-i18next.config.js");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    tsconfigPath: "tsconfig.json",
  },
  swcMinify: true,
  output: "standalone",
  i18n,
  images: {
    domains: ["i.gifer.com"],
  }
};

module.exports = nextConfig;
