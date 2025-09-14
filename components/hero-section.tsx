"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"


export function HeroSection() {
  const spinnerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const spinner = spinnerRef.current
    if (!spinner) return

    let rotation = 0
    let animationId: number

    const animate = () => {
      rotation += 0.3 // Reduced rotation speed for better performance
      spinner.style.transform = `rotate(${rotation}deg)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
          Personal Growth
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          <span className="text-balance">Feel more human every day</span>
        </h1>

        <Button asChild size="lg" className="bg-[#c2e593] hover:bg-[#87bf3e] text-gray-900 px-8 py-4 text-lg">
          <Link href="/request-demo">Request demo</Link>
        </Button>
      </div>
 
    </section>
  )
}
