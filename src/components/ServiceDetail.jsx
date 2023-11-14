import { translateOption } from "../utils/translateOption";
import { formatDecimalToTime } from "../utils/formatDecimalToTime";
import StarRating from "./StarRating";
import TeacherProfile from "./TeacherProfile";

const ServiceDetail = (props) => {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <div className="flex flex-col">
            <h2 className="font-satoshi font-bold text-3xl text-blue-900">
              {props.name}
            </h2>
            <p className="font-inter text-base md:text-lg text-gray-600">
              ${props.cost} / {translateOption(props.frequency)} /{" "}
              {formatDecimalToTime(props.duration || 0)}
            </p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <StarRating rating={props.averageRating} />
      </div>
      <p className="my-4 font-satoshi text-base md:text-lg text-gray-700">
        {props.description}
      </p>
      <p className="font-inter text-md blue_gradient cursor-pointer uppercase">
        #{props.category}
      </p>
      <div className="mt-4">
        <TeacherProfile
          profileImgUrl={props.profileImgUrl}
          teacherFirstName={props.teacherFirstName}
          teacherLastName={props.teacherLastName}
          teacherDegree={props.teacherDegree}
          teacherExperience={props.teacherExperience}
        />  
        <div className="flex justify-end gap-2 mt-4 w-auto ml-auto">
          <button className="outline_btn" onClick={props.onCommentClick}>
            Comentar
          </button>
          <button className="black_btn" onClick={props.onConsultClick}>
            Consultar
          </button>
          {props.type === "individual" ? (
            <span className="bg-blue-600 text-white text-xs absolute top-0 right-0 py-1 px-5 rounded-tr-3xl rounded-bl-3xl">
              Individual
            </span>
          ) : (
            <span className="bg-amber-500 text-white text-xs absolute top-0 right-0 py-1 px-5 rounded-tr-3xl rounded-bl-3xl">
              Grupal
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
