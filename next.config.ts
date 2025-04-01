import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to
// use bindings during local development (when running the application with
// `next dev`). This function is only necessary during development and
// has no impact outside of that. For more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
setupDevPlatform().catch(console.error);

import type { NextConfig } from "next";

// Define the Next.js configuration
const nextConfig: NextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  // Configure logging settings
  logging: {
    fetches: {
      // Log the full URL of fetch requests
      fullUrl: true,
    },
  },
  // Configure the compiler settings
  compiler: {
    // Remove console statements, but exclude 'error' logs
    removeConsole: {
      exclude: ['error'],
    },
  },
};

// Export the configuration as the default export
export default nextConfig;
