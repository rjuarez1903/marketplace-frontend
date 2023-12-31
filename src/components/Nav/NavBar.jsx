import { useContext } from "react";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { UserContext } from "../../UserContext";

const NavBar = () => {
  const { session } = useContext(UserContext);
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
          <p className="logo_text">EduHub</p>
        </NavLink>
        <MobileNav session={session} />
        <DesktopNav session={session} />
      </div>
    </nav>
  );
};

export default NavBar;
