import { useState } from "react";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const MobileNav = ({ session }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
  };

  return (
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
          <IconButton onClick={closeDropdown} style={closeButtonStyle}>
            <CloseIcon />
          </IconButton>
          <NavLink
            to="/clases"
            onClick={closeDropdown}
            className="py-3 text-gray-700 hover:text-orange-600 text-3xl"
          >
            Clases
          </NavLink>
          {session?.user ? (
            <>
              <NavLink
                to="/mis-clases"
                onClick={closeDropdown}
                className="py-3 text-gray-700 hover:text-orange-600 text-3xl"
              >
                Mis clases
              </NavLink>
              <NavLink
                to="/mi-perfil"
                className="py-3 text-gray-700 hover:text-orange-600 text-3xl"
                onClick={closeDropdown}
              >
                Mi Perfil
              </NavLink>
              <button
                onClick={closeDropdown}
                className="py-3 text-gray-700 w-full hover:text-orange-600 text-3xl"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                onClick={closeDropdown}
                className="py-3 text-gray-700 hover:text-orange-600 text-3xl"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/register"
                onClick={closeDropdown}
                className="py-3 text-gray-700 hover:text-orange-600 text-3xl"
              >
                Registrarse
              </NavLink>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
