import { useEffect } from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  useEffect(() => {
    document.title = "EduHub | Login";
  }, []);

  return (
    <div className="container mx-auto px-5">
      <LoginForm />
    </div>
  );
};

export default Login;
