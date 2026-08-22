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
        accent: '#c8860a',
    },
    {
        id: 2,
        title: 'CSS Effect Library',
        category: 'Web',
        description: 'A comprehensive collection of pure CSS effects with live interactive demos and copy-ready code snippets.',
        tags: ['CSS', 'Animations', 'Web', 'Effects'],
        image: null,
        liveUrl: 'https://css-effect-library.space-z.ai/',
        githubUrl: '#',
        accent: '#8b6a3a',
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
        accent: '#4a7a3a',
    },
];

/* ── 3D Project Card ─────────────────────────── */
const ProjectCard = ({ project, onClick, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 250, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 250, damping: 30 });
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg']);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const handleMouseLeave = () => { x.set(0); y.set(0); };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="cursor-pointer group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                background: 'rgba(14, 9, 0, 0.7)',
                border: '2px solid var(--border-heavy)',
                boxShadow: '3px 3px 0 #000',
                overflow: 'hidden',
                minHeight: '220px',
                display: 'flex',
                flexDirection: 'column',
            }}
            whileHover={{ borderColor: 'var(--amber)' }}
        >
            {/* Accent top line */}
            <div style={{ height: '2px', background: project.accent, opacity: 0.55 }} />

            <div style={{ padding: '1.25rem', transform: 'translateZ(10px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{
                        width: '36px', height: '36px',
                        border: `1px solid ${project.accent}50`,
                        background: `${project.accent}10`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                    }}>
                        {project.category === 'Web' ? <FiCode size={16} color={project.accent} /> : <FiLayers size={16} color={project.accent} />}
                    </div>
                    <span style={{
                        fontFamily: "'Courier Prime', monospace",
                        fontSize: '0.55rem',
                        color: project.accent,
                        border: `1px solid ${project.accent}40`,
                        background: `${project.accent}08`,
                        padding: '2px 8px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                    }}>
                        {project.category}
                    </span>
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                    <h3 style={{
                        fontFamily: "'Special Elite', cursive",
                        fontSize: '1.3rem',
                        color: 'var(--cream)',
                        marginBottom: '0.6rem',
                        textShadow: '1px 1px 0 rgba(0,0,0,0.6)',
                        lineHeight: 1.2,
                    }}>
                        {project.title}
                    </h3>
                    <p style={{
                        fontFamily: "'Courier Prime', monospace",
                        fontSize: '0.78rem',
                        color: 'var(--cream-muted)',
                        fontStyle: 'italic',
                        lineHeight: '1.65',
                        marginBottom: '0.75rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}>
                        {project.description}
                    </p>
                </div>

                {/* Tags + Footer */}
                <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.75rem' }}>
                        {project.tags.map((tag) => (
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

                    <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        paddingTop: '0.6rem',
                        borderTop: '1px solid var(--border-heavy)',
                    }}>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            {project.liveUrl && project.liveUrl !== '#' && (
                                <span style={{
                                    fontFamily: "'Courier Prime', monospace",
                                    fontSize: '0.6rem', color: project.accent,
                                    textTransform: 'uppercase', letterSpacing: '0.1em',
                                    display: 'flex', alignItems: 'center', gap: '4px',
                                }}>
                                    <FiExternalLink size={10} /> LIVE
                                </span>
                            )}
                        </div>
                        <div style={{
                            width: '24px', height: '24px',
                            border: '1px solid var(--border-heavy)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'var(--cream-muted)',
                        }}>
                            <FiArrowUpRight size={12} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

/* ── Modal ─────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{ backgroundColor: 'rgba(5, 3, 0, 0.94)' }}
            onClick={onClose}
        >
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                style={{
                    background: '#0e0900',
                    border: '2px solid var(--border-mid)',
                    boxShadow: '8px 8px 0 #000, 12px 12px 0 rgba(0,0,0,0.4)',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* DOS Title bar */}
                <div style={{
                    background: 'var(--amber)',
                    padding: '5px 12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(0,0,0,0.2)',
                }}>
                    <span style={{
                        fontFamily: "'Courier Prime', monospace",
                        fontSize: '0.6rem', color: '#0a0700',
                        fontWeight: '700', letterSpacing: '0.2em', textTransform: 'uppercase',
                    }}>
                        PROJECT DETAIL — {project.category.toUpperCase()}
                    </span>
                    <motion.button
                        onClick={onClose}
                        className="cursor-hover"
                        style={{
                            background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(0,0,0,0.3)',
                            color: '#0a0700', width: '20px', height: '20px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                        whileHover={{ background: 'rgba(0,0,0,0.4)' }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FiX size={12} />
                    </motion.button>
                </div>

                <div className="flex flex-col md:flex-row">
                    {/* Visual */}
                    <div className="w-full md:w-2/5" style={{
                        minHeight: '200px', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', padding: '2rem',
                        borderBottom: '1px solid var(--border-heavy)',
                        background: 'rgba(10,7,0,0.4)',
                    }}>
                        <div className="w-full">
                            {project.image ? (
                                <img src={project.image} alt={project.title} style={{
                                    width: '100%', border: '1px solid var(--border-mid)',
                                    transform: 'rotate(-1deg)', boxShadow: '4px 4px 0 rgba(0,0,0,0.5)',
                                }} />
                            ) : (
                                <div style={{
                                    aspectRatio: '1', border: '1px solid var(--border-mid)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: `${project.accent}06`, transform: 'rotate(-1deg)',
                                }}>
                                    <FiLayers size={48} style={{ color: project.accent, opacity: 0.4 }} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-3/5" style={{ padding: '1.5rem' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                            padding: '2px 8px', border: `1px solid ${project.accent}40`,
                            background: `${project.accent}08`, marginBottom: '0.75rem',
                        }}>
                            <span style={{ width: '6px', height: '6px', background: project.accent, display: 'inline-block' }} />
                            <span style={{
                                fontFamily: "'Courier Prime', monospace", fontSize: '0.55rem',
                                color: project.accent, letterSpacing: '0.25em', textTransform: 'uppercase',
                            }}>{project.category}</span>
                        </div>

                        <h2 style={{
                            fontFamily: "'Special Elite', cursive",
                            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                            color: 'var(--cream)', marginBottom: '0.75rem',
                            borderBottom: '2px double var(--border-mid)', paddingBottom: '0.5rem',
                            textShadow: '1px 1px 0 rgba(0,0,0,0.8)',
                        }}>
                            {project.title}
                        </h2>

                        <p style={{
                            fontFamily: "'Courier Prime', monospace", fontSize: '0.82rem',
                            color: 'var(--cream-muted)', fontStyle: 'italic', lineHeight: '1.75',
                            marginBottom: '1.25rem', borderLeft: '2px solid var(--border-mid)',
                            paddingLeft: '0.75rem',
                        }}>
                            {project.description}
                        </p>

                        <div style={{ marginBottom: '1.25rem' }}>
                            <p style={{
                                fontFamily: "'Courier Prime', monospace", fontSize: '0.55rem',
                                color: 'var(--amber)', letterSpacing: '0.35em', textTransform: 'uppercase',
                                marginBottom: '0.5rem', opacity: 0.7,
                            }}>Technologies</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                                {project.tags.map((tag) => (
                                    <span key={tag} style={{
                                        fontFamily: "'Courier Prime', monospace", fontSize: '0.6rem',
                                        color: 'var(--cream-dim)', border: '1px solid var(--border-mid)',
                                        background: 'rgba(200,134,10,0.05)', padding: '2px 8px',
                                        letterSpacing: '0.08em', textTransform: 'uppercase',
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                            {project.liveUrl && project.liveUrl !== '#' && (
                                <motion.a
                                    href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                    className="retro-btn-primary cursor-hover"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                        padding: '0.6rem 1.25rem', fontSize: '0.65rem', textDecoration: 'none',
                                    }}
                                    whileTap={{ x: 4, y: 4 }}
                                >
                                    <FiExternalLink size={12} /> [ VIEW LIVE ]
                                </motion.a>
                            )}
                            {project.githubUrl && project.githubUrl !== '#' && (
                                <motion.a
                                    href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                    className="retro-btn cursor-hover"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                        padding: '0.6rem 1.25rem', fontSize: '0.65rem',
                                        color: 'var(--cream-dim)', textDecoration: 'none',
                                    }}
                                    whileTap={{ x: 2, y: 2 }}
                                >
                                    <FiGithub size={12} /> [ SOURCE ]
                                </motion.a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

/* ── Main Section ──────────────────────────── */
const Projects = () => {
    const [active, setActive] = useState('All');
    const [selected, setSelected] = useState(null);
    const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

    return (
        <section id="my-projects" className="section-deep mesh-projects py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

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
                            fontFamily: "'Courier Prime', monospace", fontSize: '0.6rem',
                            color: 'var(--amber)', letterSpacing: '0.5em', textTransform: 'uppercase',
                        }}>✦ Portfolio ✦</span>
                        <div style={{ flex: 1, height: '1px', background: 'var(--border-mid)' }} />
                    </div>
                </motion.div>

                {/* Header + Filters */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between" style={{ gap: '1.25rem', marginBottom: '2rem' }}>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ borderBottom: '3px double var(--border-mid)', paddingBottom: '0.6rem', marginBottom: '0.75rem' }}
                        >
                            <h2 style={{
                                fontFamily: "'Special Elite', cursive",
                                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                                color: 'var(--cream)', margin: 0, textShadow: '1px 1px 0 rgba(0,0,0,0.8)',
                            }}>
                                Featured <span style={{ color: 'var(--amber)' }}>Work & Projects.</span>
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            style={{
                                fontFamily: "'Courier Prime', monospace", fontSize: '0.82rem',
                                color: 'var(--cream-muted)', fontStyle: 'italic', maxWidth: '500px',
                                lineHeight: '1.7', margin: 0,
                            }}
                        >
                            A curated selection of my recent work, showcasing expertise in frontend development, UI/UX design, and complex web applications.
                        </motion.p>
                    </div>

                    {/* Filter buttons — typewriter key style */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}
                    >
                        {categories.map((cat) => (
                            <motion.button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className="cursor-hover"
                                style={{
                                    fontFamily: "'Courier Prime', monospace",
                                    fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                                    padding: '0.4rem 1rem',
                                    background: active === cat ? 'var(--amber)' : 'rgba(10,7,0,0.5)',
                                    color: active === cat ? '#0a0700' : 'var(--cream-muted)',
                                    border: active === cat ? '2px solid var(--amber)' : '1px solid var(--border-mid)',
                                    boxShadow: active === cat ? '3px 3px 0 #000' : '2px 2px 0 rgba(0,0,0,0.4)',
                                    fontWeight: active === cat ? '700' : '400',
                                    transition: 'all 0.15s ease',
                                }}
                                whileTap={{ x: 2, y: 2 }}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                        gap: '0.75rem',
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, index) => (
                            <ProjectCard
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
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center',
                                justifyContent: 'center', padding: '4rem 2rem',
                                border: '1px solid var(--border-heavy)', marginTop: '1rem',
                            }}
                        >
                            <FiLayers size={24} style={{ color: 'var(--amber)', opacity: 0.3, marginBottom: '0.75rem' }} />
                            <h3 style={{ fontFamily: "'Special Elite', cursive", color: 'var(--cream-muted)', margin: '0 0 0.25rem' }}>No projects found</h3>
                            <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: '0.75rem', color: 'var(--cream-muted)', margin: 0 }}>
                                No projects in the {active} category.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
