import { useState, useEffect } from "react";
import { getServicesByUser } from "../api/apiService";
import ServiceDetail from "../components/ServiceDetail";
import Loader from "../components/Loader/Loader";
import MessageWithIcon from "../components/MessageWithIcon";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SimplifiedServiceDetail from "../components/SimplifiedServiceDetail";

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

  let content = null;

  if (loading) {
    content = <Loader />;
  } else if (myClasses.length > 0) {
    content = (
      <ul className="prompt_layout">
        {myClasses.map((myClass) => (
          <li className="mb-5" key={myClass._id}>
            <SimplifiedServiceDetail
              name={myClass.name}
              cost={myClass.cost}
              description={myClass.description}
              frequency={myClass.frequency}
              category={myClass.category}
              type={myClass.type}
              duration={myClass.duration}
            />
          </li>
        ))}
      </ul>
    );
  } else {
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
    </div>;
  }

  return (
    <div className="container mx-auto px-5">
      <h1 className="head_text text-left mb-5">
        <span className="orange_gradient">Mis clases</span>
      </h1>
      <div className="lg:col-span-9 mt-10 lg:mt-0">{content}</div>
    </div>
  );
};

export default MyClasses;
