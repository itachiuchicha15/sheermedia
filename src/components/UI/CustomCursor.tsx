import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;

        if (!dot || !ring) return;

        let mouseX = 0;
        let mouseY = 0;
        let dotX = 0;
        let dotY = 0;
        let ringX = 0;
        let ringY = 0;
        let dotScale = 1;
        let ringScale = 1;
        let isFirstMove = true;

        const updateCursor = () => {
            // Linear interpolation for smooth tracking
            dotX = mouseX;
            dotY = mouseY;

            // Outer ring has a slight lag/inertia (0.2 factor)
            ringX += (mouseX - ringX) * 0.2;
            ringY += (mouseY - ringY) * 0.2;

            if (dot) {
                dot.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px) scale(${dotScale})`;
            }
            if (ring) {
                ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px) scale(${ringScale})`;
            }

            requestAnimationFrame(updateCursor);
        };

        updateCursor();

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (isFirstMove) {
                if (dot) dot.style.opacity = '1';
                if (ring) ring.style.opacity = '1';
                isFirstMove = false;
            }

            const target = e.target as HTMLElement;
            const isClickable = target && target.closest && target.closest('button, a, input, select, textarea, [role="button"]');

            if (isClickable) {
                ringScale = 1.6;
                if (ring) {
                    ring.style.borderColor = 'rgba(124, 58, 237, 0.8)';
                    ring.style.backgroundColor = 'rgba(124, 58, 237, 0.05)';
                }
            } else {
                ringScale = 1;
                if (ring) {
                    ring.style.backgroundColor = 'transparent';
                    ring.style.borderColor = 'rgba(124, 58, 237, 0.4)';
                }
            }
        };

        const handleMouseDown = () => {
            dotScale = 1.8;
            ringScale *= 0.8;
        };

        const handleMouseUp = () => {
            dotScale = 1;
            ringScale /= 0.8;
        };

        const handleMouseLeave = () => {
            if (dot) dot.style.opacity = '0';
            if (ring) ring.style.opacity = '0';
        };

        const handleMouseEnter = () => {
            if (!isFirstMove) {
                if (dot) dot.style.opacity = '1';
                if (ring) ring.style.opacity = '1';
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
};
