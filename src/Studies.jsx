import { useState } from "react";

const StudyItem = ({ title, institution, date, description }) => {
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
    </div>
  );
};

const Studies = () => {
  const [activeTab, setActiveTab] = useState("universidades");

  const universities = [
    {
      title: "Técnico Universitario en Programación, Programación informática",
      institution: "Universidad Tecnológica Nacional (UTN)",
      date: "Ago. 2024",
      description: "",
    },
    {
      title:
        "Técnico Universitario en desarrollo web, Desarrollo de aplicaciones web",
      institution: "Universidad Nacional de Entre Ríos",
      date: "Mar. 2023 - Nov. 2025",
      description: "",
    },
  ];

  const courses = [
    {
      title: "Curso BASES DE DATOS SQL",
      institution: "Maxi Programa",
      date: "Feb. 2025",
      description:
        "Aptitudes: SQL, Base de datos relacional, Microsoft SQL Server, Diseño de bases de datos, SGBD, Creación bases de datos",
    },
    {
      title: "Foundational C# with Microsoft",
      institution: "freeCodeCamp",
      date: "Mar. 2024",
      description: "",
    },
    {
      title: "Curso C# Nivel 2 [.Net + SQL]",
      institution: "Maxi Programa",
      date: "Sept. 2023",
      description:
        "Aptitudes: C#, Microsoft SQL Server, POO, GitHub, .NET framework, Arquitectura en Capas, ADO.NET, WinForms, Validaciones",
    },
    {
      title: "Git - GitHub",
      institution: "CodeaRock",
      date: "Jul. 2023",
      description: "Aptitudes: Git, GitHub",
    },
    {
      title: "Desarrollador Web Inicial",
      institution: "Universidad Tecnológica Nacional",
      date: "Abr. 2023",
      description: "Aptitudes: Figma, Bootstrap, HTML, JavaScript, CSS",
    },
    {
      title: "Gestión de proyectos de Google",
      institution: "Coursera",
      date: "Nov. 2022",
      description: "Aptitudes: Gestión de proyectos, Metodologías ágiles, Scrum",
    },
    {
      title: "C# Nivel 1 - Fundamentos de la Programación",
      institution: "Maxi Programa",
      date: "Sept. 2021",
      description: "Aptitudes: C#, .NET framework",
    },
  ];

  return (
    <section id="estudios" className="bg-gray-900 py-20 px-6 text-gray-200">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Estudios</h2>

        <div className="flex justify-center gap-6">
          <button
            className={`px-6 py-2 rounded-md font-semibold transition-colors duration-200 ${
              activeTab === "universidades"
                ? "bg-violet-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("universidades")}
          >
            Universidades
          </button>
          <button
            className={`px-6 py-2 rounded-md font-semibold transition-colors duration-200 ${
              activeTab === "cursos"
                ? "bg-violet-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("cursos")}
          >
            Cursos
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
          {activeTab === "universidades" &&
            universities.map((study, idx) => (
              <StudyItem key={idx} {...study} />
            ))}
          {activeTab === "cursos" &&
            courses.map((course, idx) => <StudyItem key={idx} {...course} />)}
        </div>
      </div>
    </section>
  );
};

export default Studies;
