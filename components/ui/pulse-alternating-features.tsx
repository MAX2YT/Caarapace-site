"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface FeatureItem {
    title: string;
    description: string;
    image: string;
    highlights: string[];
    ctaText?: string;
    ctaLink?: string;
}

const features: FeatureItem[] = [
    {
        title: "Employee Management System",
        description: "Streamline your HR operations with our comprehensive employee management software. Manage employee data, track departments, monitor job roles, and maintain contact information all in one centralized HR dashboard. Perfect for businesses seeking efficient workforce management solutions.",
        image: "/pulse-employee-management.png",
        highlights: ["Employee Database Management", "HR Dashboard Analytics", "Department Tracking", "Role-Based Access Control"],
        ctaText: "Explore HR Tools",
        ctaLink: "#contact"
    },
    {
        title: "Leave Management & Time Tracking",
        description: "Simplify your leave request workflow with automated leave management system. Track annual leave, sick leave, and parental leave with real-time approval workflows. Our time-off tracking software helps HR managers process requests efficiently and maintain accurate attendance records.",
        image: "/pulse-leave-management.png",
        highlights: ["Automated Leave Requests", "Approval Workflow System", "Leave Balance Tracking", "Attendance Management"],
        ctaText: "View Leave Features",
        ctaLink: "#contact"
    },
    {
        title: "HR Analytics & Reporting Dashboard",
        description: "Make data-driven HR decisions with powerful workforce analytics. Monitor employee satisfaction, track KPIs, and visualize department performance with interactive charts and reports. Our HR analytics platform transforms raw data into actionable business intelligence.",
        image: "/pulse-hr-analytics.png",
        highlights: ["Employee Satisfaction Metrics", "KPI Tracking Dashboard", "Department Analytics", "Custom Report Generation"],
        ctaText: "View Analytics Demo",
        ctaLink: "#contact"
    },
    {
        title: "Smooth Hiring Process",
        description: "Drive employee performance with our comprehensive performance review system. Track new hires, monitor performance reviews progress, and manage pending leave requests from a unified dashboard. Enable continuous feedback and goal tracking for your entire organization.",
        image: "/pulse-performance-tracking.png",
        highlights: ["Performance Review Tracking", "New Hire Onboarding", "Goal Management System", "Real-Time Progress Monitoring"],
        ctaText: "Start Performance Tracking",
        ctaLink: "#contact"
    },
    {
        title: "Workforce Analytics & Employee Engagement",
        description: "Gain deep insights into your workforce with advanced HR metrics. Track employee turnover rates, measure engagement scores, monitor departmental headcount, and analyze recruitment costs. Our workforce planning tools help you build a more engaged and productive team.",
        image: "/pulse-workforce-analytics.png",
        highlights: ["Turnover Rate Analysis", "Employee Engagement Scores", "Recruitment Cost Tracking", "Workforce Planning Tools"],
        ctaText: "Unlock Workforce Insights",
        ctaLink: "#contact"
    },
];

const FeatureSection = ({ feature, index }: { feature: FeatureItem; index: number }) => {
    const isReversed = index % 2 !== 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center py-16 lg:py-24`}
        >
            {/* Image Section */}
            <motion.div
                className="w-full lg:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <motion.img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </div>
            </motion.div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 space-y-6">
                <motion.h3
                    initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl lg:text-4xl font-bold text-gray-900"
                >
                    {feature.title}
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg text-gray-600 leading-relaxed"
                >
                    {feature.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap gap-4"
                >
                    <a
                        href={feature.ctaLink}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#BD0D46] text-[#BD0D46] font-semibold hover:bg-[#BD0D46] hover:text-white transition-all duration-300 group"
                    >
                        {feature.ctaText}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </motion.div>

                {/* Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="grid grid-cols-2 gap-3 pt-4"
                >
                    {feature.highlights.map((highlight, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                            className="flex items-center gap-2 text-gray-700"
                        >
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#BD0D46]/10 flex items-center justify-center">
                                <Check className="w-3 h-3 text-[#BD0D46]" />
                            </div>
                            <span className="text-sm font-medium">{highlight}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default function PulseAlternatingFeatures() {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Complete HR Management Features
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Everything you need to manage your workforce efficiently. From employee onboarding to performance analytics, Pulse EMS delivers enterprise-grade HR solutions for modern businesses.
                    </p>
                </motion.div>

                {/* Features */}
                <div className="divide-y divide-gray-100">
                    {features.map((feature, index) => (
                        <FeatureSection key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
