import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX, FiLayers, FiArrowUpRight } from 'react-icons/fi';

const categories = ['All', 'Web', 'IoT', 'AI'];

const projects = [
    {
        id: 1,
        title: 'belajarpakaiai',
        category: 'AI',
        description: 'Platform edukasi yang membantu orang awam belajar memerintah AI seperti ChatGPT dan Claude, cukup pakai bahasa sehari-hari. Tanpa ribet, tanpa koding.',
        tags: ['React', 'Vite', 'AI', 'Education'],
        image: '/belajarpakaiai.png',
        liveUrl: 'https://belajarpakaiai-web.vercel.app/',
        githubUrl: '#',
        featured: true,
        gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)',
    },
    {
        id: 2,
        title: 'Smart Home IoT Dashboard',
        category: 'IoT',
        description: 'Dashboard real-time untuk monitoring suhu, kelembapan, dan kontrol perangkat rumah pintar menggunakan sensor IoT dan visualisasi data interaktif.',
        tags: ['IoT', 'React', 'Recharts', 'ESP32'],
        image: null,
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
        gradient: 'linear-gradient(135deg, #06b6d4 0%, #6366f1 50%, #8b5cf6 100%)',
    },
    {
        id: 3,
        title: 'Portfolio Website',
        category: 'Web',
        description: 'Website portfolio personal dengan desain glassmorphism modern, animasi smooth, custom cursor, dan preloader animation. Built with React & Framer Motion.',
        tags: ['React', 'Framer Motion', 'TailwindCSS', 'Vite'],
        image: null,
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #c084fc 50%, #e879f9 100%)',
    },
    {
        id: 4,
        title: 'Google Ads Campaign Analyzer',
        category: 'AI',
        description: 'Tool analisis performa kampanye Google Ads menggunakan data analytics untuk optimasi strategi digital marketing dan ROI tracking.',
        tags: ['Analytics', 'Google Ads', 'Data Viz', 'Python'],
        image: null,
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ef4444 100%)',
    },
    {
        id: 5,
        title: 'Financial Literacy App',
        category: 'Web',
        description: 'Aplikasi web untuk membantu pengguna memahami dasar-dasar literasi keuangan dengan konten interaktif dan kalkulator finansial.',
        tags: ['React', 'Finance', 'Education', 'Chart.js'],
        image: null,
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
        gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #6366f1 100%)',
    },
    {
        id: 6,
        title: 'Sensor Data Logger',
        category: 'IoT',
        description: 'Sistem logging data sensor IoT dengan penyimpanan cloud, grafik real-time, dan notifikasi threshold otomatis.',
        tags: ['IoT', 'Arduino', 'Firebase', 'WebSocket'],
        image: null,
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
        gradient: 'linear-gradient(135deg, #14b8a6 0%, #22d3ee 50%, #38bdf8 100%)',
    },
];

