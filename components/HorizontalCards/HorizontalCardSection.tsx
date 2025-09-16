"use client"
import { useRef } from "react"
import { useCardScroll } from "./useCardScroll"
import CardList from "./CardList"
import TextBlock from "./TextBlock"

const HorizontalCards = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isExpanded = useCardScroll(containerRef)

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gray-50"
    >
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center md:items-stretch">
        
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-start p-6 md:pl-12">
          <CardList isExpanded={isExpanded} />
        </div>

       
        <div className="flex-1 w-full flex items-center justify-center md:justify-start px-6 md:pl-16 md:pr-12 mt-6 md:mt-0">
          <TextBlock isExpanded={isExpanded} />
        </div>
      </div>
    </section>
  )
}

export default HorizontalCards
