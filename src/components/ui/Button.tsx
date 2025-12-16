import type React from "react"
import { ArrowRight } from "lucide-react"

interface CustomButtonProps {
    children?: React.ReactNode
    fullWidth?: boolean
    className?: string
}

export function Button({children = "Customize Your Outfit", fullWidth = false, className = "",}: CustomButtonProps) {
    return (
        <div className={`space-y-3 ${fullWidth ? "w-full" : ""}`}>
            <button
                className={`bg-[#000033] hover:bg-[#000055] text-white font-medium px-8 py-4 
                rounded-md transition-colors flex items-center justify-center gap-2 ${
                    fullWidth ? "w-full" : "w-full md:w-auto"
                } ${className}`}
            >
                {children}
                <ArrowRight className="w-4 h-4" />
            </button>
        </div>
    )
}
