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

## Whose writing is whose

Check `author` in the frontmatter before editing any post. **Mady's posts are
hers and her words do not get rewritten**, not for SEO, not for tone, not to
match a copy map. If a change would improve one of her posts, say so and leave
it. Tammy's posts are open to editing.

As of October 2026 Mady wrote eleven cookbook highlights; Tammy wrote all the
event recaps plus the Endless Summer, Japanese and Moroccan highlights. The
frontmatter is the source of truth, not this paragraph.

Search metadata is not writing. `seoTitle` and `seoDescription` are fine to set
on anyone's post, because `<title>` is written for a query. Anything a reader
sees as the article, including the visible title and the share card, follows
the author's own words.

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
