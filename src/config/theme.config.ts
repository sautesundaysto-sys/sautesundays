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

// No Home entry: the logo goes home, which every visitor already knows.
// Events leaves the site for Luma, so it is marked external and gets an arrow.
export const NAVIGATION = [
  { to: "https://lu.ma/sautesundaysto", label: "Events", external: true },
  { to: "/blog", label: "Recaps" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
];

// The nav's single button. /contact is an email signup and the main conversion
// on the site, so it sits apart rather than competing with Recaps and Gallery.
export const NAV_CTA = { to: "/contact", label: "Subscribe" };

export const CONTACT = {
  email: "hello@sautesundays.com",
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
  { href: `mailto:${CONTACT.email}`, label: "Email", icon: "mail" },
];

export const authors = [
  {
    slug: "tammy",
    name: "Tammy",
    role: "Co-host",
    bio: "Co-host. Started Sauté Sundays in her party room in 2025, and writes the newsletter that keeps it running.",
    // Each entry renders as its own paragraph on the author page.
    longBio: [
      "Started Sauté Sundays in her party room in 2025 by inviting friends. They brought their friends. Then people started showing up who'd found the Instagram back when there was almost nothing on it, and it kept going from there.",
      "Writes the newsletter: recipes, food thoughts, and all the boring logistics. Keeps the recipe sheet so 35 people can actually get hold of the book. Does the unglamorous half because that's what makes the room feel easy when people walk in.",
      "Usually brings something simple, since setting up on event day takes the energy she'd need for anything ambitious. The exception was a rice pudding somebody said beat the restaurant's, and we were cooking from that restaurant's cookbook.",
      "Marketing by day. Also writes Clearing the Table, on food and travel.",
    ],
    avatar: "/avatars/tammy.jpeg",
  },
  {
    slug: "mady",
    name: "Mady",
    role: "Co-host",
    bio: "Co-host of Sauté Sundays, Toronto's cookbook club.",
    longBio: ["Mady co-hosts Sauté Sundays, a monthly potluck cookbook club based in Toronto."],
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
// Keep this filled in even when the event is sold out. "Sold out" is proof,
// not a dead end. Set `title` to "" to hide the block entirely.
export const NEXT_EVENT = {
  title: "Summer Isn't Over Yet",
  date: "Sunday, August 23",
  location: "Outdoors at Trinity Bellwoods, with SocialSip",
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

  // The fields below feed the Event structured data on the homepage, so search
  // engines can show the date. They are not rendered as visible copy.
  // ISO 8601 with the offset. Toronto is -04:00 on daylight time, -05:00 in winter.
  startDateTime: "2026-08-23T18:15:00-04:00",
  // The venue for this specific night. Leave "" and the schema falls back to
  // Toronto alone rather than naming a place we are not sure of.
  locationName: "Trinity Bellwoods Park",
  // Optional street address for that venue. Omitted from the schema when "".
  locationStreet: "790 Queen St W",
  schemaDescription:
    "Toronto's cookbook club, outdoors. Cooking from Endless Summer by Katie Lee.",
};

// Numbers shown on /restaurant-nights and /partners. Both pages are sent as
// direct links to people deciding whether to work with us, so check these
// against Luma before sending either one out.
export const REACH = {
  seats: "35",
  goneIn24Hours: "28",
  sellsOutIn: "2 days",
  repeatMembers: "50+",
  subscribers: "400",
  whatsappMembers: "130",
  openRate: "50–70%",
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
