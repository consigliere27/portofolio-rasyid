import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState('loading');
    const [chars, setChars] = useState('');

    const loadingLines = [
        'INITIALIZING SYSTEM...',
        'LOADING MODULES.......',
        'READING MEMORY BANKS..',
        'CALIBRATING OUTPUT....',
        'SYSTEM READY..........',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) { clearInterval(interval); return 100; }
                let inc = prev < 30 ? 0.9 : prev < 65 ? 0.65 : prev < 85 ? 0.45 : prev < 97 ? 0.25 : 0.1;
                return Math.min(prev + Math.max(0.05, inc + (Math.random() - 0.5) * 0.1), 100);
            });
        }, 16);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Which loading line to show based on progress
        const idx = Math.min(Math.floor((progress / 100) * loadingLines.length), loadingLines.length - 1);
        const line = loadingLines[idx];
        const charCount = Math.floor(((progress % (100 / loadingLines.length)) / (100 / loadingLines.length)) * line.length);
        setChars(line.slice(0, Math.max(charCount, progress === 100 ? line.length : 0)));
    }, [progress]);

    useEffect(() => {
        if (progress === 100 && phase === 'loading') {
            const t = setTimeout(() => setPhase('reveal'), 800);
            return () => clearTimeout(t);
        }
        if (phase === 'reveal') {
            onComplete();
            const t = setTimeout(() => setPhase('done'), 1500);
            return () => clearTimeout(t);
        }
    }, [progress, phase, onComplete]);

    const lineIdx = Math.min(Math.floor((progress / 100) * loadingLines.length), loadingLines.length - 1);

    return (
        <AnimatePresence>
            {phase !== 'done' && (
                <>
                    <motion.div
                        className="fixed inset-0 z-[9999]"
                        style={{ background: '#0e0900' }}
                        initial={{ opacity: 1 }}
                        animate={phase === 'reveal' ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                    />

                    <motion.div
                        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center pointer-events-none"
                        animate={phase === 'reveal' ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {phase === 'loading' && (
                            <div style={{ width: '340px', fontFamily: "'Courier Prime', monospace" }}>
                                {/* Terminal window box */}
                                <div style={{
                                    border: '2px solid var(--border-mid)',
                                    background: '#0a0700',
                                    boxShadow: '6px 6px 0 #000',
                                }}>
                                    {/* Title bar */}
                                    <div style={{
                                        background: 'var(--amber)',
                                        padding: '4px 10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}>
                                        <span style={{
                                            fontFamily: "'Courier Prime', monospace",
                                            fontSize: '0.6rem',
                                            color: '#0a0700',
                                            fontWeight: '700',
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                        }}>
                                            MURASHI.EXE
                                        </span>
                                        <span style={{ fontSize: '0.6rem', color: '#0a0700', opacity: 0.7 }}>[ ▪ ▪ ▪ ]</span>
                                    </div>

                                    {/* Terminal body */}
                                    <div style={{ padding: '1.25rem', minHeight: '180px' }}>
                                        {/* Previous lines — done */}
                                        {loadingLines.slice(0, lineIdx).map((line, i) => (
                                            <div key={i} style={{
                                                fontSize: '0.65rem',
                                                color: 'var(--terminal-green)',
                                                letterSpacing: '0.05em',
                                                marginBottom: '4px',
                                                opacity: 0.7,
                                            }}>
                                                <span style={{ color: 'var(--amber)', opacity: 0.5, marginRight: '8px' }}>{'>'}</span>
                                                {line}
                                                <span style={{ color: 'var(--amber)', marginLeft: '4px' }}>OK</span>
                                            </div>
                                        ))}

                                        {/* Current line — typing */}
                                        <div style={{
                                            fontSize: '0.65rem',
                                            color: 'var(--cream)',
                                            letterSpacing: '0.05em',
                                            marginBottom: '4px',
                                        }}>
                                            <span style={{ color: 'var(--amber)', marginRight: '8px' }}>{'>'}</span>
                                            {loadingLines[lineIdx].slice(0, Math.floor((progress % (100 / loadingLines.length)) / (100 / loadingLines.length) * loadingLines[lineIdx].length))}
                                            <motion.span
                                                animate={{ opacity: [1, 0] }}
                                                transition={{ repeat: Infinity, duration: 0.5, ease: 'steps(1)' }}
                                                style={{
                                                    display: 'inline-block',
                                                    width: '8px',
                                                    height: '1em',
                                                    background: 'var(--amber)',
                                                    marginLeft: '1px',
                                                    verticalAlign: 'middle',
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Progress bar row */}
                                    <div style={{
                                        borderTop: '1px solid var(--border-heavy)',
                                        padding: '8px 12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                    }}>
                                        {/* ASCII progress bar */}
                                        <div style={{
                                            flex: 1,
                                            fontFamily: "'Courier Prime', monospace",
                                            fontSize: '0.6rem',
                                            color: 'var(--amber)',
                                            letterSpacing: '0',
                                        }}>
                                            {'['}
                                            {'█'.repeat(Math.floor(progress / 5))}
                                            {'░'.repeat(20 - Math.floor(progress / 5))}
                                            {']'}
                                        </div>
                                        <span style={{
                                            fontFamily: "'Courier Prime', monospace",
                                            fontSize: '0.6rem',
                                            color: 'var(--amber)',
                                            minWidth: '36px',
                                            textAlign: 'right',
                                        }}>
                                            {Math.floor(progress)}%
                                        </span>
                                    </div>
                                </div>

                                {/* Brand below terminal */}
                                <motion.div
                                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                                    transition={{ repeat: Infinity, duration: 2.5 }}
                                    style={{
                                        textAlign: 'center',
                                        marginTop: '1rem',
                                        fontFamily: "'Special Elite', cursive",
                                        fontSize: '1.1rem',
                                        color: 'var(--cream-muted)',
                                        letterSpacing: '0.1em',
                                    }}
                                >
                                    murashi<span style={{ color: 'var(--amber)' }}>.dev</span>
                                </motion.div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
