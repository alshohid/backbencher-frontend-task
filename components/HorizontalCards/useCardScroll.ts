"use client"
import { useEffect, useState } from "react"

export const useCardScroll = (containerRef: React.RefObject<HTMLDivElement>) => {
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight

            const shouldExpand = rect.top < windowHeight * 0.3 && rect.bottom > windowHeight * 0.7
            setIsExpanded(shouldExpand)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [containerRef])

    return isExpanded
}
