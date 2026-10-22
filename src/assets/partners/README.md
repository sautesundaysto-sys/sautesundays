# Partner logos

Upload each logo here, named after the partner's slug, and it appears on
/partners automatically. No code change needed. The name has to match
exactly: lowercase, hyphens instead of spaces.

| Partner | File name |
|---|---|
| Sunny Daze | `sunny-daze.jpeg` |
| Heartwood Farm | `heartwood-farm.png` |
| Sobrii | `sobrii.png` |
| Jrew's | `jrews.jpg` |
| Danu Social House | `danu-social-house.png` (not uploaded yet) |

New partners: add them to `productPartners` or `communityPartners` at the top
of `src/pages/partners.astro`, then upload `<slug>.png` here.

- SVG is best, then a PNG with a transparent background.
- Logos sit on a small white tile, so a dark logo works in both light and dark
  mode. A white logo will disappear: send the dark version.
- Crop to the mark itself. A small logo in a big empty square shrinks to
  nothing at 48px tall.
