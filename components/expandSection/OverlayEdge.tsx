
import React from "react"

interface OverlayEdgeProps {
    direction: "left" | "right" | "top" | "bottom"
    className?: string
    style?: React.CSSProperties
}

const OverlayEdge = React.forwardRef<HTMLDivElement, OverlayEdgeProps>(
    ({ direction, className, style }, ref) => {
        const baseStyle: React.CSSProperties = {
            position: "absolute",
            background: "white",
        }

        switch (direction) {
            case "left":
                Object.assign(baseStyle, { top: 0, left: 0, height: "100%", width: "10%" })
                break
            case "right":
                Object.assign(baseStyle, { top: 0, right: 0, height: "100%", width: "10%" })
                break
            case "top":
                Object.assign(baseStyle, { top: 0, left: 0, width: "100%", height: "30%" })
                break
            case "bottom":
                Object.assign(baseStyle, { bottom: 0, left: 0, width: "100%", height: "30%" })
                break
        }

        return <div ref={ref} className={className} style={{ ...baseStyle, ...style }} />
    }
)

export default OverlayEdge
