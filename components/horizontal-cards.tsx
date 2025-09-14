"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const HorizontalCards = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const cards = cardsRef.current
    if (!container || !cards) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const scrollProgress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)),
      )

      // Move cards horizontally based on scroll
      const translateX = scrollProgress * -50
      cards.style.transform = `translateX(${translateX}%)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const cardImages = [
    {
      src: "/calming-wellness-imagery.jpg",
      alt: "Mental health portrait",
    },
    {
      src: "/mindful-growth-concept.jpg",
      alt: "Wellness landscape",
    },
    {
      src: "/calming-wellness-imagery.jpg",
      alt: "Mindfulness meditation",
    },
    {
      src: "/peaceful-forest-stream.png",
      alt: "Personal growth",
    },
    {
      src: "/mindful-growth-concept.jpg",
      alt: "Emotional wellbeing",
    },
  ]

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-gray-50">
      <div className="sticky top-0 h-screen flex items-center">
        <div ref={cardsRef} className="flex space-x-8 transition-transform duration-100 ease-out">
          {cardImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative overflow-hidden rounded-2xl"
              style={{
                width:
                  index === 0
                    ? "300px"
                    : index === 1
                      ? "500px"
                      : index === 2
                        ? "400px"
                        : index === 3
                          ? "450px"
                          : "350px",
                height: "500px",
              }}
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-serif font-light text-gray-900 leading-tight">
            Your mental wellness journey starts now
          </h2>
        </div>
      </div>
    </section>
  )
}

export default HorizontalCards
