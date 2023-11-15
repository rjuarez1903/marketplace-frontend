import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserContext } from "../UserContext";
import InputField from "./InputField";

const RegisterForm = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

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
      phoneNumber: Yup.string()
        .matches(/^\+?[1-9]\d{1,14}$/, "Ingresa un número de teléfono válido")
        .required("El teléfono es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      try {
        console.log(values);
        setSubmitting(true);
        const response = await register(values);
        console.log(response);
        navigate('/mi-perfil');
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
        <InputField
          label="Nombre"
          id="firstName"
          name="firstName"
          type="text"
          formik={formik}
        />
        <InputField
          label="Apellido"
          id="lastName"
          name="lastName"
          type="text"
          formik={formik}
        />
        <InputField
          label="Correo Electrónico"
          id="email"
          name="email"
          type="email"
          formik={formik}
        />
        <InputField
          label="Teléfono"
          id="tel"
          name="phoneNumber"
          type="phoneNumber"
          formik={formik}
        />
        <InputField
          label="Contraseña"
          id="password"
          name="password"
          type="password"
          formik={formik}
        />

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
