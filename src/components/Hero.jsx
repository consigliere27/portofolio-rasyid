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
            {/* Floating orbs - Clean & minimal */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.15]"
                    style={{
                        background: 'radial-gradient(circle, #6366f1, transparent 70%)',
                        top: '10%', left: '15%',
                        animation: 'float-orb-1 20s ease-in-out infinite',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full blur-[130px] opacity-[0.1]"
                    style={{
                        background: 'radial-gradient(circle, #22d3ee, transparent 70%)',
                        bottom: '10%', right: '15%',
                        animation: 'float-orb-2 25s ease-in-out infinite',
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-3xl mx-auto px-6 flex flex-col items-center text-center py-12">
                
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xs tracking-[0.4em] uppercase mb-5 font-medium"
                    style={{ color: 'rgba(129, 140, 248, 0.8)' }}
                >
                    Portfolio
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.7 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-outfit mb-4 leading-[1.1]"
                    style={{ color: '#f0eef8' }}
                >
                    Muhammad{' '}
                    <span className="gradient-text">Rasyid</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-base sm:text-lg md:text-xl mb-6 h-8 font-light"
                    style={{ color: 'rgba(226, 224, 240, 0.6)' }}
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
                    className="text-sm md:text-base mb-10 max-w-lg leading-relaxed font-light"
                    style={{ color: 'rgba(226, 224, 240, 0.45)' }}
                >
                    Crafting digital experiences that blend creativity with technology.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="flex flex-wrap gap-4 justify-center mb-10"
                >
                    <motion.a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('my-projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-3.5 rounded-full font-medium cursor-hover text-center text-sm tracking-wide"
                        style={{
                            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                            color: '#ffffff',
                            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.2)',
                        }}
                        whileHover={{
                            scale: 1.03,
                            boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)',
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
                        style={{ color: 'rgba(226, 224, 240, 0.8)', border: '1px solid rgba(255,255,255,0.08)' }}
                        whileHover={{ scale: 1.03, color: '#ffffff', background: 'rgba(255,255,255,0.08)' }}
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
                            style={{ color: 'rgba(226, 224, 240, 0.4)' }}
                            whileHover={{ scale: 1.15, color: '#818cf8' }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <social.icon size={20} />
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={handleScrollDown}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-hover"
                style={{ color: 'rgba(226, 224, 240, 0.3)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                whileHover={{ color: 'rgba(226, 224, 240, 0.7)' }}
            >
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
                    <FiArrowDown size={22} />
                </motion.div>
            </motion.button>
        </section>
    );
};

export default Hero;
