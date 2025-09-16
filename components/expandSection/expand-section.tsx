"use client"
import { useRef } from "react"
import { useExpandAnimation } from "@/hooks/useExpandAnimation"
import OverlayEdge from "./OverlayEdge"
import OverlayText from "./OverlayText"

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

  useExpandAnimation({ containerRef, borderRef, overlayRef, edgesRefs })

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/serene-outdoor-environment.jpg')" }} />

      <OverlayEdge ref={edgesRefs.left} direction="left" />
      <OverlayEdge ref={edgesRefs.right} direction="right" />
      <OverlayEdge ref={edgesRefs.top} direction="top" />
      <OverlayEdge ref={edgesRefs.bottom} direction="bottom" />

      <div ref={borderRef} className="absolute border-4 border-white rounded-lg"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />

      <div className="w-[400px]" ref={overlayRef}>
        <OverlayText />
      </div>
    </div>
  )
}

export default ExpandSection
