import { NavLink } from "react-router-dom";

const DesktopNav = ({ session }) => {
  return (
    <div className="hidden sm:flex">
      <NavLink
        to="/clases"
        className="flex items-center font-bold text-gray-800 hover:text-orange-600 mr-5"
      >
        Clases
      </NavLink>
      {session?.user ? (
        <div className="flex gap-3 md:gap-5">
          <NavLink
            to="/"
            className="flex items-center font-bold text-gray-800 hover:text-orange-600"
          >
            Mis clases
          </NavLink>
          <NavLink
            to="/mi-perfil"
            className="flex items-center font-bold text-gray-800 hover:text-orange-600"
          >
            Mi perfil
          </NavLink>
          <button type="button" className="outline_btn">
            Sign Out
          </button>
          <img
            src="/assets/images/profile.jpg"
            width={37}
            height={37}
            className="rounded-full"
            alt="perfil"
          />
        </div>
      ) : (
        <div className="flex gap-3 md:gap-5">
          <NavLink to="/login" className="outline_btn">
            Sign In
          </NavLink>
          <NavLink to="/register" className="black_btn">
            Registrarse
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default DesktopNav;
