import { motion } from 'framer-motion';
import { FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

const Footer = () => {
    const year = new Date().getFullYear();

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="section-deep mesh-footer relative">
            <div className="divider" />

            <div className="max-w-5xl mx-auto px-6 py-6">
                <div className="flex flex-col items-center text-center gap-5">
                    {/* Brand */}
                    <motion.a
                        href="#home"
                        onClick={(e) => scrollTo(e, '#home')}
                        className="cursor-hover inline-block"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <h3 className="text-3xl font-bold font-outfit" style={{ color: '#f0eef8' }}>
                            murashi<span style={{ color: 'rgba(129, 140, 248, 0.8)' }}>.dev</span>
                        </h3>
                    </motion.a>

                    <p className="text-sm font-light tracking-wide max-w-sm mx-auto" style={{ color: 'rgba(226, 224, 240, 0.6)' }}>
                        Dibuat dengan terminal terbuka dan kopi hitam.
                    </p>

                    <div className="flex justify-center gap-4 mt-2">
                        {[
                            { icon: FiLinkedin, href: 'https://www.linkedin.com/in/muhammad-rasyid-shiddiq-5749a6281' },
                            { icon: FiInstagram, href: 'https://instagram.com/rasyidshdqq' },
                            { icon: FiMail, href: 'mailto:rasyidforbusiness27@gmail.com' },
                        ].map((s, i) => (
                            <motion.a
                                key={i}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl cursor-hover transition-all"
                                style={{
                                    color: 'rgba(226, 224, 240, 0.4)',
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)'
                                }}
                                whileHover={{
                                    color: '#818cf8',
                                    scale: 1.1,
                                    background: 'rgba(129, 140, 248, 0.1)',
                                    borderColor: 'rgba(129, 140, 248, 0.2)'
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <s.icon size={18} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 pt-5 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)' }}>
                    <p className="text-[11px] uppercase tracking-widest font-medium text-center md:text-left" style={{ color: 'rgba(226, 224, 240, 0.3)' }}>
                        © {year} Muhammad Rasyid Shiddiq
                    </p>
                    <div className="flex gap-4">
                        <p className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'rgba(226, 224, 240, 0.3)' }}>
                            Indonesia
                        </p>
                    </div>
                </div>
            </div>

            {/* Back to top */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 p-2.5 rounded-full cursor-hover z-40"
                style={{ color: 'rgba(226, 224, 240, 0.2)', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{
                    color: '#818cf8',
                    borderColor: 'rgba(129, 140, 248, 0.2)',
                    background: 'rgba(129, 140, 248, 0.06)',
                }}
                whileTap={{ scale: 0.9 }}
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </motion.button>
        </footer>
    );
};

export default Footer;
