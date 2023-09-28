import moment from "moment";

const Comment = ({ createdAt, content }) => {
  return (
    <div className="glassmorphism text-gray-700">
      <h3 className="font-bold mb-1">
        {moment(createdAt).format("DD/MM/YYYY HH:mm")}
      </h3>
      <p>{content}</p>
    </div>
  );
};

export default Comment;
