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
      className="bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg
      border-l-4 border-violet-500 hover:shadow-2xl
      transition-transform transform hover:-translate-y-1 hover:scale-105
      p-6 flex flex-col space-y-5 text-gray-200"
    >
      <div className="relative w-full aspect-video rounded-lg overflow-hidden group cursor-pointer">
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
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>

      <h3 className="text-3xl font-extrabold drop-shadow-md">{title}</h3>

      <p className="text-gray-300 text-base">{description}</p>

      <div className="flex flex-wrap gap-3 text-sm text-gray-400">
        {tech.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-1 bg-violet-900 bg-opacity-40 px-3 py-1 rounded-full font-semibold select-none"
          >
            <span>{techIcons[t] || "🔹"}</span>
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-3 mt-auto">
        <a
          href={github}
          target="_blank"
          className="flex-1 bg-violet-600 text-white text-sm px-6 py-3 rounded-lg shadow-md hover:bg-violet-500 transition text-center font-semibold"
          rel="noreferrer"
        >
          GitHub
        </a>
        {demoVideo && (
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="flex-1 bg-gray-700 text-sm px-6 py-3 rounded-lg hover:bg-gray-600 transition font-semibold"
          >
            {showVideo ? "Ver Imagen" : "Ver Demo"}
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
      demoVideo: "",
    },
  ];

  return (
    <section
      id="proyectos"
      className="bg-gray-900 py-20 px-6 text-gray-200"
    >
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Proyectos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
