import { getCollection } from "astro:content";
export { SITE, authors, categories, tags } from "../config/theme.config.ts";
import { authors, categories, tags } from "../config/theme.config.ts";

const isoDate = (date) => date?.toISOString().slice(0, 10);
const wordsPerMinute = 220;

const estimateReadingTime = (text = "") => {
  const words = text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / wordsPerMinute));
};

export const imageSrc = (image) => (typeof image === "string" ? image : image?.src);

export const normalizePost = (entry) => ({
  slug: entry.id,
  ...entry.data,
  date: isoDate(entry.data.date),
  updated: isoDate(entry.data.updated),
  readingTime: entry.data.readingTime ?? estimateReadingTime(entry.body),
});

export const posts = async () =>
  (await getCollection("blog", ({ data }) => !data.draft)).map(normalizePost);

export const getPost = async (slug) => (await posts()).find((post) => post.slug === slug);
export const getAuthor = (slug) => authors.find((author) => author.slug === slug);
export const getCategory = (slug) => categories.find((category) => category.slug === slug);
export const getTag = (slug) => tags.find((tag) => tag.slug === slug);
export const postsByCategory = async (slug) =>
  (await sortedPosts()).filter((post) => post.category === slug);
export const postsByTag = async (slug) =>
  (await sortedPosts()).filter((post) => post.tags.includes(slug));
export const postsByAuthor = async (slug) =>
  (await sortedPosts()).filter((post) => post.author === slug);
export const sortedPosts = async () =>
  [...(await posts())].sort((a, b) => (a.date < b.date ? 1 : -1));
export const featuredPost = async () => {
  const sorted = await sortedPosts();
  return sorted.find((post) => post.featured) ?? sorted[0];
};
// One recap per night, so the recaps are the nights. Every page that states
// how many nights we have run reads this, which means publishing a recap is
// the only step: no page carries a number that has to be remembered.
export const eventNightsRun = async () =>
  (await posts()).filter((post) => post.category === "event-recap").length;

// Pages that state the count inside a sentence spell it, matching the prose
// around it. Past the teens a numeral reads better anyway, so it falls back.
const NUMBER_WORDS = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
  "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
  "sixteen", "seventeen", "eighteen", "nineteen",
];
export const spellNumber = (value) => NUMBER_WORDS[value] ?? String(value);

export const popularPosts = async () => (await sortedPosts()).slice(0, 4);
export const relatedPosts = async (post, n = 3) =>
  (await sortedPosts())
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => {
      const score = (candidate) =>
        (candidate.category === post.category ? 2 : 0) +
        candidate.tags.filter((tag) => post.tags.includes(tag)).length;
      return score(b) - score(a);
    })
    .slice(0, n);

export const adjacentPosts = async (post) => {
  const sorted = await sortedPosts();
  const index = sorted.findIndex((candidate) => candidate.slug === post.slug);
  return { prev: sorted[index + 1], next: sorted[index - 1] };
};

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
