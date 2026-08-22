import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiX, FiAward } from 'react-icons/fi';

const categories = ['All', 'AI & Tech', 'Google Ads', 'Finance'];

const certifications = [
    { id: 1, title: 'Google Analytics Certification', category: 'Google Ads', issuer: 'Google', image: '/cert-google-analytics.png', description: 'Certified in Google Analytics — validates proficiency in data-driven marketing decisions.', tags: ['Data', 'Analytics'], verifyUrl: '#' },
    { id: 2, title: 'Belajar Dasar AI', category: 'AI & Tech', issuer: 'Dicoding Indonesia', image: '/cert-dicoding-ai.png', description: 'Sertifikat Kompetensi Kelulusan dari Dicoding Indonesia untuk kelas Belajar Dasar AI.', tags: ['AI', 'Machine Learning'], verifyUrl: 'https://dicoding.com/certificates/53XE1JL0KZRN' },
    { id: 3, title: 'Software Engineer Intern', category: 'AI & Tech', issuer: 'HackerRank', image: '/cert-hackerrank.png', description: 'Certificate of Accomplishment — Software Engineer Intern from HackerRank.', tags: ['Engineering', 'Problem Solving'], verifyUrl: '#' },
    { id: 4, title: 'AI-Powered Shopping Ads', category: 'Google Ads', issuer: 'Google', image: '/cert-google-shopping-ads.png', description: 'Certified in AI-Powered Shopping Ads — expertise in leveraging AI for advertising.', tags: ['Ads', 'AI'], verifyUrl: '#' },
    { id: 5, title: 'Google Ads Search Certification', category: 'Google Ads', issuer: 'Google', image: '/cert-google-ads-search.png', description: 'Certified in Google Ads Search — expertise in search advertising campaigns.', tags: ['Digital Marketing', 'Search'], verifyUrl: '#' },
    { id: 6, title: 'Google Ads Video Certification', category: 'Google Ads', issuer: 'Google', image: '/cert-google-ads-video.png', description: 'Certified in Google Ads Video — expertise in video advertising strategies.', tags: ['Digital Marketing', 'Video'], verifyUrl: '#' },
    { id: 7, title: 'Google Ads Display Certification', category: 'Google Ads', issuer: 'Google', image: '/cert-google-ads-display.png', description: 'Sertifikasi Google Ads Display. Berlaku hingga December 29, 2026.', tags: ['Digital Marketing', 'Display'], verifyUrl: '#' },
    { id: 8, title: 'Sertifikasi Aplikasi Google Ads', category: 'Google Ads', issuer: 'Google', image: '/cert-google-ads-apps.png', description: 'Sertifikasi Aplikasi Google Ads. Berlaku hingga December 29, 2026.', tags: ['Digital Marketing', 'Apps'], verifyUrl: '#' },
    { id: 9, title: 'Introduction to Financial Literacy', category: 'Finance', issuer: 'Dicoding Indonesia', image: '/cert-dicoding-financial.png', description: 'Sertifikat Kompetensi untuk kelas Introduction to Financial Literacy.', tags: ['Finance'], verifyUrl: 'https://dicoding.com/certificates/N9ZO21886PG5' },
];

