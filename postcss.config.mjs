/** @type {import('postcss-load-config').Config} */

// Define the PostCSS configuration object
const config = {
  // Specify the plugins to be used by PostCSS
  plugins: {
    // Include Tailwind CSS for utility-first CSS framework
    '@tailwindcss/postcss': {},
    // Include Autoprefixer to add vendor prefixes to CSS rules
    autoprefixer: {},
  },
};

// Export the configuration object as the default export
export default config;
