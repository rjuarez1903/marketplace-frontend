import { useLocation } from "react-router-dom";
import ClassCreationForm from "../components/ClassCreationForm";
import { editService } from "../api/apiService";

const ClassEdit = () => {
  const location = useLocation();
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
      const response = await editService(myClass._id, values);
      console.log(response);
    } catch (error) {
      if (error.response.data.errors) {
        setStatus(error.response.data.errors);
      } else {
        setStatus([{ message: "Error desconocido al editar la clase." }]);
      }
    } finally {
      setSubmitting(false);
    }
  };

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
