
import dynamic from "next/dynamic"
import { Fragment } from "react"
import ImageGallerySections from "@/components/ImageGallery/ImageGallery"
import { ExpandImageSection } from "@/components/expandSection/ExpandImageSection"
import PersonalGrowthHero from "@/components/Hero/HeroContainerSection"
import HorizontalCards from "@/components/HorizontalCards/HorizontalCardSection"

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

        <PersonalGrowthHero />
        <HorizontalCards />
        <ExpandImageSection />
        <ImageGallerySections />
        <AutomationSection />
        <FAQSection />
      </main>

    </Fragment>
  )
}
