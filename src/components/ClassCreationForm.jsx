import { useFormik } from "formik";
import * as Yup from "yup";

const CreateClassForm = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGVjYzc3Y2I0NzI4MzAwOWExMzNhZGMiLCJpYXQiOjE2OTYyNjc2MjQsImV4cCI6MTY5NjI2ODUyNH0.UyeDiT1p_jQgtKOZfhhDhvXhotOWGRft5Xk-DQSzcWw";
  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre de la clase es requerido"),
    description: Yup.string().required("La descripción es requerida"),
    category: Yup.string().required("La categoría es requerida"),
    frequency: Yup.string().required("La frecuencia es requerida"),
    cost: Yup.number()
      .required("El costo es requerido")
      .min(0.99, "El costo mínimo es de 0.99")
      .max(4, "El costo máximo es de 4"),
    type: Yup.string().required("El tipo es requerido"),
    duration: Yup.number()
      .required("La duración es requerida")
      .min(0.5, "La duración mínima es de 0.5"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: "Front end",
      frequency: "unique",
      cost: 0.99,
      type: "individual",
      duration: 0.5,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:4000/api/v1/services", {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          // La solicitud se completó con éxito
          console.log("Formulario enviado con éxito");
          // Realiza alguna acción adicional si es necesario, como redirigir al usuario
        } else {
          console.log(response)
          console.error("Error al enviar el formulario");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    },
  });

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Creá tu Clase</span>
      </h1>

      <form
        onSubmit={formik.handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <div>
          <label htmlFor="name" className="font-inter text-sm text-gray-600">
            Nombre de la Clase:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded p-2 w-full"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-600 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="my-4">
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
            className="border border-gray-300 rounded p-2 w-full"
          ></textarea>
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-600 text-sm">
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
            <option value="Front end">Front end</option>
            <option value="Back end">Back end</option>
            <option value="Data science">Data science</option>
            <option value="Dev ops">Dev ops</option>
          </select>
          {formik.touched.category && formik.errors.category ? (
            <div className="text-red-600 text-sm">{formik.errors.category}</div>
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
            <div className="text-red-600 text-sm">
              {formik.errors.frequency}
            </div>
          ) : null}
        </div>

        <div>
          <label htmlFor="cost" className="font-inter text-sm text-gray-600">
            Costo (entre 0.99 y 4):
          </label>
          <input
            type="number"
            id="cost"
            name="cost"
            value={formik.values.cost}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded p-2 w-full"
            step="0.01"
          />
          {formik.touched.cost && formik.errors.cost ? (
            <div className="text-red-600 text-sm">{formik.errors.cost}</div>
          ) : null}
        </div>

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
            <div className="text-red-600 text-sm">{formik.errors.type}</div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="duration"
            className="font-inter text-sm text-gray-600"
          >
            Duración (mínimo 0.5 horas):
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formik.values.duration}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-300 rounded p-2 w-full"
            step="0.01"
          />
          {formik.touched.duration && formik.errors.duration ? (
            <div className="text-red-600 text-sm">{formik.errors.duration}</div>
          ) : null}
        </div>

        <div className="flex-end my-4">
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-md text-white"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateClassForm;
