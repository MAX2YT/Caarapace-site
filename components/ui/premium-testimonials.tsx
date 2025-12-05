"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import CountUp from '@/components/ui/count-up';
import RollingCounter from '@/components/ui/rolling-counter';

const testimonials = [
    {
        name: "Arun Sankar",
        role: "CEO @ TechFlow Solutions",
        company: "TechFlow",
        initials: "AK",
        rating: 5,
        text: "Caarapace literally transformed our whole vibe. 300% more efficient, saved us $2M, and the automation runs 24/7. No cap, it's insane!",
        results: ["300% efficiency boost", "$2M saved", "Always on 24/7"]
    },
    {
        name: "Priya Sundaram",
        role: "CTO @ DataDrive Inc",
        company: "DataDrive",
        initials: "PS",
        rating: 5,
        text: "Their dev team hits different fr fr. Customer satisfaction went up 40% and we respond in seconds now instead of hours. The ROI is bussin!",
        results: ["40% happier users", "Instant responses", "Smooth integration"]
    },
    {
        name: "Kavitha Rajan",
        role: "VP Operations @ ScaleUp Co",
        company: "ScaleUp",
        initials: "KR",
        rating: 5,
        text: "From automation to social media, they handle everything. Our squad can finally focus on the real strategy stuff instead of boring tasks. It's giving main character energy!",
        results: ["Full automation", "Strategy focus", "Team productivity"]
    },
    {
        name: "Senthil Kumar",
        role: "Founder @ GrowthLab",
        company: "GrowthLab",
        initials: "SK",
        rating: 5,
        text: "These custom systems are lowkey goated. Revenue went up 150% and overhead dropped big time. They understood the assignment fr!",
        results: ["150% revenue growth", "Lower overhead", "Scalable systems"]
    },
    {
        name: "Lakshmi Venkat",
        role: "Director @ InnovateCorp",
        company: "InnovateCorp",
        initials: "LV",
        rating: 5,
        text: "Exceptional solutions that actually slap. Implementation was smooth af, results were immediate. Best investment we've ever made, period!",
        results: ["Immediate results", "Smooth vibes", "High ROI"]
    }
];

