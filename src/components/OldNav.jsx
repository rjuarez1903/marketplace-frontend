import { useState } from "react";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const OldNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [session, setSession] = useState({ user: null });

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="bg-white shadow-lg py-3">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <NavLink className="flex gap-2 items-center" to="/">
          <img
            src="/logo.svg"
            alt="logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <p className="logo_text">Marketplace</p>
        </NavLink>

        {/* Mobile Navigation */}
        <div className="sm:hidden relative">
          {session?.user ? (
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 focus:outline-none"
            >
              <img
                src="/assets/images/profile.jpg"
                width={37}
                height={37}
                className="rounded-full"
                alt="perfil"
              />
            </button>
          ) : (
            <button
              onClick={toggleDropdown}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <MenuIcon />
            </button>
          )}

          {showDropdown && (
            <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
              <button
                onClick={closeDropdown}
                className="absolute top-0 right-0 pr-7 pt-6 text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <CloseIcon />
              </button>
              <NavLink
                to="/clases"
                onClick={closeDropdown}
                className="py-3 text-gray-800 hover:text-orange-600 text-3xl"
              >
                Clases
              </NavLink>
              {session?.user ? (
                <>
                  <NavLink
                    to="/"
                    onClick={closeDropdown}
                    className="py-3 text-gray-800 hover:text-orange-600 text-3xl"
                  >
                    Mis clases
                  </NavLink>
                  <NavLink
                    to="/mi-perfil"
                    className="py-3 text-gray-800 hover:text-orange-600 text-3xl"
                    onClick={closeDropdown}
                  >
                    Mi Perfil
                  </NavLink>
                  <button
                    onClick={closeDropdown}
                    className="py-3 text-gray-800 w-full hover:text-orange-600 text-3xl"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    onClick={closeDropdown}
                    className="py-3 text-gray-800 hover:text-orange-600 text-3xl"
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    to="/register"
                    onClick={closeDropdown}
                    className="py-3 text-gray-800 hover:text-orange-600 text-3xl"
                  >
                    Registrarse
                  </NavLink>
                </>
              )}
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
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
              <NavLink to="/perfil">
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
      </div>
    </nav>
  );
};

export default OldNav;
