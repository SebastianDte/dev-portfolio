const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gray-900 text-gray-300 flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl w-full text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-100">Sebastián Duarte</h1>

        <h2 className="text-xl sm:text-2xl text-violet-400 font-semibold">
          Desarrollador Backend .NET
        </h2>

        <p className="text-lg sm:text-xl leading-relaxed text-gray-400">
          Programador argentino enfocado en .NET y bases de datos. Doy clases particulares y tutorías, lo cual refuerza mi habilidad para comunicar conceptos técnicos de forma clara. Busco insertarme en el mundo IT con profesionalismo y compromiso.
        </p>

        <div className="flex justify-center gap-4 flex-wrap pt-2">
          <a
            href="#proyectos"
            className="bg-violet-700 hover:bg-violet-600 text-white text-base px-6 py-3 rounded-xl shadow-md transition"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="border border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white text-base px-6 py-3 rounded-xl transition"
          >
            Contactame
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
