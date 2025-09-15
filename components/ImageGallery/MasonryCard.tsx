"use client"
import Image from "next/image"

interface MasonryCardProps {
  src: string
  alt: string
  height: string
}

const MasonryCard = ({ src, alt, height }: MasonryCardProps) => {
  return (
    <div className={`masonry-card relative ${height} rounded-2xl overflow-hidden transition-transform duration-300`}>
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover rounded-2xl" />
    </div>
  )
}

export default MasonryCard
