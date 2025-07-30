import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

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
    if (!formData.mensaje.trim()) newErrors.mensaje = "El mensaje es obligatorio.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);
      // Aquí podrías agregar la lógica para enviar el formulario
      setFormData({ nombre: "", email: "", mensaje: "" });
    }
  };

  return (
    <section
      id="contacto"
      className="bg-gray-900 py-20 px-6 text-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Contacto</h2>
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block mb-2 font-semibold">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md bg-gray-800 bg-opacity-70 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                errors.nombre ? "border border-red-600" : "border border-gray-700"
              }`}
            />
            {errors.nombre && (
              <p className="text-red-600 mt-1 text-sm">{errors.nombre}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md bg-gray-800 bg-opacity-70 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                errors.email ? "border border-red-600" : "border border-gray-700"
              }`}
            />
            {errors.email && (
              <p className="text-red-600 mt-1 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="mensaje" className="block mb-2 font-semibold">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md bg-gray-800 bg-opacity-70 text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none ${
                errors.mensaje ? "border border-red-600" : "border border-gray-700"
              }`}
            />
            {errors.mensaje && (
              <p className="text-red-600 mt-1 text-sm">{errors.mensaje}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 text-white font-semibold py-3 rounded-md hover:bg-violet-500 transition"
          >
            Enviar
          </button>

          {success && (
            <p className="text-green-500 text-center font-semibold mt-4">
              Mensaje enviado con éxito. ¡Gracias por contactarte!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
