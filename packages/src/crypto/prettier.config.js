// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "es5",
  useTabs: true,
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  arrowParens: "always",
  bracketSpacing: true,
  bracketSameLine: false,
  parser: "babel-ts",
  endOfLine: "lf"
};

export default config;