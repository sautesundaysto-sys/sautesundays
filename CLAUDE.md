# Sauté Sundays

Astro static site for a free monthly cookbook club in Toronto. Content lives in
`src/content/blog`; shared facts and copy live in `src/config/theme.config.ts`.

## Facts about the club that keep getting written wrong

**There is no table everyone sits at.** Dishes are laid out together and people
help themselves and stand around eating. Never write "one table", "one long
table", "we all sit down together", or anything implying a seated communal
meal. "The table" meaning *the spread of dishes* is fine and accurate, and it
is used that way throughout the recaps.

**Members cook at home, not at the event.** Everyone claims a recipe, cooks it
in their own kitchen, and brings it. Nobody cooks on site at the monthly
potluck. The one exception is `/restaurant-nights`, which is a different
format: guests do cook in the restaurant's kitchen that evening.

**The monthly potluck is free and always has been.** Nobody is ever charged to
bring a dish. Partnerships pay for the room, never the plate.

## Copy conventions

- No hyphens or em dashes in body copy. Post titles may keep them. Compound
  words in ingredient lists (all-purpose, five-spice) are fine.
- Numbers that appear in more than one place live in `theme.config.ts` and are
  read from there, never retyped. `REACH.sellsOutIn` is the sell out claim,
  `SITE.blurb` is the club description, event night counts are derived from the
  number of `event-recap` posts.
- Never invent dish names, recipe titles, or attendee names. Read them off the
  chalkboards in the event photos, or ask.

## Working agreements

- Work on `main` and push directly. No PRs unless asked.
- Verify changes against the built output in `dist`, not the source.
