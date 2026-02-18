import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import profileImg from "../assets/profile.jpg";

export const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1"
                >
                    <h2 className="text-blue-400 font-medium text-lg mb-4">
                        Hello, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                        Juvansan
                        <span className="block text-slate-400 text-3xl md:text-5xl mt-2">
                            Aspiring Full Stack Developer
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg mb-8 max-w-lg">
                        B.Tech CSE Student at Karunya University. I build user-friendly web applications that solve real-world problems.
                        Passionate about clean code, music, and innovation.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/resume.pdf"
                            download="Juvansan_Resume.pdf"
                            className="border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-blue-400 px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2"
                        >
                            Download Resume
                            <Download size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 md:order-2 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border-2 border-blue-500/30 glass">
                        {/* Profile Image */}
                        <img
                            src={profileImg}
                            alt="Juvan Profile"
                            className="w-full h-full rounded-full object-cover"
                        />

                        {/* Decorative circles */}
                        <div className="absolute -z-10 w-full h-full top-0 left-0 bg-blue-600/20 blur-3xl rounded-full"></div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
