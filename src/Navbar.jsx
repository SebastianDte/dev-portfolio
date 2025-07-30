import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Proyectos", href: "#projects" },
  { label: "Estudios", href: "#studies" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 border-b
        ${
          isScrolled
            ? "bg-transparent border-transparent"
            : "bg-gray-900 border-gray-700"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="w-32 h-12 flex items-center select-none cursor-pointer">
          <img
            src="https://images.icon-icons.com/2699/PNG/512/youtube_logo_icon_167938.png"
            alt="Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map(({ label, href }, i) => (
            <a
              key={i}
              href={href}
              className={`relative text-lg font-semibold transition-colors duration-300
                ${
                  isScrolled
                    ? "text-gray-300 hover:text-violet-400 after:bg-violet-400"
                    : "text-gray-300 hover:text-violet-400 after:bg-violet-400"
                }
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:transition-all after:duration-300 after:ease-out after:w-0
                hover:after:w-full
              `}
              style={{ paddingBottom: "0.25rem" }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-violet-400 hover:text-violet-300 transition-colors duration-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg border-t border-gray-700">
          <nav className="flex flex-col px-10 py-6 space-y-6">
            {navLinks.map(({ label, href }, i) => (
              <a
                key={i}
                href={href}
                className="text-gray-300 hover:text-violet-400 font-semibold transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
