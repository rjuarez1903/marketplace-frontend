import { useState, useEffect } from "react";
import { getServicesByUser } from "../api/apiService";
import ServiceDetail from "../components/ServiceDetail";
import Loader from "../components/Loader/Loader";
import MessageWithIcon from "../components/MessageWithIcon";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const MyClasses = () => {
  const [myClasses, setMyClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyClasses = async () => {
      try {
        const myClassesData = await getServicesByUser();
        console.log(myClassesData);
        setMyClasses(myClassesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching my classes:", error);
      }
    };
    fetchMyClasses();
  }, []);

  return (
    <div className="container mx-auto px-5">
      <h1 className="head_text text-left mb-5">
        <span className="orange_gradient">Mis clases</span>
      </h1>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          {myClasses.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <MessageWithIcon
                icon={
                  <SentimentVeryDissatisfiedIcon
                    sx={{ fontSize: "60px", color: "rgb(75, 85, 99)" }}
                  />
                }
                message="Todavía no creaste ninguna clase"
              />
              <button className="black_btn mt-5">Crear Clase</button>
            </div>
          ) : (
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {myClasses.map((myClass) => (
                <ServiceDetail
                  key={myClass.id}
                  id={myClass.id}
                  name={myClass.name}
                  cost={myClass.cost}
                  frequency={myClass.frequency}
                  category={myClass.category}
                  type={myClass.type}
                  duration={myClass.duration}
                />
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default MyClasses;
