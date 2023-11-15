import { useEffect } from "react";
import PasswordResetForm from "../components/PasswordResetForm";

const PasswordReset = () => {
  useEffect(() => {
    document.title = "EduHub | Recuperar contraseña";
  }, []);

  return (
    <div className="container mx-auto px-5">
      <PasswordResetForm />
    </div>
  );
};

export default PasswordReset;
