"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { loadGSAP } from "@/lib/utility/gsapLoader"
import { cardImages } from "@/lib/utility/heroUtils"

 

const HorizontalCards = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    loadGSAP().then(() => {
      const container = containerRef.current
      const cardsContainer = cardsRef.current
      const cards = cardRefs.current.filter(Boolean)

      if (!container || !cardsContainer || cards.length === 0) return

      const tl = window.gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })

      cards.forEach((card, index) => {
        if (card) {
          if (index === 0) {
            window.gsap.set(card, { width: "300px", opacity: 1, x: 0 })
          } else {
            window.gsap.set(card, { width: 0, opacity: 0 })
          }
        }
      })

      cards.forEach((card, index) => {
        if (card && index > 0) {
          tl.to(
            card,
            {
              width: index === 1 ? "400px" : index === 2 ? "350px" : index === 3 ? "450px" : "320px",
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
            },
            index * 0.5,
          )
        }
      })

      tl.set(cards[0], { x: 0 }, 0)
    })

    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
      }
    }
  }, [])

 
  return (
    <section ref={containerRef} className="relative  overflow-hidden bg-gray-50">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="flex-shrink-0 w-1/2 flex justify-start pl-20">
          <div ref={cardsRef} className="flex space-x-6 will-change-transform">
            {cardImages.map((image, index) => (
              <div
                key={index}
                ref={(el: any) => (cardRefs.current[index] = el)}
                className="flex-shrink-0 relative overflow-hidden rounded-2xl will-change-transform"
                style={{
                  width: index === 0 ? "300px" : "0px",
                  height: "500px",
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

        <div className="flex-1 flex items-center justify-center pr-20">
          <div className="text-left max-w-xl">
            <h2 className="text-4xl md:text-6xl font-serif font-light text-gray-900 leading-tight mb-6">
              Your mental wellness journey starts now
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
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
