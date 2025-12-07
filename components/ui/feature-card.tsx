import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
    icon: LucideIcon
    title: string
    text: string
    className?: string
}

export function FeatureCard({ icon: Icon, title, text, className }: FeatureCardProps) {
    return (
        <div className={cn(
            "w-[280px] sm:w-[320px] md:w-[380px] shrink-0 rounded-2xl border border-gray-200/60 bg-white p-5 sm:p-6 md:p-8 shadow-sm transition-all hover:shadow-md hover:border-[#BD0F46]/30",
            className
        )}>
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#BD0F46]/10">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#BD0F46]" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{text}</p>
        </div>
    )
}
