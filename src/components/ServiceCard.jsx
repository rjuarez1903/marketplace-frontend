import { NavLink } from "react-router-dom";
import StarRating from "./StarRating";

const ServiceCard = (props) => {
  return (
    <div className="prompt_card border border-white/30 [background:var(--bg)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(30,58,138,0.2)]">
      <NavLink to={`/clases/detalle/${props.id}`}>
        <div className="flex justify-between items-start gap-5">
          <div className="flex-1 flex justify-start items-center gap-3">
            <div className="flex flex-col">
              <h2 className="font-satoshi font-bold text-3xl text-blue-900">
                {props.name}
              </h2>
              <p className="font-inter text-lg text-gray-600">
                ${props.cost} / {props.frequency} / {props.duration} horas
              </p>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <StarRating rating={props.averageRating} />
        </div>
        <p className="my-4 font-satoshi text-base md:text-lg text-gray-700">
          {props.description}
        </p>
        <p className="font-inter text-md blue_gradient cursor-pointer uppercase">
          #{props.category}
        </p>
      </NavLink>
    </div>
  );
};

export default ServiceCard;
