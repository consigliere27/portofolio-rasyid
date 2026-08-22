import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiInstagram, FiArrowUpRight } from 'react-icons/fi';

const contacts = [
    { icon: FiMail, label: 'Email', value: 'rasyidforbusiness27@gmail.com', href: 'mailto:rasyidforbusiness27@gmail.com' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'Muhammad Rasyid Shiddiq', href: 'https://www.linkedin.com/in/muhammad-rasyid-shiddiq' },
    { icon: FiInstagram, label: 'Instagram', value: '@rasyidshdqq', href: 'https://instagram.com/rasyidshdqq' },
    { icon: FiMapPin, label: 'Location', value: 'Indonesia' },
];

const Contact = () => {
    return (
        <section id="contact" className="section-deep mesh-contact py-16 md:py-24 relative">
            <div className="max-w-5xl mx-auto px-6 relative z-10">

                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '0.75rem' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ flex: 1, height: '1px', background: 'var(--border-mid)' }} />
                        <span style={{
                            fontFamily: "'Courier Prime', monospace",
                            fontSize: '0.6rem',
                            color: 'var(--amber)',
                            letterSpacing: '0.5em',
                            textTransform: 'uppercase',
                        }}>✦ Contact ✦</span>
                        <div style={{ flex: 1, height: '1px', background: 'var(--border-mid)' }} />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Left — Text */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                borderBottom: '3px double var(--border-mid)',
                                paddingBottom: '0.6rem',
                                marginBottom: '1.25rem',
                            }}
                        >
                            <h2 style={{
                                fontFamily: "'Special Elite', cursive",
                                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                                color: 'var(--cream)',
                                margin: 0,
                                lineHeight: 1.1,
                                textShadow: '1px 1px 0 rgba(0,0,0,0.8)',
                            }}>
                                Let&apos;s work{' '}
                                <span style={{ color: 'var(--amber)' }}>together</span>
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{
                                fontFamily: "'Courier Prime', monospace",
                                fontSize: '0.85rem',
                                color: 'var(--cream-muted)',
                                fontStyle: 'italic',
                                lineHeight: '1.75',
                                marginBottom: '1.5rem',
                                borderLeft: '3px solid var(--border-mid)',
                                paddingLeft: '0.75rem',
                            }}
                        >
                            Have a project in mind? I&apos;m always open to discussing new ideas and opportunities.
                        </motion.p>

                        {/* Status — telegram style */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                border: '1px solid var(--border-mid)',
                                padding: '6px 12px',
                                background: 'rgba(10,7,0,0.4)',
                            }}
                        >
                            <span style={{
                                display: 'inline-block',
                                width: '6px', height: '6px',
                                background: 'var(--amber)',
                                animation: 'blink 1.2s step-end infinite',
                            }} />
                            <span style={{
                                fontFamily: "'Courier Prime', monospace",
                                fontSize: '0.65rem',
                                color: 'var(--amber)',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                            }}>
                                AVAILABLE FOR NEW PROJECTS
                            </span>
                        </motion.div>
                    </div>

                    {/* Right — Contact Items */}
                    <div>
                        <div style={{
                            border: '2px solid var(--border-heavy)',
                            boxShadow: '4px 4px 0 #000',
                        }}>
                            {/* Contact header */}
                            <div style={{
                                background: 'var(--border-heavy)',
                                padding: '4px 12px',
                                borderBottom: '1px solid var(--border-mid)',
                            }}>
                                <span style={{
                                    fontFamily: "'Courier Prime', monospace",
                                    fontSize: '0.6rem',
                                    color: 'var(--amber)',
                                    letterSpacing: '0.3em',
                                    textTransform: 'uppercase',
                                }}>CONTACT DIRECTORY</span>
                            </div>

                            {/* Contact rows */}
                            {contacts.map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                >
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cursor-hover"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '0.6rem 0.75rem',
                                                borderBottom: i < contacts.length - 1 ? '1px solid var(--border-heavy)' : 'none',
                                                textDecoration: 'none',
                                                transition: 'background 0.15s',
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(200,134,10,0.06)'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                                <div style={{
                                                    width: '28px', height: '28px',
                                                    border: '1px solid var(--border-mid)',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    flexShrink: 0,
                                                    background: 'rgba(10,7,0,0.4)',
                                                }}>
                                                    <item.icon size={12} style={{ color: 'var(--amber)' }} />
                                                </div>
                                                <div>
                                                    <p style={{
                                                        fontFamily: "'Courier Prime', monospace",
                                                        fontSize: '0.55rem',
                                                        color: 'var(--amber)',
                                                        letterSpacing: '0.25em',
                                                        textTransform: 'uppercase',
                                                        margin: '0 0 1px',
                                                        opacity: 0.7,
                                                    }}>{item.label}</p>
                                                    <p style={{
                                                        fontFamily: "'Courier Prime', monospace",
                                                        fontSize: '0.75rem',
                                                        color: 'var(--cream-dim)',
                                                        margin: 0,
                                                    }}>{item.value}</p>
                                                </div>
                                            </div>
                                            <FiArrowUpRight size={12} style={{ color: 'var(--amber)', opacity: 0.5 }} />
                                        </a>
                                    ) : (
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '0.6rem 0.75rem',
                                            borderBottom: i < contacts.length - 1 ? '1px solid var(--border-heavy)' : 'none',
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                                <div style={{
                                                    width: '28px', height: '28px',
                                                    border: '1px solid var(--border-mid)',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    flexShrink: 0,
                                                    background: 'rgba(10,7,0,0.4)',
                                                }}>
                                                    <item.icon size={12} style={{ color: 'var(--amber)' }} />
                                                </div>
                                                <div>
                                                    <p style={{
                                                        fontFamily: "'Courier Prime', monospace",
                                                        fontSize: '0.55rem',
                                                        color: 'var(--amber)',
                                                        letterSpacing: '0.25em',
                                                        textTransform: 'uppercase',
                                                        margin: '0 0 1px',
                                                        opacity: 0.7,
                                                    }}>{item.label}</p>
                                                    <p style={{
                                                        fontFamily: "'Courier Prime', monospace",
                                                        fontSize: '0.75rem',
                                                        color: 'var(--cream-dim)',
                                                        margin: 0,
                                                    }}>{item.value}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
