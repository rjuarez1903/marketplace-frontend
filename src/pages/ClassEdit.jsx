import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ClassCreationForm from "../components/ClassCreationForm";
import { editService } from "../api/apiService";
import { SnackbarContext } from "../SnackbarContext";

const ClassEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { openSnackbar, closeSnackbar } = useContext(SnackbarContext);
  const myClass = location.state.myClass;
  const initialValues = {
    name: myClass.name,
    description: myClass.description,
    category: myClass.category,
    frequency: myClass.frequency,
    cost: myClass.cost,
    type: myClass.type,
    duration: myClass.duration,
  };

  const onSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      setSubmitting(true);
      await editService(myClass._id, values);
      openSnackbar("Clase editada con éxito.", "success");
    } catch (error) {
      if (error.response.data.errors) {
        setStatus(error.response.data.errors);
      } else {
        setStatus([{ message: "Error desconocido al editar la clase." }]);
      }
      openSnackbar("Error al editar la clase.", "error");
    } finally {
      setSubmitting(false);
      navigate("/mis-clases");
    }
  };

  useEffect(() => {
    document.title = "EduHub | Editá tu clase";
  }, []);

  return (
    <div className="container mx-auto px-5">
      <h1 className="head_text text-left">
        <span className="orange_gradient">Editá tu clase</span>
      </h1>
      <ClassCreationForm initialValues={initialValues} onSubmit={onSubmit}/>
    </div>
  );
};

export default ClassEdit;
