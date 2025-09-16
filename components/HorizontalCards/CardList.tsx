"use client"
import { cardImages } from "@/lib/utility/heroUtils"
import Card from "./Card"

const CardList = ({ isExpanded }: { isExpanded: boolean }) => {
    return (
        <div className="flex space-x-4">
            {cardImages.map((image, index) => (
                <Card key={index} src={image.src} alt={image.alt} isExpanded={isExpanded} index={index} />
            ))}
        </div>
    )
}

export default CardList
