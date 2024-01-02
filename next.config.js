/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "./src/styles")],
  },
  images: {
    domains: ["fakestoreapi.com", "mockapi.io"],
  },
};

module.exports = nextConfig;

// next.config.js
