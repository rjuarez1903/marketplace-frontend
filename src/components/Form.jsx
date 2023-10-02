import { useState } from "react";

const Form = () => {
  const [submitting, setSubmitting] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    contactEmail: "",
    phoneNumber: "",
    preferredContactTime: "", // Esta será la opción seleccionada
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
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl flex flex-col gap-7"
    >
      <div>
        <label htmlFor="contactEmail" className="font-inter text-sm text-gray-600">
          Correo Electrónico:
        </label>
        <input
          type="email"
          id="contactEmail"
          name="contactEmail"
          value={contactInfo.contactEmail}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full"
          required
        />
      </div>

      <div>
        <label htmlFor="phoneNumber" className="font-inter text-sm text-gray-600">
          Teléfono:
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={contactInfo.phoneNumber}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>

      <div className="my-4">
        <label
          htmlFor="preferredContactTime"
          className="font-inter text-sm text-gray-600"
        >
          Horario de Preferencia para el Contacto:
        </label>
        <select
          id="preferredContactTime"
          name="preferredContactTime"
          value={contactInfo.preferredContactTime}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full"
        >
          <option value="morning">Mañana</option>
          <option value="afternoon">Tarde</option>
          <option value="evening">Noche</option>
        </select>
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
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-md text-white"
        >
          {/* {submitting ? `${type}ing...` : type} */}
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Form;
