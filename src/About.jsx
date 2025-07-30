const About = () => {
  return (
    <section
      id="about"
      className="bg-white text-gray-900 px-6 py-20 flex justify-center"
    >
      <div className="max-w-3xl text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Sobre mí</h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          Soy un programador argentino con foco en el backend. Estoy
          especializándome en .NET y bases de datos relacionales. Además de
          estudiar programación, doy clases particulares y tutoreo a otros
          estudiantes, lo que me ayuda a estar siempre afilado y actualizado.
        </p>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          Me gusta trabajar en equipo, escribir código limpio y aprender nuevas
          tecnologías. Busco mi primer experiencia laboral formal en IT.
        </p>
      </div>
    </section>
  );
};

export default About;
