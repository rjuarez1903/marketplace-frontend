import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [session, setSession] = useState({ user: "Rodrigo" });

  return (
    // <div className="shadow-lg py-6 bg-white rounded-3xl">
    <nav className="flex-between w-full pt-3 container mx-auto px-5 z-50 ">
      <NavLink className="flex gap-2 flex-center" to="/">
        <img
          src="/assets/images/react.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Marketplace</p>
      </NavLink>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <NavLink
              to="/crear-clase"
              className="black_btn uppercase font-bold"
            >
              Crear clase
            </NavLink>

            <button type="button" className="outline_btn">
              Sign Out
            </button>

            <NavLink href="/perfil">
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
          <>
            <button
              type="button"
              onClick={() => console.log("clicked")}
              className="black_btn uppercase font-bold"
            >
              Registrarse
            </button>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <img
              src="/assets/images/profile.jpg"
              width={37}
              height={37}
              className="rounded-full"
              alt="perfil"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <NavLink
                  to="/mi-perfil"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Mi Perfil
                </NavLink>
                <NavLink
                  href="/crear-clase"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Crear Clase
                </NavLink>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => console.log("clicked")}
              className="black_btn"
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </nav>
    // </div>
  );
};

export default Nav;
