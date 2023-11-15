import { useEffect } from "react";
import CreateClassForm from "../components/ClassCreationForm";
import { createService } from "../api/apiService";

export const ClassCreation = () => {
  const onSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      console.log(values);
      setSubmitting(true);
      const response = await createService(values);
      console.log(response);
    } catch (error) {
      if (error.response.data.errors) {
        setStatus(error.response.data.errors);
      } else {
        setStatus([{ message: "Error desconocido al crear la clase." }]);
      }
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    document.title = "EduHub | Creá tu clase";
  }, []);

  return (
    <div className="container mx-auto px-5">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Creá tu clase</span>
      </h1>
      <CreateClassForm onSubmit={onSubmit} />
    </div>
  );
};
