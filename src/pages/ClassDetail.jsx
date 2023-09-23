import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ServiceDetail from "../components/ServiceDetail";
import Loader from "../components/Loader/Loader";
import { getPublicUserData } from "../api/apiService";
import { getClassDetails } from "../api/apiService";

export const ClassDetail = () => {
  const [classDetail, setClassDetail] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getClassAndUser = async () => {
      try {
        const classData = await getClassDetails(id);
        setClassDetail(classData.service);
        const userIdFromService = classData.service.userId;

        if (userIdFromService) {
          const userData = await getPublicUserData(userIdFromService);
          setUser(userData);
        } else {
          setLoading(false);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getClassAndUser();
  }, [id]);

  return (
    <div className="container mx-auto px-5 lg:px-0">
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
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
        </div>
      )}
    </div>
  );
};
