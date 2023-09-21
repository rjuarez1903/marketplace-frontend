const ServiceDetail = (props) => {
    return (
      <div className="prompt_card">
        <div className="flex justify-between items-start gap-5">
          <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
            <div className="flex flex-col">
              <h2 className="font-satoshi font-bold text-xl md:text-2xl text-blue-900">
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
        <p className="font-inter text-base md:text-lg blue_gradient cursor-pointer uppercase">
          #{props.category}
        </p>
        <div className="mt-4">
          <p className="font-inter text-sm text-gray-400">
            Profesor: {props.teacherFirstName} {props.teacherLastName}
          </p>
          <p className="font-inter text-sm text-gray-400">
            Título: {props.teacherTitle} ({props.teacherExperience} años de experiencia)
          </p>
        </div>
      </div>
    );
  };
  
  export default ServiceDetail;
  