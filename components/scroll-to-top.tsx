"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLenis } from "@/components/smooth-scroll-provider";

export function ScrollToTop() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);
    const lenis = useLenis();

    // Ensure component is mounted before rendering (prevents hydration mismatch)
    useEffect(() => {
        setMounted(true);
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, lenis]);

    // Show/hide button based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Don't render until mounted on client
    if (!mounted) return null;

    const scrollToTop = () => {
        if (lenis) {
            // Use Lenis scrollTo for smooth scrolling
            lenis.scrollTo(0, { duration: 1.2 });
        } else {
            // Fallback for when Lenis isn't available
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={cn(
                "fixed bottom-6 right-6 z-50 p-3 rounded-full cursor-pointer",
                "bg-primary text-primary-foreground",
                "shadow-lg shadow-primary/25",
                "hover:bg-primary-700 hover:shadow-xl hover:shadow-primary/30",
                "hover:scale-110 active:scale-95",
                "transition-all duration-300 ease-out",
                "backdrop-blur-sm",
                "border border-primary-600/20",
                // Visibility animation
                isVisible
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
            )}
        >
            <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
        </button>
    );
}
