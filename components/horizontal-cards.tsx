"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cardImages } from "@/lib/utility/heroUtils"

const HorizontalCards = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const textRef = useRef<HTMLDivElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)

 

  useEffect(() => {
    const container = containerRef.current
    const cards = cardRefs.current.filter(Boolean)
    const textElement = textRef.current

    if (!container || cards.length === 0 || !textElement) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const containerTop = rect.top
      const containerBottom = rect.bottom

      const shouldExpand = containerTop < windowHeight * 0.3 && containerBottom > windowHeight * 0.7

      if (shouldExpand !== isExpanded) {
        setIsExpanded(shouldExpand)

        if (shouldExpand) {
          textElement.style.opacity = "0"
          textElement.style.transform = "translateX(20px)"
          textElement.style.visibility = "hidden"

          cards.forEach((card, index) => {
            if (card) {
              setTimeout(() => {
                card.style.width = index === 0 ? "320px" : index === 1 ? "280px" : index === 2 ? "300px" : "260px"
                card.style.opacity = "1"
                card.style.transform = "translateX(0)"
              }, index * 150)
            }
          })
        } else {
          textElement.style.opacity = "1"
          textElement.style.transform = "translateX(0)"
          textElement.style.visibility = "visible"

          cards.forEach((card, index) => {
            if (card) {
              setTimeout(
                () => {
                  if (index === 0) {
                    card.style.width = "320px"
                    card.style.opacity = "1"
                    card.style.transform = "translateX(0)"
                  } else {
                    card.style.width = "60px"
                    card.style.opacity = "0.7"
                    card.style.transform = `translateX(-${index * 10}px)`
                  }
                },
                (cards.length - 1 - index) * 100,
              )
            }
          })
        }
      }
    }

    textElement.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
    textElement.style.opacity = "1"
    textElement.style.transform = "translateX(0)"
    textElement.style.visibility = "visible"

    cards.forEach((card, index) => {
      if (card) {
        if (index === 0) {
          card.style.width = "320px"
          card.style.opacity = "1"
          card.style.transform = "translateX(0)"
        } else {
          card.style.width = "60px"
          card.style.opacity = "0.7"
          card.style.transform = `translateX(-${index * 10}px)`
        }
        card.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
      }
    })

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() 

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isExpanded])

  return (
    <section ref={containerRef} className="relative  overflow-hidden bg-gray-50">
      <div className="sticky top-0 h-screen flex items-center">
        <div className="flex-shrink-0 w-1/2 flex justify-start pl-12">
          <div ref={cardsRef} className="flex space-x-4 will-change-transform">
            {cardImages.map((image, index) => (
              <div
                key={index}
                ref={(el: any) => (cardRefs.current[index] = el)}
                className="flex-shrink-0 relative overflow-hidden rounded-2xl will-change-transform shadow-lg"
                style={{
                  width: index === 0 ? "320px" : "60px",
                  height: "420px",
                }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 z-[-10] flex items-center justify-start pl-16 pr-12">
          <div ref={textRef} className="text-left max-w-lg will-change-transform">
            <h2 className="text-5xl md:text-6xl font-medium text-slate-800 leading-tight mb-8 text-balance">
              Your mental wellness journey starts now
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Discover a path to better mental health through our comprehensive wellness programs. Each step of your
              journey is carefully crafted to support your personal growth and emotional wellbeing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HorizontalCards
