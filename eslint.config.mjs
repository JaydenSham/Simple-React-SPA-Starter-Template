import globals from "globals";
import tseslint from "typescript-eslint";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

const eslintConfig = tseslint.config(
  {
    ignores: ["node_modules", "build", "*.config.js", "*.config.mjs"],
  },
  ...tseslint.configs.recommended,
  {
    ...reactRecommended,
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ...reactRecommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },
  {
    plugins: {
      "jsx-a11y": jsxA11yPlugin,
    },
    rules: jsxA11yPlugin.configs.recommended.rules,
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  }
);

export default eslintConfig;
