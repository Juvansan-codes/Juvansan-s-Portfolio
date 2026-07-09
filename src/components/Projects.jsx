import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
    const projects = [
        {
            title: "FestForge — College Event Management Portal",
            description: "A premium, full-stack college event management and registration portal. Features immersive event discovery, seamless multi-tier ticket registration (Free, General, VIP, Early Bird), digital wallet passes with QR codes, real-time analytics dashboard for organizers, ticket tier management, Notion-style agenda planner with PDF export, and live attendee monitoring.",
            techStack: ["React", "TypeScript", "Supabase", "Framer Motion", "Vite"],
            githubLink: "https://github.com/Juvansan-codes/College-Event-Management-Portal",
            liveLink: "https://festforge.vercel.app/",
        },
        {
            title: "Vyora — AI-Powered Trip Planner",
            description: "A minimalist, intelligent travel planning web app that turns hours of trip research into a personalized itinerary in minutes. Features a conversational AI agent powered by Groq's Llama-3 model that dynamically adjusts schedules, recommends restaurants, and optimizes budgets. Uses advanced function calling to surgically update structured trip plans in real-time.",
            techStack: ["Next.js", "TypeScript", "MongoDB", "Groq AI", "NextAuth"],
            githubLink: "https://github.com/Juvansan-codes/Vyora",
            liveLink: "https://vyora-trip.vercel.app/",
        },
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
        <section id="projects" className="px-6 py-12">
            {/* Section Header */}
            <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="brutal-section-title mb-10"
            >
                PROJECTS / DEEP DIVE
            </motion.h2>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="brutal-card flex flex-col h-full"
                    >
                        {/* Project Image Placeholder */}
                        <div className="h-48 bg-brutal-black border-b-3 border-brutal-black flex items-center justify-center relative overflow-hidden">
                            <span className="font-mono text-brutal-white text-sm uppercase tracking-widest opacity-50">
                                {project.title.split("—")[0].trim()}
                            </span>
                            {/* Decorative grid lines */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="w-full h-full" style={{
                                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                                    backgroundSize: '30px 30px'
                                }}></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-grow flex flex-col">
                            <h3 className="font-mono font-bold uppercase text-lg md:text-xl mb-4 leading-tight">
                                {project.title.includes("—")
                                    ? project.title.split("—")[0].trim()
                                    : project.title
                                }
                            </h3>

                            <p className="font-mono text-sm leading-relaxed mb-6 opacity-75 flex-grow">
                                {project.description}
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="brutal-tag"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 mt-auto">
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        className="brutal-btn-primary flex items-center gap-2 text-xs flex-1 justify-center"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink size={16} strokeWidth={3} />
                                        LIVE DEMO
                                    </a>
                                )}
                                <a
                                    href={project.githubLink}
                                    className="brutal-btn-secondary flex items-center gap-2 text-xs flex-1 justify-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github size={16} strokeWidth={3} />
                                    READ CODE
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
