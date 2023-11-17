import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import ServiceDetail from "../components/ServiceDetail";
import Loader from "../components/Loader/Loader";
import MessageWithIcon from "../components/MessageWithIcon";
import Comment from "../components/Comment";
import StarRating from "../components/StarRating";
import DialogBox from "../components/DialogBox";
import { getPublicUserData } from "../api/apiService";
import { getClassDetails } from "../api/apiService";
import { getUnblockedComments } from "../api/apiService";
import Form from "../components/Form";
import { CommentForm } from "../components/CommentForm";
import { SnackbarContext } from "../SnackbarContext";

export const ClassDetail = () => {
  const { openSnackbar, closeSnackbar } = useContext(SnackbarContext);
  const [classDetail, setClassDetail] = useState(null);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const { id } = useParams();

  const handleClick = (buttonType) => {
    setIsDialogOpen(true);
    if (buttonType === "comment") {
      setDialogTitle("Comentar");
      setDialogContent(
        <CommentForm
          onSuccess={() => handleSuccess("Comentario enviado con éxito")}
          onError={() => handleError("Error al enviar el comentario")}
          classId={id}
        />
      );
    } else if (buttonType === "consult") {
      setDialogTitle("Consultar");
      setDialogContent(
        <Form
          onSuccess={() => handleSuccess("Consulta enviada con éxito")}
          onError={() => handleError("Error al enviar la consulta")}
          classId={id}
        />
      );
    }
  };

  const handleSuccess = async (message) => {
    openSnackbar(message, "success");
    setIsDialogOpen(false);
    try {
      const commentsData = await getUnblockedComments(id);
      setComments(commentsData.comments);
    } catch (error) {
      console.error("Error fetching updated comments:", error);
    }
  };

  const handleError = (message) => {
    openSnackbar(message, "error");
    setIsDialogOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const classData = await getClassDetails(id);
        setClassDetail(classData.service);
        const userIdFromService = classData.service.userId;
        if (userIdFromService) {
          const userData = await getPublicUserData(userIdFromService);
          setUser(userData);
        }
        const commentsData = await getUnblockedComments(id);
        setComments(commentsData.comments);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    document.title = "EduHub | Detalle de la clase";
  }, []);

  return (
    <div className="container mx-auto px-5">
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <h1 className="head_text text-left mb-5">
            <span className="orange_gradient">Detalle de la clase</span>
          </h1>
          <ServiceDetail
            name={classDetail.name}
            cost={classDetail.cost}
            frequency={classDetail.frequency}
            description={classDetail.description}
            duration={classDetail.duration || ""}
            category={classDetail.category}
            type={classDetail.type}
            averageRating={classDetail.averageRating}
            teacherFirstName={user.firstName}
            teacherLastName={user.lastName}
            teacherDegree={user.degree}
            profileImgUrl={user.profileImgUrl}
            teacherExperience={user.experience}
            onCommentClick={() => handleClick("comment")}
            onConsultClick={() => handleClick("consult")}
          />
          <DialogBox
            title={dialogTitle}
            content={dialogContent}
            onClose={() => setIsDialogOpen(false)}
            onConfirm={() => setIsDialogOpen(false)}
            open={isDialogOpen}
          />
          <h2 className="mb-5 sub_text text-left">
            <span className="green_gradient">Comentarios</span>
          </h2>
          {comments.length === 0 ? (
            <MessageWithIcon
              icon={
                <SentimentVeryDissatisfiedIcon
                  sx={{ fontSize: "60px", color: "rgb(75, 85, 99)" }}
                />
              }
              message="¡Oops! Parece que no hay comentarios aún. ¡Comentá antes que nadie!"
            />
          ) : (
            <ul className="grid grid-cols-12 gap-4">
              {comments.map((comment) => (
                <li key={comment._id} className="col-span-12 lg:col-span-4">
                  {comment.isBlocked ? (
                    <div className="glassmorphism text-gray-700">
                      <h3 className="font-bold mb-1">
                        {moment(comment.createdAt).format("DD/MM/YYYY HH:mm")}
                      </h3>
                      <StarRating rating={comment.rating} />
                    </div>
                  ) : (
                    <Comment
                      createdAt={comment.createdAt}
                      content={comment.content}
                      rating={comment.rating}
                    />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
