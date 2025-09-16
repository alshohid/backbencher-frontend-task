import { useEffect } from "react"
import { loadGSAP } from "@/lib/utility/gsapLoader"

export function useExpandAnimation({
    containerRef,
    borderRef,
    overlayRef,
    edgesRefs,
}: {
    containerRef: React.RefObject<HTMLDivElement>
    borderRef: React.RefObject<HTMLDivElement>
    overlayRef: React.RefObject<HTMLDivElement>
    edgesRefs: {
        left: React.RefObject<HTMLDivElement>
        right: React.RefObject<HTMLDivElement>
        top: React.RefObject<HTMLDivElement>
        bottom: React.RefObject<HTMLDivElement>
    }
}) {
    useEffect(() => {
        let cleanup: (() => void) | undefined;
        loadGSAP().then(() => {
            if (!containerRef.current || !borderRef.current || !overlayRef.current) return
            const { gsap, ScrollTrigger } = window
            gsap.registerPlugin(ScrollTrigger)
            const { left, right, top, bottom } = edgesRefs

            gsap.set(borderRef.current, { width: "200px", height: "200px" })
            gsap.set(overlayRef.current, { opacity: 0, y: 50, scale: 0.9 })
            gsap.set([left.current, right.current, top.current, bottom.current], { opacity: 0 })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1.2,
                },
            })

            tl.to(borderRef.current, { width: "80%", height: "600px", duration: 1, ease: "power2.inOut" })
                .to(overlayRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" }, "-=0.4")
                .to([left.current, right.current, top.current, bottom.current], { opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2")

            cleanup = () => {
                ScrollTrigger.getAll().forEach((t: any) => t.kill())
            }
        })

        return () => {
            if (cleanup) cleanup()
        }
    }, [])
}