import React from "react"

const OverlayText: React.FC = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-start text-white bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                    Personal Growth
                </div>
                <p className="drop-shadow-lg text-black font-bold text-2xl opacity-90 leading-relaxed">
                    Feel more human every day
                </p>
                <div className="mt-6 w-16 h-1 bg-white/60 mx-auto rounded-full"></div>
            </div>
        </div>
    )
}

export default OverlayText
