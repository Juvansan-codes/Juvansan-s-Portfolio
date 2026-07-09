import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    const navLinks = [
        { name: "WORK", href: "#projects" },
        { name: "SKILLS", href: "#skills" },
        { name: "ABOUT", href: "#about" },
        { name: "CONTACT", href: "#contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-brutal-white dark-nav brutal-border-b">
            <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-mono font-bold text-sm uppercase tracking-wider text-brutal-black hover:text-brutal-yellow transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brutal-yellow group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile: Logo */}
                <a href="#home" className="md:hidden font-mono font-bold text-lg uppercase">
                    J.
                </a>

                {/* Right Side: Dark Mode Toggle */}
                <div className="hidden md:flex items-center gap-4">
                    <span className="font-mono font-bold text-xs uppercase tracking-wider">
                        DARK MODE
                    </span>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="w-14 h-8 border-3 border-brutal-black flex items-center cursor-pointer relative overflow-hidden"
                        aria-label="Toggle dark mode"
                    >
                        <div
                            className={`w-6 h-full transition-all duration-300 ${darkMode
                                    ? "ml-auto bg-brutal-black"
                                    : "ml-0 bg-brutal-yellow"
                                }`}
                        ></div>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden border-3 border-brutal-black p-2 hover:bg-brutal-yellow transition-colors cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={22} strokeWidth={3} /> : <Menu size={22} strokeWidth={3} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden brutal-border-b bg-brutal-white">
                    <div className="flex flex-col">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-mono font-bold text-sm uppercase tracking-wider px-6 py-4 border-b-2 border-brutal-black hover:bg-brutal-yellow transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="px-6 py-4 flex items-center gap-4">
                            <span className="font-mono font-bold text-xs uppercase tracking-wider">
                                DARK MODE
                            </span>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="w-14 h-8 border-3 border-brutal-black flex items-center cursor-pointer"
                                aria-label="Toggle dark mode"
                            >
                                <div
                                    className={`w-6 h-full transition-all duration-300 ${darkMode
                                            ? "ml-auto bg-brutal-black"
                                            : "ml-0 bg-brutal-yellow"
                                        }`}
                                ></div>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .dark-mode .dark-nav {
                    background-color: #1A1A1A;
                    border-color: #444444;
                }
                .dark-mode .dark-nav a,
                .dark-mode .dark-nav span,
                .dark-mode .dark-nav button {
                    color: #E0E0E0;
                }
                .dark-mode .dark-nav a:hover {
                    color: #FFD700;
                }
                .dark-mode .dark-nav .md\\:hidden + div,
                .dark-mode .brutal-border-b {
                    border-color: #444444;
                }
            `}</style>
        </nav>
    );
};
