const Experience = () => {
  const experiences = [
    {
      title: "Tutor Becado",
      company: "UTN Facultad Regional General Pacheco",
      date: "mar 2025 - actualidad",
      location: "General Pacheco, Buenos Aires (Remoto)",
      description:
        "Asisto a estudiantes de Programación I (TUP), respondiendo consultas y acompañando el proceso de aprendizaje durante el cuatrimestre.",
    },
    {
      title: "Profesor Particular",
      company: "Independiente",
      date: "2024 - Actualidad",
      location: "",
      description:
        "Ofrezco apoyo en Programación y Bases de Datos. Doy clases de C# con POO y .NET, enfocándome en prácticas aplicables.",
    },
    {
      title: "Tutor",
      company: "MaxiPrograma (Educación Online)",
      date: "2022 - Actualidad",
      location: "",
      description:
        "Acompaño a estudiantes en cursos del ecosistema .NET y Bases de Datos, respondiendo consultas. Trabajo en cursos desde diagramas hasta escritorio.",
    },
    {
      title: "Profesor de Robótica",
      company: "Variable X",
      date: "2022 - 2023",
      location: "",
      description:
        "Clases de robótica para niños de 6 a 8 años, desarrollando habilidades pedagógicas y fomentando el interés por la tecnología desde pequeños.",
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
