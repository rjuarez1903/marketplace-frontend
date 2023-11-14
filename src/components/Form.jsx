import * as Yup from "yup";
import { useFormik } from "formik";
import InputField from "./InputField";
import { createServiceContract } from "../api/apiService";

const Form = ({ onSuccess, classId }) => {
  const validationSchema = Yup.object({
    contactEmail: Yup.string()
      .email("Ingresa un correo electrónico válido")
      .required("El correo electrónico es obligatorio"),
    phoneNumber: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, "Ingresa un número de teléfono válido")
      .required("El número de teléfono es obligatorio"),
    // preferredContactTime: Yup.string().required(
    //   "El horario de preferencia para el contacto es obligatorio"
    // ),
    message: Yup.string()
      .required("El mensaje es obligatorio")
      .max(255, "El mensaje debe tener menos de 255 caracteres"),
  });

  const formik = useFormik({
    initialValues: {
      contactEmail: "",
      phoneNumber: "",
      preferredContactTime: "morning",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        console.log(values);
        const response = await createServiceContract(classId, values);
        console.log(response);
        onSuccess();
      } catch (error) {
        console.error(error);
      } finally {
        formik.setSubmitting(false);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-2xl flex flex-col gap-7"
    >
      <InputField
        label="Correo Electrónico"
        id="contactEmail"
        name="contactEmail"
        type="email"
        formik={formik}
      />
      <InputField
        label="Teléfono"
        id="phoneNumber"
        name="phoneNumber"
        type="tel"
        formik={formik}
      />

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
          value={formik.values.preferredContactTime}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          rows="4"
          className={`border rounded p-2 w-full ${
            formik.touched.message && formik.errors.message
              ? "border-red-500"
              : "border-gray-300"
          }`}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="text-red-600 text-xs">{formik.errors.message}</div>
        ) : null}
      </div>

      <div className="flex-end mx-3 mb-5 gap-4">
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-md text-white"
        >
          {formik.isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </form>
  );
};

export default Form;
