import { useContext } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { requestPasswordReset } from "../api/apiService";
import { SnackbarContext } from "../SnackbarContext";
import InputField from "./InputField";

const RequestPasswordReset = () => {
  const { openSnackbar, closeSnackbar } = useContext(SnackbarContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Correo electrónico inválido")
        .required("El correo electrónico es obligatorio"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        await requestPasswordReset(values.email);
        openSnackbar(
          "Si tu cuenta existe, te hemos enviado un enlace para restablecer tu contraseña.",
          "success"
        );
        navigate("/");
      } catch (error) {
        openSnackbar("Ocurrió un error. Por favor intenta más tarde.", "error");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <section className="w-full max-w-full flex-start flex-col">
        <h1 className="head_text text-left">
          <span className="blue_gradient">Restablecer contraseña</span>
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism mx-auto"
        >
          <InputField
            label="Correo Electrónico"
            id="email"
            name="email"
            type="email"
            formik={formik}
          />

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
    </>
  );
};

export default RequestPasswordReset;
