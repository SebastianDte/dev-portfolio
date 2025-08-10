import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const techIcons = {
  "C#": <img src="/logos/c-sharp-logo.svg" alt="C#" className="w-8 h-8" />,
  ".NET": <img src="/logos/.net-logo.png" alt=".NET" className="w-8 h-8" />,
  "C++": <img src="/logos/C++_LOGO.svg" alt="C++" className="w-8 h-8" />,
  "SQL_SERVER": <img src="/logos/SQL_SERVER-Logo.svg" alt="SQL SERVER" className="w-8 h-8" />,

};

const ProjectCard = ({
  title,
  description,
  tech,
  image,
  github,
  demoVideo,
}) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className="bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-xl shadow-md
      border-l-4 border-violet-500 hover:shadow-xl
      transition-transform transform hover:-translate-y-1 hover:scale-105
      p-4 flex flex-col text-gray-200"
      style={{ minHeight: "420px" }}
    >
      <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden group">
        {showVideo ? (
          <iframe
            src={demoVideo}
            title={title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      {/* Contenedor que crece y empuja el footer */}
      <div className="flex flex-col flex-grow space-y-2 mt-4">
        <h3 className="text-2xl font-bold drop-shadow-md">{title}</h3>
        <p className="text-gray-300 text-sm flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 text-xs text-gray-400">
          {tech.map((t, i) => (
            <span
              key={i}
              className="flex items-center justify-center bg-gray-700 bg-opacity-40 p-2 rounded-full select-none"
            >
              <span>{techIcons[t] || "🔹"}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Footer con botones, siempre abajo */}
      <div className="flex gap-3 pt-2 mt-auto">
        <a
          href={github}
          target="_blank"
          className="flex-1 bg-violet-800 text-white text-xs px-4 py-2 rounded-md shadow-sm hover:bg-violet-700 transition text-center font-semibold flex items-center justify-center gap-2"
          rel="noreferrer"
        >
          {/* Icono GitHub */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12a12.002 12.002 0 008.205 11.385c.6.113.82-.26.82-.577v-2.044c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.832 2.807 1.303 3.492.996.107-.775.42-1.303.764-1.602-2.665-.304-5.466-1.333-5.466-5.931 0-1.31.47-2.381 1.236-3.221-.124-.304-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.403c1.02.005 2.045.138 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.474 5.921.43.37.823 1.101.823 2.222v3.293c0 .32.218.694.825.576A12.002 12.002 0 0024 12c0-6.63-5.37-12-12-12z"
              clipRule="evenodd"
            />
          </svg>
          GitHub
        </a>

        {demoVideo && (
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="cursor-pointer flex-1 bg-gray-700 text-xs px-4 py-2 rounded-md hover:bg-gray-600 transition font-semibold flex items-center justify-center gap-1"
          >
            {showVideo ? "🔙 Volver" : "▶️ Ver Demo"}
          </button>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: "Sistema de Gestión de Artículos",
      description: "Web app para gestionar stock y artículos con roles.",
      tech: ["C#", ".NET"],
      image: "/gestion.jpg",
      github: "https://github.com/tuusuario/proyecto1",
      demoVideo: "https://www.youtube.com/embed/ID_DEL_VIDEO1",
    },
    {
      title: "API de Turnos Médicos",
      description:
        "Backend REST para turnos médicos con control de acceso y validaciones.",
      tech: [".NET", "JWT", "EF Core", "Swagger"],
      image: "/turnos.jpg",
      github: "https://github.com/tuusuario/proyecto2",
      demoVideo: "https://www.youtube.com/embed/ID_DEL_VIDEO2",
    },
    {
      title: "Administrador de Tareas",
      description: "App MVC para tareas diarias con SQLite.",
      tech: ["C#", ".NET"],
      image: "/tareas.jpg",
      github: "https://github.com/tuusuario/proyecto3",
      demoVideo: "https://www.youtube.com/embed/ID_DEL_VIDEO3",
    },
    {
      title: "API de Turnos Médicos",
      description:
        "Backend REST para turnos médicos con control de acceso y validaciones.",
      tech: ["C#", ".NET"],
      image: "/turnos.jpg",
      github: "https://github.com/tuusuario/proyecto2",
      demoVideo: "https://www.youtube.com/embed/ID_DEL_VIDEO2",
    },
  ];

  const moreProjects = [
    {
      title: "Gestor de Discos Musicales",
      description: "Aplicación de escritorio (WinForms) para la gestión de discos musicales. Permite agregar, editar y eliminar registros, aplicar filtros rápidos o búsquedas avanzadas, y asociar imágenes desde archivos locales o enlaces web.El sistema implementa una arquitectura en capas que favorece la mantenibilidad y escalabilidad del proyecto, y utiliza SQL Server para la base de datos, conectándose mediante la librería ADO.NET para gestionar la persistencia de datos.",
      github: "https://github.com/SebastianDte/WinformsApp_Discos",
      techs: ["C#", ".NET", "SQL_SERVER"],
    },
    {
      title: "Sistema de Gestión Escolar",
      description:
        "Aplicación de consola en C++ con arquitectura modular en capas para profundizar en POO. Maneja memoria dinámica y archivos binarios para persistencia. Incluye funcionalidades como control de cupos, gestión de inscripciones, y reportes académicos y financieros. Desarrollo colaborativo usando metodología Gitflow para control de versiones.",
      github: "https://github.com/SebastianDte/TPFI_PII_UTN",
      techs: ["C++"],
    },
    {
      title: "Resolución de Problemas en C#",
      description: "Más de 50 ejercicios prácticos en C# que cubren condicionales, ciclos, corte de control, funciones, vectores, lotes y cadenas, realizados como práctica personal para reforzar y ampliar los contenidos del curso C# Nivel 1.\nLos enunciados provienen del curso gratuito de MaxiPrograma.",
      github: "https://github.com/SebastianDte/Curso-C-Sharp-Nivel-1",
      techs: ["C#", ".NET"],
    },
  ];

  return (
    <section id="proyectos" className="bg-gray-900 py-20 px-6 text-gray-200">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-10">Proyectos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12"
            >
              {moreProjects.map((proj, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-gray-800 bg-opacity-60 border-l-4 border-violet-500 p-6 rounded-md shadow-md text-left flex flex-col"
                  style={{ minHeight: "300px" }}
                >
                  <div className="flex flex-col flex-grow">
                    <h4 className="text-lg font-bold text-gray-100 mb-1">{proj.title}</h4>
                    <p
                      className="text-sm text-gray-400 mb-3"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {proj.description}
                    </p>


                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-violet-800 hover:bg-violet-700 text-white rounded-md px-4 py-2 font-medium flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 0C5.37 0 0 5.37 0 12a12.002 12.002 0 008.205 11.385c.6.113.82-.26.82-.577v-2.044c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.832 2.807 1.303 3.492.996.107-.775.42-1.303.764-1.602-2.665-.304-5.466-1.333-5.466-5.931 0-1.31.47-2.381 1.236-3.221-.124-.304-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.403c1.02.005 2.045.138 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.474 5.921.43.37.823 1.101.823 2.222v3.293c0 .32.218.694.825.576A12.002 12.002 0 0024 12c0-6.63-5.37-12-12-12z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Ver
                    </a>

                    <div className="flex gap-2">
                      {proj.techs?.map((tech, i) => (
                        <span
                          key={i}
                          className="flex items-center justify-center bg-gray-700 bg-opacity-40 p-2 rounded-full select-none"
                        >
                          <span>{techIcons[tech] ?? "🔧"}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>

              ))}
            </motion.div>
          )}
        </AnimatePresence>


        {/* Acá el botón ABAJO de todo */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-800 hover:bg-violet-700 rounded-full text-base font-semibold shadow-md transition"
          >
            {showMore ? (
              <>
                Ocultar <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Ver más <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
