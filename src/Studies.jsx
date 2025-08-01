import React from "react";
import { FaGithub } from "react-icons/fa";

const StudyItem = ({ title, institution, date, description, github, isUniversity }) => {
  return (
    <div
      className={`
        bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-xl
        shadow-lg border-l-4 p-6 text-gray-200
        transition-transform hover:scale-[1.02] duration-300
        ${isUniversity ? "border-violet-500 shadow-violet-700" : "border-gray-600 shadow-gray-700"}
        ${isUniversity ? "text-white" : "text-gray-300"}
      `}
      style={{ fontSize: isUniversity ? "1.05rem" : "1rem" }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className={`font-extrabold ${isUniversity ? "text-2xl" : "text-xl"}`}>
          {title}
        </h3>
        <span className={`text-sm ${isUniversity ? "text-violet-300 font-semibold" : "text-gray-400"}`}>
          {date}
        </span>
      </div>
      <div className={`font-medium mb-2 ${isUniversity ? "text-violet-400" : "text-violet-300"}`}>
        {institution}
      </div>
      {description && (
        <p className={`leading-relaxed ${isUniversity ? "text-gray-200" : "text-gray-300"}`}>
          {description}
        </p>
      )}
      {github && (
        <p className="mt-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-2 text-sm text-gray-300"
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
      institution: "Universidad Tecnológica Nacional (FR General Pacheco)",
      date: "Ago. 2024",
      description:
        "Carrera orientada al desarrollo backend con énfasis en C#, .NET, bases de datos y lógica avanzada. En proceso de finalizar las materias restantes.",
    },
    {
      title: "Técnico Universitario en Desarrollo Web",
      institution: "Universidad Nacional de Entre Ríos",
      date: "Mar. 2023 - Nov. 2025",
      description:
        "Formación enfocada en desarrollo web full stack, trabajando con React, Node.js, Next.js, TypeScript y Angular. A dos materias de recibirme.",
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
    {
      title: "Curso C# Nivel 1 - Fundamentos de la Programación",
      institution: "Maxi Programa",
      date: "Sept. 2021",
      description:
        "Introducción práctica a C# y .NET Framework, enfocada en lógica algorítmica, estructuras fundamentales, tipos de datos, funciones y control de flujo, con enfoque en solución de problemas y hábitos de programación limpios.",
    },
  ];

  return (
    <section id="estudios" className="bg-gray-900 py-20 px-6 text-gray-200">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Estudios</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
          {universities.map((study, idx) => (
            <StudyItem key={`uni-${idx}`} {...study} isUniversity={true} />
          ))}
          {courses.map((course, idx) => (
            <StudyItem key={`course-${idx}`} {...course} isUniversity={false} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studies;
