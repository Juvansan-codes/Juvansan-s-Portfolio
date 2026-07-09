import { motion } from "framer-motion";

export const Skills = () => {
    const skillGroups = [
        {
            category: "Frontend",
            label: "FRONTEND",
            labelColor: "brutal-label-cyan",
            items: ["HTML", "CSS", "JavaScript"],
            highlight: "JavaScript",
        },
        {
            category: "Programming",
            label: "PROGRAMMING",
            labelColor: "brutal-label-green",
            items: ["Python", "C", "MATLAB", "SQL"],
            highlight: "Python",
        },
        {
            category: "Tools",
            label: "TOOLS & PLATFORMS",
            labelColor: "brutal-label-purple",
            items: ["Git", "Version Control", "Linux Command Line"],
            highlight: "Git",
        },
    ];

    return (
        <section id="skills" className="px-6 py-12">
            {/* Section Header */}
            <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="brutal-section-title mb-10"
            >
                TECH STACK / {new Date().getFullYear()}
            </motion.h2>

            {/* Skills Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="brutal-card p-6 md:p-8"
            >
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {skillGroups.map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
                        >
                            {/* Category Label */}
                            <div className="mb-4">
                                <span className={group.labelColor}>
                                    {group.label}
                                </span>
                                <div className="brutal-divider mt-2"></div>
                            </div>

                            {/* Skill Tags Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {group.items.map((skill) => (
                                    <div
                                        key={skill}
                                        className={`border-3 border-brutal-black px-4 py-3 font-mono font-bold uppercase text-xs tracking-wider text-center transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-sm cursor-default ${skill === group.highlight
                                                ? "bg-brutal-yellow-light"
                                                : "bg-brutal-white"
                                            }`}
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
