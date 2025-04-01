// Import the 'fs' module to interact with the file system
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

module.exports = {
  // Extend ESLint configurations from 'next', 'prettier', 'eslint:recommended', and '@typescript-eslint/recommended'
  extends: ['next', 'prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:eslint-plugin-next-on-pages/recommended'],
  // Add plugins for TypeScript
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-next-on-pages'
  ],
  // Use '@typescript-eslint/parser' as the parser
  parser: '@typescript-eslint/parser',
  // Define custom rules
  rules: {
    // Disable the 'no-unused-vars' rule (uses '@typescript-eslint/no-unused-vars' instead)
    'no-unused-vars': 'off',
    // Disable the 'tailwindcss/no-custom-classname' rule
    'tailwindcss/no-custom-classname': 'off',
    // Disable the '@next/next/no-html-link-for-pages' rule
    '@next/next/no-html-link-for-pages': 'off',
    // Warn for unused variables, but ignore variables and arguments that start with '_'
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // Enforce sorted imports, but ignore case and declaration sort
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    // Disable the 'tailwindcss/classnames-order' rule
    'tailwindcss/classnames-order': 'off',
    // Enforce a specific order for import statements
    'import/order': [
      1,
      {
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
        pathGroups: [
          // Add custom path groups for internal imports
          ...getDirectoriesToSort().map((singleDir) => ({
            pattern: `${singleDir}/**`,
            group: 'internal',
          })),
          {
            pattern: 'env',
            group: 'internal',
          },
          {
            pattern: 'theme',
            group: 'internal',
          },
          {
            pattern: 'public/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};

// Function to get directories to sort, excluding certain directories
function getDirectoriesToSort() {
  const ignoredSortingDirectories = ['.git', '.next', '.vscode', 'node_modules'];
  return getDirectories(process.cwd()).filter((f) => !ignoredSortingDirectories.includes(f));
}

// Function to get directories in a given path
function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + '/' + file).isDirectory();
  });
}
