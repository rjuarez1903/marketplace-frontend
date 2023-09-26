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
          <h2 className="sub_text text-left">
            <span className="green_gradient">Comentarios</span>
          </h2>
          <ul className="mt-5 grid grid-cols-12 gap-4">
            <li className="glassmorphism text-gray-700 mb-5 col-span-12 lg:col-span-4">
              ¡Este curso de React es una maravilla! 🚀 Aprendí a construir
              aplicaciones web impresionantes de una manera clara y concisa. La
              instructora tiene un gran talento para explicar conceptos
              complejos de manera sencilla.
            </li>
            <li className="glassmorphism text-gray-700 mb-5 col-span-12 lg:col-span-4">
              ¡Este curso de React es una maravilla! 🚀 Aprendí a construir
              aplicaciones web impresionantes de una manera clara y concisa. La
              instructora tiene un gran talento para explicar conceptos
              complejos de manera sencilla.
            </li>
            <li className="glassmorphism text-gray-700 mb-5 col-span-12 lg:col-span-4">
              ¡Este curso de React es una maravilla! 🚀 Aprendí a construir
              aplicaciones web impresionantes de una manera clara y concisa. La
              instructora tiene un gran talento para explicar conceptos
              complejos de manera sencilla.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
