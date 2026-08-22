import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);

    useEffect(() => {
        const move = (e) => setPos({ x: e.clientX, y: e.clientY });
        const down = () => setClick(true);
        const up = () => setClick(false);

        const over = (e) => {
            const t = e.target;
            if (t.tagName === 'A' || t.tagName === 'BUTTON' || t.closest('a') || t.closest('button') || t.classList.contains('cursor-hover'))
                setHover(true);
        };
        const out = (e) => {
            const t = e.target;
            if (t.tagName === 'A' || t.tagName === 'BUTTON' || t.closest('a') || t.closest('button') || t.classList.contains('cursor-hover'))
                setHover(false);
        };

        window.addEventListener('mousemove', move);
        window.addEventListener('mousedown', down);
        window.addEventListener('mouseup', up);
        document.addEventListener('mouseover', over);
        document.addEventListener('mouseout', out);
        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mousedown', down);
            window.removeEventListener('mouseup', up);
            document.removeEventListener('mouseover', over);
            document.removeEventListener('mouseout', out);
        };
    }, []);

    return (
        <>
            {/* Crosshair dot — square, no border-radius */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    width: click ? '5px' : hover ? '10px' : '6px',
                    height: click ? '5px' : hover ? '10px' : '6px',
                    background: hover ? 'var(--amber)' : 'var(--cream)',
                    borderRadius: 0,
                    boxShadow: hover ? '0 0 6px rgba(200,134,10,0.6), 0 0 12px rgba(200,134,10,0.3)' : 'none',
                    transition: 'width 0.1s, height 0.1s, background 0.15s',
                }}
                animate={{
                    x: pos.x - (hover ? 5 : 3),
                    y: pos.y - (hover ? 5 : 3),
                    scale: click ? 0.5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.2 }}
            />

            {/* Outer crosshair — square, thick border */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: 0,
                    border: `1px solid ${hover ? 'rgba(200,134,10,0.7)' : 'rgba(232,212,160,0.2)'}`,
                    boxShadow: hover ? '0 0 8px rgba(200,134,10,0.2)' : 'none',
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                }}
                animate={{
                    x: pos.x - 12,
                    y: pos.y - 12,
                    scale: click ? 0.8 : hover ? 1.6 : 1,
                    opacity: hover ? 1 : 0.5,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.1 }}
            />
        </>
    );
};

export default CustomCursor;
