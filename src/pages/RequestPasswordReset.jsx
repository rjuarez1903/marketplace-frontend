import { useEffect } from "react";
import RequestPasswordResetForm from "../components/RequestPasswordResetForm";

const RequestPasswordReset = () => {
  useEffect(() => {
    document.title = "EduHub | Recuperar contraseña";
  }, []);
  
  return (
    <div className="container mx-auto px-5">
      <RequestPasswordResetForm />
    </div>
  );
};

export default RequestPasswordReset;
