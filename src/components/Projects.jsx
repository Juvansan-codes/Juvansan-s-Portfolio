import { motion as Motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "CodeZone — Coding Battle Platform",
    description:
      "A concept-first platform for competitive coding duels focused on challenge flow, score logic, and real-time competitive experience.",
    techStack: ["Python", "SQL", "JavaScript"],
    githubLink: "https://github.com/abishekjoseph9b-star/CODEZONE",
  },
  {
    title: "Inventory Management System",
    description:
      "A C-based inventory system for manufacturing units with stock tracking, purchasing records, sales management, and file-based persistence.",
    techStack: ["C", "Data Structures", "File Handling"],
    githubLink: "https://github.com/Juvansan-codes/Inventory-Management-System-for-Manufacturing-Units",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="section-subtitle">Projects</p>
        <h2 className="section-title">Selected work that reflects my build style.</h2>
      </Motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass group relative overflow-hidden rounded-3xl p-7"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-cyan-400/10 opacity-0 transition group-hover:opacity-100" />
            <h3 className="relative text-xl font-semibold text-white">{project.title}</h3>
            <p className="relative mt-4 text-sm leading-relaxed text-slate-300">{project.description}</p>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="relative mt-7 flex items-center gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
              >
                <Github size={16} />
                Source
              </a>
              <span className="inline-flex items-center gap-1 text-sm text-slate-400">
                Featured
                <ArrowUpRight size={14} />
              </span>
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
};
