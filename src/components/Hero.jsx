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
            className="section-deep mesh-hero relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Floating orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.12]"
                    style={{
                        background: 'radial-gradient(circle, #6366f1, transparent 70%)',
                        top: '10%', left: '5%',
                        animation: 'float-orb-1 20s ease-in-out infinite',
                    }}
                />
                <div
                    className="absolute w-[450px] h-[450px] rounded-full blur-[150px] opacity-[0.08]"
                    style={{
                        background: 'radial-gradient(circle, #a78bfa, transparent 70%)',
                        bottom: '10%', right: '10%',
                        animation: 'float-orb-2 25s ease-in-out infinite',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xs tracking-[0.4em] uppercase mb-8 font-medium"
                    style={{ color: 'rgba(129, 140, 248, 0.7)' }}
                >
                    Portfolio
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.7 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-outfit mb-6 leading-[0.95]"
                    style={{ color: '#f0eef8' }}
                >
                    Muhammad{' '}
                    <span className="gradient-text">Rasyid</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-lg sm:text-xl md:text-2xl mb-6 h-10 font-light"
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
                    className="text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed font-light"
                    style={{ color: 'rgba(226, 224, 240, 0.4)' }}
                >
                    Crafting digital experiences that blend creativity with technology.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                >
                    <motion.a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-3.5 rounded-full font-medium cursor-hover text-center text-sm tracking-wide"
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
                        className="glass-btn px-8 py-3.5 rounded-full font-medium cursor-hover text-center text-sm tracking-wide"
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
                    className="flex gap-5 justify-center"
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

            {/* Scroll indicator */}
            <motion.button
                onClick={handleScrollDown}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-hover"
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
