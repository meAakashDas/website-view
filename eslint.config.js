import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["node_modules/**", "dist/**", "build/**", "coverage/**"]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": ["warn", {
        "args": "none",
        "varsIgnorePattern": "^_",
        "caughtErrors": "none"
      }],
      "no-empty": ["error", { "allowEmptyCatch": true }]
    }
  }
];