export function PremiumTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
        })
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.23, 0.86, 0.39, 0.96] as [number, number, number, number]
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
            {/* Light Background Effects */}
            <div className="absolute inset-0">
                {/* Animated gradient mesh */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#BD0F46]/[0.03] via-[#BD0F46]/[0.02] to-[#BD0F46]/[0.03]"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        backgroundSize: '400% 400%'
                    }}
                />

                {/* Moving light orbs */}
                <motion.div
                    className="absolute top-1/3 left-1/5 w-72 h-72 bg-[#BD0F46]/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, 150, 0],
                        y: [0, 80, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-[#BD0F46]/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -60, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-[#BD0F46]/20 rounded-full"
                        style={{
                            left: `${15 + (i * 10)}%`,
                            top: `${25 + (i * 7)}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.4,
                        }}
                    />
                ))}
            </div>

            <motion.div
                ref={containerRef}
                className="relative z-10 max-w-7xl mx-auto px-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={fadeInUp}
                >
                    <motion.div
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#BD0F46]/5 border border-[#BD0F46]/20 backdrop-blur-sm mb-6"
                        whileHover={{ scale: 1.05, borderColor: "rgba(189, 15, 70, 0.4)" }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="h-4 w-4 text-[#BD0F46]" />
                        </motion.div>
                        <span className="text-sm font-medium text-gray-700">
                            Client Success Stories
                        </span>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </motion.div>

                    <motion.h2
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
                        variants={fadeInUp}
                    >
                        <span className="text-gray-900">
                            The Hype is
                        </span>
                        <br />
                        <motion.span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-[#BD0F46] via-[#BD0F46] to-[#BD0F46]"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{
                                backgroundSize: '200% 200%'
                            }}
                        >
                            100% Real
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        variants={fadeInUp}
                    >
                        Don&apos;t just take our word for it — peep what the real ones are saying about working with us.
                    </motion.p>
                </motion.div>

                {/* Main Testimonial Display */}
                <div className="relative max-w-5xl mx-auto mb-12">
                    <div className="relative h-[480px] md:h-[380px]">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.4 },
                                    scale: { duration: 0.4 },
                                }}
                                className="absolute inset-0"
                            >
                                <div className="relative h-full bg-white backdrop-blur-xl rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/50 p-6 md:p-10 overflow-hidden group">
                                    {/* Animated background gradient */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-[#BD0F46]/[0.02] via-transparent to-[#BD0F46]/[0.02] rounded-3xl"
                                        animate={{
                                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                                        }}
                                        transition={{
                                            duration: 15,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        style={{
                                            backgroundSize: '300% 300%'
                                        }}
                                    />

                                    {/* Quote icon */}
                                    <motion.div
                                        className="absolute top-6 right-6 opacity-10"
                                        animate={{ rotate: [0, 10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    >
                                        <Quote className="w-16 h-16 text-[#BD0F46]" />
                                    </motion.div>

                                    <div className="relative z-10 h-full flex flex-col md:flex-row items-center gap-6 md:gap-10">
                                        {/* User Info */}
                                        <div className="flex-shrink-0 text-center md:text-left">
                                            <motion.div
                                                className="relative mb-4"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="w-20 h-20 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-[#BD0F46]/20 relative bg-gradient-to-br from-[#BD0F46] to-[#BD0F46]/80 flex items-center justify-center">
                                                    <span className="text-white text-2xl font-bold">
                                                        {testimonials[currentIndex].initials}
                                                    </span>
                                                    <motion.div
                                                        className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/10"
                                                        animate={{ opacity: [0, 0.3, 0] }}
                                                        transition={{ duration: 3, repeat: Infinity }}
                                                    />
                                                </div>

                                                {/* Floating ring animation */}
                                                <motion.div
                                                    className="absolute inset-0 border-2 border-[#BD0F46]/20 rounded-full"
                                                    animate={{
                                                        scale: [1, 1.4, 1],
                                                        opacity: [0.5, 0, 0.5]
                                                    }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                />
                                            </motion.div>

                                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                {testimonials[currentIndex].name}
                                            </h3>
                                            <p className="text-[#BD0F46] text-sm font-medium mb-1">
                                                {testimonials[currentIndex].role}
                                            </p>

                                            {/* Star Rating */}
                                            <div className="flex justify-center md:justify-start gap-1 mt-3">
                                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: i * 0.1, duration: 0.3 }}
                                                    >
                                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <motion.blockquote
                                                className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.3, duration: 0.8 }}
                                            >
                                                "{testimonials[currentIndex].text}"
                                            </motion.blockquote>

                                            {/* Results */}
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                {testimonials[currentIndex].results.map((result, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="bg-gray-50 rounded-xl p-3 border border-gray-100"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                                                        whileHover={{ backgroundColor: "#BD0F4608", borderColor: "#BD0F4620" }}
                                                    >
                                                        <span className="text-sm text-gray-700 font-medium">
                                                            {result}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center gap-6 mt-8">
                        <motion.button
                            onClick={prevTestimonial}
                            className="p-3 rounded-full bg-white border border-gray-200 shadow-lg text-gray-600 hover:bg-gray-50 hover:border-[#BD0F46]/30 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </motion.button>

                        {/* Dots Indicator */}
                        <div className="flex gap-3">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-[#BD0F46] scale-125'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>

                        <motion.button
                            onClick={nextTestimonial}
                            className="p-3 rounded-full bg-white border border-gray-200 shadow-lg text-gray-600 hover:bg-gray-50 hover:border-[#BD0F46]/30 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>

                {/* Stats Section */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                    variants={staggerContainer}
                >
                    {/* Happy Clients - Rolling Counter */}
                    <motion.div
                        className="text-center p-4 rounded-2xl bg-white border border-gray-100 shadow-sm group hover:shadow-lg hover:border-[#BD0F46]/20 transition-all"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <div className="text-2xl md:text-3xl font-bold mb-1 flex items-center justify-center">
                            <RollingCounter
                                value={500}
                                fontSize={28}
                                places={[100, 10, 1]}
                                suffix="+"
                            />
                        </div>
                        <div className="text-gray-600 text-sm font-medium">
                            Happy Clients
                        </div>
                    </motion.div>

                    {/* Satisfaction Rate - CountUp */}
                    <motion.div
                        className="text-center p-4 rounded-2xl bg-white border border-gray-100 shadow-sm group hover:shadow-lg hover:border-[#BD0F46]/20 transition-all"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#BD0F46] to-[#BD0F46] bg-clip-text text-transparent mb-1">
                            <CountUp
                                to={100}
                                from={0}
                                duration={2.5}
                                suffix="%"
                                className="bg-gradient-to-r from-[#BD0F46] to-[#BD0F46] bg-clip-text text-transparent"
                            />
                        </div>
                        <div className="text-gray-600 text-sm font-medium">
                            Satisfaction Rate
                        </div>
                    </motion.div>

                    {/* Client Savings - Rolling Counter */}
                    <motion.div
                        className="text-center p-4 rounded-2xl bg-white border border-gray-100 shadow-sm group hover:shadow-lg hover:border-[#BD0F46]/20 transition-all"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <div className="text-2xl md:text-3xl font-bold mb-1 flex items-center justify-center">
                            <RollingCounter
                                value={10}
                                fontSize={28}
                                places={[10, 1]}
                                prefix="$"
                                suffix="M+"
                            />
                        </div>
                        <div className="text-gray-600 text-sm font-medium">
                            Client Savings
                        </div>
                    </motion.div>

                    {/* Uptime SLA - CountUp */}
                    <motion.div
                        className="text-center p-4 rounded-2xl bg-white border border-gray-100 shadow-sm group hover:shadow-lg hover:border-[#BD0F46]/20 transition-all"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#BD0F46] to-[#BD0F46] bg-clip-text text-transparent mb-1">
                            <CountUp
                                to={100}
                                from={0}
                                duration={2.5}
                                suffix="%"
                                className="bg-gradient-to-r from-[#BD0F46] to-[#BD0F46] bg-clip-text text-transparent"
                            />
                        </div>
                        <div className="text-gray-600 text-sm font-medium">
                            Uptime SLA
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

