// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://neevgrover.com",
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
