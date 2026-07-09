import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        'Web Development', 'IoT Systems', 'Data Analytics',
        'Digital Marketing', 'Graphic Design', 'Problem Solving',
    ];

    return (
        <section id="about" className="section-deep mesh-about py-24 md:py-36 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section label */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
                    style={{ color: 'rgba(129, 140, 248, 0.5)' }}
                >
                    About
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold font-outfit mb-12"
                    style={{ color: '#f0eef8' }}
                >
                    A bit about <span className="gradient-text">me</span>
                </motion.h2>

                <div className="space-y-6">
                    {[
                        'A results-oriented Fresh Graduate from Politeknik Negeri Sriwijaya and a dedicated Information Technology Enthusiast. I have honed my technical and managerial skills through impactful internship experiences in both the industrial and public sectors.',
                        'Currently interning at the Ministry of Administrative and Bureaucratic Reform (Kementerian PANRB), gaining deep insights into organizational efficiency, governance, and digital transformation. Previously at PT Pupuk Sriwidjaja Palembang, immersed in a competitive industrial environment.',
                        'Driven by passion for technology, constantly exploring the latest IT trends and leveraging digital solutions to solve real-world challenges.',
                    ].map((text, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="text-base md:text-lg leading-relaxed font-light"
                            style={{ color: 'rgba(226, 224, 240, 0.45)' }}
                        >
                            {text}
                        </motion.p>
                    ))}
                </div>

                {/* Skills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 pt-10"
                    style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
                >
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, i) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="glass-tag px-4 py-2 rounded-full text-sm font-medium cursor-hover"
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
                </motion.div>
            </div>
        </section>
    );
};

export default About;
