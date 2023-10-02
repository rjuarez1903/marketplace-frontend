import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export const CommentForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [commentInfo, setCommentInfo] = useState({
    email: "",
    content: "",
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommentInfo({ ...commentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrega aquí la lógica para manejar el envío del formulario de contacto
    console.log("Formulario de contacto enviado:", commentInfo);
  };

  const renderStars = (maxStars) => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <button
          key={i}
          type="button"
          onClick={() => setCommentInfo({ ...commentInfo, rating: i })}
        >
          {i <= commentInfo.rating ? (
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
      onSubmit={handleSubmit}
      className="w-full max-w-2xl flex flex-col gap-7"
    >
      <div>
        <label htmlFor="email" className="font-inter text-sm text-gray-600">
          Correo Electrónico:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={commentInfo.email}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full"
          required
        />
      </div>

      <div className="my-4">
        <label htmlFor="content" className="font-inter text-sm text-gray-600">
          Mensaje:
        </label>
        <textarea
          id="content"
          name="content"
          value={commentInfo.content}
          onChange={handleInputChange}
          rows="4"
          className="border border-gray-300 rounded p-2 w-full"
          required
        ></textarea>
      </div>

      <div className="">
        <p className="font-inter text-sm text-gray-600">
          Calificación
        </p>
        <div className="flex space-x-2">
          {renderStars(5)}
        </div>
      </div>

      <div className="flex-end mx-3 mb-5 gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-md text-white"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};
