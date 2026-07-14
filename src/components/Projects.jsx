import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX, FiLayers, FiArrowUpRight, FiCode } from 'react-icons/fi';

const categories = ['All', 'Web', 'IoT', 'AI'];

const projects = [
    {
        id: 1,
        title: 'belajarpakaiai',
        category: 'AI',
        description: 'Platform edukasi yang membantu orang awam belajar memerintah AI seperti ChatGPT dan Claude, cukup pakai bahasa sehari-hari. Tanpa ribet, tanpa koding.',
        tags: ['React', 'Vite', 'AI', 'Education'],
        image: null,
        liveUrl: 'https://belajarpakaiai-web.vercel.app/',
        githubUrl: '#',
        featured: true,
        gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)',
        accent: '#8b5cf6'
    },
    {
        id: 2,
        title: 'CSS Effect Library',
        category: 'Web',
        description: 'A comprehensive collection of pure CSS effects with live interactive demos and copy-ready code snippets.',
        tags: ['CSS', 'Animations', 'Web', 'Effects'],
        image: null, // Since we don't have a screenshot yet
        liveUrl: 'https://css-effect-library.space-z.ai/',
        githubUrl: '#',
        featured: false,
        gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)',
        accent: '#06b6d4'
    },
    {
        id: 3,
        title: 'CatatPengeluaranmu',
        category: 'Web',
        description: 'Aplikasi pencatatan pengeluaran pribadi yang membantu mengelola dan melacak keuangan harian dengan mudah.',
        tags: ['Web', 'Finance', 'Tracker'],
        image: null,
        liveUrl: 'https://catatpengeluaranmu.vercel.app/',
        githubUrl: '#',
        featured: false,
        gradient: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
        accent: '#10b981'
    },
];

/* ── 3D Bento Card ───────────────────────────────────────── */
const ProjectCard3D = ({ project, onClick, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e) => {
        const { currentTarget, clientX, clientY } = e;
        const rect = currentTarget.getBoundingClientRect();

        // Update CSS Variables for Glow Effect
        currentTarget.style.setProperty('--mouse-x', `${clientX - rect.left}px`);
        currentTarget.style.setProperty('--mouse-y', `${clientY - rect.top}px`);

        // Update 3D Tilt Values
        const width = rect.width;
        const height = rect.height;
        const mouseX = clientX - rect.left;
        const mouseY = clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Determine Bento sizing based on index
    let bentoClass = "bento-item-regular";
    if (index === 0 || index === 1) {
        bentoClass = "bento-item-wide"; // 2 sedang di atas (span 6)
    } else if (index === 2) {
        bentoClass = "bento-item-full"; // 1 sangat besar di bawah (span 12)
    } else {
        // Fallback if more items added
        if (index % 3 === 0) bentoClass = "bento-item-wide";
        else if (index % 3 === 1) bentoClass = "bento-item-wide";
        else bentoClass = "bento-item-full";
    }

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
            className={`glow-card-wrapper cursor-pointer group ${bentoClass} flex flex-col h-full min-h-[220px]`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: "1000px"
            }}
        >
            <div
                className="absolute inset-0 z-0 transition-opacity duration-500 opacity-20 group-hover:opacity-40"
                style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}40, transparent 70%)` }}
            />

            <div className="relative z-10 flex flex-col h-full p-5 md:p-6" style={{ transform: "translateZ(30px)" }}>
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                        {project.category === 'Web' ? <FiCode size={20} color={project.accent} /> : <FiLayers size={20} color={project.accent} />}
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase shadow-sm"
                        style={{ background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}40` }}
                    >
                        {project.category}
                    </span>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold font-outfit mb-3 transition-colors duration-300 group-hover:text-white"
                        style={{ color: '#f0eef8' }}
                    >
                        {project.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed mb-6 line-clamp-3"
                        style={{ color: 'rgba(226, 224, 240, 0.5)' }}
                    >
                        {project.description}
                    </p>
                </div>

                {/* Footer */}
                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-md text-[11px] font-medium transition-all duration-300 group-hover:bg-white/10"
                                style={{
                                    color: 'rgba(226, 224, 240, 0.6)',
                                    background: 'rgba(255, 255, 255, 0.04)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-white/5">
                        <div className="flex items-center gap-4">
                            {project.liveUrl && project.liveUrl !== '#' && (
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors"
                                    style={{ color: project.accent }}
                                >
                                    <FiExternalLink size={14} /> Live
                                </span>
                            )}
                            {project.githubUrl && project.githubUrl !== '#' && (
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors"
                                    style={{ color: 'rgba(226, 224, 240, 0.6)' }}
                                >
                                    <FiGithub size={14} /> Source
                                </span>
                            )}
                        </div>
                        <motion.div
                            className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all"
                            style={{ color: 'rgba(255,255,255,0.8)' }}
                        >
                            <FiArrowUpRight size={14} />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Image/Gradient */}
            <div className="absolute inset-0 z-[-1] overflow-hidden rounded-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700" style={{ transform: "translateZ(0px)" }}>
                {project.image ? (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a1d] via-[#0c0a1d]/80 to-transparent z-10" />
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-right-bottom opacity-50 blur-[2px] group-hover:blur-0 group-hover:scale-105 transition-all duration-700" />
                    </>
                ) : (
                    <div className="absolute inset-0 opacity-20" style={{ background: project.gradient }} />
                )}
            </div>
        </motion.div>
    );
};

