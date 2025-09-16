"use client"
import { useRef } from "react"
import { useCardScroll } from "./useCardScroll"
import CardList from "./CardList"
import TextBlock from "./TextBlock"

const HorizontalCards = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const isExpanded = useCardScroll(containerRef)

    return (
        <section ref={containerRef} className="relative overflow-hidden bg-gray-50">
            <div className="sticky top-0 h-screen flex items-center">
                <div className="flex-shrink-0 w-1/2 flex justify-start pl-12">
                    <CardList isExpanded={isExpanded} />
                </div>

                <div className="flex-1 flex items-center justify-start pl-16 pr-12">
                    <TextBlock isExpanded={isExpanded} />
                </div>
            </div>
        </section>
    )
}

export default HorizontalCards
