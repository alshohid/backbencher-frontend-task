
import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { Fragment } from "react"
import ImageGallerySections from "@/components/ImageGallery/ImageGallery"
import HorizontalCards from "@/components/horizontal-cards"
const ExpandSection = dynamic(
  () => import("@/components/expand-section").then((mod) => ({ default: mod.ExpandSection })),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  },
)
const AutomationSection = dynamic(
  () => import("@/components/AutomationSection/AutomationSection").then((mod) => ({ default: mod.default })),
  {
    loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  },
)
const FAQSection = dynamic(() => import("@/components/faq-section").then((mod) => ({ default: mod.FAQSection })), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
})



export default function HomePage() {
  return (
    <Fragment>

      <main className="min-h-screen">
        <HeroSection />
        {/* <ScrollingImages /> */}
       
        <HorizontalCards/>
         <ExpandSection />
        <ImageGallerySections/>
        <AutomationSection />
        <FAQSection />
      </main>
    </Fragment>
  )
}
