"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"

const ImageGallerySections = () => {
  const expandSectionRef = useRef<HTMLDivElement>(null)
  const masonryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const expandSection = expandSectionRef.current
    if (!expandSection) return

    const handleScroll = () => {
      const rect = expandSection.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))

      const scaleValue = 1 + scrollProgress * 0.2
      const expandImage = expandSection.querySelector(".expand-image") as HTMLElement
      if (expandImage) {
        expandImage.style.transform = `scale(${scaleValue})`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const masonrySection = masonryRef.current
    if (!masonrySection) return

    const handleScroll = () => {
      const rect = masonrySection.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))

     
      const leftCards = masonrySection.querySelectorAll(".left-col .masonry-card")
      const rightCards = masonrySection.querySelectorAll(".right-col .masonry-card")
      const centerCards = masonrySection.querySelectorAll(".center-col .masonry-card")

      leftCards.forEach((card, index) => {
        const element = card as HTMLElement
        const delay = index * 0.1
        const translateY = Math.max(0, (1 - scrollProgress - delay) * 100)
        element.style.transform = `translateY(${translateY}px)`
      })

      rightCards.forEach((card, index) => {
        const element = card as HTMLElement
        const delay = index * 0.1
        const translateY = Math.max(0, (1 - scrollProgress - delay) * -100)
        element.style.transform = `translateY(${translateY}px)`
      })

      centerCards.forEach((card, index) => {
        const element = card as HTMLElement
        const delay = index * 0.15
        const scale = Math.min(1, scrollProgress + delay)
        element.style.transform = `scale(${scale})`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Framer Motion logic for center image and header
  const centerImageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(centerImageRef, { amount: 0.55 })
  const controls = useAnimation()
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    const el = centerImageRef.current
    if (!el) return
    // Simple in-place scale when center image is in view
    let timer: number | undefined
    if (isInView) {
      // gently scale up
      controls.start({ scale: 1.12, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, zIndex: 2, borderRadius: 0 })
      timer = window.setTimeout(() => setShowHeader(true), 320)
    } else {
      controls.start({ scale: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }, zIndex: 1, borderRadius: "1rem" })
      window.clearTimeout(timer)
      setShowHeader(false)
    }

    return () => {
      if (timer) window.clearTimeout(timer)
    }
  }, [isInView, controls])


  return (
    <>
     
      <section ref={masonryRef} className="relative w-full min-h-screen bg-white py-20">
        <div className="relative z-10 zuno-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <motion.div
              className="left-col space-y-8"
              animate={isInView ? { opacity: 0.3, x: -30 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="masonry-card relative h-64 rounded-2xl overflow-hidden transition-transform duration-300">
                <Image src="/calming-interior-design.jpg" alt="Wellness scene" fill className="object-cover" />
              </div>
              <div className="masonry-card relative h-80 rounded-2xl overflow-hidden transition-transform duration-300">
                <Image src="/calming-wellness-imagery.jpg" alt="Mental health" fill className="object-cover" />
              </div>
              <div className="masonry-card relative h-72 rounded-2xl overflow-hidden transition-transform duration-300">
                <Image src="/serene-nature-landscape.png" alt="Personal growth" fill className="object-cover" />
              </div>
            </motion.div>

            <div className="center-col space-y-8">
              <div className="relative">
                <motion.div
                  ref={centerImageRef}
                  className="masonry-card rounded-2xl overflow-hidden transition-transform duration-300"
                  style={{ height: "24rem" }}
                  animate={controls}
                  initial={{ position: "relative", width: "100%", height: "24rem", borderRadius: "1rem", zIndex: 1 }}
                >
                  <Image src="/mindful-living-room.jpg" alt="Mindfulness meditation" fill className="object-cover rounded-2xl" />
                
                
                </motion.div>
                {showHeader && (
                  <div aria-hidden="true" style={{ height: "100vh", width: "100%" }} />
                )}
              </div>
              <div className="masonry-card relative h-64 rounded-2xl overflow-hidden transition-transform duration-300">
                <Image src="/peaceful-wellness-background.jpg" alt="Emotional wellbeing" fill className="object-cover" />
              </div>
            </div>

            <motion.div
              className="right-col space-y-8"
              animate={isInView ? { opacity: 0.3, x: 30 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="masonry-card relative h-72 rounded-2xl overflow-hidden transition-transform duration-300">
                <Image src="/peaceful-wellness-background.jpg" alt="Self care" fill className="object-cover" />
              </div>
              <div className="masonry-card relative h-80 rounded-2xl overflow-hidden transition-transform duration-300">
                <Image src="/peaceful-wellness-background.jpg" alt="Personal development" fill className="object-cover" />
              </div>
              <div className="masonry-card relative h-64 rounded-2xl overflow-hidden transition-transform duration-300">
                <Image src="/peaceful-wellness-background.jpg" alt="Mental wellness" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImageGallerySections