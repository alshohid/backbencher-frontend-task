

export interface NavItem {
  name: string
  href: string
}
export interface CirculerImages{
    src:string;
    alt:string;
}

export const pages: NavItem[] = [
  { name: "Home 1", href: "/home-01" },
  { name: "Home 2", href: "/home-02" },
  { name: "Home 3", href: "/home-03" },
  { name: "About 1", href: "/about-01" },
  { name: "About 2", href: "/about-02" },
  { name: "About 3", href: "/about-03" },
  { name: "Features 1", href: "/feature-01" },
  { name: "Features 2", href: "/feature-02" },
  { name: "Features 3", href: "/feature-03" },
  { name: "Log in", href: "/log-in" },
  { name: "Sign up", href: "/sign-up" },
  { name: "Contact", href: "/contact" },
  { name: "Request Demo", href: "/request-demo" },
]

export const templateLinks: NavItem[] = [
  { name: "Style Guide", href: "/utility/style-guide" },
  { name: "Licenses", href: "/utility/licenses" },
  { name: "Changelog", href: "/utility/change-log" },
]
export const circularImages:CirculerImages[] = [
  { src: "/mindful-living-room.jpg", alt: "Mindful living" },
  { src: "/serene-outdoor-environment.jpg", alt: "Outdoor serenity" },
  { src: "/calming-interior-design.jpg", alt: "Calming interior" },
  { src: "/peaceful-wellness-background.jpg", alt: "Wellness background" },
]