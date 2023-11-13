// RequestPasswordReset.jsx

import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import CustomSnackbar from "./CustomSnackbar";
import { requestPasswordReset } from "../api/apiService";

const RequestPasswordReset = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
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
        setSnackbarMessage(
          "Si tu cuenta existe, te hemos enviado un enlace para restablecer tu contraseña."
        );
        setOpenSnackbar(true);
        // navigate("/");
      } catch (error) {
        setSnackbarMessage(
          "Ha ocurrido un error. Por favor intenta más tarde."
        );
        setOpenSnackbar(true);
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
        <CustomSnackbar
          message={snackbarMessage}
          type="success"
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        />
      </section>
    </>
  );
};

export default RequestPasswordReset;
