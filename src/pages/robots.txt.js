import { SITE } from "../lib/blog-data.js";

// There was no robots.txt at all, so nothing pointed crawlers at the sitemap
// except the Search Console submission. Generated rather than dropped in
// `public/` so the host stays in step with SITE.url, the same way sitemap.xml
// does, instead of hardcoding the production domain into a static file.
export async function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${SITE.url}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
