import moment from "moment";
import StarRating from "./StarRating";

const PrivateComment = ({
  createdAt,
  rating,
  content,
  isBlocked,
  onToggleBlock,
}) => {
  return (
    <div
      className={`glassmorphism text-gray-700 ${isBlocked ? "opacity-50" : ""}`}
    >
      <h3 className="font-bold mb-1">
        {moment(createdAt).format("DD/MM/YYYY HH:mm")}
      </h3>
      <div className="mb-5">
        <StarRating rating={rating} />
      </div>
      <p>{content}</p>
      <div>
        <div className="flex flex-end">
          <button onClick={onToggleBlock} className="mt-2 outline_btn">
            {isBlocked ? "Desbloquear" : "Bloquear"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateComment;
