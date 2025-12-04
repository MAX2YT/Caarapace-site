'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import React, { useRef } from 'react';

interface HeroScrollAnimationProps {
    title: string;
    subtitle?: string;
    image: string;
    imageAlt?: string;
}

interface SectionProps {
    scrollYProgress: MotionValue<number>;
    title: string;
    subtitle?: string;
}

interface ImageSectionProps {
    scrollYProgress: MotionValue<number>;
    image: string;
    imageAlt?: string;
    title: string;
}

const HeroSection: React.FC<SectionProps> = ({ scrollYProgress, title, subtitle }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

    return (
        <motion.section
            style={{ scale, rotate }}
            className='sticky font-semibold top-0 h-screen bg-gradient-to-t to-[#f5f5f5] from-[#ffffff] flex flex-col items-center justify-center text-black'
        >
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#BD0F4610_1px,transparent_1px),linear-gradient(to_bottom,#BD0F4610_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='2xl:text-7xl text-5xl md:text-6xl px-8 font-bold text-center tracking-tight leading-[120%] relative z-10'>
                {title}
            </h1>
            {subtitle && (
                <p className='text-lg md:text-xl text-gray-600 mt-6 text-center px-8 max-w-2xl relative z-10'>
                    {subtitle}
                </p>
            )}
            <div className='absolute bottom-10 animate-bounce'>
                <svg className='w-6 h-6 text-[#BD0F46]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
                </svg>
            </div>
        </motion.section>
    );
};

const ImageSection: React.FC<ImageSectionProps> = ({ scrollYProgress, image, imageAlt, title }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    return (
        <motion.section
            style={{ scale, rotate }}
            className='relative h-screen bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white'
        >
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
            <div className='container mx-auto relative z-10 h-full flex flex-col justify-center px-6'>
                <h2 className='text-3xl md:text-5xl leading-[100%] py-6 font-semibold tracking-tight'>
                    {title}
                </h2>
                <div className='relative w-full h-[60vh] rounded-2xl overflow-hidden'>
                    <img
                        src={image}
                        alt={imageAlt || title}
                        className='object-cover w-full h-full rounded-2xl'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl' />
                </div>
            </div>
        </motion.section>
    );
};

export default function HeroScrollAnimation({ title, subtitle, image, imageAlt }: HeroScrollAnimationProps) {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    return (
        <main ref={container} className='relative h-[200vh] bg-white'>
            <HeroSection scrollYProgress={scrollYProgress} title={title} subtitle={subtitle} />
            <ImageSection scrollYProgress={scrollYProgress} image={image} imageAlt={imageAlt} title={title} />
        </main>
    );
}
