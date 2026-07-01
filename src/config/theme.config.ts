const siteUrl = (
  import.meta.env.SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://sautesundays.vercel.app"
).replace(/\/$/, "");

export const SITE = {
  name: "Sauté Sundays",
  description:
    "Toronto's cookbook club. Every month, members cook a dish at home from the same featured cookbook, then come together at one table to share it. Running since 2025, selling out within hours.",
  url: siteUrl,
  locale: "en-US",
  language: "en",
  repositoryUrl: "https://github.com/sautesundaysto-sys/sautesundays",
};

export const NAVIGATION = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Past Events" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Join Us" },
];

export const CONTACT = {
  email: "sautesundays.to@gmail.com",
  socialHandle: "@sautesundays.to",
  socialUrl: "https://www.instagram.com/sautesundays.to/",
};

export const FORMS = {
  contact: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
  newsletter: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
};

export const SOCIAL_LINKS = [
  { a href: "https://www.instagram.com/sautesundays.to/", label: "Sauté Sundays on Instagram", icon: "instagram" },
  { a href: "https://lu.ma/sautesundaysto", label: "RSVP on Luma", icon: "calendar" },
  { a href: "https://chat.whatsapp.com/GmxcTL5eYwsKqwb23VBjJL", label: "Join our WhatsApp Community", icon: "whatsapp" },
  { a href: `mailto:${CONTACT.email}`, label: "Email", icon: "mail" },
];

export const authors = [
  {
    slug: "tammy",
    name: "Tammy",
    bio: "Co-host of Sauté Sundays, Toronto's cookbook club.",
    longBio:
      "Tammy co-hosts Sauté Sundays, a monthly potluck cookbook club based in Toronto. She also writes about food, travel, and cooking on her Substack, Clearing the Table.",
    avatar: "/avatars/tammy.jpg",
  },
  {
    slug: "mady",
    name: "Mady",
    bio: "Co-host of Sauté Sundays, Toronto's cookbook club.",
    longBio:
      "Mady co-hosts Sauté Sundays, a monthly potluck cookbook club based in Toronto.",
    avatar: "/avatars/mady.jpg",
  },
];

export const categories = [
  { slug: "event-recap", name: "Event Recap" },
  { slug: "cookbook", name: "Cookbook" },
  { slug: "community", name: "Community" },
];

export const tags = [
  { slug: "toronto", name: "Toronto" },
  { slug: "cookbook-club", name: "Cookbook Club" },
  { slug: "potluck", name: "Potluck" },
  { slug: "community", name: "Community" },
  { slug: "food", name: "Food" },
];