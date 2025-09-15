

import { images } from "@/lib/utility/heroUtils"
import Image from "next/image"


export function HeroGallery() {
  return (
    <div className="w-full px-6 pb-8 ">
      <div className="flex gap-4 items-center  overflow-x-auto scrollbar-hide">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-32 rounded-2xl overflow-hidden relative"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 384px"
              priority={index < 2}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
