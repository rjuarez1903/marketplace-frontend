const ServiceDetail = (props) => {
  const handleClick = () => {
    // Aquí puedes realizar la lógica que desees cuando se hace clic en el botón de consulta
    // Por ejemplo, podrías abrir un modal con más detalles o redirigir a otra página.
    // Si tienes una acción específica que deseas realizar, agrégala aquí.
    console.log("Botón de consulta clickeado");
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <div className="flex flex-col">
            <h2 className="font-satoshi font-bold text-3xl text-blue-900">
              {props.name}
            </h2>
            <p className="font-inter text-base md:text-lg text-gray-600">
              ${props.cost} / {props.frequency}
            </p>
          </div>
        </div>
      </div>
      <p className="my-4 font-satoshi text-base md:text-lg text-gray-700">
        {props.description}
      </p>
      <p className="font-inter text-md blue_gradient cursor-pointer uppercase">
        #{props.category}
      </p>
      <div className="mt-4">
        <p className="font-inter text-sm text-gray-400">
          Docente: {props.teacherFirstName} {props.teacherLastName}
        </p>
        <p className="font-inter text-sm text-gray-400">
          Título: {props.teacherDegree}
        </p>
        <p className="font-inter text-sm text-gray-400">
          Experiencia: {props.teacherExperience}
        </p>
        <div className="flex justify-end gap-2 mt-2 w-auto ml-auto">
          <button className="outline_btn uppercase" onClick={handleClick}>
            Comentar
          </button>
          <button className="black_btn uppercase" onClick={handleClick}>
            Consultar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
