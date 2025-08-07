import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const techIcons = {
  "C#": <img src="/logos/csharp_line_logo_icon_146579.svg" alt="C#" className="w-5 h-5" />,
  ".NET": <img src="/logos/.netFramework_logo.svg" alt=".NET" className="w-5 h-5" />,
  "SQL Server": "🗄️",
  "Entity Framework": "🧱",
  "JWT": "🔐",
  "EF Core": "🧩",
  "Swagger": "🧪",
  "React": "⚛️",
  "Tailwind": "💨",
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
      p-4 flex flex-col space-y-4 text-gray-200"
    >
      <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden group ">
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

      <h3 className="text-2xl font-bold drop-shadow-md">{title}</h3>

      <p className="text-gray-300 text-sm">{description}</p>

      <div className="flex flex-wrap gap-2 text-xs text-gray-400">
        {tech.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-1 bg-violet-900 bg-opacity-40 px-2 py-1 rounded-full font-medium select-none"
          >
            <span>{techIcons[t] || "🔹"}</span>
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-2 mt-auto">
        <a
          href={github}
          target="_blank"
          className="flex-1 bg-violet-800 text-white text-xs px-4 py-2 rounded-md shadow-sm hover:bg-violet-700 transition text-center font-semibold flex items-center justify-center gap-2"
          rel="noreferrer"
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
      tech: ["C#", ".NET", "SQL Server", "Entity Framework"],
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
      tech: ["C#", "ASP.NET", "SQLite"],
      image: "/tareas.jpg",
      github: "https://github.com/tuusuario/proyecto3",
      demoVideo: "https://www.youtube.com/embed/ID_DEL_VIDEO3",
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
  ];

  const moreProjects = [
    {
      title: "Ejercicios C# Nivel 1",
      description: "Más de 50 ejercicios en C# aplicando fundamentos de programación: condicionales, ciclos, corte de control, funciones, vectores, lotes y cadenas.",
      github: "https://github.com/SebastianDte/Curso-C-Sharp-Nivel-1",
      techs: ["C#", ".NET"],
    },
    {
      title: "Mini Sistema de Cajero (Console App)",
      description:
        "TP final del curso de programación: simulación de un cajero automático.",
      github: "https://github.com/tuusuario/tp-cajero-consola",
      techs: ["C#", "", "Consola"],
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
          className="bg-gray-800 bg-opacity-60 border-l-4 border-violet-500 p-6 rounded-md shadow-md text-left flex flex-col justify-between"
        >
          <div>
            <h4 className="text-lg font-bold text-gray-100 mb-1">{proj.title}</h4>
            <p className="text-sm text-gray-400 mb-3">{proj.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {proj.techs?.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-700 text-gray-300 px-2 py-1 rounded-full flex items-center gap-1"
                >
                   <span className="w-7 h-7 flex items-center justify-center">{techIcons[tech] ?? "🔧"}</span>
                  {/* <span>{tech}</span> */}
                </span>
              ))}
            </div>
          </div>

          <a
            href={proj.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 bg-violet-800 hover:bg-violet-700 text-sm text-white rounded-md font-medium mt-4 w-fit transition"
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
            GitHub
          </a>
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
