'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import React, { useRef } from 'react';
import { HeroHighlight, Highlight } from './hero-highlight';
import { ArrowRight } from 'lucide-react';

interface ProductHeroScrollAnimationProps {
    // Hero section props
    heroTitle: string;
    heroTagline: string;
    heroHighlightedText: string;
    // Product intro section props
    logo?: string;
    sectionLabel: string;
    headline: string;
    highlightedText: string;
    index: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    image: string;
    imageAlt?: string;
}

interface HeroSectionProps {
    scrollYProgress: MotionValue<number>;
    title: string;
    tagline: string;
    highlightedText: string;
}

interface ProductIntroSectionAnimatedProps {
    scrollYProgress: MotionValue<number>;
    logo?: string;
    sectionLabel: string;
    headline: string;
    highlightedText: string;
    index: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    image: string;
    imageAlt?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollYProgress, title, tagline, highlightedText }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

    return (
        <motion.div
            style={{ scale, rotate }}
            className='sticky top-0 h-screen'
        >
            <HeroHighlight containerClassName="h-screen">
                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: [20, -5, 0] }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed"
                    >
                        {tagline}{" "}
                        <Highlight>{highlightedText}</Highlight>
                    </motion.p>
                </div>
            </HeroHighlight>
        </motion.div>
    );
};

const ProductIntroSectionAnimated: React.FC<ProductIntroSectionAnimatedProps> = ({
    scrollYProgress,
    logo,
    sectionLabel,
    headline,
    highlightedText,
    index,
    description,
    ctaText,
    ctaLink,
    image,
    imageAlt,
}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    return (
        <motion.section
            style={{ scale, rotate }}
            className="relative min-h-screen bg-[#FAF8F5] overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#BD0F4608_1px,transparent_1px),linear-gradient(to_bottom,#BD0F4608_1px,transparent_1px)] bg-[size:64px_64px]"></div>

            <div className="container mx-auto relative z-10 h-full min-h-screen px-6 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16 h-full min-h-[70vh]">
                    {/* Left Content Side */}
                    <div className="flex-1 flex flex-col justify-center">
                        {/* Logo - Only render if provided */}
                        {logo && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="mb-8"
                            >
                                <img
                                    src={logo}
                                    alt={`${sectionLabel} logo`}
                                    className="h-16 w-auto object-contain"
                                />
                            </motion.div>
                        )}

                        {/* Section Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex items-center gap-2 mb-6"
                        >
                            <span className="w-2 h-2 bg-[#BD0F46] rounded-full"></span>
                            <span className="text-sm font-medium tracking-wider text-gray-600 uppercase">
                                {sectionLabel}
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-8"
                        >
                            {headline}
                            <br />
                            <span className="font-normal text-gray-900">
                                {highlightedText}
                            </span>
                        </motion.h2>

                        {/* Description with Index */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mb-8 max-w-lg"
                        >
                            <div className="flex gap-4">
                                <span className="text-sm text-gray-400 font-medium mt-1">
                                    {index}
                                </span>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        </motion.div>

                        {/* CTA Link */}
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            href={ctaLink}
                            className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-[#BD0F46] transition-colors group"
                        >
                            {ctaText}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </div>

                    {/* Right Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex-1 relative min-h-[400px] lg:min-h-full"
                    >
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                            <img
                                src={image}
                                alt={imageAlt || headline}
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient overlay for visual depth */}
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#FAF8F5]/30"></div>
                            {/* Subtle color tint overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#BD0F46]/5 to-transparent mix-blend-overlay"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default function ProductHeroScrollAnimation({
    heroTitle,
    heroTagline,
    heroHighlightedText,
    logo,
    sectionLabel,
    headline,
    highlightedText,
    index,
    description,
    ctaText,
    ctaLink,
    image,
    imageAlt,
}: ProductHeroScrollAnimationProps) {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    return (
        <main ref={container} className='relative h-[200vh] bg-white'>
            <HeroSection
                scrollYProgress={scrollYProgress}
                title={heroTitle}
                tagline={heroTagline}
                highlightedText={heroHighlightedText}
            />
            <ProductIntroSectionAnimated
                scrollYProgress={scrollYProgress}
                logo={logo}
                sectionLabel={sectionLabel}
                headline={headline}
                highlightedText={highlightedText}
                index={index}
                description={description}
                ctaText={ctaText}
                ctaLink={ctaLink}
                image={image}
                imageAlt={imageAlt}
            />
        </main>
    );
}
