import { useState } from "react";

const LoginForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setloginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario de contacto
    console.log("Formulario de contacto enviado:", loginInfo);
  };

  return (
    <div>
      <section className="w-full max-w-full flex-start flex-col">
        <h1 className="head_text text-left">
          <span className="blue_gradient">Login</span>
        </h1>

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
              value={loginInfo.email}
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
              value={loginInfo.password}
              onChange={handleInputChange}
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          <div className="flex-end mx-3 mb-5 gap-4">
            <a href="/" className="text-gray-500 text-sm" />
            Cancel
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
    </div>
  );
};

export default LoginForm;
