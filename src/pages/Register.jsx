import { useEffect } from "react";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  useEffect(() => {
    document.title = "EduHub | Registro";
  }, []);

  return (
    <div className="container mx-auto px-5">
      <RegisterForm />
    </div>
  );
};

export default Register;
