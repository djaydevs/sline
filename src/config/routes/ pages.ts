import { linkRoutes } from "./links";

export const topbarRoutes = [
  {
    title: "+632 8705 9999",
    href: "tel:+63287059999",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
  {
    title: "Request a Brochure",
    href: "/request-a-brochure",
  },
  {
    title: "Showroom Locations",
    href: "/showroom-locations",
  },
  {
    title: "Follow Us",
    href: linkRoutes.INSTAGRAM,
    target: "_blank",
  },
];

export const pageRoutes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Your Kitchen",
    href: "/",
    subMenu: [
      {
        title: "New: Pure SLX",
        href: "/slx",
      },
      {
        title: "Pure",
        href: "/pure-style-collection",
      },
      {
        title: "Urban",
        href: "/urban-style-collection",
      },
      {
        title: "Classic",
        href: "/classic-style-collection",
      },
      {
        title: "Interior Accessories",
        href: "/interior-accessories",
      },
    ],
  },
  {
    title: "Find Inspiration",
    href: "/blogs",
  },
  {
    title: "Highlights",
    href: "/",
    subMenu: [
      {
        title: "Local",
        href: "/local-highlights",
      },
      {
        title: "International",
        href: linkRoutes.INTERNATIONAL,
        target: "_blank",
      },
    ],
  },
  {
    title: "Locations",
    href: "/showroom-locations",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];
