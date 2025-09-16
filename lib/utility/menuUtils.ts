

export interface NavItem {
  name: string
  href: string
}
export interface CirculerImages {
  src: string;
  alt: string;
}

export const pages: NavItem[] = [
  { name: "Home ", href: "/home-01" },
  { name: "Home ", href: "/home-02" },
  { name: "Home ", href: "/home-03" },
  { name: "About ", href: "/about-01" },
  { name: "About ", href: "/about-02" },
  { name: "About ", href: "/about-03" },
  { name: "Features ", href: "/feature-01" },
  { name: "Features ", href: "/feature-02" },
  { name: "Features ", href: "/feature-03" },
  { name: "Log in", href: "/log-in" },
  { name: "Sign up", href: "/sign-up" },
  { name: "Contact", href: "/contact" },

]

export const templateLinks: NavItem[] = [
  { name: "Style Guide", href: "/utility/style-guide" },
  { name: "Licenses", href: "/utility/licenses" },
  { name: "Changelog", href: "/utility/change-log" },
]
export const circularImages: CirculerImages[] = [
  { src: "/mindful-living-room.jpg", alt: "Mindful living" },
  { src: "/serene-outdoor-environment.jpg", alt: "Outdoor serenity" },
  { src: "/calming-interior-design.jpg", alt: "Calming interior" },
  { src: "/peaceful-wellness-background.jpg", alt: "Wellness background" },
]