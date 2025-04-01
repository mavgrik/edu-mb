module.exports = {
  plugins: ['prettier-plugin-tailwindcss'], // Adds Tailwind CSS support
  trailingComma: 'es5', // Adds a trailing comma where possible (es5)
  tabWidth: 2, // Sets the tab width to 2 spaces
  printWidth: 120, // Sets the maximum line width to 120 characters
  semi: true, // Adds a semicolon at the end of statements
  bracketSpacing: true, // Adds spaces between brackets
  bracketSameLine: false, // Puts the closing `>` of JSX on the same line
  arrowParens: 'always', // Always adds parentheses around arrow function parameters
  singleQuote: true, // Uses single quotes instead of double quotes
  endOfLine: 'lf', // Sets the end of line character to LF (line feed)
  proseWrap: 'preserve', // Preserves the wrapping of text as is
  htmlWhitespaceSensitivity: 'css', // Respects CSS rules for handling whitespace in HTML
  embeddedLanguageFormatting: 'auto', // Automatically formats embedded code
};
