// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// TODO: add relative imports for components, layouts, pages, etc.

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  integrations: [
    icon({
      include: {
        lucide: ["*"],
        "vscode-icons": ["*"],
        guidance: ["up-arrow"],
      },
    }),
  ],
});
