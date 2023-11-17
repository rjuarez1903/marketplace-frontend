import { useFormik } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";

const CreateClassForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("El nombre de la clase es requerido")
      .max(50, "El nombre de la clase debe tener menos de 50 caracteres"),
    description: Yup.string()
      .required("La descripción es requerida")
      .max(255, "La descripción debe tener menos de 255 caracteres"),
    category: Yup.string().required("La categoría es requerida"),
    frequency: Yup.string().required("La frecuencia es requerida"),
    cost: Yup.number()
      .required("El costo es requerido")
      .min(0.99, "El costo mínimo es de $0.99"),
    type: Yup.string().required("El tipo es requerido"),
    duration: Yup.number()
      .required("La duración es requerida")
      .min(0.5, "La duración mínima es de 30 minutos")
      .max(4, "La duración máxima es de 4 horas"),
  });

  const defaultValues = {
    name: "",
    description: "",
    category: "programacion",
    frequency: "unique",
    cost: 0.99,
    type: "individual",
    duration: 0.5,
  };

  const formik = useFormik({
    initialValues: initialValues || defaultValues,
    validationSchema,
    onSubmit, 
  });

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <form
        onSubmit={formik.handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism mx-auto"
      >
        <InputField
          label="Nombre de la Clase"
          id="name"
          name="name"
          type="text"
          formik={formik}
        />
        <div>
          <label
            htmlFor="description"
            className="font-inter text-sm text-gray-600"
          >
            Descripción:
          </label>
          <textarea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows="4"
            className={`border rounded p-2 w-full ${
              formik.touched.description && formik.errors.description
                ? "border-red-500"
                : "border-gray-300"
            }`}
          ></textarea>
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-600 text-xs">
              {formik.errors.description}
            </div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="category"
            className="font-inter text-sm text-gray-600"
          >
            Categoría:
          </label>
          <select
            id="category"
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="programacion">Programación</option>
            <option value="idiomas">Idiomas</option>
            <option value="musica">Música</option>
            <option value="matematica">Matemática</option>
          </select>
          {formik.touched.category && formik.errors.category ? (
            <div className="text-red-600 text-xs">{formik.errors.category}</div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="frequency"
            className="font-inter text-sm text-gray-600"
          >
            Frecuencia:
          </label>
          <select
            id="frequency"
            name="frequency"
            value={formik.values.frequency}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="unique">Única</option>
            <option value="weekly">Semanal</option>
            <option value="monthly">Mensual</option>
          </select>
          {formik.touched.frequency && formik.errors.frequency ? (
            <div className="text-red-600 text-xs">
              {formik.errors.frequency}
            </div>
          ) : null}
        </div>

        <InputField
          label="Costo ($0.99 como mínimo)"
          id="cost"
          name="cost"
          type="number"
          formik={formik}
        />

        <div>
          <label htmlFor="type" className="font-inter text-sm text-gray-600">
            Tipo:
          </label>
          <select
            id="type"
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="individual">Individual</option>
            <option value="group">Grupo</option>
          </select>
          {formik.touched.type && formik.errors.type ? (
            <div className="text-red-600 text-xs">{formik.errors.type}</div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="duration"
            className="font-inter text-sm text-gray-600"
          >
            Duración (mínimo 30 minutos)
          </label>
          <select
            id="duration"
            name="duration"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.duration}
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="0.5">30 minutos</option>
            <option value="1">1 hora</option>
            <option value="1.5">1 hora y media</option>
            <option value="2">2 horas</option>
            <option value="2.5">2 horas y media</option>
            <option value="3">3 horas</option>
            <option value="3.5">3 horas y media</option>
            <option value="4">4 horas</option>
          </select>
          {formik.touched.duration && formik.errors.duration ? (
            <div className="text-red-500 text-xs">{formik.errors.duration}</div>
          ) : null}
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
            {formik.isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateClassForm;
