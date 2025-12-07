"use client";

import { ReactNode, useEffect, createContext, useContext, useState, useCallback } from "react";
import Lenis from "lenis";

// Create context for Lenis instance
const LenisContext = createContext<Lenis | null>(null);

// Hook to access Lenis instance
export function useLenis() {
    return useContext(LenisContext);
}

interface SmoothScrollProviderProps {
    children: ReactNode;
}

/**
 * SmoothScrollProvider - Clean implementation of Lenis smooth scrolling
 * 
 * Features:
 * - Smooth, buttery scroll animation
 * - Automatic resize handling
 * - Recovery on tab switch/focus
 * - Mobile-friendly touch support
 */
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with stable, tested settings
        const lenisInstance = new Lenis({
            // Smooth animation duration
            duration: 1.0,

            // Easing for natural feel
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

            // Scroll direction
            orientation: "vertical",
            gestureOrientation: "vertical",

            // Enable smooth scrolling
            smoothWheel: true,

            // Scroll speed - balanced for usability
            wheelMultiplier: 1.2,
            touchMultiplier: 1.5,

            // Auto handle resize
            autoResize: true,
        });

        setLenis(lenisInstance);

        // RAF loop for smooth animation
        let rafId: number;
        function raf(time: number) {
            lenisInstance.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        // Handle tab visibility change
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                lenisInstance.start();
            }
        };

        // Handle images and content loading
        const handleLoad = () => {
            lenisInstance.resize();
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('load', handleLoad);
        window.addEventListener('resize', handleLoad);

        // Cleanup
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('load', handleLoad);
            window.removeEventListener('resize', handleLoad);
            cancelAnimationFrame(rafId);
            lenisInstance.destroy();
        };
    }, []);

    return (
        <LenisContext.Provider value={lenis}>
            {children}
        </LenisContext.Provider>
    );
}
