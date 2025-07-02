import globals from "globals";
import tseslint from "typescript-eslint";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

const FILE_PATTERNS = {
  typescript: "**/*.{ts,tsx}",
  ignore: ["node_modules", "build", "*.config.js", "*.config.mjs"],
};

const GLOBAL_ENVIRONMENTS = {
  ...globals.browser,
  ...globals.es2021,
};

const ignoreConfig = {
  ignores: FILE_PATTERNS.ignore,
};

const reactConfig = {
  ...reactRecommended,
  files: [FILE_PATTERNS.typescript],
  languageOptions: {
    ...reactRecommended.languageOptions,
    globals: GLOBAL_ENVIRONMENTS,
  },
};

const reactHooksConfig = {
  files: [FILE_PATTERNS.typescript],
  plugins: {
    "react-hooks": reactHooksPlugin,
  },
  rules: reactHooksPlugin.configs.recommended.rules,
};

const jsxA11yConfig = {
  plugins: {
    "jsx-a11y": jsxA11yPlugin,
  },
  rules: jsxA11yPlugin.configs.recommended.rules,
};

const reactSettingsConfig = {
  settings: {
    react: {
      version: "detect",
    },
  },
};

const customRulesConfig = {
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
  },
};

const eslintConfig = tseslint.config(
  ignoreConfig,
  ...tseslint.configs.recommended,
  reactConfig,
  reactHooksConfig,
  jsxA11yConfig,
  reactSettingsConfig,
  customRulesConfig
);

export default eslintConfig;
