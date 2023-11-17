import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CreateClassForm from "../components/ClassCreationForm";
import { createService } from "../api/apiService";
import { SnackbarContext } from "../SnackbarContext";

export const ClassCreation = () => {
  const navigate = useNavigate();
  const { openSnackbar, closeSnackbar } = useContext(SnackbarContext);
  const onSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      setSubmitting(true);
      const response = await createService(values);
      console.log(response);
      openSnackbar("Clase creada con éxito.", "success"); 
    } catch (error) {
      if (error.response.data.errors) {
        setStatus(error.response.data.errors);
      } else {
        setStatus([{ message: "Error desconocido al crear la clase." }]);
      }
      openSnackbar("Error al crear la clase.", "error");
    } finally {
      setSubmitting(false);
      navigate("/mis-clases");
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
