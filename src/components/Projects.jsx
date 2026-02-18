import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
    const projects = [
        {
            title: "CodeZone — Competitive Coding Battle Platform",
            description: "Conceptualized and worked on a competitive coding battle platform where users compete by solving programming challenges in real time. Focused on user interaction flow, problem-solving logic, and competitive experience design. Strengthened understanding of coding workflows and structured problem evaluation.",
            techStack: ["Python", "SQL", "JavaScript"],
            githubLink: "https://github.com/abishekjoseph9b-star/CODEZONE",
        },
        {
            title: "Inventory Management System for Manufacturing Units",
            description: "C Inventory Management System (IMS) for a manufacturing unit. Tracks raw materials and finished goods, handles stock monitoring, purchasing, and sales. Built using C structures, functions, and file handling for persistent data storage.",
            techStack: ["C", "File Handling", "Data Structures"],
            githubLink: "https://github.com/Juvansan-codes/Inventory-Management-System-for-Manufacturing-Units",
        },
    ];

    return (
        <section id="projects" className="py-20 px-6 bg-slate-900/50">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
                        >
                            <div className="p-6 flex-grow">
                                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2 py-1 bg-blue-900/30 text-blue-300 rounded border border-blue-900/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 pt-0 mt-auto flex gap-4">
                                <a
                                    href={project.githubLink}
                                    className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github size={18} />
                                    Code
                                </a>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
