import { motion } from "framer-motion";
import { Code, GraduationCap, Music } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="px-6 py-12">
            {/* Section Header */}
            <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="brutal-section-title mb-10"
            >
                THE HUMAN & CODE
            </motion.h2>

            {/* About Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="brutal-card p-6 md:p-10"
            >
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Column 1: Developer */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Code size={20} strokeWidth={3} className="text-brutal-cyan" />
                            <span className="brutal-label-cyan">
                                DEVELOPER
                            </span>
                        </div>
                        <div className="space-y-4">
                            <p className="font-mono text-sm leading-relaxed">
                                I am a passionate aspiring Full Stack Developer with a strong
                                foundation in Computer Science principles. I love translating
                                ideas into functional and beautiful web applications using
                                modern technologies.
                            </p>
                            <p className="font-mono text-sm leading-relaxed">
                                Currently pursuing B.Tech in Computer Science and Engineering
                                at <strong className="font-bold">Karunya University</strong>.
                                I am actively looking for opportunities to apply my skills in
                                real-world projects and team environments.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Musician & Student */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Music size={20} strokeWidth={3} className="text-brutal-green" />
                            <span className="brutal-label-green">
                                BEYOND THE CODE
                            </span>
                        </div>
                        <div className="space-y-4">
                            <p className="font-mono text-sm leading-relaxed">
                                Outside of coding, I am a dedicated musician. I play in the{" "}
                                <strong className="font-bold">Zion Music Band</strong> and
                                have performed before large audiences, which has taught me
                                teamwork, discipline, and stage confidence.
                            </p>
                            <p className="font-mono text-sm leading-relaxed">
                                I believe the best code comes from well-rounded individuals
                                who bring diverse experiences to problem-solving — music has
                                taught me rhythm, patience, and the art of collaboration.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Decorative bottom strip */}
                <div className="mt-8 pt-6 border-t-3 border-brutal-black">
                    <div className="flex flex-wrap gap-4 items-center">
                        <span className="brutal-tag-highlight flex items-center gap-2">
                            <GraduationCap size={14} strokeWidth={3} />
                            B.TECH CSE
                        </span>
                        <span className="brutal-tag flex items-center gap-2">
                            <Music size={14} strokeWidth={3} />
                            MUSICIAN
                        </span>
                        <span className="brutal-tag flex items-center gap-2">
                            <Code size={14} strokeWidth={3} />
                            FULL STACK
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
