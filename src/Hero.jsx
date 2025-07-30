import { useEffect, useState } from "react";
import perfilImg from "./assets/perfil-img.jpg";
const Hero = () => {
  const [animateTitle, setAnimateTitle] = useState(false);

  useEffect(() => {
    setAnimateTitle(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-10px) }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .fade-slide-in {
          opacity: 0;
          transform: translateY(20px);
          animation-fill-mode: forwards;
          animation-name: fadeSlideIn;
          animation-duration: 0.8s;
          animation-timing-function: ease-out;
        }
        .fade-slide-in.delay-1 { animation-delay: 0.1s; }
        .fade-slide-in.delay-2 { animation-delay: 0.2s; }

        @keyframes fadeSlideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section
        id="hero"
        className="min-h-screen text-gray-100 flex flex-col items-center justify-center px-6 py-20 bg-gray-900"
      >
        <div className="max-w-6xl w-full">

          {/* Header con título y foto */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1
                className={`text-4xl sm:text-5xl font-bold text-gray-100 cursor-default ${
                  animateTitle ? "fade-slide-in delay-1" : ""
                }`}
              >
                Sebastián Duarte
              </h1>
              <h2
                className={`text-xl sm:text-2xl text-violet-400 font-semibold mt-2 cursor-default ${
                  animateTitle ? "fade-slide-in delay-2" : ""
                }`}
              >
                Desarrollador Backend .NET
              </h2>
            </div>

            <img
              src={perfilImg}
              alt="Sebastián Duarte"
              className="rounded-full w-36 h-36 object-cover shadow-xl ring-2 ring-violet-700/50 animate-float transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>

          {/* Texto bio completo debajo */}
          <div className="space-y-5 text-lg sm:text-xl leading-relaxed text-gray-300 max-w-full p-6 rounded-xl bg-gray-800/70 backdrop-blur-sm shadow-md">
            <p>
              Empecé mi camino en la programación de forma autodidacta con .NET Framework y C#. Actualmente estoy cursando dos carreras universitarias: Técnico Universitario en Desarrollo Web en UNER y Técnico Universitario en Programación en UTN.
            </p>
            <p>
              Mi objetivo es seguir profundizando mis conocimientos como desarrollador backend, con especial interés en el ecosistema .NET y bases de datos relacionales. Sin embargo, también me mantengo abierto a explorar otras tecnologías y herramientas que me permitan crecer profesionalmente.
            </p>
            <p>
              Fuera del código, me apasiona la música. Me dediqué profesionalmente durante cinco años, y hoy en día es uno de mis hobbies favoritos. La combinación entre la música y la programación crea un equilibrio que disfruto mucho entre lo digital y lo analógico.
            </p>
          </div>

          {/* Botones */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a
              href="#proyectos"
              className="bg-violet-800 hover:bg-violet-700 text-white text-base px-6 py-3 rounded-xl shadow-md min-w-[140px] text-center transform transition-transform duration-200 ease-in-out hover:-translate-y-1"
            >
              Ver proyectos
            </a>
            <a
              href="https://drive.google.com/drive/folders/13-fSEkmybxGfBvq1fSG9bCCFijD14ilH?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-violet-700 text-violet-300 hover:bg-violet-700 hover:text-white text-base px-6 py-3 rounded-xl min-w-[140px] text-center transform transition-transform duration-200 ease-in-out hover:-translate-y-1"
            >
              Ver CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