/* ── Modal ── */
const CertModal = ({ cert, onClose }) => {
    if (!cert) return null;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(5, 3, 0, 0.93)' }}
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                style={{
                    background: '#0e0900',
                    border: '2px solid var(--border-mid)',
                    boxShadow: '8px 8px 0 #000, 12px 12px 0 rgba(0,0,0,0.4)',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal title bar */}
                <div style={{
                    background: 'var(--amber)',
                    padding: '5px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <span style={{
                        fontFamily: "'Courier Prime', monospace",
                        fontSize: '0.6rem',
                        color: '#0a0700',
                        fontWeight: '700',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                    }}>
                        CERTIFICATE DETAIL
                    </span>
                    <motion.button
                        onClick={onClose}
                        className="cursor-hover"
                        style={{
                            background: 'rgba(0,0,0,0.2)',
                            border: '1px solid rgba(0,0,0,0.3)',
                            color: '#0a0700',
                            width: '20px', height: '20px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontFamily: 'monospace',
                        }}
                        whileHover={{ background: 'rgba(0,0,0,0.4)' }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FiX size={12} />
                    </motion.button>
                </div>

                {/* Image */}
                <div style={{
                    height: '200px',
                    background: 'rgba(20,13,4,0.8)',
                    borderBottom: '1px solid var(--border-heavy)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    overflow: 'hidden',
                }}>
                    <img src={cert.image} alt={cert.title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', padding: '1rem' }} />
                </div>

                {/* Content */}
                <div style={{ padding: '1.25rem' }}>
                    <p style={{
                        fontFamily: "'Courier Prime', monospace",
                        fontSize: '0.6rem',
                        color: 'var(--amber)',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        marginBottom: '0.4rem',
                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                    }}>
                        <FiAward size={11} /> {cert.issuer}
                    </p>
                    <h3 style={{
                        fontFamily: "'Special Elite', cursive",
                        fontSize: '1.4rem',
                        color: 'var(--cream)',
                        marginBottom: '0.75rem',
                        borderBottom: '1px solid var(--border-heavy)',
                        paddingBottom: '0.5rem',
                    }}>
                        {cert.title}
                    </h3>
                    <p style={{
                        fontFamily: "'Courier Prime', monospace",
                        fontSize: '0.82rem',
                        color: 'var(--cream-muted)',
                        fontStyle: 'italic',
                        lineHeight: '1.7',
                        marginBottom: '1rem',
                    }}>
                        {cert.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                        {cert.tags.map((tag) => (
                            <span key={tag} className="retro-tag" style={{
                                padding: '2px 8px',
                                color: 'var(--cream-dim)',
                                fontSize: '0.65rem',
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <motion.a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-btn-primary cursor-hover"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.6rem 1.5rem',
                            fontSize: '0.65rem',
                            textDecoration: 'none',
                        }}
                        whileTap={{ x: 4, y: 4 }}
                    >
                        <FiExternalLink size={12} /> [ VERIFY CERTIFICATE ]
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
};

/* ── Cert Card ── */
const CertCard = ({ cert, onClick }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.25 }}
        onClick={onClick}
        className="cursor-hover group"
        style={{
            background: 'rgba(14, 9, 0, 0.7)',
            border: '2px solid var(--border-heavy)',
            boxShadow: '3px 3px 0 #000',
            overflow: 'hidden',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
            cursor: 'pointer',
        }}
        whileHover={{
            borderColor: 'var(--amber)',
        }}
    >
        {/* Image */}
        <div style={{
            height: '160px',
            background: 'rgba(20,13,4,0.6)',
            borderBottom: '1px solid var(--border-heavy)',
            overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
        }}>
            <img
                src={cert.image}
                alt={cert.title}
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', padding: '0.75rem' }}
                className="transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {/* Category badge — top left */}
            <div style={{
                position: 'absolute', top: '8px', left: '8px',
                background: 'rgba(10,7,0,0.85)',
                border: '1px solid var(--border-mid)',
                padding: '2px 7px',
            }}>
                <span style={{
                    fontFamily: "'Courier Prime', monospace",
                    fontSize: '0.55rem',
                    color: 'var(--amber)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                }}>{cert.category}</span>
            </div>
        </div>

        {/* Info */}
        <div style={{ padding: '0.75rem' }}>
            <p style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: '0.55rem',
                color: 'var(--amber)',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                marginBottom: '0.3rem',
                display: 'flex', alignItems: 'center', gap: '0.3rem',
                opacity: 0.75,
            }}>
                <FiAward size={9} /> {cert.issuer}
            </p>
            <h3 style={{
                fontFamily: "'Special Elite', cursive",
                fontSize: '0.9rem',
                color: 'var(--cream)',
                marginBottom: '0.5rem',
                lineHeight: 1.3,
            }}>
                {cert.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                {cert.tags.map((tag) => (
                    <span key={tag} style={{
                        fontFamily: "'Courier Prime', monospace",
                        fontSize: '0.55rem',
                        color: 'var(--cream-muted)',
                        border: '1px solid var(--border-heavy)',
                        padding: '1px 6px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                    }}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

/* ── Main ── */
const Work = () => {
    const [active, setActive] = useState('All');
    const [selected, setSelected] = useState(null);
    const filtered = active === 'All' ? certifications : certifications.filter((c) => c.category === active);

    return (
        <section id="projects" className="section-deep mesh-work py-16 md:py-20 relative">
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
                        }}>✦ Certifications ✦</span>
                        <div style={{ flex: 1, height: '1px', background: 'var(--border-mid)' }} />
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        borderBottom: '3px double var(--border-mid)',
                        paddingBottom: '0.6rem',
                        marginBottom: '1.5rem',
                    }}
                >
                    <h2 style={{
                        fontFamily: "'Special Elite', cursive",
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        color: 'var(--cream)',
                        margin: 0,
                        textShadow: '1px 1px 0 rgba(0,0,0,0.8)',
                    }}>
                        Professional <span style={{ color: 'var(--amber)' }}>credentials</span>
                    </h2>
                </motion.div>

                {/* Filter tabs — typewriter keyboard style */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className="cursor-hover"
                            style={{
                                fontFamily: "'Courier Prime', monospace",
                                fontSize: '0.65rem',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                padding: '0.4rem 1rem',
                                background: active === cat ? 'var(--amber)' : 'rgba(10,7,0,0.5)',
                                color: active === cat ? '#0a0700' : 'var(--cream-muted)',
                                border: active === cat ? '2px solid var(--amber)' : '1px solid var(--border-mid)',
                                boxShadow: active === cat ? '3px 3px 0 #000' : '2px 2px 0 rgba(0,0,0,0.5)',
                                fontWeight: active === cat ? '700' : '400',
                                transition: 'all 0.15s ease',
                                position: 'relative',
                                top: active === cat ? '0' : '0',
                            }}
                            whileTap={{ x: 2, y: 2 }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Grid */}
                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                        gap: '0.75rem',
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((cert) => (
                            <CertCard key={cert.id} cert={cert} onClick={() => setSelected(cert)} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <AnimatePresence>
                {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
            </AnimatePresence>
        </section>
    );
};

export default Work;
