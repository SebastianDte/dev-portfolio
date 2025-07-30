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

    // Nombre: min 3 letras, solo letras y espacios
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/.test(formData.nombre.trim())) {
      newErrors.nombre =
        "El nombre debe tener al menos 3 letras y solo contener letras.";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Email inválido.";
    }

    // Tema: min 5 caracteres
    if (!formData.tema.trim()) {
      newErrors.tema = "El tema es obligatorio.";
    } else if (formData.tema.trim().length < 5) {
      newErrors.tema = "El tema debe tener al menos 5 caracteres.";
    }

    // Mensaje: min 10 caracteres
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
          color: "black",
          background: "white",
          confirmButtonColor: "#a855f7",
          icon: "success",
          iconColor: "#a855f7",
          confirmButtonText: "Cerrar",
          title: "Gracias por contactarme, te escribiré pronto :)",
          customClass: {
            title: "mi-titulo",
            content: "mi-contenido",
          },
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar el mensaje, intenta más tarde.",
        });
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar el mensaje, intenta más tarde.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="bg-gray-900 py-20 px-6 text-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Contacto</h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex-1 bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-lg"
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
              className="w-full bg-violet-700 hover:bg-violet-600 text-white font-semibold py-3 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>

          {/* Tarjeta de redes / contacto alternativo */}
          <div className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-purple-700 via-violet-800 to-indigo-900 rounded-lg p-8 shadow-lg max-w-sm mx-auto md:mx-0">
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
                className="hover:text-green-500"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-white"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
