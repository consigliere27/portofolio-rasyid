import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState('loading');

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) { clearInterval(interval); return 100; }
                let inc = prev < 30 ? 0.95 : prev < 65 ? 0.65 : prev < 85 ? 0.45 : prev < 97 ? 0.25 : 0.12;
                return Math.min(prev + Math.max(0.05, inc + (Math.random() - 0.5) * 0.08), 100);
            });
        }, 16);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100 && phase === 'loading') {
            const t = setTimeout(() => setPhase('reveal'), 500);
            return () => clearTimeout(t);
        }
        if (phase === 'reveal') {
            onComplete();
            const t = setTimeout(() => setPhase('done'), 1200);
            return () => clearTimeout(t);
        }
    }, [progress, phase, onComplete]);

    return (
        <AnimatePresence>
            {phase !== 'done' && (
                <>
                    <motion.div
                        className="fixed inset-0 z-[9999]"
                        style={{ background: '#0c0a1d' }}
                        initial={{ opacity: 1 }}
                        animate={phase === 'reveal' ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                    />

                    <motion.div
                        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center pointer-events-none"
                        animate={phase === 'reveal' ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {phase === 'loading' && (
                            <div className="text-center">
                                <motion.p
                                    className="text-[10px] tracking-[0.5em] uppercase mb-6 font-medium"
                                    style={{ color: 'rgba(129, 140, 248, 0.4)' }}
                                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    Loading
                                </motion.p>
                                <div className="w-48 h-[1px] rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>
                                    <motion.div
                                        className="h-full"
                                        style={{
                                            background: 'linear-gradient(90deg, #6366f1, #a78bfa)',
                                            width: `${progress}%`,
                                            opacity: 0.6,
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
