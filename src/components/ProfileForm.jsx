import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";

export const ProfileForm = ({ initialFormData, handleSubmit }) => {
  const validationSchema = Yup.object({
    degree: Yup.string()
      .required("El título es obligatorio")
      .max(50, "El título debe tener menos de 50 caracteres"),
    experience: Yup.string()
      .required("La experiencia es obligatoria")
      .max(255, "La experiencia debe tener menos de 255 caracteres"),
  });
  const formik = useFormik({
    initialValues: initialFormData,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form
      className="w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      onSubmit={formik.handleSubmit}
    >
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12">
          <label htmlFor="name" className="font-inter text-sm text-gray-600">
            Nombre:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            className="border border-gray-300 rounded p-2 w-full"
            disabled
          />
        </div>
        <div className="col-span-12">
          <label htmlFor="name" className="font-inter text-sm text-gray-600">
            Apellido:
          </label>
          <input
            type="text"
            id="lastName"
            value={formik.values.lastName}
            className="border border-gray-300 rounded p-2 w-full"
            disabled
          />
        </div>
        <div className="col-span-12">
          <label htmlFor="email" className="font-inter text-sm text-gray-600">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            className="border border-gray-300 rounded p-2 w-full"
            disabled
          />
        </div>
        <div className="col-span-12">
          <InputField
            label="Título"
            id="degree"
            name="degree"
            type="text"
            formik={formik}
          />
        </div>
        <div className="col-span-12">
          <label htmlFor="email" className="font-inter text-sm text-gray-600">
            Experiencia:
          </label>
          <textarea
            className={`border rounded p-2 w-full ${
              formik.touched.experience && formik.errors.experience
                ? "border-red-500"
                : "border-gray-300"
            }`}
            id="experience"
            name="experience"
            rows="5"
            value={formik.values.experience}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.experience && formik.errors.experience ? (
            <div className="text-red-600 text-xs">
              {formik.errors.experience}
            </div>
          ) : null}
        </div>
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
  );
};
