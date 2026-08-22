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
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                backgroundColor: isScrolled ? 'rgba(18, 12, 4, 0.97)' : 'rgba(15, 10, 3, 0.85)',
                borderBottom: isScrolled ? '2px solid var(--border-heavy)' : '1px solid rgba(61, 43, 10, 0.4)',
            }}
        >
            {/* Amber progress bar — solid, not glowing */}
            <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '2px',
                background: 'var(--border-heavy)',
            }}>
                <div style={{
                    height: '100%',
                    background: 'var(--amber)',
                    width: `${scrollProgress}%`,
                    transition: 'width 100ms linear',
                }} />
            </div>

            <div className="max-w-5xl mx-auto px-6">
                <div className="flex items-center justify-between md:justify-center h-14 w-full">
                    {/* Mobile brand */}
                    <motion.a
                        href="#home"
                        onClick={(e) => scrollTo(e, '#home')}
                        className="md:hidden cursor-hover"
                        style={{
                            fontFamily: "'Special Elite', cursive",
                            color: 'var(--cream)',
                            fontSize: '0.9rem',
                            letterSpacing: '0.08em',
                        }}
                    >
                        murashi<span style={{ color: 'var(--amber)' }}>.dev</span>
                    </motion.a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-0">
                        {navLinks.map((link, i) => {
                            const isActive = activeSection === link.href.slice(1);
                            return (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollTo(e, link.href)}
                                    className="relative cursor-hover transition-colors"
                                    style={{
                                        fontFamily: "'Courier Prime', monospace",
                                        color: isActive ? 'var(--ink)' : 'var(--cream-muted)',
                                        fontSize: '0.65rem',
                                        letterSpacing: '0.2em',
                                        textTransform: 'uppercase',
                                        padding: '0.4rem 1rem',
                                        background: isActive ? 'var(--amber)' : 'transparent',
                                        borderLeft: i === 0 ? '1px solid var(--border-heavy)' : 'none',
                                        borderRight: '1px solid var(--border-heavy)',
                                        borderTop: '1px solid transparent',
                                        borderBottom: isActive ? '2px solid var(--amber)' : '1px solid transparent',
                                    }}
                                    whileHover={{
                                        color: isActive ? 'var(--ink)' : 'var(--amber)',
                                        background: isActive ? 'var(--amber)' : 'rgba(200, 134, 10, 0.08)',
                                    }}
                                >
                                    {link.name}
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Mobile hamburger — typewriter lines */}
                    <motion.button
                        className="md:hidden cursor-hover p-1"
                        style={{ color: 'var(--cream-muted)' }}
                        whileHover={{ color: 'var(--amber)' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', width: '16px' }}>
                            <div style={{ height: '1px', background: 'currentColor', width: '100%' }} />
                            <div style={{ height: '1px', background: 'currentColor', width: '60%' }} />
                            <div style={{ height: '1px', background: 'currentColor', width: '100%' }} />
                        </div>
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
