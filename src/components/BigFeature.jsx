import { NavLink } from "react-router-dom";

const BigFeature = (props) => {
  return (
    <div className="glassmorphism grid md:grid-cols-5 gap-4">
      <div className="md:col-span-4">
        <h2 className="font-bold text-gray-700 text-4xl">{props.title}</h2>
        <h3 className="font-semibold text-gray-500 text-2xl mt-2">
          {props.subtitle}
        </h3>
        <p className="text-xl text-gray-500 mt-2">
          {props.text}
        </p>
        <span className="inline-block">
          <NavLink
            className="outline_btn mt-6"
            to="/register"
          >
            {props.button}
          </NavLink>
        </span>
      </div>
      <div className="md:relative">
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          className="md:absolute bottom-0 ml-auto right-0 w-1/2 md:w-11/12 h-auto"
        />
      </div>
    </div>
  );
};

export default BigFeature;
