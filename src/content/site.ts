import {
  furnitureLogo,
  medicalLogo,
  opticsLogo,
  steamaticLogo,
  steel,
  steelLogo,
} from "@/assets"

export const navItems = [
  {
    label: "home",
    link: "/",
  },
  {
    label: "companies",
    link: [
      { label: "furniture", link: "/furniture", src: furnitureLogo.src },
      { label: "medical", link: "/medical", src: medicalLogo.src },
      { label: "contracting", link: "/contracting", src: steelLogo.src },
    ],
  },
  {
    label: "sister-companies",
    link: [
      { label: "steamatic", link: "/steamatic", src: steamaticLogo.src },
      { label: "optics", link: "/optics", src: opticsLogo.src },
    ],
  },
  {
    label: "about-us",
    link: "/about-us",
  },
  {
    label: "contact-us",
    link: "/contact-us",
  },
] as const
