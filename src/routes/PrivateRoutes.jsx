import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const jwt = localStorage.getItem("jwt");
  return jwt ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;