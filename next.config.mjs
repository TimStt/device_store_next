/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const nextConfig = {
  transpilePackages: ["@plaiceholder/ui"],
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "./src/styles/index.scss")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/img/**",
      },

      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
};

export default withPlaiceholder(nextConfig);

// next.config.js
