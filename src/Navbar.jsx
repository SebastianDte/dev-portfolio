import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Estudios", href: "#estudios" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
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
        ${isScrolled
          ? "bg-gray-900/60 backdrop-blur-md border-gray-700"
          : "bg-transparent border-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        {/* Navegación desktop */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map(({ label, href }, i) => (
            <a
              key={i}
              href={href}
              className="relative text-lg font-semibold text-gray-300 hover:text-violet-400 transition-colors duration-300
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:transition-all after:duration-300 after:ease-out after:w-0
                after:bg-violet-700 hover:after:w-full"
              style={{ paddingBottom: "0.25rem" }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Íconos GitHub y LinkedIn a la derecha en desktop */}
        <div className="hidden md:flex space-x-6 text-white text-2xl">
          <a
            href="https://github.com/SebastianDte"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-violet-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sebastiandte/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-violet-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-white hover:text-violet-300 transition-colors duration-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg border-t border-gray-700">
          <nav className="flex flex-col px-6 py-6 space-y-6">
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
            {/* Íconos en móvil */}
            <div className="flex space-x-8 text-white text-3xl mt-4 justify-center">
              <a
                href="https://github.com/SebastianDte"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-violet-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sebastiandte/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-violet-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
