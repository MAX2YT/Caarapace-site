"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface FeatureItem {
    title: string;
    description: string;
    image: string;
    highlights: string[];

}

const features: FeatureItem[] = [
    {
        title: "Executive Dashboard",
        description: "Get a bird's-eye view of your entire construction business. Track ongoing projects, monitor financials, view expense distribution, and stay on top of workforce attendance—all from one powerful dashboard.",
        image: "/cdeck-feature-1.jpg",
        highlights: ["Project Status Overview", "Financial Analytics", "Expense Distribution Charts", "Attendance Tracking"],
    },
    {
        title: "Comprehensive Reporting",
        description: "From sales and payments to progress tracking and inventory—access every report you need in one place. Generate detailed insights across departments without switching between multiple tools.",
        image: "/cdeck-feature-2.jpg",
        highlights: ["Sales & Payment Reports", "Progress & Task Tracking", "Purchase & Expense Analysis", "Materials & Inventory Reports"],
    },
    {
        title: "Project Management",
        description: "Manage all your construction projects with ease. Track progress percentages, monitor project status, handle pending approvals, and access material requests—everything organized in one intuitive interface.",
        image: "/cdeck-feature-3.jpg",
        highlights: ["Real-time Progress Tracking", "Project Status Management", "Pending Approvals Dashboard", "Client & Project Overview"],
    },
    {
        title: "Asset & Material Management",
        description: "Keep your warehouse and materials organized effortlessly. Track cement, sand, bricks, plumbing supplies, and more with detailed category, unit, and location information for complete inventory control.",
        image: "/cdeck-feature-4.jpg",
        highlights: ["Warehouse Inventory", "Material Categorization", "Stock Level Tracking", "Quick Add & Edit"],
    },
    {
        title: "Finance & Party Management",
        description: "Stay on top of your finances with real-time visibility into advances, payments due, receivables, and vendor settlements. Manage all your parties, suppliers, and clients from a single finance hub.",
        image: "/cdeck-feature-5.jpg",
        highlights: ["Advance & Payment Tracking", "Vendor Settlement Status", "Party Balance Management", "Real-time Financial Overview"],
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
                    <div className="absolute inset-0 bg-gradient-to-br from-[#BD0D46]/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500" />
                    <motion.img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Decorative elements */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#BD0D46]/10 rounded-full blur-2xl" />
                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#BD0D46]/5 rounded-full blur-3xl" />
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

export default function AlternatingFeatures() {
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
                        What Makes Us Different
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Everything you need to run your business without the headache. Built for people who have better things to do.
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
