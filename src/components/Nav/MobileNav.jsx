import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";

const MobileNav = ({ session }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { logout } = useContext(UserContext);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const handleLogout = () => {
    logout();
    closeDropdown();
  }

  useEffect(() => {
    if (showDropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [showDropdown]);

  const closeButtonStyle = {
    position: "absolute",
    top: "16px",
    right: "12px",
  };

  return (
    <div className="sm:hidden relative">
      {session ? (
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
            to="/clases/programacion"
            onClick={closeDropdown}
            className="py-3 text-gray-700 hover:text-orange-600 text-3xl"
          >
            Programación
          </NavLink>
          <NavLink
            to="/clases/idiomas"
            onClick={closeDropdown}
            className="py-3 text-gray-700 hover:text-orange-600 text-3xl"
          >
            Idiomas
          </NavLink>
          <NavLink
            to="/clases/musica"
            onClick={closeDropdown}
            className="py-3 text-gray-700 hover:text-orange-600 text-3xl"
          >
            Música
          </NavLink>
          <NavLink
            to="/clases/matematica"
            onClick={closeDropdown}
            className="py-3 text-gray-700 hover:text-orange-600 text-3xl"
          >
            Matemática
          </NavLink>
          {session ? (
            <>
              <NavLink
                to="/mis-clases"
                onClick={closeDropdown}
                className="py-3 text-gray-700 hover:text-orange-600 text-3xl"
              >
                Clases
              </NavLink>
              <NavLink
                to="/mis-contrataciones"
                onClick={closeDropdown}
                className="py-3 text-gray-700 hover:text-orange-600 text-3xl"
              >
                Contrataciones
              </NavLink>
              <NavLink
                to="/mi-perfil"
                className="py-3 text-gray-700 hover:text-orange-600 text-3xl"
                onClick={closeDropdown}
              >
                Mi Perfil
              </NavLink>
              <button
                onClick={handleLogout}
                className="py-3 text-gray-700 w-full hover:text-orange-600 text-3xl"
              >
                <span className="mr-2">Salir</span>
                <LogoutIcon />
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                onClick={closeDropdown}
                className="py-3 text-gray-700 hover:text-orange-600 text-3xl"
              >
                Ingresar
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
