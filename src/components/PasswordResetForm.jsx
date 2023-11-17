import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";
import { resetPassword } from "../api/apiService";
import { SnackbarContext } from "../SnackbarContext";
import queryString from "query-string";
import InputField from "./InputField";

const PasswordResetForm = () => {
  const { openSnackbar, closeSnackbar } = useContext(SnackbarContext);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();
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
        .min(8, "La contraseña debe tener al menos 8 caracteres"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
        .required("Confirmar contraseña es obligatorio"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        await resetPassword({ token, password: values.password });
        setSnackbarMessage("Contraseña restablecida con éxito");
        openSnackbar("Contraseña restablecida con éxito", "success");
        navigate("/login");
      } catch (error) {
        console.log(error);
        openSnackbar("Error al restablecer la contraseña", "error");
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (!token) {
      openSnackbar("Token inválido", "error");
      navigate("/login");
    }
  }, [token]);

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Restablecer Contraseña</span>
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism mx-auto"
      >
        <InputField
          label="Nueva Contraseña"
          id="password"
          name="password"
          type="password"
          formik={formik}
        />

        <InputField
          label="Confirmar Nueva Contraseña"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
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
  );
};

export default PasswordResetForm;
