import { motion as Motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 85 },
      { name: "JavaScript", level: 82 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Backend & Data",
    items: [
      { name: "Python", level: 78 },
      { name: "SQL", level: 75 },
      { name: "C", level: 72 },
    ],
  },
  {
    category: "Workflow",
    items: [
      { name: "Git/GitHub", level: 80 },
      { name: "Problem Solving", level: 84 },
      { name: "Linux CLI", level: 74 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="section-subtitle">Skills</p>
        <h2 className="section-title">Technology stack and core strengths.</h2>
      </Motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group, index) => (
          <Motion.article
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass rounded-3xl p-6"
          >
            <h3 className="text-lg font-semibold text-cyan-200">{group.category}</h3>
            <div className="mt-6 space-y-4">
              {group.items.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-200">{skill.name}</span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
};
