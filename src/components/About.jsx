import { motion as Motion } from "framer-motion";
import { Code2, GraduationCap, Music2, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Product-focused Coding",
    description:
      "I enjoy turning ideas into polished interfaces with scalable component structures and reliable data flow.",
  },
  {
    icon: GraduationCap,
    title: "Academic Foundation",
    description:
      "B.Tech CSE student at Karunya University, actively sharpening algorithmic thinking and system design fundamentals.",
  },
  {
    icon: Music2,
    title: "Creative Discipline",
    description:
      "Performing with Zion Music Band has strengthened my collaboration, confidence, and consistency under pressure.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20">
      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="section-subtitle">About</p>
        <h2 className="section-title">A developer blending technology, creativity, and impact.</h2>
      </Motion.div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1.8fr]">
        <Motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="glass rounded-3xl p-7"
        >
          <div className="mb-6 inline-flex rounded-xl border border-cyan-300/30 bg-cyan-400/10 p-3 text-cyan-200">
            <Sparkles size={22} />
          </div>
          <h3 className="text-2xl font-semibold text-white">What I bring</h3>
          <p className="mt-4 leading-relaxed text-slate-300">
            I build modern web experiences that are intuitive, responsive, and focused on user outcomes.
            I care deeply about writing clean code and continuously improving through projects and teamwork.
          </p>
        </Motion.article>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="glass rounded-3xl p-6"
              >
                <div className="mb-4 inline-flex rounded-xl border border-white/15 bg-white/10 p-3 text-cyan-200">
                  <Icon size={20} />
                </div>
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
