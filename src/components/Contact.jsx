import { motion as Motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const contactItems = [
  {
    label: "Email",
    value: "juvanherold@gmail.com",
    href: "mailto:juvanherold@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/juvansan",
    href: "https://www.linkedin.com/in/juvansan",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Juvansan-codes",
    href: "https://github.com/Juvansan-codes",
    icon: Github,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="section-subtitle">Contact</p>
        <h2 className="section-title">Let’s build something meaningful together.</h2>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass rounded-3xl p-7 sm:p-9"
      >
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-6">
          <p className="max-w-2xl text-slate-300">
            I'm currently open to internships, collaborative builds, and opportunities where I can contribute,
            learn quickly, and ship impactful products.
          </p>
          <a
            href="mailto:juvanherold@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Send Message
            <Send size={16} />
          </a>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                <div className="mb-3 inline-flex rounded-lg border border-white/15 bg-white/10 p-2 text-cyan-200">
                  <Icon size={18} />
                </div>
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-white">{item.value}</p>
              </a>
            );
          })}
        </div>
      </Motion.div>
    </section>
  );
};
