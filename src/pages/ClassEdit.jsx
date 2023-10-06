import { useLocation } from "react-router-dom";
import ClassCreationForm from "../components/ClassCreationForm";

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

  return (
    <div className="container mx-auto px-5">
      <h1 className="head_text text-left">
        <span className="orange_gradient">Editá tu clase</span>
      </h1>
      <ClassCreationForm initialValues={initialValues} />
    </div>
  );
};

export default ClassEdit;
