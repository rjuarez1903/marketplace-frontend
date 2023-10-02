const SimplifiedServiceDetail = (props) => {
  const handleClickEdit = () => {
    // Lógica para editar el servicio, por ejemplo, redirigir a la página de edición.
    console.log("Editar servicio");
  };

  const handleClickDelete = () => {
    // Lógica para eliminar el servicio, como mostrar un modal de confirmación.
    console.log("Eliminar servicio");
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
              ${props.cost} / {props.frequency} / {props.duration} horas
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
        <div className="flex justify-end gap-2 mt-4 w-auto ml-auto">
          <button className="outline_btn" onClick={handleClickEdit}>
            Editar
          </button>
          <button className="black_btn" onClick={handleClickDelete}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimplifiedServiceDetail;
