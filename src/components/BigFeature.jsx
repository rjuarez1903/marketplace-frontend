import { NavLink } from "react-router-dom";

const BigFeature = () => {
  return (
    <div className="glassmorphism grid md:grid-cols-5 gap-4">
      <div className="md:col-span-4">
        <h2 className="font-bold text-gray-700 text-4xl">¿Sos Profesor?</h2>
        <h3 className="font-semibold text-gray-500 text-2xl mt-2">
          ¡Ofrecé tus clases en nuestro Marketplace!
        </h3>
        <p className="text-xl text-gray-500 mt-2">
          En nuestro Marketplace, valoramos tu pasión por la enseñanza. Queremos
          que compartas tus conocimientos con estudiantes de todo el país y más
          allá.
        </p>
        <span className="inline-block">
          <NavLink
            className="outline_btn mt-6 uppercase font-bold "
            to="/register"
          >
            Registrate ahora
          </NavLink>
        </span>
      </div>
      <div className="md:relative">
        <img
          src="../public/assets/images/student.png"
          alt="student"
          className="md:absolute bottom-0 ml-auto right-0 w-1/2 md:w-11/12 h-auto"
        />
      </div>
    </div>
  );
};

export default BigFeature;
