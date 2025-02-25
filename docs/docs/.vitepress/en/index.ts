import { defineConfig } from "vitepress";
import nav from "./nav.json";
import sidebar from "./sidebar.json";

export const en = defineConfig({
  lang: "en",
  description: "A practical library of utility functions",
  themeConfig: {
    nav,
    sidebar,
  }
});