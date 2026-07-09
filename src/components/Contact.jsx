import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="px-6 py-12">
            {/* Section Header */}
            <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="brutal-section-title mb-10"
            >
                GET IN TOUCH
            </motion.h2>

            {/* Contact Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="brutal-card p-6 md:p-10"
            >
                <div className="text-center mb-8">
                    <h3 className="font-mono font-bold uppercase text-xl md:text-2xl mb-4">
                        LET'S CONNECT
                    </h3>
                    <p className="font-mono text-sm leading-relaxed max-w-lg mx-auto opacity-75">
                        I'm actively looking for opportunities to collaborate on projects or
                        join a team. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                    {/* Email */}
                    <motion.a
                        href="mailto:juvanherold@gmail.com"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="border-3 border-brutal-black p-6 flex flex-col items-center gap-3 hover:bg-brutal-yellow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal transition-all duration-150 group"
                    >
                        <div className="w-12 h-12 border-3 border-brutal-black flex items-center justify-center group-hover:bg-brutal-black group-hover:text-brutal-yellow transition-colors">
                            <Mail size={22} strokeWidth={3} />
                        </div>
                        <span className="brutal-label">EMAIL</span>
                        <span className="font-mono text-xs text-center break-all">
                            juvanherold@gmail.com
                        </span>
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                        href="https://www.linkedin.com/in/juvansan"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="border-3 border-brutal-black p-6 flex flex-col items-center gap-3 hover:bg-brutal-yellow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal transition-all duration-150 group"
                    >
                        <div className="w-12 h-12 border-3 border-brutal-black flex items-center justify-center group-hover:bg-brutal-black group-hover:text-brutal-yellow transition-colors">
                            <Linkedin size={22} strokeWidth={3} />
                        </div>
                        <span className="brutal-label">LINKEDIN</span>
                        <span className="font-mono text-xs text-center">
                            linkedin.com/in/juvansan
                        </span>
                    </motion.a>

                    {/* GitHub */}
                    <motion.a
                        href="https://github.com/Juvansan-codes"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="border-3 border-brutal-black p-6 flex flex-col items-center gap-3 hover:bg-brutal-yellow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal transition-all duration-150 group"
                    >
                        <div className="w-12 h-12 border-3 border-brutal-black flex items-center justify-center group-hover:bg-brutal-black group-hover:text-brutal-yellow transition-colors">
                            <Github size={22} strokeWidth={3} />
                        </div>
                        <span className="brutal-label">GITHUB</span>
                        <span className="font-mono text-xs text-center">
                            github.com/Juvansan-codes
                        </span>
                    </motion.a>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <a
                        href="mailto:juvanherold@gmail.com"
                        className="brutal-btn-primary inline-flex items-center gap-2"
                    >
                        <Send size={16} strokeWidth={3} />
                        SAY HELLO
                    </a>
                </div>
            </motion.div>
        </section>
    );
};
