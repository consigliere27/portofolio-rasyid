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
            className="section-deep mesh-hero relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        >
            {/* Floating orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.12]"
                    style={{
                        background: 'radial-gradient(circle, #6366f1, transparent 70%)',
                        top: '10%', left: '5%',
                        animation: 'float-orb-1 20s ease-in-out infinite',
                    }}
                />
                <div
                    className="absolute w-[380px] h-[380px] rounded-full blur-[130px] opacity-[0.08]"
                    style={{
                        background: 'radial-gradient(circle, #a78bfa, transparent 70%)',
                        bottom: '10%', right: '10%',
                        animation: 'float-orb-2 25s ease-in-out infinite',
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 py-12">
                {/* Left — Text */}
                <div className="flex-1 text-center md:text-left">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xs tracking-[0.4em] uppercase mb-5 font-medium"
                        style={{ color: 'rgba(129, 140, 248, 0.7)' }}
                    >
                        Portfolio
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.7 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold font-outfit mb-4 leading-[1]"
                        style={{ color: '#f0eef8' }}
                    >
                        Muhammad{' '}
                        <span className="gradient-text">Rasyid</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-base sm:text-lg md:text-xl mb-4 h-8 font-light"
                        style={{ color: 'rgba(226, 224, 240, 0.5)' }}
                    >
                        <Typewriter
                            options={{
                                strings: [
                                    'Web Developer',
                                    'IoT Enthusiast',
                                    'AI Prompter',
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 40,
                                delay: 70,
                            }}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-sm md:text-base mb-8 max-w-md leading-relaxed font-light"
                        style={{ color: 'rgba(226, 224, 240, 0.4)' }}
                    >
                        Crafting digital experiences that blend creativity with technology.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="flex flex-wrap gap-3 justify-center md:justify-start mb-8"
                    >
                        <motion.a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('my-projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-7 py-3 rounded-full font-medium cursor-hover text-center text-sm tracking-wide"
                            style={{
                                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                color: '#ffffff',
                                boxShadow: '0 4px 25px rgba(99, 102, 241, 0.25)',
                            }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: '0 8px 35px rgba(99, 102, 241, 0.35)',
                            }}
                            whileTap={{ scale: 0.97 }}
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="glass-btn px-7 py-3 rounded-full font-medium cursor-hover text-center text-sm tracking-wide"
                            style={{ color: 'rgba(226, 224, 240, 0.7)' }}
                            whileHover={{ scale: 1.03, color: '#e2e0f0' }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>

                    {/* Social */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="flex gap-4 justify-center md:justify-start"
                    >
                        {[
                            { icon: FiLinkedin, href: 'https://www.linkedin.com/in/muhammad-rasyid-shiddiq-5749a6281' },
                            { icon: FiInstagram, href: 'https://instagram.com/rasyidshdqq' },
                            { icon: FiMail, href: 'mailto:rasyidforbusiness27@gmail.com' },
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full transition-all cursor-hover"
                                style={{ color: 'rgba(226, 224, 240, 0.3)' }}
                                whileHover={{ scale: 1.15, color: '#818cf8' }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <social.icon size={18} />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Right — Visual Card */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="hidden md:flex flex-col gap-3 w-72 flex-shrink-0"
                >
                    {/* Status Card */}
                    <div className="glass-panel p-5 rounded-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.2)' }}>
                                <span className="text-lg">👨‍💻</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold" style={{ color: '#f0eef8' }}>Muhammad Rasyid</p>
                                <p className="text-[11px]" style={{ color: 'rgba(226,224,240,0.4)' }}>IT Enthusiast</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#4ade80' }}></span>
                                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#4ade80' }}></span>
                            </span>
                            <span className="text-[11px] font-medium" style={{ color: 'rgba(74, 222, 128, 0.8)' }}>Open to Opportunities</span>
                        </div>
                    </div>

                    {/* Skills Preview */}
                    <div className="glass-panel p-5 rounded-2xl">
                        <p className="text-[10px] uppercase tracking-widest mb-3" style={{ color: 'rgba(226,224,240,0.35)' }}>Core Skills</p>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'IoT', 'AI Prompting', 'Analytics', 'UI/UX'].map((skill) => (
                                <span key={skill} className="px-2.5 py-1 rounded-lg text-[11px] font-medium"
                                    style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818cf8' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Location */}
                    <div className="glass-panel p-4 rounded-2xl flex items-center gap-3">
                        <span className="text-base">📍</span>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest" style={{ color: 'rgba(226,224,240,0.35)' }}>Based In</p>
                            <p className="text-sm font-medium" style={{ color: 'rgba(226,224,240,0.7)' }}>Palembang, Indonesia</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={handleScrollDown}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-hover"
                style={{ color: 'rgba(226, 224, 240, 0.2)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                whileHover={{ color: 'rgba(226, 224, 240, 0.5)' }}
            >
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
                    <FiArrowDown size={20} />
                </motion.div>
            </motion.button>
        </section>
    );
};

export default Hero;
