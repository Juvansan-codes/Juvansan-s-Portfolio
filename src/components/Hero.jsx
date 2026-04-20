import { motion as Motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const statCards = [
  { label: "Projects Built", value: "10+" },
  { label: "Hackathons", value: "4" },
  { label: "Learning Focus", value: "Full Stack + AI" },
];

export const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-14">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <Motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <p className="section-subtitle">Creative Developer Portfolio</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Building fast, elegant digital experiences that people love to use.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I'm Juvansan, a Computer Science student and aspiring full stack developer focused on clean
            architecture, polished UI, and practical problem-solving.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="resume.pdf"
              download="Juvansan_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Resume
              <Download size={18} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://github.com/Juvansan-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/5 p-3 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/juvansan"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/5 p-3 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="glass relative rounded-3xl p-6 sm:p-7">
            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-violet-500/30 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-cyan-400/30 blur-2xl" />

            <div className="mx-auto mb-6 h-52 w-52 overflow-hidden rounded-2xl border border-white/15 sm:h-64 sm:w-64">
              <img src={profileImg} alt="Juvansan profile" className="h-full w-full object-cover" />
            </div>

            <div className="space-y-3">
              {statCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <p className="text-sm text-slate-300">{card.label}</p>
                  <p className="text-sm font-semibold text-white">{card.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};
