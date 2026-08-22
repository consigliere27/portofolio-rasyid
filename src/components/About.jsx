import { motion } from 'framer-motion';

/* ── Section header helper ── */
const SectionHeader = ({ label, title, titleHighlight }) => (
    <>
        {/* Newspaper section label */}
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
                }}>✦ {label} ✦</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border-mid)' }} />
            </div>
        </motion.div>

        {/* Heavy underlined headline */}
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
                borderBottom: '3px double var(--border-mid)',
                paddingBottom: '0.6rem',
                marginBottom: '2rem',
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
                {title}{' '}
                <span style={{ color: 'var(--amber)' }}>{titleHighlight}</span>
            </h2>
        </motion.div>
    </>
);

const About = () => {
    const skills = [
        'Web Development', 'IoT Systems', 'Data Analytics',
        'Digital Marketing', 'Graphic Design', 'Problem Solving',
    ];

    return (
        <section id="about" className="section-deep mesh-about py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">

                <SectionHeader label="About" title="A bit about" titleHighlight="me" />

                {/* Two-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left — Text */}
                    <div>
                        {[
                            'A results-oriented Fresh Graduate from Politeknik Negeri Sriwijaya and a dedicated Information Technology Enthusiast. I have honed my technical and managerial skills through impactful internship experiences in both the industrial and public sectors.',
                            'Formerly interned at the Ministry of Administrative and Bureaucratic Reform (Kementerian PANRB), gaining deep insights into organizational efficiency, governance, and digital transformation. Previously at PT Pupuk Sriwidjaja Palembang, immersed in a competitive industrial environment.',
                        ].map((text, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                style={{ marginBottom: '1rem' }}
                            >
                                {i === 0 && (
                                    <div style={{
                                        borderLeft: '3px solid var(--amber)',
                                        paddingLeft: '0.75rem',
                                    }}>
                                        <p style={{
                                            fontFamily: "'Courier Prime', monospace",
                                            fontSize: '0.85rem',
                                            color: 'var(--cream-dim)',
                                            lineHeight: '1.75',
                                            margin: 0,
                                            fontStyle: 'italic',
                                        }}>{text}</p>
                                    </div>
                                )}
                                {i === 1 && (
                                    <p style={{
                                        fontFamily: "'Courier Prime', monospace",
                                        fontSize: '0.85rem',
                                        color: 'var(--cream-muted)',
                                        lineHeight: '1.75',
                                        margin: 0,
                                    }}>{text}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Right — Skills + Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {/* Core Skills label */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '0.75rem',
                        }}>
                            <span style={{
                                fontFamily: "'Courier Prime', monospace",
                                fontSize: '0.6rem',
                                color: 'var(--amber)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.4em',
                            }}>Core Skills</span>
                            <div style={{ flex: 1, height: '1px', background: 'var(--border-heavy)' }} />
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                            {skills.map((skill, i) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="retro-tag cursor-hover"
                                    style={{
                                        padding: '3px 10px',
                                        color: 'var(--cream-dim)',
                                        display: 'inline-block',
                                    }}
                                    whileHover={{ color: 'var(--amber)' }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>

                        {/* Stats — newspaper box */}
                        <div style={{
                            borderTop: '2px double var(--border-mid)',
                            paddingTop: '1rem',
                        }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1rem',
                            }}>
                                {[
                                    { value: '3+', label: 'Projects Built' },
                                    { value: '9+', label: 'Certifications' },
                                    { value: '2',  label: 'Internships' },
                                    { value: '2025', label: 'Graduate Year' },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.07 }}
                                        style={{
                                            borderLeft: '2px solid var(--border-heavy)',
                                            paddingLeft: '0.75rem',
                                        }}
                                    >
                                        <p style={{
                                            fontFamily: "'Special Elite', cursive",
                                            fontSize: '1.8rem',
                                            color: 'var(--amber)',
                                            margin: 0,
                                            lineHeight: 1,
                                            textShadow: '2px 2px 0 rgba(0,0,0,0.6)',
                                        }}>{stat.value}</p>
                                        <p style={{
                                            fontFamily: "'Courier Prime', monospace",
                                            fontSize: '0.6rem',
                                            color: 'var(--cream-muted)',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            margin: '2px 0 0',
                                        }}>{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
