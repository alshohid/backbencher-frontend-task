"use client"
import { useEffect, useRef } from "react"
import MasonryCard from "./MasonryCard"
import CenterImage from "./CenterImage"
import { motion, useInView } from "framer-motion"
import { applyExpandScale, applyMasonryTransforms } from "@/lib/utility/scrollUtils"

const ImageGallerySections = () => {
  const expandSectionRef = useRef<HTMLDivElement>(null)
  const masonryRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(masonryRef, { amount: 0.1 })

  useEffect(() => {
    const handleScroll = () => {
      applyExpandScale(expandSectionRef.current, 0.2)
      applyMasonryTransforms(masonryRef.current)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* <section ref={expandSectionRef} className="relative  " /> */}
      <section ref={masonryRef} className="relative w-full min-h-screen bg-white py-20">
        <div className="relative z-10 zuno-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <motion.div className="left-col space-y-8" animate={isInView ? { opacity: 0.3, x: -30 } : { opacity: 1, x: 0 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
              <MasonryCard src="/calming-interior-design.jpg" alt="Wellness scene" height="h-64" />
              <MasonryCard src="/calming-wellness-imagery.jpg" alt="Mental health" height="h-80" />
              <MasonryCard src="/serene-nature-landscape.png" alt="Personal growth" height="h-72" />
            </motion.div>

            <div className="center-col space-y-8">
              <CenterImage src="/mindful-living-room.jpg" alt="Mindfulness meditation" height="24rem" />
              <MasonryCard src="/peaceful-wellness-background.jpg" alt="Emotional wellbeing" height="h-64" />
            </div>

            <motion.div className="right-col space-y-8" animate={isInView ? { opacity: 0.3, x: 30 } : { opacity: 1, x: 0 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}>
              <MasonryCard src="/peaceful-wellness-background.jpg" alt="Self care" height="h-72" />
              <MasonryCard src="/peaceful-wellness-background.jpg" alt="Personal development" height="h-80" />
              <MasonryCard src="/peaceful-wellness-background.jpg" alt="Mental wellness" height="h-64" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImageGallerySections
