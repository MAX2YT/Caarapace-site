'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface AnimatedHeroProps {
    leftText: string;
    rightText: string;
    centralImage: string;
    bottomImages: { src: string; alt: string; label?: string }[];
    subtitle?: string;
    darkMode?: boolean;
}

export default function AnimatedHero({
    leftText,
    rightText,
    centralImage,
    bottomImages,
    subtitle,
    darkMode = true,
}: AnimatedHeroProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger animations after component mounts
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const centralImageVariants = {
        hidden: { y: 100, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as any, // Custom easing
            },
        },
    };

    const bottomImageVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.3 + i * 0.15, // Staggered delay
                duration: 0.6,
                ease: 'easeOut' as any,
            },
        }),
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut' as any,
            },
        },
    };

    return (
        <div
            className={`relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden ${darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-white text-slate-900'
                }`}
        >
            {/* Subtitle at top */}
            {subtitle && (
                <motion.p
                    initial="hidden"
                    animate={isLoaded ? 'visible' : 'hidden'}
                    variants={textVariants}
                    className="absolute top-24 left-8 md:left-16 text-sm md:text-base text-gray-400 max-w-xs"
                >
                    {subtitle}
                </motion.p>
            )}

            {/* Main Split Text Layout */}
            <div className="relative w-full max-w-[90rem] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
                    {/* Left Text */}
                    <motion.h1
                        initial="hidden"
                        animate={isLoaded ? 'visible' : 'hidden'}
                        variants={textVariants}
                        className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-right"
                    >
                        {leftText}
                    </motion.h1>

                    {/* Central Image */}
                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? 'visible' : 'hidden'}
                        variants={centralImageVariants}
                        className="relative w-full lg:w-[400px] xl:w-[500px] h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl"
                    >
                        <Image
                            src={centralImage}
                            alt="Hero central image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Right Text */}
                    <motion.h1
                        initial="hidden"
                        animate={isLoaded ? 'visible' : 'hidden'}
                        variants={textVariants}
                        className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-left"
                    >
                        {rightText}
                    </motion.h1>
                </div>
            </div>

            {/* Bottom Gallery Images */}
            <div className="absolute bottom-12 left-0 right-0 w-full">
                <div className="max-w-[90rem] mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {bottomImages.slice(0, 3).map((image, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                initial="hidden"
                                animate={isLoaded ? 'visible' : 'hidden'}
                                variants={bottomImageVariants}
                                className="relative group"
                            >
                                <div className="relative w-full h-[160px] md:h-[200px] rounded-lg overflow-hidden shadow-xl">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay with label */}
                                    {image.label && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                                            <p className="text-white text-sm md:text-base font-medium">
                                                {image.label}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation arrows (optional, like in reference) */}
            <div className="absolute bottom-12 right-8 md:right-16 flex gap-4">
                <button
                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                    aria-label="Previous"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                    aria-label="Next"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
