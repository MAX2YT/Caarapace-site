"use client";

import { motion, useAnimationControls, useMotionValue, PanInfo } from "motion/react";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

interface DraggableCarouselProps {
    children: ReactNode[];
    autoScrollSpeed?: number; // pixels per second
    gap?: number;
    className?: string;
}

export function DraggableCarousel({
    children,
    autoScrollSpeed = 30,
    gap = 16,
    className = "",
}: DraggableCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [trackWidth, setTrackWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const x = useMotionValue(0);
    const controls = useAnimationControls();
    const isDragging = useRef(false);
    const animationRef = useRef<number | null>(null);
    const lastTimeRef = useRef<number>(0);

    // Measure track and container widths
    useEffect(() => {
        const measureWidths = () => {
            if (trackRef.current && containerRef.current) {
                // Width of one set of items
                const singleSetWidth = trackRef.current.scrollWidth / 2;
                setTrackWidth(singleSetWidth);
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        measureWidths();
        window.addEventListener("resize", measureWidths);
        return () => window.removeEventListener("resize", measureWidths);
    }, [children]);

    // Auto-scroll animation loop
    const startAutoScroll = useCallback(() => {
        if (animationRef.current) return;

        const animate = (currentTime: number) => {
            if (isDragging.current) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            if (lastTimeRef.current === 0) {
                lastTimeRef.current = currentTime;
            }

            const deltaTime = (currentTime - lastTimeRef.current) / 1000;
            lastTimeRef.current = currentTime;

            const currentX = x.get();
            let newX = currentX - autoScrollSpeed * deltaTime;

            // Loop back when we've scrolled past one set
            if (trackWidth > 0 && Math.abs(newX) >= trackWidth) {
                newX = newX + trackWidth;
            }

            x.set(newX);
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
    }, [autoScrollSpeed, trackWidth, x]);

    const stopAutoScroll = useCallback(() => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
        lastTimeRef.current = 0;
    }, []);

    // Start auto-scroll on mount
    useEffect(() => {
        startAutoScroll();
        return stopAutoScroll;
    }, [startAutoScroll, stopAutoScroll, trackWidth]);

    // Handle drag start
    const handleDragStart = () => {
        isDragging.current = true;
    };

    // Handle drag end
    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        isDragging.current = false;

        // Apply momentum
        const velocity = info.velocity.x;
        const currentX = x.get();
        let targetX = currentX + velocity * 0.3;

        // Keep within bounds (loop if needed)
        if (trackWidth > 0) {
            while (targetX > 0) {
                targetX -= trackWidth;
            }
            while (Math.abs(targetX) >= trackWidth) {
                targetX += trackWidth;
            }
        }

        controls.start({
            x: targetX,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
            },
        });
    };

    // Handle drag to keep position in valid range
    const handleDrag = () => {
        const currentX = x.get();

        if (trackWidth > 0) {
            // Loop position
            if (currentX > 0) {
                x.set(currentX - trackWidth);
            } else if (Math.abs(currentX) >= trackWidth) {
                x.set(currentX + trackWidth);
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden cursor-grab active:cursor-grabbing ${className}`}
        >
            <motion.div
                ref={trackRef}
                drag="x"
                dragConstraints={{ left: -trackWidth, right: 0 }}
                dragElastic={0.1}
                onDragStart={handleDragStart}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                animate={controls}
                className="flex"
                style={{ x, gap: `${gap}px` }}
            >
                {/* First set of items */}
                {children.map((child, i) => (
                    <div key={`set1-${i}`} className="shrink-0">
                        {child}
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {children.map((child, i) => (
                    <div key={`set2-${i}`} className="shrink-0" aria-hidden="true">
                        {child}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
