import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";
import CustomSnackbar from "./CustomSnackbar";
import { resetPassword } from "../api/apiService";
import queryString from "query-string";

const PasswordResetForm = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const { search } = useLocation();
  const { token } = queryString.parse(search);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("La contraseña es obligatoria")
        .min(6, "La contraseña debe tener al menos 6 caracteres"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
        .required("Confirmar contraseña es obligatorio"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      if (!token) {
        setSnackbarMessage("Token no encontrado");
        setOpenSnackbar(true);
        return;
      }
      setSubmitting(true);
      try {
        await resetPassword({ token, password: values.password });
        setSnackbarMessage("Contraseña restablecida con éxito");
        setOpenSnackbar(true);
        // navigate("/login"); // Opcional: redireccionar al login
      } catch (error) {
        setSnackbarMessage(
          error.response.data.message || "Error al restablecer contraseña"
        );
        setOpenSnackbar(true);
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Verificar si el token existe cuando el componente se monta
  useEffect(() => {
    if (!token) {
      setSnackbarMessage("Token inválido o expirado");
      setOpenSnackbar(true);
    }
  }, [token]);

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Restablecer Contraseña</span>
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        {/* Inputs para nueva contraseña y confirmación */}
        <div>
          <label
            htmlFor="password"
            className="font-inter text-sm text-gray-600"
          >
            Nueva Contraseña:
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
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-xs">{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="font-inter text-sm text-gray-600"
          >
            Confirmar Nueva Contraseña:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="text-red-500 text-xs">
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </div>
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
  );
};

export default PasswordResetForm;
