import React from "react";
import { FaGithub } from "react-icons/fa";

const StudyItem = ({ title, institution, date, description, github }) => {
  return (
    <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg border-l-4 border-violet-500 p-6 text-gray-200">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
      <div className="text-violet-300 font-medium mb-1">{institution}</div>
      {description && (
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      )}
      {github && (
        <p className="text-gray-300 text-sm mt-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-2"
          >
            <FaGithub size={18} />
            Más de 50 ejercicios prácticos y trabajo final
          </a>
        </p>
      )}
    </div>
  );
};

const Studies = () => {
  const universities = [
    {
      title: "Técnico Universitario en Programación.",
      institution: "Universidad Tecnológica Nacional (UTN)",
      date: "Ago. 2024",
      description: "",
    },
    {
      title: "Técnico Universitario en Desarrollo Web",
      institution: "Universidad Nacional de Entre Ríos",
      date: "Mar. 2023 - Nov. 2025",
      description: "",
    },
  ];

  const courses = [
    {
      title: "Curso de Base de Datos SQL Server",
      institution: "Maxi Programa",
      date: "Feb. 2025",
      description:
        "Dominio de SQL y bases de datos relacionales con Microsoft SQL Server, diseño lógico y físico de bases de datos, y manejo de sistemas gestores (SGBD) aplicados a proyectos reales.",
    },
    {
      title: "Foundational C# with Microsoft",
      institution: "freeCodeCamp (en colaboración con Microsoft)",
      date: "Mar. 2024",
      description:
        "Formación en desarrollo con C# y .NET, trabajando conceptos clave como estructura modular, manejo de datos, debugging con herramientas modernas y creación de aplicaciones de consola desde cero.",
    },
    {
      title: "Curso C# Nivel 2 [.Net + SQL]",
      institution: "Maxi Programa",
      date: "Sept. 2023",
      description:
        "Desarrollo de aplicaciones con WinForms utilizando .NET Framework 4.8, aplicando Programación Orientada a Objetos, arquitectura en capas, validaciones, conexión a bases de datos con ADO.NET e integración con Microsoft SQL Server. Manejo de versiones con GitHub y enfoque en buenas prácticas de desarrollo.",
    },
    {
      title: "Curso Git - GitHub",
      institution: "CodeaRock",
      date: "Jul. 2023",
      description:
        "Control de versiones con Git, workflow colaborativo con GitHub, configuración de repos remotos, ramificación y merge, pull requests, manejo de conflictos y colaboración eficiente en equipo.",
    },
    // {
    //   title: "Gestión de proyectos de Google",
    //   institution: "Coursera",
    //   date: "Nov. 2022",
    //   description:
    //     "Certificación profesional de Google/Coursera que enseña gestión integral de proyectos: planificación, ejecución, monitoreo y cierre; metodologías tradicionales y ágiles (Scrum), estimación de tiempos y riesgos, comunicación efectiva, liderazgo de equipos y uso de herramientas reales para la gestión y documentación del proyecto.",
    // },
    {
      title: "Curso C# Nivel 1 - Fundamentos de la Programación",
      institution: "Maxi Programa",
      date: "Sept. 2021",
      description:
        "Introducción práctica a C# y .NET Framework, enfocada en lógica algorítmica, estructuras fundamentales, tipos de datos, funciones y control de flujo, con enfoque en solución de problemas y hábitos de programación limpios.",
      github: "https://github.com/SebastianDte/Curso-C-Sharp-Nivel-1/blob/main/README.md", 
    },
  ];

  return (
    <section id="estudios" className="bg-gray-900 py-20 px-6 text-gray-200">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Estudios</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
          {universities.map((study, idx) => (
            <StudyItem key={`uni-${idx}`} {...study} />
          ))}
          {courses.map((course, idx) => (
            <StudyItem key={`course-${idx}`} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studies;
