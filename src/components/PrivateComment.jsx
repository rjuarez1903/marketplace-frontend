import moment from "moment";
import StarRating from "./StarRating";

const PrivateComment = ({
  createdAt,
  rating,
  content,
  isBlocked,
  loading,
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
          <button
            onClick={onToggleBlock}
            disabled={loading}
            className="mt-2 outline_btn"
          >
            {loading ? "Cargando..." : isBlocked ? "Desbloquear" : "Bloquear"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateComment;
