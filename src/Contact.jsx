import { useState } from "react";
import Swal from "sweetalert2";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

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
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Email inválido.";
    }
    if (!formData.tema.trim()) newErrors.tema = "El tema es obligatorio.";
    if (!formData.mensaje.trim()) newErrors.mensaje = "El mensaje es obligatorio.";
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
        {/* Título centrado arriba */}
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
                  errors.nombre ? "border border-red-600" : "border border-gray-600"
                }`}
                minLength={3}
                maxLength={20}
                required
              />
              {errors.nombre && (
                <p className="text-red-600 mt-1 text-sm">{errors.nombre}</p>
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
                  errors.email ? "border border-red-600" : "border border-gray-600"
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-600 mt-1 text-sm">{errors.email}</p>
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
                  errors.tema ? "border border-red-600" : "border border-gray-600"
                }`}
                minLength={4}
                required
              />
              {errors.tema && (
                <p className="text-red-600 mt-1 text-sm">{errors.tema}</p>
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
                  errors.mensaje ? "border border-red-600" : "border border-gray-600"
                }`}
                required
              />
              {errors.mensaje && (
                <p className="text-red-600 mt-1 text-sm">{errors.mensaje}</p>
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

          {/* Card redes sociales */}
          <div className="flex flex-col items-center bg-gradient-to-br from-purple-700 via-violet-800 to-indigo-900 rounded-lg p-8 shadow-lg max-w-sm mx-auto md:mx-0 relative">
            {/* GIF grande centrado */}
            <img
              src="https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif" // gif animado de prueba copado
              alt="Code gif"
              className="w-48 h-48 object-cover mb-6 rounded-md"
            />

            {/* Texto centrado */}
            <p className="text-center text-gray-300 mb-12 px-4">
              También podés contactarme a través de mis redes sociales. <br />
              ¡Soy re activo y respondo rápido! 🚀
            </p>

            {/* Íconos redes abajo alineados centro */}
            <div className="flex gap-8 text-4xl text-gray-300 hover:text-violet-400 transition-colors absolute bottom-6 left-1/2 -translate-x-1/2">
              <a
                href="https://instagram.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/5491123456789"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
