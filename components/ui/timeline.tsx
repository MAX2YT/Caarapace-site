"use client";
import {
    useScroll,
    useTransform,
    motion,
    AnimatePresence,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
    image?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    // Update active index based on scroll progress
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (value) => {
            const index = Math.min(
                Math.floor(value * data.length),
                data.length - 1
            );
            setActiveIndex(index);
        });
        return () => unsubscribe();
    }, [scrollYProgress, data.length]);

    return (
        <div
            className="w-full bg-white font-sans"
            ref={containerRef}
            style={{ position: 'relative' }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    {/* Left side - Timeline content */}
                    <div ref={ref} className="relative flex-1 pb-20 px-4 md:px-8">
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0.3 }}
                                animate={{
                                    opacity: activeIndex >= index ? 1 : 0.3,
                                    scale: activeIndex === index ? 1 : 0.98
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex justify-start pt-10 md:pt-32 md:gap-10"
                            >
                                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                                    <motion.div
                                        className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center shadow-lg"
                                        animate={{
                                            scale: activeIndex === index ? 1.2 : 1,
                                            backgroundColor: activeIndex >= index ? "#BD0D46" : "#f3f4f6"
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            className="h-4 w-4 rounded-full"
                                            animate={{
                                                backgroundColor: activeIndex >= index ? "#ffffff" : "#e5e7eb"
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                    <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-gray-400">
                                        {item.title}
                                    </h3>
                                </div>

                                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                                    <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-gray-400">
                                        {item.title}
                                    </h3>
                                    {item.content}
                                </div>
                            </motion.div>
                        ))}

                        {/* Timeline line */}
                        <div
                            style={{
                                height: height + "px",
                            }}
                            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 rounded-full"
                        >
                            <motion.div
                                style={{
                                    height: heightTransform,
                                    opacity: opacityTransform,
                                }}
                                className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-[#BD0D46] via-[#BD0D46] to-[#BD0D46]/50 rounded-full"
                            />
                        </div>
                    </div>

                    {/* Right side - Sticky Image */}
                    <div className="hidden lg:block lg:w-[45%] relative">
                        <div className="sticky top-32 h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <AnimatePresence mode="wait">
                                {data[activeIndex]?.image && (
                                    <motion.img
                                        key={activeIndex}
                                        src={data[activeIndex].image}
                                        alt={data[activeIndex].title}
                                        loading="lazy"
                                        decoding="async"
                                        initial={{ opacity: 0, scale: 1.1, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </AnimatePresence>
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            {/* Step indicator */}
                            <motion.div
                                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                                key={`indicator-${activeIndex}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                            >
                                <span className="text-sm font-semibold text-[#BD0D46]">
                                    {data[activeIndex]?.title}
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
