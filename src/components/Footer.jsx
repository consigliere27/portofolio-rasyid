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
            {/* Heavy masthead divider */}
            <div style={{ padding: '0 1.5rem' }}>
                <div style={{ borderTop: '1px solid var(--border-heavy)', marginBottom: '3px' }} />
                <div style={{ borderTop: '3px solid var(--border-mid)', marginBottom: '3px' }} />
                <div style={{ borderTop: '1px solid var(--border-heavy)' }} />
            </div>

            <div className="max-w-5xl mx-auto px-6 py-8">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>

                    {/* Brand — masthead style */}
                    <motion.a
                        href="#home"
                        onClick={(e) => scrollTo(e, '#home')}
                        className="cursor-hover"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <h3 style={{
                            fontFamily: "'Special Elite', cursive",
                            fontSize: '2.2rem',
                            color: 'var(--cream)',
                            letterSpacing: '0.05em',
                            margin: 0,
                            textShadow: '2px 2px 0 rgba(0,0,0,0.8)',
                        }}>
                            murashi<span style={{ color: 'var(--amber)' }}>.dev</span>
                        </h3>
                    </motion.a>

                    {/* Tagline — italic */}
                    <p style={{
                        fontFamily: "'Courier Prime', monospace",
                        fontSize: '0.75rem',
                        color: 'var(--cream-muted)',
                        fontStyle: 'italic',
                        letterSpacing: '0.05em',
                        margin: 0,
                    }}>
                        "Dibuat dengan terminal terbuka dan kopi hitam."
                    </p>

                    {/* Social icons */}
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {[
                            { icon: FiLinkedin, href: 'https://www.linkedin.com/in/muhammad-rasyid-shiddiq' },
                            { icon: FiInstagram, href: 'https://instagram.com/rasyidshdqq' },
                            { icon: FiMail, href: 'mailto:rasyidforbusiness27@gmail.com' },
                        ].map((s, i) => (
                            <motion.a
                                key={i}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-hover"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '32px', height: '32px',
                                    color: 'var(--cream-muted)',
                                    border: '1px solid var(--border-heavy)',
                                    background: 'rgba(10,7,0,0.4)',
                                }}
                                whileHover={{
                                    color: 'var(--amber)',
                                    borderColor: 'var(--amber)',
                                    background: 'rgba(200,134,10,0.08)',
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <s.icon size={14} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Bottom copyright */}
                <div style={{
                    marginTop: '2rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-heavy)',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                }}>
                    <p style={{
                        fontFamily: "'Courier Prime', monospace",
                        fontSize: '0.6rem',
                        color: 'var(--cream-muted)',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        margin: 0,
                        opacity: 0.6,
                    }}>
                        © {year} Muhammad Rasyid Shiddiq
                    </p>
                    <p style={{
                        fontFamily: "'Courier Prime', monospace",
                        fontSize: '0.6rem',
                        color: 'var(--cream-muted)',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        margin: 0,
                        opacity: 0.6,
                    }}>
                        Indonesia · All Rights Reserved
                    </p>
                </div>
            </div>

            {/* Back to top — mechanical button */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="cursor-hover"
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    width: '36px', height: '36px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--cream-muted)',
                    background: 'rgba(10,7,0,0.8)',
                    border: '2px solid var(--border-heavy)',
                    boxShadow: '3px 3px 0 #000',
                    zIndex: 40,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{
                    color: 'var(--amber)',
                    borderColor: 'var(--amber)',
                    background: 'rgba(200,134,10,0.08)',
                }}
                whileTap={{ x: 2, y: 2, boxShadow: '1px 1px 0 #000' }}
            >
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </motion.button>
        </footer>
    );
};

export default Footer;
