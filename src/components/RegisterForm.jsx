import { useState } from "react";

const RegisterForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [registerInfo, setregisterInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setregisterInfo({ ...registerInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO 
    console.log("Formulario de contacto enviado:", registerInfo);
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Registro</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism mx-auto"
      >
        <div>
          <label htmlFor="email" className="font-inter text-sm text-gray-600">
            Nombre:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={registerInfo.firstName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="font-inter text-sm text-gray-600">
            Apellido:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={registerInfo.lastName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="font-inter text-sm text-gray-600">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={registerInfo.email}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="font-inter text-sm text-gray-600">
            Teléfono:
          </label>
          <input
            type="text"
            id="tel"
            name="tel"
            value={registerInfo.tel}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="font-inter text-sm text-gray-600"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={registerInfo.password}
            onChange={handleInputChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
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

export default RegisterForm;
