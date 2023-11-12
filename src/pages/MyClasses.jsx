import { useState, useEffect } from "react";
import { deleteService, getServicesByUser } from "../api/apiService";
import ServiceDetail from "../components/ServiceDetail";
import Loader from "../components/Loader/Loader";
import MessageWithIcon from "../components/MessageWithIcon";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SimplifiedServiceDetail from "../components/SimplifiedServiceDetail";
import ServiceItem from "../components/ServiceItem";
import DialogBox from "../components/DialogBox";
import ConfirmationDialog from "../components/ConfirmationDialog";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MyClasses = () => {
  const [myClasses, setMyClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyClasses = async () => {
      try {
        const myClassesData = await getServicesByUser();
        setMyClasses(myClassesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching my classes:", error);
      }
    };
    fetchMyClasses();
  }, []);

  let content = null;

  const openConfirmationDialog = (serviceId) => {
    setSelectedServiceId(serviceId);
    setConfirmationOpen(true);
  };

  const closeConfirmationDialog = () => {
    setSelectedServiceId(null);
    setConfirmationOpen(false);
  };

  const handleDeleteConfirmed = async () => {
    if (selectedServiceId) {
      await handleDelete(selectedServiceId);
    }
    closeConfirmationDialog();
  };

  const handleEdit = (myClass) => {
    navigate(`/editar-clase/${myClass._id}`, { state: { myClass } });
  };

  const handleDelete = async (serviceId) => {
    try {
      await deleteService(serviceId);
      const updatedClassesData = await getServicesByUser();
      setMyClasses(updatedClassesData);
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  const handlePublish = (serviceId) => {
    // Implementa la lógica para publicar un servicio
  };

  const handleUnpublish = (serviceId) => {
    // Implementa la lógica para despublicar un servicio
  };

  if (loading) {
    content = <Loader />;
  } else if (myClasses.length > 0) {
    content = (
      <ul>
        {myClasses.map((myClass) => (
          <li key={myClass._id} className="mb-5">
            <ServiceItem
              myClass={myClass}
              onEdit={() => handleEdit(myClass)}
              onDelete={() => openConfirmationDialog(myClass._id)} // Ensure this line is correct
              onPublish={handlePublish}
              onUnpublish={handleUnpublish}
            />
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
          message="Todavía no creaste ninguna clase"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-5">
      <h1 className="head_text text-left mb-5">
        <span className="orange_gradient">Mis clases</span>
      </h1>
      <div className="flex justify-end mb-5">
        <NavLink to="/crear-clase" className="black_btn w-auto">
          <PostAddIcon className="mr-2" />
          Crear Clase
        </NavLink>
      </div>
      <div className="lg:col-span-9 mt-10 lg:mt-0">{content}</div>
      {isConfirmationOpen && (
        <DialogBox
          open={isConfirmationOpen}
          onClose={closeConfirmationDialog}
          content={
            <ConfirmationDialog
              message="¿Estás seguro de que quieres eliminar este servicio?"
              onConfirm={handleDeleteConfirmed}
              onClose={closeConfirmationDialog}
            />
          }
        />
      )}
    </div>
  );
};

export default MyClasses;
