import { defineConfig } from "vitepress";
import nav from "./nav.json";
import sidebar from "./sidebar.json";

export const pt = defineConfig({
  lang: "pt",
  description: "Uma biblioteca prática de funções utilitárias",
  themeConfig: {
    nav,
    sidebar,
    docFooter: {
      prev: "Página Anterior",
      next: "Próxima Página"
    }
  }
});