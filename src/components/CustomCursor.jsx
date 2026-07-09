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
            if (t.tagName === 'A' || t.tagName === 'BUTTON' || t.closest('a') || t.closest('button') || t.closest('[data-cursor-hover]') || t.classList.contains('cursor-hover'))
                setHover(true);
        };
        const out = (e) => {
            const t = e.target;
            if (t.tagName === 'A' || t.tagName === 'BUTTON' || t.closest('a') || t.closest('button') || t.closest('[data-cursor-hover]') || t.classList.contains('cursor-hover'))
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
            {/* Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
                style={{ background: hover ? '#818cf8' : 'rgba(226, 224, 240, 0.6)' }}
                animate={{
                    x: pos.x - 4,
                    y: pos.y - 4,
                    scale: click ? 0.7 : hover ? 1.5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 600, damping: 30, mass: 0.3 }}
            />
            {/* Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] border"
                style={{ borderColor: hover ? 'rgba(129, 140, 248, 0.4)' : 'rgba(226, 224, 240, 0.08)' }}
                animate={{
                    x: pos.x - 16,
                    y: pos.y - 16,
                    scale: click ? 0.9 : hover ? 1.6 : 1,
                    opacity: hover ? 0.8 : 0.3,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 18, mass: 0.1 }}
            />
        </>
    );
};

export default CustomCursor;
