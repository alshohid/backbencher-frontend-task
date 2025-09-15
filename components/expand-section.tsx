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
  const borderRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadGSAP = () => {
      return new Promise<void>((resolve) => {
        if (window.gsap && window.ScrollTrigger) {
          resolve()
          return
        }
        const gsapScript = document.createElement("script")
        gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        gsapScript.onload = () => {
          const scrollTriggerScript = document.createElement("script")
          scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          scrollTriggerScript.onload = () => {
            window.gsap.registerPlugin(window.ScrollTrigger)
            resolve()
          }
          document.head.appendChild(scrollTriggerScript)
        }
        document.head.appendChild(gsapScript)
      })
    }

    const initAnimation = () => {
      if (!containerRef.current || !borderRef.current || !overlayRef.current) return

      const container = containerRef.current
      const border = borderRef.current
      const overlay = overlayRef.current
      const { gsap, ScrollTrigger } = window

      gsap.set(border, {
        width: "200px",
        height: "200px",
      })

      gsap.set(overlay, {
        opacity: 0,
        y: 50,
        scale: 0.9,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom center",
          scrub: 1.2,
          pin: false,
        },
      })

      tl.to(border, {
        width: "90%",
        height: "600px",
        duration: 1,
        ease: "power2.inOut",
      }).to(
        overlay,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
      )

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
    <div ref={containerRef} className="relative h-screen flex items-center justify-center bg-slate-900">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/peaceful-meditation.png')",
        }}
      />

      <div
        ref={borderRef}
        className="absolute border-4 border-white rounded-lg"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div ref={overlayRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-5xl font-bold mb-6 drop-shadow-2xl">Find Peace</h2>
          <p className="text-xl drop-shadow-lg opacity-90 leading-relaxed">
            {"White border expands horizontally on scroll"}
          </p>
          <div className="mt-6 w-16 h-1 bg-white/60 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
