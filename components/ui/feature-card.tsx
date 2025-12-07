import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

export interface FeatureCardProps {
    icon: LucideIcon
    title: string
    text: string
    className?: string
}

export function FeatureCard({
    icon: Icon,
    title,
    text,
    className
}: FeatureCardProps) {
    return (
        <div
            className={cn(
                "flex flex-col rounded-xl border border-gray-100 shadow-sm",
                "bg-gradient-to-b from-white to-gray-50",
                "p-4 text-start sm:p-6 md:p-8",
                "hover:shadow-lg hover:border-[#BD0F46]/20",
                "min-w-[260px] max-w-[300px] sm:min-w-[300px] sm:max-w-[360px] md:min-w-[340px] md:max-w-[420px]",
                "transition-all duration-300",
                className
            )}
        >
            <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-xl bg-[#BD0F46]/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-[#BD0F46]" />
                </div>
                <h3 className="text-lg font-bold leading-tight text-gray-900">
                    {title}
                </h3>
            </div>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
                {text}
            </p>
        </div>
    )
}
