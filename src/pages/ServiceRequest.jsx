import { useEffect } from "react";
import Form from "../components/Form";

const ServiceRequest = () => {
  useEffect(() => {
    document.title = "EduHub | Solicitud de servicio";
  }, []);
  
  return (
    <div className="container mx-auto px-5">
      <Form />
    </div>
  );
};

export default ServiceRequest;
