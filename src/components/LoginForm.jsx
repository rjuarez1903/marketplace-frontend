import { useState, useContext } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "../UserContext";

const LoginForm = () => {
  const [token, setToken] = useState(null);
  const [expiresIn, setExpiresIn] = useState(null);
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Ingresa un correo electrónico válido")
        .required("El correo electrónico es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      try {
        setSubmitting(true);
        const response = await login(values.email, values.password);
        if (response) {
          navigate("/mis-clases");
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        setStatus(
          error.errors[0].message || error.errors[0].msg || "Error desconocido al iniciar sesión."
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <section className="w-full max-w-full flex-start flex-col">
        <h1 className="head_text text-left">
          <span className="blue_gradient">Login</span>
        </h1>

        <form
          onSubmit={formik.handleSubmit}
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
              value={formik.values.email}
              onChange={(e) => {
                formik.handleChange(e);
                formik.setStatus(null);
              }}
              onBlur={formik.handleBlur}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-xs">{formik.errors.email}</div>
            ) : null}
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
              value={formik.values.password}
              onChange={(e) => {
                formik.handleChange(e);
                formik.setStatus(null);
              }}
              onBlur={formik.handleBlur}
              className="border border-gray-300 rounded p-2 w-full"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-xs">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="text-right">
            <a
              href="#" // replace with the actual link or route
              className="text-sm text-blue-500 hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {formik.status && (
            <div className="text-red-500 text-xs p-3 bg-red-100 rounded-md">
              {formik.status}
            </div>
          )}

          <div className="flex-end mx-3 mb-5 gap-4">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-md text-white uppercase"
            >
              {formik.isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LoginForm;
