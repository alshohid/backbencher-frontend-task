"use client"

import { useState, useEffect } from "react"

const ScrollSpinningImages = () => {
  const [scrollY, setScrollY] = useState(0)

  // Sample image URLs - you can replace these with your own images
  const images = [
    "https://picsum.photos/100/100?random=1",
    "https://picsum.photos/100/100?random=2",
    "https://picsum.photos/100/100?random=3",
    "https://picsum.photos/100/100?random=4",
    "https://picsum.photos/100/100?random=5",
    "https://picsum.photos/100/100?random=6",
    "https://picsum.photos/100/100?random=7",
    "https://picsum.photos/100/100?random=8",
  ]

  const secondImages = [
    "https://picsum.photos/100/100?random=9",
    "https://picsum.photos/100/100?random=10",
    "https://picsum.photos/100/100?random=11",
    "https://picsum.photos/100/100?random=12",
    "https://picsum.photos/100/100?random=13",
    "https://picsum.photos/100/100?random=14",
    "https://picsum.photos/100/100?random=15",
    "https://picsum.photos/100/100?random=16",
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollProgress = scrollY / 1000
  const rotationProgress = (scrollY - 1000) / 1000
  const exitProgress = (scrollY - 2000) / 800
  const newSectorProgress = (scrollY - 2800) / 1000

  const circleRadius = 150 + Math.min(scrollProgress, 1) * 100

  const totalRotations = Math.max(0, rotationProgress) * 2

  const imageSize = 80
  const imageCount = images.length
  const circumference = 2 * Math.PI * circleRadius
  const optimalSpacing = circumference / imageCount
  const rowSpacing = Math.max(optimalSpacing, imageSize + 20)

  return (
    <div className="min-h-screen">


      {/* First set of spinning images */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((src, index) => {
            const baseAngle = (index / images.length) * 2 * Math.PI
            const orbitalRotation = totalRotations * Math.PI
            const angle = baseAngle + orbitalRotation

            const totalRowWidth = (images.length - 1) * rowSpacing
            const startX = -totalRowWidth / 2 + index * rowSpacing
            const startY = -window.innerHeight / 2 + 100

            const endX = Math.cos(angle) * circleRadius
            const endY = Math.sin(angle) * circleRadius

            const positionProgress = Math.min(scrollProgress, 1)
            const easedProgress = positionProgress * positionProgress * (3 - 2 * positionProgress) // Smooth step function

            const currentX = startX + (endX - startX) * easedProgress
            let currentY = startY + (endY - startY) * easedProgress

            if (exitProgress > 0) {
              currentY -= exitProgress * (window.innerHeight + 200)
            }

            const rotationToCenter = (angle * 180) / Math.PI + 180
            const scale = 0.5 + easedProgress * 0.5
            let opacity = Math.max(0.3, Math.min(easedProgress * 2, 1))

            if (exitProgress > 0) {
              opacity *= Math.max(0, 1 - exitProgress)
            }

            return (
              <div
                key={index}
                className="absolute transition-all duration-100 ease-out"
                style={{
                  transform: `translate(${currentX}px, ${currentY}px) rotate(${rotationToCenter}deg) scale(${scale})`,
                  opacity: opacity,
                }}
              >
                <div
                  className="w-20 h-20 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white"
                  style={{
                    boxShadow: `0 0 30px rgba(255, 255, 255, ${opacity * 0.5})`,
                  }}
                >
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`Spinning image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {newSectorProgress > 0 && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            {secondImages.map((src, index) => {
              const baseAngle = (index / secondImages.length) * 2 * Math.PI
              const newOrbitalRotation = newSectorProgress * Math.PI * 2
              const angle = baseAngle + newOrbitalRotation

              const totalRowWidth = (secondImages.length - 1) * rowSpacing
              const startX = -totalRowWidth / 2 + index * rowSpacing
              const startY = window.innerHeight + 100 // Start from bottom

              const endX = Math.cos(angle) * circleRadius
              const endY = Math.sin(angle) * circleRadius

              const positionProgress = Math.min(newSectorProgress, 1)
              const easedProgress = positionProgress * positionProgress * (3 - 2 * positionProgress)

              const currentX = startX + (endX - startX) * easedProgress
              const currentY = startY + (endY - startY) * easedProgress

              const rotationToCenter = (angle * 180) / Math.PI + 180
              const scale = 0.5 + easedProgress * 0.5
              const opacity = Math.max(0.3, Math.min(easedProgress * 2, 1))

              return (
                <div
                  key={`second-${index}`}
                  className="absolute transition-all duration-100 ease-out"
                  style={{
                    transform: `translate(${currentX}px, ${currentY}px) rotate(${rotationToCenter}deg) scale(${scale})`,
                    opacity: opacity,
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-full border-4 border-blue-300 shadow-2xl overflow-hidden bg-white"
                    style={{
                      boxShadow: `0 0 30px rgba(59, 130, 246, ${opacity * 0.5})`,
                    }}
                  >
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`New sector image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}


      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Row to Circle</h2>
            <p className="text-lg text-gray-600 font-medium max-w-md mx-auto">
              The images start as a horizontal row from the top-left corner and gradually transform into a perfect
              circle as you scroll.
            </p>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Orbital Motion</h2>
            <p className="text-lg text-gray-600 font-medium max-w-md mx-auto">
              The circular formation rotates around the center point. After two complete rotations, it will move upward.
            </p>
          </div>
        </section>


      </div>
    </div>
  )
}

export default ScrollSpinningImages
