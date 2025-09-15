
import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { Fragment } from "react"
import ImageGallerySections from "@/components/ImageGallery/ImageGallery"
import HorizontalCards from "@/components/horizontal-cards"
import { ExpandImageSection } from "@/components/expandSection/ExpandImageSection"
import ScrollSpinningImages from "@/components/scroll-spinning-images"

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
        {/* <ScrollSpinningImages /> */}
        <HorizontalCards />
        <ExpandImageSection />
        <ImageGallerySections />
        <AutomationSection />
        <FAQSection />
      </main>

    </Fragment>
  )
}
