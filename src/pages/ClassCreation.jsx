import CreateClassForm from "../components/ClassCreationForm";

export const ClassCreation = () => {
  return (
    <div className="container mx-auto px-5">
       <h1 className="head_text text-left">
        <span className="blue_gradient">Creáz tu clase</span>
      </h1>
      <CreateClassForm />
    </div>
  );
};
