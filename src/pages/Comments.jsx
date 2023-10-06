import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MessageWithIcon from "../components/MessageWithIcon";
import Loader from "../components/Loader/Loader";
import { getUnblockedComments } from "../api/apiService";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import PrivateComment from "../components/PrivateComment";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsData = await getUnblockedComments(id);
        setComments(commentsData.comments);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [id]);

  let content = null;

  if (loading) {
    content = <Loader />;
  } else if (comments.length > 0) {
    content = (
      <ul className="grid grid-cols-12 gap-4">
        {comments.map((comment) => (
          <li key={comment._id} className="col-span-12 lg:col-span-4">
            {
              <PrivateComment
                createdAt={comment.createdAt}
                content={comment.content}
                rating={comment.rating || 1}
                isBlocked={comment.isBlocked}
              />
            }
          </li>
        ))}
      </ul>
    );
  } else {
    content = (
      <div className="flex flex-col items-center justify-center">
        <MessageWithIcon
          icon={
            <SentimentVeryDissatisfiedIcon
              sx={{ fontSize: "60px", color: "rgb(75, 85, 99)" }}
            />
          }
          message="Todavía no tenés comentarios"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-5">
      <h1 className="head_text text-left mb-5">
        <span className="blue_gradient">Contrataciones</span>
      </h1>
      <div className="lg:col-span-9 mt-10 lg:mt-0">{content}</div>
    </div>
  );
};

export default Comments;
