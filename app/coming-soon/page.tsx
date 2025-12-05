'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Rocket, Bell } from 'lucide-react';
import Link from 'next/link';

export default function ComingSoonPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-6">
            <div className="max-w-2xl mx-auto text-center">
                {/* Animated Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#BD0D46] to-[#e83a6e] rounded-full flex items-center justify-center shadow-lg shadow-[#BD0D46]/30">
                        <Rocket className="w-12 h-12 text-white" />
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                >
                    Coming Soon
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto"
                >
                    We&apos;re working on something exciting! This page will be available soon.
                </motion.p>

                {/* Decorative Elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center gap-2 mb-10"
                >
                    <div className="w-2 h-2 rounded-full bg-[#BD0D46] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-[#BD0D46] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-[#BD0D46] animate-bounce" style={{ animationDelay: '300ms' }} />
                </motion.div>

                {/* Notification Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 mb-8 max-w-sm mx-auto"
                >
                    <div className="flex items-center justify-center gap-3 text-gray-600">
                        <Bell className="w-5 h-5 text-[#BD0D46]" />
                        <span className="text-sm">Stay tuned for updates!</span>
                    </div>
                </motion.div>

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#BD0D46] hover:text-[#9e0b3c] font-medium transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#BD0D46]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#BD0D46]/5 rounded-full blur-3xl pointer-events-none" />
        </div>
    );
}
