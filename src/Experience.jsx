const Experience = () => {
  const experiences = [
    {
      title: "Tutor Becado",
      company: "UTN Facultad Regional General Pacheco",
      date: "mar 2025 - actualidad",
      location: "General Pacheco, Buenos Aires (Remoto)",
      description:
        "Acompaño a estudiantes de la Tecnicatura Universitaria en Programación (TUP) en la materia Programación I, resolviendo dudas técnicas. Brindo seguimiento continuo durante el cuatrimestre, fomentando la comprensión de conceptos clave de la programación.",
    },
    {
      title: "Profesor Particular",
      company: "Independiente",
      date: "2024 - Actualidad",
      location: "",
      description:
        "Clases personalizadas de Programación y Bases de Datos orientadas a estudiantes. Enfocado en C#, POO y .NET, aplicando conceptos con ejercicios prácticos y reales. Acompaño procesos de aprendizaje con un enfoque didáctico y progresivo.",
    },
    {
      title: "Tutor",
      company: "MaxiPrograma (Educación Online)",
      date: "2022 - Actualidad",
      location: "",
      description:
        "Tutor académico en cursos de MaxiPrograma enfocados en el ecosistema .NET y bases de datos. Acompaño a estudiantes desde el desarrollo y análisis de diagramas de flujo y algoritmos, pasando por la creación de aplicaciones de consola en C#, hasta la construcción de aplicaciones de escritorio con integración a bases de datos SQL Server. Brindo resolución de dudas y asesoramiento técnico personalizado para fortalecer la comprensión y aplicación práctica.",
    },
    {
      title: "Profesor de Robótica",
      company: "Variable X",
      date: "2022 - 2023",
      location: "",
      description:
        "Docente de robótica educativa para niños de entre 6 y 8 años. Planificación de actividades didácticas con kits tecnológicos, fomentando el pensamiento lógico, la creatividad y el entusiasmo por la tecnología desde edades tempranas.",
    },
  ];

  return (
    <section id="experiencia" className="bg-gray-900 py-20 px-6 text-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
          Experiencia
        </h2>

        <div className="relative border-l-2 border-violet-500 pl-6 space-y-14">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[14px] top-1 w-3 h-3 bg-violet-500 rounded-full shadow-md" />
              <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-violet-500/20 transition-all">
                <div className="flex justify-between flex-wrap gap-2 items-center mb-1">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="text-sm text-gray-400">{exp.date}</span>
                </div>
                <div className="text-violet-300 font-medium">{exp.company}</div>
                {exp.location && (
                  <div className="text-sm text-gray-400 italic mb-1">{exp.location}</div>
                )}
                <p className="text-sm text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
