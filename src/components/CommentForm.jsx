import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InputField from "./InputField";
import { createComment } from "../api/apiService";

export const CommentForm = ({ onSuccess, onError, classId }) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Ingresa un correo electrónico válido")
      .required("El correo electrónico es obligatorio"),
    content: Yup.string().max(
      500,
      "El comentario debe tener menos de 255 caracteres"
    ),
    rating: Yup.number()
      .required("La calificación es obligatoria")
      .min(1, "Selecciona al menos una estrella")
      .max(5, "La calificación máxima es 5 estrellas"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      content: "",
      rating: 0,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await createComment(classId, {
          content: values.content,
          rating: values.rating,
        });
        console.log(response);
        onSuccess();
      } catch (error) {
        console.error(error);
        onError();
      } finally {
        formik.setSubmitting(false);
      }
    },
  });

  const renderStars = (maxStars) => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <button
          key={i}
          type="button"
          onClick={() => formik.setFieldValue("rating", i)}
        >
          {i <= formik.values.rating ? (
            <StarIcon fontSize="small" />
          ) : (
            <StarBorderIcon fontSize="small" />
          )}
        </button>
      );
    }
    return stars;
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-2xl flex flex-col gap-7"
    >
      <InputField
        label="Correo Electrónico"
        id="email"
        name="email"
        type="email"
        formik={formik}
      />

      <div className="my-4">
        <label htmlFor="content" className="font-inter text-sm text-gray-600">
          Comentario:
        </label>
        <textarea
          id="content"
          name="content"
          value={formik.values.content}
          onChange={formik.handleChange}
          rows="4"
          className="border border-gray-300 rounded p-2 w-full"
        ></textarea>
        <p className="text-xs text-gray-500 mt-1">
          La publicación de comentarios está sujeta al criterio del profesor
        </p>
        {formik.touched.content && formik.errors.content ? (
          <div className="text-red-600 text-xs">{formik.errors.content}</div>
        ) : null}
      </div>

      <div>
        <p className="font-inter text-sm text-gray-600">Calificación:</p>
        <div className="flex space-x-2">{renderStars(5)}</div>
      </div>
      {formik.touched.rating && formik.errors.rating && (
        <div className="text-red-600 text-xs">{formik.errors.rating}</div>
      )}

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
