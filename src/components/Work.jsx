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

const CertModal = ({ cert, onClose }) => {
    if (!cert) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(12, 10, 29, 0.8)', backdropFilter: 'blur(16px)' }}
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="glass-modal max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image */}
                <div className="relative h-48 sm:h-64 overflow-hidden rounded-t-[20px]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-contain p-6" />
                    <motion.button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full cursor-hover"
                        style={{ color: 'rgba(226, 224, 240, 0.5)', background: 'rgba(255, 255, 255, 0.05)' }}
                        whileHover={{ scale: 1.1, color: '#e2e0f0' }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FiX size={18} />
                    </motion.button>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                    <p className="text-xs tracking-wider uppercase mb-2 flex items-center gap-1.5" style={{ color: '#818cf8' }}>
                        <FiAward size={14} /> {cert.issuer}
                    </p>
                    <h3 className="text-xl font-bold font-outfit mb-3" style={{ color: '#f0eef8' }}>
                        {cert.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(226, 224, 240, 0.45)' }}>
                        {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {cert.tags.map((tag) => (
                            <span key={tag} className="glass-tag px-3 py-1 rounded-full text-xs" style={{ color: 'rgba(226, 224, 240, 0.5)' }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <motion.a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium cursor-hover"
                        style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', boxShadow: '0 4px 20px rgba(99, 102, 241, 0.25)' }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <FiExternalLink size={15} /> View Certificate
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
};

const CertCard = ({ cert, onClick }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
        className="glass-card rounded-xl overflow-hidden h-full cursor-hover group"
        data-cursor-hover
    >
        <div className="relative h-44 overflow-hidden" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
            <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute top-3 left-3">
                <span className="glass-tag px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide uppercase" style={{ color: '#818cf8' }}>
                    {cert.category}
                </span>
            </div>
        </div>

        <div className="p-4">
            <p className="text-[10px] tracking-wider uppercase mb-1.5 flex items-center gap-1" style={{ color: 'rgba(226, 224, 240, 0.35)' }}>
                <FiAward size={10} /> {cert.issuer}
            </p>
            <h3 className="text-sm font-semibold font-outfit mb-2" style={{ color: '#f0eef8' }}>
                {cert.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
                {cert.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[10px]"
                        style={{ color: 'rgba(226, 224, 240, 0.4)', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Work = () => {
    const [active, setActive] = useState('All');
    const [selected, setSelected] = useState(null);

    const filtered = active === 'All' ? certifications : certifications.filter((c) => c.category === active);

    return (
        <section id="projects" className="section-deep mesh-work py-24 md:py-36 relative">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
                    style={{ color: 'rgba(129, 140, 248, 0.5)' }}
                >
                    Certifications
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-outfit mb-10"
                    style={{ color: '#f0eef8' }}
                >
                    Professional <span className="gradient-text">credentials</span>
                </motion.h2>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 mb-10"
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className="px-4 py-2 rounded-full text-xs font-medium tracking-wide cursor-hover transition-all"
                            style={{
                                background: active === cat ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(255, 255, 255, 0.03)',
                                color: active === cat ? '#fff' : 'rgba(226, 224, 240, 0.45)',
                                border: active === cat ? 'none' : '1px solid rgba(255, 255, 255, 0.06)',
                                boxShadow: active === cat ? '0 4px 15px rgba(99, 102, 241, 0.2)' : 'none',
                            }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