/* ── Modal ───────────────────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

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
                {/* Cover */}
                <div
                    className="relative h-48 sm:h-56 overflow-hidden rounded-t-[20px] flex items-center justify-center"
                    style={{ background: project.gradient }}
                >
                    {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center"
                                style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
                            >
                                <FiLayers size={28} style={{ color: '#fff' }} />
                            </div>
                            <p className="text-sm font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.8)' }}>
                                {project.category}
                            </p>
                        </motion.div>
                    )}

                    <motion.button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full cursor-hover"
                        style={{ color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.1)' }}
                        whileHover={{ scale: 1.1, color: '#fff' }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FiX size={18} />
                    </motion.button>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                    <p className="text-xs tracking-wider uppercase mb-2 flex items-center gap-1.5"
                        style={{ color: '#818cf8' }}
                    >
                        <FiLayers size={14} /> {project.category}
                    </p>
                    <h3 className="text-xl font-bold font-outfit mb-3" style={{ color: '#f0eef8' }}>
                        {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(226, 224, 240, 0.45)' }}>
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span key={tag} className="glass-tag px-3 py-1 rounded-full text-xs"
                                style={{ color: 'rgba(226, 224, 240, 0.5)' }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3">
                        {project.liveUrl && project.liveUrl !== '#' && (
                            <motion.a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium cursor-hover"
                                style={{
                                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                    color: '#fff',
                                    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.25)',
                                }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <FiExternalLink size={15} /> Live Demo
                            </motion.a>
                        )}
                        {project.githubUrl && project.githubUrl !== '#' && (
                            <motion.a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium cursor-hover glass-btn"
                                style={{ color: 'rgba(226, 224, 240, 0.7)' }}
                                whileHover={{ scale: 1.03, color: '#e2e0f0' }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <FiGithub size={15} /> Source Code
                            </motion.a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

/* ── Featured Card ───────────────────────────────────────── */
const FeaturedCard = ({ project, onClick }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onClick={onClick}
        className="glass-card rounded-2xl overflow-hidden cursor-hover group mb-8"
        data-cursor-hover
    >
        <div className="grid md:grid-cols-2 gap-0">
            {/* Visual */}
            <div
                className="relative h-56 md:h-full min-h-[240px] overflow-hidden flex items-center justify-center"
                style={{ background: project.gradient }}
            >
                {project.image ? (
                    <>
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1 rounded-full text-[10px] font-medium tracking-wide uppercase shadow-lg"
                                style={{ background: 'rgba(12, 10, 29, 0.7)', backdropFilter: 'blur(8px)', color: '#fff' }}
                            >
                                ★ Featured Project
                            </span>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Animated floating elements */}
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.div
                                className="absolute w-32 h-32 rounded-full opacity-20"
                                style={{ background: 'rgba(255,255,255,0.1)', top: '15%', left: '10%' }}
                                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className="absolute w-20 h-20 rounded-full opacity-15"
                                style={{ background: 'rgba(255,255,255,0.08)', bottom: '20%', right: '15%' }}
                                animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className="absolute w-16 h-16 rounded-lg rotate-45 opacity-10"
                                style={{ background: 'rgba(255,255,255,0.12)', top: '60%', left: '55%' }}
                                animate={{ rotate: [45, 90, 45] }}
                                transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
                            />
                        </div>

                        <motion.div
                            className="relative z-10 text-center px-6"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div
                                className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                                style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
                            >
                                <FiLayers size={32} style={{ color: '#fff' }} />
                            </div>
                            <span className="px-3 py-1 rounded-full text-xs font-medium tracking-wide"
                                style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' }}
                            >
                                ★ Featured Project
                            </span>
                        </motion.div>
                    </>
                )}
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col justify-center">
                <p className="text-[10px] tracking-wider uppercase mb-2 flex items-center gap-1"
                    style={{ color: 'rgba(129, 140, 248, 0.6)' }}
                >
                    <FiLayers size={10} /> {project.category}
                </p>
                <h3 className="text-xl md:text-2xl font-bold font-outfit mb-3 transition-colors duration-300 group-hover:text-white"
                    style={{ color: '#f0eef8' }}
                >
                    {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5 line-clamp-3"
                    style={{ color: 'rgba(226, 224, 240, 0.4)' }}
                >
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded text-[10px]"
                            style={{
                                color: 'rgba(226, 224, 240, 0.4)',
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-xs font-medium cursor-hover transition-colors"
                            style={{ color: '#818cf8' }}
                        >
                            <FiExternalLink size={13} /> Live Demo
                        </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-xs font-medium cursor-hover transition-colors"
                            style={{ color: 'rgba(226, 224, 240, 0.4)' }}
                        >
                            <FiGithub size={13} /> Source
                        </a>
                    )}
                    <span className="ml-auto inline-flex items-center gap-1 text-[10px] tracking-wide uppercase font-medium transition-all group-hover:gap-2"
                        style={{ color: 'rgba(226, 224, 240, 0.25)' }}
                    >
                        View Details <FiArrowUpRight size={11} />
                    </span>
                </div>
            </div>
        </div>
    </motion.div>
);

/* ── Regular Card ────────────────────────────────────────── */
const ProjectCard = ({ project, onClick }) => (
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
        {/* Visual Header */}
        <div
            className="relative h-36 overflow-hidden flex items-center justify-center"
            style={{ background: project.gradient }}
        >
            {/* Subtle animated orb */}
            <motion.div
                className="absolute w-24 h-24 rounded-full opacity-15"
                style={{ background: 'rgba(255,255,255,0.1)' }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.08, 0.15] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
            <div
                className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
            >
                <FiLayers size={20} style={{ color: '#fff' }} />
            </div>
            <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide uppercase"
                    style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}
                >
                    {project.category}
                </span>
            </div>
        </div>

        {/* Content */}
        <div className="p-4">
            <h3 className="text-sm font-semibold font-outfit mb-2" style={{ color: '#f0eef8' }}>
                {project.title}
            </h3>
            <p className="text-xs leading-relaxed mb-3 line-clamp-2"
                style={{ color: 'rgba(226, 224, 240, 0.35)' }}
            >
                {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[10px]"
                        style={{
                            color: 'rgba(226, 224, 240, 0.4)',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[10px] font-medium cursor-hover transition-colors"
                        style={{ color: '#818cf8' }}
                    >
                        <FiExternalLink size={10} /> Live
                    </a>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[10px] font-medium cursor-hover transition-colors"
                        style={{ color: 'rgba(226, 224, 240, 0.35)' }}
                    >
                        <FiGithub size={10} /> Code
                    </a>
                )}
                <span className="ml-auto text-[10px] tracking-wide uppercase font-medium transition-all opacity-0 group-hover:opacity-100"
                    style={{ color: 'rgba(226, 224, 240, 0.25)' }}
                >
                    <FiArrowUpRight size={12} />
                </span>
            </div>
        </div>
    </motion.div>
);

/* ── Main Section ────────────────────────────────────────── */
const Projects = () => {
    const [active, setActive] = useState('All');
    const [selected, setSelected] = useState(null);

    const featured = projects.find((p) => p.featured);
    const nonFeatured = projects.filter((p) => !p.featured);
    const filtered = active === 'All'
        ? nonFeatured
        : nonFeatured.filter((p) => p.category === active);

    return (
        <section id="my-projects" className="section-deep mesh-projects py-24 md:py-36 relative">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
                    style={{ color: 'rgba(129, 140, 248, 0.5)' }}
                >
                    Projects
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-outfit mb-4"
                    style={{ color: '#f0eef8' }}
                >
                    Things I&apos;ve <span className="gradient-text">built</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-base md:text-lg mb-10 max-w-lg font-light"
                    style={{ color: 'rgba(226, 224, 240, 0.4)' }}
                >
                    A collection of projects that showcase my skills in web development, IoT, and AI.
                </motion.p>

                {/* Featured */}
                {featured && active === 'All' && (
                    <FeaturedCard project={featured} onClick={() => setSelected(featured)} />
                )}

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 mb-8"
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className="px-4 py-2 rounded-full text-xs font-medium tracking-wide cursor-hover transition-all"
                            style={{
                                background: active === cat
                                    ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                                    : 'rgba(255, 255, 255, 0.03)',
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
                        {filtered.map((project) => (
                            <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty state */}
                <AnimatePresence>
                    {filtered.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center py-16"
                        >
                            <FiLayers size={32} style={{ color: 'rgba(226, 224, 240, 0.15)', margin: '0 auto 12px' }} />
                            <p className="text-sm" style={{ color: 'rgba(226, 224, 240, 0.3)' }}>
                                No projects in this category yet.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
