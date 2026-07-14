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
                {/* Two-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left — Text */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xs tracking-[0.4em] uppercase mb-3 font-medium"
                            style={{ color: 'rgba(129, 140, 248, 0.5)' }}
                        >
                            Contact
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold font-outfit mb-4"
                            style={{ color: '#f0eef8' }}
                        >
                            Let&apos;s work <span className="gradient-text">together</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-sm md:text-base mb-6 max-w-sm font-light"
                            style={{ color: 'rgba(226, 224, 240, 0.4)' }}
                        >
                            Have a project in mind? I&apos;m always open to discussing new ideas and opportunities.
                        </motion.p>

                        {/* Status */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-2.5"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#4ade80' }}></span>
                                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#4ade80' }}></span>
                            </span>
                            <span className="text-xs font-medium" style={{ color: 'rgba(74, 222, 128, 0.7)' }}>Available for new projects</span>
                        </motion.div>
                    </div>

                    {/* Right — Contact Items */}
                    <div className="space-y-2.5">
                        {contacts.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                            >
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass-subtle flex items-center justify-between p-3.5 rounded-xl group cursor-hover"
                                    >
                                        <div className="flex items-center gap-3.5">
                                            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{ background: 'rgba(129, 140, 248, 0.08)', border: '1px solid rgba(129, 140, 248, 0.15)' }}>
                                                <item.icon size={16} style={{ color: 'rgba(129, 140, 248, 0.7)' }} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] tracking-wider uppercase" style={{ color: 'rgba(226, 224, 240, 0.3)' }}>{item.label}</p>
                                                <p className="text-sm font-medium" style={{ color: 'rgba(226, 224, 240, 0.7)' }}>{item.value}</p>
                                            </div>
                                        </div>
                                        <FiArrowUpRight size={15} style={{ color: 'rgba(226, 224, 240, 0.2)' }} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                ) : (
                                    <div className="glass-subtle flex items-center p-3.5 rounded-xl">
                                        <div className="flex items-center gap-3.5">
                                            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{ background: 'rgba(129, 140, 248, 0.08)', border: '1px solid rgba(129, 140, 248, 0.15)' }}>
                                                <item.icon size={16} style={{ color: 'rgba(129, 140, 248, 0.7)' }} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] tracking-wider uppercase" style={{ color: 'rgba(226, 224, 240, 0.3)' }}>{item.label}</p>
                                                <p className="text-sm font-medium" style={{ color: 'rgba(226, 224, 240, 0.7)' }}>{item.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
