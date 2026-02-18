import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass p-8 rounded-2xl border border-slate-700 text-center"
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto">
                            I'm actively looking for opportunities to collaborate on projects or join a team.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Email</p>
                                    <a href="mailto:juvanherold@gmail.com" className="text-white hover:text-blue-400 transition-colors block">
                                        juvanherold@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                                    <Linkedin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">LinkedIn</p>
                                    <a href="https://www.linkedin.com/in/juvansan" className="text-white hover:text-blue-400 transition-colors block" target="_blank" rel="noopener noreferrer">
                                        linkedin.com/in/juvansan
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400">
                                    <Github size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">GitHub</p>
                                    <a href="https://github.com/Juvansan-codes" className="text-white hover:text-blue-400 transition-colors block" target="_blank" rel="noopener noreferrer">
                                        github.com/Juvansan-codes
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
