import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import profileImg from "../assets/profile.jpg";

export const Hero = () => {
    return (
        <section
            id="home"
            className="px-6 py-8 md:py-12"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="brutal-card p-8 md:p-12 lg:p-16 relative overflow-hidden"
            >
                <div className="grid md:grid-cols-[1fr,auto] gap-8 md:gap-12 items-center">
                    {/* Text Content */}
                    <div className="order-2 md:order-1">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-mono font-bold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-6"
                        >
                            ASPIRING
                            <br />
                            FULL STACK
                            <br />
                            <span className="text-brutal-yellow" style={{ WebkitTextStroke: '1px #000' }}>
                                DEVELOPER
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="font-mono text-sm md:text-base leading-relaxed max-w-xl mb-8 opacity-80"
                        >
                            B.Tech CSE Student at Karunya University. I build
                            user-friendly web applications that solve real-world
                            problems. Passionate about clean code, music, and
                            innovation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#projects"
                                className="brutal-btn-primary flex items-center gap-2 group"
                            >
                                SEE MY PROJECTS
                                <ArrowRight
                                    size={18}
                                    strokeWidth={3}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </a>
                            <a
                                href="resume.pdf"
                                download="Juvansan_Resume.pdf"
                                className="brutal-btn-secondary flex items-center gap-2"
                            >
                                <Download size={18} strokeWidth={3} />
                                DOWNLOAD RESUME
                            </a>
                        </motion.div>
                    </div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="order-1 md:order-2 flex justify-center"
                    >
                        <div className="relative">
                            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 border-3 border-brutal-black shadow-brutal overflow-hidden">
                                <img
                                    src={profileImg}
                                    alt="Juvansan Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative stamp */}
                            <div className="absolute -bottom-3 -right-3 bg-brutal-yellow border-3 border-brutal-black px-3 py-1 font-mono font-bold text-xs uppercase rotate-[-4deg] shadow-brutal-sm">
                                HELLO!
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative corner marks */}
                <div className="absolute top-3 right-3 w-4 h-4 border-t-3 border-r-3 border-brutal-black opacity-30"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-3 border-l-3 border-brutal-black opacity-30"></div>
            </motion.div>
        </section>
    );
};
