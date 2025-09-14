// Local module declarations for GSAP ScrollTrigger variants used by dynamic imports
// Prevents TypeScript errors about missing declaration files during development.

declare module 'gsap/ScrollTrigger' {
  const ScrollTrigger: any
  export { ScrollTrigger }
  export default ScrollTrigger
}

declare module 'gsap/dist/ScrollTrigger' {
  const ScrollTrigger: any
  export { ScrollTrigger }
  export default ScrollTrigger
}

declare module 'gsap/dist/ScrollTrigger.js' {
  const ScrollTrigger: any
  export { ScrollTrigger }
  export default ScrollTrigger
}
