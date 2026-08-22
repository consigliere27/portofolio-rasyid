import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FiArrowDown, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
    const handleScrollDown = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="section-deep mesh-hero relative min-h-[92vh] flex items-center justify-center overflow-hidden"
        >
            {/* Subtle warm ambient light */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div style={{
                    position: 'absolute',
                    width: '600px', height: '400px',
                    background: 'radial-gradient(ellipse, rgba(140,90,20,0.06) 0%, transparent 70%)',
                    top: '10%', left: '-5%',
                    animation: 'float-orb-1 30s ease-in-out infinite',
                }} />
                <div style={{
                    position: 'absolute',
                    width: '400px', height: '300px',
                    background: 'radial-gradient(ellipse, rgba(140,90,20,0.04) 0%, transparent 70%)',
                    bottom: '15%', right: '-5%',
                    animation: 'float-orb-2 35s ease-in-out infinite',
                }} />
            </div>

            <div className="relative z-10 w-full max-w-3xl mx-auto px-6 flex flex-col items-center text-center py-16">

                {/* ─── PUBLICATION LABEL ─── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.8 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '2rem',
                        width: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ flex: 1, height: '1px', background: 'var(--border-heavy)' }} />
                    <span style={{
                        fontFamily: "'Courier Prime', monospace",
                        fontSize: '0.6rem',
                        color: 'var(--amber)',
                        letterSpacing: '0.6em',
                        textTransform: 'uppercase',
                        opacity: 0.7,
                    }}>
                        ✦ Personal Portfolio ✦
                    </span>
                    <div style={{ flex: 1, height: '1px', background: 'var(--border-heavy)' }} />
                </motion.div>

                {/* ─── MAIN HEADLINE ─── */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    style={{
                        fontFamily: "'Special Elite', cursive",
                        fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
                        color: 'var(--cream)',
                        lineHeight: '1.05',
                        marginBottom: '0.15rem',
                        letterSpacing: '0.02em',
                        textShadow: '2px 2px 0 rgba(0,0,0,0.8)',
                    }}
                >
                    Muhammad
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    style={{
                        fontFamily: "'Special Elite', cursive",
                        fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
                        color: 'var(--amber)',
                        lineHeight: '1.05',
                        marginBottom: '1.5rem',
                        letterSpacing: '0.02em',
                        textShadow: '3px 3px 0 rgba(0,0,0,0.9)',
                    }}
                >
                    Rasyid
                </motion.h1>

                {/* ─── TYPEWRITER ROLE ─── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55, duration: 0.6 }}
                    style={{
                        fontFamily: "'Courier Prime', monospace",
                        fontSize: '0.95rem',
                        color: 'var(--cream-dim)',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem',
                        height: '1.6rem',
                    }}
                >
                    <Typewriter
                        options={{
                            strings: ['Web Developer', 'IoT Enthusiast', 'AI Prompter'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 40,
                            delay: 80,
                        }}
                    />
                </motion.div>

                {/* ─── DATELINE ─── */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.62 }}
                    style={{
                        fontFamily: "'Courier Prime', monospace",
                        fontSize: '0.6rem',
                        color: 'var(--amber)',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        opacity: 0.5,
                        marginBottom: '2rem',
                    }}
                >
                    Indonesia · Est. 2025 · Vol. I
                </motion.p>

                {/* ─── DESCRIPTION — left border only ─── */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    style={{
                        fontFamily: "'Courier Prime', monospace",
                        fontSize: '0.85rem',
                        color: 'var(--cream-dim)',
                        fontStyle: 'italic',
                        lineHeight: '1.7',
                        maxWidth: '460px',
                        margin: '0 auto 2rem',
                    }}
                >
                    "Crafting digital experiences that blend creativity with technology —
                    one keystroke at a time."
                </motion.p>

                {/* ─── BUTTONS — Mechanical press style ─── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}
                >
                    <motion.a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('my-projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="retro-btn-primary cursor-hover"
                        style={{ padding: '0.75rem 2rem', fontSize: '0.7rem', display: 'inline-block' }}
                        whileTap={{ x: 4, y: 4 }}
                    >
                        [ View My Work ]
                    </motion.a>
                    <motion.a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="retro-btn cursor-hover"
                        style={{
                            padding: '0.75rem 2rem',
                            fontSize: '0.7rem',
                            color: 'var(--cream-dim)',
                            display: 'inline-block',
                        }}
                        whileTap={{ x: 2, y: 2 }}
                    >
                        [ Get In Touch ]
                    </motion.a>
                </motion.div>

                {/* ─── SOCIAL LINKS ─── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.95 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: "'Courier Prime', monospace",
                        fontSize: '0.6rem',
                        color: 'var(--cream-muted)',
                        letterSpacing: '0.2em',
                    }}
                >
                    <span style={{ opacity: 0.3 }}>──</span>
                    {[
                        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/muhammad-rasyid-shiddiq', label: 'LN' },
                        { icon: FiInstagram, href: 'https://instagram.com/rasyidshdqq', label: 'IG' },
                        { icon: FiMail, href: 'mailto:rasyidforbusiness27@gmail.com', label: 'ML' },
                    ].map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-hover"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                color: 'var(--cream-muted)',
                                border: '1px solid var(--border-heavy)',
                                padding: '4px 8px',
                            }}
                            whileHover={{ color: 'var(--amber)', borderColor: 'var(--amber)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <social.icon size={12} />
                            <span style={{ fontSize: '0.55rem', letterSpacing: '0.2em' }}>{social.label}</span>
                        </motion.a>
                    ))}
                    <span style={{ opacity: 0.3 }}>──</span>
                </motion.div>
            </div>

            {/* ─── SCROLL INDICATOR ─── */}
            <motion.button
                onClick={handleScrollDown}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-hover flex flex-col items-center gap-1"
                style={{ color: 'var(--cream-muted)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                whileHover={{ color: 'var(--amber)' }}
            >
                <span style={{
                    fontFamily: "'Courier Prime', monospace",
                    fontSize: '0.5rem',
                    letterSpacing: '0.4em',
                    textTransform: 'uppercase',
                }}>scroll</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                >
                    <FiArrowDown size={16} />
                </motion.div>
            </motion.button>
        </section>
    );
};

export default Hero;
