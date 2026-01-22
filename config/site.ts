export const services = [
  {
    label: "Dispute Resolution",
    slug: "dispute-resolution",
  },
  {
    label: "Energy, Infrastructure & Natural Resources",
    slug: "energy-infrastructure-natural-resources",
  },
  {
    label: "Employment",
    slug: "employment",
  },
  {
    label: "Real Estate & Finance",
    slug: "real-estate-finance",
  },
];

export const siteConfig = {
  name: "Experience RONN – Experience Law",
  description: "RONN Law",

  /* =========================
     PRIMARY NAV (DESKTOP)
     ========================= */
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Expertise",
      href: "#", // handled via dropdown
    },
    {
      label: "Lawyers",
      href: "/lawyers",
    },
    {
      label: "News",
      href: "/news",
    },
    {
      label: "Careers",
      href: "/careers",
    },
    {
      label: "Contacts",
      href: "/contacts",
    },
  ],

  /* =========================
     MOBILE NAV (FLAT)
     ========================= */
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Lawyers",
      href: "/lawyers",
    },
    {
      label: "News",
      href: "/news",
    },
    {
      label: "Careers",
      href: "/careers",
    },
    {
      label: "Contacts",
      href: "/contacts",
    },
  ],

  /* =========================
     LINKS
     ========================= */
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
  },
};

export type SiteConfig = typeof siteConfig;
