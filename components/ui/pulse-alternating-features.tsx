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
        title: "Track Everything, Miss Nothing",
        description: "Real-time monitoring that actually keeps up with you. Live dashboards, instant updates, zero lag. Know what's happening the moment it happens—no cap.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        highlights: ["Live data stream", "Custom dashboards", "Instant updates", "Zero downtime"],
        ctaText: "See It Live",
        ctaLink: "#contact"
    },
    {
        title: "Numbers That Actually Slap",
        description: "Analytics that hit different. Spot trends before they're trends, predict growth like a pro, and make decisions that aren't just vibes—they're backed by data.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        highlights: ["Trend spotting", "Growth forecasting", "Smart insights", "One-click reports"],
        ctaText: "Check The Stats",
        ctaLink: "#contact"
    },
    {
        title: "Squad Goals, Literally",
        description: "Keep your whole team in sync without the chaos. Shared views, real-time collab, and everyone on the same page. No more 'I didn't see that message' energy.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
        highlights: ["Shared workspaces", "Real-time sync", "Team insights", "Role-based views"],
        ctaText: "Bring The Team",
        ctaLink: "#contact"
    },
    {
        title: "Stay Woke on Your Metrics",
        description: "Smart alerts that actually matter. Get pinged when something's off, celebrate wins automatically, and never miss a beat. It's like having a sixth sense for your business.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
        highlights: ["Smart notifications", "Custom triggers", "Milestone alerts", "Priority inbox"],
        ctaText: "Set It Up",
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
                        Why Pulse Hits Different
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Real-time analytics that actually make sense. Built for teams who'd rather make moves than dig through spreadsheets.
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
