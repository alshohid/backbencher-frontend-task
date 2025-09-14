"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const circularImages = [
  { src: "/mindful-living-room.jpg", alt: "Mindful living" },
  { src: "/serene-outdoor-environment.jpg", alt: "Outdoor serenity" },
  { src: "/calming-interior-design.jpg", alt: "Calming interior" },
  { src: "/peaceful-wellness-background.jpg", alt: "Wellness background" },
]

export default function ImageTicker() {
  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker) return

    let position = 0
    let frame: number

    const animate = () => {
      position -= 1
      ticker.style.transform = `translateX(${position}px)`

      if (position <= -ticker.scrollWidth / 2) {
        position = 0
      }

      frame = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-white p-3 mt-auto">
      <div className="w-full h-28 sm:h-36 md:h-36 relative">
        <div
          ref={tickerRef}
          className="absolute left-0 top-0 bottom-5 flex items-end space-x-4 will-change-transform"
          style={{ transform: "translateX(0px)" }}
        >
          {[...circularImages, ...circularImages].map((image, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-20 sm:w-24 md:w-32 h-full flex items-end justify-center"
            >
              <div className="w-full h-auto max-h-full rounded-xl overflow-hidden flex items-end justify-center bg-gray-50 p-1">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="max-h-full max-w-full object-contain rounded-3xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
