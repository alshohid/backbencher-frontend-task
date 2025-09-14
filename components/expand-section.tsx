"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function ExpandSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExpanded(true)
        }
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-100 to-blue-100 min-h-[600px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/peaceful-meditation.png"
              alt=""
              width={1200}
              height={600}
              className={`w-full h-full object-cover transition-transform duration-1000 ${
                isExpanded ? "scale-100" : "scale-110"
              }`}
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-center px-8">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
              Personal Growth
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">Feel more human every day</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
