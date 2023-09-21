import { useState, useEffect } from "react";
import ServiceDetail from "../components/ServiceDetail";
import Loader from "../components/Loader/Loader";
import { getPublicUserData } from "../api/apiService";

export const ClassDetail = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const data = await getPublicUserData("64ecc77cb47283009a133adc");

      setUser(data);
      setLoading(false);
    };
    getUser();
  }, []);

  return (
    <div className="container mx-auto mt-16 px-5 lg:px-0">
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <ServiceDetail
            name="Ciencia de Datos"
            cost="5.99"
            frequency="Mensual"
            description="Explorá los fundamentos de la ciencia de datos y aprendé a analizar y visualizar datos. Adquirí habilidades clave para la toma de decisiones informadas"
            category="Data science"
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
