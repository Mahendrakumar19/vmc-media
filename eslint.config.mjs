import nextConfig from "eslint-config-next";

export default [
  ...nextConfig,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      ".system_pages_backup/**",
      "scripts/**",
      "*.config.js",
      "*.config.mjs",
    ],
  },
];
