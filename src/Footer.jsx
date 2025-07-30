const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 text-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Sebastián Duarte. Todos los derechos reservados.</p>
        <div className="space-x-6">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sebastian.tuemail@gmail.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
