import { NavLink } from "react-router-dom";

const ServiceCard = (props) => {
  return (
    <div className="prompt_card">
      <NavLink to={`/clases/${props.id}`}>
        <div className="flex justify-between items-start gap-5">
          <div className="flex-1 flex justify-start items-center gap-3">
            <div className="flex flex-col">
              <h2 className="font-satoshi font-bold text-3xl text-blue-900">
                {props.name}
              </h2>
              <p className="font-inter text-lg text-gray-600">
                ${props.cost} / {props.frequency}
              </p>
            </div>
          </div>
        </div>
        <p className="my-4 font-satoshi text-sm text-gray-700">
          {props.description}
        </p>
        <p className="font-inter text-sm blue_gradient cursor-pointer uppercase">
          #{props.category}
        </p>
      </NavLink>
    </div>
  );
};

export default ServiceCard;
