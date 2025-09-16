"use client"
import Image from "next/image"
import { motion } from "framer-motion"

type CardProps = {
    src: string
    alt: string
    isExpanded: boolean
    index: number
}

const Card = ({ src, alt, isExpanded, index }: CardProps) => {
    const expandedWidths = [320, 280, 300, 260]
    const collapsedWidth = 60

    return (
        <motion.div
            className="relative flex-shrink-0 overflow-hidden rounded-2xl shadow-lg"
            initial={{ width: index === 0 ? expandedWidths[0] : collapsedWidth, opacity: 0.7, x: -index * 10 }}
            animate={
                isExpanded
                    ? { width: expandedWidths[index] || 260, opacity: 1, x: 0 }
                    : { width: index === 0 ? expandedWidths[0] : collapsedWidth, opacity: 0.7, x: -index * 10 }
            }
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: index * 0.15 }}
            style={{ height: "420px" }}
        >
            <Image src={src} alt={alt} fill className="object-cover" priority={index === 0} />
        </motion.div>
    )
}

export default Card
