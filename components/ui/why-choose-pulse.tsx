"use client";

import { cn } from "@/lib/utils"
import { FeatureCard } from "@/components/ui/feature-card"
import { DraggableCarousel } from "@/components/ui/draggable-carousel"
import {
    Users,
    Clock,
    Calendar,
    TrendingUp,
    FileText,
    Bell,
    BarChart3,
    Shield
} from "lucide-react"

const features = [
    {
        icon: Users,
        title: "Employee Management",
        text: "Centralize employee data with comprehensive profiles including personal details, job history, skills, and certifications. Streamline onboarding with automated workflows and digital document signing."
    },
    {
        icon: Clock,
        title: "Time & Attendance",
        text: "Track work hours in real-time with biometric integration, geo-fencing, and mobile check-ins. Automatically calculate overtime, manage shift schedules, and sync with payroll seamlessly."
    },
    {
        icon: Calendar,
        title: "Leave Management",
        text: "Simplify leave requests with self-service portals, automated approval workflows, and real-time balance tracking. Manage multiple leave types and ensure compliance with company policies."
    },
    {
        icon: TrendingUp,
        title: "Performance Analytics",
        text: "Set goals, track KPIs, and conduct 360-degree performance reviews. Generate insights on employee productivity, identify top performers, and make data-driven promotion decisions."
    },
    {
        icon: FileText,
        title: "Payroll Integration",
        text: "Automate salary calculations with attendance data, deductions, and tax computations. Generate payslips, manage reimbursements, and ensure error-free payroll processing every cycle."
    },
    {
        icon: Bell,
        title: "Smart Notifications",
        text: "Keep everyone informed with automated alerts for birthdays, work anniversaries, pending approvals, and policy updates. Customize notification channels for email, SMS, and in-app alerts."
    },
    {
        icon: BarChart3,
        title: "HR Analytics Dashboard",
        text: "Visualize workforce trends with interactive dashboards. Track headcount, attrition rates, diversity metrics, and recruitment pipelines. Export reports for strategic planning and board presentations."
    },
    {
        icon: Shield,
        title: "Compliance & Security",
        text: "Ensure labor law compliance with automated policy enforcement and audit trails. Role-based access control keeps sensitive employee data secure while meeting regulatory requirements."
    }
]

interface WhyChooseSectionProps {
    className?: string
}

export function WhyChoosePulse({ className }: WhyChooseSectionProps) {
    return (
        <section className={cn(
            "bg-gradient-to-b from-[#BD0F46]/5 via-white to-[#BD0F46]/5",
            "py-10 sm:py-16 md:py-24 px-0 my-8 sm:my-12 rounded-2xl sm:rounded-3xl",
            className
        )}>
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:gap-10 md:gap-14">
                <div className="flex flex-col items-center gap-4 px-4 sm:gap-6">
                    <span className="text-base sm:text-lg md:text-xl font-bold text-[#BD0F46] uppercase tracking-widest">
                        Why Choose Pulse
                    </span>
                    <h2 className="max-w-[720px] text-2xl sm:text-3xl md:text-5xl font-bold leading-tight sm:leading-tight text-gray-900">
                        HR Management Made Simple
                    </h2>
                    <p className="text-lg max-w-[650px] text-gray-600 sm:text-xl text-center">
                        Comprehensive HR solution designed to streamline employee management, boost productivity, and drive workforce excellence
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-2 sm:py-4">
                    <DraggableCarousel
                        autoScrollSpeed={40}
                        gap={16}
                        className="w-full p-2 sm:p-4"
                    >
                        {features.map((feature, i) => (
                            <FeatureCard
                                key={i}
                                icon={feature.icon}
                                title={feature.title}
                                text={feature.text}
                            />
                        ))}
                    </DraggableCarousel>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-1/4 bg-gradient-to-r from-[#BD0F46]/5" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-1/4 bg-gradient-to-l from-[#BD0F46]/5" />
                </div>
            </div>
        </section>
    )
}
