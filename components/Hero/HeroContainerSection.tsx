import { NavButton } from "../Navigation/NavButton"
import { HeroTag } from "./HeroTag"
import { HeroTitle } from "./HeroTitle"
import { HeroGallery } from "./HeroGallery"
import { OfferBadge } from "./OfferBadge"

export default function PersonalGrowthHero() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <HeroTag heroText="Personal Growth" />
        <HeroTitle title=" Feel more" subtitle=" human every day " />
        <NavButton
          href="/request-demo"
          label="Request demo"
          className="mx-3 bg-[#c2e593] text-black"
        />
      </div>
      <div className="flex mx-auto justify-center items-center">
        <HeroGallery />
      </div>

      <OfferBadge />
    </section>
  )
}