"use client"
 
import { motion,  } from "framer-motion"
import Image from "next/image"

interface CenterImageProps {
    src: string
    alt: string
    height: string
}

const CenterImage = ({ src, alt, height }: CenterImageProps) => {
    

    return (
        <div className="relative">
            <motion.div
                
                className="masonry-card rounded-2xl overflow-hidden transition-transform duration-300"
                style={{ height }}
                
                initial={{ position: "relative", width: "100%", height, borderRadius: "1rem", zIndex: 1 }}
            >
                <Image src={src} alt={alt} fill className="object-cover rounded-2xl" />
            </motion.div>
             
        </div>
    )
}

export default CenterImage
