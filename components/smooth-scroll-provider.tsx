"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

interface SmoothScrollProviderProps {
    children: ReactNode;
}

/**
 * SmoothScrollProvider - Wraps the entire app with Lenis smooth scrolling
 * 
 * INTENSITY SETTINGS - Adjust these values to customize the scroll feel:
 * 
 * - duration: Controls how long the scroll animation takes (default: 1.2)
 *   Lower = snappier (0.5-0.8), Higher = smoother/slower (1.5-2.0)
 * 
 * - easing: The easing function for scroll animation
 *   Current uses a custom cubic bezier for smooth deceleration
 *   
 * - lerp: Linear interpolation factor (0-1), affects scroll responsiveness
 *   Lower = smoother but laggier (0.05-0.08)
 *   Higher = snappier but less smooth (0.15-0.2)
 *   Default: 0.1
 * 
 * - wheelMultiplier: How much each scroll wheel tick moves (default: 1)
 *   Lower = slower scroll (0.5-0.8)
 *   Higher = faster scroll (1.2-1.5)
 * 
 * - touchMultiplier: Similar to wheelMultiplier but for touch devices
 * 
 * - smoothWheel: Enable/disable smooth scrolling for mouse wheel
 * 
 * - infinite: Enable infinite scrolling (loops back to start)
 */
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with customizable settings
        const lenis = new Lenis({
            // DURATION - scroll animation duration in seconds
            // Fireart-style uses around 1.0-1.2 for subtle smoothness
            duration: 1.2,

            // EASING - custom easing function
            // This creates a smooth deceleration effect
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

            // LERP - linear interpolation (0.1 = 10% of distance per frame)
            // Lower = smoother, Higher = snappier
            // lerp: 0.1, // Uncomment to use lerp instead of duration

            // ORIENTATION - 'vertical' or 'horizontal'
            orientation: "vertical",

            // GESTURE ORIENTATION - 'vertical', 'horizontal', or 'both'
            gestureOrientation: "vertical",

            // SMOOTH WHEEL - enable smooth scrolling for wheel
            smoothWheel: true,

            // WHEEL MULTIPLIER - scroll speed multiplier
            // 1 = normal, lower = slower, higher = faster
            wheelMultiplier: 1,

            // TOUCH MULTIPLIER - scroll speed for touch devices
            touchMultiplier: 2,

            // INFINITE - loop scrolling
            infinite: false,
        });

        lenisRef.current = lenis;

        // Animation frame loop
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup on unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}

/**
 * HOW TO ADJUST SMOOTH SCROLL INTENSITY:
 * 
 * For SMOOTHER/SLOWER scroll (like Fireart):
 * - Increase duration to 1.5-2.0
 * - Decrease wheelMultiplier to 0.8
 * 
 * For SNAPPIER scroll:
 * - Decrease duration to 0.8-1.0
 * - Increase wheelMultiplier to 1.2
 * 
 * For VERY SMOOTH (heavy smoothing):
 * - Set duration to 2.0+
 * - Use lerp: 0.05 instead of duration
 * 
 * For SUBTLE smoothing (barely noticeable):
 * - Set duration to 0.5-0.8
 * - Set wheelMultiplier to 1.2
 */
