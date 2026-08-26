import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

const site =
  process.env.SITE_URL || process.env.PUBLIC_SITE_URL || "https://sautesundays.com";

export default defineConfig({
  site,
  // The Caribbean recap was published with a capital J in its slug before the
  // folders were made consistent. Anything already linking to the old URL
  // still lands on the post.
  redirects: {
    "/blog/caribbean-June-2026": "/blog/caribbean-june-2026",
  },
  // Markdown images otherwise ship a single file at the source's full width:
  // an 800KB WebP for a phone photo. `constrained` gives every image, including
  // the ones written as plain markdown in the recaps, a srcset and sizes.
  image: {
    layout: "constrained",
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});