import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { UserContext } from "../UserContext";

const PrivateRoutes = () => {
  const { session, loading } = useContext(UserContext);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return session ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
