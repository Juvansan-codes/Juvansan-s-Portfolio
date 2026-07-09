import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="border-t-3 border-brutal-black mt-12">
            <div className="max-w-[1440px] mx-auto px-6">
                {/* Top Row */}
                <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/Juvansan-codes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-mono font-bold text-sm uppercase tracking-wider hover:text-brutal-yellow transition-colors group"
                        >
                            <Github size={18} strokeWidth={3} className="group-hover:rotate-12 transition-transform" />
                            GITHUB
                        </a>
                        <a
                            href="https://www.linkedin.com/in/juvansan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-mono font-bold text-sm uppercase tracking-wider hover:text-brutal-yellow transition-colors group"
                        >
                            <Linkedin size={18} strokeWidth={3} className="group-hover:rotate-12 transition-transform" />
                            LINKEDIN
                        </a>
                    </div>

                    {/* Contact Button */}
                    <a
                        href="mailto:juvanherold@gmail.com"
                        className="brutal-btn-primary flex items-center gap-2 text-xs"
                    >
                        <Mail size={16} strokeWidth={3} />
                        CONTACT ME
                    </a>
                </div>

                {/* Bottom Row */}
                <div className="border-t-2 border-brutal-black py-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-center opacity-60">
                        &copy; {new Date().getFullYear()} / BUILT WITH REACT + TAILWIND / JUVANSAN
                    </p>
                </div>
            </div>

            <style>{`
                .dark-mode footer {
                    border-color: #444444;
                    background-color: #1A1A1A;
                    color: #E0E0E0;
                }
                .dark-mode footer a:hover {
                    color: #FFD700;
                }
                .dark-mode footer .border-t-2 {
                    border-color: #444444;
                }
            `}</style>
        </footer>
    );
};
