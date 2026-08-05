/* Site-wide copy and configuration. Rename the product, swap the links,
   and the whole page follows. Colors live in app/theme.css; fonts in
   app/layout.tsx. This is the first file to edit. */

export const site = {
  name: "Ember",
  // Used for metadata, sitemap, and OG tags. Set NEXT_PUBLIC_SITE_URL in your
  // host's env to override it without editing this file.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  tagline: "Know before your users do",
  description:
    "Ember watches every endpoint, region, and dependency you ship — then tells you what broke, where, and who it touches before the first support ticket lands.",
  nav: [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ],
  footer: {
    product: [
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
    ],
    company: [
      { href: "#", label: "About" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Careers" },
    ],
    legal: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
      { href: "#", label: "Security" },
    ],
  },
  cta: {
    primary: { href: "#pricing", label: "Start free" },
    secondary: { href: "#features", label: "See how it works" },
  },
};
