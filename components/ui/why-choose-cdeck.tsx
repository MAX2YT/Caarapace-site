import { cn } from "@/lib/utils"
import { FeatureCard } from "@/components/ui/feature-card"
import {
    Building2,
    ClipboardList,
    TrendingUp,
    Users,
    Wallet,
    Calendar,
    BarChart3,
    Shield
} from "lucide-react"

const features = [
    {
        icon: Building2,
        title: "Project Management",
        text: "Track multiple construction projects simultaneously with real-time progress updates, milestone tracking, and automated status reports. Monitor deadlines, dependencies, and deliverables all in one centralized dashboard."
    },
    {
        icon: ClipboardList,
        title: "Resource Allocation",
        text: "Efficiently manage materials, equipment, and workforce across all your construction sites. Optimize utilization rates, prevent double-booking, and ensure the right resources are at the right place at the right time."
    },
    {
        icon: TrendingUp,
        title: "Cost Estimation",
        text: "Generate accurate cost projections with historical data analysis. Track budgets in real-time, identify cost overruns early, and make data-driven decisions to keep your projects profitable and on schedule."
    },
    {
        icon: Users,
        title: "Contractor Management",
        text: "Streamline subcontractor coordination from onboarding to payment. Manage contracts, track work progress, handle compliance documentation, and maintain a database of trusted vendors for future projects."
    },
    {
        icon: Wallet,
        title: "Financial Control",
        text: "Gain complete visibility into project finances with integrated invoicing, payment tracking, and cash flow forecasting. Automate billing cycles and maintain accurate financial records for every project phase."
    },
    {
        icon: Calendar,
        title: "Timeline Planning",
        text: "Create detailed project schedules with interactive Gantt charts. Set dependencies, allocate resources, and receive alerts for potential delays. Adjust timelines dynamically as project conditions change."
    },
    {
        icon: BarChart3,
        title: "Analytics & Reports",
        text: "Transform raw data into actionable insights with customizable dashboards and reports. Analyze performance trends, identify bottlenecks, and make informed decisions to continuously improve operations."
    },
    {
        icon: Shield,
        title: "Compliance & Safety",
        text: "Maintain regulatory compliance with built-in safety checklists, incident reporting, and audit trails. Track certifications, manage safety training records, and ensure every site meets industry standards."
    }
]

interface WhyChooseSectionProps {
    className?: string
}

export function WhyChooseCDeck({ className }: WhyChooseSectionProps) {
    return (
        <section className={cn(
            "bg-gradient-to-b from-[#BD0F46]/5 via-white to-[#BD0F46]/5",
            "py-10 sm:py-16 md:py-24 px-0 my-8 sm:my-12 rounded-2xl sm:rounded-3xl",
            className
        )}>
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:gap-10 md:gap-14">
                <div className="flex flex-col items-center gap-4 px-4 sm:gap-6">
                    <span className="text-base sm:text-lg md:text-xl font-bold text-[#BD0F46] uppercase tracking-widest">
                        Why Choose C-Deck
                    </span>
                    <h2 className="max-w-[720px] text-2xl sm:text-3xl md:text-5xl font-bold leading-tight sm:leading-tight text-gray-900">
                        Built for Construction Excellence
                    </h2>
                    <p className="text-lg max-w-[650px] text-gray-600 sm:text-xl text-center">
                        Purpose-built ERP solution designed specifically for the construction industry's unique challenges
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-2 sm:py-4">
                    <div className="flex overflow-hidden p-2 sm:p-4 [--gap:0.75rem] sm:[--gap:1rem] md:[--gap:1.5rem] [gap:var(--gap)] flex-row">
                        <div className="flex shrink-0 [gap:var(--gap)] animate-marquee-slow flex-row">
                            {features.map((feature, i) => (
                                <FeatureCard
                                    key={`set1-${i}`}
                                    icon={feature.icon}
                                    title={feature.title}
                                    text={feature.text}
                                />
                            ))}
                        </div>
                        <div className="flex shrink-0 [gap:var(--gap)] animate-marquee-slow flex-row" aria-hidden="true">
                            {features.map((feature, i) => (
                                <FeatureCard
                                    key={`set2-${i}`}
                                    icon={feature.icon}
                                    title={feature.title}
                                    text={feature.text}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-1/4 bg-gradient-to-r from-[#BD0F46]/5" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-1/4 bg-gradient-to-l from-[#BD0F46]/5" />
                </div>
            </div>
        </section>
    )
}
