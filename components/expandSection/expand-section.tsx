"use client"

import { useEffect, useRef } from "react"
import OverlayEdge from "./OverlayEdge"
import OverlayText from "./OverlayText"
import { loadGSAP } from "@/lib/utility/gsapLoader"


declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
  }
}

const ExpandSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const borderRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const edgesRefs = {
    left: useRef<HTMLDivElement>(null),
    right: useRef<HTMLDivElement>(null),
    top: useRef<HTMLDivElement>(null),
    bottom: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    let cleanup: (() => void) | undefined

    loadGSAP().then(() => {
      if (!containerRef.current || !borderRef.current || !overlayRef.current) return

      const { gsap, ScrollTrigger } = window
      const { left, right, top, bottom } = edgesRefs


      gsap.set(borderRef.current, { width: "200px", height: "200px" })
      gsap.set(overlayRef.current, { opacity: 0, y: 50, scale: 0.9 })
      gsap.set([left.current, right.current, top.current, bottom.current], { opacity: 0 })


      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1.2,
          pin: false,
        },
      })

      tl.to(borderRef.current, { width: "80%", height: "600px", duration: 1, ease: "power2.inOut" })
        .to(overlayRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" }, "-=0.4")
        .to(
          [left.current, right.current, top.current, bottom.current],
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        )

      cleanup = () => {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
      }
    })

    return () => {
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">

      <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/serene-outdoor-environment.jpg')" }} />

      <OverlayEdge ref={edgesRefs.left} direction="left" />
      <OverlayEdge ref={edgesRefs.right} direction="right" />
      <OverlayEdge ref={edgesRefs.top} direction="top" />
      <OverlayEdge ref={edgesRefs.bottom} direction="bottom" />

      <div ref={borderRef} className="absolute border-4 border-white rounded-lg" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />

      <div className=" w-[280px] md:w-[400px]" ref={overlayRef}>
        <OverlayText />
      </div>
    </div>
  )
}

export default ExpandSection
