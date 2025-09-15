"use client"
import { useEffect, useState, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"

interface CenterImageProps {
    src: string
    alt: string
    height: string
}

const CenterImage = ({ src, alt, height }: CenterImageProps) => {
    const centerRef = useRef<HTMLDivElement>(null)
    const controls = useAnimation()
    const isInView = useInView(centerRef, { amount: 0.55 })
    const [showHeader, setShowHeader] = useState(false)

    useEffect(() => {
        let timer: number | undefined
        if (isInView) {
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
        <div className="relative">
            <motion.div
                ref={centerRef}
                className="masonry-card rounded-2xl overflow-hidden transition-transform duration-300"
                style={{ height }}
                animate={controls}
                initial={{ position: "relative", width: "100%", height, borderRadius: "1rem", zIndex: 1 }}
            >
                <Image src={src} alt={alt} fill className="object-cover rounded-2xl" />
            </motion.div>
            {showHeader && <div aria-hidden="true" style={{ height: "100vh", width: "100%" }} />}
        </div>
    )
}

export default CenterImage
