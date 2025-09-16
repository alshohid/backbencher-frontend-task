"use client"
import { motion } from "framer-motion"

const TextBlock = ({ isExpanded }: { isExpanded: boolean }) => {
    return (
        <motion.div
            className="text-left max-w-lg"
            initial={{ opacity: 1, x: 0 }}
            animate={isExpanded ? { opacity: 0, x: 20, visibility: "hidden" } : { opacity: 1, x: 0, visibility: "visible" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
            <h2 className="text-5xl md:text-6xl font-medium text-slate-800 leading-tight mb-8 text-balance">
                Your mental wellness journey starts now
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
                Discover a path to better mental health through our comprehensive wellness programs. Each step of your journey
                is carefully crafted to support your personal growth and emotional wellbeing.
            </p>
        </motion.div>
    )
}

export default TextBlock
