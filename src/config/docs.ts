import { NavItemWithChildren } from "../types/nav"

interface DocsConfig {
  navbarItems: NavItemWithChildren[]
}

export const docsConfig: DocsConfig = {
  navbarItems: [
    {
      title: "About",
      href: "#about",
      items: [],
    },
    {
      title: "Event",
      href: "#events",
      items: [
        {
          title: "Stragtegem",
          href: "#stragtegem",
          description: "Case Study Competition",
          items: [],
        },
        {
          title: "Better Call Tal",
          href: "#better-call-tal",
          description: "Chess Competition",
          items: [],
        },
        {
          title: "Turing Show",
          href: "#turing-show",
          description: "Coding Competition",
          items: [],
        },
        {
          title: "Phronemophilia",
          href: "#phronemophilia",
          description: "Poster Presentation Competition",
          items: [],
        },
        {
          title: "Exquizzit",
          href: "#exquizzit",
          description: "Quiz Competition",
          items: [],
        },
        {
          title: "Special Talk",
          href: "#special-talk",
          description: "Speech by Industry Experts",
          items: [],
        },
      ],
    },
    {
      title: "Speakers",
      href: "#speakers",
      items: [],
    },
    {
      title: "Sponsors",
      href: "#sponsors",
      items: [],
    },
    {
      title: "Our Team",
      href: "#team",
      items: [],
    },
    {
      title: "Gallery",
      href: "#gallery",
      items: [],
    },
    {
      title: "FAQs",
      href: "#faqs",
      items: [],
    },
    {
      title: "Contact",
      href: "#footer",
      items: [],
    },
  ],
}
