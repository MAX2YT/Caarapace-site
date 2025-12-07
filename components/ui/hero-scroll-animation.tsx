'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import React, { useRef } from 'react';
import { HeroHighlight, Highlight } from './hero-highlight';

interface HeroScrollAnimationProps {
    title: string;
    tagline: string;
    highlightedText: string;
    image: string;
    imageAlt?: string;
}

interface HeroSectionProps {
    scrollYProgress: MotionValue<number>;
    title: string;
    tagline: string;
    highlightedText: string;
}

interface ImageSectionProps {
    scrollYProgress: MotionValue<number>;
    image: string;
    imageAlt?: string;
    title: string;
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
                        <span className="block text-center mt-2 md:inline md:mt-0">
                            <Highlight>{highlightedText}</Highlight>
                        </span>
                    </motion.p>
                </div>
            </HeroHighlight>
        </motion.div>
    );
};

const ImageSection: React.FC<ImageSectionProps> = ({ scrollYProgress, image, imageAlt, title }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    return (
        <motion.section
            style={{ scale, rotate }}
            className='relative h-screen bg-gradient-to-t to-[#f5f5f5] from-white text-gray-900'
        >
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#BD0F4615_1px,transparent_1px),linear-gradient(to_bottom,#BD0F4615_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
            <div className='container mx-auto relative z-10 h-full flex flex-col justify-center px-6'>
                <h2 className='text-3xl md:text-5xl leading-[100%] py-6 font-semibold tracking-tight text-gray-900'>
                    {title}
                </h2>
                <div className='relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-2xl'>
                    <img
                        src={image}
                        alt={imageAlt || title}
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        className='object-cover w-full h-full rounded-2xl'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-[#BD0F46]/20 to-transparent rounded-2xl' />
                </div>
            </div>
        </motion.section>
    );
};

export default function HeroScrollAnimation({ title, tagline, highlightedText, image, imageAlt }: HeroScrollAnimationProps) {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    return (
        <main ref={container} style={{ position: 'relative' }} className='h-[200vh] bg-white'>
            <HeroSection
                scrollYProgress={scrollYProgress}
                title={title}
                tagline={tagline}
                highlightedText={highlightedText}
            />
            <ImageSection
                scrollYProgress={scrollYProgress}
                image={image}
                imageAlt={imageAlt}
                title={title}
            />
        </main>
    );
}
