/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "@typescript-eslint/no-explicit-any": "warn",
    "no-async-promise-executor": "warn",
    "vue/attributes-order": "off",
    "vue/html-indent": "off",
    "vue/multi-word-component-names": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-closing-bracket-newline": "off",
    "no-debugger": "warn",
    "no-console": "warn",
    "vue/html-self-closing": "off",
    "vue/require-v-for-key": "warn",
    "no-mixed-spaces-and-tabs": "warn",
    "vue/valid-v-for": "warn",
    "no-unsafe-optional-chaining": "warn",
    "vue/max-attributes-per-line": [
      "warn",
      {
        singleline: {
          max: 4,
        },
        multiline: {
          max: 4,
        },
      },
    ],
  },
};
