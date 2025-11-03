/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * Useful for Docker or Vercel builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ["react", "next"], // ✅ removed optimizeCss to avoid critters dependency
  },
};

export default config;
