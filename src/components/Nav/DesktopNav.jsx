import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const DesktopNav = ({ session }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeDropdown();
  }, [location]);

  return (
    <div className="hidden sm:flex relative items-center" ref={dropdownRef}>
      <div className="relative group cursor-pointer z-50">
        <span
          onClick={toggleDropdown}
          className="flex items-center font-bold text-gray-700 mr-5 hover:text-orange-600"
        >
          Categorías
        </span>
        <div
          className={`${
            showDropdown ? "block" : "hidden"
          } absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg`}
        >
          <NavLink
            to="/clases/front-end"
            className="rounded-t-lg block px-4 py-2 hover:bg-gray-100 min-w-[200px]"
            onClick={closeDropdown}
          >
            Front End
          </NavLink>
          <NavLink
            to="/clases/back-end"
            className="block px-4 py-2 hover:bg-gray-100 min-w-[200px]"
            onClick={closeDropdown}
          >
            Back End
          </NavLink>
          <NavLink
            to="/clases/data-science"
            className="block px-4 py-2 hover:bg-gray-100 min-w-[200px]"
            onClick={closeDropdown}
          >
            Data Science
          </NavLink>
          <NavLink
            to="/clases/dev-ops"
            className="rounded-b-lg block px-4 py-2 hover:bg-gray-100 min-w-[200px]"
            onClick={closeDropdown}
          >
            Dev Ops
          </NavLink>
          {/* Agrega más enlaces de categorías aquí */}
        </div>
      </div>
      {session?.user ? (
        <div className="flex gap-3 md:gap-5">
          <NavLink
            to="/mis-clases"
            className="flex items-center font-bold text-gray-700 hover:text-orange-600"
          >
            Clases
          </NavLink>
          <NavLink
            to="/mis-contrataciones"
            className="flex items-center font-bold text-gray-700 hover:text-orange-600"
          >
            Contrataciones
          </NavLink>
          <button type="button" className="outline_btn">
            Sign Out
          </button>
          <NavLink
            to="/mi-perfil"
            className="flex items-center font-bold text-gray-700 hover:text-orange-600"
          >
            <img
              src="/assets/images/profile.jpg"
              width={37}
              height={37}
              className="rounded-full"
              alt="perfil"
            />
          </NavLink>
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