/* ── Modal ───────────────────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 glow-modal-overlay"
            onClick={onClose}
        >
            <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl"
                style={{
                    background: 'rgba(15, 13, 35, 0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: `0 30px 100px -20px ${project.accent}40`
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col md:flex-row">
                    {/* Visual Side */}
                    <div className="w-full md:w-2/5 relative min-h-[250px] md:min-h-[500px] flex items-center justify-center p-8 overflow-hidden">
                        <div className="absolute inset-0 opacity-20" style={{ background: project.gradient }} />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f0d23] hidden md:block" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d23] to-transparent block md:hidden" />

                        <div className="relative z-10 w-full">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="w-full h-auto rounded-xl shadow-2xl border border-white/10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500" />
                            ) : (
                                <div className="w-full aspect-square rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                                    <FiLayers size={64} style={{ color: project.accent, opacity: 0.8 }} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-3/5 p-8 md:p-12 relative z-10">
                        <motion.button
                            onClick={onClose}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FiX size={20} />
                        </motion.button>

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}30` }}>
                            <span className="w-2 h-2 rounded-full" style={{ background: project.accent, boxShadow: `0 0 10px ${project.accent}` }} />
                            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: project.accent }}>
                                {project.category}
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black font-outfit mb-6 tracking-tight" style={{ color: '#fff' }}>
                            {project.title}
                        </h2>

                        <p className="text-base md:text-lg leading-relaxed mb-8 font-light" style={{ color: 'rgba(255,255,255,0.6)' }}>
                            {project.description}
                        </p>

                        <div className="mb-10">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-4 py-2 rounded-lg text-sm font-medium"
                                        style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', color: 'rgba(255,255,255,0.8)' }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {project.liveUrl && project.liveUrl !== '#' && (
                                <motion.a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold tracking-wide uppercase"
                                    style={{
                                        background: project.accent,
                                        color: '#fff',
                                        boxShadow: `0 10px 30px -10px ${project.accent}`,
                                    }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FiExternalLink size={18} /> View Live Project
                                </motion.a>
                            )}
                            {project.githubUrl && project.githubUrl !== '#' && (
                                <motion.a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold tracking-wide uppercase bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                    style={{ color: '#fff' }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FiGithub size={18} /> Source Code
                                </motion.a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

/* ── Main Section ────────────────────────────────────────── */
const Projects = () => {
    const [active, setActive] = useState('All');
    const [selected, setSelected] = useState(null);

    const filtered = active === 'All'
        ? projects
        : projects.filter((p) => p.category === active);

    return (
        <section id="my-projects" className="section-deep py-16 md:py-24 relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4"
                        >
                            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-indigo-300">Portfolio</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl lg:text-5xl font-black font-outfit mb-4 tracking-tight leading-tight"
                            style={{ color: '#f0eef8' }}
                        >
                            Featured{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                                Work & Projects.
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-sm md:text-base font-light text-white/50 max-w-xl"
                        >
                            A curated selection of my recent work, showcasing expertise in frontend development, UI/UX design, and complex web applications.
                        </motion.p>
                    </div>

                    {/* Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className="px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all relative overflow-hidden"
                                style={{
                                    color: active === cat ? '#fff' : 'rgba(255,255,255,0.5)',
                                }}
                            >
                                {active === cat && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div layout className="project-bento-grid">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, index) => (
                            <ProjectCard3D
                                key={project.id}
                                project={project}
                                index={index}
                                onClick={() => setSelected(project)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty state */}
                <AnimatePresence>
                    {filtered.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="flex flex-col items-center justify-center py-32 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm mt-8"
                        >
                            <div className="w-20 h-20 mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <FiLayers size={32} className="text-white/30" />
                            </div>
                            <h3 className="text-xl font-bold font-outfit text-white/70 mb-2">No projects found</h3>
                            <p className="text-white/40 text-sm">There are currently no projects in the {active} category.</p>
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
