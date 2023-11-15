import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MessageWithIcon from "../components/MessageWithIcon";
import Loader from "../components/Loader/Loader";
import { getUnblockedComments } from "../api/apiService";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import PrivateComment from "../components/PrivateComment";
import { updateComment } from "../api/apiService";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingToggles, setLoadingToggles] = useState({});

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

  const toggleBlockComment = async (commentId, isCurrentlyBlocked) => {
    try {
      setLoadingToggles(prev => ({ ...prev, [commentId]: true }));
      const updatedComment = await updateComment(commentId, { isBlocked: !isCurrentlyBlocked });
      console.log(updatedComment);
      setComments(comments.map(comment => {
        if (comment._id === commentId) {
          return { ...comment, isBlocked: !isCurrentlyBlocked };
        }
        return comment;
      }));
    } catch (error) {
      console.error("Error al actualizar el comentario:", error);
    } finally {
      setLoadingToggles(prev => ({ ...prev, [commentId]: false }));
    }
  };

  useEffect(() => {
    document.title = "EduHub | Comentarios";
  }, []);

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
                loading={loadingToggles[comment._id]}
                onToggleBlock={() => toggleBlockComment(comment._id, comment.isBlocked)}
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
        <span className="blue_gradient">Comentarios</span>
      </h1>
      <div className="lg:col-span-9 mt-10 lg:mt-0">{content}</div>
    </div>
  );
};

export default Comments;
