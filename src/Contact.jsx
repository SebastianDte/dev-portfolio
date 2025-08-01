import { useState } from "react";
import Swal from "sweetalert2";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    tema: "",
    mensaje: "",
    _gotcha: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/.test(formData.nombre.trim())) {
      newErrors.nombre =
        "El nombre debe tener al menos 3 letras y solo contener letras.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Email inválido.";
    }
    if (!formData.tema.trim()) {
      newErrors.tema = "El tema es obligatorio.";
    } else if (formData.tema.trim().length < 5) {
      newErrors.tema = "El tema debe tener al menos 5 caracteres.";
    }
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio.";
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    if (formData._gotcha) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mvgpeqak", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        setFormData({ nombre: "", email: "", tema: "", mensaje: "", _gotcha: "" });
        Swal.fire({
          title: "¡Mensaje enviado!",
          text: "Gracias por contactarme, te escribiré pronto :)",
          icon: "success",
          confirmButtonText: "Cerrar",
          background: "#1f2937", // gris oscuro (gray-800)
          color: "#a855f7", // violeta fuerte
          confirmButtonColor: "#7c3aed", // violeta más oscuro
          iconColor: "#a855f7",
          customClass: {
            title: "text-2xl font-bold",
            content: "text-lg",
          },
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Hubo un problema al enviar el mensaje, intenta más tarde.",
          icon: "error",
          background: "#1f2937",
          color: "#a855f7",
          confirmButtonColor: "#7c3aed",
          iconColor: "#a855f7",
          customClass: {
            title: "text-2xl font-bold",
            content: "text-lg",
          },
        });
      }
    } catch {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar el mensaje, intenta más tarde.",
        icon: "error",
        background: "#1f2937",
        color: "#a855f7",
        confirmButtonColor: "#7c3aed",
        iconColor: "#a855f7",
        customClass: {
          title: "text-2xl font-bold",
          content: "text-lg",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="bg-gray-900 py-20 px-6 text-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Contacto</h2>

        <div
          className={`flex flex-col md:flex-row gap-0 shadow-2xl rounded-xl overflow-hidden
            transition-all duration-700 ease-out opacity-100 translate-y-0`}
        >
          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex-1 bg-gray-800 bg-opacity-70 p-8
              border-r-4 border-transparent md:border-r-gradient-violet
              rounded-t-lg md:rounded-t-none md:rounded-l-lg"
          >
            <input
              type="text"
              name="_gotcha"
              value={formData._gotcha}
              onChange={handleChange}
              style={{ display: "none" }}
              autoComplete="off"
            />

            <div className="mb-6">
              <label htmlFor="nombre" className="block mb-2 font-semibold">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors ${
                  errors.nombre ? "border border-violet-400" : "border border-gray-600"
                }`}
                minLength={3}
                maxLength={20}
                required
              />
              {errors.nombre && (
                <p className="text-violet-400 mt-1 text-sm">{errors.nombre}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors ${
                  errors.email ? "border border-violet-400" : "border border-gray-600"
                }`}
                required
              />
              {errors.email && (
                <p className="text-violet-400 mt-1 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="tema" className="block mb-2 font-semibold">
                Tema
              </label>
              <input
                type="text"
                id="tema"
                name="tema"
                placeholder="Asunto del mensaje"
                value={formData.tema}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors ${
                  errors.tema ? "border border-violet-400" : "border border-gray-600"
                }`}
                minLength={5}
                required
              />
              {errors.tema && (
                <p className="text-violet-400 mt-1 text-sm">{errors.tema}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="mensaje" className="block mb-2 font-semibold">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                placeholder="Escribí tu consulta o mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none transition-colors ${
                  errors.mensaje ? "border border-violet-400" : "border border-gray-600"
                }`}
                required
              />
              {errors.mensaje && (
                <p className="text-violet-400 mt-1 text-sm">{errors.mensaje}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-violet-700 hover:bg-violet-600 text-white font-semibold py-3 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              Enviar
            </button>
          </form>

          {/* Tarjeta de redes / contacto alternativo */}
          <div
            className="flex flex-col items-center justify-center text-center
            bg-gradient-to-br from-purple-700 via-violet-800 to-indigo-900
            rounded-b-lg md:rounded-b-none md:rounded-r-lg p-8
            border-l-4 border-gradient-violet"
          >
            <img
              src="https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif"
              alt="Code gif"
              className="w-48 h-48 object-cover mb-6 rounded-md"
            />
            <p className="text-gray-300 mb-10 px-4">
              También podés contactarme por mis redes. <br />
              Siempre estoy atento a los mensajes.
            </p>
            <div className="flex gap-8 text-4xl text-gray-300">
              <a
                href="https://wa.me/5493434462589"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-green-500 cursor-pointer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/sebastiandte/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-500 cursor-pointer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/SebastianDte"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-white cursor-pointer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .border-r-gradient-violet {
          border-image: linear-gradient(to bottom, #8b5cf6, #a855f7, #7c3aed) 1;
          border-right-style: solid;
          border-right-width: 4px;
        }
        .border-gradient-violet {
          border-image: linear-gradient(to bottom, #7c3aed, #a855f7, #8b5cf6) 1;
          border-left-style: solid;
          border-left-width: 4px;
        }
      `}</style>
    </section>
  );
};

export default Contact;
