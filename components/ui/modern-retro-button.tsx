"use client";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

export interface ModernRetroButtonColors {
    textDefault?: string;
    textHover?: string;
    background?: string;
    boxShadow?: string;
    boxShadowHover?: string;
    svgRect?: string;
    svgRectFlicker?: string;
    elasticity?: string;
}

export interface ModernRetroButtonProps extends ModernRetroButtonColors {
    onClick?: () => void;
    label: string;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    isLoading?: boolean;
    loadingLabel?: string;
    fullWidth?: boolean;
}

const ModernRetroButton: React.FC<ModernRetroButtonProps> = ({
    onClick,
    label,
    className = "",
    type = "button",
    disabled = false,
    isLoading = false,
    loadingLabel = "Loading...",
    fullWidth = false,
    textDefault = "#ffffff",
    textHover = "#ffffff",
    background = "#BD0D46",
    boxShadow = "0 0 0 0 #BD0D46",
    boxShadowHover = "0 0 20px 2px #BD0D46",
    svgRect = "#e83a6e",
    svgRectFlicker = "#ff1a5c",
    elasticity = "elastic.out(12, 0.3)",
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [textColor, setTextColor] = useState(textDefault);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isHovered && !disabled && !isLoading) {
            timer = setTimeout(() => {
                setTextColor(textHover);
            }, 1000);
        } else {
            setTextColor(textDefault);
        }
        return () => clearTimeout(timer);
    }, [isHovered, textDefault, textHover, disabled, isLoading]);

    const handleMouseEnter = () => {
        if (disabled || isLoading) return;
        setIsHovered(true);
        if (buttonRef.current) {
            const rects = buttonRef.current.querySelectorAll("rect.bar") as NodeListOf<SVGRectElement>;
            gsap.to(rects, {
                duration: 0.8,
                ease: elasticity,
                x: "100%",
                stagger: 0.01,
                overwrite: true,
                onComplete: () => flickerEffect(rects),
            });
        }
    };

    const flickerEffect = (rects: NodeListOf<SVGRectElement>) => {
        gsap.fromTo(
            rects,
            { fill: svgRectFlicker },
            {
                fill: svgRect,
                duration: 0.1,
                ease: elasticity,
                repeat: -1,
                yoyo: true,
            }
        );
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (buttonRef.current) {
            const rects = buttonRef.current.querySelectorAll("rect.bar") as NodeListOf<SVGRectElement>;
            gsap.to(rects, {
                duration: 0.8,
                ease: elasticity,
                x: "-100%",
                stagger: 0.01,
                overwrite: true,
                onComplete: () => {
                    rects.forEach((node) => node.setAttribute("fill", svgRect));
                },
            });
        }
    };

    return (
        <button
            ref={buttonRef}
            type={type}
            disabled={disabled || isLoading}
            className={`retro-button ${fullWidth ? 'full-width' : ''} ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                boxShadow: isHovered && !disabled && !isLoading ? boxShadowHover : boxShadow,
                position: "relative",
                background: "transparent",
                opacity: disabled ? 0.6 : 1,
                cursor: disabled || isLoading ? "not-allowed" : "pointer",
            }}
        >
            {/* SVG Background */}
            <svg
                className="bg-svg"
                width="100%"
                height="100%"
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                    borderRadius: 12,
                    pointerEvents: "none",
                }}
            >
                <rect x="0" y="0" width="100%" height="100%" rx="12" fill={background} />
            </svg>
            {/* Animated Bars */}
            <svg
                className="bars-svg"
                width="100%"
                height="100%"
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                    borderRadius: 12,
                    pointerEvents: "none",
                }}
            >
                <g className="left">
                    {[...Array(25)].map((_, index) => (
                        <rect
                            className="bar"
                            key={index}
                            x="-100%"
                            y={index * 2}
                            width="100%"
                            height="2"
                            fill={svgRect}
                        />
                    ))}
                </g>
            </svg>
            {/* Label */}
            <span style={{ color: textColor, zIndex: 2, position: "relative" }}>
                {isLoading ? loadingLabel : label}
            </span>
            <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap");
        .retro-button {
          cursor: pointer;
          display: flex;
          font-weight: 600;
          align-items: center;
          justify-content: center;
          font-family: "Inter", sans-serif;
          height: 50px;
          padding: 0 24px;
          border: none;
          border-radius: 12px;
          outline: none;
          transform: skew(-12deg);
          overflow: hidden;
          transition: transform 350ms, box-shadow 350ms, opacity 200ms;
        }
        .retro-button.full-width {
          width: 100%;
        }
        .retro-button:hover:not(:disabled) {
          transform: scale(1.02) skew(-12deg);
        }
        span {
          transform: skew(12deg);
          transition: color 350ms;
          font-size: 15px;
          letter-spacing: 0.02em;
        }
      `}</style>
        </button>
    );
};

export default ModernRetroButton;
