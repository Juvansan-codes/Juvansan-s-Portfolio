import { motion } from "framer-motion";
import { Code, Music, GraduationCap } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass p-8 rounded-2xl hover:bg-slate-800/50 transition-colors"
                    >
                        <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mb-6">
                            <Code size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Developer</h3>
                        <p className="text-slate-400 leading-relaxed">
                            I am a passionate aspiring Full Stack Developer with a strong foundation in Computer Science principles.
                            I love translating ideas into functional and beautiful web applications using modern technologies.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass p-8 rounded-2xl hover:bg-slate-800/50 transition-colors"
                    >
                        <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 mb-6">
                            <GraduationCap size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Student</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Currently pursuing B.Tech in Computer Science and Engineering at <strong className="text-white">Karunya University</strong>.
                            I am actively looking for opportunities to apply my skills in real-world projects and team environments.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="glass p-8 rounded-2xl hover:bg-slate-800/50 transition-colors"
                    >
                        <div className="w-12 h-12 bg-rose-600/20 rounded-lg flex items-center justify-center text-rose-400 mb-6">
                            <Music size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Musician</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Outside of coding, I am a dedicated musician. I play in the <strong>Zion Music Band</strong> and have performed
                            before large audiences, which has taught me teamwork, discipline, and stage confidence.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
