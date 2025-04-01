import type { NextConfig } from 'next';

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
