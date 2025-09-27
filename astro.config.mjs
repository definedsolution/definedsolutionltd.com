// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// TODO: add relative imports for components, layouts, pages, etc.

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
});
