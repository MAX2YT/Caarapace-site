"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    priority?: boolean;
    className?: string;
    containerClassName?: string;
}

/**
 * OptimizedImage component with lazy loading, blur placeholder, and smooth transitions.
 * Use priority={true} for above-the-fold images.
 */
export function OptimizedImage({
    src,
    alt,
    priority = false,
    className,
    containerClassName,
    ...props
}: OptimizedImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className={cn("relative overflow-hidden", containerClassName)}>
            {/* Blur placeholder while loading */}
            {!isLoaded && !hasError && (
                <div
                    className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse"
                    aria-hidden="true"
                />
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
