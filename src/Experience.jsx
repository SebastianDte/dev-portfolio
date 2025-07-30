const ExperienceItem = ({ title, company, date, location, description }) => {
  return (
    <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg border-l-4 border-violet-500 p-6 text-gray-200">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
      <div className="text-violet-300 font-medium mb-1">{company}</div>
      {location && <div className="text-sm text-gray-400 italic mb-2">{location}</div>}
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Tutor Becado",
      company: "UTN Facultad Regional General Pacheco",
      date: "mar 2025 - actualidad",
      location: "General Pacheco, Provincia de Buenos Aires, Argentina (Remoto)",
      description:
        "Asisto a estudiantes de Programación I (TUP), respondiendo consultas y acompañando el proceso de aprendizaje durante el cuatrimestre.",
    },
    {
      title: "Profesor Particular",
      company: "Independiente",
      date: "2024 - Actualidad",
      location: "",
      description:
        "Ofrezco apoyo en Programación y Bases de Datos (SQL, MySQL). Doy clases de C# con POO y .NET, enfocándome en prácticas para que los alumnos desarrollen habilidades técnicas aplicables.",
    },
    {
      title: "Tutor",
      company: "MaxiPrograma (Educación Online)",
      date: "2022 - Actualidad",
      location: "",
      description:
        "Acompaño a estudiantes en cursos del ecosistema .NET y Bases de Datos, respondiendo consultas en el foro. Trabajo en cursos como Programación desde 0 (diagramas de flujo), Nivel 1 C#: Consola (C# + .NET), y Nivel 2 C#: Escritorio (C# + .NET Framework + SQL Server).",
    },
    {
      title: "Profesor de Robótica",
      company: "Variable X",
      date: "2022 - 2023",
      location: "",
      description:
        "Dicté clases de robótica para niños de 6 a 8 años, desarrollando habilidades pedagógicas y aportando a la educación tecnológica infantil.",
    },
  ];

  return (
    <section id="experiencia" className="bg-gray-900 py-20 px-6 text-gray-200">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Experiencia</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {experiences.map((exp, idx) => (
            <ExperienceItem key={idx} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
