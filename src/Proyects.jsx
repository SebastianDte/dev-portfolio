import { useState } from "react";

const techIcons = {
  "C#": "🟦",
  ".NET": "⚙️",
  "SQL Server": "🗄️",
  "Entity Framework": "🧱",
  "JWT": "🔐",
  "EF Core": "🧩",
  "Swagger": "📜",
  "ASP.NET": "🌐",
  "SQLite": "💾",
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
      style={{ cursor: "default" }}
    >
      <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden group cursor-pointer">
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
          className="flex-1 bg-violet-800 text-white text-xs px-4 py-2 rounded-md shadow-sm hover:bg-violet-700 transition text-center font-semibold"
          rel="noreferrer"
        >
          GitHub
        </a>
        {demoVideo && (
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="flex-1 bg-gray-700 text-xs px-4 py-2 rounded-md hover:bg-gray-600 transition font-semibold flex items-center justify-center gap-1"
            aria-label={showVideo ? "Volver a la imagen" : "Ver demo"}
            title={showVideo ? "Volver a la imagen" : "Ver demo"}
          >
            {showVideo ? "🔙 Volver" : "▶️ Ver Demo"}
          </button>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
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
      demoVideo: "https://www.youtube.com/embed/ID_DEL_VIDEO2",
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
      </div>
    </section>
  );
};

export default Projects;
