'use client';

import { MotionValue, motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface NumberProps {
    mv: MotionValue<number>;
    number: number;
    height: number;
}

function Number({ mv, number, height }: NumberProps) {
    const y = useTransform(mv, latest => {
        const placeValue = latest % 10;
        const offset = (10 + number - placeValue) % 10;
        let memo = offset * height;
        if (offset > 5) {
            memo -= 10 * height;
        }
        return memo;
    });

    const style: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return <motion.span style={{ ...style, y }}>{number}</motion.span>;
}

interface DigitProps {
    place: number;
    value: number;
    height: number;
    digitStyle?: React.CSSProperties;
}

function Digit({ place, value, height, digitStyle }: DigitProps) {
    const valueRoundedToPlace = Math.floor(value / place);
    const animatedValue = useSpring(valueRoundedToPlace);

    useEffect(() => {
        animatedValue.set(valueRoundedToPlace);
    }, [animatedValue, valueRoundedToPlace]);

    const defaultStyle: React.CSSProperties = {
        height,
        position: 'relative',
        width: '1ch',
        fontVariantNumeric: 'tabular-nums'
    };

    return (
        <div style={{ ...defaultStyle, ...digitStyle }}>
            {Array.from({ length: 10 }, (_, i) => (
                <Number key={i} mv={animatedValue} number={i} height={height} />
            ))}
        </div>
    );
}

interface RollingCounterProps {
    value: number;
    fontSize?: number;
    padding?: number;
    places?: number[];
    gap?: number;
    className?: string;
    textColor?: string;
    fontWeight?: React.CSSProperties['fontWeight'];
    prefix?: string;
    suffix?: string;
}

export default function RollingCounter({
    value,
    fontSize = 32,
    padding = 0,
    places = [100, 10, 1],
    gap = 2,
    className = '',
    textColor = '#BD0F46',
    fontWeight = 'bold',
    prefix = '',
    suffix = ''
}: RollingCounterProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '0px' });
    const [displayValue, setDisplayValue] = useState(0);
    const height = fontSize + padding;

    useEffect(() => {
        if (isInView) {
            setDisplayValue(value);
        }
    }, [isInView, value]);

    const counterStyle: React.CSSProperties = {
        fontSize,
        display: 'flex',
        gap: gap,
        overflow: 'hidden',
        lineHeight: 1,
        color: textColor,
        fontWeight: fontWeight,
        alignItems: 'center'
    };

    return (
        <div ref={ref} className={className} style={{ display: 'inline-flex', alignItems: 'center' }}>
            {prefix && <span style={{ fontSize, color: textColor, fontWeight }}>{prefix}</span>}
            <div style={counterStyle}>
                {places.map(place => (
                    <Digit key={place} place={place} value={displayValue} height={height} />
                ))}
            </div>
            {suffix && <span style={{ fontSize, color: textColor, fontWeight }}>{suffix}</span>}
        </div>
    );
}
