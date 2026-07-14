import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        'Web Development', 'IoT Systems', 'Data Analytics',
        'Digital Marketing', 'Graphic Design', 'Problem Solving',
    ];

    return (
        <section id="about" className="section-deep mesh-about py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                {/* Section label */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs tracking-[0.4em] uppercase mb-3 font-medium"
                    style={{ color: 'rgba(129, 140, 248, 0.5)' }}
                >
                    About
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold font-outfit mb-8"
                    style={{ color: '#f0eef8' }}
                >
                    A bit about <span className="gradient-text">me</span>
                </motion.h2>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left — Text */}
                    <div className="space-y-4">
                        {[
                            'A results-oriented Fresh Graduate from Politeknik Negeri Sriwijaya and a dedicated Information Technology Enthusiast. I have honed my technical and managerial skills through impactful internship experiences in both the industrial and public sectors.',
                            'Formerly interned at the Ministry of Administrative and Bureaucratic Reform (Kementerian PANRB), gaining deep insights into organizational efficiency, governance, and digital transformation. Previously at PT Pupuk Sriwidjaja Palembang, immersed in a competitive industrial environment.',
                        ].map((text, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="text-sm md:text-base leading-relaxed font-light"
                                style={{ color: 'rgba(226, 224, 240, 0.45)' }}
                            >
                                {text}
                            </motion.p>
                        ))}
                    </div>

                    {/* Right — Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-xs uppercase tracking-widest mb-4 font-medium"
                            style={{ color: 'rgba(129, 140, 248, 0.5)' }}>
                            Core Skills
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {skills.map((skill, i) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    className="glass-tag px-3.5 py-1.5 rounded-full text-sm font-medium cursor-hover"
                                    style={{ color: 'rgba(226, 224, 240, 0.5)' }}
                                    whileHover={{
                                        color: '#818cf8',
                                        borderColor: 'rgba(129, 140, 248, 0.2)',
                                        background: 'rgba(129, 140, 248, 0.06)',
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="mt-8 pt-6 grid grid-cols-2 gap-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                            {[
                                { value: '3+', label: 'Projects Built' },
                                { value: '9+', label: 'Certifications' },
                                { value: '2', label: 'Internships' },
                                { value: '2025', label: 'Graduate Year' },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-2xl font-bold font-outfit" style={{ color: '#f0eef8' }}>{stat.value}</p>
                                    <p className="text-xs" style={{ color: 'rgba(226, 224, 240, 0.4)' }}>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
