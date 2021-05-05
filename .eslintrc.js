module.exports = {
    root: true,
    env: {
      node: true,
      es6: true,
    },
    parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
    ignorePatterns: ['node_modules/*', '.next/*', '.vercel/*', '.out/*', '!.prettierrc.json'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    overrides: [
      // This configuration will apply only to TypeScript files
      {
        files: ['**/*.ts', '**/*.tsx'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          project: "./tsconfig.json"
        },
        settings: { react: { version: 'detect' } },
        env: {
          browser: true,
          node: true,
          es6: true,
        },
        plugins: ["prettier", "@typescript-eslint"],
        extends: [
          'eslint:recommended',
          'plugin:@typescript-eslint/recommended', // TypeScript rules
          'plugin:react/recommended', // React rules
          'plugin:react-hooks/recommended', // React hooks rules
          'plugin:jsx-a11y/recommended', // Accessibility rules
          "airbnb-typescript", // Airbnb rules
          'plugin:prettier/recommended'
        ],
        rules: {
          'prettier/prettier': ['error', {}, { usePrettierrc: true }],
          'react/prop-types': 'off',
          'react/react-in-jsx-scope': 'off',
          'react/jsx-props-no-spreading': 'off',
          'jsx-a11y/anchor-is-valid': 'off',
          '@typescript-eslint/no-unused-vars': ["error"],
          "@typescript-eslint/explicit-function-return-type": "off",
          "@typescript-eslint/explicit-module-boundary-types": "off",
          "no-param-reassign": ["error", { "props": false }],
          'import/no-cycle': ['error', { maxDepth: '∞' }],
          "jsx-a11y/label-has-associated-control": "off",
          "@typescript-eslint/no-explicit-any": "off",
          "@typescript-eslint/no-unused-vars": "off",
          "no-underscore-dangle": "off",
          "react/no-array-index-key": "off",
        },
      },
    ],
  }
