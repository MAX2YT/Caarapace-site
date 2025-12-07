"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    priority?: boolean;
    className?: string;
    containerClassName?: string;
    skeletonClassName?: string;
}

/**
 * OptimizedImage component with lazy loading, skeleton placeholder, and smooth transitions.
 * Use priority={true} for above-the-fold images.
 */
export function OptimizedImage({
    src,
    alt,
    priority = false,
    className,
    containerClassName,
    skeletonClassName,
    ...props
}: OptimizedImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className={cn("relative overflow-hidden", containerClassName)}>
            {/* Skeleton placeholder while loading */}
            {!isLoaded && !hasError && (
                <div
                    className={cn(
                        "absolute inset-0 bg-gray-200 animate-pulse",
                        skeletonClassName
                    )}
                    aria-hidden="true"
                >
                    {/* Skeleton shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </div>
            )}

            <img
                src={src}
                alt={alt}
                loading={priority ? "eager" : "lazy"}
                decoding={priority ? "sync" : "async"}
                fetchPriority={priority ? "high" : "auto"}
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
                className={cn(
                    "transition-opacity duration-500",
                    isLoaded ? "opacity-100" : "opacity-0",
                    className
                )}
                {...props}
            />
        </div>
    );
}

export default OptimizedImage;
