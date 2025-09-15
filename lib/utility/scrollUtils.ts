// utils/scrollUtils.ts

export const calculateScrollProgress = (element: HTMLElement | null) => {
    if (!element) return 0
    const rect = element.getBoundingClientRect()
    return Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
}

export const applyMasonryTransforms = (
    masonrySection: HTMLElement | null
) => {
    if (!masonrySection) return

    const scrollProgress = calculateScrollProgress(masonrySection)

    const leftCards = masonrySection.querySelectorAll(".left-col .masonry-card")
    const rightCards = masonrySection.querySelectorAll(".right-col .masonry-card")
    const centerCards = masonrySection.querySelectorAll(".center-col .masonry-card")

    leftCards.forEach((card, index) => {
        const element = card as HTMLElement
        const delay = index * 0.1
        const translateY = Math.max(0, (1 - scrollProgress - delay) * 100)
        element.style.transform = `translateY(${translateY}px)`
    })

    rightCards.forEach((card, index) => {
        const element = card as HTMLElement
        const delay = index * 0.1
        const translateY = Math.max(0, (1 - scrollProgress - delay) * -100)
        element.style.transform = `translateY(${translateY}px)`
    })

    centerCards.forEach((card, index) => {
        const element = card as HTMLElement
        const delay = index * 0.15
        const scale = Math.min(1, scrollProgress + delay)
        element.style.transform = `scale(${scale})`
    })
}

export const applyExpandScale = (element: HTMLElement | null, scaleFactor = 0.2) => {
    if (!element) return
    const scrollProgress = calculateScrollProgress(element)
    const scaleValue = 1 + scrollProgress * scaleFactor
    element.style.transform = `scale(${scaleValue})`
}
