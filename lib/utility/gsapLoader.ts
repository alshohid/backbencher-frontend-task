export const loadGSAP = (): Promise<void> => {
    return new Promise((resolve) => {
        if (window.gsap && window.ScrollTrigger) {
            resolve()
            return
        }

        const gsapScript = document.createElement("script")
        gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        gsapScript.onload = () => {
            const scrollTriggerScript = document.createElement("script")
            scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
            scrollTriggerScript.onload = () => {
                window.gsap.registerPlugin(window.ScrollTrigger)
                resolve()
            }
            document.head.appendChild(scrollTriggerScript)
        }
        document.head.appendChild(gsapScript)
    })
}
