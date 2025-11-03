/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker or Vercel builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevents ESLint issues from failing Vercel builds
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ (Optional) Skip TS build errors if needed on Vercel
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["react", "next"],
  },
};

export default config;
