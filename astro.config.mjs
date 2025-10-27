import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://elevixapps.com/",
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  redirects: {
    "/use-cases": "/",
    "/faq": "/",
    "/pricing": "/",
  },
});
