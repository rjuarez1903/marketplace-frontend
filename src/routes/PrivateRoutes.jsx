import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const PrivateRoutes = () => {
  const { session } = useContext(UserContext);
  return session ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
