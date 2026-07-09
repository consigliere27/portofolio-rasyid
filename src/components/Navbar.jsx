import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#my-projects' },
    { name: 'Certifications', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress((scrollTop / docHeight) * 100);
            setIsScrolled(scrollTop > 50);

            const sections = ['home', 'about', 'my-projects', 'projects', 'contact'];
            for (const section of sections.reverse()) {
                const el = document.getElementById(section);
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(section);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            style={{
                backgroundColor: isScrolled ? 'rgba(12, 10, 29, 0.8)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(20px) saturate(150%)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(150%)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.04)' : 'none',
            }}
        >
            {/* Progress */}
            <div className="absolute top-0 left-0 w-full h-[1px]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                <div
                    className="h-full transition-[width] duration-100"
                    style={{
                        background: 'linear-gradient(90deg, #6366f1, #a78bfa)',
                        width: `${scrollProgress}%`,
                        opacity: 0.6,
                    }}
                />
            </div>

            <div className="max-w-5xl mx-auto px-6">
                <div className="flex items-center justify-end md:justify-center h-16 w-full">
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollTo(e, link.href)}
                                className="relative px-4 py-1.5 text-sm font-medium cursor-hover transition-colors"
                                style={{ color: activeSection === link.href.slice(1) ? '#818cf8' : 'rgba(226, 224, 240, 0.5)' }}
                                whileHover={{ color: '#818cf8' }}
                            >
                                {link.name}
                                {activeSection === link.href.slice(1) && (
                                    <motion.div
                                        layoutId="nav-dot"
                                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                                        style={{ backgroundColor: '#818cf8' }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    <motion.button
                        className="md:hidden p-2 cursor-hover"
                        style={{ color: 'rgba(226, 224, 240, 0.4)' }}
                        whileHover={{ color: '#e2e0f0' }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
