import moment from "moment";
import StarRating from "./StarRating";

const Comment = ({ createdAt, rating, content }) => {
  return (
    <div className="glassmorphism text-gray-700">
      <h3 className="font-bold mb-1">
        {moment(createdAt).format("DD/MM/YYYY HH:mm")}
      </h3>
      <div className="mb-5">
      <StarRating rating={rating} />
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Comment;
