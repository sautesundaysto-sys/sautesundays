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

// The "Next up" block on the homepage, directly under the hero.
// Keep this filled in even when the event is sold out — "Sold out" is proof,
// not a dead end. Set `title` to "" to hide the block entirely.
export const NEXT_EVENT = {
  title: "Summer Isn't Over Yet",
  date: "Sunday, August 23",
  location: "Outdoors, with SocialSip",
  cookbook: "Endless Summer",
  cookbookAuthor: "Katie Lee",
  rsvpLabel: "RSVP on Luma",
  rsvpUrl: "https://lu.ma/sautesundaysto",
  // Swap `status` as you move through the cycle. Set it to "" to hide the line.
  //   "Early access opens [DATE] for subscribers. Public RSVP [DATE]."
  //   "RSVPs open now. Spots go fast."
  //   "Sold out. Join the waitlist"      (pair with statusUrl)
  //   "Next event announced [MONTH]. Subscribe to get it first."
  status: "RSVPs open now. Spots go fast.",
  // Optional. When set, `status` renders as a link with a trailing arrow.
  statusUrl: "",
};

// The proof line under the hero buttons. Reassures a first-timer, and is the
// first thing a sponsor reads.
// `sellOutTime` comes from your Luma registration timestamps. While it is "",
// that sentence is left out rather than shipped with a placeholder in it.
export const PROOF = {
  seats: 35,
  tables: 13,
  since: 2025,
  sellOutTime: "3 days",
};