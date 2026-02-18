import { motion } from "framer-motion";

export const Skills = () => {
    const skills = [
        {
            category: "Frontend",
            items: ["HTML", "CSS", "JavaScript"],
        },
        {
            category: "Programming",
            items: ["Python", "C", "MATLAB", "SQL"],
        },
        {
            category: "Tools",
            items: ["Git", "Version Control", "Linux Command Line"],
        },
    ];

    return (
        <section id="skills" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-blue-400">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-slate-800/50 rounded-lg text-slate-300 text-sm font-medium border border-slate-700 hover:border-blue-500/30 hover:text-white transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
