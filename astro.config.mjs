import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://alex-blog.example",

  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ],

  adapter: cloudflare()
});