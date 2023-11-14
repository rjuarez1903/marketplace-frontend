import { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserContext } from "../UserContext";

const RegisterForm = () => {
  const { register } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("El nombre es obligatorio"),
      lastName: Yup.string().required("El apellido es obligatorio"),
      email: Yup.string()
        .email("Ingresa un correo electrónico válido")
        .required("El correo electrónico es obligatorio"),
      phoneNumber: Yup.string().required("El teléfono es obligatorio"), // Puedes añadir validaciones específicas para teléfonos si lo deseas
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      try {
        console.log(values);
        setSubmitting(true);
        const response = await register(values);
        console.log(response);
        // Si quieres navegar a otro lugar después del registro, puedes hacerlo aquí
      } catch (error) {
        if (error.errors) {
          setStatus(error.errors);
        } else {
          setStatus([{ message: "Error desconocido al iniciar sesión." }]);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Registro</span>
      </h1>

      <form
        onSubmit={formik.handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism mx-auto"
      >
        <div>
          <label
            htmlFor="firstName"
            className="font-inter text-sm text-gray-600"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-500 text-xs">
              {formik.errors.firstName}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="font-inter text-sm text-gray-600"
          >
            Apellido:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-500 text-xs">{formik.errors.lastName}</div>
          )}
        </div>

        <div>
          <label htmlFor="email" className="font-inter text-sm text-gray-600">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-xs">{formik.errors.email}</div>
          )}
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="font-inter text-sm text-gray-600"
          >
            Teléfono:
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formik.values.tel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
          {formik.touched.tel && formik.errors.tel && (
            <div className="text-red-500 text-xs">{formik.errors.tel}</div>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="font-inter text-sm text-gray-600"
          >
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-xs">{formik.errors.password}</div>
          )}
        </div>

        {formik.status && Array.isArray(formik.status) && (
          <div className="text-red-500 text-xs p-3 bg-red-100 rounded-md">
            <ul>
              {formik.status.map((err, index) => (
                <li key={index}>{err.message || err.msg}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex-end mx-3 mb-5 gap-4">
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-md text-white uppercase"
          >
            {formik.isSubmitting ? "Registrando..." : "Registrar"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
