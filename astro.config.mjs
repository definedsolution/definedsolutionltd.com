// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

// TODO: add relative imports for components, layouts, pages, etc.

const mdxLayoutSetter = () => {
  // @ts-ignore
  return function (_, file) {
    // find relative path to layout based on file path
    const relativePath = file.history[0];
    const frontmatter = file.data.astro.frontmatter;

    // find if layout is already set
    if (frontmatter.layout) return;

    // set layout based on file path
    switch (true) {
      case relativePath.includes("/services/"):
        frontmatter.layout = "@/layouts/ServiceLayout.astro";
        break;
      case relativePath.includes("/works/"):
        frontmatter.layout = "@/layouts/WorksLayout.astro";
        break;
      default:
        frontmatter.layout = "@/layouts/MainLayout.astro";
    }
  };
};

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  markdown: {
    remarkPlugins: [mdxLayoutSetter],
  },
  integrations: [
    mdx(),
    icon({
      include: {
        lucide: ["*"],
        "vscode-icons": ["*"],
        guidance: ["up-arrow"],
      },
    }),
  ],
});
