"use client"

import { useEffect, useRef } from "react"


declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
  }
}

export default function ExpandSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadGSAP = () => {
      return new Promise<void>((resolve) => {
        // Check if GSAP is already loaded
        if (window.gsap && window.ScrollTrigger) {
          resolve()
          return
        }

        // Load GSAP from CDN
        const gsapScript = document.createElement("script")
        gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        gsapScript.onload = () => {
          // Load ScrollTrigger after GSAP
          const scrollTriggerScript = document.createElement("script")
          scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          scrollTriggerScript.onload = () => {
            // Register ScrollTrigger plugin
            window.gsap.registerPlugin(window.ScrollTrigger)
            resolve()
          }
          document.head.appendChild(scrollTriggerScript)
        }
        document.head.appendChild(gsapScript)
      })
    }

    const initAnimation = () => {
      if (!containerRef.current || !imageRef.current || !overlayRef.current) return

      const container = containerRef.current
      const image = imageRef.current
      const overlay = overlayRef.current
      const { gsap, ScrollTrigger } = window

      // Initial state - image is cropped
      gsap.set(image, {
        clipPath: "inset(30% 20% 30% 20%)",
        scale: 0.8,
      })

      gsap.set(overlay, {
        opacity: 0,
        y: 50,
      })

      // Create scroll-triggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
          pin: false,
        },
      })

      // Animate image expansion and overlay appearance
      tl.to(image, {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }).to(
        overlay,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3",
      )

      // Return cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
      }
    }

    let cleanup: (() => void) | undefined

    loadGSAP().then(() => {
      cleanup = initAnimation()
    })

    return () => {
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center bg-white">
      <div
        ref={imageRef}
        className="relative w-screen h-screen bg-cover bg-center rounded-lg overflow-hidden"
        style={{
          backgroundImage: "url('/peaceful-meditation.png')",
        }}
      >
        <div ref={overlayRef} className="absolute inset-0 flex items-center justify-center border border-2 border-white ring-2">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">Smooth Animation</h2>
            <p className="text-xl drop-shadow-md">GSAP ScrollTrigger দিয়ে তৈরি</p>
          </div>
        </div>
      </div>
    </div>
  )
}
