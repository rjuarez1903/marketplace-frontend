import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import ServiceDetail from "../components/ServiceDetail";
import Loader from "../components/Loader/Loader";
import { getPublicUserData } from "../api/apiService";
import { getClassDetails } from "../api/apiService";
import { getUnblockedComments } from "../api/apiService";
import MessageWithIcon from "../components/MessageWithIcon";
import Comment from "../components/Comment";

export const ClassDetail = () => {
  const [classDetail, setClassDetail] = useState(null);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

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
            category={classDetail.category}
            teacherFirstName={user.firstName}
            teacherLastName={user.lastName}
            teacherDegree={user.degree}
            teacherExperience={user.experience}
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
              message="¡Oops! Parece que no hay comentarios aún. !Comentá antes que nadie!"
            />
          ) : (
            <ul className="grid grid-cols-12 gap-4">
              {comments.map((comment) => (
                <li key={comment._id} className="col-span-12 lg:col-span-4">
                  <Comment
                    createdAt={comment.createdAt}
                    content={comment.content}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
