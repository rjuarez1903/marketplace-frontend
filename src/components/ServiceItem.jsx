import { Edit, Delete, Visibility, VisibilityOff } from "@mui/icons-material";
import StarRating from "./StarRating";
import { translateOption } from "../utils/translateOption";
import { formatDecimalToTime } from "../utils/formatDecimalToTime";
import { NavLink } from "react-router-dom";

const ServiceItem = (props) => {
  // destructure myClass from props
  const { myClass, onEdit, onDelete, onPublish, onUnpublish } = props;
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <div className="flex flex-col">
            <h2 className="font-satoshi font-bold text-3xl text-blue-900">
              {myClass.name}
            </h2>
            <p className="font-inter text-base md:text-lg text-gray-600">
              ${myClass.cost} / {translateOption(myClass.frequency)} /{" "}
              {formatDecimalToTime(myClass.duration || 0)}
            </p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <StarRating rating={myClass.averageRating} />
      </div>
      <p className="my-4 font-satoshi text-base md:text-lg text-gray-700">
        {myClass.description}
      </p>
      <p className="font-inter text-md blue_gradient cursor-pointer uppercase">
        #{myClass.category}
      </p>
      <div className="mt-4 w-auto">
        <NavLink
          to={`/mis-clases/${myClass._id}/comentarios`}
          className="text-md text-blue-500 hover:underline"
        >
          Ver Comentarios
        </NavLink>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row sm:justify-end items-end gap-2">
        <button
          onClick={() => onEdit(myClass._id)}
          className="bg-blue-500 text-white px-5 py-1.5 rounded-md hover:bg-blue-600 focus:outline-none font-inter text-sm transition-all w-auto"
        >
          <Edit /> Editar
        </button>
        <button
          onClick={() => onDelete(myClass.id)}
          className="bg-red-500 text-white px-5 py-1.5 rounded-md hover:bg-red-600 focus:outline-none font-inter text-sm transition-all w-auto"
        >
          <Delete /> Eliminar
        </button>
        {myClass.isPublished ? (
          <button
            onClick={() => onUnpublish(service.id)}
            className="bg-gray-500 text-white px-5 py-1.5 rounded-md hover:bg-gray-600 focus:outline-none font-inter text-sm transition-all w-auto"
          >
            <VisibilityOff /> Despublicar
          </button>
        ) : (
          <button
            onClick={() => onPublish(service.id)}
            className="bg-green-500 text-white px-5 py-1.5 rounded-md hover:bg-green-600 focus:outline-none font-inter text-sm transition-all w-auto"
          >
            <Visibility /> Publicar
          </button>
        )}
        {myClass.type === "individual" ? (
          <span className="bg-blue-600 text-white text-xs absolute top-0 right-0 py-1 px-5 rounded-tr-3xl rounded-bl-3xl">
            Individual
          </span>
        ) : (
          <span className="bg-amber-500 text-white text-xs absolute top-0 right-0 py-1 px-5 rounded-tr-3xl rounded-bl-3xl">
            Grupal
          </span>
        )}
      </div>
    </div>
  );
};

export default ServiceItem;
