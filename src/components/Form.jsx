import { useState } from "react";

const Form = () => {
  const [submitting, setSubmitting] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    contactTime: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario de contacto
    console.log("Formulario de contacto enviado:", contactInfo);
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Consultá</span>
      </h1>
      <p className="desc text-left max-w-md">
        por la clase y encontrá tu experiencia perfecta de aprendizaje
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <div>
          <label htmlFor="email" className="font-inter text-sm text-gray-600">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactInfo.email}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="font-inter text-sm text-gray-600">
            Teléfono:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={contactInfo.phone}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <div className="my-4">
          <label
            htmlFor="contactTime"
            className="font-inter text-sm text-gray-600"
          >
            Horario de Preferencia para el Contacto:
          </label>
          <input
            type="text"
            id="contactTime"
            name="contactTime"
            value={contactInfo.contactTime}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <div className="my-4">
          <label htmlFor="message" className="font-inter text-sm text-gray-600">
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            value={contactInfo.message}
            onChange={handleInputChange}
            rows="4"
            className="border border-gray-300 rounded p-2 w-full"
            required
          ></textarea>
        </div>

        <div className="flex-end mx-3 mb-5 gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-md text-white uppercase"
          >
            {/* {submitting ? `${type}ing...` : type} */}
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
