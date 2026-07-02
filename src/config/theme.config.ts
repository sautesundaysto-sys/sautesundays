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
  { to: "https://lu.ma/sautesundaysto", label: "Events" },
  { to: "/blog", label: "Recaps" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
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
  { href: "https://www.instagram.com/sautesundays.to/", label: "Sauté Sundays on Instagram", icon: "instagram" },
  { href: "https://lu.ma/sautesundaysto", label: "RSVP on Luma", icon: "calendar" },
  { href: "https://chat.whatsapp.com/GmxcTL5eYwsKqwb23VBjJL", label: "Join our WhatsApp Community", icon: "whatsapp" },
  { href: `mailto:${CONTACT.email}`, label: "Email", icon: "mail" },
];

export const authors = [
  {
    slug: "tammy",
    name: "Tammy",
    bio: "Co-host of Sauté Sundays. Also writes about food, travel & recipes on Clearing the Table.",
    longBio:
      "Tammy co-hosts Sauté Sundays, a monthly potluck cookbook club based in Toronto. She also writes about food, travel, and cooking on her Substack publication, Clearing the Table.",
    avatar: "/avatars/tammy.jpeg",
  },
  {
    slug: "mady",
    name: "Mady",
    bio: "Co-host of Sauté Sundays, Toronto's cookbook club.",
    longBio:
      "Mady co-hosts Sauté Sundays, a monthly potluck cookbook club based in Toronto.",
    avatar: "/avatars/mady.jpeg",
  },
];

export const categories = [
  { slug: "event-recap", name: "Event Recap" },
  { slug: "cookbook-highlight", name: "Cookbook Highlight" },
  { slug: "from-the-table", name: "From the Table" },
];

export const tags = [
  { slug: "toronto", name: "Toronto" },
  { slug: "cookbook-club", name: "Cookbook Club" },
  { slug: "potluck", name: "Potluck" },
  { slug: "community", name: "Community" },
  { slug: "food", name: "Food" },
];